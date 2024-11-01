## Main Pages (Public)
- [x] `/` -> `HomePage`
- [x] `/about` -> `AboutPage`
- [x] `/contact` -> `ContactPage`
- [x] `/media-kit` -> `MediaKitPage`
- [x] `/privacy-policy` -> `PrivacyPolicyPage`
- [x] `/terms-conditions` -> `TermsOfServicePage`
- [x] `/faqs` -> `FAQPage`
- [x] `/help` -> `HelpCenterPage`

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

## Blog (Public)
- [x] `/blog` -> `BlogPage`
- [x] `/blog/[postId]` -> `BlogPostPage`
- [x] `/blog/categories` -> `BlogCategoriesPage`


## Forum (Public)
- [x] `/forum` -> `ForumHomePage`
- [x] `/forums/categories` -> `ForumCategoriesPage`
- [x] `/forums/categories/[categoryId]` -> `ForumCategoryPage`
- [x] `/forums/thread/[threadId]` -> `ThreadPage`
- [ ] `/forums/search` -> `ForumSearchPage`
- [ ] `/forums/tags` -> `ForumTagsPage`
- [ ] `/forums/users` -> `ForumUsersPage`
- [x] `/forums` -> `ForumsPage`

## Shop (Public)
- [x] `/shop` -> `ShopHomePage`
- [x] `/shop/products` -> `ProductListPage`
- [x] `/shop/products/[productId]` -> `ProductDetailPage`
- [ ] `/shop/categories` -> `ShopCategoriesPage`
- [ ] `/shop/cart` -> `ShoppingCartPage`
- [ ] `/shop/checkout` -> `CheckoutPage`
- [ ] `/shop/orders` -> `OrdersPage`
- [ ] `/shop/wishlist` -> `WishlistPage`

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
- [ ] `/contestant/achievements` -> `AchievementsPage`
- [ ] `/contestant/analytics` -> `ContestantAnalyticsPage`

### Digital Pageant Binder
- [x] `/contestant/binder` -> `DigitalBinderHomePage`
- [x] `/contestant/binder/[binderId]` -> `BinderPage`
- [x] `/contestant/binder/[binderId]/documents` -> `DocumentsPage`
- [x] `/contestant/binder/[binderId]/wardrobe` -> `WardrobePage`
- [x] `/contestant/binder/[binderId]/schedule` -> `SchedulePage`
- [x] `/contestant/binder/[binderId]/tasks` -> `TasksPage`
- [x] `/contestant/binder/[binderId]/appearances` -> `AppearancesPage`
- [x] `/contestant/binder/[binderId]/travel` -> `TravelPlannerPage`

### Platform Development
- [x] `/contestant/binder/[binderId]/platform` -> `PlatformDevelopmentPage`
- [x] `/contestant/binder/[binderId]/platform/social` -> `SocialMediaManagerPage`
- [x] `/contestant/binder/[binderId]/platform/media-kit` -> `MediaKitPage`
- [x] `/contestant/binder/[binderId]/platform/community` -> `CommunityServicePage`

### Financial Management
- [x] `/contestant/binder/[binderId]/finances` -> `FinancialManagementPage`
- [x] `/contestant/binder/[binderId]/finances/expenses` -> `ExpensesPage`
- [x] `/contestant/binder/[binderId]/finances/sponsorships` -> `SponsorshipsPage`
- [x] `/contestant/binder/[binderId]/finances/fundraising` -> `FundraisingPage`

### Communication
- [x] `/contestant/messages` -> `MessagesPage`
- [x] `/contestant/messages/[conversationId]` -> `ConversationPage`
- [x] `/contestant/notifications` -> `NotificationsPage`
- [x] `/contestant/settings` -> `SettingsPage`

## Business Routes (Authenticated)
- [x] `/business/dashboard` -> `BusinessDashboardPage`
- [x] `/business/profile` -> `BusinessProfilePage`
- [x] `/business/profile/edit` -> `EditBusinessProfilePage`

### Listings Management
- [x] `/business/listings` -> `ListingsManagementPage`
- [x] `/business/listings/new` -> `CreateListingPage`
- [x] `/business/listings/[listingId]/edit` -> `EditListingPage`

### Bookings & Calendar
- [x] `/business/bookings` -> `BookingsPage`
- [x] `/business/bookings/[bookingId]` -> `BookingDetailPage`
- [x] `/business/calendar` -> `AvailabilityCalendarPage`

### Reviews
- [x] `/business/reviews` -> `ReviewsManagementPage`
- [x] `/business/reviews/[reviewId]` -> `ReviewDetailPage`

### Analytics
- [x] `/business/analytics` -> `AnalyticsPage`
- [x] `/business/analytics/performance` -> `PerformanceMetricsPage`
- [x] `/business/analytics/competitors` -> `CompetitorAnalysisPage`

### Finances
- [x] `/business/finances` -> `BusinessFinancesPage`
- [x] `/business/finances/invoices` -> `InvoicesPage`
- [x] `/business/finances/payments` -> `PaymentsPage`
- [ ] `/business/finances/reports` -> `FinancialReportsPage`
- [ ] `/business/finances/tax-documents` -> `TaxDocumentsPage`

### Promotions
- [x] `/business/promotions` -> `PromotionsPage`
- [x] `/business/promotions/new` -> `CreatePromotionPage`
- [ ] `/business/promotions/[promotionId]/edit` -> `EditPromotionPage`
- [ ] `/business/promotions/analytics` -> `PromotionAnalyticsPage`

### Settings
- [x] `/business/settings` -> `BusinessSettingsPage`
- [ ] `/business/settings/team` -> `TeamManagementPage`
- [ ] `/business/settings/integrations` -> `IntegrationsPage`
- [ ] `/business/settings/billing` -> `BillingSettingsPage`

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

## Maintenance Routes
- [x] `/404` -> `NotFoundPage`
- [x] `/500` -> `ServerErrorPage`
- [x] `/403` -> `ForbiddenPage`
- [x] `/maintenance` -> `MaintenancePage`