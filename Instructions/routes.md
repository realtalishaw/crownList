## Main Pages (Public)
- [ ] `/` -> `HomePage`
- [ ] `/about` -> `AboutPage`
- [ ] `/contact` -> `ContactPage`
- [ ] `/media-kit` -> `MediaKitPage`
- [ ] `/privacy-policy` -> `PrivacyPolicyPage`
- [ ] `/terms-conditions` -> `TermsOfServicePage`
- [ ] `/faqs` -> `FAQPage`
- [ ] `/help` -> `HelpCenterPage`
- [ ] `/help/search` -> `HelpSearchResultsPage`
- [ ] `/help/[categoryId]` -> `HelpCategoryPage`
- [ ] `/help/[categoryId]/[topicId]` -> `HelpTopicPage` 
- [ ] `/for-directors` -> `DirectorsLandingPage`
- [ ] `/for-businesses` -> `BusinessLandingPage`

## Authentication Routes
- [ ] `/auth/login` -> `LoginPage`
- [ ] `/auth/register` -> `RegisterPage`
- [ ] `/auth/reset-password` -> `ResetPasswordPage`


## Resource Center (Public)
- [ ] `/resources` -> `ResourcesHomePage`
- [ ] `/resources/[categoryId]` -> `ResourceCategoryPage`
- [ ] `/resources/[resourceId]` -> `ResourceDetailPage`
- [ ] `/resources/search` -> `ResourceSearchResultsPage`

## Events (Public)
- [ ] `/events` -> `EventsPage`
- [ ] `/events/[eventId]` -> `EventDetailPage`
- [ ] `/events/calendar` -> `EventCalendarPage`
- [ ] `/events/categories/[categoryId]` -> `EventCategoryPage`

## Blog (Public)
- [ ] `/blog` -> `BlogPage`
- [ ] `/blog/[postId]` -> `BlogPostPage`
- [ ] `/blog/categories` -> `BlogCategoriesPage`


## Community (Public)
- [ ] `/community` -> `CommunityHomePage`
- [ ] `/community/groups` -> `CommunityGroupsPage`
- [ ] `/community/groups/[groupId]` -> `CommunityGroupPage`
- [ ] `/community/posts/[postId]` -> `PostPage`
- [ ] `/community/search` -> `CommunitySearchPage`
- [ ] `/community/members` -> `CommunityMembersPage`
- [ ] `/community/members/[username]` -> `MemberProfilePage`
- [ ] `/community/members/search` -> `MemberSearchPage`


## Shop (Public)
- [ ] `/shop` -> `ShopHomePage`
- [ ] `/shop/[productId]` -> `ProductDetailPage`
- [ ] `/shop/categories/[categoryId]` -> `ShopCategoryPage`
- [ ] `/shop/search` -> `ShopSearchResultsPage`
- [ ] `/shop/cart` -> `ShoppingCartPage`
- [ ] `/shop/checkout` -> `CheckoutPage`
- [ ] `/shop/orders` -> `OrdersPage`
- [ ] `/shop/[storeId]` -> `StorePage`

## Sell Routes (Public)
- [ ] `/sell` -> `SellLandingPage` # Information about the resale program
- [ ] `/sell/guide` -> `SellGuidePage`
- [ ] `/sell/earnings` -> `EarningsPage`

## Directory (Public)
- [ ] `/directory` -> `DirectoryHomePage`
- [ ] `/directory/search` -> `SearchResultsPage`
- [ ] `/directory/categories/[categoryId]` -> `CategoryPage`
- [ ] `/directory/businesses/[businessId]` -> `BusinessProfilePage`


## Contestant Routes (Authenticated)
- [ ] `/contestant/dashboard` -> `ContestantDashboardPage`
- [ ] `/contestant/dashboard/wallet` -> `ContestantWalletPage`
- [ ] `/contestant/dashboard/favorites` -> `ContestantFavoritesPage`
- [ ] `/contestant/profile/edit` -> `EditProfilePage`


### Contestant Resale Management
- [ ] `/contestant/dashboard/resale` -> `ResaleOverviewPage`
- [ ] `/contestant/dashboard/resale/items` -> `MyResaleItemsPage`
- [ ] `/contestant/dashboard/resale/shipping` -> `ShippingLabelsPage`
- [ ] `/contestant/dashboard/resale/earnings` -> `ResaleEarningsPage`
- [ ] `/contestant/dashboard/resale/analytics` -> `ResaleAnalyticsPage`

### Digital Pageant Binder
- [ ] `/contestant/dashboard/binder` -> `DigitalBinderHomePage`
- [ ] `/contestant/dashboard/binder/[binderId]` -> `BinderPage`
- [ ] `/contestant/dashboard/binder/[binderId]/documents` -> `DocumentsPage`
- [ ] `/contestant/dashboard/binder/[binderId]/paperwork` -> `PaperworkPage`
- [ ] `/contestant/dashboard/binder/[binderId]/wardrobe` -> `WardrobePage`
- [ ] `/contestant/dashboard/binder/[binderId]/appearances` -> `AppearancesPage`
- [ ] `/contestant/dashboard/binder/[binderId]/schedule` -> `SchedulePage`
- [ ] `/contestant/dashboard/binder/[binderId]/packing-list` -> `PackingListPage`
- [ ] `/contestant/dashboard/binder/[binderId]/competitions` -> `CompetitionsPage`
- [ ] `/contestant/dashboard/binder/[binderId]/trip-details` -> `TripDetailsPage`

### Brand & Platform
- [ ] `/contestant/dashboard/binder/[binderId]/brand` -> `BrandHomePage`

# Personal Branding
- [ ] `/contestant/dashboard/binder/[binderId]/brand/social` -> `SocialMediaManagerPage`
- [ ] `/contestant/dashboard/binder/[binderId]/brand/media-kit` -> `MediaKitPage`
- [ ] `/contestant/dashboard/binder/[binderId]/brand/website` -> `TitleholderWebsitePage`
- [ ] `/contestant/dashboard/binder/[binderId]/brand/website/edit` -> `WebsiteEditorPage`
- [ ] `/contestant/dashboard/binder/[binderId]/brand/website/preview` -> `WebsitePreviewPage`

# Social Impact
- [ ] `/contestant/dashboard/binder/[binderId]/brand/platform` -> `PlatformDevelopmentPage`

### Financial Management
- [ ] `/contestant/dashboard/binder/[binderId]/finances` -> `FinancialManagementPage`
- [ ] `/contestant/dashboard/binder/[binderId]/finances/expenses` -> `ExpensesPage`
- [ ] `/contestant/dashboard/binder/[binderId]/finances/sponsorships` -> `SponsorshipsPage`
- [ ] `/contestant/dashboard/binder/[binderId]/finances/fundraising` -> `FundraisingPage`

### Ambassador Program
- [ ] `/contestant/dashboard/ambassador` -> `AmbassadorPage`
- [ ] `/contestant/dashboard/ambassador/tasks` -> `AmbassadorTasksPage`
- [ ] `/contestant/dashboard/ambassador/tasks/[taskId]` -> `TaskDetailPage`\
- [ ] `/contestant/dashboard/ambassador/rewards` -> `RewardsPage`
- [ ] `/contestant/dashboard/ambassador/rewards/[rewardId]/redeem` -> `RewardRedemptionPage`
- [ ] `/contestant/dashboard/ambassador/points` -> `PointsPage`
- [ ] `/contestant/dashboard/ambassador/leaderboard` -> `AmbassadorLeaderboardPage`

### Communication
- [ ] `/contestant/messages` -> `MessagesPage`
- [ ] `/contestant/messages/[conversationId]` -> `ConversationPage`
- [ ] `/contestant/notifications` -> `NotificationsPage`
- [ ] `/contestant/settings` -> `SettingsPage`

## Business Routes (Authenticated)
- [ ] `/business/dashboard` -> `BusinessDashboardPage`
- [ ] `/business/dashboard/profile/edit` -> `EditBusinessProfilePage`

### Listings Management
- [ ] `/business/dashboard/listings` -> `ListingsManagementPage`
- [ ] `/business/dashboard/listings/new` -> `CreateListingPage`
- [ ] `/business/dashboard/listings/[listingId]/edit` -> `EditListingPage`

### Bookings & Calendar
- [ ] `/business/dashboard/bookings` -> `BookingsPage`
- [ ] `/business/dashboard/bookings/[bookingId]` -> `BookingDetailPage`
- [ ] `/business/dashboard/calendar` -> `AvailabilityCalendarPage`

### Reviews
- [ ] `/business/dashboard/reviews` -> `ReviewsManagementPage`
- [ ] `/business/dashboard/reviews/[reviewId]` -> `ReviewDetailPage`

### Analytics
- [ ] `/business/dashboard/analytics` -> `AnalyticsPage`
- [ ] `/business/dashboard/analytics/performance` -> `PerformanceMetricsPage`
- [ ] `/business/dashboard/analytics/competitors` -> `CompetitorAnalysisPage`

### Finances
- [ ] `/business/dashboard/finances` -> `BusinessFinancesPage`
- [ ] `/business/dashboard/finances/invoices` -> `InvoicesPage`
- [ ] `/business/dashboard/finances/payments` -> `PaymentsPage`
- [ ] `/business/dashboard/finances/reports` -> `FinancialReportsPage`
- [ ] `/business/dashboard/finances/tax-documents` -> `TaxDocumentsPage`

### Promotions
- [ ] `/business/dashboard/promotions` -> `PromotionsPage`
- [ ] `/business/dashboard/promotions/new` -> `CreatePromotionPage`
- [ ] `/business/dashboard/promotions/[promotionId]/edit` -> `EditPromotionPage`
- [ ] `/business/dashboard/promotions/analytics` -> `PromotionAnalyticsPage`

### Business Event Management
- [ ] `/business/events` -> `BusinessEventManagementPage`
- [ ] `/business/events/new` -> `BusinessCreateEventPage`
- [ ] `/business/events/[eventId]/edit` -> `BusinessEditEventPage`
- [ ] `/business/events/[eventId]/schedule` -> `BusinessEventSchedulePage`
- [ ] `/business/events/[eventId]/tickets` -> `BusinessEventTicketsPage`
- [ ] `/business/events/[eventId]/sponsors` -> `BusinessEventSponsorsPage`
- [ ] `/business/events/[eventId]/vendors` -> `BusinessEventVendorsPage`

### Settings
- [ ] `/business/dashboard/settings` -> `BusinessSettingsPage`
- [ ] `/business/dashboard/settings/team` -> `TeamManagementPage`
- [ ] `/business/dashboard/settings/integrations` -> `IntegrationsPage`
- [ ] `/business/dashboard/settings/billing` -> `BillingSettingsPage`

### Retailer Resale Program
- [ ] `/business/dashboard/resale` -> `RetailerResaleOverviewPage`
- [ ] `/business/dashboard/resale/listings` -> `ResaleListingsPage`
- [ ] `/business/dashboard/resale/listings/new` -> `CreateResaleListingPage`
- [ ] `/business/dashboard/resale/payouts` -> `ResalePayoutsPage`
- [ ] `/business/dashboard/resale/analytics` -> `RetailerResaleAnalyticsPage`


## Director Routes (Authenticated)
- [ ] `/director/dashboard` -> `DirectorDashboardPage`

### Event Management
- [ ] `/director/events` -> `EventManagementPage`
- [ ] `/director/events/new` -> `CreateEventPage`
- [ ] `/director/events/[eventId]/edit` -> `EditEventPage`
- [ ] `/director/events/[eventId]/schedule` -> `EventSchedulePage`
- [ ] `/director/events/[eventId]/tickets` -> `EventTicketsPage`
- [ ] `/director/events/[eventId]/sponsors` -> `EventSponsorsPage`
- [ ] `/director/events/[eventId]/vendors` -> `EventVendorsPage`

### Contestant Management
- [ ] `/director/contestants` -> `ContestantManagementPage`
- [ ] `/director/contestants/[contestantId]` -> `ContestantDetailPage`
- [ ] `/director/contestants/import` -> `ImportContestantsPage`
- [ ] `/director/contestants/edit/[contestantId]` -> `EditContestantPage`

### Judging Management
- [ ] `/director/judging` -> `JudgingManagementPage`
- [ ] `/director/judging/[eventId]` -> `EventScoringPage`
- [ ] `/director/judging/[eventId]/results` -> `ScoringResultsPage`
- [ ] `/director/judging/judges` -> `JudgesManagementPage`


### People's Choice
- [ ] `/director/peoples-choice` -> `PeoplesChoiceManagementPage`
- [ ] `/director/peoples-choice/new` -> `CreatePeoplesChoicePage`
- [ ] `/director/peoples-choice/[eventId]/contestants` -> `ManageContestantsPage`
- [ ] `/director/peoples-choice/[eventId]/analytics` -> `VotingAnalyticsPage`
- [ ] `/director/peoples-choice/[eventId]/settings` -> `VotingSettingsPage`

### Staff Management
- [ ] `/director/staff` -> `StaffManagementPage`
- [ ] `/director/staff/new` -> `AddStaffMemberPage`
- [ ] `/director/staff/[staffId]/edit` -> `EditStaffMemberPage`
- [ ] `/director/staff/roles` -> `RoleManagementPage`

### Finances
- [ ] `/director/finances` -> `DirectorFinancesPage`
- [ ] `/director/finances/reports` -> `FinancialReportsPage`


### Communications
- [ ] `/director/communications` -> `CommunicationsPage`
- [ ] `/director/communications/bulk` -> `BulkMessagingPage`
- [ ] `/director/communications/templates` -> `MessageTemplatesPage`
- [ ] `/director/communications/announcements` -> `AnnouncementsPage`


### Settings & Support
- [ ] `/director/settings` -> `DirectorSettingsPage`
- [ ] `/director/support` -> `DirectorSupportPage`

## Public Voting Routes
- [ ] `/vote` -> `VotingHomePage`
- [ ] `/vote/[eventId]` -> `VotingEventPage`
- [ ] `/vote/[eventId]/contestant/[contestantId]` -> `ContestantVotingPage`


## Admin Routes (Authenticated)
- [ ] `/admin/dashboard` -> `AdminDashboardPage`
- [ ] `/admin/users` -> `AdminUsersPage`
- [ ] `/admin/users/[userId]` -> `AdminUserPage`
- [ ] `/admin/businesses` -> `AdminBusinessesPage`
- [ ] `/admin/businesses/pending` -> `PendingBusinessesPage`
- [ ] `/admin/businesses/[businessId]` -> `AdminBusinessDetailsPage`
- [ ] `/admin/buinssesses/[businessId]/reviews` -> `AdminBusinessReviewsPage`

## Maintenance Routes
- [ ] `/404` -> `NotFoundPage`
- [ ] `/500` -> `ServerErrorPage`
- [ ] `/403` -> `ForbiddenPage`
- [ ] `/maintenance` -> `MaintenancePage`


## API Routes

### Admin Routes
- `/api/admin/overview` -> `GET` Get admin dashboard overview
- `/api/admin/platform-activity` -> `GET` Get platform activity metrics
- `/api/admin/user-statistics` -> `GET` Get detailed user statistics
- `/api/admin/recent-activity` -> `GET` Get recent activity
- `/api/admin/moderation-overview` -> `GET` Get content moderation overview
- `/api/admin/user-management` -> `GET` Get user management overview

### Ambassador Program Routes
- `/api/ambassador/leaderboard` -> `GET` Get leaderboard rankings
- `/api/ambassador/rank` -> `GET` Get ambassador's current ranking
- `/api/ambassador/points-summary` -> `GET` Get ambassador points summary
- `/api/ambassador/points-history` -> `GET` Get points transaction history
- `/api/ambassador/points-adjustment` -> `POST` Create manual points adjustment
- `/api/ambassador/rewards` -> `GET` Get available rewards
- `/api/ambassador/reward-redemption` -> `POST` Redeem reward
- `/api/ambassador/redemption-history` -> `GET` Get reward redemption history

### Analytics Routes
- `/api/analytics/overview` -> `GET` Get analytics overview
- `/api/analytics/revenue` -> `GET` Get revenue analytics
- `/api/analytics/service-performance` -> `GET` Get service performance analytics

### Business Routes
- `/api/business/dashboard` -> `GET` Get business dashboard
- `/api/business/management/overview` -> `GET` Get business management overview
- `/api/business/applications/pending` -> `GET` Get pending business applications
- `/api/business/application/review` -> `PUT` Review business application
- `/api/business/verification` -> `POST` Add verification note

### Bookings Routes
- `/api/bookings` -> `GET/POST` Manage bookings
- `/api/bookings/[bookingId]` -> `GET/PUT` Get/Update booking details
- `/api/bookings/reschedule` -> `POST` Reschedule booking
- `/api/bookings/cancel` -> `POST` Cancel booking
- `/api/bookings/reminder` -> `POST` Send booking reminder

### Calendar Routes
- `/api/calendar/service-schedules` -> `GET/POST` Manage service schedules
- `/api/calendar/slots` -> `GET` Get available slots
- `/api/calendar/block-dates` -> `POST` Block date range
- `/api/calendar/custom-availability` -> `POST` Set custom availability

### Communications Routes
- `/api/communications/overview` -> `GET` Get communications overview
- `/api/communications/messages` -> `GET/POST` Manage messages
- `/api/communications/templates` -> `GET` Get message templates

### Directory Routes
- `/api/directory` -> `GET` Get directory listings
- `/api/directory/search` -> `GET` Search directory
- `/api/directory/user/[username]` -> `GET` Get user profile by username

### Events Routes
- `/api/events` -> `GET/POST` Manage events
- `/api/events/[eventId]` -> `GET/PUT/DELETE` Event operations
- `/api/events/schedule` -> `GET/POST` Manage event schedule
- `/api/events/tickets` -> `GET/POST` Manage event tickets
- `/api/events/sponsors` -> `GET/POST` Manage event sponsors

### Financial Routes
- `/api/finances/reports` -> `GET/POST` Generate financial reports
- `/api/finances/transactions` -> `GET` Get transactions
- `/api/finances/invoices` -> `GET/POST` Manage invoices
- `/api/finances/payments` -> `GET/POST` Manage payments
- `/api/finances/tax-documents` -> `GET` Get tax documents

### Judging Routes
- `/api/judging/scoring` -> `POST` Record competition scores
- `/api/judging/results` -> `GET` Get competition results
- `/api/judging/awards` -> `POST` Create award/placement

### Listings Routes
- `/api/listings` -> `GET/POST` Manage business listings
- `/api/listings/[listingId]` -> `GET/PUT/DELETE` Listing operations
- `/api/listings/media` -> `POST` Add media to listing
- `/api/listings/stats` -> `GET` Get listing statistics

### Marketplace Routes
- `/api/marketplace/products` -> `GET/POST` Manage products
- `/api/marketplace/categories` -> `GET` Get product categories
- `/api/marketplace/cart` -> `GET/POST/PUT` Manage shopping cart
- `/api/marketplace/orders` -> `GET/POST` Manage orders

### Pageant Management Routes
- `/api/pageant/contestants` -> `GET/POST` Manage contestants
- `/api/pageant/competition/areas` -> `GET/POST` Manage competition areas
- `/api/pageant/documents` -> `GET/POST` Manage pageant documents
- `/api/pageant/finances` -> `GET` Get pageant financial overview

### People's Choice Routes
- `/api/peoples-choice/overview` -> `GET` Get people's choice overview
- `/api/peoples-choice/events` -> `GET` Get voting events
- `/api/peoples-choice/contestants` -> `GET` Get contestants for voting
- `/api/peoples-choice/vote` -> `POST` Purchase votes

### Promotions Routes
- `/api/promotions` -> `GET/POST` Manage promotions
- `/api/promotions/[promotionId]` -> `GET/PUT/DELETE` Promotion operations
- `/api/promotions/analytics` -> `GET` Get promotion analytics

### Resale Program Routes
- `/api/resale/overview` -> `GET` Get resale overview
- `/api/resale/items` -> `GET/POST` Manage resale items
- `/api/resale/shipments` -> `GET/POST` Manage shipments
- `/api/resale/earnings` -> `GET` View earnings
- `/api/resale/analytics` -> `GET` Get resale analytics

### Reviews Routes
- `/api/reviews` -> `GET/POST` Manage reviews
- `/api/reviews/[reviewId]` -> `GET/PUT/DELETE` Review operations
- `/api/reviews/response` -> `POST` Respond to review
- `/api/reviews/stats` -> `GET` Get review statistics

### Settings Routes
- `/api/settings/notifications` -> `GET/PUT` Manage notification preferences
- `/api/settings/privacy` -> `GET/PUT` Manage privacy settings
- `/api/settings/account` -> `GET/PUT` Manage account settings
- `/api/settings/business` -> `GET/PUT` Manage business settings

### Staff Management Routes
- `/api/staff/overview` -> `GET` Get staff management overview
- `/api/staff/members` -> `GET/POST` Manage staff members
- `/api/staff/roles` -> `GET/POST` Manage staff roles

### Support Routes
- `/api/support/tickets` -> `GET/POST` Manage support tickets
- `/api/support/ticket/[ticketId]` -> `GET/PUT` Ticket operations
- `/api/support/ticket/message` -> `POST` Add message to ticket

### User Routes
- `/api/users/profile` -> `GET/PUT` Manage user profile
- `/api/users/settings` -> `GET/PUT` Manage user settings
- `/api/users/notifications` -> `GET/PUT` Manage notifications

### Wallet Routes
- `/api/wallet` -> `GET` Get wallet information
- `/api/wallet/transactions` -> `GET` Get wallet transactions
- `/api/wallet/payment-methods` -> `GET/POST` Manage payment methods
- `/api/wallet/subscriptions` -> `GET/POST` Manage subscriptions

### Website Routes
- `/api/website` -> `GET/POST/PUT/DELETE` Manage website
- `/api/website/analytics` -> `GET` Get website analytics
- `/api/website/publish` -> `POST` Publish website

### Authentication Routes
- `/api/auth/login` -> `POST` Login endpoint
- `/api/auth/register` -> `POST` Register new user
- `/api/auth/verify` -> `POST` Verify email
- `/api/auth/reset-password` -> `POST` Reset password

### File Management Routes
- `/api/files/upload` -> `POST` Upload file
- `/api/files/[fileId]` -> `GET/DELETE` File operations
- `/api/files/download/[fileId]` -> `GET` Download file

