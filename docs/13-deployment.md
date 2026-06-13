---
title: Deployment
order: 13
---

# Deployment Guide

## Build

```bash
npm run build
```

Output is in the `dist/` directory, ready for static hosting.

## Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js       # Main bundle
│   ├── index-[hash].css      # Compiled styles
│   └── vendor-[hash].js      # Vendor chunk
└── images/                   # Static assets copied from public/
```

## SPA Configuration

Since this is a client-side rendered SPA with React Router, your server must serve `index.html` for all routes.

### Nginx

```nginx
server {
  listen 80;
  server_name goldencoffee.liara.run;
  root /path/to/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache static assets
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

### Apache (.htaccess)

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

### Netlify

```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Hosting Recommendations

| Provider | Pros | Config Required |
|----------|------|----------------|
| **liara.run** | Current host, Iranian cloud | SPA redirect rule |
| **Netlify** | Drag-and-drop deploy, automatic SPA handling | `netlify.toml` or manual redirect |
| **Vercel** | Zero-config, auto-detects Vite, preview deploys | Automatic |
| **AWS S3 + CloudFront** | Most scalable, global CDN | S3 bucket static hosting + CloudFront error page to `/index.html` |
| **GitHub Pages** | Free for public repos | Must set `homepage` in `package.json` + `404.html` for SPA |

## Environment Variables in Production

```bash
# Build with specific API URL
VITE_API_URL=https://api.goldencoffee.com npm run build
```

> **Note:** Vite inlines environment variables at build time. You need separate builds for different environments.

## CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Performance Optimizations for Production

### Compression

Vite builds are already optimized. For additional compression on the server:

```nginx
# Nginx gzip
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 256;
```

### CDN Integration

Asset URLs can be rewritten via Vite's `base` config:

```ts
// vite.config.ts
export default defineConfig({
  base: 'https://cdn.goldencoffee.com/',  // CDN URL
})
```

### Security Headers

```nginx
# Nginx security headers
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
```
