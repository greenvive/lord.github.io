import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { NotesClient } from "@/components/notes/NotesClient";

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: notes } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user!.id)
    .is("deleted_at", null)
    .eq("is_archived", false)
    .order("updated_at", { ascending: false });

  const profile = await supabase
    .from("profiles").select("display_name, avatar_url").eq("id", user!.id).single();

  return (
    <div className="flex flex-col h-full">
      <Header title="메모" user={{ email: user?.email, display_name: profile.data?.display_name, avatar_url: profile.data?.avatar_url }} />
      <NotesClient userId={user!.id} initialNotes={(notes ?? []) as never} />
    </div>
  );
}
