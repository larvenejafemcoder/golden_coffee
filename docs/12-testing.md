---
title: Testing
order: 12
---

# Testing Strategy

## Current State

No tests currently exist in the codebase. No test frameworks are installed in `package.json` dependencies.

> **Note:** This document provides a recommended testing strategy for future implementation.

## Recommended Tools

| Tool | Purpose | Installation |
|------|---------|-------------|
| Vitest | Unit & integration tests (Vite-native) | `npm install -D vitest` |
| React Testing Library | Component testing | `npm install -D @testing-library/react @testing-library/jest-dom` |
| Playwright | End-to-end testing | `npm install -D @playwright/test` |
| MSW | API mocking | `npm install -D msw` |

## Vitest Configuration

Add to `vite.config.ts`:

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
```

## Testing LanguageContext

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '@/context/LanguageContext'
import { useTranslation } from '@/hooks/useTranslation'

function TestComponent() {
  const { language, toggleLanguage, t } = useTranslation()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="site-name">{t.common.siteName}</span>
      <button onClick={toggleLanguage}>Toggle</button>
    </div>
  )
}

describe('LanguageContext', () => {
  it('defaults to Japanese', () => {
    localStorage.clear()
    render(<LanguageProvider><TestComponent /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('ja')
  })

  it('toggles language', () => {
    localStorage.clear()
    render(<LanguageProvider><TestComponent /></LanguageProvider>)
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
  })
})
```

## Testing ProductBox

```tsx
import { render, screen } from '@testing-library/react'
import ProductBox from '@/Components/ProductBox/ProductBox'

describe('ProductBox', () => {
  it('renders add to cart button', () => {
    render(<ProductBox />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders product image', () => {
    render(<ProductBox />)
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
```

## Testing Modal Component

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '@/Components/Modal/Modal'

describe('Modal', () => {
  it('renders when open', () => {
    const setShow = vi.fn()
    render(
      <Modal showModalState={true} setShowModalState={setShow} title="Test">
        <p>Content</p>
      </Modal>
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('closes on overlay click', () => {
    const setShow = vi.fn()
    render(
      <Modal showModalState={true} setShowModalState={setShow} title="Test">
        <p>Content</p>
      </Modal>
    )
    fireEvent.click(screen.getByRole('dialog'))
    expect(setShow).toHaveBeenCalledWith(false)
  })

  it('does not render when closed', () => {
    const setShow = vi.fn()
    render(
      <Modal showModalState={false} setShowModalState={setShow} title="Test">
        <p>Content</p>
      </Modal>
    )
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })
})
```

## Testing Dark Mode Toggle

```tsx
import { toggleTheme } from '@/Features/ToggleTheme/ToggleTheme'

describe('toggleTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('enables dark mode when currently light', () => {
    toggleTheme()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('disables dark mode when currently dark', () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    toggleTheme()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
```

## Mock Data Fixtures

Create `src/test/fixtures/` with test data shapes:

```ts
// src/test/fixtures/products.ts
export const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 100000,
  shortDesc: 'A test product',
  longDesc: 'Long description',
  category: 'coffee',
  image: '/images/products/p1.png',
  count: 10,
  discount: 20,
}
```

## Test Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test"
  }
}
```

## Recommended Test Coverage

| Priority | Component / Feature | Test Type |
|----------|--------------------|-----------|
| P0 | LanguageContext | Unit |
| P0 | ToggleTheme | Unit |
| P0 | useTranslation | Unit |
| P1 | Modal | Unit |
| P1 | ProductBox | Unit |
| P1 | DataTable | Unit |
| P2 | Header (responsive) | Integration |
| P2 | Routing | Integration |
| P3 | Admin CRUD flows | E2E |
| P3 | User panel flows | E2E |
