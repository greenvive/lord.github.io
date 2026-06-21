"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun, Calendar, CheckSquare, Target, Repeat,
  FileText, BarChart2, Settings, ChevronLeft, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { useState } from "react";

const ICON_MAP: Record<string, React.ElementType> = {
  sun: Sun,
  calendar: Calendar,
  "check-square": CheckSquare,
  target: Target,
  repeat: Repeat,
  "file-text": FileText,
  "bar-chart-2": BarChart2,
  settings: Settings,
};

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col bg-white border-r border-gray-100 transition-all duration-200 shrink-0",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex items-center justify-between h-14 px-4 border-b border-gray-100">
        {!collapsed && (
          <span className="text-lg font-bold text-gray-900 tracking-tight">Planary</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1 rounded hover:bg-gray-100 text-gray-400"
          aria-label={collapsed ? "사이드바 펼치기" : "사이드바 접기"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-0.5 px-2">
        {NAV_ITEMS.map((item) => {
          const Icon = ICON_MAP[item.icon];
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-green-50 text-green-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
              title={collapsed ? item.label : undefined}
            >
              {Icon && <Icon size={18} className="shrink-0" />}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
