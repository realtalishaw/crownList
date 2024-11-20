# Resource Center Documentation

## ResourcesHomePage (/resources)
**Description:** Main hub for educational content, guides, and resources for pageant community.

**User Stories:**
- As a user, I want to browse educational resources by category
- As a user, I want to access downloadable content
- As a user, I want to find trending/popular resources

**Components:**
- Category navigation
- Featured resources grid
- Search functionality
- Resource filters
- Popular topics
- Download tracking

**APIs:**
- GET `/articles`
- GET `/categories`

## ResourceCategoryPage (/resources/[categoryId])
**Description:** Category-specific resource listings with filtering and sorting options.

**User Stories:**
- As a user, I want to browse category-specific resources
- As a user, I want to filter resources by type
- As a user, I want to sort resources by relevance/date

**Components:**
- Resource list
- Filter sidebar
- Sort options
- Category description
- Related categories
- Resource preview cards

**APIs:**
- GET `/articles` (filtered by category)
- GET `/categories`

## ResourceDetailPage (/resources/[resourceId])
**Description:** Detailed view of individual resource with content and related materials.

**User Stories:**
- As a user, I want to view detailed resource content
- As a user, I want to download associated materials
- As a user, I want to share resources
- As a user, I want to save resources for later

**Components:**
- Resource content
- Download section
- Related resources
- Share buttons
- Save functionality
- Author information
- Engagement metrics

**APIs:**
- GET `/articles/{id}`
- POST `/favorites` (for saving)
- GET `/articles` (for related content)

## ResourceSearchResultsPage (/resources/search)
**Description:** Search results page for resource center content.

**User Stories:**
- As a user, I want to search all resources
- As a user, I want to filter search results
- As a user, I want to save search preferences

**Components:**
- Search results list
- Advanced filters
- Sort options
- Search history
- Save search
- Category filters
- Result metrics

**APIs:**
- GET `/articles` (with search parameters)
- GET `/categories`
