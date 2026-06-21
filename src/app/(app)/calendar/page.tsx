import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { CalendarClient } from "@/components/calendar/CalendarClient";
import { format } from "date-fns";

export default async function CalendarPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const now = new Date();
  const startOfMonth = format(new Date(now.getFullYear(), now.getMonth(), 1), "yyyy-MM-dd");
  const endOfMonth = format(new Date(now.getFullYear(), now.getMonth() + 1, 0), "yyyy-MM-dd");

  const [eventsRes, tasksRes, categoriesRes] = await Promise.all([
    supabase
      .from("events")
      .select("*, category:categories(id,name,color)")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .gte("start_at", `${startOfMonth}T00:00:00`)
      .lte("start_at", `${endOfMonth}T23:59:59`)
      .order("start_at"),
    supabase
      .from("tasks")
      .select("*, category:categories(id,name,color)")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .gte("due_date", startOfMonth)
      .lte("due_date", endOfMonth)
      .order("due_date"),
    supabase
      .from("categories")
      .select("*")
      .eq("user_id", user!.id)
      .order("sort_order"),
  ]);

  const profile = await supabase
    .from("profiles")
    .select("display_name, avatar_url")
    .eq("id", user!.id)
    .single();

  return (
    <div className="flex flex-col h-full">
      <Header
        title="캘린더"
        user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }}
      />
      <CalendarClient
        userId={user!.id}
        initialEvents={(eventsRes.data ?? []) as never}
        initialTasks={(tasksRes.data ?? []) as never}
        categories={(categoriesRes.data ?? []) as never}
      />
    </div>
  );
}
