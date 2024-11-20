# Directory Documentation

## DirectoryHomePage (/directory)
**Description:** Main directory of pageant-related businesses and service providers.

**User Stories:**
- As a user, I want to find pageant-related businesses
- As a user, I want to filter by service type
- As a user, I want to discover top-rated providers

**Components:**
- Category navigation
- Search functionality
- Featured businesses
- Filter sidebar
- Map view
- Rating system

**APIs:**
- GET `/directory`
- GET `/businesses`

## SearchResultsPage (/directory/search)
**Description:** Advanced search results for businesses and services.

**User Stories:**
- As a user, I want to search for specific services
- As a user, I want to filter by location/rating
- As a user, I want to compare providers

**Components:**
- Results grid
- Advanced filters
- Sort options
- Map integration
- Save search
- Compare feature

**APIs:**
- GET `/directory/search`
- GET `/businesses`

## CategoryPage (/directory/categories/[categoryId])
**Description:** Category-specific business listings.

**User Stories:**
- As a user, I want to browse category businesses
- As a user, I want to filter within category
- As a user, I want to save favorites

**Components:**
- Business listings
- Category description
- Filter options
- Sort controls
- Save functionality
- Quick contact

**APIs:**
- GET `/businesses` (filtered by category)
- POST `/favorites`

## BusinessProfilePage (/directory/businesses/[businessId])
**Description:** Detailed business profile with services, reviews, and booking.

**User Stories:**
- As a user, I want to view business details
- As a user, I want to read reviews
- As a user, I want to book services
- As a user, I want to contact business

**Components:**
- Profile header
- Service list
- Review section
- Booking calendar
- Gallery
- Contact form
- Location map

**APIs:**
- GET `/businesses/{id}`
- GET `/reviews`
- POST `/bookings`
- GET `/business-analytics`
