---
title: State Management
order: 9
---

# State Management Patterns

## Overview

The project uses **React Context API** for global state and `useState` for local component state. No external state management libraries (Redux, Zustand) are used.

## State Layers

| Layer | Mechanism | Examples |
|-------|-----------|---------|
| Global | `LanguageContext` (Provider in App.tsx) | Language preference, translation function |
| Component | `useState`, `useReducer` | UI toggles, form inputs, modal states |
| URL | React Router params | Category filter via `:shortName` |
| Persistence | `localStorage` | Theme, language |

## LanguageContext (Global State)

**File:** `src/context/LanguageContext.tsx`

```tsx
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

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ja' : 'en')
  }, [language, setLanguage])

  const t = LOCALE_MAP[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

**Wrapping in App.tsx:**

```tsx
export default function App() {
  const router = useRoutes(routes)
  return (
    <LanguageProvider>
      {router}
    </LanguageProvider>
  )
}
```

## useTranslation Hook

**File:** `src/hooks/useTranslation.ts`

```typescript
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
```

## Local Component State Examples

**UI toggles (Header):**
```tsx
const [showNavbar, setShowNavbar] = useState(false)
const [showCart, setShowCart] = useState(false)
const [showSubMenu, setShowSubMenu] = useState<number | null>(null)
```

**Modal states (ProductInfo):**
```tsx
const [showReplyComment, setShowReplyComment] = useState(false)
```

**Sidebar visibility (Admin/User panels):**
```tsx
const [showSidebar, setShowSidebar] = useState(false)
```

## Form State

Forms use basic `useState` or uncontrolled inputs with `useRef`:

```tsx
// ContactUs pattern
<form onSubmit={(event) => event.preventDefault()}>
  <input type="text" placeholder={t.contactUs.namePlaceholder} />
  <button onClick={showAlert}>Submit</button>
</form>
```

## Persistence Strategy

| Data | Storage | Key | Initialization |
|------|---------|-----|---------------|
| Theme preference | `localStorage` | `theme` | Inline script in `index.html` (pre-flash) |
| Language preference | `localStorage` | `language` | `useState` initializer in LanguageContext |
| Auth token (future) | `localStorage` | `token` | Would be set after login API call |

## Future State Management Recommendations

For a production backend, consider:

1. **React Query (TanStack Query)** for server state (API data caching, loading/error states)
2. **Auth Context** for user session state (token, role, profile)
3. **Cart Context** for shopping cart state across pages
4. **URL search params** for shop filters (sort, price range, page)

```tsx
// Recommended: React Query integration
import { useQuery } from '@tanstack/react-query'

function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(r => r.json()),
  })
}
```
