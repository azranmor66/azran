-- פרופילים (נוצר אוטומטית עם ההרשמה)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  created_at timestamptz default now()
);

-- פונקציה: יצירת פרופיל אוטומטית עם הרשמה
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- פוסטים
create table public.posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  author_id uuid references public.profiles(id) on delete cascade not null,
  category text not null default 'כללי',
  votes_count int default 0,
  comments_count int default 0,
  created_at timestamptz default now()
);

-- תגובות
create table public.comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references public.posts(id) on delete cascade not null,
  author_id uuid references public.profiles(id) on delete cascade not null,
  content text not null,
  votes_count int default 0,
  created_at timestamptz default now()
);

-- הצבעות על פוסטים
create table public.post_votes (
  user_id uuid references public.profiles(id) on delete cascade,
  post_id uuid references public.posts(id) on delete cascade,
  value int not null check (value in (-1, 1)),
  primary key (user_id, post_id)
);

-- הצבעות על תגובות
create table public.comment_votes (
  user_id uuid references public.profiles(id) on delete cascade,
  comment_id uuid references public.comments(id) on delete cascade,
  value int not null check (value in (-1, 1)),
  primary key (user_id, comment_id)
);

-- RLS (Row Level Security)
alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.post_votes enable row level security;
alter table public.comment_votes enable row level security;

-- Profiles
create policy "profiles_select" on public.profiles for select using (true);
create policy "profiles_update" on public.profiles for update using (auth.uid() = id);

-- Posts
create policy "posts_select" on public.posts for select using (true);
create policy "posts_insert" on public.posts for insert with check (auth.uid() = author_id);
create policy "posts_update" on public.posts for update using (auth.uid() = author_id);
create policy "posts_delete" on public.posts for delete using (auth.uid() = author_id);

-- Comments
create policy "comments_select" on public.comments for select using (true);
create policy "comments_insert" on public.comments for insert with check (auth.uid() = author_id);
create policy "comments_delete" on public.comments for delete using (auth.uid() = author_id);

-- Post votes
create policy "post_votes_select" on public.post_votes for select using (true);
create policy "post_votes_insert" on public.post_votes for insert with check (auth.uid() = user_id);
create policy "post_votes_update" on public.post_votes for update using (auth.uid() = user_id);
create policy "post_votes_delete" on public.post_votes for delete using (auth.uid() = user_id);

-- Comment votes
create policy "comment_votes_select" on public.comment_votes for select using (true);
create policy "comment_votes_insert" on public.comment_votes for insert with check (auth.uid() = user_id);
create policy "comment_votes_update" on public.comment_votes for update using (auth.uid() = user_id);
create policy "comment_votes_delete" on public.comment_votes for delete using (auth.uid() = user_id);
