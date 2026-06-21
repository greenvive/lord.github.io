import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { TasksClient } from "@/components/tasks/TasksClient";

export default async function TasksPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const [tasksRes, categoriesRes] = await Promise.all([
    supabase
      .from("tasks")
      .select("*, category:categories(id,name,color)")
      .eq("user_id", user!.id)
      .is("deleted_at", null)
      .is("parent_task_id", null)
      .order("sort_order"),
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
        title="할 일"
        user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }}
      />
      <TasksClient
        userId={user!.id}
        initialTasks={(tasksRes.data ?? []) as never}
        categories={(categoriesRes.data ?? []) as never}
      />
    </div>
  );
}
