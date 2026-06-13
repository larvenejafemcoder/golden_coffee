# Golden Coffee Shop — Comprehensive Documentation

> **Version:** 0.0.0 | **Framework:** React 18 + TypeScript 6 + Vite 5 | **Styling:** Tailwind CSS 3.4
> **Live Demo:** https://goldencoffee.liara.run | **License:** MIT | **Author:** Hadi Heidariazar

---

## Table of Contents

1. [Getting Started Guide](#1-getting-started-guide)
2. [Project Architecture Deep Dive](#2-project-architecture-deep-dive)
3. [Component Library Documentation](#3-component-library-documentation)
4. [Page-by-Page Functional Documentation](#4-page-by-page-functional-documentation)
5. [Admin Panel Documentation](#5-admin-panel-documentation)
6. [User Panel Documentation](#6-user-panel-documentation)
7. [Localization & Internationalization Guide](#7-localization--internationalization-guide)
8. [Dark Mode Implementation Guide](#8-dark-mode-implementation-guide)
9. [State Management Patterns](#9-state-management-patterns)
10. [Styling & Design System](#10-styling--design-system)
11. [Performance Optimization](#11-performance-optimization)
12. [Testing Strategy](#12-testing-strategy)
13. [Deployment Guide](#13-deployment-guide)
14. [API Integration Guide](#14-api-integration-guide)
15. [Contributing Guidelines](#15-contributing-guidelines)
16. [Known Issues & Limitations](#16-known-issues--limitations)
17. [Future Roadmap Suggestions](#17-future-roadmap-suggestions)
18. [Code Examples Appendix](#18-code-examples-appendix)

---

## 1. Getting Started Guide

### 1.1 Prerequisites

| Software | Minimum Version |
|---|---|
| Node.js | 18.x or higher |
| npm | 9.x or higher |
| Git | 2.x |

### 1.2 Installation Steps

```bash
# Clone the repository
git clone <repository-url>
cd golden_coffee

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 1.3 Environment Configuration

The project expects an optional environment variable `VITE_API_URL` defined in `src/types/global.d.ts`:

```ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
```

Create a `.env` file in the project root if you need to set a backend API URL:

```env
VITE_API_URL=https://api.example.com
```

The app works fully with mock data without setting any environment variables.

### 1.4 First Run Verification

```bash
npm run dev
```

Expected output:
```
VITE v5.x.x  ready in XXX ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open http://localhost:5173/ in your browser. You should see:
- A hero section with coffee imagery
- A fixed header with navigation links
- A loading spinner that disappears on window load
- The site logo "GoldenAge Coffee"

### 1.5 Common Troubleshooting

**Issue 1: Port already in use**
```
Error: listen EADDRINUSE :::5173
```
Run on a different port:
```bash
npx vite --port 3000
```

**Issue 2: Node version mismatch**
If you see errors about `exports` not defined or module parsing failures, ensure you're using Node 18+:
```bash
node --version   # Should be >= 18
```

**Issue 3: Dependency installation fails**
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Issue 4: Tailwind styles not updating**
Manually compile Tailwind:
```bash
npm run tailwind
```

---

## 2. Project Architecture Deep Dive

### 2.1 Build Tool Choice (Vite)

Vite 5 was chosen over Create React App (CRA) and Next.js for the following reasons:

- **Fast HMR**: Vite's native ES module-based dev server provides instant hot module replacement, even for large component trees.
- **No server-side rendering needed**: This is a client-rendered SPA — Next.js would add unnecessary complexity.
- **Simpler configuration**: Vite's plugin system (just `@vitejs/plugin-react`) is minimal compared to CRA's abstraction layer.
- **TypeScript 6 support**: Vite handles the latest TypeScript versions out of the box.
- **Build speed**: Rollup-based production builds are significantly faster than webpack.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

### 2.2 TypeScript Implementation

TypeScript is configured in strict mode with the following key settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/Components/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"],
      "@pages/*": ["./src/Pages/*"],
      "@context/*": ["./src/context/*"]
    }
  }
}
```

The `@/` alias is the primary import shortcut used throughout the codebase:
```tsx
import { useTranslation } from '@/hooks/useTranslation'
import Header from '@/Components/Header/Header'
```

ESLint enforces `@typescript-eslint/no-explicit-any: 'error'` to prevent loose typing.

### 2.3 Styling Architecture

The project uses a hybrid approach:

**Tailwind CSS** provides utility-first styling defined in `tailwind.config.js`:
```js
// Custom colors (brown coffee palette)
colors: {
  brown: {
    100: "#ECE0D1",
    300: "#DBC1AC",
    600: "#967259",
    900: "#634832"
  }
}

// Font families
fontFamily: {
  dana: "Dana",
  "dana-medium": "Dana Medium",
  "dana-bold": "Dana DemiBold",
  morabba: "Morabba Light",
  "morabba-medium": "Morabba Medium",
  "morabba-bold": "Morabba Bold"
}

// Dark mode strategy
darkMode: "class"

// Custom screens
screens: {
  xs: "480px",
  ipad: "992px"
}
```

**Custom CSS** in `src/index.css` adds:
- `@font-face` declarations for Dana (3 weights) and Morabba (3 weights) with `font-display: swap`
- Component layer utilities: `.submenu`, `.overlay`, `.circle`, `.btn-orange`, `.loader`
- Product section background with gradient overlay
- Category banner backgrounds

Dark mode uses the `class` strategy: the `dark` class on `<html>` toggles all `dark:` variants in Tailwind. An inline script in `index.html` prevents flash of unstyled content by checking `localStorage.theme` before React mounts.

### 2.4 Routing Architecture

Routes are defined centrally in `src/routes.tsx` using React Router v6's `useRoutes` hook:

```tsx
const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/order", element: <OrderConfirm /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/blog/:shortName", element: <BlogInfo /> },
  { path: "/category/:shortName", element: <Shop /> },
  { path: "/product/:shortName", element: <ProductInfo /> },
  {
    path: "/my-account/*", element: <UserPanel />,
    children: [
      { path: "", element: <Counter /> },
      { path: "orders", element: <Orders /> },
      { path: "tickets", element: <Tickets /> },
      { path: "details", element: <AccountDetails /> },
    ]
  },
  {
    path: "/admin-panel/*", element: <AdminPanel />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'products', element: <AdminPanelProducts /> },
      { path: 'blogs', element: <AdminPanelBlogs /> },
      { path: 'users', element: <AdminPanelUsers /> },
      { path: 'comments', element: <AdminPanelComments /> },
      { path: 'messages', element: <AdminPanelMessages /> },
      { path: 'tickets', element: <AdminPanelTickets /> },
      { path: 'categories', element: <AdminPanelCategories /> },
    ]
  }
]
```

**Layout + Outlet Pattern**: Both Admin and User panels use a shared layout component (`AdminPanel/Index.tsx` and `UserPanel/Index.tsx`) that renders a sidebar alongside `<Outlet />` for nested child routes.

### 2.5 State Management

The project uses **React Context API** rather than Redux or Zustand. This is appropriate for the scale of the application:

- **Single context**: `LanguageContext` manages the bilingual system
- **No auth context yet**: Authentication is currently mock-only (no real backend)
- **Local state**: `useState` and `useReducer` for component-level state (forms, modals, cart UI)

```tsx
// LanguageContext pattern
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null
    return stored === 'en' || stored === 'ja' ? stored : 'ja'
  })

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.lang = newLanguage
  }, [])

  const t = LOCALE_MAP[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

### 2.6 Bilingual System

The i18n system supports English and Japanese with a straightforward pattern:

**Locale JSON files**: `src/locales/en.json` (~2400 lines) and `src/locales/ja.json` (~1700 lines) contain all translation keys organized by feature section.

**Key structure uses dot notation** through the Locale TypeScript interface:
```ts
t.common.siteName        // → "Golden Coffee"
t.home.heroTitle1        // → hero section title
t.productInfo.addToCart  // → "Add to Cart"
t.adminProducts.pageTitle // → admin products page title
```

**Usage in components**:
```tsx
import { useTranslation } from '@/hooks/useTranslation'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t.home.heroTitle1}</h1>
}
```

**RTL/LTR considerations**: The HTML has `dir="rtl"` set in `index.html`. Switching languages does not currently change the direction — the entire site is RTL-first.

---

## 3. Component Library Documentation

### 3.1 Header

**File**: `src/Components/Header/Header.tsx` (468 lines)

**Purpose**: Fixed top navigation bar with desktop and mobile variants. Includes logo, nav links, cart sidebar, theme toggle, and login/register links.

**Props Interface**: None (self-contained component).

**Dependencies**: `useTranslation`, `toggleTheme`

**Behavior**:
- **Desktop** (`md:` breakpoint): Fixed top bar with `backdrop-blur`, hover sub-menus, cart dropdown.
- **Mobile** (`< md`): Hamburger menu with slide-in navigation, separate cart slide-in from the right.
- **Cart**: Slide-out panel with product list, quantity controls, price calculation, and order button.
- **Theme toggle**: Moon/sun icons that call `toggleTheme()`.
- **Sub-menus**: Shop nav item shows a dropdown with category links on hover.

**Styling**: Uses `bg-black/50` backdrop-blurred header, `rounded-3xl`, fixed positioning at `top-9`. Mobile uses full white/dark background with slide transitions.

### 3.2 Footer

**File**: `src/Components/Footer/Footer.tsx` (186 lines)

**Purpose**: Site footer with logo, description, quick access links, contact info, social media links, and copyright.

**Props Interface**: None.

**Dependencies**: `useTranslation`

**Features**:
- Scroll-to-top button (circular arrow button)
- SVG logo (both icon and wordmark in orange)
- Quick access links grid (privacy, returns, terms, order, FAQ, careers, warranty, contact)
- Contact info: address, email, phone numbers
- Social media buttons: Instagram, Telegram
- Copyright notice

### 3.3 Sidebar (User Panel)

**File**: `src/Components/Sidebar/Sidebar.tsx` (108 lines)

**Purpose**: Navigation sidebar for the User Panel with active-state highlighting and SweetAlert2 logout confirm.

**Props Interface**:
```tsx
interface SidebarProps {
  setShow?: (show: boolean) => void
}
```

**Menu Items**: Dashboard, Orders, Tickets, Account Details, Admin Panel link, Logout.

**Dependencies**: `react-router-dom` (NavLink), `sweetalert2`, `useTranslation`

**Active State**: Uses `NavLink`'s `isActive` prop to conditionally apply `bg-orange-400 text-white` classes.

### 3.4 AdminPanelSidebar

**File**: `src/Components/AdminPanelSidebar/AdminPanelSidebar.tsx` (132 lines)

**Purpose**: Navigation sidebar for the Admin Panel with links to all admin sections.

**Props Interface**:
```tsx
interface AdminPanelSidebarProps {
  setShow?: (show: boolean) => void
}
```

**Menu Items**: Main Page, Products, Blogs, Users, Comments, Messages, Tickets, Categories, Logout.

**Dependencies**: Same as Sidebar — `NavLink`, `Swal`, `useTranslation`.

### 3.5 Modal

**File**: `src/Components/Modal/Modal.tsx` (37 lines)

**Purpose**: Generic centered modal with overlay click-to-close and body scroll lock.

**Props Interface**:
```tsx
interface ModalProps {
  showModalState: boolean
  setShowModalState: (state: boolean) => void
  title: string
  children: ReactNode
  moldaWidth?: string
}
```

**Usage Example**:
```tsx
<Modal
  showModalState={showReplyComment}
  setShowModalState={setShowReplyComment}
  title={t.productInfo.reply}
>
  <textarea ... />
  <button>Send</button>
</Modal>
```

**Behavior**: Adds `overflow-y-hidden` to `document.body` when open. Transitions visibility and opacity. Overlay click closes the modal.

### 3.6 DataTable

**File**: `src/Components/DataTable/DataTable.tsx` (30 lines)

**Purpose**: Generic table component for admin panels displaying dynamic headers and rows.

**Props Interface**:
```tsx
interface DataTableProps {
  headerItemCount: number
  headerItemTitle: string[]
  sectionsTableWidth: string[]
  children: ReactNode
}
```

**Usage Example**:
```tsx
<DataTable
  headerItemCount={4}
  headerItemTitle={["Name", "Email", "Role", "Actions"]}
  sectionsTableWidth={["w-1/4", "w-1/4", "w-1/4", "w-1/4"]}
>
  <tr>...</tr>
</DataTable>
```

**Note**: This component renders as a CSS grid, not a traditional HTML table. It automatically includes an `ID` column as the first header.

### 3.7 ProductBox

**File**: `src/Components/ProductBox/ProductBox.tsx` (77 lines)

**Purpose**: Product card for grid displays showing image, discount badge, category, title, price, rating stars, and add-to-cart button.

**Props Interface**: None (uses hardcoded mock data).

**Features**:
- Discount badge (percentage circle, top-right)
- Category tag (sky-blue background)
- Product title (2-line clamp)
- Price display with original (strikethrough) and discounted price + "Toman" currency
- Star rating (5 stars)
- Add-to-cart button (shopping cart icon)

**Styling**: White card with `shadow-normal`, hover effects, `rounded-2xl`. Dark mode variants for all elements.

### 3.8 BestSelling

**File**: `src/Components/BestSelling/BestSelling.tsx` (160 lines)

**Purpose**: Swiper carousel section displaying best-selling products with auto-play and custom navigation.

**Props Interface**: None.

**Dependencies**: Swiper (Autoplay, Navigation modules), ProductBox, SectionHeader, `useTranslation`.

**Behavior**:
- Responsive slides: 2 on mobile, 3 on tablet, 4 on desktop
- Auto-play at 2-second intervals
- Custom prev/next buttons outside the Swiper
- Wrapped in a section with SectionHeader

### 3.9 CategoryBox

**File**: `src/Components/CategoryBox/CategoryBox.tsx` (22 lines)

**Purpose**: Single category card with image and link.

**Props Interface**:
```tsx
interface CategoryBoxProps {
  title: string
  imageSrc: string
  link: string
}
```

**Usage Example**:
```tsx
<CategoryBox
  title="Coffee Beans"
  imageSrc="category1.png"
  link="/category/coffee"
/>
```

### 3.10 SectionHeader

**File**: `src/Components/SectionHeader/SectionHeader.tsx` (27 lines)

**Purpose**: Reusable section heading with title, optional subtitle, and children slot.

**Props Interface**:
```tsx
interface SectionHeaderProps {
  title: string
  subTitle?: string
  hasSeparator?: boolean
  children?: ReactNode
}
```

### 3.11 ServiceBox

**File**: `src/Components/ServiceBox/ServiceBox.tsx` (23 lines)

**Purpose**: Service feature card with icon, title, and description.

**Props Interface**:
```tsx
interface ServiceBoxProps {
  title: string
  desc: string
  children: ReactNode
}
```

### 3.12 BlogBox

**File**: `src/Components/BlogBox/BlogBox.tsx` (39 lines)

**Purpose**: Blog post card with image, date, title, and link.

**Props Interface**:
```tsx
interface BlogBoxProps {
  title: string
  imageSrc: string
  link: string
  day: string
  month: string
  year: string
}
```

### 3.13 Breadcrumb

**File**: `src/Components/Breadcrumb/Breadcrumb.tsx` (50 lines)

**Purpose**: Navigation breadcrumb with up to 3 levels (home > current section > current page).

**Props Interface**:
```tsx
interface BreadcrumbProps {
  firstTitle: string
  lastTitle?: string
  firsTitletLink?: string
  isBg?: boolean
  centered?: boolean
}
```

**Features**: RTL-aware chevron arrows (using `rtl:rotate-180`), optional background container, optional centering.

### 3.14 TitlePage

**File**: `src/Components/TitlePage/TitlePage.tsx` (16 lines)

**Purpose**: Sets the HTML `<title>` using react-helmet.

**Props Interface**:
```tsx
interface TitlePageProps {
  title: string
}
```

**Usage**: Renders `<title>{title} - {t.common.siteName}</title>` inside `<Helmet>`.

---

## 4. Page-by-Page Functional Documentation

### 4.1 Home (`/`)

**Purpose**: Landing page showcasing hero section, products, categories, best-selling items, blogs, and services.

**Components used**: Header, LastProducts, CategoryBaner, Categories, BestSelling, LastBlogs, Services, Footer.

**User interactions**:
- Scroll-to-products button (down arrow in hero)
- Navigation through header links
- Carousel navigation for best-selling

**Responsive behavior**:
- Mobile: `bg-home-mobile` background, no decorative circles
- Desktop: `bg-home-desktop` with animated concentric circles

**Translation keys**: `home.heroTitle1`, `home.heroTitle2`, `home.heroSubtitle`, `home.shopNow`, `home.bestSellingTitle`, `home.lastProductsTitle`, `home.lastBlogsTitle`

### 4.2 Shop (`/shop`, `/category/:shortName`)

**Purpose**: Product listing page with header banner, about section, sortable grid.

**Components used**: TitlePage, Header, SectionHeader, ProductBox, Footer.

**User interactions**:
- Sort dropdown (newest, cheapest, most expensive, biggest discount, most popular)
- Product box hover effects
- Category filter (via URL param `:shortName`)

**Responsive behavior**: 2-column grid on mobile → 3 columns on sm → 4 on lg.

**Translation keys**: `shop.pageTitle`, `shop.aboutProductsTitle`, `shop.aboutProductsText`, `shop.newest`, `shop.cheapest`, `shop.mostExpensive`

### 4.3 ProductInfo (`/product/:shortName`)

**Purpose**: Single product detail with image gallery, info, reviews, related products.

**Components used**: TitlePage, Header, Breadcrumb, Swiper, Modal, SectionHeader, ProductBox, Footer.

**User interactions**:
- Image gallery with zoom (Swiper zoom module)
- Thumbnail navigation
- Add to cart (SweetAlert2 confirmation)
- Star rating selection
- Write a review (textarea + submit)
- Reply to comments (modal)
- Related products carousel

**Sections**: Product images (with zoom), product info (title, stock status, category, description, rating), price + add-to-cart, reviews section (rating select, comment textarea), comments section with reply modal, related products Swiper.

**Translation keys**: `productInfo.pageTitle`, `productInfo.addToCart`, `productInfo.category`, `productInfo.aboutProduct`, `productInfo.rating`, `productInfo.inStock`, `productInfo.relatedProducts`, `productInfo.comments`

### 4.4 Blogs (`/blogs`)

**Purpose**: Blog listing page (not read in detail but inferred from route).

**Components used**: Standard layout with Header/Footer, blog grid.

**User interactions**: Browse blog posts, navigate to individual blog.

### 4.5 BlogInfo (`/blog/:shortName`)

**Purpose**: Single blog post detail page.

**Components used**: Standard layout with Header/Footer.

### 4.6 About Us (`/about-us`)

**Purpose**: About page with company story, development philosophy, contact info.

**Components used**: TitlePage, Header, Footer, `useTranslation`.

**Content**: Introduction, philosophy statement, contact details, engineering journey section with current focus areas.

**Translation keys**: `aboutUs.pageTitle`, `aboutUs.introTitle`, `aboutUs.introContent`, `aboutUs.contactTitle`

### 4.7 Contact Us (`/contact-us`)

**Purpose**: Contact form page with mission statement and inquiry form.

**Components used**: TitlePage, Header, Footer, SweetAlert2.

**User interactions**:
- Fill out contact form (name, phone, email, message)
- Submit (SweetAlert2 success notification)
- Form uses `preventDefault` — no backend submission yet

**Translation keys**: `contactUs.pageTitle`, `contactUs.missionTitle`, `contactUs.formTitle`, `contactUs.nameLabel`, `contactUs.emailLabel`, `contactUs.messageLabel`, `contactUs.submitButton`

### 4.8 Login (`/login`)

**Purpose**: User login page.

**Components used**: Standard layout. Form renders login fields.

**Translation keys**: `auth.loginTitle`, `auth.emailLabel`, `auth.passwordLabel`, `auth.loginButton`, `auth.noAccount`

### 4.9 Register (`/register`)

**Purpose**: User registration page.

**Components used**: Standard layout. Form renders registration fields.

**Translation keys**: `auth.registerTitle`, `auth.nameLabel`, `auth.usernameLabel`, `auth.emailLabel`, `auth.phoneLabel`, `auth.passwordLabel`, `auth.registerButton`, `auth.hasAccount`

### 4.10 OrderConfirm (`/order`)

**Purpose**: Order review and confirmation page.

**Components used**: Standard layout. Cart review form with address fields.

**Translation keys**: `orderConfirm.pageTitle`, `orderConfirm.confirmOrder`, `orderConfirm.nameLabel`, `orderConfirm.addressLabel`, `orderConfirm.total`, `orderConfirm.cart`

---

## 5. Admin Panel Documentation

### 5.1 Access

The admin panel is accessible at `/admin-panel`. Currently, no authentication guard is implemented — it's accessible to anyone. Authentication middleware should be added when integrating a real backend.

### 5.2 Dashboard (`/admin-panel`)

**File**: `src/Pages/AdminPanel/MainPage/MainPage.tsx`

**Features**:
- **Stats cards**: 4 `CounterBox` components showing total sales, orders, users, products
- **Chart**: Recharts `LineChart` showing monthly sales and profit data (from `SellAndProfitDatas.ts`)
- **Recent orders**: `DataTable` showing recent orders with user, product, date, price, status columns

**Mock data**: Chart data comes from `SellAndProfitDatas.ts` which generates 12 months of mock sales/profit figures.

### 5.3 Category Management (`/admin-panel/categories`)

**File**: `src/Pages/AdminPanel/Categories/Categories.tsx`

**CRUD Operations**: Add new category (title, short name, image), edit existing, delete with confirmation.

**Form fields**:
- Title (text input)
- Short Name (text input, URL-friendly slug)
- Image (text input for path or URL)

**Validation**: No client-side validation currently implemented.

### 5.4 Product Management (`/admin-panel/products`)

**File**: `src/Pages/AdminPanel/Products/Products.tsx`

**Form fields**:
- Title (text input)
- Price (number input)
- Short Description (text input)
- Long Description (CKEditor rich text editor)
- Category (select dropdown)
- Image (text input)
- Count/Stock (number input)
- Discount (number input, percentage)

**CKEditor Integration**: Uses `@ckeditor/ckeditor5-build-classic` and `@ckeditor/ckeditor5-react` for the long description field.

**Operations**: Add new product, edit existing, delete with SweetAlert2 confirmation.

### 5.5 Blog Management (`/admin-panel/blogs`)

**File**: `src/Pages/AdminPanel/Blogs/Blogs.tsx`

**Form fields**:
- Title (text input)
- Description (text input)
- Content (CKEditor rich text)
- Category (select)
- Image (text input)
- Publish status (toggle)

### 5.6 Message System (`/admin-panel/messages`)

**File**: `src/Pages/AdminPanel/Messages/Messages.tsx`

**Features**:
- Inbox view with DataTable (name, phone, message, actions)
- Reply modal with textarea and send button
- Delete message with confirmation

### 5.7 Comment Moderation (`/admin-panel/comments`)

**File**: `src/Pages/AdminPanel/Comments/Comments.tsx`

**Features**:
- Comment list with user, product, comment text
- Approve/delete actions
- Reply to comments via modal
- Edit comment text

### 5.8 Ticket System (`/admin-panel/tickets`)

**File**: `src/Pages/AdminPanel/Tickets/Tickets.tsx`

**Features**:
- Ticket list (user, phone, subject)
- View ticket details
- Reply to tickets via modal
- Delete ticket

### 5.9 User Management (`/admin-panel/users`)

**File**: `src/Pages/AdminPanel/Users/Users.tsx`

**Features**:
- User list with DataTable (name, phone, email, role)
- Add new user form
- Edit user details
- Promote/demote user roles (admin ↔ user)
- Ban/unban users
- SweetAlert2 confirmations for all destructive actions

### 5.10 Data Structures (TypeScript Interfaces)

These interfaces represent the expected data shapes when connecting to a real backend:

```tsx
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

---

## 6. User Panel Documentation

### 6.1 Access

The User Panel is accessible at `/my-account/*`. Currently no authentication guard — all routes are publicly accessible.

### 6.2 Account Details (`/my-account/details`)

**File**: `src/Pages/UserPanel/AccountDetails/AccountDetails.tsx`

**Features**:
- Edit profile form (name, username, email, phone, password, profile image)
- Update info button with SweetAlert2 success notification
- Cancel editing

**Translation keys**: `accountDetails.pageTitle`, `accountDetails.nameLabel`, `accountDetails.emailLabel`, `accountDetails.updateInfo`

### 6.3 Order History (`/my-account/orders`)

**File**: `src/Pages/UserPanel/Orders/Orders.tsx`

**Features**:
- Tabbed interface: All / In Progress / Delivered / Returned / Canceled
- Order list with product image, name, price, status badge
- View invoice link

**Translation keys**: `orders.pageTitle`, `orders.allOrders`, `orders.inProgress`, `orders.delivered`, `orders.canceled`

### 6.4 Support Tickets (`/my-account/tickets`)

**File**: `src/Pages/UserPanel/Tickets/Tickets.tsx`

**Features**:
- Create new ticket form (subject, department select, message)
- View existing tickets list
- Ticket status badges (Open, Closed, Pending)

**Departments**: Sales, Support, Technical

**Translation keys**: `userTickets.pageTitle`, `userTickets.subjectLabel`, `userTickets.departmentLabel`, `userTickets.messageLabel`, `userTickets.sendTicket`

### 6.5 Counter/Dashboard (`/my-account/`)

**File**: `src/Pages/UserPanel/Counter/Counter.tsx`

**Features**:
- User statistics overview
- Orders count, tickets count, etc.

### 6.6 Authentication Flow

Currently, login and register pages exist at `/login` and `/register` with forms but no actual authentication backend. The flow expected would be:

1. User registers with name, username, email, phone, password
2. User logs in with email/username and password
3. JWT token stored in localStorage
4. Token sent as Bearer header in API requests
5. User Panel and Admin Panel protected by auth guard component

---

## 7. Localization & Internationalization Guide

### 7.1 Adding a New Language (e.g., Spanish)

**Step 1**: Create the locale file `src/locales/es.json`

Copy `en.json` and translate all values to Spanish:

```bash
cp src/locales/en.json src/locales/es.json
```

**Step 2**: Add the language to the type in `src/types/locale.ts`:

```ts
export type Language = 'en' | 'ja' | 'es';
```

**Step 3**: Register the locale in `src/context/LanguageContext.tsx`:

```ts
import es from '../locales/es.json'

const LOCALE_MAP: Record<Language, Locale> = { en, ja, es }
```

**Step 4**: Update the default language logic if needed (or keep as `ja`).

**Step 5**: Update the language switcher in the UI (Header component) to include the new option.

### 7.2 Translation Key Naming Convention

Keys follow a dot-notation convention organized by feature:

```
common.siteName          → global/shared keys
nav.homePage             → navigation
header.cart              → header-specific
home.heroTitle1          → home page
shop.pageTitle           → shop page
productInfo.addToCart    → product info page
adminProducts.pageTitle  → admin product management
```

### 7.3 Using the `t()` Function

```tsx
import { useTranslation } from '@/hooks/useTranslation'

function Component() {
  const { t, language, toggleLanguage, setLanguage } = useTranslation()

  return (
    <div>
      <h1>{t.common.siteName}</h1>
      <p>{t.home.heroTitle1}</p>
      <button onClick={toggleLanguage}>
        Current: {language}
      </button>
    </div>
  )
}
```

### 7.4 Language Persistence

The selected language is stored in `localStorage` with key `'language'`. Default is `'ja'` (Japanese). When the app loads, it checks localStorage first, falls back to `'ja'`.

### 7.5 RTL/LTR Switching

The entire app is RTL-first (`dir="rtl"` in `index.html`). When adding LTR languages (like Spanish), you would need to:
1. Remove the hardcoded `dir="rtl"` from `index.html`
2. Set `dir` dynamically in `LanguageContext.setLanguage()`
3. Review all CSS for RTL-specific properties
4. Test components that use `left`/`right` positioning

---

## 8. Dark Mode Implementation Guide

### 8.1 Strategy

The project uses Tailwind's `class`-based dark mode strategy (`darkMode: "class"`). The `dark` class is toggled on the `<html>` element.

### 8.2 Initialization (Flash Prevention)

An inline script in `index.html` runs before React mounts:

```html
<script>
  if (localStorage.getItem('theme')) {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  } else {
    document.documentElement.classList.remove('dark')
  }
</script>
```

This prevents a flash of light theme when the user has dark mode enabled.

### 8.3 ToggleTheme Component

**File**: `src/Features/ToggleTheme/ToggleTheme.ts`

```ts
function toggleTheme(): void {
    if (localStorage.getItem('theme') === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}
```

Called from Header and Admin/User panel headers via `onClick={toggleTheme}`.

### 8.4 Tailwind Configuration

```js
darkMode: "class"
```

All dark variants use the `dark:` prefix: `dark:bg-zinc-800`, `dark:text-white`, `dark:border-white/10`.

### 8.5 Writing Dark-Aware Components

```tsx
<div className="bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white">
  <h2 className="dark:text-orange-300">Title</h2>
</div>
```

### 8.6 Testing Dark Mode

- Use browser DevTools → Elements → toggle `dark` class on `<html>`
- Or click the theme toggle in the header
- Verify all text is readable, contrast ratios are adequate, and no styling artifacts appear

---

## 9. State Management Patterns

### 9.1 Context Providers

**Single context**: `LanguageContext` wraps the entire app in `App.tsx`:

```tsx
// App.tsx
export default function App() {
  const router = useRoutes(routes)
  return (
    <LanguageProvider>
      {router}
    </LanguageProvider>
  )
}
```

### 9.2 Local Component State

**`useState`** is used for:
- UI toggles: `showNavbar`, `showCart`, `showSubMenu` (Header)
- Modal states: `showReplyComment` (ProductInfo)
- Sidebar visibility: `showSidebar` (Admin/User panel layouts)

### 9.3 Form State

Forms use uncontrolled inputs with React refs or basic `useState` handlers. Example from ContactUs:

```tsx
<form onSubmit={(event) => event.preventDefault()}>
  <input type="text" placeholder={t.contactUs.namePlaceholder} />
  <button onClick={showAlert}>Submit</button>
</form>
```

### 9.4 Server State (Mock Data)

Currently, all data is hardcoded/mock. Expected integration pattern:

```tsx
// Future API call pattern
const [products, setProducts] = useState<Product[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<Error | null>(null)

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/products`)
    .then(res => res.json())
    .then(setProducts)
    .catch(setError)
    .finally(() => setLoading(false))
}, [])
```

### 9.5 URL State

Shop filtering currently relies on URL params (`/category/:shortName`) and would benefit from query parameters for sort order, price range, and pagination.

### 9.6 Persistence

| Data | Storage | Key |
|---|---|---|
| Theme preference | localStorage | `theme` |
| Language preference | localStorage | `language` |
| Auth token (future) | localStorage | `token` |

---

## 10. Styling & Design System

### 10.1 Color Palette

```js
// Primary coffee tones
brown: {
  100: "#ECE0D1",   // Light cream
  300: "#DBC1AC",   // Tan
  600: "#967259",   // Medium brown
  900: "#634832"    // Dark brown
}

// Accent
orange: {
  200: "#FDBA74",   // Light orange (secondary)
  300: "#F97316",   // Primary orange (highlights, badges)
  400: "#EA580C",   // Dark orange (buttons, active states)
  500: "#9A3412"    // Burnt orange (hover)
}

// Semantic
teal: { 600: "#0D9488" },   // Success/confirm (cart, order)
green: { 200: "#BBF7D0", 500: "#22C55E", 600: "#16A34A", 700: "#15803D" },
red: { 500: "#EF4444", 600: "#DC2626" },
sky: { 700: "#0369A1" },    // Category tags
yellow: { 500: "#EAB308" }, // Star ratings
```

### 10.2 Typography

| Font | Weight | Usage |
|---|---|---|
| Dana (Regular) | 400 | Body text |
| Dana Medium | 500 | Bold body, labels |
| Dana DemiBold | 600 | Strong emphasis |
| Morabba Light | 300 | Subtitles, decorative |
| Morabba Medium | 500 | Section headings (h2, h3) |
| Morabba Bold | 700 | Hero titles, major headings |

All fonts use `font-display: swap` for performance.

### 10.3 Spacing System

Based on Tailwind's default spacing scale with two additions:
```js
spacing: {
  27: "6.25rem",   // 100px
  50: "12.5rem"    // 200px
}
```

### 10.4 Component Variants

- **`.btn-orange`**: `bg-orange-400 text-white hover:bg-orange-500 transition-colors`
- **`.overlay`**: Fixed full-screen black/50 overlay for modals and mobile menus
- **`.submenu`**: Vertical flex column for dropdown navigation items
- **`.circle`**: Border-radius full with flexible sizing (--lg: 203px, --md: 145px, --sm: 95px)

### 10.5 Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| `xs` | 480px | Small phones, custom |
| `sm` | 640px | Large phones |
| `md` | 769px | Tablets (custom, not default 768) |
| `ipad` | 992px | Large tablets, custom |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

### 10.6 Z-Index Layering

| Element | Z-Index |
|---|---|
| Spinner (first-z) | 999999999999 |
| Modal wrapper | 50 |
| Fixed header | 50 |
| Sidebar (mobile) | 50 |
| Overlay | 10 |

---

## 11. Performance Optimization

### 11.1 Code Splitting

Vite automatically code-splits by route. For further optimization, `React.lazy` can be used for admin/user panel pages:

```tsx
const AdminPanel = React.lazy(() => import('./Pages/AdminPanel/Index'))
```

### 11.2 Image Optimization

- All product/category/blog images use **WebP** format (except a few JPG/PNG fallbacks)
- Images use `loading="lazy"` attribute throughout
- Hero background uses separate mobile/desktop images via Tailwind's `bg-home-mobile` / `bg-home-desktop`

### 11.3 Bundle Analysis

To analyze bundle size:
```bash
npx vite build
npx vite-bundle-analyzer
```

### 11.4 Memoization

The codebase currently uses minimal memoization. Opportunities for `React.memo`:
- `ProductBox` (frequently re-rendered in grids)
- `BlogBox`
- `CategoryBox`

`useCallback` is used in `LanguageContext` for `setLanguage` and `toggleLanguage`.

### 11.5 Font Loading

Fonts use `@font-face` with `font-display: swap` to prevent invisible text during load. Preload recommendations:

```html
<link rel="preload" href="/fonts/Dana/DanaFaNum-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Morabba/Morabba-Medium.woff2" as="font" type="font/woff2" crossorigin>
```

---

## 12. Testing Strategy

### 12.1 Current State

No tests currently exist in the codebase.

### 12.2 Recommended Tools

| Tool | Purpose |
|---|---|
| Vitest | Unit & integration tests (Vite-compatible) |
| React Testing Library | Component testing |
| Playwright | E2E testing |

### 12.3 Example: Testing ProductBox

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductBox from './ProductBox'

describe('ProductBox', () => {
  it('renders product image', () => {
    render(<ProductBox />)
    const img = screen.getByAltText(/product/i)
    expect(img).toBeInTheDocument()
  })

  it('shows add to cart button', () => {
    render(<ProductBox />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### 12.4 Example: Testing LanguageContext

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLanguage } from './LanguageContext'

function TestComponent() {
  const { language, toggleLanguage, t } = useLanguage()
  return (
    <div>
      <span>{language}</span>
      <span>{t.common.siteName}</span>
      <button onClick={toggleLanguage}>Toggle</button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('defaults to Japanese', () => {
    render(<LanguageProvider><TestComponent /></LanguageProvider>)
    expect(screen.getByText('ja')).toBeInTheDocument()
  })

  it('toggles language', () => {
    render(<LanguageProvider><TestComponent /></LanguageProvider>)
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByText('en')).toBeInTheDocument()
  })
})
```

### 12.5 Mock Data Strategy

Create test fixtures in `src/test/fixtures/` that mirror the mock data used in components.

---

## 13. Deployment Guide

### 13.1 Build Command

```bash
npm run build
```

Output is in the `dist/` directory.

### 13.2 Static Hosting Configuration

Since this is an SPA, configure your server to redirect all routes to `index.html`:

**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache** (`.htaccess`):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

### 13.3 Hosting Recommendations

| Provider | Notes |
|---|---|
| liara.run | Current host (Iranian cloud) |
| Netlify | Drag-and-drop `dist/`, built-in SPA redirect |
| Vercel | Zero-config, auto-detects Vite |
| AWS S3 + CloudFront | Manual setup, most scalable |

### 13.4 CI/CD Pipeline (GitHub Actions Example)

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 14. API Integration Guide

### 14.1 Expected API Endpoints

```yaml
Products:
  GET    /api/products          # List all products
  GET    /api/products/:id      # Get single product
  POST   /api/products          # Create product
  PUT    /api/products/:id      # Update product
  DELETE /api/products/:id      # Delete product

Categories:
  GET    /api/categories
  POST   /api/categories
  PUT    /api/categories/:id
  DELETE /api/categories/:id

Blogs:
  GET    /api/blogs
  GET    /api/blogs/:id
  POST   /api/blogs
  PUT    /api/blogs/:id
  DELETE /api/blogs/:id

Comments:
  GET    /api/comments
  POST   /api/comments
  PUT    /api/comments/:id
  DELETE /api/comments/:id

Messages:
  GET    /api/messages
  POST   /api/messages
  DELETE /api/messages/:id

Tickets:
  GET    /api/tickets
  POST   /api/tickets
  PUT    /api/tickets/:id/reply
  DELETE /api/tickets/:id

Auth:
  POST   /api/auth/login
  POST   /api/auth/register
  POST   /api/auth/logout
  GET    /api/auth/me

Users:
  GET    /api/users
  POST   /api/users
  PUT    /api/users/:id
  DELETE /api/users/:id
```

### 14.2 Fetch Service Pattern

Create `src/services/api.ts`:

```ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('token')
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers })
  if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
  return response.json()
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),
}
```

### 14.3 Error Handling Pattern

```tsx
async function loadProducts() {
  try {
    setLoading(true)
    const data = await api.get<Product[]>('/products')
    setProducts(data)
  } catch (err) {
    Swal.fire({ text: 'Failed to load products', icon: 'error' })
  } finally {
    setLoading(false)
  }
}
```

### 14.4 Caching Strategy Recommendation

Integrate **React Query (TanStack Query)** for server state management:
```bash
npm install @tanstack/react-query
```

```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ['products'],
  queryFn: () => api.get<Product[]>('/products'),
})
```

---

## 15. Contributing Guidelines

### 15.1 Code Style

ESLint enforces:
- `@typescript-eslint/no-explicit-any` → error
- `@typescript-eslint/no-unused-vars` → warn (with `argsIgnorePattern: '^_'`)
- React refresh rules
- React hooks rules

Run linting:
```bash
npm run lint
```

### 15.2 Git Workflow

```
Branch naming: feature/description, fix/description, chore/description
Commit format: [type]: brief description
  - feat: add product search functionality
  - fix: resolve dark mode toggle flash
  - refactor: extract modal as shared component
```

### 15.3 Component Creation Checklist

1. Create `.tsx` file in appropriate directory under `src/Components/`
2. Define TypeScript interface for props
3. Use `useTranslation()` for all user-facing text
4. Add `dark:` variants for all color/background classes
5. Test with RTL layout (check `left`/`right` positioning)
6. Add responsive classes (xs, sm, md, ipad, lg breakpoints)
7. Export as default

### 15.4 Pull Request Template

```markdown
## Description
Brief description of changes

## Type
- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation

## Testing
- [ ] Tested locally
- [ ] No new lint errors

## Screenshots
(if applicable)
```

### 15.5 Issue Templates

**Bug Report**:
```markdown
**Describe the bug**
**To Reproduce**
**Expected behavior**
**Screenshots**
**Environment (browser, OS)**
```

**Feature Request**:
```markdown
**Problem statement**
**Proposed solution**
**Alternatives considered**
```

---

## 16. Known Issues & Limitations

### 16.1 Authentication

No actual authentication backend exists. Login and Register forms submit without validation or API calls. Admin and User panels are publicly accessible without auth guards.

### 16.2 Data Persistence

All CRUD operations in Admin panel are mock-only. Changes are not persisted across page refreshes. State resets on reload.

### 16.3 Image Upload

CKEditor's image upload is not configured. Images in blog/product descriptions cannot be uploaded — only paths can be entered as text.

### 16.4 Search Functionality

No server-side search or filter implementation. Shop page has sort options but no search bar or price range filter.

### 16.5 Browser Support

The app uses modern CSS features (backdrop-filter, CSS grid, Tailwind JIT). Compatibility with older browsers (IE11, older Safari) is not guaranteed.

### 16.6 Accessibility

- Limited ARIA labels on interactive elements
- No keyboard navigation support for carousels
- Missing focus management in modals
- No screen reader announcements for dynamic content changes

---

## 17. Future Roadmap Suggestions

### 17.1 Backend Integration

Priority order for API endpoints:
1. Authentication (login/register/logout)
2. Products (CRUD)
3. Categories
4. Orders
5. Comments
6. Tickets
7. Messages

### 17.2 Payment Gateway

Integrate Stripe or PayPal for order payment:
- Use Stripe Elements for secure card input
- Webhook handling for payment confirmations
- Order status updates based on payment events

### 17.3 Search Functionality

```tsx
// Debounced search with URL query params
const [search, setSearch] = useState('')
const debouncedSearch = useDebounce(search, 300)

useEffect(() => {
  api.get(`/products?search=${debouncedSearch}`)
}, [debouncedSearch])
```

### 17.4 Wishlist Feature

Add a wishlist/favorites system:
- Toggle heart icon on ProductBox
- Store wishlist in backend (or localStorage as fallback)
- Wishlist page under User Panel

### 17.5 PWA Support

```bash
npm install vite-plugin-pwa
```

Add service worker for offline caching of static assets and API responses.

### 17.6 SEO Improvements

- Dynamic meta tags per page (Open Graph, Twitter Cards)
- Generate `sitemap.xml` at build time
- Add structured data (JSON-LD) for products, blog posts, organization

### 17.7 Analytics Dashboard

Enhance admin charts with:
- Date range picker
- Export to CSV/PDF
- Product performance metrics
- User acquisition trends

---

## 18. Code Examples Appendix

### 18.1 Adding a New Translation Key

**1. Add to `src/types/locale.ts`:**
```ts
interface Locale {
  // ... existing keys
  checkout: {
    promoCode: string
    applyPromo: string
    discountAmount: string
  }
}
```

**2. Add to `src/locales/en.json`:**
```json
{
  "checkout": {
    "promoCode": "Promo Code",
    "applyPromo": "Apply",
    "discountAmount": "Discount Amount"
  }
}
```

**3. Add to `src/locales/ja.json`:**
```json
{
  "checkout": {
    "promoCode": "プロモーションコード",
    "applyPromo": "適用",
    "discountAmount": "割引額"
  }
}
```

**4. Use in component:**
```tsx
const { t } = useTranslation()
return (
  <div>
    <input placeholder={t.checkout.promoCode} />
    <button>{t.checkout.applyPromo}</button>
  </div>
)
```

### 18.2 Creating a New Admin Page (Coupons Management)

```tsx
// src/Pages/AdminPanel/Coupons/Coupons.tsx
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import DataTable from '@/Components/DataTable/DataTable'
import Modal from '@/Components/Modal/Modal'
import Swal from 'sweetalert2'

interface Coupon {
  id: number
  code: string
  discount: number
  expiresAt: string
  active: boolean
}

export default function Coupons() {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [coupons, setCoupons] = useState<Coupon[]>([])

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-morabba-medium">Coupons</h2>
        <button
          className="btn-orange px-4 py-2 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Add Coupon
        </button>
      </div>

      <DataTable
        headerItemCount={4}
        headerItemTitle={["Code", "Discount", "Expires", "Status"]}
        sectionsTableWidth={["w-1/4", "w-1/4", "w-1/4", "w-1/4"]}
      >
        {coupons.map(coupon => (
          <tr key={coupon.id}>
            <td>{coupon.code}</td>
            <td>{coupon.discount}%</td>
            <td>{coupon.expiresAt}</td>
            <td>{coupon.active ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </DataTable>

      <Modal
        showModalState={showModal}
        setShowModalState={setShowModal}
        title="New Coupon"
      >
        <form className="space-y-3">
          <input placeholder="Code" className="w-full p-2 border rounded" />
          <input type="number" placeholder="Discount %" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <button className="btn-orange w-full p-2 rounded">Save</button>
        </form>
      </Modal>
    </div>
  )
}
```

**Add route to `src/routes.tsx`:**
```tsx
import AdminPanelCoupons from "./Pages/AdminPanel/Coupons/Coupons"

// In admin panel children:
{ path: 'coupons', element: <AdminPanelCoupons /> }
```

### 18.3 Custom Hook: `useLocalStorage`

```tsx
// src/hooks/useLocalStorage.ts
import { useState, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }, [key, storedValue])

  return [storedValue, setValue] as const
}
```

### 18.4 Protected Route Implementation

```tsx
// src/Components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'user'
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole === 'admin' && role !== 'admin') {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
```

### 18.5 API Service Example: `productsApi.ts`

```tsx
// src/services/productsApi.ts
import { api } from './api'

export interface Product {
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

export const productsApi = {
  getAll: () => api.get<Product[]>('/products'),
  getById: (id: number) => api.get<Product>(`/products/${id}`),
  create: (data: Omit<Product, 'id'>) => api.post<Product>('/products', data),
  update: (id: number, data: Partial<Product>) => api.put<Product>(`/products/${id}`, data),
  delete: (id: number) => api.delete<void>(`/products/${id}`),
}
```

---

*End of Documentation — Golden Coffee Shop v0.0.0*
