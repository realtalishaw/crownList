# Contestant Documentation

## ContestantDashboardPage (/contestant/dashboard)
**Description:** Central dashboard for contestants to manage competition preparation.

**User Stories:**
- As a contestant, I want to view my preparation progress
- As a contestant, I want to access my digital binder
- As a contestant, I want to track upcoming deadlines

**Components:**
- Progress overview
- Task tracker
- Calendar widget
- Recent activity
- Quick actions
- Notifications center

**APIs:**
- GET `/portal-access`
- GET `/portal-progress`

## ContestantWalletPage (/contestant/dashboard/wallet)
**Description:** Financial management and transaction history.

**User Stories:**
- As a contestant, I want to manage my competition budget
- As a contestant, I want to track expenses
- As a contestant, I want to view payment history

**Components:**
- Balance overview
- Transaction history
- Payment methods
- Budget tracker
- Expense categories
- Export functions

**APIs:**
- GET `/wallet`
- GET `/wallet-transactions`
- GET `/payment-methods`

## ContestantFavoritesPage (/contestant/dashboard/favorites)
**Description:** Saved items, businesses, and resources.

**User Stories:**
- As a contestant, I want to access saved items
- As a contestant, I want to organize favorites
- As a contestant, I want to manage collections

**Components:**
- Saved items grid
- Collection manager
- Sort/filter options
- Quick actions
- Share functionality

**APIs:**
- GET `/favorites`
- GET `/collections`
- POST `/saved-items`

## EditProfilePage (/contestant/profile/edit)
**Description:** Profile management and settings.

**User Stories:**
- As a contestant, I want to edit my profile
- As a contestant, I want to manage privacy settings
- As a contestant, I want to update contact info

**Components:**
- Profile editor
- Privacy controls
- Social links
- Platform settings
- Notification preferences

**APIs:**
- GET `/me`
- PUT `/update-profile`
- PUT `/update-privacy`

## ResaleOverviewPage (/contestant/dashboard/resale)
**Description:** Overview of resale program participation.

**User Stories:**
- As a contestant, I want to track resale items
- As a contestant, I want to view earnings
- As a contestant, I want to manage listings

**Components:**
- Resale stats
- Active listings
- Earnings summary
- Shipping status
- Performance metrics

**APIs:**
- GET `/resale/overview`
- GET `/resale-items`
- GET `/resale-analytics`

## MyResaleItemsPage (/contestant/dashboard/resale/items)
**Description:** Management of items listed for resale.

**User Stories:**
- As a contestant, I want to list items
- As a contestant, I want to track item status
- As a contestant, I want to manage pricing

**Components:**
- Item list
- Upload form
- Price editor
- Status tracker
- Analytics view

**APIs:**
- GET `/resale-items`
- POST `/resale-items`

## ShippingLabelsPage (/contestant/dashboard/resale/shipping)
**Description:** Shipping label generation and tracking.

**User Stories:**
- As a contestant, I want to generate shipping labels
- As a contestant, I want to track shipments
- As a contestant, I want to manage returns

**Components:**
- Label generator
- Tracking overview
- Return portal
- Shipping history
- Cost calculator

**APIs:**
- POST `/shipping-label`
- GET `/dropoff-locations`

## ResaleEarningsPage (/contestant/dashboard/resale/earnings)
**Description:** Earnings tracking and payout management.

**User Stories:**
- As a contestant, I want to track earnings
- As a contestant, I want to request payouts
- As a contestant, I want to view payment history

**Components:**
- Earnings dashboard
- Payout requests
- Transaction history
- Performance metrics
- Tax documents

**APIs:**
- GET `/resale/earnings`
- POST `/request-payout`
- GET `/payouts`

## ResaleAnalyticsPage (/contestant/dashboard/resale/analytics)
**Description:** Performance analytics for resale items.

**User Stories:**
- As a contestant, I want to view sales analytics
- As a contestant, I want to track item performance
- As a contestant, I want to optimize listings

**Components:**
- Analytics dashboard
- Performance charts
- Item insights
- Market trends
- Optimization tips

**APIs:**
- GET `/resale-analytics`
- GET `/resale-item-tracking`
