-- ================================================
-- Planary — Supabase Schema
-- ================================================

-- profiles
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  avatar_url text,
  timezone text not null default 'Asia/Seoul',
  locale text not null default 'ko',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- user_settings
create table public.user_settings (
  user_id uuid references public.profiles on delete cascade primary key,
  theme text not null default 'system',
  week_start_day integer not null default 0,
  default_calendar_view text not null default 'month',
  time_format text not null default '24h',
  dashboard_widgets jsonb not null default '{"show_schedule":true,"show_tasks":true,"show_habits":true,"show_goals":true,"show_quick_memo":true}',
  notification_settings jsonb not null default '{"browser_push":false,"email":false,"task_deadline":true,"habit_reminder":true,"weekly_report":false}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.user_settings enable row level security;
create policy "Users can manage own settings" on public.user_settings for all using (auth.uid() = user_id);

-- categories
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  name text not null,
  color text not null default '#6B7280',
  icon text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
alter table public.categories enable row level security;
create policy "Users can manage own categories" on public.categories for all using (auth.uid() = user_id);
create index categories_user_id_idx on public.categories (user_id);

-- tags
create table public.tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  name text not null,
  color text not null default '#6B7280',
  created_at timestamptz not null default now()
);
alter table public.tags enable row level security;
create policy "Users can manage own tags" on public.tags for all using (auth.uid() = user_id);

-- tasks
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  category_id uuid references public.categories on delete set null,
  goal_id uuid,
  parent_task_id uuid references public.tasks on delete cascade,
  title text not null,
  description text,
  status text not null default 'todo' check (status in ('todo','in_progress','done','hold','cancelled')),
  priority text not null default 'medium' check (priority in ('urgent','high','medium','low','none')),
  due_date date,
  start_at timestamptz,
  end_at timestamptz,
  estimated_minutes integer,
  actual_minutes integer,
  recurrence_rule text,
  completed_at timestamptz,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);
alter table public.tasks enable row level security;
create policy "Users can manage own tasks" on public.tasks for all using (auth.uid() = user_id);
create index tasks_user_id_idx on public.tasks (user_id);
create index tasks_due_date_idx on public.tasks (due_date);
create index tasks_status_idx on public.tasks (status);
create index tasks_category_id_idx on public.tasks (category_id);

-- task_tags
create table public.task_tags (
  task_id uuid references public.tasks on delete cascade,
  tag_id uuid references public.tags on delete cascade,
  primary key (task_id, tag_id)
);
alter table public.task_tags enable row level security;
create policy "Users can manage own task_tags" on public.task_tags for all
  using (auth.uid() = (select user_id from public.tasks where id = task_id));

-- events
create table public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  category_id uuid references public.categories on delete set null,
  title text not null,
  description text,
  location text,
  link_url text,
  start_at timestamptz not null,
  end_at timestamptz not null,
  all_day boolean not null default false,
  status text not null default 'scheduled' check (status in ('scheduled','in_progress','done','cancelled')),
  recurrence_rule text,
  reminder_minutes integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);
alter table public.events enable row level security;
create policy "Users can manage own events" on public.events for all using (auth.uid() = user_id);
create index events_user_id_idx on public.events (user_id);
create index events_start_at_idx on public.events (start_at);
create index events_end_at_idx on public.events (end_at);

-- goals
create table public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  parent_goal_id uuid references public.goals on delete cascade,
  title text not null,
  description text,
  goal_type text not null default 'numeric' check (goal_type in ('count','numeric','checklist','duration')),
  status text not null default 'in_progress' check (status in ('not_started','in_progress','done','paused','archived')),
  start_date date not null,
  end_date date,
  target_value numeric,
  current_value numeric not null default 0,
  unit text,
  color text not null default '#10B981',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);
alter table public.goals enable row level security;
create policy "Users can manage own goals" on public.goals for all using (auth.uid() = user_id);
create index goals_user_id_idx on public.goals (user_id);
create index goals_status_idx on public.goals (status);

-- habits
create table public.habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  name text not null,
  description text,
  icon text,
  color text not null default '#10B981',
  start_date date not null,
  end_date date,
  repeat_days integer[] not null default '{0,1,2,3,4,5,6}',
  target_count integer not null default 1,
  reminder_time time,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.habits enable row level security;
create policy "Users can manage own habits" on public.habits for all using (auth.uid() = user_id);
create index habits_user_id_idx on public.habits (user_id);

-- habit_logs
create table public.habit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  habit_id uuid references public.habits on delete cascade not null,
  log_date date not null,
  count integer not null default 1,
  note text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (habit_id, log_date)
);
alter table public.habit_logs enable row level security;
create policy "Users can manage own habit_logs" on public.habit_logs for all using (auth.uid() = user_id);
create index habit_logs_habit_id_idx on public.habit_logs (habit_id);
create index habit_logs_log_date_idx on public.habit_logs (log_date);

-- notes
create table public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles on delete cascade not null,
  title text not null default '',
  content text not null default '',
  is_favorite boolean not null default false,
  is_archived boolean not null default false,
  linked_type text,
  linked_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);
alter table public.notes enable row level security;
create policy "Users can manage own notes" on public.notes for all using (auth.uid() = user_id);
create index notes_user_id_idx on public.notes (user_id);
create index notes_updated_at_idx on public.notes (updated_at);

-- note_tags
create table public.note_tags (
  note_id uuid references public.notes on delete cascade,
  tag_id uuid references public.tags on delete cascade,
  primary key (note_id, tag_id)
);
alter table public.note_tags enable row level security;
create policy "Users can manage own note_tags" on public.note_tags for all
  using (auth.uid() = (select user_id from public.notes where id = note_id));

-- ================================================
-- Trigger: 신규 사용자 → 프로필 자동 생성
-- ================================================
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));

  insert into public.user_settings (user_id) values (new.id);

  insert into public.categories (user_id, name, color, sort_order) values
    (new.id, '업무', '#3B82F6', 0),
    (new.id, '개인', '#8B5CF6', 1),
    (new.id, '공부', '#10B981', 2),
    (new.id, '건강', '#F59E0B', 3),
    (new.id, '일정', '#EC4899', 4),
    (new.id, '기타', '#6B7280', 5);

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
