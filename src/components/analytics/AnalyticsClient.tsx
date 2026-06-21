"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { format, subDays, eachDayOfInterval } from "date-fns";
import { ko } from "date-fns/locale";

interface AnalyticsClientProps {
  tasks: Array<{ status: string; priority: string; completed_at: string | null; created_at: string }>;
  habits: Array<{ id: string; name: string; repeat_days: number[] }>;
  habitLogs: Array<{ habit_id: string; log_date: string }>;
  goals: Array<{ status: string; target_value: number | null; current_value: number | null }>;
}

export function AnalyticsClient({ tasks, habits, habitLogs, goals }: AnalyticsClientProps) {
  const doneTasks = tasks.filter((t) => t.status === "done");
  const completionRate = tasks.length > 0 ? Math.round((doneTasks.length / tasks.length) * 100) : 0;

  const last7Days = eachDayOfInterval({ start: subDays(new Date(), 6), end: new Date() });

  const dailyData = last7Days.map((day) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const done = doneTasks.filter((t) => t.completed_at?.startsWith(dateStr)).length;
    const total = tasks.filter((t) => t.created_at.startsWith(dateStr)).length;
    return {
      label: format(day, "EEE", { locale: ko }),
      done,
      total,
    };
  });

  const habitStats = useMemo(() => {
    return habits.map((habit) => {
      const last30 = eachDayOfInterval({ start: subDays(new Date(), 29), end: new Date() });
      const scheduledDays = last30.filter((d) => habit.repeat_days.includes(d.getDay()));
      const loggedDays = scheduledDays.filter((d) =>
        habitLogs.some((l) => l.habit_id === habit.id && l.log_date === format(d, "yyyy-MM-dd"))
      );
      const rate = scheduledDays.length > 0 ? Math.round((loggedDays.length / scheduledDays.length) * 100) : 0;
      return { name: habit.name, rate, done: loggedDays.length, total: scheduledDays.length };
    });
  }, [habits, habitLogs]);

  const goalProgress = goals.map((g) => ({
    pct: g.target_value ? Math.min(100, Math.round(((g.current_value ?? 0) / g.target_value) * 100)) : 0,
    status: g.status,
  }));
  const avgGoalProgress = goalProgress.length > 0
    ? Math.round(goalProgress.reduce((a, b) => a + b.pct, 0) / goalProgress.length)
    : 0;

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full space-y-5">
      {/* 요약 */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "할 일 완료율", value: `${completionRate}%`, sub: `${doneTasks.length}/${tasks.length}건` },
          { label: "평균 습관 달성률", value: `${habitStats.length > 0 ? Math.round(habitStats.reduce((a, b) => a + b.rate, 0) / habitStats.length) : 0}%`, sub: "최근 30일" },
          { label: "목표 진행률", value: `${avgGoalProgress}%`, sub: `${goals.filter((g) => g.status === "done").length}/${goals.length}개 완료` },
        ].map(({ label, value, sub }) => (
          <Card key={label}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 요일별 완료 현황 */}
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-semibold text-gray-700">최근 7일 완료 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={dailyData} barSize={20}>
              <XAxis dataKey="label" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={20} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
                formatter={(val) => [`${val}건`, "완료"]}
              />
              <Bar dataKey="done" radius={[4, 4, 0, 0]} fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 습관 달성률 */}
      {habitStats.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">습관 달성률 (30일)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {habitStats.map((h) => (
              <div key={h.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700 truncate flex-1 mr-2">{h.name}</span>
                  <span className="text-xs font-medium text-gray-500 shrink-0">
                    {h.done}/{h.total}일 ({h.rate}%)
                  </span>
                </div>
                <Progress value={h.rate} className="h-1.5" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* 목표 진행 */}
      {goals.length > 0 && (
        <Card>
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-sm font-semibold text-gray-700">목표 상태</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 text-sm">
              {[
                { label: "진행 중", count: goals.filter((g) => g.status === "in_progress").length, color: "text-blue-600" },
                { label: "완료", count: goals.filter((g) => g.status === "done").length, color: "text-green-600" },
                { label: "중단", count: goals.filter((g) => g.status === "paused").length, color: "text-yellow-500" },
              ].map(({ label, count, color }) => (
                <div key={label} className="text-center flex-1">
                  <p className={`text-2xl font-bold ${color}`}>{count}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
