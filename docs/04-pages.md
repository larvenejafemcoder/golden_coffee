---
title: Pages
order: 4
---

# Page-by-Page Functional Documentation

## Home (`/`)

**File:** `src/Pages/Home/Home.tsx`

**Purpose:** Landing page showcasing hero section, products, categories, best-selling items, blogs, and services.

**Components used:** Header, LastProducts, CategoryBaner, Categories, BestSelling, LastBlogs, Services, Footer

**User interactions:**
- Scroll-to-products button (down arrow in hero)
- Navigation through header links
- Carousel navigation for best-selling

**Responsive behavior:**
- Mobile: `bg-home-mobile` background, no decorative circles
- Desktop: `bg-home-desktop` with animated concentric circles

**Translation keys:** `home.heroTitle1`, `home.heroTitle2`, `home.heroSubtitle`, `home.shopNow`, `home.bestSellingTitle`, `home.lastProductsTitle`, `home.lastBlogsTitle`

## Shop (`/shop`, `/category/:shortName`)

**File:** `src/Pages/Shop/Shop.tsx`

**Purpose:** Product listing page with header banner, about section, and sortable product grid.

**Components used:** TitlePage, Header, SectionHeader, ProductBox, Footer

**User interactions:**
- Sort dropdown (newest, cheapest, most expensive, biggest discount, most popular)
- Product box hover effects
- Category filter via URL param `:shortName`

**Responsive behavior:** 2-column grid (mobile) → 3 columns (sm) → 4 columns (lg)

**Translation keys:** `shop.pageTitle`, `shop.aboutProductsTitle`, `shop.aboutProductsText`, `shop.newest`, `shop.cheapest`, `shop.mostExpensive`

## ProductInfo (`/product/:shortName`)

**File:** `src/Pages/ProductInfo/ProductInfo.tsx`

**Purpose:** Single product detail page with image gallery, info, reviews, and related products.

**Components used:** TitlePage, Header, Breadcrumb, Swiper, Modal, SectionHeader, ProductBox, Footer

**User interactions:**
- Image gallery with zoom (Swiper zoom module)
- Thumbnail navigation
- Add to cart (SweetAlert2 confirmation)
- Star rating selection
- Write a review (textarea + submit)
- Reply to comments (modal)
- Related products carousel

**Sections:** Product images with zoom, product info (title, stock status, category, description, rating), price + add-to-cart, reviews section (rating select, comment textarea), comments section with reply modal, related products Swiper

**Translation keys:** `productInfo.pageTitle`, `productInfo.addToCart`, `productInfo.category`, `productInfo.aboutProduct`, `productInfo.rating`, `productInfo.inStock`, `productInfo.relatedProducts`, `productInfo.comments`

## Blogs (`/blogs`)

**File:** `src/Pages/Blogs/Blogs.tsx`

**Purpose:** Blog listing page showing a grid of blog post cards.

**Components used:** TitlePage, Header, Breadcrumb, Footer

**Features:**
- 9 blog cards displayed in a 3-column grid
- Each card: image, date, title, "read more" link

**Translation keys:** `blogs.pageTitle`

## BlogInfo (`/blog/:shortName`)

**File:** `src/Pages/BlogInfo/BlogInfo.tsx`, `src/Pages/BlogInfo/BlogInfo.css`

**Purpose:** Single blog post detail page with breadcrumb navigation and HTML content rendering.

**Components used:** TitlePage, Header, Breadcrumb, Footer

**Features:**
- Breadcrumb: Home > Blogs > Post Title
- Blog post content area with custom CSS styling from `BlogInfo.css`

**Translation keys:** `blogInfo.pageTitle`

## About Us (`/about-us`)

**File:** `src/Pages/AboutUs/AboutUs.tsx`

**Purpose:** About page with company story, development philosophy, and contact details.

**Components used:** TitlePage, Header, Footer

**Content:** Introduction, philosophy statement, contact details, engineering journey section with current focus areas

**Translation keys:** `aboutUs.pageTitle`, `aboutUs.introTitle`, `aboutUs.introContent`, `aboutUs.contactTitle`

## Contact Us (`/contact-us`)

**File:** `src/Pages/ContactUs/ContactUs.tsx`

**Purpose:** Contact form page with mission statement and inquiry form.

**Components used:** TitlePage, Header, Footer, SweetAlert2

**User interactions:**
- Fill out contact form (name, phone, email, message)
- Submit triggers SweetAlert2 success notification (no backend submission)
- Form uses `preventDefault`

**Translation keys:** `contactUs.pageTitle`, `contactUs.missionTitle`, `contactUs.formTitle`, `contactUs.nameLabel`, `contactUs.emailLabel`, `contactUs.messageLabel`, `contactUs.submitButton`

## Login (`/login`)

**File:** `src/Pages/Login/Login.tsx`

**Purpose:** User login page with email/password form.

**Features:**
- Email and password input fields
- Password visibility toggle
- SweetAlert2 success notification on submit (mock-only)

**Translation keys:** `auth.loginTitle`, `auth.emailLabel`, `auth.passwordLabel`, `auth.loginButton`, `auth.noAccount`

> **Warning:** No actual authentication backend. Login is mock-only.

## Register (`/register`)

**File:** `src/Pages/Register/Register.tsx`

**Purpose:** User registration page with full form.

**Features:**
- Name, email, password, confirm password fields
- SweetAlert2 success notification on submit (mock-only)

**Translation keys:** `auth.registerTitle`, `auth.nameLabel`, `auth.usernameLabel`, `auth.emailLabel`, `auth.phoneLabel`, `auth.passwordLabel`, `auth.registerButton`, `auth.hasAccount`

> **Warning:** No actual registration backend. Data does not persist.

## OrderConfirm (`/order`)

**File:** `src/Pages/OrderConfirm/OrderConfirm.tsx`

**Purpose:** Order review and confirmation page with cart review and address form.

**Components used:** Standard layout with Header/Footer

**Features:**
- Cart items review
- User address form (name, address fields)
- Payment method selector
- Final order confirmation

**Translation keys:** `orderConfirm.pageTitle`, `orderConfirm.confirmOrder`, `orderConfirm.nameLabel`, `orderConfirm.addressLabel`, `orderConfirm.total`, `orderConfirm.cart`

## Page Component Matrix

| Page | Route | Components Used | Translation Section |
|------|-------|----------------|-------------------|
| Home | `/` | Header, LastProducts, CategoryBaner, Categories, BestSelling, LastBlogs, Services, Footer | `home` |
| Shop | `/shop`, `/category/:shortName` | Header, SectionHeader, ProductBox, Footer | `shop`, `breadcrumb` |
| ProductInfo | `/product/:shortName` | Header, Breadcrumb, Swiper, Modal, SectionHeader, ProductBox, Footer | `productInfo` |
| Blogs | `/blogs` | Header, Breadcrumb, Footer | `blogs` |
| BlogInfo | `/blog/:shortName` | Header, Breadcrumb, Footer | `blogInfo` |
| AboutUs | `/about-us` | Header, Footer | `aboutUs` |
| ContactUs | `/contact-us` | Header, Footer, Swal | `contactUs` |
| Login | `/login` | Header, Footer | `auth` |
| Register | `/register` | Header, Footer | `auth` |
| OrderConfirm | `/order` | Header, Footer | `orderConfirm` |
