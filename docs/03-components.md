---
title: Components
order: 3
---

# Component Library Documentation

All 21 reusable components live in `src/Components/`. Each is documented below with its purpose, props interface, usage example, and dependencies.

## Header

**File:** `src/Components/Header/Header.tsx`

**Purpose:** Fixed top navigation bar with desktop and mobile variants. Includes logo, nav links, cart sidebar, theme toggle, and login/register links.

**Props:** None (self-contained)

**Dependencies:** `useTranslation`, `ToggleTheme`

**Features:**
- Desktop (`md:` breakpoint): Fixed top bar with `backdrop-blur`, hover sub-menus, cart dropdown
- Mobile (`< md`): Hamburger menu with slide-in navigation, separate cart slide-in from right
- Cart: Slide-out panel with product list, quantity controls, price calculation, order button
- Theme toggle: Moon/sun icons calling `toggleTheme()`
- Sub-menus: Shop nav item shows category links on hover

## Footer

**File:** `src/Components/Footer/Footer.tsx`

**Purpose:** Site footer with logo, description, quick access links, contact info, social media, copyright.

**Props:** None

**Dependencies:** `useTranslation`

**Features:**
- Scroll-to-top button (circular arrow)
- SVG logo (icon + wordmark in orange)
- Quick access links grid (privacy, returns, terms, order, FAQ, careers, warranty, contact)
- Contact info: address, email, phone numbers
- Social media: Instagram, Telegram icons
- Copyright notice

## Sidebar (User Panel)

**File:** `src/Components/Sidebar/Sidebar.tsx`

**Purpose:** Navigation sidebar for the User Panel with active-state highlighting and SweetAlert2 logout confirm.

```tsx
interface SidebarProps {
  setShow?: (show: boolean) => void
}
```

**Menu items:** Dashboard, Orders, Tickets, Account Details, Admin Panel link, Logout

**Dependencies:** `react-router-dom` (NavLink), `sweetalert2`, `useTranslation`

**Active state:** Uses NavLink's `isActive` prop for `bg-orange-400 text-white` styling.

## AdminPanelSidebar

**File:** `src/Components/AdminPanelSidebar/AdminPanelSidebar.tsx`

**Purpose:** Navigation sidebar for the Admin Panel.

```tsx
interface AdminPanelSidebarProps {
  setShow?: (show: boolean) => void
}
```

**Menu items:** Main Page, Products, Blogs, Users, Comments, Messages, Tickets, Categories, Logout

**Dependencies:** `react-router-dom` (NavLink), `sweetalert2`, `useTranslation`

## AdminPanelTableTitle

**File:** `src/Components/AdminPanelTableTitle/AdminPanelTableTitle.tsx`

**Purpose:** Section header for admin CRUD pages, toggling between list view and add/edit mode.

**Dependencies:** `useTranslation`

## Modal

**File:** `src/Components/Modal/Modal.tsx`

**Purpose:** Generic centered modal with overlay click-to-close and body scroll lock.

```tsx
interface ModalProps {
  showModalState: boolean
  setShowModalState: (state: boolean) => void
  title: string
  children: ReactNode
  moldaWidth?: string
}
```

```tsx
<Modal
  showModalState={showReplyComment}
  setShowModalState={setShowReplyComment}
  title={t.productInfo.reply}
>
  <textarea />
  <button>Send</button>
</Modal>
```

**Behavior:** Adds `overflow-y-hidden` to `document.body` when open. Overlay click closes.

## DataTable

**File:** `src/Components/DataTable/DataTable.tsx`

**Purpose:** Generic CSS grid-based table for admin panels displaying dynamic headers and rows.

```tsx
interface DataTableProps {
  headerItemCount: number
  headerItemTitle: string[]
  sectionsTableWidth: string[]
  children: ReactNode
}
```

```tsx
<DataTable
  headerItemCount={4}
  headerItemTitle={["Name", "Email", "Role", "Actions"]}
  sectionsTableWidth={["w-1/4", "w-1/4", "w-1/4", "w-1/4"]}
>
  <tr>...</tr>
</DataTable>
```

> **Note:** Renders as CSS grid, not HTML `<table>`. Automatically includes an ID column as the first header.

## ProductBox

**File:** `src/Components/ProductBox/ProductBox.tsx`

**Purpose:** Product card for grid displays.

**Props:** None (uses hardcoded mock data)

**Features:**
- Discount badge (percentage circle, top-right)
- Category tag (sky-blue background)
- Product title (2-line clamp)
- Price with original (strikethrough) and discounted + "Toman" currency
- Star rating (5 stars)
- Add-to-cart button

**Styling:** White card with `shadow-normal`, `rounded-2xl`, dark mode variants.

## BestSelling

**File:** `src/Components/BestSelling/BestSelling.tsx`

**Purpose:** Swiper carousel section displaying best-selling products with auto-play and custom navigation.

**Props:** None

**Dependencies:** Swiper (Autoplay, Navigation), ProductBox, SectionHeader, `useTranslation`

**Features:**
- Responsive slides: 2 (mobile) → 3 (tablet) → 4 (desktop)
- Auto-play at 2-second intervals
- Custom prev/next buttons outside Swiper

## CategoryBox

**File:** `src/Components/CategoryBox/CategoryBox.tsx`

**Purpose:** Single category card with image and link.

```tsx
interface CategoryBoxProps {
  title: string
  imageSrc: string
  link: string
}
```

```tsx
<CategoryBox
  title="Coffee Beans"
  imageSrc="category1.png"
  link="/category/coffee"
/>
```

## Categories

**File:** `src/Components/Categories/Categories.tsx`

**Purpose:** Renders 5 hardcoded `CategoryBox` components in a responsive grid.

**Props:** None

**Dependencies:** CategoryBox, `useTranslation`

## CategoryBaner

**File:** `src/Components/CategoryBaner/CategoryBaner.tsx`

**Purpose:** Two promotional banner links displayed side by side.

**Props:** None

## SectionHeader

**File:** `src/Components/SectionHeader/SectionHeader.tsx`

**Purpose:** Reusable section heading with title, optional subtitle, and children slot.

```tsx
interface SectionHeaderProps {
  title: string
  subTitle?: string
  hasSeparator?: boolean
  children?: ReactNode
}
```

## ServiceBox

**File:** `src/Components/ServiceBox/ServiceBox.tsx`

**Purpose:** Service feature card with icon, title, and description.

```tsx
interface ServiceBoxProps {
  title: string
  desc: string
  children: ReactNode
}
```

## Services

**File:** `src/Components/Services/Services.tsx`

**Purpose:** 4-column grid of `ServiceBox` components (coffee, support, delivery, fresh products).

**Props:** None

**Dependencies:** ServiceBox, `useTranslation`

## BlogBox

**File:** `src/Components/BlogBox/BlogBox.tsx`

**Purpose:** Blog post card with image, date, title, and link.

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

## LastBlogs

**File:** `src/Components/LastBlogs/LastBlogs.tsx`

**Purpose:** Shows 4 blog cards plus a "View All" link.

**Props:** None

**Dependencies:** BlogBox, SectionHeader, `useTranslation`

## LastProducts

**File:** `src/Components/LastProducts/LastProducts.tsx`

**Purpose:** Shows 7 product cards in a grid plus a "View All" link.

**Props:** None

**Dependencies:** ProductBox, SectionHeader, `useTranslation`

## Breadcrumb

**File:** `src/Components/Breadcrumb/Breadcrumb.tsx`

**Purpose:** Navigation breadcrumb with up to 3 levels.

```tsx
interface BreadcrumbProps {
  firstTitle: string
  lastTitle?: string
  firsTitletLink?: string
  isBg?: boolean
  centered?: boolean
}
```

**Features:** RTL-aware chevron arrows (`rtl:rotate-180`), optional background, optional centering.

## TitlePage

**File:** `src/Components/TitlePage/TitlePage.tsx`

**Purpose:** Sets HTML `<title>` using react-helmet.

```tsx
interface TitlePageProps {
  title: string
}
```

Renders `<title>{title} - {t.common.siteName}</title>` inside `<Helmet>`.

## CounterBox

**File:** `src/Components/CounterBox/CounterBox.tsx`

**Purpose:** Stats card used in admin/user dashboards.

```tsx
interface CounterBoxProps {
  // icon, title, count, subtitle, bg color
}
```

## Component Dependency Graph

```
TitlePage (react-helmet)
├── Used by: almost all pages

Header
├── Dependencies: useTranslation, ToggleTheme, Swal
├── Used by: all public pages

Footer
├── Dependencies: useTranslation
├── Used by: all public pages

Sidebar / AdminPanelSidebar
├── Dependencies: NavLink, Swal, useTranslation
├── Used by: UserPanel / AdminPanel layouts

DataTable
├── Dependencies: none
├── Used by: all admin CRUD pages, admin dashboard

Modal
├── Dependencies: none
├── Used by: ProductInfo, admin Messages/Comments/Tickets

ProductBox
├── Dependencies: useTranslation
├── Used by: Home (LastProducts, BestSelling), Shop

Swiper (via BestSelling, ProductInfo)
├── Dependencies: swiper/react, swiper/modules
├── Used by: Home, ProductInfo
```
