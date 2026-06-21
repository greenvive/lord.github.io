"use client";

import { Bell, Plus, Search, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  user?: { email?: string; display_name?: string; avatar_url?: string | null } | null;
}

export function Header({ title, user }: HeaderProps) {
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  const initials = user?.display_name
    ? user.display_name.slice(0, 2).toUpperCase()
    : user?.email?.slice(0, 2).toUpperCase() ?? "ME";

  return (
    <header className="h-14 border-b border-gray-100 bg-white flex items-center justify-between px-4 md:px-6 shrink-0">
      <h1 className="text-base font-semibold text-gray-900">{title}</h1>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-500" aria-label="검색">
          <Search size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500" aria-label="빠른 추가">
          <Plus size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500" aria-label="알림">
          <Bell size={18} />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="ml-1 focus:outline-none" aria-label="프로필 메뉴">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar_url ?? undefined} />
                <AvatarFallback className="bg-green-100 text-green-700 text-xs font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <User size={14} className="mr-2" />
              설정
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
              <LogOut size={14} className="mr-2" />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
