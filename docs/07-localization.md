---
title: Localization
order: 7
---

# Localization & Internationalization Guide

## Overview

The app supports English and Japanese with a straightforward pattern using React Context and static JSON files. The default language is Japanese (`ja`).

## Architecture

```
src/locales/en.json     → English translations (~570 lines)
src/locales/ja.json     → Japanese translations (~570 lines)
src/types/locale.ts     → TypeScript interface (~70 section interfaces)
src/context/LanguageContext.tsx  → Provider + logic
src/hooks/useTranslation.ts     → Consumer hook
```

## Translation Key Structure

Keys follow dot notation organized by feature:

```
common.siteName          → global/shared keys
nav.homePage             → navigation
header.cart              → header-specific
home.heroTitle1          → home page
shop.pageTitle           → shop page
productInfo.addToCart    → product info page
adminProducts.pageTitle  → admin product management
```

## Using `t()` in Components

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

## Language Persistence

- **Storage key:** `'language'` in `localStorage`
- **Default value:** `'ja'` (Japanese)
- **Load order:** localStorage → fallback to `'ja'`

```typescript
// src/context/LanguageContext.tsx
const [language, setLanguageState] = useState<Language>(() => {
  const stored = localStorage.getItem('language') as Language | null
  return stored === 'en' || stored === 'ja' ? stored : 'ja'
})
```

## Language Context API

```typescript
interface LanguageContextValue {
  language: Language              // 'en' | 'ja'
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: Locale                       // Full typed locale object
}
```

## Adding a New Language (Spanish)

**Step 1:** Create the locale file

```bash
cp src/locales/en.json src/locales/es.json
```

Translate all string values in `es.json` to Spanish.

**Step 2:** Add the language to the type

```typescript
// src/types/locale.ts
export type Language = 'en' | 'ja' | 'es';
```

**Step 3:** Register the locale in LanguageContext

```typescript
// src/context/LanguageContext.tsx
import es from '../locales/es.json'

const LOCALE_MAP: Record<Language, Locale> = { en, ja, es }
```

**Step 4:** Update default language logic (optional)

```typescript
// Change default or keep as 'ja'
return stored === 'en' || stored === 'ja' || stored === 'es' ? stored : 'ja'
```

**Step 5:** Add language switcher UI in Header

```tsx
<select value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
  <option value="en">English</option>
  <option value="ja">日本語</option>
  <option value="es">Español</option>
</select>
```

## RTL / LTR Considerations

The entire app is RTL-first with `dir="rtl"` hardcoded in `index.html`.

When adding LTR languages (like Spanish), you need to:

1. Remove hardcoded `dir="rtl"` from `index.html`
2. Set `dir` dynamically in `LanguageContext.setLanguage()`
3. Map languages to directions:
   ```typescript
   const DIR_MAP: Record<Language, 'rtl' | 'ltr'> = {
     en: 'ltr',
     ja: 'ltr',
     es: 'ltr',
   }
   ```
4. Review components with hardcoded `left`/`right` positioning
5. Test RTL-aware Tailwind classes (`rtl:rotate-180`, `ps-*`/`pe-*`)

## Locale Sections

The `Locale` interface defines these top-level sections:

| Section | Description | Example Keys |
|---------|-------------|-------------|
| `common` | Global shared text | `siteName`, `loading` |
| `nav` | Navigation | `homePage`, `shop` |
| `header` | Header-specific | `cart`, `login` |
| `footer` | Footer | `quickAccess`, `contactUs` |
| `home` | Home page | `heroTitle1`, `shopNow` |
| `shop` | Shop page | `pageTitle`, `newest` |
| `blogs` | Blog listing | `pageTitle` |
| `blogInfo` | Blog detail | `pageTitle` |
| `contactUs` | Contact form | `nameLabel`, `submitButton` |
| `aboutUs` | About page | `introTitle`, `contactTitle` |
| `services` | Services section | `title` |
| `auth` | Login/Register | `loginTitle`, `registerButton` |
| `orders` | Order history | `pageTitle`, `allOrders` |
| `userPanel` | User dashboard | `pageTitle` |
| `userTickets` | Support tickets | `subjectLabel`, `sendTicket` |
| `accountDetails` | Profile edit | `nameLabel`, `updateInfo` |
| `admin` | Admin generic | `pageTitle` |
| `adminSidebar` | Admin nav | `mainPage`, `products` |
| `adminProducts` | Product CRUD | `pageTitle`, `titleLabel` |
| `adminBlogs` | Blog CRUD | `pageTitle`, `contentLabel` |
| `adminUsers` | User CRUD | `pageTitle`, `roleLabel` |
| `adminComments` | Comment moderation | `pageTitle` |
| `adminMessages` | Messages | `pageTitle` |
| `adminCategories` | Category CRUD | `pageTitle` |
| `adminTickets` | Ticket management | `pageTitle` |
| `breadcrumb` | Breadcrumb | `home`, `shop` |
| `productInfo` | Product detail | `addToCart`, `rating` |
| `orderConfirm` | Order confirmation | `pageTitle`, `total` |
| `sellAndProfit` | Admin chart | `title` |
