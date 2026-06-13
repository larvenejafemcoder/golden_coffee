---
title: Known Issues
order: 16
---

# Known Issues & Limitations

## Authentication

**Issue:** No actual authentication backend exists.

- Login and Register forms submit without validation or API calls
- Admin and User panels are publicly accessible without auth guards
- No JWT token management
- No session persistence

**Impact:** Anyone can access `/admin-panel` and `/my-account` without logging in.

## Data Persistence

**Issue:** All CRUD operations are mock-only.

- Changes made in admin panels (create/edit/delete products, categories, blogs, etc.) are lost on page refresh
- No database or API backend connected
- Cart state resets on navigation

**Impact:** The app is read-only for all dynamic data. No user data persists.

## Image Upload

**Issue:** CKEditor image upload is not configured.

- Images in blog/product descriptions cannot be uploaded via the editor
- Only image paths/URLs can be entered as text fields
- No file upload endpoint exists

**Impact:** Rich text content cannot include uploaded images — only external URLs.

## Search Functionality

**Issue:** No search or advanced filtering.

- Shop page has sort options but no search bar
- No price range filter
- No text search across products or blogs
- No pagination for large data sets

**Impact:** Users cannot search or narrow down product listings effectively.

## Browser Support

**Issue:** Limited browser compatibility.

- Uses modern CSS features: `backdrop-filter`, CSS Grid, Tailwind JIT
- `backdrop-filter` has limited support in older Safari versions
- IE11 is not supported
- CSS `:has()` selector usage (via Tailwind) may not work in older browsers

**Impact:** The app may not render correctly in older or less common browsers.

## Accessibility

**Issue:** Limited accessibility implementation.

- Limited ARIA labels on interactive elements
- No keyboard navigation for Swiper carousels
- Missing focus management in modals (focus trap)
- No screen reader announcements for dynamic content
- No skip-to-content link
- Color contrast may not meet WCAG AA standards in all themes

**Impact:** The app may be difficult or impossible to use with assistive technologies.

## SEO

**Issue:** Search engine optimization limitations.

- Dynamic meta tags only implemented via `react-helmet` for page titles
- No Open Graph or Twitter Card meta tags
- No structured data (JSON-LD) for products or blog posts
- No `sitemap.xml`
- Client-side rendering means search engines may not index content effectively

**Impact:** Poor discoverability in search engines.

## Error Handling

**Issue:** Minimal error boundaries and fallback UI.

- No React Error Boundaries wrapping sections
- Network errors are not handled (no API calls currently)
- Form validation is minimal or absent
- No loading skeletons (only a full-page spinner)

**Impact:** User experience during errors or loading states is basic.

## Performance

**Issue:** Some performance optimization opportunities.

- CKEditor build is bundled for all users (not lazy-loaded for admin only)
- No image optimization pipeline (manual WebP conversion)
- No bundle chunk analysis has been run
- `React.memo` not applied to frequently re-rendered components

**Impact:** Larger bundle size than necessary for public-facing pages.

## RTL/LTR Switching

**Issue:** Incomplete RTL/LTR support.

- `dir="rtl"` is hardcoded in `index.html`
- Adding LTR languages (English, Spanish) requires code changes
- Some components may have hardcoded `left`/`right` positioning

**Impact:** Adding new LTR languages requires additional development work beyond translation files.
