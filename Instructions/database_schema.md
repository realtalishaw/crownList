
### **1. Users and Authentication**

This section handles user accounts, authentication, and role management.

#### **Table: users**

- **Purpose**: Stores basic authentication and role information for all users.

| Column Name    | Data Type                           | Constraints                                    |
|----------------|-------------------------------------|------------------------------------------------|
| id             | `UUID`                              | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`    |
| email          | `VARCHAR(255)`                      | `NOT NULL`, `UNIQUE`                           |
| password_hash  | `VARCHAR(255)`                      | `NOT NULL`                                     |
| role           | `VARCHAR(50)`                       | `NOT NULL`, check constraint for valid roles   |
| is_active      | `BOOLEAN`                           | `DEFAULT TRUE`                                 |
| created_at     | `TIMESTAMP WITH TIME ZONE`          | `DEFAULT NOW()`                                |
| updated_at     | `TIMESTAMP WITH TIME ZONE`          | `DEFAULT NOW()`                                |

- **Roles**: `'contestant'`, `'business_owner'`, `'director'`, `'coach'`, `'parent'`, `'supporter'`, `'admin'`, `'judge'`

#### **Table: user_profiles**

- **Purpose**: Stores additional profile information for users.

| Column Name       | Data Type               | Constraints                           |
|-------------------|-------------------------|---------------------------------------|
| user_id           | `UUID`                  | `PRIMARY KEY`, `REFERENCES users(id)` |
| first_name        | `VARCHAR(100)`          | `NOT NULL`                            |
| last_name         | `VARCHAR(100)`          | `NOT NULL`                            |
| profile_picture   | `TEXT`                  | URL to profile picture                |
| bio               | `TEXT`                  |                                       |
| contact_number    | `VARCHAR(20)`           |                                       |
| location          | `VARCHAR(255)`          |                                       |
| date_of_birth     | `DATE`                  |                                       |
| social_links      | `JSONB`                 |                                       |
| created_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                     |
| updated_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                     |

- **Relationships**:
  - One-to-One with `users` via `user_id`.

#### **Table: user_settings**

- **Purpose**: Stores user preferences and settings

| Column Name       | Data Type               | Constraints                           |
|-------------------|-------------------------|---------------------------------------|
| user_id           | `UUID`                  | `PRIMARY KEY`, `REFERENCES users(id)` |
| notification_preferences | `JSONB`          | `DEFAULT '{}'`                        |
| theme_preferences | `JSONB`                 | `DEFAULT '{}'`                        |
| privacy_settings  | `JSONB`                 | `DEFAULT '{}'`                        |
| language          | `VARCHAR(10)`           | `DEFAULT 'en'`                        |
| timezone          | `VARCHAR(50)`           | `DEFAULT 'UTC'`                       |
| created_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                     |
| updated_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                     |

#### **Table: user_verification**

- **Purpose**: Handles email verification and account recovery

| Column Name       | Data Type               | Constraints                           |
|-------------------|-------------------------|---------------------------------------|
| id                | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id           | `UUID`                  | `REFERENCES users(id)`                |
| token             | `VARCHAR(255)`          | `NOT NULL`                            |
| type              | `VARCHAR(50)`           | `NOT NULL`                            |
| expires_at        | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                         |
| created_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                     |

- **Type Values**: `'email_verification'`, `'password_reset'`

---

### **2. Contestants**

Information specific to users with the role of `contestant`.

#### **Table: contestants**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| user_id        | `UUID`                  | `PRIMARY KEY`, `REFERENCES users(id)`    |
| title          | `VARCHAR(255)`          |                                          |
| platform       | `TEXT`                  |                                          |
| coach_id       | `UUID`                  | `REFERENCES users(id)`                   |
| parent_id      | `UUID`                  | `REFERENCES users(id)`                   |
| division       | `VARCHAR(100)`          |                                          |
| age_group      | `VARCHAR(50)`           |                                          |
| competition_level | `VARCHAR(50)`         |                                          |
| achievements   | `JSONB`                 |                                          |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - One-to-One with `users` via `user_id`.
  - Many contestants can be linked to a `coach` and `parent`.

---

### **3. Businesses and Multi-Tenancy**

Supports multi-tenancy where businesses can have multiple staff members with different roles and permissions.

#### **Table: businesses**

| Column Name          | Data Type               | Constraints                                 |
|----------------------|-------------------------|---------------------------------------------|
| id                   | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| business_name        | `VARCHAR(255)`          | `NOT NULL`                                  |
| business_description | `TEXT`                  |                                             |
| logo                 | `TEXT`                  | URL to logo image                           |
| location             | `VARCHAR(255)`          |                                             |
| contact_email        | `VARCHAR(255)`          |                                             |
| contact_phone        | `VARCHAR(20)`           |                                             |
| website              | `VARCHAR(255)`          |                                             |
| social_links         | `JSONB`                 |                                             |
| created_at           | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |
| updated_at           | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |

#### **Table: business_staff**

- **Purpose**: Links users to businesses and assigns roles within the business.

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| business_id    | `UUID`                  | `REFERENCES businesses(id)`, `NOT NULL`, `ON DELETE CASCADE` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`, `ON DELETE CASCADE` |
| role           | `VARCHAR(20)`           | `NOT NULL`, check constraint (`'owner'`, `'manager'`, `'staff'`) |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Unique Constraint**: `(business_id, user_id)` to prevent duplicate staff entries.
- **Relationships**:
  - Many-to-One with `businesses` via `business_id`.
  - Many-to-One with `users` via `user_id`.

#### **Table: business_permissions**

- **Purpose**: Defines permissions for each staff member within a business.

| Column Name         | Data Type               | Constraints                                  |
|---------------------|-------------------------|----------------------------------------------|
| id                  | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| business_staff_id   | `UUID`                  | `REFERENCES business_staff(id)`, `NOT NULL`, `ON DELETE CASCADE` |
| permission          | `VARCHAR(50)`           | `NOT NULL`, check constraint (various permissions) |
| created_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Unique Constraint**: `(business_staff_id, permission)` to prevent duplicate permissions.
- **Permissions Examples**: `'manage_listings'`, `'view_bookings'`, `'edit_profile'`, `'manage_finances'`
- **Relationships**:
  - Many-to-One with `business_staff` via `business_staff_id`.

#### **Table: business_listings**

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| business_id    | `UUID`                  | `REFERENCES businesses(id)`, `NOT NULL`      |
| title          | `VARCHAR(255)`          | `NOT NULL`                                   |
| description    | `TEXT`                  |                                              |
| price          | `NUMERIC(10,2)`         |                                              |
| images         | `TEXT[]`                | Array of image URLs                          |
| category_id    | `UUID`                  | `REFERENCES listing_categories(id)`          |
| availability   | `JSONB`                 | Availability details                         |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Relationships**:
  - Many-to-One with `businesses` via `business_id`.
  - Many-to-One with `listing_categories` via `category_id`.

#### **Table: listing_categories**

| Column Name    | Data Type               | Constraints                                 |
|----------------|-------------------------|---------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| name           | `VARCHAR(100)`          | `NOT NULL`                                  |
| description    | `TEXT`                  |                                             |
| parent_id      | `UUID`                  | `REFERENCES listing_categories(id)`         |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |

- **Relationships**:
  - Self-referential Many-to-One for category hierarchy via `parent_id`.

---

### **4. Bookings**

Handles service bookings made by users.

#### **Table: bookings**

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| listing_id     | `UUID`                  | `REFERENCES business_listings(id)`, `NOT NULL` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`           |
| booking_date   | `TIMESTAMP WITH TIME ZONE` | `NOT NULL`                                 |
| status         | `VARCHAR(20)`           | `DEFAULT 'pending'`, check constraint        |
| total_price    | `NUMERIC(10,2)`         |                                              |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Status Values**: `'pending'`, `'confirmed'`, `'completed'`, `'cancelled'`
- **Relationships**:
  - Many-to-One with `business_listings` via `listing_id`.
  - Many-to-One with `users` via `user_id`.

---

### **5. Reviews**

Stores reviews left by users for business listings.

#### **Table: reviews**

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| listing_id     | `UUID`                  | `REFERENCES business_listings(id)`, `NOT NULL` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`           |
| rating         | `SMALLINT`              | `NOT NULL`, check between 1 and 5            |
| comment        | `TEXT`                  |                                              |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Relationships**:
  - Many-to-One with `business_listings` via `listing_id`.
  - Many-to-One with `users` via `user_id`.

---

### **6. Events and Pageant Management**

Handles events organized by directors and contestant participation.

#### **Table: events**

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| director_id    | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`           |
| name           | `VARCHAR(255)`          | `NOT NULL`                                   |
| description    | `TEXT`                  |                                              |
| start_date     | `DATE`                  | `NOT NULL`                                   |
| end_date       | `DATE`                  | `NOT NULL`                                   |
| location       | `VARCHAR(255)`          |                                              |
| schedule       | `JSONB`                 |                                              |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Relationships**:
  - Many-to-One with `users` via `director_id`.

#### **Table: event_registrations**

| Column Name      | Data Type               | Constraints                                   |
|------------------|-------------------------|-----------------------------------------------|
| id               | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`   |
| event_id         | `UUID`                  | `REFERENCES events(id)`, `NOT NULL`           |
| contestant_id    | `UUID`                  | `REFERENCES contestants(user_id)`, `NOT NULL` |
| registration_date| `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             |
| status           | `VARCHAR(20)`           | `DEFAULT 'pending'`, check constraint         |
| payment_status   | `VARCHAR(20)`           | `DEFAULT 'unpaid'`, check constraint          |
| created_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             |
| updated_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                             |

- **Status Values**: `'pending'`, `'approved'`, `'rejected'`
- **Payment Status**: `'unpaid'`, `'paid'`
- **Relationships**:
  - Many-to-One with `events` via `event_id`.
  - Many-to-One with `contestants` via `contestant_id`.

#### **Table: event_judges**

| Column Name      | Data Type               | Constraints                               |
|------------------|-------------------------|-------------------------------------------|
| event_id         | `UUID`                  | `REFERENCES events(id)`, `NOT NULL`       |
| judge_id         | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| assigned_categories | `JSONB`              |                                           |
| created_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Primary Key**: Composite of `event_id` and `judge_id`

#### **Table: judging_criteria**

| Column Name    | Data Type               | Constraints                                  |
|----------------|-------------------------|----------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| event_id       | `UUID`                  | `REFERENCES events(id)`, `NOT NULL`          |
| name           | `VARCHAR(255)`          | `NOT NULL`                                   |
| description    | `TEXT`                  |                                              |
| max_score      | `SMALLINT`              | `NOT NULL`                                   |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                            |

- **Relationships**:
  - Many-to-One with `events` via `event_id`.

#### **Table: scores**

| Column Name    | Data Type               | Constraints                                 |
|----------------|-------------------------|---------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| event_id       | `UUID`                  | `REFERENCES events(id)`, `NOT NULL`         |
| contestant_id  | `UUID`                  | `REFERENCES contestants(user_id)`, `NOT NULL` |
| judge_id       | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`          |
| criterion_id   | `UUID`                  | `REFERENCES judging_criteria(id)`, `NOT NULL` |
| score          | `SMALLINT`              | `NOT NULL`                                  |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                           |

- **Relationships**:
  - Many-to-One with `events`, `contestants`, `users`, and `judging_criteria`.

---

### **7. Contestant's Digital Pageant Binder**

Manages contestant-specific resources and planning tools.

#### **Table: documents**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| file_url       | `TEXT`                  | `NOT NULL`                                |
| category       | `VARCHAR(50)`           |                                           |
| upload_date    | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: tasks**

| Column Name    | Data Type               | Constraints                                |
|----------------|-------------------------|--------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`         |
| title          | `VARCHAR(255)`          | `NOT NULL`                                 |
| description    | `TEXT`                  |                                            |
| status         | `VARCHAR(20)`           | `DEFAULT 'to_do'`, check constraint        |
| due_date       | `DATE`                  |                                            |
| priority       | `VARCHAR(20)`           | check constraint                           |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                          |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                          |

- **Status Values**: `'to_do'`, `'in_progress'`, `'completed'`
- **Priority Values**: `'low'`, `'medium'`, `'high'`
- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: wardrobe_items**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`       |
| name           | `VARCHAR(255)`          | `NOT NULL`                               |
| description    | `TEXT`                  |                                          |
| images         | `TEXT[]`                | Array of image URLs                      |
| category       | `VARCHAR(100)`          |                                          |
| color          | `VARCHAR(50)`           |                                          |
| occasions      | `TEXT[]`                | Array of occasions                       |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: appearances**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| contestant_id  | `UUID`                  | `REFERENCES contestants(user_id)`         |
| measurement_type| `VARCHAR(50)`          | `NOT NULL`                               |
| value          | `NUMERIC(10,2)`         | `NOT NULL`                               |
| date_taken     | `DATE`                  | `NOT NULL`                               |
| notes          | `TEXT`                  |                                          |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: travel_plans**

| Column Name           | Data Type               | Constraints                              |
|-----------------------|-------------------------|------------------------------------------|
| id                    | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id               | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`       |
| destination           | `VARCHAR(255)`          | `NOT NULL`                               |
| start_date            | `DATE`                  | `NOT NULL`                               |
| end_date              | `DATE`                  | `NOT NULL`                               |
| accommodation         | `VARCHAR(255)`          |                                          |
| transportation_details| `TEXT`                  |                                          |
| confirmation_numbers  | `TEXT`                  |                                          |
| created_at            | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at            | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: expenses**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`       |
| amount         | `NUMERIC(10,2)`         | `NOT NULL`                               |
| date           | `DATE`                  | `NOT NULL`                               |
| category       | `VARCHAR(100)`          |                                          |
| description    | `TEXT`                  |                                          |
| receipt_url    | `TEXT`                  | URL to receipt image                     |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: sponsorships**

| Column Name     | Data Type               | Constraints                              |
|-----------------|-------------------------|------------------------------------------|
| id              | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id         | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`       |
| sponsor_name    | `VARCHAR(255)`          | `NOT NULL`                               |
| amount          | `NUMERIC(10,2)`         | `NOT NULL`                               |
| date            | `DATE`                  | `NOT NULL`                               |
| sponsorship_letter_url | `TEXT`           | URL to sponsorship letter                |
| created_at      | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at      | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: fundraising_campaigns**

| Column Name    | Data Type               | Constraints                                |
|----------------|-------------------------|--------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()`  |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`         |
| title          | `VARCHAR(255)`          | `NOT NULL`                                 |
| description    | `TEXT`                  |                                            |
| goal_amount    | `NUMERIC(10,2)`         | `NOT NULL`                                 |
| current_amount | `NUMERIC(10,2)`         | `DEFAULT 0`                                |
| start_date     | `DATE`                  |                                            |
| end_date       | `DATE`                  |                                            |
| is_public      | `BOOLEAN`               | `DEFAULT TRUE`                             |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                          |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                          |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

#### **Table: fundraising_contributions**

| Column Name      | Data Type               | Constraints                               |
|------------------|-------------------------|-------------------------------------------|
| id               | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| campaign_id      | `UUID`                  | `REFERENCES fundraising_campaigns(id)`, `NOT NULL` |
| contributor_name | `VARCHAR(255)`          |                                           |
| amount           | `NUMERIC(10,2)`         | `NOT NULL`                                |
| date             | `DATE`                  | `DEFAULT NOW()`                           |
| message          | `TEXT`                  |                                           |
| created_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Relationships**:
  - Many-to-One with `fundraising_campaigns` via `campaign_id`.

---

### **8. Messaging and Notifications**

Handles user communications and alerts.

#### **Table: conversations**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| type           | `VARCHAR(20)`           | `NOT NULL`, check constraint              |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Type Values**: `'direct'`, `'group'`

#### **Table: conversation_participants**

| Column Name      | Data Type               | Constraints                               |
|------------------|-------------------------|-------------------------------------------|
| conversation_id  | `UUID`                  | `REFERENCES conversations(id)`, `NOT NULL` |
| user_id          | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| joined_at        | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Primary Key**: Composite of `conversation_id` and `user_id`

#### **Table: messages**

| Column Name      | Data Type               | Constraints                               |
|------------------|-------------------------|-------------------------------------------|
| id               | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| conversation_id  | `UUID`                  | `REFERENCES conversations(id)`, `NOT NULL` |
| sender_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| content          | `TEXT`                  | `NOT NULL`                                |
| sent_at          | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| created_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at       | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

#### **Table: notifications**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| type           | `VARCHAR(50)`           | `NOT NULL`                                |
| message        | `TEXT`                  | `NOT NULL`                                |
| is_read        | `BOOLEAN`               | `DEFAULT FALSE`                           |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Relationships**:
  - Many-to-One with `users` via `user_id`.

---

### **9. Forums and Discussions**

Enables community interactions through forums.

#### **Table: forum_categories**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| name           | `VARCHAR(100)`          | `NOT NULL`                                |
| description    | `TEXT`                  |                                           |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

#### **Table: forum_threads**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| category_id    | `UUID`                  | `REFERENCES forum_categories(id)`, `NOT NULL` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| title          | `VARCHAR(255)`          | `NOT NULL`                                |
| content        | `TEXT`                  | `NOT NULL`                                |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Relationships**:
  - Many-to-One with `forum_categories` via `category_id`.
  - Many-to-One with `users` via `user_id`.

#### **Table: forum_posts**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| thread_id      | `UUID`                  | `REFERENCES forum_threads(id)`, `NOT NULL` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| content        | `TEXT`                  | `NOT NULL`                                |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Relationships**:
  - Many-to-One with `forum_threads` via `thread_id`.
  - Many-to-One with `users` via `user_id`.

---

### **10. Media Kits and Social Media Management**

Allows contestants to create media kits and schedule social media posts.

#### **Table: media_kits**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| template_id    | `UUID`                  |                                           |
| content        | `JSONB`                 | JSON data of the media kit                |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

#### **Table: social_media_posts**

| Column Name    | Data Type               | Constraints                               |
|----------------|-------------------------|-------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| user_id        | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`        |
| platform       | `VARCHAR(50)`           | `NOT NULL`                                |
| content        | `TEXT`                  | `NOT NULL`                                |
| scheduled_at   | `TIMESTAMP WITH TIME ZONE` |                                           |
| status         | `VARCHAR(20)`           | `DEFAULT 'scheduled'`, check constraint   |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                         |

- **Status Values**: `'scheduled'`, `'posted'`, `'failed'`

---

### **11. Coaches and Coaching Services**

Information specific to users with the role of `coach`.

#### **Table: coaches**

| Column Name        | Data Type               | Constraints                              |
|--------------------|-------------------------|------------------------------------------|
| user_id            | `UUID`                  | `PRIMARY KEY`, `REFERENCES users(id)`    |
| bio                | `TEXT`                  |                                          |
| experience         | `TEXT`                  |                                          |
| certifications     | `TEXT`                  |                                          |
| services_offered   | `JSONB`                 |                                          |
| availability       | `JSONB`                 |                                          |
| pricing            | `JSONB`                 |                                          |
| created_at         | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at         | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Relationships**:
  - One-to-One with `users` via `user_id`.

---

### **12. Parent-Child Relationships**

Links parents to their children's accounts.

#### **Table: parent_child_links**

| Column Name    | Data Type               | Constraints                            |
|----------------|-------------------------|----------------------------------------|
| parent_id      | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`     |
| child_id       | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`     |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                      |

- **Primary Key**: Composite of `parent_id` and `child_id`
- **Relationships**:
  - Many-to-Many between `users` (parents and children).

---

### **13. Admin and Moderation**

Tables for administrative functions.

#### **Table: reports**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| id             | `UUID`                  | `PRIMARY KEY`, `DEFAULT uuid_generate_v4()` |
| reported_by    | `UUID`                  | `REFERENCES users(id)`, `NOT NULL`       |
| content_type   | `VARCHAR(50)`           | `NOT NULL`                               |
| content_id     | `UUID`                  | `NOT NULL`                               |
| reason         | `VARCHAR(255)`          | `NOT NULL`                               |
| description    | `TEXT`                  |                                          |
| status         | `VARCHAR(20)`           | `DEFAULT 'pending'`, check constraint    |
| created_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| updated_at     | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |

- **Status Values**: `'pending'`, `'reviewed'`, `'resolved'`

#### **Table: system_logs**

| Column Name    | Data Type               | Constraints                              |
|----------------|-------------------------|------------------------------------------|
| id             | `BIGSERIAL`             | `PRIMARY KEY`                            |
| timestamp      | `TIMESTAMP WITH TIME ZONE` | `DEFAULT NOW()`                        |
| level          | `VARCHAR(20)`           | `NOT NULL`                               |
| message        | `TEXT`                  | `NOT NULL`                               |
| context        | `JSONB`                 |                                          |

- **Level Values**: `'info'`, `'warning'`, `'error'`

---

## **Summary of Relationships**

- **Users**:
  - Linked to **User Profiles** (`user_profiles`).
  - Can have multiple **Roles** via the `role` column.
  - Can be **Contestants**, **Business Owners**, **Directors**, **Coaches**, **Parents**, or **Admins**.

- **Businesses**:
  - Owned and managed by users through **Business Staff** (`business_staff`).
  - Have multiple **Business Listings** (`business_listings`).
  - Staff members have **Permissions** (`business_permissions`) defining their access within the business.

- **Contestants**:
  - Participate in **Events** through **Event Registrations** (`event_registrations`).
  - Have access to **Digital Pageant Binder** resources like **Documents**, **Tasks**, **Wardrobe Items**, **Appearances**, **Travel Plans**, **Expenses**, **Sponsorships**, and **Fundraising Campaigns**.

- **Events**:
  - Managed by **Directors**.
  - Include **Judging Criteria**, **Event Judges**, and **Scores**.

- **Messaging and Notifications**:
  - Users communicate via **Conversations** and **Messages**.
  - Receive **Notifications** based on activities and system alerts.

- **Forums and Discussions**:
  - Users interact through **Forum Categories**, **Forum Threads**, and **Forum Posts**.

- **Parent-Child Links**:
  - **Parents** linked to **Contestant Children** via **Parent-Child Links**.

- **Coaches**:
  - Provide services to **Contestants**.
  - Manage their profiles and offerings in the **Coaches** table.

---