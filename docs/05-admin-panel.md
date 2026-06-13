---
title: Admin Panel
order: 5
---

# Admin Panel Documentation

## Access

The admin panel is accessible at `/admin-panel`. Currently, no authentication guard is implemented — it is publicly accessible to anyone.

> **Warning:** Auth middleware should be added before deploying to production with real data.

## Layout

**File:** `src/Pages/AdminPanel/Index.tsx`

The layout consists of an `AdminPanelSidebar` on the left and an `<Outlet />` for child routes. On mobile, the sidebar is hidden behind a toggle button.

## Dashboard (`/admin-panel`)

**File:** `src/Pages/AdminPanel/MainPage/MainPage.tsx`

**Features:**
- **Stats cards:** 4 `CounterBox` components showing total sales, orders, users, products
- **Chart:** Recharts `LineChart` displaying monthly sales and profit data
- **Recent orders:** `DataTable` showing recent orders (user, product, date, price, status)

**Mock data:** `src/Pages/AdminPanel/SellAndProfitDatas.ts` generates 12 months of mock sales/profit figures.

## Category Management (`/admin-panel/categories`)

**File:** `src/Pages/AdminPanel/Categories/Categories.tsx`

**CRUD Operations:**

| Operation | Description |
|-----------|-------------|
| Create | Form with title, short name, image fields |
| Read | DataTable listing all categories |
| Update | Edit existing category (pre-filled form) |
| Delete | SweetAlert2 confirmation dialog |

**Form fields:**
- Title (text input)
- Short Name (text input, URL-friendly slug)
- Image (text input for path or URL)

> **Note:** No client-side validation is currently implemented.

## Product Management (`/admin-panel/products`)

**File:** `src/Pages/AdminPanel/Products/Products.tsx`

**CRUD Operations:**

| Operation | Description |
|-----------|-------------|
| Create | Form with all product fields + CKEditor |
| Read | DataTable listing all products |
| Update | Edit existing product |
| Delete | SweetAlert2 confirmation dialog |

**Form fields:**
- Title (text input)
- Price (number input)
- Short Description (text input)
- Long Description (CKEditor rich text editor)
- Category (select dropdown)
- Image (text input)
- Count/Stock (number input)
- Discount (number input, percentage)

**CKEditor Integration:** Uses `@ckeditor/ckeditor5-build-classic` and `@ckeditor/ckeditor5-react`.

> **Note:** CKEditor image upload is not configured. Images must be entered as URL paths.

## Blog Management (`/admin-panel/blogs`)

**File:** `src/Pages/AdminPanel/Blogs/Blogs.tsx`, `src/Pages/AdminPanel/Blogs/Blogs.css`

**CRUD Operations:**

| Operation | Description |
|-----------|-------------|
| Create | Form with title, CKEditor content, category, publish toggle |
| Read | DataTable listing all blogs |
| Update | Edit existing blog |
| Delete | SweetAlert2 confirmation dialog |

**Form fields:**
- Title (text input)
- Description (text input)
- Content (CKEditor rich text)
- Category (select)
- Image (text input)
- Publish (toggle: yes/no)

## Message System (`/admin-panel/messages`)

**Read only + replies**

**File:** `src/Pages/AdminPanel/Messages/Messages.tsx`

**Features:**
- Inbox view with DataTable (name, phone, message, actions)
- Reply modal with textarea and send button
- Delete message with SweetAlert2 confirmation

| Operation | Description |
|-----------|-------------|
| Read | DataTable listing all messages |
| Reply | Modal with textarea reply |
| Delete | SweetAlert2 confirmation dialog |

## Comment Moderation (`/admin-panel/comments`)

**File:** `src/Pages/AdminPanel/Comments/Comments.tsx`

**Features:**
- Comment list with user, product, comment text
- Approve/delete actions
- Reply to comments via modal
- Edit comment text

| Operation | Description |
|-----------|-------------|
| Read | DataTable listing all comments |
| Approve | Toggle approval status |
| Reply | Modal with textarea reply |
| Edit | Inline or modal text edit |
| Delete | SweetAlert2 confirmation dialog |

## Ticket System (`/admin-panel/tickets`)

**File:** `src/Pages/AdminPanel/Tickets/Tickets.tsx`

**Features:**
- Ticket list (user, phone, subject)
- View ticket details with replies sub-table
- Reply to tickets via modal
- Delete ticket

| Operation | Description |
|-----------|-------------|
| Read | DataTable listing all tickets |
| View | Full ticket detail with reply history |
| Reply | Modal with textarea reply |
| Delete | SweetAlert2 confirmation dialog |

## User Management (`/admin-panel/users`)

**File:** `src/Pages/AdminPanel/Users/Users.tsx`

**Features:**
- User list with DataTable (name, phone, email, role)
- Add new user form
- Edit user details
- Promote/demote user roles (admin ↔ user)
- Ban/unban users
- SweetAlert2 confirmations for destructive actions

| Operation | Description |
|-----------|-------------|
| Create | Form with name, username, email, phone, password |
| Read | DataTable listing all users |
| Update | Edit user details |
| Ban/Unban | Toggle banned status |
| Role change | Promote to admin / demote to user |
| Delete | SweetAlert2 confirmation dialog |

## Data Structures (TypeScript Interfaces)

These represent the expected data shapes when connecting to a real backend:

```typescript
interface Product {
  id: number
  title: string
  price: number
  shortDesc: string
  longDesc: string
  category: string
  image: string
  count: number
  discount: number
}

interface Category {
  id: number
  title: string
  shortName: string
  image: string
}

interface Blog {
  id: number
  title: string
  description: string
  content: string
  category: string
  image: string
  publish: boolean
}

interface Message {
  id: number
  name: string
  phone: string
  message: string
}

interface Comment {
  id: number
  user: string
  product: string
  comment: string
}

interface Ticket {
  id: number
  user: string
  phone: string
  subject: string
  text: string
}

interface User {
  id: number
  name: string
  username: string
  phone: string
  email: string
  role: 'admin' | 'user'
  banned: boolean
}
```

## CRUD Pattern

All admin CRUD pages follow a consistent pattern:

```
┌─────────────────────────────────────┐
│  AdminPanelTableTitle                │
│  [Add New] [Show List] toggle        │
├─────────────────────────────────────┤
│  When adding/editing:                │
│  ┌─────────────────────────────────┐ │
│  │  Form fields (inputs, CKEditor) │ │
│  │  [Save] [Cancel] buttons        │ │
│  └─────────────────────────────────┘ │
│  When listing:                       │
│  ┌─────────────────────────────────┐ │
│  │  DataTable with rows            │ │
│  │  [Edit] [Delete] per row        │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## Adding a New Admin Section

1. Create the page component in `src/Pages/AdminPanel/{Name}/`
2. Add route in `src/routes.tsx` under admin panel children
3. Add link to `AdminPanelSidebar`
4. Add translation keys in locale files
5. Update `Locale` interface in `src/types/locale.ts`
