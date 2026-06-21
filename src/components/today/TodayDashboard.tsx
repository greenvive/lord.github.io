"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Task, type Event, type Habit, type HabitLog, type Goal } from "@/types";
import { PRIORITY_COLORS, PRIORITY_LABELS } from "@/lib/constants";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { Clock, MapPin, Target } from "lucide-react";

interface TodayDashboardProps {
  userId: string;
  tasks: Task[];
  events: Event[];
  habits: Habit[];
  habitLogs: HabitLog[];
  goals: Goal[];
  displayName: string;
  todayLabel: string;
  greeting: string;
}

export function TodayDashboard({
  userId,
  tasks: initialTasks,
  events,
  habits,
  habitLogs: initialHabitLogs,
  goals,
  displayName,
  todayLabel,
  greeting,
}: TodayDashboardProps) {
  const supabase = createClient();
  const [tasks, setTasks] = useState(initialTasks);
  const [habitLogs, setHabitLogs] = useState(initialHabitLogs);

  const doneTasks = tasks.filter((t) => t.status === "done");
  const progress = tasks.length > 0 ? Math.round((doneTasks.length / tasks.length) * 100) : 0;

  async function toggleTask(task: Task) {
    const newStatus = task.status === "done" ? "todo" : "done";
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus, completed_at: newStatus === "done" ? new Date().toISOString() : null })
      .eq("id", task.id);

    if (error) {
      toast.error("저장하지 못했습니다.");
      return;
    }
    setTasks((prev) => prev.map((t) => t.id === task.id ? { ...t, status: newStatus } : t));
  }

  async function toggleHabit(habit: Habit) {
    const today = format(new Date(), "yyyy-MM-dd");
    const existingLog = habitLogs.find((l) => l.habit_id === habit.id);

    if (existingLog) {
      await supabase.from("habit_logs").delete().eq("id", existingLog.id);
      setHabitLogs((prev) => prev.filter((l) => l.id !== existingLog.id));
    } else {
      const { data, error } = await supabase
        .from("habit_logs")
        .insert({ user_id: userId, habit_id: habit.id, log_date: today, count: 1, completed_at: new Date().toISOString() })
        .select()
        .single();
      if (!error && data) {
        setHabitLogs((prev) => [...prev, data]);
      }
    }
  }

  const todayHabits = habits.filter((h) => {
    const day = new Date().getDay();
    return h.repeat_days.includes(day);
  });

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5 max-w-3xl mx-auto w-full">
      {/* 날짜 & 인사말 */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">{todayLabel}</p>
        <h2 className="text-xl font-semibold text-gray-900 mt-0.5">
          {greeting}, {displayName}님 👋
        </h2>
      </div>

      {/* 진행률 */}
      <Card>
        <CardContent className="pt-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">오늘 진행률</span>
            <span className="text-sm font-bold text-green-600">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-gray-400 mt-1.5">
            {doneTasks.length} / {tasks.length}개 완료
          </p>
        </CardContent>
      </Card>

      {/* 오늘 일정 */}
      {events.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">오늘 일정</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {events.map((event) => (
              <div key={event.id} className="flex items-start gap-3 py-1.5">
                <div
                  className="w-1 h-10 rounded-full shrink-0 mt-0.5"
                  style={{ backgroundColor: (event.category as any)?.color ?? "#6B7280" }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                    {!event.all_day && (
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {format(new Date(event.start_at), "HH:mm", { locale: ko })}
                        {" — "}
                        {format(new Date(event.end_at), "HH:mm", { locale: ko })}
                      </span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {event.location}
                      </span>
                    )}
                    {event.all_day && <span>종일</span>}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* 할 일 */}
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">오늘 할 일</CardTitle>
        </CardHeader>
        <CardContent>
          {tasks.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">오늘 할 일을 추가해보세요.</p>
          ) : (
            <div className="space-y-1">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-start gap-3 py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors"
                >
                  <Checkbox
                    checked={task.status === "done"}
                    onCheckedChange={() => toggleTask(task)}
                    className="mt-0.5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${task.status === "done" ? "line-through text-gray-400" : "text-gray-800"}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      {task.priority !== "none" && (
                        <span className={`text-xs font-medium ${PRIORITY_COLORS[task.priority]}`}>
                          {PRIORITY_LABELS[task.priority]}
                        </span>
                      )}
                      {(task.category as any) && (
                        <Badge variant="secondary" className="text-xs h-4 px-1.5">
                          {(task.category as any).name}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 습관 */}
      {todayHabits.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">오늘의 습관</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {todayHabits.map((habit) => {
                const checked = habitLogs.some((l) => l.habit_id === habit.id);
                return (
                  <div
                    key={habit.id}
                    className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors cursor-pointer"
                    onClick={() => toggleHabit(habit)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        checked ? "border-green-500 bg-green-500" : "border-gray-300"
                      }`}
                    >
                      {checked && (
                        <svg viewBox="0 0 10 8" className="w-3 h-3 text-white fill-none stroke-white stroke-2">
                          <path d="M1 4l2.5 2.5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${checked ? "line-through text-gray-400" : "text-gray-800"}`}>
                      {habit.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 목표 */}
      {goals.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Target size={14} />
              진행 중인 목표
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {goals.map((goal) => {
              const pct = goal.target_value
                ? Math.min(100, Math.round(((goal.current_value ?? 0) / goal.target_value) * 100))
                : 0;
              return (
                <div key={goal.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-800">{goal.title}</span>
                    <span className="text-xs font-medium text-gray-500">{pct}%</span>
                  </div>
                  <Progress value={pct} className="h-1.5" />
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
