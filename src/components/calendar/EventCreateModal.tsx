"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Event, type Category } from "@/types";

interface EventCreateModalProps {
  initialDate: Date;
  categories: Category[];
  onClose: () => void;
  onCreate: (data: Partial<Event>) => Promise<void>;
}

export function EventCreateModal({ initialDate, categories, onClose, onCreate }: EventCreateModalProps) {
  const [loading, setLoading] = useState(false);
  const dateStr = format(initialDate, "yyyy-MM-dd");
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    start_at: `${dateStr}T09:00`,
    end_at: `${dateStr}T10:00`,
    all_day: false,
    category_id: null as string | null,
    status: "scheduled" as const,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);
    await onCreate({
      ...form,
      start_at: form.all_day ? `${dateStr}T00:00:00` : new Date(form.start_at).toISOString(),
      end_at: form.all_day ? `${dateStr}T23:59:59` : new Date(form.end_at).toISOString(),
    });
    setLoading(false);
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>일정 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label>제목 *</Label>
            <Input
              placeholder="일정 제목"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              required
              autoFocus
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="all-day"
              checked={form.all_day}
              onCheckedChange={(v) => setForm((p) => ({ ...p, all_day: !!v }))}
            />
            <Label htmlFor="all-day" className="font-normal">종일</Label>
          </div>

          {!form.all_day && (
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>시작</Label>
                <Input type="datetime-local" className="h-9 text-sm" value={form.start_at}
                  onChange={(e) => setForm((p) => ({ ...p, start_at: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label>종료</Label>
                <Input type="datetime-local" className="h-9 text-sm" value={form.end_at}
                  onChange={(e) => setForm((p) => ({ ...p, end_at: e.target.value }))} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>카테고리</Label>
              <Select value={form.category_id ?? "none"} onValueChange={(v) => setForm((p) => ({ ...p, category_id: v === "none" ? null : v }))}>
                <SelectTrigger className="h-9 text-sm"><SelectValue placeholder="선택" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">없음</SelectItem>
                  {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>장소</Label>
              <Input placeholder="장소 (선택)" className="h-9 text-sm" value={form.location}
                onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>메모</Label>
            <Textarea placeholder="추가 메모 (선택)" className="text-sm resize-none" rows={2}
              value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>취소</Button>
            <Button type="submit" size="sm" className="bg-green-600 hover:bg-green-700" disabled={loading}>
              {loading ? "저장 중..." : "추가"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
