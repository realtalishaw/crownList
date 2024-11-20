# Community Documentation

## CommunityHomePage (/community)
**Description:** Central hub for community engagement, discussions, and networking.

**User Stories:**
- As a user, I want to discover community content
- As a user, I want to join discussions
- As a user, I want to find community members

**Components:**
- Activity feed
- Trending topics
- Member highlights
- Group suggestions
- Event calendar
- Community stats

**APIs:**
- GET `/directory` (for member suggestions)
- GET `/posts`

## CommunityGroupsPage (/community/groups)
**Description:** Overview of all community groups and discussion forums.

**User Stories:**
- As a user, I want to browse available groups
- As a user, I want to join groups
- As a user, I want to create new groups

**Components:**
- Group directory
- Category filters
- Join/leave buttons
- Group search
- Create group form
- Featured groups
- Activity indicators

**APIs:**
- GET `/groups`

## CommunityGroupPage (/community/groups/[groupId])
**Description:** Individual group page with discussions and member activities.

**User Stories:**
- As a member, I want to participate in group discussions
- As a member, I want to view group content
- As a member, I want to invite others

**Components:**
- Discussion board
- Member list
- Event calendar
- Content library
- Invite system
- Moderation tools

**APIs:**
- GET `/groups/{id}`
- GET `/group-media`
- GET `/group-files`

## PostPage (/community/posts/[postId])
**Description:** Detailed view of community posts with comments and interactions.

**User Stories:**
- As a user, I want to read and comment on posts
- As a user, I want to share content
- As a user, I want to report inappropriate content

**Components:**
- Post content
- Comment section
- Reaction system
- Share options
- Report button
- Related posts

**APIs:**
- GET `/posts/{id}`
- POST `/post-comments`
- POST `/post-reaction`

## CommunitySearchPage (/community/search)
**Description:** Search interface for community content and members.

**User Stories:**
- As a user, I want to search community content
- As a user, I want to filter search results
- As a user, I want to save searches

**Components:**
- Search bar
- Filter options
- Result categories
- Sort controls
- Save search
- Recent searches

**APIs:**
- GET `/directory/search`
- GET `/posts` (with search parameters)

## CommunityMembersPage (/community/members)
**Description:** Directory of community members with filtering and search.

**User Stories:**
- As a user, I want to discover community members
- As a user, I want to filter by role/location
- As a user, I want to connect with members

**Components:**
- Member directory
- Filter sidebar
- Search functionality
- Role filters
- Location filters
- Contact options

**APIs:**
- GET `/directory`

## MemberProfilePage (/community/members/[username])
**Description:** Individual member profile pages with activity and information.

**User Stories:**
- As a user, I want to view member profiles
- As a user, I want to connect with members
- As a user, I want to see member activity

**Components:**
- Profile header
- Activity feed
- Contact options
- Achievement display
- Content gallery
- Connection status

**APIs:**
- GET `/directory/user/{username}`
- GET `/posts` (filtered by user)

## MemberSearchPage (/community/members/search)
**Description:** Advanced search interface for finding community members.

**User Stories:**
- As a user, I want to search for specific members
- As a user, I want to filter by multiple criteria
- As a user, I want to save member searches

**Components:**
- Advanced search form
- Filter options
- Result grid
- Save search
- Quick filters
- Sort options

**APIs:**
- GET `/directory/search`
