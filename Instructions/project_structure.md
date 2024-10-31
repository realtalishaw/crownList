# Project Structure

```ascii
.
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx           # Login page with magic link and OAuth
│   │   ├── register/
│   │   │   └── page.tsx           # Registration page
│   │   ├── reset-password/
│   │   │   └── page.tsx           # Password reset functionality
│   │   ├── verify-email/
│   │   │   └── page.tsx           # Email verification handling
│   │   ├── callback/
│   │   │   └── route.ts           # OAuth callback handling
│   │   └── layout.tsx             # Auth layout wrapper
│   │
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── dashboard/         # Admin dashboard
│   │   │   ├── users/            # User management
│   │   │   └── businesses/       # Business approval/management
│   │   │
│   │   ├── business/
│   │   │   ├── dashboard/        # Business owner dashboard
│   │   │   ├── profile/          # Business profile management
│   │   │   ├── listings/         # Service listings management
│   │   │   ├── bookings/         # Booking management
│   │   │   ├── reviews/          # Review management
│   │   │   └── analytics/        # Business analytics
│   │   │
│   │   ├── contestant/
│   │   │   ├── dashboard/        # Contestant dashboard
│   │   │   ├── profile/          # Profile management
│   │   │   ├── binder/           # Digital pageant binder
│   │   │   ├── messages/         # Messaging system
│   │   │   └── notifications/    # Notification center
│   │   │
│   │   └── director/
│   │       ├── dashboard/        # Director dashboard
│   │       ├── events/           # Event management
│   │       ├── contestants/      # Contestant management
│   │       ├── judging/          # Judging system
│   │       └── peoples-choice/   # People's choice voting
│   │
│   ├── (public)/
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog section
│   │   ├── contact/             # Contact page
│   │   ├── directory/           # Business directory
│   │   ├── events/              # Public events listing
│   │   ├── forums/              # Community forums
│   │   ├── resources/           # Resource center
│   │   ├── shop/                # E-commerce section
│   │   └── vote/                # Public voting interface
│   │
│   ├── error.tsx               # Global error handling
│   ├── layout.tsx              # Root layout
│   ├── loading.tsx             # Loading states
│   └── page.tsx                # Homepage
│
├── components/
│   ├── layout/
│   │   ├── footer.tsx          # Global footer
│   │   └── navbar.tsx          # Global navigation
│   │
│   ├── directory/
│   │   ├── business-card.tsx   # Business listing card
│   │   ├── filters.tsx         # Directory filters
│   │   └── search-bar.tsx      # Directory search
│   │
│   └── ui/                     # shadcn/ui components
│
├── hooks/
│   ├── use-auth.ts             # Authentication hook
│   ├── use-session.ts          # Session management
│   └── use-toast.ts            # Toast notifications
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Supabase client config
│   │   └── server.ts           # Server-side Supabase
│   └── utils.ts                # Utility functions
│
├── types/
│   ├── business.ts             # Business type definitions
│   └── index.ts                # Common type definitions
│
├── public/
│   └── assets/                 # Static assets
│
└── Instructions/               # Project documentation
    ├── core_functionalities.md
    ├── database_schema.md
    ├── project_overview.md
    ├── routes.md
    ├── tech_stack.md
    └── user_stories.md
```

## Key Components

### Authentication System
- Magic link authentication
- OAuth providers support
- Email verification
- Password reset functionality
- Session management

### Dashboard System
- Role-based dashboards (Admin/Business/Contestant/Director)
- Protected routes
- Role-specific features and permissions
- Real-time updates

### Business Directory
- Advanced search and filtering
- Category management
- Business profiles
- Review system
- Booking management

### Digital Pageant Binder
- Document management
- Task tracking
- Schedule management
- Wardrobe planning
- Travel planning
- Financial tracking

### Event Management
- Event creation and scheduling
- Contestant registration
- Judge assignment
- Scoring system
- Results management

### People's Choice Voting
- Voting event management
- Contestant profiles
- Secure voting system
- Real-time results
- Payment processing

### Communication System
- Direct messaging
- Group chats
- Notifications
- Email integration
- SMS notifications

### Content Management
- Blog system
- Resource center
- Forums
- Media management
- Documentation

### E-commerce
- Product listings
- Shopping cart
- Payment processing
- Order management
- Inventory tracking

### Analytics
- Business insights
- Event statistics
- Voting analytics
- User engagement metrics
- Financial reporting

## Technical Notes

1. **Routing Structure**
   - App router with nested layouts
   - Group-based route organization
   - Dynamic route handling
   - Protected routes with middleware

2. **Component Organization**
   - Shared UI components
   - Feature-specific components
   - Layout components
   - Reusable hooks

3. **State Management**
   - Server components for static content
   - Client components for interactivity
   - Custom hooks for shared logic
   - Context for global state

4. **Database Integration**
   - Supabase client/server setup
   - Real-time subscriptions
   - Row-level security
   - Edge function support

5. **Authentication Flow**
   - Magic link primary auth
   - OAuth providers secondary
   - Session management
   - Role-based access

6. **Performance Optimization**
   - Static page generation
   - Dynamic imports
   - Image optimization
   - Edge caching

7. **Security Measures**
   - CSRF protection
   - XSS prevention
   - Input validation
   - Rate limiting