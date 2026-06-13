---
title: Performance
order: 11
---

# Performance Optimization

## Current State

The app benefits from Vite's built-in optimizations but has minimal manual performance tuning.

## Code Splitting

Vite automatically code-splits by route using dynamic imports. For further optimization, use `React.lazy` for admin/user panel pages:

```tsx
// Recommended: lazy-load admin panel
const AdminPanel = React.lazy(() => import('./Pages/AdminPanel/Index'))
const UserPanel = React.lazy(() => import('./Pages/UserPanel/Index'))
```

Wrap with `<Suspense>`:

```tsx
<Route path="/admin-panel/*" element={
  <Suspense fallback={<div className="loader" />}>
    <AdminPanel />
  </Suspense>
} />
```

## Image Optimization

| Practice | Implementation |
|----------|---------------|
| Format | WebP for all product/category/blog images |
| Lazy loading | `loading="lazy"` attribute on all images |
| Responsive backgrounds | Separate `bg-home-mobile` / `bg-home-desktop` |
| SVG icons | Inline SVGs for logo, social, service icons |

**Recommendation:** Add image preload for hero images:

```html
<link rel="preload" href="/images/headerBgDesktop.webp" as="image">
```

## Font Loading

```css
@font-face {
  font-family: 'Dana';
  src: url('./fonts/Dana/DanaFaNum-Regular.woff2') format('woff2');
  font-display: swap;  /* Prevents invisible text during load */
}
```

**Recommendation:** Preload critical fonts:

```html
<link rel="preload" href="/fonts/Dana/DanaFaNum-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Morabba/Morabba-Medium.woff2" as="font" type="font/woff2" crossorigin>
```

## Memoization Opportunities

| Component | Current | Recommendation |
|-----------|---------|---------------|
| ProductBox | Re-renders on every grid update | Wrap with `React.memo` |
| BlogBox | Re-renders on every list update | Wrap with `React.memo` |
| CategoryBox | Re-renders on every render | Wrap with `React.memo` |
| LanguageContext callbacks | `useCallback` already used | Already optimized |

```tsx
const ProductBox = React.memo(function ProductBox() {
  // component
})
```

## Bundle Analysis

```bash
# Analyze bundle size
npx vite build
npx vite-bundle-analyzer
```

**Expected large dependencies:**
- `@ckeditor/ckeditor5-build-classic` (~1.5MB) — only used in admin pages
- `swiper` (~150KB) — used on Home and ProductInfo
- `recharts` (~200KB) — only used in admin dashboard

> **Tip:** Consider dynamic imports for CKEditor and Recharts since they're only needed in admin sections.

## Lighthouse Optimization Targets

| Metric | Target | Strategy |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | Preload hero image & fonts |
| Largest Contentful Paint | < 2.5s | Optimize hero image |
| Time to Interactive | < 3.5s | Code-split admin/user panels |
| Cumulative Layout Shift | < 0.1 | Set image dimensions explicitly |

## Vite Production Build

```bash
npm run build
```

Output is in `dist/` with:
- Code-split chunks per entry point
- Minified CSS (Tailwind's JIT removes unused styles)
- Hashed filenames for cache busting
- Gzip/Brotli compression-ready assets
