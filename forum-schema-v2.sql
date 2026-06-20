-- ===================================================
-- forum-schema-v2.sql — הפעל אחרי forum-schema.sql
-- ===================================================

-- הוסף role, post_count, joined_at לפרופילים
alter table public.profiles
  add column if not exists role text default 'user' check (role in ('user','moderator','admin')),
  add column if not exists post_count int default 0,
  add column if not exists joined_at timestamptz default now();

-- טבלת קטגוריות
create table if not exists public.forum_categories (
  id uuid default gen_random_uuid() primary key,
  name text unique not null,
  description text default '',
  icon text default '💬',
  position int default 0,
  post_count int default 0,
  comment_count int default 0,
  last_post_at timestamptz,
  last_post_user text,
  last_post_title text,
  last_post_id uuid
);

alter table public.forum_categories enable row level security;
create policy "cats_select" on public.forum_categories for select using (true);
create policy "cats_insert" on public.forum_categories for insert with check (
  exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
);
create policy "cats_update" on public.forum_categories for update using (
  exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
);
create policy "cats_delete" on public.forum_categories for delete using (
  exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- קטגוריות ברירת מחדל
insert into public.forum_categories (name, description, icon, position) values
  ('משחקים',  'ניתוחי משחקים ותוצאות',           '⚽', 1),
  ('טקטיקה',  'דיונים טקטיים ואסטרטגיים',         '🎯', 2),
  ('חדשות',   'חדשות ועדכונים על הקבוצה',          '📰', 3),
  ('ביציע',   'חיי האוהדים, ביציע ואירועים',       '🔴', 4),
  ('כללי',    'שיחות כלליות',                      '💬', 5)
on conflict (name) do nothing;

-- pin + updated_at על פוסטים ותגובות
alter table public.posts
  add column if not exists pinned boolean default false,
  add column if not exists updated_at timestamptz;

alter table public.comments
  add column if not exists updated_at timestamptz;

-- עדכן RLS — מנהלים/מודרטורים יכולים למחוק ולעדכן כל פוסט
drop policy if exists "posts_delete" on public.posts;
create policy "posts_delete" on public.posts for delete using (
  auth.uid() = author_id or
  exists(select 1 from public.profiles where id = auth.uid() and role in ('admin','moderator'))
);

drop policy if exists "posts_update" on public.posts;
create policy "posts_update" on public.posts for update using (
  auth.uid() = author_id or
  exists(select 1 from public.profiles where id = auth.uid() and role in ('admin','moderator'))
);

drop policy if exists "comments_delete" on public.comments;
create policy "comments_delete" on public.comments for delete using (
  auth.uid() = author_id or
  exists(select 1 from public.profiles where id = auth.uid() and role in ('admin','moderator'))
);

drop policy if exists "profiles_update" on public.profiles;
create policy "profiles_update" on public.profiles for update using (
  auth.uid() = id or
  exists(select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- פונקציה: עדכן post_count ב-profile וקטגוריה אחרי פוסט חדש
create or replace function increment_post_count()
returns trigger as $$
declare
  uname text;
begin
  select username into uname from public.profiles where id = new.author_id;
  update public.profiles set post_count = post_count + 1 where id = new.author_id;
  update public.forum_categories set
    post_count = post_count + 1,
    last_post_at = now(),
    last_post_user = uname,
    last_post_title = new.title,
    last_post_id = new.id
  where name = new.category;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_post_created on public.posts;
create trigger on_post_created
  after insert on public.posts
  for each row execute procedure increment_post_count();

-- ===================================================
-- אחרי הרצת הסקריפט, הפוך את עצמך לאדמין:
-- UPDATE public.profiles SET role = 'admin' WHERE username = 'YOUR_USERNAME';
-- ===================================================
