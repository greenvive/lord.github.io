"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Calendar } from "lucide-react";
import { type Task } from "@/types";
import { PRIORITY_COLORS, PRIORITY_LABELS } from "@/lib/constants";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const isDone = task.status === "done";

  return (
    <div className="group flex items-start gap-3 py-2.5 px-3 hover:bg-gray-50 rounded-xl transition-colors">
      <Checkbox
        checked={isDone}
        onCheckedChange={onToggle}
        className="mt-0.5 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm leading-snug ${isDone ? "line-through text-gray-400" : "text-gray-800"}`}>
          {task.title}
        </p>
        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
          {task.priority && task.priority !== "none" && (
            <span className={`text-xs font-medium ${PRIORITY_COLORS[task.priority]}`}>
              {PRIORITY_LABELS[task.priority]}
            </span>
          )}
          {(task.category as any)?.name && (
            <Badge
              variant="secondary"
              className="text-xs h-4 px-1.5 py-0"
              style={{ backgroundColor: `${(task.category as any).color}20`, color: (task.category as any).color }}
            >
              {(task.category as any).name}
            </Badge>
          )}
          {task.due_date && (
            <span className="flex items-center gap-0.5 text-xs text-gray-400">
              <Calendar size={10} />
              {format(new Date(task.due_date), "M/d (EEE)", { locale: ko })}
            </span>
          )}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all shrink-0"
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        aria-label="삭제"
      >
        <Trash2 size={13} />
      </Button>
    </div>
  );
}
