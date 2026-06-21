import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { GoalsClient } from "@/components/goals/GoalsClient";

export default async function GoalsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: goals } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", user!.id)
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  const profile = await supabase
    .from("profiles")
    .select("display_name, avatar_url")
    .eq("id", user!.id)
    .single();

  return (
    <div className="flex flex-col h-full">
      <Header
        title="목표"
        user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }}
      />
      <GoalsClient userId={user!.id} initialGoals={(goals ?? []) as never} />
    </div>
  );
}
