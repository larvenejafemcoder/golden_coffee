---
title: Roadmap
order: 17
---

# Future Roadmap Suggestions

## Priority 1: Backend Integration

### Authentication System
- Implement JWT-based auth (login, register, logout)
- Create auth context for session management
- Add protected route guards for Admin and User panels
- Persist session with refresh tokens

### REST API Integration
Follow the order below for endpoint integration:

1. **Authentication** — Login/Register/Logout endpoints
2. **Products** — CRUD operations with pagination
3. **Categories** — CRUD with product association
4. **Orders** — Create, read, update order status
5. **Comments** — Submit, approve, reply
6. **Tickets** — Create, reply, close
7. **Messages** — Receive and reply to contact form submissions

### Database Requirements
| Entity | Key Fields | Relations |
|--------|-----------|-----------|
| User | id, name, email, password, role | Has many orders, comments, tickets |
| Product | id, title, price, stock, discount | Belongs to category |
| Category | id, title, shortName, image | Has many products |
| Order | id, userId, status, total | Belongs to user, has many items |
| Comment | id, userId, productId, text | Belongs to user and product |
| Ticket | id, userId, subject, status | Belongs to user, has many replies |
| Message | id, name, email, phone, text | Standalone |

## Priority 2: E-Commerce Features

### Payment Gateway
- Integrate Stripe or PayPal
- Use Stripe Elements for secure card input
- Webhook handling for payment confirmations
- Order status updates based on payment events
- Support for Iranian payment gateways (Zarinpal, etc.)

### Shopping Cart
- Persist cart across sessions (localStorage → backend)
- Cart summary component accessible from any page
- Coupon/discount code support
- Estimated shipping calculation

### Wishlist / Favorites
- Toggle heart icon on ProductBox
- Store wishlist in backend (localStorage as fallback)
- Wishlist page under User Panel

### Product Reviews
- Star rating with numeric average
- Verified purchase badge
- Sort reviews by date, rating, helpfulness

## Priority 3: User Experience

### Search
- Debounced search with URL query params
- Full-text search across products and blogs
- Advanced filters: price range, category, rating, discount
- Search results page with pagination

```typescript
// Debounced search example
const [search, setSearch] = useState('')
const debouncedSearch = useDebounce(search, 300)

useEffect(() => {
  api.get(`/products?search=${debouncedSearch}`)
}, [debouncedSearch])
```

### PWA Support
```bash
npm install vite-plugin-pwa
```

- Service worker for offline caching of static assets
- Web app manifest for install prompt
- Push notifications for order updates
- Offline fallback page

### Accessibility
- Add ARIA labels to all interactive elements
- Keyboard navigation for Swiper carousels
- Focus trap management in modals
- Screen reader announcements
- Skip-to-content link
- WCAG AA color contrast compliance

## Priority 4: Developer Experience

### Testing Infrastructure
- Set up Vitest with React Testing Library
- Write unit tests for core logic (LanguageContext, ToggleTheme)
- Component tests for Modal, ProductBox, DataTable
- E2E tests with Playwright for critical user flows

### Code Quality
- Set up Husky for pre-commit hooks
- Add commitlint for conventional commits
- Configure lint-staged for staged file linting
- Add TypeScript path aliases check

### CI/CD
- GitHub Actions: lint → test → build → deploy
- Preview deployments for pull requests
- Bundle size monitoring
- Automated Lighthouse audits

## Priority 5: Advanced Features

### Admin Dashboard Enhancements
- Date range picker for charts
- Export reports to CSV/PDF
- Product performance metrics
- User acquisition trends
- Real-time notifications for new orders

### SEO Improvements
- Dynamic Open Graph and Twitter Card meta tags per page
- Generate `sitemap.xml` at build time
- Structured data (JSON-LD) for products, blog posts, organization
- Server-side rendering consideration for critical pages

### Multi-language Expansion
- Add Spanish, Arabic, Turkish translations
- Dynamic RTL/LTR switching per language
- Locale-aware date and number formatting
- Translation management UI for admin panel

### Performance Optimization
- Lazy-load CKEditor and Recharts for admin-only pages
- Image CDN with automatic WebP conversion
- Implement `React.memo` on ProductBox, BlogBox, CategoryBox
- Route-based code splitting with `React.lazy`
- Bundle size budget in CI
