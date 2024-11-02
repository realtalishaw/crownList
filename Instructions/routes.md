## Main Pages (Public)
- [x] `/` -> `HomePage`
- [x] `/about` -> `AboutPage`
- [x] `/contact` -> `ContactPage`
- [x] `/media-kit` -> `MediaKitPage`
- [x] `/privacy-policy` -> `PrivacyPolicyPage`
- [x] `/terms-conditions` -> `TermsOfServicePage`
- [x] `/faqs` -> `FAQPage`
- [x] `/help` -> `HelpCenterPage`
- [ ] `/help/search` -> `HelpSearchResultsPage`
- [ ] `/help/[categoryId]` -> `HelpCategoryPage`
- [ ] `/help/[categoryId]/[topicId]` -> `HelpTopicPage` 

## Business Pages (Public)
- [x] `/for-directors` -> `DirectorsLandingPage`
- [x] `/for-businesses` -> `BusinessLandingPage`

## Authentication Routes
- [x] `/auth/login` -> `LoginPage`
- [x] `/auth/register` -> `RegisterPage`
- [x] `/auth/reset-password` -> `ResetPasswordPage`
- [x] `/auth/verify-email` -> `EmailVerificationPage`

## Resource Center (Public)
- [x] `/resources` -> `ResourcesHomePage`
- [x] `/resources/pageant-tips` -> `PageantTipsPage`
- [x] `/resources/interview-prep` -> `InterviewPrepPage`
- [x] `/resources/fitness-nutrition` -> `FitnessNutritionPage`
- [x] `/resources/wardrobe-styling` -> `WardrobeStylingPage`
- [x] `/resources/categories` -> `ResourcesCategoriesPage`
- [x] `/resources/[resourceId]` -> `ResourceDetailPage`
- [x] `/resources/search` -> `ResourceSearchResultsPage`

## Events (Public)
- [x] `/events` -> `EventsPage`
- [x] `/events/[eventId]` -> `EventDetailPage`
- [x] `/events/categories` -> `EventCategoriesPage`
- [x] `/events/search` -> `EventSearchPage`
- [x] `/events/calendar` -> `EventCalendarPage`
- [x] `/events/categories/[categoryId]` -> `EventCategoryPage`

## Blog (Public)
- [x] `/blog` -> `BlogPage`
- [x] `/blog/[postId]` -> `BlogPostPage`
- [x] `/blog/categories` -> `BlogCategoriesPage`


## Forum (Public)
- [x] `/forum` -> `ForumHomePage`
- [ ] `/forums/categories` -> `ForumCategoriesPage`
- [ ] `/forums/categories/[categoryId]` -> `ForumCategoryPage`
- [ ] `/forums/thread/[threadId]` -> `ThreadPage`
- [ ] `/forums/search` -> `ForumSearchPage`
- [ ] `/forums/tags` -> `ForumTagsPage`
- [ ] `/forums/users` -> `ForumUsersPage`
- [x] `/forums` -> `ForumsPage`

## Shop (Public)
- [x] `/shop` -> `ShopHomePage`
- [ ] `/shop/products` -> `ProductListPage`
- [x] `/shop/products/[productId]` -> `ProductDetailPage`
- [ ] `/shop/categories` -> `ShopCategoriesPage`
- [ ] `/shop/search` -> `ShopSearchResultsPage`
- [ ] `/shop/cart` -> `ShoppingCartPage`
- [ ] `/shop/checkout` -> `CheckoutPage`
- [ ] `/shop/orders` -> `OrdersPage`
- [ ] `/shop/wishlist` -> `WishlistPage`

## Sell Routes (Public)
- [ ] `/sell` -> `SellLandingPage` # Information about the resale program
- [ ] `/sell/how-it-works` -> `HowItWorksPage`
- [ ] `/sell/pricing` -> `PricingPage`
- [ ] `/sell/accepted-items` -> `AcceptedItemsPage`
- [ ] `/sell/success-stories` -> `SuccessStoriesPage`
- [ ] `/sell/faq` -> `SellerFAQPage`



## Directory (Public)
- [x] `/directory` -> `DirectoryHomePage`
- [x] `/directory/search` -> `SearchResultsPage`
- [x] `/directory/categories` -> `CategoriesListPage`
- [x] `/directory/categories/[categoryId]` -> `CategoryPage`
- [x] `/directory/businesses/[businessId]` -> `BusinessProfilePage`
- [ ] `/directory/compare` -> `CompareBusinessesPage`
- [ ] `/directory/saved` -> `SavedBusinessesPage`

## Members (Public)
- [x] `/members` -> `MembersPage`
- [x] `/members/[username]` -> `MemberProfilePage`
- [ ] `/members/[memberId]` -> `MemberProfilePage`
- [ ] `/members/search` -> `MemberSearchPage`
- [ ] `/members/rankings` -> `MemberRankingsPage`

## Contestant Routes (Authenticated)
- [x] `/contestant/dashboard` -> `ContestantDashboardPage`
- [x] `/contestant/profile` -> `ContestantProfilePage`
- [x] `/contestant/profile/edit` -> `EditProfilePage`


### Contestant Resale Management
- [ ] `/contestant/dashboard/resale` -> `ResaleOverviewPage`
- [ ] `/contestant/dashboard/resale/items` -> `MyResaleItemsPage`
- [ ] `/contestant/dashboard/resale/shipping` -> `ShippingLabelsPage`
- [ ] `/contestant/dashboard/resale/earnings` -> `ResaleEarningsPage`
- [ ] `/contestant/dashboard/resale/analytics` -> `ResaleAnalyticsPage`

### Digital Pageant Binder
- [x] `/contestant/dashboard/binder` -> `DigitalBinderHomePage`
- [x] `/contestant/dashboard/binder/[binderId]` -> `BinderPage`
- [x] `/contestant/dashboard/binder/[binderId]/documents` -> `DocumentsPage`
- [x] `/contestant/dashboard/binder/[binderId]/wardrobe` -> `WardrobePage`
- [x] `/contestant/dashboard/binder/[binderId]/schedule` -> `SchedulePage`
- [x] `/contestant/dashboard/binder/[binderId]/tasks` -> `TasksPage`
- [x] `/contestant/dashboard/binder/[binderId]/appearances` -> `AppearancesPage`
- [x] `/contestant/dashboard/binder/[binderId]/travel` -> `TravelPlannerPage`

### Platform Development
- [x] `/contestant/dashboard/binder/[binderId]/platform` -> `PlatformDevelopmentPage`
- [x] `/contestant/dashboard/binder/[binderId]/platform/social` -> `SocialMediaManagerPage`
- [x] `/contestant/dashboard/binder/[binderId]/platform/media-kit` -> `MediaKitPage`
- [x] `/contestant/dashboard/binder/[binderId]/platform/community` -> `CommunityServicePage`

### Financial Management
- [x] `/contestant/dashboard/binder/[binderId]/finances` -> `FinancialManagementPage`
- [x] `/contestant/dashboard/binder/[binderId]/finances/expenses` -> `ExpensesPage`
- [x] `/contestant/dashboard/binder/[binderId]/finances/sponsorships` -> `SponsorshipsPage`
- [x] `/contestant/dashboard/binder/[binderId]/finances/fundraising` -> `FundraisingPage`

### Ambassador Program
- [ ] `/contestant/dashboard/ambassador` -> `AmbassadorPage`
- [ ] `/contestant/dashboard/ambassador/tasks` -> `AmbassadorTasksPage`
- [ ] `/contestant/dashboard/ambassador/tasks/[taskId]` -> `TaskDetailPage`\
- [ ] `/contestant/dashboard/ambassador/rewards` -> `RewardsPage`
- [ ] `/contestant/dashboard/ambassador/rewards/[rewardId]/redeem` -> `RewardRedemptionPage`
- [ ] `/contestant/dashboard/ambassador/points` -> `PointsPage`
- [ ] `/contestant/dashboard/ambassador/leaderboard` -> `AmbassadorLeaderboardPage`

### Communication
- [x] `/contestant/messages` -> `MessagesPage`
- [x] `/contestant/messages/[conversationId]` -> `ConversationPage`
- [x] `/contestant/notifications` -> `NotificationsPage`
- [x] `/contestant/settings` -> `SettingsPage`

## Business Routes (Authenticated)
- [x] `/business/dashboard` -> `BusinessDashboardPage`
- [x] `/business/dashboard/profile` -> `BusinessProfilePage`
- [x] `/business/dashboard/profile/edit` -> `EditBusinessProfilePage`

### Listings Management
- [x] `/business/dashboard/listings` -> `ListingsManagementPage`
- [x] `/business/dashboard/listings/new` -> `CreateListingPage`
- [x] `/business/dashboard/listings/[listingId]/edit` -> `EditListingPage`

### Bookings & Calendar
- [x] `/business/dashboard/bookings` -> `BookingsPage`
- [x] `/business/dashboard/bookings/[bookingId]` -> `BookingDetailPage`
- [x] `/business/dashboard/calendar` -> `AvailabilityCalendarPage`

### Reviews
- [x] `/business/dashboard/reviews` -> `ReviewsManagementPage`
- [x] `/business/dashboard/reviews/[reviewId]` -> `ReviewDetailPage`

### Analytics
- [x] `/business/dashboard/analytics` -> `AnalyticsPage`
- [x] `/business/dashboard/analytics/performance` -> `PerformanceMetricsPage`
- [x] `/business/dashboard/analytics/competitors` -> `CompetitorAnalysisPage`

### Finances
- [x] `/business/dashboard/finances` -> `BusinessFinancesPage`
- [x] `/business/dashboard/finances/invoices` -> `InvoicesPage`
- [x] `/business/dashboard/finances/payments` -> `PaymentsPage`
- [ ] `/business/dashboard/finances/reports` -> `FinancialReportsPage`
- [ ] `/business/dashboard/finances/tax-documents` -> `TaxDocumentsPage`

### Promotions
- [x] `/business/dashboard/promotions` -> `PromotionsPage`
- [x] `/business/dashboard/promotions/new` -> `CreatePromotionPage`
- [ ] `/business/dashboard/promotions/[promotionId]/edit` -> `EditPromotionPage`
- [ ] `/business/dashboard/promotions/analytics` -> `PromotionAnalyticsPage`

### Settings
- [x] `/business/dashboard/settings` -> `BusinessSettingsPage`
- [ ] `/business/dashboard/settings/team` -> `TeamManagementPage`
- [ ] `/business/dashboard/settings/integrations` -> `IntegrationsPage`
- [ ] `/business/dashboard/settings/billing` -> `BillingSettingsPage`

### Retailer Resale Program
- [ ] `/business/dashboard/resale` -> `RetailerResaleOverviewPage`
- [ ] `/business/dashboard/resale/inventory` -> `ResaleInventoryPage`
- [ ] `/business/dashboard/resale/listings` -> `ResaleListingsPage`
- [ ] `/business/dashboard/resale/listings/new` -> `CreateResaleListingPage`
- [ ] `/business/dashboard/resale/listings/[listingId]/edit` -> `EditResaleListingPage`
- [ ] `/business/dashboard/resale/orders` -> `ResaleOrdersPage`
- [ ] `/business/dashboard/resale/payouts` -> `ResalePayoutsPage`
- [ ] `/business/dashboard/resale/analytics` -> `RetailerResaleAnalyticsPage`


## Director Routes (Authenticated)
- [x] `/director/dashboard` -> `DirectorDashboardPage`

### Event Management
- [x] `/director/events` -> `EventManagementPage`
- [x] `/director/events/new` -> `CreateEventPage`
- [x] `/director/events/[eventId]/edit` -> `EditEventPage`
- [x] `/director/events/[eventId]/schedule` -> `EventSchedulePage`
- [ ] `/director/events/[eventId]/tickets` -> `EventTicketsPage`
- [ ] `/director/events/[eventId]/sponsors` -> `EventSponsorsPage`
- [ ] `/director/events/[eventId]/vendors` -> `EventVendorsPage`

### Contestant Management
- [x] `/director/contestants` -> `ContestantManagementPage`
- [x] `/director/contestants/[contestantId]` -> `ContestantDetailPage`
- [ ] `/director/contestants/import` -> `ImportContestantsPage`
- [ ] `/director/contestants/export` -> `ExportContestantsPage`

### Judging Management
- [x] `/director/judging` -> `JudgingManagementPage`
- [x] `/director/judging/[eventId]` -> `EventScoringPage`
- [x] `/director/judging/[eventId]/results` -> `ScoringResultsPage`
- [ ] `/director/judging/judges` -> `JudgesManagementPage`
- [ ] `/director/judging/criteria` -> `ScoringCriteriaPage`

### People's Choice
- [x] `/director/peoples-choice` -> `PeoplesChoiceManagementPage`
- [x] `/director/peoples-choice/new` -> `CreatePeoplesChoicePage`
- [x] `/director/peoples-choice/[eventId]/contestants` -> `ManageContestantsPage`
- [ ] `/director/peoples-choice/[eventId]/analytics` -> `VotingAnalyticsPage`
- [ ] `/director/peoples-choice/[eventId]/settings` -> `VotingSettingsPage`

### Staff Management
- [x] `/director/staff` -> `StaffManagementPage`
- [x] `/director/staff/new` -> `AddStaffMemberPage`
- [x] `/director/staff/[staffId]/edit` -> `EditStaffMemberPage`
- [x] `/director/staff/roles` -> `RoleManagementPage`
- [ ] `/director/staff/schedule` -> `StaffSchedulePage`
- [ ] `/director/staff/training` -> `StaffTrainingPage`

### Finances
- [x] `/director/finances` -> `DirectorFinancesPage`
- [x] `/director/finances/reports` -> `FinancialReportsPage`
- [ ] `/director/finances/budgets` -> `BudgetManagementPage`
- [ ] `/director/finances/sponsorships` -> `SponsorshipManagementPage`
- [ ] `/director/finances/expenses` -> `ExpenseManagementPage`

### Communications
- [x] `/director/communications` -> `CommunicationsPage`
- [x] `/director/communications/bulk` -> `BulkMessagingPage`
- [ ] `/director/communications/templates` -> `MessageTemplatesPage`
- [ ] `/director/communications/announcements` -> `AnnouncementsPage`
- [ ] `/director/communications/analytics` -> `CommunicationAnalyticsPage`

### Settings & Support
- [x] `/director/settings` -> `DirectorSettingsPage`
- [x] `/director/support` -> `DirectorSupportPage`
- [ ] `/director/settings/branding` -> `BrandingSettingsPage`
- [ ] `/director/settings/integrations` -> `SystemIntegrationsPage`

## Public Voting Routes
- [x] `/vote` -> `VotingHomePage`
- [x] `/vote/[eventId]` -> `VotingEventPage`
- [x] `/vote/[eventId]/contestant/[contestantId]` -> `ContestantVotingPage`
- [ ] `/vote/[eventId]/leaderboard` -> `VotingLeaderboardPage`
- [ ] `/vote/[eventId]/rules` -> `VotingRulesPage`

## Admin Routes (Authenticated)
- [x] `/admin/dashboard` -> `AdminDashboardPage`
- [x] `/admin/users` -> `AdminUsersPage`
- [x] `/admin/users/[userId]` -> `AdminUserPage`
- [x] `/admin/businesses` -> `AdminBusinessesPage`
- [x] `/admin/businesses/pending` -> `PendingBusinessesPage`
- [ ] `/admin/businesses/[businessId]` -> `AdminBusinessPage`

## Maintenance Routes
- [x] `/404` -> `NotFoundPage`
- [x] `/500` -> `ServerErrorPage`
- [x] `/403` -> `ForbiddenPage`
- [x] `/maintenance` -> `MaintenancePage`


## API Routes
### Authentication & Users
- [ ] `/api/auth/login` -> `POST` Login endpoint
- [ ] `/api/auth/register` -> `POST` Register new user
- [ ] `/api/auth/verify` -> `POST` Verify email
- [ ] `/api/auth/reset-password` -> `POST` Reset password
- [ ] `/api/auth/refresh` -> `POST` Refresh access token

- [ ] `/api/users/me` -> `GET` Current user profile
- [ ] `/api/users/[userId]` -> `GET/PUT/DELETE` User operations
- [ ] `/api/users/settings` -> `GET/PUT` User settings
- [ ] `/api/users/notifications` -> `GET/PUT` Notification preferences

### Business & Listings
- [ ] `/api/businesses/register` -> `POST` Register business
- [ ] `/api/businesses/[businessId]` -> `GET/PUT/DELETE` Business operations
- [ ] `/api/businesses/search` -> `GET` Search businesses
- [ ] `/api/businesses/categories` -> `GET` Business categories

- [ ] `/api/listings/create` -> `POST` Create listing
- [ ] `/api/listings/[listingId]` -> `GET/PUT/DELETE` Listing operations
- [ ] `/api/listings/search` -> `GET` Search listings
- [ ] `/api/listings/featured` -> `GET` Featured listings

### Events & Bookings
- [ ] `/api/events/create` -> `POST` Create event
- [ ] `/api/events/[eventId]` -> `GET/PUT/DELETE` Event operations
- [ ] `/api/events/search` -> `GET` Search events
- [ ] `/api/events/categories` -> `GET` Event categories

- [ ] `/api/bookings/create` -> `POST` Create booking
- [ ] `/api/bookings/[bookingId]` -> `GET/PUT/DELETE` Booking operations
- [ ] `/api/bookings/history` -> `GET` Booking history

### Communication
- [ ] `/api/messages/send` -> `POST` Send message
- [ ] `/api/messages/[messageId]` -> `GET/DELETE` Message operations
- [ ] `/api/messages/threads` -> `GET` Message threads
- [ ] `/api/messages/unread` -> `GET` Unread messages

- [ ] `/api/notifications/send` -> `POST` Send notification
- [ ] `/api/notifications/[notificationId]` -> `GET/DELETE` Notification operations
- [ ] `/api/notifications/unread` -> `GET` Unread notifications

### Reviews & Analytics
- [ ] `/api/reviews/create` -> `POST` Create review
- [ ] `/api/reviews/[reviewId]` -> `GET/PUT/DELETE` Review operations
- [ ] `/api/reviews/business/[businessId]` -> `GET` Business reviews

- [ ] `/api/analytics/dashboard` -> `GET` Dashboard analytics
- [ ] `/api/analytics/reports` -> `GET` Generate reports
- [ ] `/api/analytics/metrics` -> `GET` Key metrics

### Files & Payments
- [ ] `/api/files/upload` -> `POST` Upload file
- [ ] `/api/files/[fileId]` -> `GET/DELETE` File operations
- [ ] `/api/files/download/[fileId]` -> `GET` Download file

- [ ] `/api/payments/create` -> `POST` Create payment
- [ ] `/api/payments/[paymentId]` -> `GET` Payment status
- [ ] `/api/payments/history` -> `GET` Payment history
- [ ] `/api/payments/refund` -> `POST` Process refund

### Shop
- [ ] `/api/shop/products` -> `GET` Shop products
- [ ] `/api/shop/products/[productId]` -> `GET` Shop product details
- [ ] `/api/shop/cart` -> `GET` Shop cart
- [ ] `/api/shop/checkout` -> `POST` Shop checkout  
- [ ] `/api/shop/wishlist` -> `GET` Shop wishlist
- [ ] `/api/shop/orders` -> `GET` Shop orders
- [ ] `/api/shop/orders/[orderId]` -> `GET` Shop order details
- [ ] `/api/shop/shipping` -> `GET` Shop shipping options
- [ ] `/api/shop/tracking` -> `GET` Shop tracking information
- [ ] `/api/shop/resale/locations` -> `GET` Resale locations
- [ ] `/api/shop/resale/items` -> `GET` Resale items
- [ ] `/api/shop/resale/tracking` -> `GET` Track resale status
- [ ] `/api/shop/resale/listings` -> `GET` Resale listings


### Resale Program (Contestant)
- [ ] `/api/contestant/resale/items` -> `GET/POST` Manage resale items
- [ ] `/api/contestant/resale/shipping` -> `POST` Generate shipping label
- [ ] `/api/contestant/resale/earnings` -> `GET` View earnings

### Resale (Business)
- [ ] `/api/business/resale/inventory` -> `GET/POST/PUT` Inventory management
- [ ] `/api/business/resale/shipping` -> `POST` Generate shipping label
- [ ] `/api/business/resale/listings` -> `GET/POST/PUT/DELETE` Listing operations
- [ ] `/api/business/resale/orders` -> `GET/PUT` Order management
- [ ] `/api/business/resale/payouts` -> `GET` Payout information
- [ ] `/api/business/resale/analytics` -> `GET` Business resale metrics

### Ambassador Program
- [ ] `/api/ambassador/register` -> `POST` Register as ambassador
- [ ] `/api/ambassador/profile` -> `GET/PUT` Ambassador profile operations
- [ ] `/api/ambassador/tasks` -> `GET` Available tasks
- [ ] `/api/ambassador/tasks/complete` -> `POST` Mark task as complete
- [ ] `/api/ambassador/points` -> `GET` Point balance and history
- [ ] `/api/ambassador/rewards` -> `GET` Reward catalog
- [ ] `/api/ambassador/rewards/redeem` -> `POST` Redeem reward
- [ ] `/api/ambassador/analytics` -> `GET` Ambassador performance metrics
- [ ] `/api/ambassador/leaderboard` -> `GET` Leaderboard
