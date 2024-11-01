-- Create enum for user roles
CREATE TYPE user_role AS ENUM (
  'contestant',
  'business_owner',
  'director',
  'coach',
  'parent',
  'supporter',
  'judge'
);

-- Create profiles table that works with Supabase Auth
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  role user_role NOT NULL DEFAULT 'contestant',
  username TEXT UNIQUE,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  website TEXT,
  email TEXT,
  onboarding_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  -- Add any other fields you want from user_profiles here
  bio TEXT,
  contact_number VARCHAR(20),
  location VARCHAR(255),
  date_of_birth DATE,
  social_links JSONB DEFAULT '{}'
);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    first_name,
    last_name
  )
  VALUES (
    new.id,
    new.email,
    '', -- first_name will be updated during registration
    '' -- last_name will be updated during registration
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Update the database types 