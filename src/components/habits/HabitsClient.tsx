"use client";

import { useState } from "react";
import { format, subDays } from "date-fns";
import { ko } from "date-fns/locale";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { type Habit, type HabitLog } from "@/types";
import { WEEK_DAYS } from "@/lib/constants";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface HabitsClientProps {
  userId: string;
  initialHabits: Habit[];
  initialLogs: HabitLog[];
}

export function HabitsClient({ userId, initialHabits, initialLogs }: HabitsClientProps) {
  const supabase = createClient();
  const [habits, setHabits] = useState(initialHabits);
  const [logs, setLogs] = useState(initialLogs);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = format(new Date(), "yyyy-MM-dd");
  const todayDayOfWeek = new Date().getDay();
  const todayHabits = habits.filter((h) => h.repeat_days.includes(todayDayOfWeek));

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = subDays(new Date(), 6 - i);
    return { date: format(d, "yyyy-MM-dd"), label: format(d, "EEE", { locale: ko }) };
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
    color: "#10B981",
    repeat_days: [0, 1, 2, 3, 4, 5, 6] as number[],
    target_count: 1,
    start_date: today,
  });

  async function toggleHabit(habit: Habit) {
    const existingLog = logs.find((l) => l.habit_id === habit.id && l.log_date === today);
    if (existingLog) {
      await supabase.from("habit_logs").delete().eq("id", existingLog.id);
      setLogs((prev) => prev.filter((l) => l.id !== existingLog.id));
    } else {
      const { data, error } = await supabase
        .from("habit_logs")
        .insert({ user_id: userId, habit_id: habit.id, log_date: today, count: 1, completed_at: new Date().toISOString() })
        .select().single();
      if (!error && data) setLogs((prev) => [...prev, data]);
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (form.repeat_days.length === 0) { toast.error("반복 요일을 최소 1개 선택하세요."); return; }
    setLoading(true);
    const { data, error } = await supabase
      .from("habits")
      .insert({ user_id: userId, ...form, is_active: true })
      .select().single();
    if (error) { toast.error("저장하지 못했습니다."); setLoading(false); return; }
    setHabits((prev) => [...prev, data]);
    setShowModal(false);
    toast.success("습관을 추가했습니다.");
    setLoading(false);
  }

  function toggleRepeatDay(day: number) {
    setForm((p) => ({
      ...p,
      repeat_days: p.repeat_days.includes(day)
        ? p.repeat_days.filter((d) => d !== day)
        : [...p.repeat_days, day],
    }));
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full space-y-5">
      <div className="flex justify-end">
        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-9" onClick={() => setShowModal(true)}>
          <Plus size={14} className="mr-1" />습관 추가
        </Button>
      </div>

      {/* 오늘의 습관 */}
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">오늘의 습관</CardTitle>
        </CardHeader>
        <CardContent>
          {todayHabits.length === 0 ? (
            <p className="text-sm text-gray-400 py-3 text-center">오늘 수행할 습관이 없습니다.</p>
          ) : (
            <div className="space-y-1">
              {todayHabits.map((habit) => {
                const checked = logs.some((l) => l.habit_id === habit.id && l.log_date === today);
                return (
                  <div
                    key={habit.id}
                    className="flex items-center gap-3 py-2.5 px-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                    onClick={() => toggleHabit(habit)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked ? "border-green-500 bg-green-500" : "border-gray-300"
                      }`}
                      style={checked ? { backgroundColor: habit.color, borderColor: habit.color } : {}}
                    >
                      {checked && (
                        <svg viewBox="0 0 10 8" className="w-3 h-3 fill-none stroke-white stroke-2">
                          <path d="M1 4l2.5 2.5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm flex-1 ${checked ? "line-through text-gray-400" : "text-gray-800"}`}>
                      {habit.name}
                    </span>
                    <div className="flex gap-1">
                      {last7Days.map(({ date, label }) => {
                        const done = logs.some((l) => l.habit_id === habit.id && l.log_date === date);
                        return (
                          <div key={date} className="text-center">
                            <div className="text-xs text-gray-400 w-6">{label}</div>
                            <div
                              className={`w-5 h-5 rounded-sm mx-0.5 ${done ? "bg-green-400" : "bg-gray-100"}`}
                              style={done ? { backgroundColor: habit.color } : {}}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 전체 습관 목록 */}
      {habits.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">모든 습관</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {habits.map((habit) => (
                <div key={habit.id} className="flex items-center gap-3 py-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: habit.color }} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{habit.name}</p>
                    <p className="text-xs text-gray-400">
                      {habit.repeat_days.sort().map((d) => WEEK_DAYS[d]).join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {showModal && (
        <Dialog open onOpenChange={() => setShowModal(false)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader><DialogTitle>습관 추가</DialogTitle></DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1.5">
                <Label>습관명 *</Label>
                <Input placeholder="예: 물 2L 마시기" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required autoFocus />
              </div>
              <div className="space-y-1.5">
                <Label>반복 요일</Label>
                <div className="flex gap-1.5 flex-wrap">
                  {WEEK_DAYS.map((day, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleRepeatDay(i)}
                      className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                        form.repeat_days.includes(i)
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>색상</Label>
                  <Input type="color" value={form.color} className="h-9 cursor-pointer" onChange={(e) => setForm((p) => ({ ...p, color: e.target.value }))} />
                </div>
                <div className="space-y-1.5">
                  <Label>시작일</Label>
                  <Input type="date" className="h-9 text-sm" value={form.start_date} onChange={(e) => setForm((p) => ({ ...p, start_date: e.target.value }))} />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <Button type="button" variant="outline" size="sm" onClick={() => setShowModal(false)}>취소</Button>
                <Button type="submit" size="sm" className="bg-green-600 hover:bg-green-700" disabled={loading}>{loading ? "저장 중..." : "추가"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
