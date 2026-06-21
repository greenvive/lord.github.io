import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components/layout/Header";
import { SettingsClient } from "@/components/settings/SettingsClient";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const [profileRes, settingsRes, categoriesRes] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user!.id).single(),
    supabase.from("user_settings").select("*").eq("user_id", user!.id).single(),
    supabase.from("categories").select("*").eq("user_id", user!.id).order("sort_order"),
  ]);

  return (
    <div className="flex flex-col h-full">
      <Header
        title="설정"
        user={{ email: user?.email, display_name: profileRes.data?.display_name, avatar_url: profileRes.data?.avatar_url }}
      />
      <SettingsClient
        userId={user!.id}
        email={user?.email ?? ""}
        profile={profileRes.data}
        settings={settingsRes.data}
        categories={(categoriesRes.data ?? []) as never}
      />
    </div>
  );
}
