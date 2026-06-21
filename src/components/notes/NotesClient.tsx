"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Search, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type Note } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export function NotesClient({ userId, initialNotes }: { userId: string; initialNotes: Note[] }) {
  const supabase = createClient();
  const [notes, setNotes] = useState(initialNotes);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(notes[0]?.id ?? null);
  const [editContent, setEditContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [saving, setSaving] = useState(false);

  const selected = notes.find((n) => n.id === selectedId);

  useEffect(() => {
    if (selected) {
      setEditTitle(selected.title);
      setEditContent(selected.content);
    }
  }, [selectedId]);

  const saveNote = useCallback(async () => {
    if (!selectedId) return;
    setSaving(true);
    await supabase
      .from("notes")
      .update({ title: editTitle, content: editContent, updated_at: new Date().toISOString() })
      .eq("id", selectedId);
    setNotes((prev) => prev.map((n) => n.id === selectedId ? { ...n, title: editTitle, content: editContent } : n));
    setSaving(false);
  }, [selectedId, editTitle, editContent]);

  useEffect(() => {
    const timer = setTimeout(saveNote, 1000);
    return () => clearTimeout(timer);
  }, [editTitle, editContent]);

  async function createNote() {
    const { data, error } = await supabase
      .from("notes")
      .insert({ user_id: userId, title: "새 메모", content: "", is_favorite: false, is_archived: false })
      .select().single();
    if (error) { toast.error("저장하지 못했습니다."); return; }
    setNotes((prev) => [data, ...prev]);
    setSelectedId(data.id);
  }

  async function deleteNote(noteId: string) {
    await supabase.from("notes").update({ deleted_at: new Date().toISOString() }).eq("id", noteId);
    setNotes((prev) => prev.filter((n) => n.id !== noteId));
    if (selectedId === noteId) setSelectedId(notes.find((n) => n.id !== noteId)?.id ?? null);
    toast.success("메모를 삭제했습니다.");
  }

  async function toggleFavorite(note: Note) {
    await supabase.from("notes").update({ is_favorite: !note.is_favorite }).eq("id", note.id);
    setNotes((prev) => prev.map((n) => n.id === note.id ? { ...n, is_favorite: !n.is_favorite } : n));
  }

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* 목록 */}
      <div className="w-64 border-r border-gray-100 flex flex-col shrink-0 bg-white">
        <div className="p-3 space-y-2">
          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 h-8" onClick={createNote}>
            <Plus size={13} className="mr-1" />새 메모
          </Button>
          <div className="relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input placeholder="메모 검색..." className="pl-7 h-8 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filtered.map((note) => (
            <div
              key={note.id}
              className={`group px-3 py-2.5 cursor-pointer border-b border-gray-50 transition-colors ${
                selectedId === note.id ? "bg-green-50" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedId(note.id)}
            >
              <div className="flex items-start justify-between gap-1">
                <p className="text-xs font-medium text-gray-800 truncate flex-1">{note.title || "제목 없음"}</p>
                <button
                  className="shrink-0 text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(note); }}
                >
                  <Star size={11} fill={note.is_favorite ? "currentColor" : "none"} className={note.is_favorite ? "text-yellow-400" : ""} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 truncate">{note.content || "내용 없음"}</p>
              <p className="text-xs text-gray-300 mt-0.5">{format(new Date(note.updated_at), "M/d", { locale: ko })}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-8">메모가 없습니다.</p>
          )}
        </div>
      </div>

      {/* 편집기 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selected ? (
          <>
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border-none shadow-none text-base font-semibold p-0 h-auto focus-visible:ring-0 bg-transparent"
                placeholder="제목"
              />
              <div className="flex items-center gap-1 shrink-0">
                {saving && <span className="text-xs text-gray-400">저장 중...</span>}
                <Button
                  variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-red-500"
                  onClick={() => deleteNote(selected.id)}
                >
                  <Trash2 size={13} />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pt-4">
              <Textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full h-full min-h-[400px] resize-none border-none shadow-none p-0 text-sm text-gray-800 focus-visible:ring-0 bg-transparent"
                placeholder="마크다운으로 메모를 작성하세요..."
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-sm mb-2">메모를 선택하거나 새로 만드세요</p>
              <Button variant="ghost" size="sm" className="text-green-600" onClick={createNote}>
                <Plus size={14} className="mr-1" />새 메모
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
