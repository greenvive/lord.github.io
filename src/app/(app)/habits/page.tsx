import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { HabitsClient } from "@/components/habits/HabitsClient";
import { format } from "date-fns";

export default async function HabitsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const today = format(new Date(), "yyyy-MM-dd");
  const sevenDaysAgo = format(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), "yyyy-MM-dd");

  const [habitsRes, logsRes] = await Promise.all([
    supabase.from("habits").select("*").eq("user_id", user!.id).eq("is_active", true).order("created_at"),
    supabase.from("habit_logs").select("*").eq("user_id", user!.id).gte("log_date", sevenDaysAgo).lte("log_date", today),
  ]);

  const profile = await supabase
    .from("profiles").select("display_name, avatar_url").eq("id", user!.id).single();

  return (
    <div className="flex flex-col h-full">
      <Header title="습관" user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }} />
      <HabitsClient
        userId={user!.id}
        initialHabits={(habitsRes.data ?? []) as never}
        initialLogs={(logsRes.data ?? []) as never}
      />
    </div>
  );
}
