# Database Schema Improvements

## 1. Event Management Enhancements

### Table: events
Add columns:
- `event_type` VARCHAR(50) - For different types of pageants
- `registration_deadline` TIMESTAMP
- `max_contestants` INTEGER
- `age_requirements` JSONB
- `division_categories` JSONB
- `venue_details` JSONB
- `ticket_information` JSONB
- `livestream_details` JSONB
- `sponsor_information` JSONB

### New Table: event_schedule_items
- `id` UUID PRIMARY KEY
- `event_id` UUID REFERENCES events(id)
- `title` VARCHAR(255)
- `description` TEXT
- `start_time` TIMESTAMP
- `end_time` TIMESTAMP
- `location` VARCHAR(255)
- `type` VARCHAR(50)
- `participants` UUID[]
- `notes` TEXT

## 2. Digital Pageant Binder Improvements

### New Table: platform_goals
- `id` UUID PRIMARY KEY
- `contestant_id` UUID
- `title` VARCHAR(255)
- `description` TEXT
- `target_date` DATE
- `progress` INTEGER
- `status` VARCHAR(50)
- `category` VARCHAR(50)

### New Table: appearance_schedule
- `id` UUID PRIMARY KEY
- `contestant_id` UUID
- `title` VARCHAR(255)
- `date` TIMESTAMP
- `location` VARCHAR(255)
- `type` VARCHAR(50)
- `notes` TEXT
- `status` VARCHAR(50)

### New Table: wardrobe_categories
- `id` UUID PRIMARY KEY
- `name` VARCHAR(100)
- `description` TEXT
- `event_type` VARCHAR(50)

## 3. Business Management Improvements

### Table: business_listings
Add columns:
- `booking_preferences` JSONB
- `cancellation_policy` TEXT
- `insurance_information` JSONB
- `service_areas` TEXT[]
- `languages` TEXT[]
- `business_hours` JSONB
- `featured_until` TIMESTAMP
- `verification_status` VARCHAR(50)

### New Table: service_packages
- `id` UUID PRIMARY KEY
- `business_id` UUID
- `name` VARCHAR(255)
- `description` TEXT
- `included_services` TEXT[]
- `price` NUMERIC(10,2)
- `duration` INTEGER
- `max_participants` INTEGER
- `terms_conditions` TEXT

## 4. Coaching System Improvements

### Table: coaches
Add columns:
- `specializations` TEXT[]
- `teaching_methods` TEXT[]
- `virtual_coaching` BOOLEAN
- `languages_spoken` TEXT[]
- `achievement_highlights` JSONB
- `coaching_philosophy` TEXT
- `video_introduction_url` TEXT

### New Table: coaching_packages
- `id` UUID PRIMARY KEY
- `coach_id` UUID
- `name` VARCHAR(255)
- `description` TEXT
- `duration` INTEGER
- `price` NUMERIC(10,2)
- `included_services` JSONB
- `max_students` INTEGER

## 5. Competition Management Improvements

### New Table: competition_categories
- `id` UUID PRIMARY KEY
- `event_id` UUID
- `name` VARCHAR(255)
- `description` TEXT
- `scoring_criteria` JSONB
- `weight` NUMERIC(5,2)
- `max_score` INTEGER

### New Table: contestant_scores
- `id` UUID PRIMARY KEY
- `event_id` UUID
- `contestant_id` UUID
- `judge_id` UUID
- `category_id` UUID
- `score` NUMERIC(5,2)
- `notes` TEXT
- `timestamp` TIMESTAMP

## 6. Social Features Improvements

### New Table: user_connections
- `id` UUID PRIMARY KEY
- `follower_id` UUID
- `following_id` UUID
- `status` VARCHAR(50)
- `created_at` TIMESTAMP

### New Table: content_shares
- `id` UUID PRIMARY KEY
- `user_id` UUID
- `content_type` VARCHAR(50)
- `content_id` UUID
- `shared_at` TIMESTAMP
- `platform` VARCHAR(50)
- `status` VARCHAR(50)

## 7. Analytics Improvements

### New Table: user_analytics
- `id` UUID PRIMARY KEY
- `user_id` UUID
- `metric_type` VARCHAR(50)
- `value` JSONB
- `timestamp` TIMESTAMP

### New Table: business_analytics
- `id` UUID PRIMARY KEY
- `business_id` UUID
- `metric_type` VARCHAR(50)
- `value` JSONB
- `timestamp` TIMESTAMP

## 8. Platform Development Improvements

### New Table: media_kit_templates
- `id` UUID PRIMARY KEY
- `name` VARCHAR(255)
- `description` TEXT
- `template_data` JSONB
- `category` VARCHAR(50)
- `is_premium` BOOLEAN

### New Table: social_media_templates
- `id` UUID PRIMARY KEY
- `title` VARCHAR(255)
- `content_template` TEXT
- `platform` VARCHAR(50)
- `category` VARCHAR(50)
- `tags` TEXT[]

## 9. Security and Compliance Improvements

### New Table: audit_logs
- `id` UUID PRIMARY KEY
- `user_id` UUID
- `action` VARCHAR(255)
- `entity_type` VARCHAR(50)
- `entity_id` UUID
- `changes` JSONB
- `ip_address` VARCHAR(45)
- `timestamp` TIMESTAMP

### New Table: data_retention_policies
- `id` UUID PRIMARY KEY
- `entity_type` VARCHAR(50)
- `retention_period` INTEGER
- `policy_details` JSONB
- `last_updated` TIMESTAMP 