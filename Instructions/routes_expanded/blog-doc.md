# Blog Documentation

## BlogPage (/blog)
**Description:** Main blog landing page featuring latest posts, categories, and trending content.

**User Stories:**
- As a user, I want to browse latest blog posts
- As a user, I want to filter posts by category
- As a user, I want to search blog content

**Components:**
- Featured posts slider
- Post grid
- Category navigation
- Search functionality
- Newsletter signup
- Popular tags
- Author highlights

**APIs:**
- GET `/posts`
- GET `/categories`

## BlogPostPage (/blog/[postId])
**Description:** Individual blog post page with full content and engagement features.

**User Stories:**
- As a user, I want to read full blog posts
- As a user, I want to comment on posts
- As a user, I want to share posts
- As a user, I want to save posts for later

**Components:**
- Post content
- Author bio
- Comment section
- Share buttons
- Related posts
- Like button
- Save functionality

**APIs:**
- GET `/posts/{id}`
- POST `/post-comments`
- POST `/post-like`
- POST `/favorites`
- GET `/posts` (for related content)

## BlogCategoriesPage (/blog/categories)
**Description:** Overview page of all blog categories with post counts and descriptions.

**User Stories:**
- As a user, I want to explore blog categories
- As a user, I want to follow specific categories
- As a user, I want to see category statistics

**Components:**
- Category grid
- Category descriptions
- Post count badges
- Featured category posts
- Category search
- Follow buttons
- Category trends

**APIs:**
- GET `/categories`
- GET `/posts` (filtered by category)
