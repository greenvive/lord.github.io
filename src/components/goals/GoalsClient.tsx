"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Goal, type GoalStatus, type GoalType } from "@/types";
import { GOAL_STATUS_LABELS, GOAL_TYPE_LABELS } from "@/lib/constants";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const STATUS_COLORS: Record<GoalStatus, string> = {
  not_started: "bg-gray-100 text-gray-600",
  in_progress: "bg-blue-50 text-blue-600",
  done: "bg-green-50 text-green-600",
  paused: "bg-yellow-50 text-yellow-600",
  archived: "bg-gray-50 text-gray-400",
};

export function GoalsClient({ userId, initialGoals }: { userId: string; initialGoals: Goal[] }) {
  const supabase = createClient();
  const [goals, setGoals] = useState(initialGoals);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    goal_type: "numeric" as GoalType,
    status: "in_progress" as GoalStatus,
    start_date: format(new Date(), "yyyy-MM-dd"),
    end_date: "",
    target_value: "",
    current_value: "0",
    unit: "",
    color: "#10B981",
  });

  const active = goals.filter((g) => g.status === "in_progress");
  const others = goals.filter((g) => g.status !== "in_progress");

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("goals")
      .insert({
        user_id: userId,
        title: form.title,
        description: form.description || null,
        goal_type: form.goal_type,
        status: form.status,
        start_date: form.start_date,
        end_date: form.end_date || null,
        target_value: form.target_value ? Number(form.target_value) : null,
        current_value: Number(form.current_value),
        unit: form.unit || null,
        color: form.color,
      })
      .select()
      .single();

    if (error) { toast.error("저장하지 못했습니다."); setLoading(false); return; }
    setGoals((prev) => [data, ...prev]);
    setShowModal(false);
    toast.success("목표를 추가했습니다.");
    setLoading(false);
  }

  async function handleUpdateValue(goal: Goal, delta: number) {
    const newVal = Math.max(0, (goal.current_value ?? 0) + delta);
    const isComplete = goal.target_value != null && newVal >= goal.target_value;
    const { error } = await supabase
      .from("goals")
      .update({ current_value: newVal, status: isComplete ? "done" : goal.status })
      .eq("id", goal.id);

    if (error) { toast.error("저장하지 못했습니다."); return; }
    setGoals((prev) => prev.map((g) => g.id === goal.id
      ? { ...g, current_value: newVal, status: isComplete ? "done" : g.status }
      : g));
  }

  const GoalCard = ({ goal }: { goal: Goal }) => {
    const pct = goal.target_value
      ? Math.min(100, Math.round(((goal.current_value ?? 0) / goal.target_value) * 100))
      : 0;
    return (
      <Card className="hover:shadow-sm transition-shadow">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0 mr-2">
              <h3 className="font-medium text-gray-900 text-sm leading-snug">{goal.title}</h3>
              {goal.description && <p className="text-xs text-gray-400 mt-0.5 truncate">{goal.description}</p>}
            </div>
            <Badge className={`text-xs shrink-0 ${STATUS_COLORS[goal.status as GoalStatus]}`} variant="secondary">
              {GOAL_STATUS_LABELS[goal.status]}
            </Badge>
          </div>

          {goal.goal_type !== "checklist" && goal.target_value != null && (
            <div className="mt-3 space-y-1">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{goal.current_value ?? 0}{goal.unit ? ` ${goal.unit}` : ""}</span>
                <span className="font-medium text-gray-700">{pct}%</span>
                <span>{goal.target_value}{goal.unit ? ` ${goal.unit}` : ""}</span>
              </div>
              <Progress value={pct} className="h-1.5" style={{ "--progress-color": goal.color } as React.CSSProperties} />
              {goal.status === "in_progress" && (
                <div className="flex gap-1 pt-1">
                  <Button variant="outline" size="sm" className="h-6 text-xs flex-1" onClick={() => handleUpdateValue(goal, -1)}>−1</Button>
                  <Button variant="outline" size="sm" className="h-6 text-xs flex-1" onClick={() => handleUpdateValue(goal, 1)}>+1</Button>
                </div>
              )}
            </div>
          )}

          {goal.end_date && (
            <p className="text-xs text-gray-400 mt-2">
              마감: {format(new Date(goal.end_date), "yyyy. M. d (EEE)", { locale: ko })}
            </p>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full">
      <div className="flex justify-end mb-4">
        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-9" onClick={() => setShowModal(true)}>
          <Plus size={14} className="mr-1" />목표 추가
        </Button>
      </div>

      {goals.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-sm">아직 목표가 없습니다.</p>
          <Button variant="ghost" size="sm" className="mt-2 text-green-600" onClick={() => setShowModal(true)}>
            <Plus size={14} className="mr-1" />첫 목표 세우기
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {active.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">진행 중</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.map((g) => <GoalCard key={g.id} goal={g} />)}
              </div>
            </div>
          )}
          {others.length > 0 && (
            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">기타</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {others.map((g) => <GoalCard key={g.id} goal={g} />)}
              </div>
            </div>
          )}
        </div>
      )}

      {showModal && (
        <Dialog open onOpenChange={() => setShowModal(false)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader><DialogTitle>목표 추가</DialogTitle></DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1.5">
                <Label>목표명 *</Label>
                <Input placeholder="목표를 입력하세요" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} required autoFocus />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>유형</Label>
                  <Select value={form.goal_type} onValueChange={(v) => setForm((p) => ({ ...p, goal_type: v as GoalType }))}>
                    <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {Object.entries(GOAL_TYPE_LABELS).map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>색상</Label>
                  <Input type="color" value={form.color} className="h-9 cursor-pointer" onChange={(e) => setForm((p) => ({ ...p, color: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1.5">
                  <Label>목표값</Label>
                  <Input placeholder="100" className="h-9 text-sm" value={form.target_value} onChange={(e) => setForm((p) => ({ ...p, target_value: e.target.value }))} />
                </div>
                <div className="space-y-1.5">
                  <Label>현재값</Label>
                  <Input placeholder="0" className="h-9 text-sm" value={form.current_value} onChange={(e) => setForm((p) => ({ ...p, current_value: e.target.value }))} />
                </div>
                <div className="space-y-1.5">
                  <Label>단위</Label>
                  <Input placeholder="회, km…" className="h-9 text-sm" value={form.unit} onChange={(e) => setForm((p) => ({ ...p, unit: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>시작일</Label>
                  <Input type="date" className="h-9 text-sm" value={form.start_date} onChange={(e) => setForm((p) => ({ ...p, start_date: e.target.value }))} />
                </div>
                <div className="space-y-1.5">
                  <Label>종료일</Label>
                  <Input type="date" className="h-9 text-sm" value={form.end_date} onChange={(e) => setForm((p) => ({ ...p, end_date: e.target.value }))} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>설명</Label>
                <Textarea placeholder="목표 설명 (선택)" className="text-sm resize-none" rows={2} value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} />
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
