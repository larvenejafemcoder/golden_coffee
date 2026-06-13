---
title: User Panel
order: 6
---

# User Panel Documentation

## Access

The User Panel is accessible at `/my-account/*`. Currently no authentication guard — all routes are publicly accessible.

> **Warning:** Auth middleware should be added before production deployment.

## Layout

**File:** `src/Pages/UserPanel/Index.tsx`

The layout consists of a `Sidebar` on the left and an `<Outlet />` for child routes. On mobile, the sidebar is hidden behind a toggle button.

## Dashboard / Counter (`/my-account/`)

**File:** `src/Pages/UserPanel/Counter/Counter.tsx`

**Purpose:** User statistics overview dashboard.

**Features:**
- CounterBox components displaying user statistics
- Orders count, tickets count, and other summary metrics

**Translation keys:** `userPanel.pageTitle`

## Order History (`/my-account/orders`)

**File:** `src/Pages/UserPanel/Orders/Orders.tsx`

**Purpose:** View and manage orders with tabbed filtering.

**Features:**
- Tabbed interface: All / In Progress / Delivered / Returned / Canceled
- Order list with product image, name, price, status badge
- View invoice link per order

**Translation keys:** `orders.pageTitle`, `orders.allOrders`, `orders.inProgress`, `orders.delivered`, `orders.canceled`

## Support Tickets (`/my-account/tickets`)

**File:** `src/Pages/UserPanel/Tickets/Tickets.tsx`

**Purpose:** Create and track support tickets.

**Features:**
- Create new ticket form (subject, department, message)
- View existing tickets list
- Ticket status badges: Open, Closed, Pending
- Departments: Sales, Support, Technical

**Translation keys:** `userTickets.pageTitle`, `userTickets.subjectLabel`, `userTickets.departmentLabel`, `userTickets.messageLabel`, `userTickets.sendTicket`

## Account Details (`/my-account/details`)

**File:** `src/Pages/UserPanel/AccountDetails/AccountDetails.tsx`

**Purpose:** Edit user profile information.

**Features:**
- Edit profile form: name, username, email, phone, password, profile image
- Update button with SweetAlert2 success notification
- Cancel editing
- Avatar selection modal

**Translation keys:** `accountDetails.pageTitle`, `accountDetails.nameLabel`, `accountDetails.emailLabel`, `accountDetails.updateInfo`

## Authentication Flow

Currently login and register pages exist at `/login` and `/register` with forms but no actual authentication backend.

**Expected flow for future implementation:**

```
1. Register  →  POST /api/auth/register
2. Login     →  POST /api/auth/login  →  receive JWT
3. Store JWT in localStorage('token')
4. Send token as Bearer header in API requests
5. Protected routes check token validity
6. User Panel / Admin Panel guarded by auth middleware
```

## Sidebar Menu Structure

```
Dashboard      → /my-account
Orders         → /my-account/orders
Tickets        → /my-account/tickets
Account Details → /my-account/details
───
Admin Panel    → /admin-panel (link, not a route change)
Logout         → SweetAlert2 confirm → redirect to /
```

## Route Configuration

```tsx
// From src/routes.tsx
{
  path: "/my-account/*",
  element: <UserPanel />,
  children: [
    { path: "", element: <Counter /> },
    { path: "orders", element: <Orders /> },
    { path: "tickets", element: <Tickets /> },
    { path: "details", element: <AccountDetails /> },
  ]
}
```
