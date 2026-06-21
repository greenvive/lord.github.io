"use client";

import { useState } from "react";
import { Plus, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Task, type Category, type TaskStatus } from "@/types";
import { TaskItem } from "./TaskItem";
import { TaskCreateModal } from "./TaskCreateModal";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface TasksClientProps {
  userId: string;
  initialTasks: Task[];
  categories: Category[];
}

const TABS: { value: TaskStatus | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "todo", label: "미시작" },
  { value: "in_progress", label: "진행 중" },
  { value: "done", label: "완료" },
];

export function TasksClient({ userId, initialTasks, categories }: TasksClientProps) {
  const supabase = createClient();
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState<TaskStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = tasks.filter((t) => {
    const matchStatus = activeTab === "all" || t.status === activeTab;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  async function handleToggle(task: Task) {
    const newStatus: TaskStatus = task.status === "done" ? "todo" : "done";
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus, completed_at: newStatus === "done" ? new Date().toISOString() : null })
      .eq("id", task.id);

    if (error) { toast.error("저장하지 못했습니다."); return; }
    setTasks((prev) => prev.map((t) => t.id === task.id ? { ...t, status: newStatus } : t));
  }

  async function handleDelete(taskId: string) {
    const { error } = await supabase
      .from("tasks")
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", taskId);

    if (error) { toast.error("삭제하지 못했습니다."); return; }
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    toast.success("할 일을 삭제했습니다.");
  }

  async function handleCreate(data: Partial<Task>) {
    const { data: newTask, error } = await supabase
      .from("tasks")
      .insert({ ...data, user_id: userId, status: "todo", sort_order: tasks.length })
      .select("*, category:categories(id,name,color)")
      .single();

    if (error) { toast.error("저장하지 못했습니다."); return; }
    setTasks((prev) => [...prev, newTask]);
    setShowModal(false);
    toast.success("할 일을 추가했습니다.");
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full">
      {/* 검색 + 추가 */}
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="할 일 검색..."
            className="pl-8 h-9 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-9" onClick={() => setShowModal(true)}>
          <Plus size={15} className="mr-1" />
          추가
        </Button>
      </div>

      {/* 탭 */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TaskStatus | "all")} className="mb-4">
        <TabsList className="h-8">
          {TABS.map(({ value, label }) => (
            <TabsTrigger key={value} value={value} className="text-xs px-3 h-7">
              {label}
              {value !== "all" && (
                <span className="ml-1 text-xs text-gray-400">
                  ({tasks.filter((t) => t.status === value).length})
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* 목록 */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-sm">
            {search ? "검색 결과가 없습니다." : "할 일이 없습니다."}
          </p>
          {!search && (
            <Button variant="ghost" size="sm" className="mt-2 text-green-600" onClick={() => setShowModal(true)}>
              <Plus size={14} className="mr-1" /> 할 일 추가
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-1">
          {filtered.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => handleToggle(task)}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      )}

      {showModal && (
        <TaskCreateModal
          categories={categories}
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}
