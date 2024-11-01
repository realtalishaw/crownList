-- Enable required extensions
create extension if not exists "uuid-ossp";

-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text,
  avatar_url text,
  role text check (role in ('contestant', 'business', 'director', 'admin')) default 'contestant',
  location text,
  bio text
);

-- Create businesses table
create table businesses (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  category text not null,
  profile_id uuid references profiles(id) on delete cascade not null,
  logo_url text,
  website text,
  phone text,
  email text,
  location text,
  status text check (status in ('pending', 'active', 'suspended')) default 'pending'
);

-- Create events table
create table events (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  location text,
  capacity integer,
  director_id uuid references profiles(id) on delete cascade not null,
  status text check (status in ('draft', 'published', 'completed', 'cancelled')) default 'draft',
  type text check (type in ('pageant', 'competition', 'workshop')) default 'pageant'
);

-- Create reviews table
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  business_id uuid references businesses(id) on delete cascade not null,
  reviewer_id uuid references profiles(id) on delete cascade not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  comment text,
  response text,
  response_date timestamp with time zone
);

-- Enable Row Level Security (RLS)
alter table profiles enable row level security;
alter table businesses enable row level security;
alter table events enable row level security;
alter table reviews enable row level security;

-- Create RLS policies

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using (true);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);

-- Businesses policies
create policy "Businesses are viewable by everyone"
  on businesses for select
  using (true);

create policy "Business owners can update their business"
  on businesses for update
  using (auth.uid() = profile_id);

create policy "Business owners can delete their business"
  on businesses for delete
  using (auth.uid() = profile_id);

create policy "Authenticated users can create businesses"
  on businesses for insert
  with check (auth.uid() = profile_id);

-- Events policies
create policy "Published events are viewable by everyone"
  on events for select
  using (status = 'published');

create policy "Directors can view all their events"
  on events for select
  using (auth.uid() = director_id);

create policy "Directors can insert events"
  on events for insert
  with check (auth.uid() = director_id);

create policy "Directors can update their events"
  on events for update
  using (auth.uid() = director_id);

create policy "Directors can delete their events"
  on events for delete
  using (auth.uid() = director_id);

-- Reviews policies
create policy "Reviews are viewable by everyone"
  on reviews for select
  using (true);

create policy "Authenticated users can create reviews"
  on reviews for insert
  with check (auth.uid() = reviewer_id);

create policy "Users can update their own reviews"
  on reviews for update
  using (auth.uid() = reviewer_id);

create policy "Business owners can respond to reviews"
  on reviews for update
  using (
    exists (
      select 1 from businesses
      where businesses.id = reviews.business_id
      and businesses.profile_id = auth.uid()
    )
  );

-- Create functions for automatic timestamp updates
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers for automatic timestamp updates
create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column();

create trigger update_businesses_updated_at
  before update on businesses
  for each row
  execute function update_updated_at_column();

create trigger update_events_updated_at
  before update on events
  for each row
  execute function update_updated_at_column();

create trigger update_reviews_updated_at
  before update on reviews
  for each row
  execute function update_updated_at_column();