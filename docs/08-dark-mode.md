---
title: Dark Mode
order: 8
---

# Dark Mode Implementation Guide

## Strategy

The project uses Tailwind's `class`-based dark mode strategy. The `dark` class is toggled on the `<html>` element.

```js
// tailwind.config.js
darkMode: "class"
```

## How It Works

1. `ToggleTheme.ts` adds/removes the `dark` class on `document.documentElement`
2. Tailwind's `dark:` variants respond to the class
3. Preference is persisted in `localStorage` with key `'theme'`

## ToggleTheme Utility

**File:** `src/Features/ToggleTheme/ToggleTheme.ts`

```typescript
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

## Flash Prevention

An inline script in `index.html` runs before React mounts to prevent a flash of the wrong theme:

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

> **Note:** Without this script, the user would see a white flash before React hydrates and applies the correct theme.

## Writing Dark-Aware Components

Use Tailwind's `dark:` prefix for all color and background classes:

```tsx
<div className="bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white">
  <h2 className="dark:text-orange-300">Title</h2>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
  <button className="bg-orange-400 dark:bg-orange-500 text-white">
    Action
  </button>
</div>
```

## Common Dark Mode Patterns

| Element | Light | Dark |
|---------|-------|------|
| Page background | `bg-white` | `bg-zinc-800` |
| Card background | `bg-white` | `bg-zinc-700` |
| Text body | `text-zinc-700` | `text-white` |
| Text muted | `text-gray-600` | `text-gray-300` |
| Border | `border` | `border-white/10` |
| Input | `bg-white border` | `bg-zinc-600 border-white/10` |
| Header | `bg-black/50` | same (already dark) |
| Sidebar | `bg-white` | `bg-zinc-700` |
| Modal overlay | `bg-black/50` | same |

## Testing Dark Mode

**Method 1:** Click the theme toggle (moon/sun icon) in the header

**Method 2:** Use browser DevTools:
1. Open DevTools (F12)
2. Select `<html>` element
3. Toggle `dark` class in the element inspector

**What to verify:**
- All text is readable (adequate contrast ratios)
- No white backgrounds remain in dark mode
- Images with light backgrounds may need CSS filters
- Form inputs, modals, and dropdowns are properly styled
- Swiper carousels and CKEditor adapt correctly

## Dark Mode in Third-Party Components

| Library | Dark Mode Support |
|---------|------------------|
| Swiper | Automatic (uses CSS variables if configured) |
| Recharts | Needs explicit `dark` theme colors passed as props |
| CKEditor | Needs custom CSS overrides |
| SweetAlert2 | Inherits browser/OS theme by default |
