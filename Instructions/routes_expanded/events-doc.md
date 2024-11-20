# Events Documentation

## EventsPage (/events)
**Description:** Main events listing page showcasing upcoming and ongoing pageants and related events.

**User Stories:**
- As a user, I want to discover upcoming pageant events
- As a user, I want to filter events by location/type
- As a user, I want to save events I'm interested in

**Components:**
- Event calendar
- Event search
- Filter options
- Event cards
- Save/favorite functionality
- Location filter
- Date range selector

**APIs:**
- GET `/events`
- POST `/favorites` (for saving events)

## EventDetailPage (/events/[eventId])
**Description:** Detailed information about specific event including registration, schedule, and details.

**User Stories:**
- As a user, I want to view complete event details
- As a user, I want to register for events
- As a user, I want to view event schedules
- As a user, I want to contact event organizers

**Components:**
- Event overview
- Registration form
- Schedule timeline
- Location map
- Photo gallery
- Organizer contact
- Ticket options
- FAQ section

**APIs:**
- GET `/events/{eventId}`
- GET `/event-schedule`
- GET `/event-tickets`
- POST `/event-registration`

## EventCalendarPage (/events/calendar)
**Description:** Calendar view of all events with filtering and sorting capabilities.

**User Stories:**
- As a user, I want to view events in calendar format
- As a user, I want to filter events by category
- As a user, I want to export events to my calendar

**Components:**
- Interactive calendar
- Category filters
- Event quick view
- Calendar export
- List/grid toggle
- Date navigation
- Search functionality

**APIs:**
- GET `/events`
- GET `/event-schedule`

## EventCategoryPage (/events/categories/[categoryId])
**Description:** Category-specific event listings with relevant filters and information.

**User Stories:**
- As a user, I want to browse category-specific events
- As a user, I want to compare similar events
- As a user, I want to save category preferences

**Components:**
- Event list
- Category description
- Filter sidebar
- Sort options
- Save preferences
- Related categories
- Featured events

**APIs:**
- GET `/events` (filtered by category)
- GET `/categories`
