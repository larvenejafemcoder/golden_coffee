---
title: Getting Started
order: 1
---

# Getting Started Guide

## Prerequisites

| Software | Minimum Version | Purpose |
|----------|----------------|---------|
| Node.js | 18.x or higher | JavaScript runtime |
| npm | 9.x or higher | Package manager |
| Git | 2.x | Version control |

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd golden_coffee

# Install dependencies
npm install

# Start the development server
npm run dev
```

## First Run Verification

Expected output:

```
VITE v5.x.x  ready in XXX ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open http://localhost:5173/ in your browser. You should see:

- A hero section with coffee imagery
- A fixed header with navigation links
- The site logo "GoldenAge Coffee"
- Content loading immediately (no flash)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |

## Environment Configuration

The project expects an optional environment variable `VITE_API_URL`:

```env
# .env (optional — app works fully with mock data)
VITE_API_URL=https://api.example.com
```

```typescript
// src/types/global.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
```

> **Note:** The app works fully with mock data without setting any environment variables. All CRUD operations in the admin panel are frontend-only and reset on page refresh.

## Project File Map

```
golden_coffee/
├── .eslintrc.cjs          # ESLint: strict TS, no-explicit-any: error
├── index.html             # Entry HTML (RTL, dark-mode script, preload spinner)
├── vite.config.ts         # Vite: react plugin, @/ alias
├── tsconfig.json          # TypeScript: strict, ES2022, path aliases
├── tailwind.config.js     # Tailwind: custom colors, fonts, screens, dark mode
├── package.json           # Dependencies & scripts
└── src/
    ├── main.tsx           # ReactDOM.createRoot + BrowserRouter
    ├── App.tsx            # LanguageProvider + useRoutes(routes)
    ├── routes.tsx         # All 27 route definitions
    ├── index.css          # Tailwind directives, @font-face, custom utilities
    ├── context/           # LanguageContext
    ├── hooks/             # useTranslation
    ├── types/             # Locale interfaces, global.d.ts
    ├── locales/           # en.json, ja.json
    ├── fonts/             # Dana (3 weights), Morabba (3 weights)
    ├── style/             # Generated app.css
    ├── Features/          # ToggleTheme
    ├── Components/        # 21 reusable components
    └── Pages/             # 17 pages (public + admin + user panels)
```

## First Edits

**Change the site name:**
```json
// src/locales/en.json
{
  "common": {
    "siteName": "Your Coffee Shop"  // ← change this
  }
}
```

**Add a new route:**
```tsx
// src/routes.tsx
{ path: "/faq", element: <FAQ /> }
```

**Add a new translation key:**
```typescript
// src/types/locale.ts
interface Locale {
  // ...
  faq: {
    pageTitle: string
    question1: string
    answer1: string
  }
}
```

## Troubleshooting

### Port already in use

```
Error: listen EADDRINUSE :::5173
```

```bash
npx vite --port 3000
```

### Node version mismatch

```
Error [ERR_REQUIRE_ESM]: require() of ES Module
```

```bash
node --version   # Must be >= 18
```

### Dependency install fails

```bash
Remove-Item -Recurse -Force node_modules, package-lock.json
npm cache clean --force
npm install
```

### Tailwind styles not updating

```bash
npx tailwindcss -i ./src/index.css -o ./src/style/app.css --watch
```

> **Tip:** Vite's HMR usually handles Tailwind updates automatically. Run the manual command only if styles are stale.
