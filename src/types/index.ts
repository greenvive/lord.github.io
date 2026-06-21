export type Priority = "urgent" | "high" | "medium" | "low" | "none";
export type TaskStatus = "todo" | "in_progress" | "done" | "hold" | "cancelled";
export type EventStatus = "scheduled" | "in_progress" | "done" | "cancelled";
export type GoalStatus = "not_started" | "in_progress" | "done" | "paused" | "archived";
export type GoalType = "count" | "numeric" | "checklist" | "duration";
export type Theme = "light" | "dark" | "system";
export type CalendarView = "month" | "week" | "day" | "list";
export type TimeFormat = "12h" | "24h";

export interface Profile {
  id: string;
  display_name: string;
  avatar_url: string | null;
  timezone: string;
  locale: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  user_id: string;
  name: string;
  color: string;
  icon: string | null;
  sort_order: number;
  created_at: string;
}

export interface Tag {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
}

export interface Task {
  id: string;
  user_id: string;
  category_id: string | null;
  goal_id: string | null;
  parent_task_id: string | null;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: Priority;
  due_date: string | null;
  start_at: string | null;
  end_at: string | null;
  estimated_minutes: number | null;
  actual_minutes: number | null;
  recurrence_rule: string | null;
  completed_at: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category?: Category;
  tags?: Tag[];
  subtasks?: Task[];
}

export interface Event {
  id: string;
  user_id: string;
  category_id: string | null;
  title: string;
  description: string | null;
  location: string | null;
  link_url: string | null;
  start_at: string;
  end_at: string;
  all_day: boolean;
  status: EventStatus;
  recurrence_rule: string | null;
  reminder_minutes: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  category?: Category;
}

export interface Goal {
  id: string;
  user_id: string;
  parent_goal_id: string | null;
  title: string;
  description: string | null;
  goal_type: GoalType;
  status: GoalStatus;
  start_date: string;
  end_date: string;
  target_value: number | null;
  current_value: number | null;
  unit: string | null;
  color: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  tasks?: Task[];
}

export interface Habit {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  icon: string | null;
  color: string;
  start_date: string;
  end_date: string | null;
  repeat_days: number[];
  target_count: number;
  reminder_time: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  logs?: HabitLog[];
}

export interface HabitLog {
  id: string;
  user_id: string;
  habit_id: string;
  log_date: string;
  count: number;
  note: string | null;
  completed_at: string | null;
  created_at: string;
}

export interface Note {
  id: string;
  user_id: string;
  title: string;
  content: string;
  is_favorite: boolean;
  is_archived: boolean;
  linked_type: string | null;
  linked_id: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  tags?: Tag[];
}

export interface UserSettings {
  user_id: string;
  theme: Theme;
  week_start_day: number;
  default_calendar_view: CalendarView;
  time_format: TimeFormat;
  dashboard_widgets: DashboardWidgets;
  notification_settings: NotificationSettings;
  created_at: string;
  updated_at: string;
}

export interface DashboardWidgets {
  show_schedule: boolean;
  show_tasks: boolean;
  show_habits: boolean;
  show_goals: boolean;
  show_quick_memo: boolean;
}

export interface NotificationSettings {
  browser_push: boolean;
  email: boolean;
  task_deadline: boolean;
  habit_reminder: boolean;
  weekly_report: boolean;
}
