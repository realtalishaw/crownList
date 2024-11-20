# Main Pages Documentation

## HomePage (/)
**Description:** Landing page showcasing the platform's key features, benefits, and value propositions for contestants, directors, and businesses.

**User Stories:**
- As a user, I want to understand the platform's core offerings
- As a user, I want to easily navigate to registration/login
- As a user, I want to discover featured businesses and services
- As a user, I want to see testimonials and success stories

**Components:**
- Hero section with CTA
- Feature highlights
- Service categories
- Featured businesses carousel
- Testimonials section
- Recent success stories
- Newsletter signup

**APIs:**
- GET `/businesses` (for featured businesses)
- GET `/directory` (for service categories)

## AboutPage (/about)
**Description:** Detailed information about The Crown List's mission, vision, team, and impact on the pageant industry.

**User Stories:**
- As a user, I want to learn about the platform's history and mission
- As a user, I want to understand the team behind the platform
- As a user, I want to see platform statistics and achievements

**Components:**
- Mission statement
- Vision section
- Team profiles
- Platform statistics
- Timeline of achievements
- Partner logos

**APIs:**
- No specific APIs required

## ContactPage (/contact)
**Description:** Contact form and information for user inquiries, support requests, and business partnerships.

**User Stories:**
- As a user, I want to submit inquiries or feedback
- As a user, I want to find support contact information
- As a user, I want to explore business partnership opportunities

**Components:**
- Contact form
- Support categories
- FAQ quick links
- Business partnership section
- Office locations/hours
- Social media links

**APIs:**
- POST `/support-tickets` (for contact form submissions)

## MediaKitPage (/media-kit)
**Description:** Press resources, brand assets, and media information for journalists and partners.

**User Stories:**
- As a media representative, I want to access press releases
- As a partner, I want to download brand assets
- As a user, I want to view platform statistics and growth

**Components:**
- Press release archive
- Brand assets download section
- Platform statistics
- Media contact information
- Success stories
- Image gallery

**APIs:**
- No specific APIs required

## PrivacyPolicyPage (/privacy-policy)
**Description:** Comprehensive privacy policy detailing data collection, usage, and user rights.

**User Stories:**
- As a user, I want to understand how my data is used
- As a user, I want to know my privacy rights
- As a user, I want to understand data sharing practices

**Components:**
- Privacy policy sections
- Data usage breakdown
- User rights summary
- Contact information for privacy concerns
- Cookie policy
- Privacy controls guide

**APIs:**
- No specific APIs required

## TermsOfServicePage (/terms-conditions)
**Description:** Platform terms and conditions, user agreements, and legal information.

**User Stories:**
- As a user, I want to understand platform rules
- As a user, I want to know my obligations and rights
- As a user, I want to understand dispute resolution procedures

**Components:**
- Terms sections
- User agreement summary
- Prohibited activities list
- Dispute resolution process
- Amendment policy
- Contact information

**APIs:**
- No specific APIs required

## FAQPage (/faqs)
**Description:** Searchable database of frequently asked questions organized by category.

**User Stories:**
- As a user, I want to find answers to common questions
- As a user, I want to browse questions by category
- As a user, I want to search for specific topics

**Components:**
- Search bar
- Category filters
- FAQ accordion
- Related articles
- Contact support link
- Suggested topics

**APIs:**
- GET `/articles` (for FAQ content)
- GET `/categories` (for FAQ categories)

## HelpCenterPage (/help)
**Description:** Comprehensive help and support center with guides, tutorials, and support options.

**User Stories:**
- As a user, I want to find help articles
- As a user, I want to access video tutorials
- As a user, I want to contact support if needed

**Components:**
- Search functionality
- Category navigation
- Featured articles
- Video tutorials
- Support ticket creation
- Live chat widget

**APIs:**
- GET `/articles`
- GET `/categories`
- POST `/support-tickets`

## HelpSearchResultsPage (/help/search)
**Description:** Search results page for help center content with filtering options.

**User Stories:**
- As a user, I want to filter search results
- As a user, I want to sort results by relevance
- As a user, I want to see related topics

**Components:**
- Search results list
- Filter sidebar
- Sort options
- Related topics
- Search refinement suggestions
- Category quick filters

**APIs:**
- GET `/articles` (with search parameters)

## HelpCategoryPage (/help/[categoryId])
**Description:** Category-specific help articles and resources.

**User Stories:**
- As a user, I want to browse category-specific help content
- As a user, I want to see most popular articles
- As a user, I want to navigate between related categories

**Components:**
- Article list
- Category description
- Subcategory navigation
- Popular articles
- Related categories
- Contact support

**APIs:**
- GET `/articles` (filtered by category)
- GET `/categories`

## HelpTopicPage (/help/[categoryId]/[topicId])
**Description:** Individual help article or topic with detailed information.

**User Stories:**
- As a user, I want to read detailed help content
- As a user, I want to rate article helpfulness
- As a user, I want to see related articles

**Components:**
- Article content
- Table of contents
- Helpfulness rating
- Related articles
- Next/previous navigation
- Support options

**APIs:**
- GET `/articles/{id}`
- GET `/articles` (for related content)

## DirectorsLandingPage (/for-directors)
**Description:** Landing page highlighting platform features and benefits for pageant directors.

**User Stories:**
- As a director, I want to understand platform benefits
- As a director, I want to see pricing information
- As a director, I want to explore features

**Components:**
- Feature highlights
- Pricing plans
- Success stories
- Demo request form
- ROI calculator
- Testimonials

**APIs:**
- No specific APIs required

## BusinessLandingPage (/for-businesses)
**Description:** Landing page showcasing platform benefits and features for business owners.

**User Stories:**
- As a business owner, I want to understand platform benefits
- As a business owner, I want to see pricing plans
- As a business owner, I want to understand the signup process

**Components:**
- Value proposition
- Feature showcase
- Pricing plans
- Success stories
- Registration CTA
- Integration highlights

**APIs:**
- No specific APIs required
