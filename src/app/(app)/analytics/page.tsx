import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { AnalyticsClient } from "@/components/analytics/AnalyticsClient";
import { format, subDays } from "date-fns";

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const today = format(new Date(), "yyyy-MM-dd");
  const thirtyDaysAgo = format(subDays(new Date(), 29), "yyyy-MM-dd");

  const [tasksRes, habitsRes, logsRes, goalsRes] = await Promise.all([
    supabase
      .from("tasks")
      .select("status, priority, completed_at, created_at")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .gte("created_at", `${thirtyDaysAgo}T00:00:00`),
    supabase.from("habits").select("*").eq("user_id", user!.id).eq("is_active", true),
    supabase
      .from("habit_logs")
      .select("habit_id, log_date")
      .eq("user_id", user!.id)
      .gte("log_date", thirtyDaysAgo),
    supabase
      .from("goals")
      .select("status, target_value, current_value")
      .eq("user_id", user!.id)
      .is("deleted_at", null),
  ]);

  const profile = await supabase
    .from("profiles").select("display_name, avatar_url").eq("id", user!.id).single();

  return (
    <div className="flex flex-col h-full">
      <Header title="통계" user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }} />
      <AnalyticsClient
        tasks={(tasksRes.data ?? []) as never}
        habits={(habitsRes.data ?? []) as never}
        habitLogs={(logsRes.data ?? []) as never}
        goals={(goalsRes.data ?? []) as never}
      />
    </div>
  );
}
