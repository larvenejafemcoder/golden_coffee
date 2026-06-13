---
title: Styling
order: 10
---

# Styling & Design System

## Color Palette

```js
// Custom colors defined in tailwind.config.js

// Primary coffee tones
brown: {
  100: "#ECE0D1",   // Light cream — backgrounds, cards
  300: "#DBC1AC",   // Tan — accents, borders
  600: "#967259",   // Medium brown — secondary text
  900: "#634832"    // Dark brown — headings, emphasis
}

// Accent (orange)
orange: {
  200: "#FDBA74",   // Light orange — secondary highlights
  300: "#F97316",   // Primary orange — badges, highlights
  400: "#EA580C",   // Dark orange — buttons, active states
  500: "#9A3412"    // Burnt orange — hover states
}

// Semantic colors
teal:    { 600: "#0D9488" },    // Success / confirm
green:   { 200: "#BBF7D0", 500: "#22C55E", 600: "#16A34A", 700: "#15803D" },
red:     { 500: "#EF4444", 600: "#DC2626" },
sky:     { 700: "#0369A1" },    // Category tags
yellow:  { 500: "#EAB308" },    // Star ratings
```

## Typography

**Font files:** `src/fonts/Dana/` and `src/fonts/Morabba/`

| Font Class | Weight | Usage |
|-----------|--------|-------|
| `font-dana` | 400 (Regular) | Body text |
| `font-dana-medium` | 500 (Medium) | Bold body, labels |
| `font-dana-bold` | 600 (DemiBold) | Strong emphasis |
| `font-morabba` | 300 (Light) | Subtitles, decorative |
| `font-morabba-medium` | 500 (Medium) | Section headings (h2, h3) |
| `font-morabba-bold` | 700 (Bold) | Hero titles, major headings |

**Font face declarations** in `src/index.css`:

```css
@font-face {
  font-family: 'Dana';
  src: url('./fonts/Dana/DanaFaNum-Regular.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}
/* Same pattern for Dana Medium, Dana DemiBold,
   Morabba Light, Morabba Medium, Morabba Bold */
```

> **Note:** `font-display: swap` ensures text remains visible during font load, using system fallback fonts.

## Spacing System

Tailwind's default spacing scale plus two custom additions:

```js
// tailwind.config.js
spacing: {
  27: "6.25rem",   // 100px
  50: "12.5rem"    // 200px
}
```

## Responsive Breakpoints

```js
// tailwind.config.js
screens: {
  xs:  "480px",    // Small phones
  sm:  "640px",    // Large phones (Tailwind default)
  md:  "769px",    // Tablets (custom, not default 768)
  ipad: "992px",   // Large tablets (custom)
  lg:  "1024px",   // Desktop (Tailwind default)
  xl:  "1280px",   // Large desktop (Tailwind default)
}
```

## Custom CSS Utilities

Defined in `src/index.css` under the `@layer components`:

| Class | Properties | Usage |
|-------|-----------|-------|
| `.btn-orange` | `bg-orange-400 text-white hover:bg-orange-500 transition-colors` | Primary action buttons |
| `.overlay` | Fixed full-screen `bg-black/50` | Modals, mobile menus |
| `.submenu` | `flex flex-col` vertical layout | Dropdown navigation |
| `.circle` | `rounded-full` with `--lg`, `--md`, `--sm` size variants | Decorative elements |
| `.loader` | Animated spinning indicator | Initial page load |

## Z-Index Layering

| Element | Z-Index |
|---------|---------|
| Spinner (`first-z`) | 999999999999 |
| Modal wrapper | 50 |
| Fixed header | 50 |
| Mobile sidebar | 50 |
| Overlay | 10 |
| Page content | 1 |

## Tailwind Configuration Highlights

```js
// tailwind.config.js — full custom config
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { brown: { ... }, orange: { ... } },
      fontFamily: { dana: "Dana", ... },
      screens: { xs: "480px", ipad: "992px" },
      spacing: { 27: "6.25rem", 50: "12.5rem" },
      backgroundImage: {
        "home-mobile": "url(...)",
        "home-desktop": "url(...)",
      },
      boxShadow: {
        normal: "0 0 20px 0 rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('child', '& > *')
    },
  ],
}
```

## Child Variant Plugin

The custom `child:` variant allows styling all direct children of a parent:

```tsx
<div className="child:mb-4">
  <p>Item 1</p>  {/* margin-bottom: 1rem */}
  <p>Item 2</p>  {/* margin-bottom: 1rem */}
  <p>Item 3</p>  {/* margin-bottom: 1rem */}
</div>
```

## CSS Architecture

```
index.css
├── @tailwind base
├── @tailwind components
├── @tailwind utilities
├── @font-face declarations (6 fonts)
├── @layer components
│   ├── .submenu { ... }
│   ├── .overlay { ... }
│   ├── .circle { --size-lg: 203px; ... }
│   ├── .btn-orange { ... }
│   └── .loader { ... }
└── Custom scrollbar / spinner styles

src/style/app.css
└── Generated Tailwind output (~39KB)
```
