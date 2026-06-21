export const PRIORITY_LABELS: Record<string, string> = {
  urgent: "긴급",
  high: "높음",
  medium: "보통",
  low: "낮음",
  none: "없음",
};

export const PRIORITY_COLORS: Record<string, string> = {
  urgent: "text-red-500",
  high: "text-orange-500",
  medium: "text-blue-500",
  low: "text-gray-400",
  none: "text-gray-300",
};

export const TASK_STATUS_LABELS: Record<string, string> = {
  todo: "미시작",
  in_progress: "진행 중",
  done: "완료",
  hold: "보류",
  cancelled: "취소",
};

export const EVENT_STATUS_LABELS: Record<string, string> = {
  scheduled: "예정",
  in_progress: "진행 중",
  done: "완료",
  cancelled: "취소",
};

export const GOAL_STATUS_LABELS: Record<string, string> = {
  not_started: "진행 전",
  in_progress: "진행 중",
  done: "완료",
  paused: "중단",
  archived: "보관",
};

export const GOAL_TYPE_LABELS: Record<string, string> = {
  count: "횟수형",
  numeric: "수치형",
  checklist: "체크리스트형",
  duration: "기간형",
};

export const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const DEFAULT_CATEGORIES = [
  { name: "업무", color: "#3B82F6", icon: "briefcase" },
  { name: "개인", color: "#8B5CF6", icon: "user" },
  { name: "공부", color: "#10B981", icon: "book" },
  { name: "건강", color: "#F59E0B", icon: "heart" },
  { name: "일정", color: "#EC4899", icon: "calendar" },
  { name: "기타", color: "#6B7280", icon: "more-horizontal" },
];

export const NAV_ITEMS = [
  { href: "/today", label: "오늘", icon: "sun" },
  { href: "/calendar", label: "캘린더", icon: "calendar" },
  { href: "/tasks", label: "할 일", icon: "check-square" },
  { href: "/goals", label: "목표", icon: "target" },
  { href: "/habits", label: "습관", icon: "repeat" },
  { href: "/notes", label: "메모", icon: "file-text" },
  { href: "/analytics", label: "통계", icon: "bar-chart-2" },
  { href: "/settings", label: "설정", icon: "settings" },
];
