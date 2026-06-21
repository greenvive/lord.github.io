"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Profile, type UserSettings, type Category } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface SettingsClientProps {
  userId: string;
  email: string;
  profile: Profile | null;
  settings: UserSettings | null;
  categories: Category[];
}

export function SettingsClient({ userId, email, profile, settings, categories }: SettingsClientProps) {
  const supabase = createClient();
  const router = useRouter();
  const [displayName, setDisplayName] = useState(profile?.display_name ?? "");
  const [theme, setTheme] = useState(settings?.theme ?? "system");
  const [weekStart, setWeekStart] = useState(String(settings?.week_start_day ?? 0));
  const [timeFormat, setTimeFormat] = useState(settings?.time_format ?? "24h");
  const [saving, setSaving] = useState(false);

  async function saveProfile() {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, display_name: displayName, updated_at: new Date().toISOString() });
    if (error) { toast.error("저장하지 못했습니다."); } else { toast.success("프로필을 저장했습니다."); }
    setSaving(false);
  }

  async function saveSettings() {
    setSaving(true);
    const { error } = await supabase
      .from("user_settings")
      .upsert({
        user_id: userId,
        theme,
        week_start_day: Number(weekStart),
        time_format: timeFormat,
        updated_at: new Date().toISOString(),
      });
    if (error) { toast.error("저장하지 못했습니다."); } else { toast.success("설정을 저장했습니다."); }
    setSaving(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-2xl mx-auto w-full space-y-5">
      {/* 프로필 */}
      <Card>
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">프로필</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={profile?.avatar_url ?? undefined} />
              <AvatarFallback className="bg-green-100 text-green-700 text-lg font-semibold">
                {displayName.slice(0, 2).toUpperCase() || "ME"}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{displayName || "이름 없음"}</p>
              <p className="text-xs text-gray-400">{email}</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>이름</Label>
            <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="표시 이름" className="h-9 text-sm" />
          </div>
          <Button size="sm" onClick={saveProfile} disabled={saving} className="bg-green-600 hover:bg-green-700">
            {saving ? "저장 중..." : "프로필 저장"}
          </Button>
        </CardContent>
      </Card>

      {/* 화면 설정 */}
      <Card>
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">화면 설정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>테마</Label>
              <Select value={theme} onValueChange={(v) => v && setTheme(v as typeof theme)}>
                <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">라이트</SelectItem>
                  <SelectItem value="dark">다크</SelectItem>
                  <SelectItem value="system">시스템</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>주 시작 요일</Label>
              <Select value={weekStart} onValueChange={(v) => v && setWeekStart(v)}>
                <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">일요일</SelectItem>
                  <SelectItem value="1">월요일</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>시간 표시</Label>
              <Select value={timeFormat} onValueChange={(v) => v && setTimeFormat(v as typeof timeFormat)}>
                <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">24시간</SelectItem>
                  <SelectItem value="12h">12시간 (AM/PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button size="sm" onClick={saveSettings} disabled={saving} className="bg-green-600 hover:bg-green-700">
            {saving ? "저장 중..." : "설정 저장"}
          </Button>
        </CardContent>
      </Card>

      {/* 카테고리 */}
      <Card>
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">카테고리</CardTitle>
        </CardHeader>
        <CardContent>
          {categories.length === 0 ? (
            <p className="text-sm text-gray-400">카테고리가 없습니다.</p>
          ) : (
            <div className="space-y-2">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-3 py-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-sm text-gray-700">{cat.name}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 계정 */}
      <Card>
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">계정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full" onClick={handleLogout}>
            로그아웃
          </Button>
          <Button variant="outline" size="sm" className="w-full text-red-500 border-red-200 hover:bg-red-50">
            회원 탈퇴
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
