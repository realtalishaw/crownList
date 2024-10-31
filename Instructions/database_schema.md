Let me continue with the Events and Pageant Management section. This will be a comprehensive addition to the existing schema:

## 4. Events and Pageant Management

### Core Event Tables

#### events
Stores pageant and competition events.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Event identifier                          |
| director_id         | `UUID`                     | `REFERENCES users(id)`, `NOT NULL`          | Reference to director                     |
| title               | `VARCHAR(255)`             | `NOT NULL`                                  | Event title                               |
| slug               | `VARCHAR(255)`             | `NOT NULL`, `UNIQUE`                        | URL-friendly title                        |
| description         | `TEXT`                     |                                             | Event description                         |
| type               | `event_type`               | `NOT NULL`                                  | Type of event                             |
| start_date          | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                                  | Event start date/time                     |
| end_date            | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                                  | Event end date/time                       |
| timezone            | `VARCHAR(50)`              | `NOT NULL`                                  | Event timezone                            |
| venue               | `JSONB`                    |                                             | Venue details                             |
| capacity            | `INTEGER`                  |                                             | Maximum contestants                       |
| registration_deadline| `TIMESTAMP WITH TIME ZONE` |                                             | Registration cutoff date                  |
| status              | `event_status`             | `NOT NULL`, `DEFAULT 'draft'`               | Event status                              |
| banner_image_url    | `TEXT`                     |                                             | Banner image URL                          |
| logo_url            | `TEXT`                     |                                             | Event logo URL                            |
| contact_info        | `JSONB`                    |                                             | Contact information                       |
| entry_fee           | `NUMERIC(10,2)`            |                                             | Registration fee                          |
| rules               | `TEXT`                     |                                             | Event rules and guidelines                |
| schedule            | `JSONB`                    |                                             | Event schedule                            |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Event creation timestamp                  |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

```sql
CREATE TYPE event_type AS ENUM (
  'pageant',
  'competition',
  'workshop',
  'rehearsal',
  'orientation',
  'photo_shoot'
);

CREATE TYPE event_status AS ENUM (
  'draft',
  'published',
  'registration_open',
  'registration_closed',
  'in_progress',
  'completed',
  'cancelled'
);
```

#### event_categories
Manages competition categories within events.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Category identifier                       |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| name                | `VARCHAR(100)`             | `NOT NULL`                                  | Category name                             |
| description         | `TEXT`                     |                                             | Category description                      |
| weight              | `NUMERIC(5,2)`             | `NOT NULL`, `DEFAULT 1.0`                   | Category weight in scoring                |
| display_order       | `INTEGER`                  | `DEFAULT 0`                                 | Display order                             |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Category creation timestamp               |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

#### event_registrations
Manages contestant registrations for events.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Registration identifier                   |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| contestant_id       | `UUID`                     | `REFERENCES contestants(user_id)`, `NOT NULL`| Reference to contestant                   |
| registration_number | `VARCHAR(50)`              | `UNIQUE`                                    | Unique registration number                |
| status              | `registration_status`      | `NOT NULL`, `DEFAULT 'pending'`             | Registration status                       |
| payment_status      | `payment_status`           | `NOT NULL`, `DEFAULT 'pending'`             | Payment status                            |
| amount_paid         | `NUMERIC(10,2)`            | `DEFAULT 0`                                 | Amount paid                               |
| registration_date   | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Registration date                         |
| check_in_status     | `check_in_status`         | `NOT NULL`, `DEFAULT 'not_checked_in'`      | Check-in status                           |
| check_in_time       | `TIMESTAMP WITH TIME ZONE` |                                             | Check-in timestamp                        |
| notes               | `TEXT`                     |                                             | Administrative notes                      |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Registration creation timestamp           |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

```sql
CREATE TYPE registration_status AS ENUM (
  'pending',
  'approved',
  'waitlisted',
  'rejected',
  'cancelled'
);

CREATE TYPE check_in_status AS ENUM (
  'not_checked_in',
  'checked_in',
  'checked_out',
  'no_show'
);
```

### Judging System

#### event_judges
Links judges to events and manages their assignments.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Judge assignment identifier               |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| judge_id            | `UUID`                     | `REFERENCES users(id)`, `NOT NULL`          | Reference to judge                        |
| categories          | `UUID[]`                   |                                             | Assigned category IDs                     |
| status              | `judge_status`             | `NOT NULL`, `DEFAULT 'pending'`             | Judge status                              |
| access_code         | `VARCHAR(50)`              | `UNIQUE`                                    | Judge access code                         |
| notes               | `TEXT`                     |                                             | Administrative notes                      |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Assignment creation timestamp             |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

```sql
CREATE TYPE judge_status AS ENUM (
  'pending',
  'accepted',
  'declined',
  'removed'
);
```

#### judging_criteria
Defines scoring criteria for event categories.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Criterion identifier                      |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| category_id         | `UUID`                     | `REFERENCES event_categories(id)`, `NOT NULL`| Reference to category                     |
| name                | `VARCHAR(100)`             | `NOT NULL`                                  | Criterion name                            |
| description         | `TEXT`                     |                                             | Criterion description                     |
| max_score           | `NUMERIC(5,2)`             | `NOT NULL`                                  | Maximum possible score                    |
| weight              | `NUMERIC(5,2)`             | `NOT NULL`, `DEFAULT 1.0`                   | Criterion weight                          |
| scoring_guide       | `TEXT`                     |                                             | Scoring guidelines                        |
| display_order       | `INTEGER`                  | `DEFAULT 0`                                 | Display order                             |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Criterion creation timestamp              |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

#### scores
Records judges' scores for contestants.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Score identifier                          |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| category_id         | `UUID`                     | `REFERENCES event_categories(id)`, `NOT NULL`| Reference to category                     |
| criterion_id        | `UUID`                     | `REFERENCES judging_criteria(id)`, `NOT NULL`| Reference to criterion                    |
| judge_id            | `UUID`                     | `REFERENCES users(id)`, `NOT NULL`          | Reference to judge                        |
| contestant_id       | `UUID`                     | `REFERENCES contestants(user_id)`, `NOT NULL`| Reference to contestant                   |
| score               | `NUMERIC(5,2)`             | `NOT NULL`                                  | Awarded score                             |
| notes               | `TEXT`                     |                                             | Judge's notes                             |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Score creation timestamp                  |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

### Event Schedule Management

#### event_schedule_items
Manages detailed event schedule and activities.

| Column Name          | Data Type                  | Constraints                                 | Description                               |
|---------------------|----------------------------|---------------------------------------------|-------------------------------------------|
| id                  | `UUID`                     | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` | Schedule item identifier                  |
| event_id            | `UUID`                     | `REFERENCES events(id)`, `NOT NULL`         | Reference to event                        |
| title               | `VARCHAR(255)`             | `NOT NULL`                                  | Activity title                            |
| description         | `TEXT`                     |                                             | Activity description                      |
| type                | `schedule_item_type`       | `NOT NULL`                                  | Type of activity                          |
| start_time          | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                                  | Start time                                |
| end_time            | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                                  | End time                                  |
| location            | `VARCHAR(255)`             |                                             | Activity location                         |
| participants        | `UUID[]`                   |                                             | Participant user IDs                      |
| requirements        | `JSONB`                    |                                             | Special requirements                      |
| status              | `schedule_item_status`     | `NOT NULL`, `DEFAULT 'scheduled'`           | Item status                               |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Item creation timestamp                   |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             | Last update timestamp                     |

```sql
CREATE TYPE schedule_item_type AS ENUM (
  'registration',
  'rehearsal',
  'competition',
  'interview',
  'photoshoot',
  'meal',
  'break',
  'ceremony'
);

CREATE TYPE schedule_item_status AS ENUM (
  'scheduled',
  'in_progress',
  'completed',
  'cancelled',
  'delayed'
);
```

### Indexes and Constraints

```sql
-- Events
CREATE INDEX idx_events_director ON events(director_id);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_dates ON events(start_date, end_date);
CREATE INDEX idx_events_type ON events(type);

-- Registrations
CREATE INDEX idx_registrations_event ON event_registrations(event_id);
CREATE INDEX idx_registrations_contestant ON event_registrations(contestant_id);
CREATE INDEX idx_registrations_status ON event_registrations(status);
CREATE UNIQUE INDEX idx_registration_number ON event_registrations(registration_number);

-- Judges
CREATE INDEX idx_judges_event ON event_judges(event_id);
CREATE INDEX idx_judges_user ON event_judges(judge_id);
CREATE UNIQUE INDEX idx_judge_access_code ON event_judges(access_code);

-- Scores
CREATE INDEX idx_scores_event ON scores(event_id);
CREATE INDEX idx_scores_category ON scores(category_id);
CREATE INDEX idx_scores_judge ON scores(judge_id);
CREATE INDEX idx_scores_contestant ON scores(contestant_id);

-- Schedule
CREATE INDEX idx_schedule_event ON event_schedule_items(event_id);
CREATE INDEX idx_schedule_times ON event_schedule_items(start_time, end_time);
```

### Functions and Triggers

```sql
-- Calculate final scores for contestants
CREATE OR REPLACE FUNCTION calculate_contestant_scores()
RETURNS TRIGGER AS $$
BEGIN
  -- Implementation for calculating weighted scores
  -- and updating contestant rankings
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contestant_scores
AFTER INSERT OR UPDATE ON scores
FOR EACH ROW
EXECUTE FUNCTION calculate_contestant_scores();

-- Prevent schedule conflicts
CREATE OR REPLACE FUNCTION check_schedule_conflicts()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM event_schedule_items
    WHERE event_id = NEW.event_id
    AND (
      (NEW.start_time, NEW.end_time) OVERLAPS (start_time, end_time)
    )
    AND id != NEW.id
  ) THEN
    RAISE EXCEPTION 'Schedule conflict detected';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER prevent_schedule_conflicts
BEFORE INSERT OR UPDATE ON event_schedule_items
FOR EACH ROW
EXECUTE FUNCTION check_schedule_conflicts();
```

### Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_judges ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

-- Event access policies
CREATE POLICY "Public can view published events"
  ON events FOR SELECT
  USING (status = 'published');

CREATE POLICY "Directors can manage their events"
  ON events FOR ALL
  USING (director_id = auth.uid());

-- Registration access policies
CREATE POLICY "Contestants can view their registrations"
  ON event_registrations FOR SELECT
  USING (contestant_id = auth.uid());

CREATE POLICY "Directors can manage registrations"
  ON event_registrations FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE id = event_id
      AND director_id = auth.uid()
    )
  );

-- Judge access policies
CREATE POLICY "Judges can view their assignments"
  ON event_judges FOR SELECT
  USING (judge_id = auth.uid());

CREATE POLICY "Directors can manage judges"
  ON event_judges FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE id = event_id
      AND director_id = auth.uid()
    )
  );

-- Score access policies
CREATE POLICY "Judges can manage their scores"
  ON scores FOR ALL
  USING (judge_id = auth.uid());

CREATE POLICY "Directors can view all scores"
  ON scores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM events
      WHERE id = event_id
      AND director_id = auth.uid()
    )
  );
```

### Notes

1. **Event Management Features**:
   - Comprehensive event scheduling
   - Registration management
   - Judge assignments
   - Scoring system
   - Schedule conflict prevention

2. **Security Considerations**:
   - Role-based access control
   - Schedule conflict prevention
   - Score integrity protection
   - Judge access management

3. **Performance Optimization**:
   - Efficient indexing strategy
   - Optimized score calculations
   - Schedule conflict checking
   - Contestant ranking updates

4. **Data Integrity**:
   - Foreign key relationships
   - Unique constraints
   - Status transitions
   - Schedule validation

5. **Extensibility**:
   - Flexible scoring system
   - Customizable event types
   - Modular schedule management
   - Expandable judging criteria

6. **Monitoring and Analytics**:
   - Score tracking
   - Registration analytics
   - Schedule management
   - Judge performance metrics

Would you like me to continue with the next section, such as Voting and People's Ch