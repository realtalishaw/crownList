# Sell Documentation

## SellLandingPage (/sell)
**Description:** Information page about the platform's resale program for pageant items.

**User Stories:**
- As a user, I want to learn about selling items
- As a user, I want to understand commission rates
- As a user, I want to see success stories

**Components:**
- Program overview
- Commission structure
- Success stories
- Registration CTA
- FAQ section
- Getting started guide

**APIs:**
- GET `/resale/overview`

## SellGuidePage (/sell/guide)
**Description:** Comprehensive guide for selling items on the platform.

**User Stories:**
- As a seller, I want to understand selling process
- As a seller, I want to learn best practices
- As a seller, I want to know item requirements

**Components:**
- Step-by-step guide
- Photo guidelines
- Pricing suggestions
- Item categories
- Condition guide
- Shipping info

**APIs:**
- GET `/resale/overview`
- GET `/shipping-label`

## EarningsPage (/sell/earnings)
**Description:** Dashboard for tracking sales and earnings from resold items.

**User Stories:**
- As a seller, I want to track my earnings
- As a seller, I want to view sales history
- As a seller, I want to manage payouts

**Components:**
- Earnings overview
- Sales history
- Payout settings
- Performance metrics
- Transaction history
- Analytics charts

**APIs:**
- GET `/resale/earnings`
- GET `/payouts`
- POST `/request-payout`
- GET `/resale-analytics`
