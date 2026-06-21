"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Task, type Category, type Priority } from "@/types";

interface TaskCreateModalProps {
  categories: Category[];
  onClose: () => void;
  onCreate: (data: Partial<Task>) => Promise<void>;
}

export function TaskCreateModal({ categories, onClose, onCreate }: TaskCreateModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Partial<Task>>({
    title: "",
    description: "",
    priority: "medium",
    status: "todo",
    due_date: null,
    category_id: null,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title?.trim()) return;
    setLoading(true);
    await onCreate(form);
    setLoading(false);
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>할 일 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="task-title">제목 *</Label>
            <Input
              id="task-title"
              placeholder="할 일 내용을 입력하세요"
              value={form.title ?? ""}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              required
              autoFocus
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>우선순위</Label>
              <Select
                value={form.priority ?? "medium"}
                onValueChange={(v) => setForm((p) => ({ ...p, priority: v as Priority }))}
              >
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">긴급</SelectItem>
                  <SelectItem value="high">높음</SelectItem>
                  <SelectItem value="medium">보통</SelectItem>
                  <SelectItem value="low">낮음</SelectItem>
                  <SelectItem value="none">없음</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>카테고리</Label>
              <Select
                value={form.category_id ?? "none"}
                onValueChange={(v) => setForm((p) => ({ ...p, category_id: v === "none" ? null : v }))}
              >
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">없음</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="due-date">마감일</Label>
            <Input
              id="due-date"
              type="date"
              className="h-9 text-sm"
              value={form.due_date ?? ""}
              onChange={(e) => setForm((p) => ({ ...p, due_date: e.target.value || null }))}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="task-desc">메모</Label>
            <Textarea
              id="task-desc"
              placeholder="추가 메모 (선택)"
              className="text-sm resize-none"
              rows={2}
              value={form.description ?? ""}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            />
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
