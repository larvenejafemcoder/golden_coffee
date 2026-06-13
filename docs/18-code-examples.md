---
title: Code Examples
order: 18
---

# Code Examples Appendix

## 1. Adding a New Translation Key

**Step 1:** Add to TypeScript interface in `src/types/locale.ts`:

```typescript
interface Locale {
  // ... existing sections
  checkout: {
    promoCode: string
    applyPromo: string
    discountAmount: string
  }
}
```

**Step 2:** Add to `src/locales/en.json`:

```json
{
  "checkout": {
    "promoCode": "Promo Code",
    "applyPromo": "Apply",
    "discountAmount": "Discount Amount"
  }
}
```

**Step 3:** Add to `src/locales/ja.json`:

```json
{
  "checkout": {
    "promoCode": "プロモーションコード",
    "applyPromo": "適用",
    "discountAmount": "割引額"
  }
}
```

**Step 4:** Use in component:

```tsx
import { useTranslation } from '@/hooks/useTranslation'

function CheckoutPromo() {
  const { t } = useTranslation()
  return (
    <div className="flex gap-2">
      <input placeholder={t.checkout.promoCode} className="border p-2 rounded" />
      <button className="btn-orange px-4 py-2 rounded">
        {t.checkout.applyPromo}
      </button>
    </div>
  )
}
```

## 2. Creating a New Admin Page (Coupons Management)

```tsx
// src/Pages/AdminPanel/Coupons/Coupons.tsx
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import DataTable from '@/Components/DataTable/DataTable'
import Modal from '@/Components/Modal/Modal'
import Swal from 'sweetalert2'

interface Coupon {
  id: number
  code: string
  discount: number
  expiresAt: string
  active: boolean
}

export default function Coupons() {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [editing, setEditing] = useState<Coupon | null>(null)

  function handleDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        setCoupons(prev => prev.filter(c => c.id !== id))
        Swal.fire({ icon: 'success', text: 'Coupon deleted' })
      }
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-morabba-medium">Coupons</h2>
        <button
          className="btn-orange px-4 py-2 rounded-lg"
          onClick={() => { setEditing(null); setShowModal(true) }}
        >
          Add Coupon
        </button>
      </div>

      <DataTable
        headerItemCount={4}
        headerItemTitle={["Code", "Discount", "Expires", "Status"]}
        sectionsTableWidth={["w-1/4", "w-1/4", "w-1/4", "w-1/4"]}
      >
        {coupons.map(coupon => (
          <tr key={coupon.id}>
            <td>{coupon.code}</td>
            <td>{coupon.discount}%</td>
            <td>{coupon.expiresAt}</td>
            <td>
              <span className={`px-2 py-1 rounded text-sm ${
                coupon.active ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-600'
              }`}>
                {coupon.active ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td>
              <button onClick={() => { setEditing(coupon); setShowModal(true) }}>
                Edit
              </button>
              <button onClick={() => handleDelete(coupon.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </DataTable>

      <Modal
        showModalState={showModal}
        setShowModalState={setShowModal}
        title={editing ? "Edit Coupon" : "New Coupon"}
      >
        <form className="space-y-3">
          <input
            defaultValue={editing?.code}
            placeholder="Code"
            className="w-full p-2 border rounded dark:bg-zinc-600"
          />
          <input
            defaultValue={editing?.discount}
            type="number"
            placeholder="Discount %"
            className="w-full p-2 border rounded dark:bg-zinc-600"
          />
          <input
            defaultValue={editing?.expiresAt}
            type="date"
            className="w-full p-2 border rounded dark:bg-zinc-600"
          />
          <button className="btn-orange w-full p-2 rounded">
            {editing ? 'Update' : 'Save'}
          </button>
        </form>
      </Modal>
    </div>
  )
}
```

**Add route to `src/routes.tsx`:**

```tsx
import AdminPanelCoupons from "./Pages/AdminPanel/Coupons/Coupons"

// In admin panel children array:
{ path: 'coupons', element: <AdminPanelCoupons /> }
```

**Add sidebar link in `AdminPanelSidebar.tsx`:**

```tsx
<NavLink to="/admin-panel/coupons" className={...}>
  Coupons
</NavLink>
```

## 3. Creating a New User Panel Section (Address Book)

```tsx
// src/Pages/UserPanel/AddressBook/AddressBook.tsx
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Swal from 'sweetalert2'

interface Address {
  id: number
  label: string
  fullAddress: string
  city: string
  postalCode: string
  isDefault: boolean
}

export default function AddressBook() {
  const { t } = useTranslation()
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: 'Home', fullAddress: '123 Coffee St', city: 'Tehran', postalCode: '12345', isDefault: true },
  ])

  function setAsDefault(id: number) {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })))
    Swal.fire({ icon: 'success', text: 'Default address updated' })
  }

  function handleDelete(id: number) {
    Swal.fire({
      title: 'Delete address?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then(result => {
      if (result.isConfirmed) {
        setAddresses(prev => prev.filter(a => a.id !== id))
      }
    })
  }

  return (
    <div>
      <h2 className="text-xl font-morabba-medium mb-5">Address Book</h2>

      <div className="grid gap-4">
        {addresses.map(address => (
          <div key={address.id} className="bg-white dark:bg-zinc-700 p-4 rounded-2xl shadow-normal">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-dana-bold">{address.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{address.fullAddress}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{address.city} - {address.postalCode}</p>
              </div>
              <div className="flex gap-2">
                {!address.isDefault && (
                  <button onClick={() => setAsDefault(address.id)} className="text-sm text-orange-400">
                    Set as Default
                  </button>
                )}
                {address.isDefault && (
                  <span className="text-sm text-green-600 font-dana-bold">Default</span>
                )}
                <button onClick={() => handleDelete(address.id)} className="text-sm text-red-500">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-orange mt-5 px-6 py-2 rounded-lg">
        + Add New Address
      </button>
    </div>
  )
}
```

**Add route:**

```tsx
// src/routes.tsx — in UserPanel children
{ path: "addresses", element: <AddressBook /> }
```

## 4. Custom Hook: `useLocalStorage`

```typescript
// src/hooks/useLocalStorage.ts
import { useState, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    setStoredValue(prev => {
      const valueToStore = value instanceof Function ? value(prev) : value
      localStorage.setItem(key, JSON.stringify(valueToStore))
      return valueToStore
    })
  }, [key])

  return [storedValue, setValue] as const
}
```

**Usage:**

```typescript
const [cart, setCart] = useLocalStorage<Product[]>('cart', [])
const [preferences, setPreferences] = useLocalStorage('prefs', { notifications: true })
```

## 5. API Service Pattern

```typescript
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('token')
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  }

  const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers })

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new ApiError(response.status, body.message || response.statusText)
  }

  return response.json()
}

export const api = {
  get: <T>(endpoint: string, signal?: AbortSignal) =>
    request<T>(endpoint, { signal }),

  post: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),

  put: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),

  patch: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, { method: 'PATCH', body: JSON.stringify(data) }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),
}
```

**Usage with React Query:**

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/services/api'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: ({ signal }) => api.get<Product[]>('/products', signal),
  })
}

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Omit<Product, 'id'>) => api.post<Product>('/products', data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })
}
```

## 6. Protected Route Component

```tsx
// src/Components/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'user'
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
```

**Usage in routes:**

```tsx
// src/routes.tsx
{
  path: "/admin-panel/*",
  element: (
    <ProtectedRoute requiredRole="admin">
      <AdminPanel />
    </ProtectedRoute>
  ),
  children: [ ... ]
},
{
  path: "/my-account/*",
  element: (
    <ProtectedRoute>
      <UserPanel />
    </ProtectedRoute>
  ),
  children: [ ... ]
}
```

## 7. Custom Hook: `useDebounce`

```typescript
// src/hooks/useDebounce.ts
import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
```

**Usage for search:**

```typescript
function ProductSearch() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  const { data } = useQuery({
    queryKey: ['products', 'search', debouncedQuery],
    queryFn: () => api.get<Product[]>(`/products?search=${debouncedQuery}`),
    enabled: debouncedQuery.length > 2,
  })

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded w-full"
      />
      {/* Results */}
    </div>
  )
}
```

## 8. Responsive Product Grid

```tsx
function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductBox key={product.id} />
      ))}
    </div>
  )
}
```

Breakdown: 2 columns on mobile → 3 on small tablet → 4 on desktop.
