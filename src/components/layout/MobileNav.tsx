"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Calendar, CheckSquare, Target, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_NAV = [
  { href: "/today", label: "오늘", Icon: Sun },
  { href: "/calendar", label: "캘린더", Icon: Calendar },
  { href: "/tasks", label: "할 일", Icon: CheckSquare },
  { href: "/goals", label: "목표", Icon: Target },
  { href: "/habits", label: "습관", Icon: Repeat },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
      <div className="flex">
        {MOBILE_NAV.map(({ href, label, Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium gap-0.5 transition-colors",
                active ? "text-green-600" : "text-gray-400"
              )}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
