import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { TodayDashboard } from "@/components/today/TodayDashboard";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export default async function TodayPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const today = format(new Date(), "yyyy-MM-dd");

  const [tasksRes, eventsRes, habitsRes, habitLogsRes, goalsRes] = await Promise.all([
    supabase
      .from("tasks")
      .select("*, category:categories(id,name,color)")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .or(`due_date.eq.${today},due_date.is.null`)
      .neq("status", "done")
      .order("sort_order"),
    supabase
      .from("events")
      .select("*, category:categories(id,name,color)")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .gte("start_at", `${today}T00:00:00`)
      .lte("start_at", `${today}T23:59:59`)
      .order("start_at"),
    supabase
      .from("habits")
      .select("*")
      .eq("user_id", user!.id)
      .eq("is_active", true)
      .lte("start_date", today),
    supabase
      .from("habit_logs")
      .select("*")
      .eq("user_id", user!.id)
      .eq("log_date", today),
    supabase
      .from("goals")
      .select("*")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .eq("status", "in_progress")
      .limit(3),
  ]);

  const profile = await supabase
    .from("profiles")
    .select("display_name, avatar_url")
    .eq("id", user!.id)
    .single();

  const tasks = tasksRes.data ?? [];
  const events = eventsRes.data ?? [];
  const habits = habitsRes.data ?? [];
  const habitLogs = habitLogsRes.data ?? [];
  const goals = goalsRes.data ?? [];
  const displayName = profile.data?.display_name ?? user?.email?.split("@")[0] ?? "사용자";

  const todayLabel = format(new Date(), "M월 d일 (EEE)", { locale: ko });

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "좋은 아침이에요";
    if (hour < 18) return "좋은 오후예요";
    return "좋은 저녁이에요";
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        title="오늘"
        user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }}
      />
      <TodayDashboard
        userId={user!.id}
        tasks={tasks as never}
        events={events as never}
        habits={habits as never}
        habitLogs={habitLogs as never}
        goals={goals as never}
        displayName={displayName}
        todayLabel={todayLabel}
        greeting={greeting()}
      />
    </div>
  );
}
