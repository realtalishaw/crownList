-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable PostGIS for location-based features
CREATE EXTENSION IF NOT EXISTS postgis;

-- Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enable full text search dictionaries
CREATE EXTENSION IF NOT EXISTS unaccent;

------------------------------------------
-- 1. User Management Tables
------------------------------------------

-- Enum types for user roles
CREATE TYPE user_role AS ENUM (
  'contestant',
  'business_owner',
  'director',
  'coach',
  'parent',
  'supporter',
  'admin',
  'judge'
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role user_role NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User profiles
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  profile_picture TEXT,
  bio TEXT,
  contact_number VARCHAR(20),
  location VARCHAR(255),
  date_of_birth DATE,
  social_links JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User settings
CREATE TABLE user_settings (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  notification_preferences JSONB DEFAULT '{}',
  theme_preferences JSONB DEFAULT '{}',
  privacy_settings JSONB DEFAULT '{}',
  language VARCHAR(10) DEFAULT 'en',
  timezone VARCHAR(50) DEFAULT 'UTC',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User verification
CREATE TABLE user_verification (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 2. Contestant Management
------------------------------------------

-- Contestants
CREATE TABLE contestants (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  platform TEXT,
  coach_id UUID REFERENCES users(id),
  parent_id UUID REFERENCES users(id),
  division VARCHAR(100),
  age_group VARCHAR(50),
  competition_level VARCHAR(50),
  achievements JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Platform goals
CREATE TABLE platform_goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contestant_id UUID REFERENCES contestants(user_id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  target_date DATE,
  progress INTEGER DEFAULT 0,
  status VARCHAR(50),
  category VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Appearance schedule
CREATE TABLE appearance_schedule (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  contestant_id UUID REFERENCES contestants(user_id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  location VARCHAR(255),
  type VARCHAR(50),
  notes TEXT,
  status VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 3. Business Management
------------------------------------------

-- Businesses
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name VARCHAR(255) NOT NULL,
  business_description TEXT,
  logo TEXT,
  location VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  website VARCHAR(255),
  social_links JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business staff
CREATE TABLE business_staff (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(business_id, user_id)
);

-- Business listings
CREATE TABLE business_listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10,2),
  images TEXT[],
  category_id UUID,
  availability JSONB DEFAULT '{}',
  booking_preferences JSONB DEFAULT '{}',
  cancellation_policy TEXT,
  insurance_information JSONB DEFAULT '{}',
  service_areas TEXT[],
  languages TEXT[],
  business_hours JSONB DEFAULT '{}',
  featured_until TIMESTAMPTZ,
  verification_status VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Service packages
CREATE TABLE service_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  included_services TEXT[],
  price NUMERIC(10,2),
  duration INTEGER,
  max_participants INTEGER,
  terms_conditions TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 4. Event Management
------------------------------------------

-- Events
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  director_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  location VARCHAR(255),
  schedule JSONB DEFAULT '{}',
  event_type VARCHAR(50),
  registration_deadline TIMESTAMPTZ,
  max_contestants INTEGER,
  age_requirements JSONB DEFAULT '{}',
  division_categories JSONB DEFAULT '{}',
  venue_details JSONB DEFAULT '{}',
  ticket_information JSONB DEFAULT '{}',
  livestream_details JSONB DEFAULT '{}',
  sponsor_information JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event schedule items
CREATE TABLE event_schedule_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  location VARCHAR(255),
  type VARCHAR(50),
  participants UUID[],
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Competition categories
CREATE TABLE competition_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  scoring_criteria JSONB DEFAULT '{}',
  weight NUMERIC(5,2),
  max_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contestant scores
CREATE TABLE contestant_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  contestant_id UUID REFERENCES contestants(user_id) ON DELETE CASCADE,
  judge_id UUID REFERENCES users(id),
  category_id UUID REFERENCES competition_categories(id) ON DELETE CASCADE,
  score NUMERIC(5,2) NOT NULL,
  notes TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 5. Coaching System
------------------------------------------

-- Coaches
CREATE TABLE coaches (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  experience TEXT,
  certifications TEXT,
  services_offered JSONB DEFAULT '{}',
  availability JSONB DEFAULT '{}',
  pricing JSONB DEFAULT '{}',
  specializations TEXT[],
  teaching_methods TEXT[],
  virtual_coaching BOOLEAN DEFAULT FALSE,
  languages_spoken TEXT[],
  achievement_highlights JSONB DEFAULT '{}',
  coaching_philosophy TEXT,
  video_introduction_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Coaching packages
CREATE TABLE coaching_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  coach_id UUID REFERENCES coaches(user_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  duration INTEGER,
  price NUMERIC(10,2),
  included_services JSONB DEFAULT '{}',
  max_students INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 6. Social Features
------------------------------------------

-- User connections
CREATE TABLE user_connections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  follower_id UUID REFERENCES users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(follower_id, following_id)
);

-- Content shares
CREATE TABLE content_shares (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content_type VARCHAR(50) NOT NULL,
  content_id UUID NOT NULL,
  shared_at TIMESTAMPTZ DEFAULT NOW(),
  platform VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 7. Analytics
------------------------------------------

-- User analytics
CREATE TABLE user_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  metric_type VARCHAR(50) NOT NULL,
  value JSONB NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Business analytics
CREATE TABLE business_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  metric_type VARCHAR(50) NOT NULL,
  value JSONB NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 8. Platform Development
------------------------------------------

-- Media kit templates
CREATE TABLE media_kit_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  template_data JSONB NOT NULL,
  category VARCHAR(50),
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social media templates
CREATE TABLE social_media_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  content_template TEXT NOT NULL,
  platform VARCHAR(50),
  category VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

------------------------------------------
-- 9. Security and Compliance
------------------------------------------

-- Audit logs
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(255) NOT NULL,
  entity_type VARCHAR(50),
  entity_id UUID,
  changes JSONB,
  ip_address VARCHAR(45),
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Data retention policies
CREATE TABLE data_retention_policies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type VARCHAR(50) NOT NULL,
  retention_period INTEGER NOT NULL,
  policy_details JSONB NOT NULL,
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for common queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_business_listings_category ON business_listings(category_id);
CREATE INDEX idx_event_schedule_start_time ON event_schedule_items(start_time);
CREATE INDEX idx_contestant_scores_event ON contestant_scores(event_id);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(timestamp);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE contestant_scores ENABLE ROW LEVEL SECURITY; 