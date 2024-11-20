# Shop Documentation

## ShopHomePage (/shop)
**Description:** Main marketplace showcasing pageant-related products and services.

**User Stories:**
- As a user, I want to browse available products
- As a user, I want to filter by category/price
- As a user, I want to discover new items

**Components:**
- Featured products slider
- Category navigation
- Product grid
- Filter sidebar
- Search functionality
- Special offers section

**APIs:**
- GET `/products`
- GET `/product-categories`

## ProductDetailPage (/shop/[productId])
**Description:** Detailed product information with purchasing options.

**User Stories:**
- As a user, I want to view product details
- As a user, I want to see product reviews
- As a user, I want to purchase items
- As a user, I want to save favorites

**Components:**
- Product gallery
- Purchase options
- Reviews section
- Size/color selector
- Add to cart button
- Related products
- Save to wishlist

**APIs:**
- GET `/products/{id}`
- GET `/reviews`
- POST `/cart-items`
- POST `/favorites`

## ShopCategoryPage (/shop/categories/[categoryId])
**Description:** Category-specific product listings with filtering options.

**User Stories:**
- As a user, I want to browse category products
- As a user, I want to filter by specifications
- As a user, I want to compare items

**Components:**
- Product grid
- Filter sidebar
- Sort options
- Category description
- Compare feature
- Price range slider

**APIs:**
- GET `/products` (filtered by category)
- GET `/product-categories`

## ShopSearchResultsPage (/shop/search)
**Description:** Search results for products with advanced filtering.

**User Stories:**
- As a user, I want to search products
- As a user, I want to refine search results
- As a user, I want to save searches

**Components:**
- Search results grid
- Advanced filters
- Sort options
- Save search
- Recent searches
- Price filters

**APIs:**
- GET `/products` (with search parameters)

## ShoppingCartPage (/shop/cart)
**Description:** Shopping cart management and checkout preparation.

**User Stories:**
- As a user, I want to review cart items
- As a user, I want to update quantities
- As a user, I want to apply coupons

**Components:**
- Cart items list
- Quantity adjusters
- Price summary
- Coupon input
- Checkout button
- Save for later
- Empty cart state

**APIs:**
- GET `/cart`
- PUT `/cart-item`
- DELETE `/cart-item`

## CheckoutPage (/shop/checkout)
**Description:** Secure checkout process for completing purchases.

**User Stories:**
- As a user, I want to complete purchases
- As a user, I want to enter shipping info
- As a user, I want to select payment method

**Components:**
- Shipping form
- Payment selection
- Order summary
- Address validation
- Payment processing
- Order confirmation

**APIs:**
- POST `/checkout`
- GET `/payment-methods`

## OrdersPage (/shop/orders)
**Description:** Order history and tracking interface.

**User Stories:**
- As a user, I want to view order history
- As a user, I want to track shipments
- As a user, I want to reorder items

**Components:**
- Order history list
- Order status tracking
- Reorder buttons
- Order details
- Download invoices
- Return initiation

**APIs:**
- GET `/orders`
- GET `/order/{id}`

## StorePage (/shop/[storeId])
**Description:** Individual store profiles with products and information.

**User Stories:**
- As a user, I want to browse store products
- As a user, I want to view store information
- As a user, I want to read store reviews

**Components:**
- Store profile
- Product grid
- Review section
- Contact info
- Store policies
- Follow store button

**APIs:**
- GET `/stores/{id}`
- GET `/products` (filtered by store)
- GET `/store-reviews`
- POST `/favorites` (for following)
