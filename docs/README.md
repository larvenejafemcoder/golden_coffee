# Golden Coffee Shop Documentation

> **Version:** 0.0.0 | **Stack:** React 18 + TypeScript + Vite 5 | **Styling:** Tailwind CSS 3.4
> **Live Demo:** https://goldencoffee.liara.run | **Author:** Hadi Heidariazar

Welcome to the Golden Coffee Shop documentation. This guide covers everything from setup to deployment for this full-featured e-commerce SPA.

## Documentation Index

| # | Document | Description |
|---|----------|-------------|
| 01 | [Getting Started](./01-getting-started.md) | Setup guide, prerequisites, troubleshooting |
| 02 | [Architecture](./02-architecture.md) | Deep dive: Vite, TS, routing, state, i18n |
| 03 | [Components](./03-components.md) | All reusable components with props and examples |
| 04 | [Pages](./04-pages.md) | Page-by-page functional documentation |
| 05 | [Admin Panel](./05-admin-panel.md) | Complete admin panel guide (CRUD operations) |
| 06 | [User Panel](./06-user-panel.md) | User panel documentation |
| 07 | [Localization](./07-localization.md) | i18n guide: adding languages, using `t()`, RTL |
| 08 | [Dark Mode](./08-dark-mode.md) | Dark mode implementation and usage |
| 09 | [State Management](./09-state-management.md) | Context API, local state, persistence |
| 10 | [Styling](./10-styling.md) | Design system: colors, fonts, spacing, animations |
| 11 | [Performance](./11-performance.md) | Code splitting, images, memoization, bundle |
| 12 | [Testing](./12-testing.md) | Testing strategy, examples, tools |
| 13 | [Deployment](./13-deployment.md) | Build, hosting, CDN, CI/CD |
| 14 | [API Integration](./14-api-integration.md) | Connecting to real backend (endpoints, fetch patterns) |
| 15 | [Contributing](./15-contributing.md) | Code style, git workflow, PR process |
| 16 | [Known Issues](./16-known-issues.md) | Limitations and known problems |
| 17 | [Roadmap](./17-roadmap.md) | Future recommendations |
| 18 | [Code Examples](./18-code-examples.md) | Common task code snippets |
| — | [Diagrams](./diagrams.md) | Mermaid architecture, route, data flow, and ER diagrams |

## Quick Start

```bash
git clone <repository-url>
cd golden_coffee
npm install
npm run dev
```

Open http://localhost:5173/ to see the app.

## Project Overview

Golden Coffee Shop is a bilingual (English/Japanese), RTL-first SPA for a coffee e-commerce platform. It features:

- **Public pages:** Home, Shop, Product Info, Blogs, About Us, Contact Us, Login, Register, Order Confirm
- **Admin panel:** Category, Product, Blog, User, Comment, Message, Ticket management
- **User panel:** Dashboard, Orders, Tickets, Account Details
- **Dark mode** with flash-free initialization
- **Bilingual i18n** with Japanese default
- **Responsive design** with custom breakpoints

## Key Technologies

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript 6 | Type safety |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3.4 | Utility-first styling |
| React Router v6 | Client-side routing |
| Swiper | Carousels & galleries |
| Recharts | Admin dashboard charts |
| CKEditor 5 | Rich text editing (admin) |
| SweetAlert2 | Alert & confirmation dialogs |
| react-helmet | Document head management |

## Project Structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root component (LanguageProvider + router)
├── routes.tsx                # Route definitions (27 routes)
├── index.css                 # Tailwind directives + @font-face
├── context/                  # React contexts (LanguageContext)
├── hooks/                    # Custom hooks (useTranslation)
├── types/                    # TypeScript interfaces (locale, global)
├── locales/                  # Translation JSON files (en, ja)
├── fonts/                    # Dana & Morabba font files
├── Features/                 # Feature utilities (ToggleTheme)
├── Components/               # 21 reusable components
└── Pages/                    # 17 page components
```

## Quick Links

- **Live demo:** https://goldencoffee.liara.run
- **Admin panel:** `/admin-panel`
- **User panel:** `/my-account`
