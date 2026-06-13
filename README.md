<img src='public/images/golden-coffee-shop.png' />

# React + Vite

## About Project
An online coffee shop website for selling all kinds of coffees

### See <a href='https://goldencoffee.liara.run'>Demo</a>

## Getting Started
First, run the development server
```bash
npm run dev
# or
yarn dev
```

Second, run the TailwindCss compiler
```bash
npm run tailwind
# or
yarn tailwind
```

Now, open <a href='http://localhost:5173/'>http://localhost:5173</a> with your browser to see the result

## Developed with
<img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
<img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
<img alt="Swiper" src="https://img.shields.io/badge/Swiper-0080ff?style=for-the-badge&logo=swiper&logoColor=white" />

## Architecture Diagrams

### 1. System Architecture

```mermaid
graph TD
    SPA["React SPA"] --> RT["React Router v6<br/>useRoutes + Outlet"]
    SPA --> LC["LanguageContext<br/>en / ja i18n"]
    RT --> DM["27 Routes Total"]
    DM --> Pages["17 Pages<br/>Public + Admin + User"]
    Pages --> Comp["21 Components<br/>Header, Footer, Modal..."]
    Comp --> SW["Swiper<br/>Carousels"]
    Comp --> CK["CKEditor 5<br/>Rich Text"]
    Comp --> RC["Recharts<br/>Charts"]
    Comp --> SA["SweetAlert2<br/>Dialogs"]
    State["State: Context + useState + localStorage"] -.-> LC
```

### 2. Route Tree

```mermaid
graph LR
    R["/"] --> Home["Home"]
    R --> Shop["Shop"]
    R --> Prod["Product Info<br/>/:shortName"]
    R --> Blog["Blogs"]
    R --> About["About Us"]
    R --> Contact["Contact Us"]
    R --> Order["Order Confirm"]
    R --> Login["Login / Register"]

    subgraph User["/my-account/*"]
        UD["Dashboard"]
        UO["Orders"]
        UT["Tickets"]
        UA["Account Details"]
    end

    subgraph Admin["/admin-panel/*"]
        AD["Dashboard"]
        AP["Products"]
        AB["Blogs"]
        AU["Users"]
        AC["Comments"]
        AM["Messages"]
        AT["Tickets"]
        ACat["Categories"]
    end

    R --> User
    R --> Admin
```

### 3. Component Hierarchy

```mermaid
graph TD
    App["App.tsx | LanguageProvider"] --> Router["useRoutes"]
    Router --> Public["Public Pages<br/>Header + Footer"]
    Router --> AL["AdminPanel<br/>Sidebar + Outlet"]
    Router --> UL["UserPanel<br/>Sidebar + Outlet"]

    subgraph Components
        Header["Header: Nav, Cart, Theme"]
        Footer["Footer: Links, Social"]
        PB["ProductBox: Card"]
        CB["CategoryBox: Card"]
        BB["BlogBox: Card"]
        Modal["Modal: Overlay"]
        DT["DataTable: Grid Table"]
    end

    Public --> Header
    Public --> Footer
    AL --> DT
    AL --> Modal
```

### 4. Language Context Flow

```mermaid
sequenceDiagram
    participant C as Component
    participant H as useTranslation
    participant P as LanguageProvider
    participant LS as localStorage

    C->>H: useTranslation()
    H->>P: useContext()
    P->>LS: getItem('language')
    LS-->>P: 'ja'
    P-->>H: { language: 'ja', t }
    H-->>C: Render with Japanese text
    C->>H: toggleLanguage()
    H->>P: setLanguage('en')
    P->>LS: setItem('language', 'en')
    P-->>H: { language: 'en', t }
    H-->>C: Re-render with English
```

### 5. Admin CRUD State Flow

```mermaid
stateDiagram-v2
    [*] --> List: Navigate
    List --> Add: Click Add New
    List --> Edit: Click Edit
    List --> Delete: Click Delete

    Add --> Save: Submit form
    Edit --> Save: Submit form
    Save --> Success: OK
    Save --> Error: Fail

    Success --> List: Refresh
    Error --> Add: Retry
    Error --> Edit: Retry

    Delete --> Confirm: SweetAlert2
    Confirm --> List: Cancel
    Confirm --> Delete_OK: Confirm
    Delete_OK --> List: Refresh
```

### 6. Dark Mode Initialization

```mermaid
sequenceDiagram
    participant Browser
    participant Script as Inline Script
    participant LS as localStorage
    participant React

    Browser->>Script: Parse <script> in <head>
    Script->>LS: getItem('theme')
    alt theme === 'dark'
        Script->>Script: classList.add('dark')
    else
        Script->>Script: classList.remove('dark')
    end
    Note over Script,React: Flash prevented - class set before React mounts
    Browser->>React: Mount app
    React->>LS: User clicks toggle
    LS-->>React: Toggle dark/light class
```

### 7. Data Model (ERD)

```mermaid
erDiagram
    Category ||--o{ Product : contains
    User ||--o{ Order : places
    User ||--o{ Comment : writes
    User ||--o{ Ticket : creates
    Product ||--o{ OrderItem : includes
    Order ||--o{ OrderItem : has
    Product ||--o{ Comment : receives

    Category {
        int id PK
        string title
        string shortName
        string image
    }

    Product {
        int id PK
        string title
        float price
        string shortDesc
        string image
        int count
        int discount
    }

    User {
        int id PK
        string name
        string role
        boolean banned
    }

    Order {
        int id PK
        string status
        float total
    }
```

### 8. Deployment Pipeline

```mermaid
graph LR
    DEV["git push"] --> GH["GitHub"]
    GH --> CI["CI/CD"]
    CI --> LINT["npm run lint"]
    CI --> BUILD["npm run build"]
    BUILD --> DIST["dist/"]
    DIST --> LR["liara.run<br/>Current"]
    DIST --> NF["Netlify"]
    DIST --> VC["Vercel"]
    DIST --> S3["AWS S3 + CloudFront"]
    LR --> CDN["Global CDN"]
    NF --> CDN
    VC --> CDN
    S3 --> CDN
    CDN --> USER["User Browser"]
```

### 9. Translation Key Distribution

```mermaid
pie title Translation Keys by Feature
    "Common / Nav / Header / Footer" : 25
    "Home / Shop / ProductInfo" : 20
    "Admin Panel (all sections)" : 25
    "User Panel" : 15
    "Auth (login, register)" : 8
    "About Us / Contact Us / Blogs" : 7
```

### 10. Responsive Layout Strategy

```mermaid
gantt
    title Responsive Breakpoints
    dateFormat  YYYY-MM-DD
    axisFormat  %d

    section Mobile
    xs (480px)  :a1, 2024-01-01, 1d
    sm (640px)  :a2, after a1, 1d

    section Tablet
    md (769px)  :b1, after a2, 1d
    ipad (992px):b2, after b1, 1d

    section Desktop
    lg (1024px) :c1, after b2, 1d
    xl (1280px) :c2, after c1, 1d
```

## Documentation

Full documentation is available under `/goldencoffee/homedir/docs/`:

- [Getting Started](/goldencoffee/homedir/docs/01-getting-started.md) — Setup guide
- [Architecture](/goldencoffee/homedir/docs/02-architecture.md) — Deep dive
- [Components](/goldencoffee/homedir/docs/03-components.md) — Reusable components
- [Pages](/goldencoffee/homedir/docs/04-pages.md) — Page-by-page guide
- [Admin Panel](/goldencoffee/homedir/docs/05-admin-panel.md) — CRUD operations
- [User Panel](/goldencoffee/homedir/docs/06-user-panel.md) — User features
- [Localization](/goldencoffee/homedir/docs/07-localization.md) — i18n guide
- [Dark Mode](/goldencoffee/homedir/docs/08-dark-mode.md) — Implementation
- [State Management](/goldencoffee/homedir/docs/09-state-management.md) — Patterns
- [Styling](/goldencoffee/homedir/docs/10-styling.md) — Design system
- [Performance](/goldencoffee/homedir/docs/11-performance.md) — Optimization
- [Testing](/goldencoffee/homedir/docs/12-testing.md) — Strategy
- [Deployment](/goldencoffee/homedir/docs/13-deployment.md) — Hosting
- [API Integration](/goldencoffee/homedir/docs/14-api-integration.md) — Backend
- [Contributing](/goldencoffee/homedir/docs/15-contributing.md) — Guidelines
- [Known Issues](/goldencoffee/homedir/docs/16-known-issues.md) — Limitations
- [Roadmap](/goldencoffee/homedir/docs/17-roadmap.md) — Future plans
- [Code Examples](/goldencoffee/homedir/docs/18-code-examples.md) — Snippets
- [Diagrams](/goldencoffee/homedir/docs/diagrams.md) — All diagrams

### Made with ❤ by Hadi Heidariazar
