---
title: API Integration
order: 14
---

# API Integration Guide

## Overview

Currently, all data in the application is mock/hardcoded. This document describes how to connect to a real REST backend.

The app expects the API base URL in the `VITE_API_URL` environment variable:

```typescript
// src/types/global.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
```

## Expected REST API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | List all categories |
| POST | `/api/categories` | Create category |
| PUT | `/api/categories/:id` | Update category |
| DELETE | `/api/categories/:id` | Delete category |

### Blogs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs` | List all blogs |
| GET | `/api/blogs/:id` | Get single blog |
| POST | `/api/blogs` | Create blog |
| PUT | `/api/blogs/:id` | Update blog |
| DELETE | `/api/blogs/:id` | Delete blog |

### Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/comments` | List all comments |
| POST | `/api/comments` | Create comment |
| PUT | `/api/comments/:id` | Update comment |
| DELETE | `/api/comments/:id` | Delete comment |

### Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages` | List all messages |
| POST | `/api/messages` | Send message |
| DELETE | `/api/messages/:id` | Delete message |

### Tickets

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tickets` | List all tickets |
| POST | `/api/tickets` | Create ticket |
| PUT | `/api/tickets/:id/reply` | Reply to ticket |
| DELETE | `/api/tickets/:id` | Delete ticket |

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/logout` | User logout |
| GET | `/api/auth/me` | Get current user |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | List all users |
| POST | `/api/users` | Create user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

## Fetch Service Pattern

Create `src/services/api.ts`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('token')
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }))
    throw new Error(error.message || `API Error: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),
}
```

## Error Handling Pattern

```tsx
import { api } from '@/services/api'
import Swal from 'sweetalert2'

async function loadProducts() {
  try {
    setLoading(true)
    const data = await api.get<Product[]>('/products')
    setProducts(data)
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'خطا',
      text: err instanceof Error ? err.message : 'Failed to load products',
    })
  } finally {
    setLoading(false)
  }
}
```

## React Query Integration (Recommended)

```bash
npm install @tanstack/react-query
```

**Setup provider in App.tsx:**

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const router = useRoutes(routes)
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {router}
      </LanguageProvider>
    </QueryClientProvider>
  )
}
```

**Usage in components:**

```tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/services/api'

// Fetch products
function ProductList() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.get<Product[]>('/products'),
  })

  if (isLoading) return <div className="loader" />
  if (error) return <div>Error loading products</div>

  return products?.map(product => <ProductBox key={product.id} />)
}

// Create product mutation
function CreateProductForm() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newProduct: Omit<Product, 'id'>) =>
      api.post<Product>('/products', newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      Swal.fire({ icon: 'success', text: 'Product created!' })
    },
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      mutation.mutate({ title, price, ... })
    }}>
      {/* form fields */}
    </form>
  )
}
```

## Auth Flow with React Query

```tsx
// Auth hooks
function useLogin() {
  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      api.post<{ token: string; user: User }>('/auth/login', credentials),
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', data.user.role)
      // Redirect to dashboard
    },
  })
}

function useCurrentUser() {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => api.get<User>('/auth/me'),
    enabled: !!localStorage.getItem('token'),
    retry: false,
  })
}
```

## Data Flow Diagram

```
Component
  │
  ├─ useQuery(['products'], fetchProducts)
  │     │
  │     └─ api.get('/products')
  │           │
  │           └─ fetch(`${API_URL}/products`, { headers })
  │                 │
  │                 └─ Backend API
  │
  └─ useMutation(createProduct)
        │
        └─ api.post('/products', data)
              │
              └─ fetch(`${API_URL}/products`, { method: 'POST', body })
                    │
                    └─ Backend API → onSuccess → invalidateQueries
```
