---
title: Architecture
order: 2
---

# Project Architecture Deep Dive

## Build Tool: Vite

Vite 5 was chosen over Create React App (CRA) and Next.js for these reasons:

| Factor | Vite | CRA | Next.js |
|--------|------|-----|---------|
| Dev server startup | Instant (ES modules) | Slow (webpack bundle) | Moderate |
| HMR speed | Instant for any file size | Degrades with scale | Fast (RSC) |
| Configuration | Minimal (1 plugin) | Abstracted (no eject) | Extensive |
| SSR needed? | No (SPA) | No (SPA) | Yes (overkill) |
| TypeScript 6 support | Native | Via plugins | Via plugins |
| Build tool | Rollup (fast) | webpack (slower) | Turbopack |

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

## Path Aliases

Defined in both `vite.config.ts` and `tsconfig.json` for seamless IDE and build support:

```json
{
  "compilerOptions": {
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

Usage examples:

```tsx
import { useTranslation } from '@/hooks/useTranslation'
import Header from '@/Components/Header/Header'
import type { Locale } from '@/types/locale'
```

## TypeScript Configuration

Key settings from `tsconfig.json`:

| Setting | Value | Purpose |
|---------|-------|---------|
| `target` | ES2022 | Modern JS output |
| `strict` | true | Full strict mode |
| `noImplicitAny` | true | Explicit types required |
| `strictNullChecks` | true | Null/undefined safety |
| `noUncheckedIndexedAccess` | true | Safe object access |
| `noImplicitReturns` | true | All paths must return |
| `moduleResolution` | bundler | Vite native resolution |
| `jsx` | react-jsx | Automatic JSX runtime |

ESLint enforces `@typescript-eslint/no-explicit-any: 'error'` to prevent loose typing throughout the codebase.

## Routing Architecture

Routes are defined centrally in `src/routes.tsx` using React Router v6's `useRoutes` hook:

```
Route Tree:
/
├── /                        → Home
├── /shop                    → Shop (product listing)
├── /category/:shortName     → Shop (filtered by category)
├── /product/:shortName      → ProductInfo
├── /blogs                   → Blogs
├── /blog/:shortName         → BlogInfo
├── /about-us                → AboutUs
├── /contact-us              → ContactUs
├── /order                   → OrderConfirm
├── /login                   → Login
├── /register                → Register
├── /my-account/*            → UserPanel (layout + Outlet)
│   ├── /my-account          → Counter (dashboard)
│   ├── /my-account/orders   → Orders
│   ├── /my-account/tickets  → Tickets
│   └── /my-account/details  → AccountDetails
└── /admin-panel/*           → AdminPanel (layout + Outlet)
    ├── /admin-panel         → MainPage (dashboard)
    ├── /admin-panel/products      → AdminPanelProducts
    ├── /admin-panel/blogs         → AdminPanelBlogs
    ├── /admin-panel/users         → AdminPanelUsers
    ├── /admin-panel/comments      → AdminPanelComments
    ├── /admin-panel/messages      → AdminPanelMessages
    ├── /admin-panel/tickets       → AdminPanelTickets
    └── /admin-panel/categories    → AdminPanelCategories
```

### Layout + Outlet Pattern

Both Admin and User panels use a shared layout component:

```tsx
// src/Pages/AdminPanel/Index.tsx (concept)
function AdminPanel() {
  return (
    <div className="flex">
      <AdminPanelSidebar />
      <main>
        <Outlet />  {/* Child route renders here */}
      </main>
    </div>
  )
}
```

## State Management

The project uses **React Context API** — no Redux, Zustand, or other external state libraries:

| Layer | Mechanism | Scope |
|-------|-----------|-------|
| Global (language) | `LanguageContext` (Provider in App.tsx) | Entire app |
| Component UI | `useState` / `useReducer` | Single component |
| URL state | React Router params (`:shortName`) | Shop category filter |
| Persistence | `localStorage` | Theme, language |

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

## Bilingual / i18n System

The i18n system supports English and Japanese:

- **Locale files:** `src/locales/en.json` (~570 lines) and `src/locales/ja.json` (~570 lines)
- **Type safety:** Full TypeScript interface in `src/types/locale.ts` with ~70 section interfaces
- **Key structure:** Dot notation organized by feature (`home.heroTitle1`, `productInfo.addToCart`)
- **Default language:** Japanese (`ja`) — falls back from localStorage
- **Direction:** RTL-first (`dir="rtl"` hardcoded in `index.html`)

```tsx
import { useTranslation } from '@/hooks/useTranslation'

function Component() {
  const { t, language, toggleLanguage } = useTranslation()
  return <h1>{t.home.heroTitle1}</h1>
}
```

## RTL & Font Strategy

- **`dir="rtl"`** is hardcoded on `<html>` in `index.html`
- All Tailwind RTL variants use `rtl:` prefix (e.g., `rtl:rotate-180` for chevrons)
- Custom fonts: **Dana** (body, 3 weights) and **Morabba** (headings, 3 weights) support Persian/Arabic numerals via `FaNum` variants
- Fonts use `@font-face` with `font-display: swap`

```css
/* src/index.css */
@font-face {
  font-family: 'Dana';
  src: url('./fonts/Dana/DanaFaNum-Regular.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}
```

## dark Mode

Uses Tailwind's `class` strategy:

```js
// tailwind.config.js
darkMode: "class"
```

An inline script in `index.html` prevents flash of light theme:

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

See the [Dark Mode documentation](./08-dark-mode.md) for details.

## Child Variant Plugin

`tailwind.config.js` uses a custom plugin for `child:` variants, enabling styling of all children within a parent:

```js
// Conceptual — applies styles to all direct children
<div className="child:mb-4">
  <p>Item 1</p>  {/* gets mb-4 */}
  <p>Item 2</p>  {/* gets mb-4 */}
</div>
```
