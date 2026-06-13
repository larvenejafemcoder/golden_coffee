# Golden Coffee Shop — Architecture Diagrams

## 1. System Architecture (Flowchart)

```mermaid
graph TD
    subgraph Client["Client Browser"]
        HTML[index.html<br/>RTL + Dark Mode Script]
        SPA[React SPA]
    end

    subgraph Build["Build Tooling"]
        V[Vite 5<br/>Dev Server + Bundler]
        TS[TypeScript 6<br/>Strict Mode]
        TW[Tailwind CSS 3.4<br/>class Dark Mode]
        ESLint[ESLint<br/>no-explicit-any: error]
    end

    subgraph Core["Application Core"]
        RT[React Router v6<br/>useRoutes + Outlet]
        LC[LanguageContext<br/>en / ja i18n]
        DM[Dynamic Routes<br/>27 Routes Total]
    end

    subgraph UI["UI Layer"]
        C[21 Components<br/>Header, Footer, Modal...]
        P[17 Pages<br/>Public + Admin + User]
        SW[Swiper<br/>Carousels & Galleries]
        CK[CKEditor 5<br/>Rich Text Admin]
        RC[Recharts<br/>Admin Dashboard]
        SA[SweetAlert2<br/>Dialogs & Confirmations]
    end

    subgraph State["State Management"]
        LS[localStorage<br/>theme, language]
        CTX[React Context<br/>LanguageProvider]
        US[useState<br/>Local Component State]
        URL[URL Params<br/>:shortName Filters]
    end

    HTML --> SPA
    SPA --> RT
    SPA --> LC
    RT --> DM
    LC --> LS
    DM --> P
    P --> C
    C --> SW
    C --> CK
    C --> RC
    C --> SA
    C --> US
    C --> CTX
    CTX --> LS
    US --> CTX
    P --> URL

    V --> TS
    V --> TW
    TS --> ESLint
```

## 2. Route Tree (Flowchart LR)

```mermaid
graph LR
    R["/"]:::root --> Home["Home<br/>/"]
    R --> Shop["Shop<br/>/shop"]
    R --> CatShop["Category Shop<br/>/category/:shortName"]
    R --> ProdInfo["Product Info<br/>/product/:shortName"]
    R --> Blogs["Blogs<br/>/blogs"]
    R --> BlogInfo["Blog Detail<br/>/blog/:shortName"]
    R --> About["About Us<br/>/about-us"]
    R --> Contact["Contact Us<br/>/contact-us"]
    R --> Order["Order Confirm<br/>/order"]
    R --> Login["Login<br/>/login"]
    R --> Register["Register<br/>/register"]

    subgraph UP["User Panel /my-account/*"]
        direction LR
        ULayout["Layout + Sidebar + Outlet"] --> Counter["Dashboard<br/>/my-account"]
        ULayout --> Orders["Orders<br/>/my-account/orders"]
        ULayout --> Tickets["Tickets<br/>/my-account/tickets"]
        ULayout --> Acct["Account Details<br/>/my-account/details"]
    end

    subgraph AP["Admin Panel /admin-panel/*"]
        direction LR
        ALayout["Layout + Sidebar + Outlet"] --> Dash["Dashboard<br/>/admin-panel"]
        ALayout --> AdminProd["Products<br/>/admin-panel/products"]
        ALayout --> AdminBlogs["Blogs<br/>/admin-panel/blogs"]
        ALayout --> AdminUsers["Users<br/>/admin-panel/users"]
        ALayout --> AdminComments["Comments<br/>/admin-panel/comments"]
        ALayout --> AdminMessages["Messages<br/>/admin-panel/messages"]
        ALayout --> AdminTickets["Tickets<br/>/admin-panel/tickets"]
        ALayout --> AdminCats["Categories<br/>/admin-panel/categories"]
    end

    R --> UP
    R --> AP

    classDef root fill:#634832,stroke:#967259,color:#fff
```

## 3. Component Hierarchy (Graph TD)

```mermaid
graph TD
    App["App.tsx<br/>LanguageProvider"] --> Router["useRoutes(routes)"]
    Router --> Layouts

    subgraph Layouts["Layout Wrappers"]
        Public["Public Pages<br/>Header + Footer"]
        AL["AdminPanel/Index.tsx<br/>AdminPanelSidebar + Outlet"]
        UL["UserPanel/Index.tsx<br/>Sidebar + Outlet"]
    end

    subgraph Shared["Shared Components"]
        Header["Header<br/>Nav, Cart, Theme Toggle"]
        Footer["Footer<br/>Links, Social, Copyright"]
        TP["TitlePage<br/>react-helmet <title>"]
        BC["Breadcrumb<br/>RTL-aware Nav"]
    end

    subgraph Cards["Card Components"]
        PB["ProductBox<br/>Image, Price, Rating, Cart"]
        BB["BlogBox<br/>Image, Date, Title"]
        CB["CategoryBox<br/>Image, Title, Link"]
        SV["ServiceBox<br/>Icon, Title, Desc"]
        CX["CounterBox<br/>Stats Card"]
    end

    subgraph Groups["Group Components"]
        LP["LastProducts<br/>ProductBox Grid"]
        LB["LastBlogs<br/>BlogBox Grid"]
        CatG["Categories<br/>CategoryBox Grid"]
        BS["BestSelling<br/>Swiper Carousel"]
        Svc["Services<br/>ServiceBox Grid"]
    end

    subgraph Utility["Utility Components"]
        Modal["Modal<br/>Overlay + Scroll Lock"]
        DT["DataTable<br/>CSS Grid Table"]
        ST["AdminPanelTableTitle<br/>Add/List Mode Toggle"]
        AS["AdminPanelSidebar<br/>Admin Nav Links"]
        SS["Sidebar<br/>User Panel Nav Links"]
    end

    Header --> TP
    Public --> Header
    Public --> Footer
    Public --> BC
    AL --> AS
    UL --> SS
    LP --> PB
    LB --> BB
    CatG --> CB
    BS --> PB
    BS --> Modal
    BS --> DT
    Svc --> SV
    ST --> DT
```

## 4. Data Flow — Language Context (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User
    participant C as Component
    participant H as useTranslation Hook
    participant P as LanguageProvider
    participant LC as localStorage
    participant LOC as Locale JSON

    Note over P: App initializes
    P->>LC: getItem('language')
    LC-->>P: 'ja' (or null)
    P->>P: Default to 'ja' if null
    P->>LOC: Import en.json + ja.json
    P->>P: Build LOCALE_MAP

    Note over C: Component mounts
    C->>H: useTranslation()
    H->>P: useContext(LanguageContext)
    P-->>H: { language, t, toggleLanguage }
    H-->>C: { language: 'ja', t: LOCALE_MAP.ja }
    C->>C: Render with t.home.heroTitle1

    Note over U: User clicks language toggle
    U->>C: Click toggle button
    C->>H: toggleLanguage()
    H->>P: setLanguage('en')
    P->>LC: setItem('language', 'en')
    P->>P: Update state
    P->>LOC: Select LOCALE_MAP.en
    P-->>H: { language: 'en', t: LOCALE_MAP.en }
    H-->>C: Re-render with new t
    C->>C: All text updates instantly
```

## 5. Admin CRUD Flow (State Diagram)

```mermaid
stateDiagram-v2
    [*] --> ListMode: Navigate to admin section

    ListMode --> AddMode: Click "Add New"
    ListMode --> EditMode: Click "Edit" on row
    ListMode --> DeleteConfirm: Click "Delete" on row
    ListMode --> [*]: Navigate away

    AddMode --> Saving: Click "Save"
    EditMode --> Saving: Click "Update"

    Saving --> Success: API success (mock)
    Saving --> Error: API failure

    Success --> ListMode: Refresh list
    Error --> AddMode: Show error toast
    Error --> EditMode: Show error toast

    DeleteConfirm --> Deleting: Confirm in SweetAlert2
    DeleteConfirm --> ListMode: Cancel

    Deleting --> Success: Deleted
    Deleting --> Error: Failed
```

## 6. Authentication Flow (Future — Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User
    participant L as Login Page
    participant A as Auth Context
    participant API as Backend API
    participant LS as localStorage
    participant PR as ProtectedRoute

    Note over U: Not logged in
    U->>L: Enter credentials
    L->>A: login(email, password)
    A->>API: POST /api/auth/login
    API-->>A: { token, user }

    A->>LS: setItem('token', token)
    A->>LS: setItem('role', user.role)
    A-->>L: Success, redirect

    Note over PR: User navigates to /my-account
    PR->>LS: getItem('token')
    LS-->>PR: token exists
    PR->>PR: Token valid → render children
    PR-->>U: User Panel displayed

    Note over PR: User navigates to /admin-panel
    PR->>LS: getItem('token')
    PR->>LS: getItem('role')
    LS-->>PR: role = 'user'
    PR->>PR: role !== 'admin' → redirect
    PR-->>U: Redirected to /
```

## 7. ER Diagram — Data Models

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
        int categoryId FK
        string title
        float price
        string shortDesc
        string longDesc
        string image
        int count
        int discount
    }

    User {
        int id PK
        string name
        string username
        string phone
        string email
        string role
        boolean banned
    }

    Order {
        int id PK
        int userId FK
        string status
        float total
        datetime createdAt
    }

    OrderItem {
        int id PK
        int orderId FK
        int productId FK
        int quantity
        float price
    }

    Comment {
        int id PK
        int userId FK
        int productId FK
        string text
        boolean approved
    }

    Ticket {
        int id PK
        int userId FK
        string subject
        string text
        string department
        string status
    }
```

## 8. Dark Mode Initialization (Sequence Diagram)

```mermaid
sequenceDiagram
    participant Browser
    participant HTML as index.html
    participant Script as Inline Script
    participant LS as localStorage
    participant React as React App
    participant Toggle as ToggleTheme.ts

    Note over Browser: Page load begins
    Browser->>HTML: Parse document
    HTML->>Script: Execute inline script
    Script->>LS: getItem('theme')
    alt theme === 'dark'
        LS-->>Script: 'dark'
        Script->>Script: document.documentElement.classList.add('dark')
    else theme === 'light' or null
        LS-->>Script: null / 'light'
        Script->>Script: document.documentElement.classList.remove('dark')
    end

    Note over Script: Flash prevented — correct class already set

    Browser->>React: Mount React app
    React->>Toggle: User clicks theme toggle
    Toggle->>LS: getItem('theme')
    alt theme === 'dark'
        Toggle->>Toggle: classList.remove('dark')
        Toggle->>LS: setItem('theme', 'light')
    else
        Toggle->>Toggle: classList.add('dark')
        Toggle->>LS: setItem('theme', 'dark')
    end
    Toggle-->>React: Theme updated instantly
```

## 9. Responsive Breakpoints (Gantt)

```mermaid
gantt
    title Responsive Breakpoint Strategy
    dateFormat  YYYY-MM-DD
    axisFormat  %d

    section Mobile
    xs (480px)       :a1, 2024-01-01, 1d
    sm (640px)       :a2, after a1, 1d

    section Tablet
    md (769px)       :b1, after a2, 1d
    ipad (992px)     :b2, after b1, 1d

    section Desktop
    lg (1024px)      :c1, after b2, 1d
    xl (1280px)      :c2, after c1, 1d

    section Layout
    Single Column    :d1, 2024-01-01, 2d
    2 Column Grid    :d2, after d1, 2d
    3 Column Grid    :d3, after d2, 1d
    4 Column Grid    :d4, after d3, 2d
```

## 10. Deployment Pipeline (Flowchart LR)

```mermaid
graph LR
    DEV["Developer<br/>git push"] --> GH["GitHub<br/>Repository"]
    GH --> GA["GitHub Actions<br/>CI/CD Pipeline"]
    GA --> LINT["npm run lint<br/>ESLint Check"]
    GA --> BUILD["npm run build<br/>Vite Production Build"]
    GA --> TEST["npm test<br/>Vitest (future)"]

    BUILD --> DIST["dist/<br/>index.html + assets/"]

    subgraph Hosting["Hosting Targets"]
        LR["liara.run<br/>Current (Iranian Cloud)"]
        NF["Netlify<br/>Drag & Drop"]
        VC["Vercel<br/>Zero Config"]
        S3["AWS S3 + CloudFront<br/>Scalable CDN"]
    end

    DIST --> LR
    DIST --> NF
    DIST --> VC
    DIST --> S3

    NF --> CDN["Global CDN<br/>Edge Caching"]
    VC --> CDN
    S3 --> CDN

    CDN --> USER["End User<br/>Browser"]

    GA --> NOTIFY["Deploy Notification<br/>Slack / Email"]
```

## 11. Translation Key Organization (Pie Chart)

```mermaid
pie title Translation Key Distribution by Feature
    "Common / Nav / Header / Footer" : 25
    "Home / Shop / ProductInfo" : 20
    "Admin Panel (all sections)" : 25
    "User Panel (orders, tickets, account)" : 15
    "Auth (login, register)" : 8
    "About Us / Contact Us / Blogs" : 7
```

## 12. File Dependency Graph

```mermaid
graph TD
    main["main.tsx"] --> App["App.tsx"]
    App --> LC["context/LanguageContext.tsx"]
    App --> RT["routes.tsx"]
    RT --> Home["Pages/Home/Home.tsx"]
    RT --> Shop["Pages/Shop/Shop.tsx"]
    RT --> ProdInfo["Pages/ProductInfo/ProductInfo.tsx"]
    RT --> APanel["Pages/AdminPanel/Index.tsx"]
    RT --> UPanel["Pages/UserPanel/Index.tsx"]

    LC --> EN["locales/en.json"]
    LC --> JA["locales/ja.json"]
    LC --> LOC["types/locale.ts"]

    Home --> Header["Components/Header/Header.tsx"]
    Home --> LP["Components/LastProducts/LastProducts.tsx"]
    Home --> BS["Components/BestSelling/BestSelling.tsx"]
    Home --> Footer["Components/Footer/Footer.tsx"]

    Header --> TT["Features/ToggleTheme/ToggleTheme.ts"]
    Header --> UTIL["hooks/useTranslation.ts"]

    LP --> PB["Components/ProductBox/ProductBox.tsx"]
    BS --> PB
    BS --> SWIPER["swiper/react"]

    APanel --> AS["Components/AdminPanelSidebar/AdminPanelSidebar.tsx"]
    APanel --> DT["Components/DataTable/DataTable.tsx"]
    APanel --> Modal["Components/Modal/Modal.tsx"]
    APanel --> CK["@ckeditor/ckeditor5-react"]
    APanel --> RC["recharts"]

    UTIL --> LC
    TT --> LS["localStorage API"]
    AS --> SA["sweetalert2"]
    AS --> NavLink["react-router-dom NavLink"]
```
