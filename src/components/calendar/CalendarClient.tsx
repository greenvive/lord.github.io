"use client";

import { useState } from "react";
import {
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isToday,
} from "date-fns";
import { ko } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Event, type Task, type Category } from "@/types";
import { EventCreateModal } from "./EventCreateModal";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface CalendarClientProps {
  userId: string;
  initialEvents: Event[];
  initialTasks: Task[];
  categories: Category[];
}

export function CalendarClient({ userId, initialEvents, initialTasks, categories }: CalendarClientProps) {
  const supabase = createClient();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start: calStart, end: calEnd });

  function getEventsForDay(day: Date) {
    return events.filter((e) => isSameDay(new Date(e.start_at), day));
  }

  function getTasksForDay(day: Date) {
    const dateStr = format(day, "yyyy-MM-dd");
    return initialTasks.filter((t) => t.due_date === dateStr);
  }

  async function handleCreateEvent(data: Partial<Event>) {
    const { data: newEvent, error } = await supabase
      .from("events")
      .insert({ ...data, user_id: userId })
      .select("*, category:categories(id,name,color)")
      .single();

    if (error) { toast.error("저장하지 못했습니다."); return; }
    setEvents((prev) => [...prev, newEvent]);
    setShowModal(false);
    toast.success("일정을 추가했습니다.");
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentDate((d) => subMonths(d, 1))}>
            <ChevronLeft size={14} />
          </Button>
          <h2 className="text-base font-semibold text-gray-900 min-w-[120px] text-center">
            {format(currentDate, "yyyy년 M월", { locale: ko })}
          </h2>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentDate((d) => addMonths(d, 1))}>
            <ChevronRight size={14} />
          </Button>
          <Button variant="ghost" size="sm" className="text-xs h-8" onClick={() => setCurrentDate(new Date())}>오늘</Button>
        </div>
        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-8" onClick={() => { setSelectedDate(new Date()); setShowModal(true); }}>
          <Plus size={14} className="mr-1" />일정 추가
        </Button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-400 mb-1">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="py-1.5">{d}</div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 border-l border-t border-gray-100 rounded-xl overflow-hidden">
        {days.map((day) => {
          const dayEvents = getEventsForDay(day);
          const dayTasks = getTasksForDay(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isCurrentDay = isToday(day);

          return (
            <div
              key={day.toISOString()}
              className={`min-h-[80px] border-r border-b border-gray-100 p-1.5 cursor-pointer hover:bg-gray-50 transition-colors ${
                !isCurrentMonth ? "bg-gray-50/50" : "bg-white"
              }`}
              onClick={() => { setSelectedDate(day); setShowModal(true); }}
            >
              <div className={`w-6 h-6 flex items-center justify-center text-xs font-medium mb-1 rounded-full ${
                isCurrentDay
                  ? "bg-green-600 text-white"
                  : isCurrentMonth ? "text-gray-700" : "text-gray-300"
              }`}>
                {format(day, "d")}
              </div>
              <div className="space-y-0.5">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="text-xs truncate px-1.5 py-0.5 rounded text-white font-medium"
                    style={{ backgroundColor: (event.category as any)?.color ?? "#6B7280" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {event.title}
                  </div>
                ))}
                {dayTasks.slice(0, 1).map((task) => (
                  <div
                    key={task.id}
                    className="text-xs truncate px-1.5 py-0.5 rounded bg-blue-50 text-blue-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ✓ {task.title}
                  </div>
                ))}
                {(dayEvents.length + dayTasks.length) > 3 && (
                  <div className="text-xs text-gray-400 px-1">
                    +{dayEvents.length + dayTasks.length - 3}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <EventCreateModal
          initialDate={selectedDate ?? new Date()}
          categories={categories}
          onClose={() => setShowModal(false)}
          onCreate={handleCreateEvent}
        />
      )}
    </div>
  );
}
