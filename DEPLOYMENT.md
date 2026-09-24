# NourDoc — Deployment & Production Hosting Guide

This guide details how to build, test, and deploy the NourDoc HealthTech platform across modern hosting environments with full static pre-rendering (SSG), SPA deep-linking, and SEO metadata.

---

## 1. Build & Static Pre-Rendering Process

The application is built using Vite, TypeScript, and Tailwind CSS. During `npm run build`, an automated post-build script ([`scripts/prerender.js`](file:///d:/nourdoc-website/scripts/prerender.js)) generates dedicated static HTML directories for each route inside `dist/`.

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript type check
npm run typecheck

# 3. Run linter
npm run lint

# 4. Build and prerender static HTML for all 10 routes
npm run build
```

### Build Outputs in `dist/`
```text
dist/
├── index.html                           # Home route (/) with pre-rendered SEO & metadata
├── why-nourdoc/index.html               # /why-nourdoc with canonical & OG tags
├── product/index.html                   # /product
├── benefits/index.html                  # /benefits
├── security-compliance/index.html       # /security-compliance
├── subscription/index.html              # /subscription
├── medical-coding-billing/index.html    # /medical-coding-billing
├── integrations-deployment/index.html   # /integrations-deployment
├── partners-collaborators/index.html    # /partners-collaborators
├── about-contact/index.html             # /about-contact
├── sitemap.xml                          # Canonical XML sitemap
├── robots.txt                           # Robots configuration referencing sitemap
├── _redirects                           # SPA deep-link rewrite rules
└── assets/                              # Hashed JS, CSS, SVG, and Logo PNG assets
```

---

## 2. Host Configuration & SPA Deep-Link Fallback

Because NourDoc uses client-side routing (`react-router-dom`) with pre-rendered static HTML routes, hosting providers must serve the static route if present, or fallback to `/index.html` for dynamic query parameters.

### Option A: Cloudflare Pages (Recommended)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Deep-linking**: Automatically handled by `public/_redirects` (`/* /index.html 200`).

### Option B: Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Configuration**: Uses the included `public/_redirects` file.

### Option C: Vercel
Create a `vercel.json` in the root directory:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option D: Nginx Server
```nginx
server {
    listen 80;
    server_name nur-doc.com www.nur-doc.com;
    root /var/www/nourdoc/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(?:css|js|png|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 3. SEO & Crawler Verification

Search engine bots (Googlebot, Bingbot, etc.) requesting any of the 10 routes receive:
1. **Unique Canonical URL**: `<link rel="canonical" href="https://nur-doc.com/[route]" />`
2. **Targeted Meta Description**: Factual, non-redundant description specific to each page.
3. **OpenGraph & Twitter Cards**: `og:title`, `og:description`, `og:url`, `og:site_name`.
4. **Crawlable Semantic Fallback**: `<noscript>` structure containing semantic `<h1>` and content summary for crawlers that do not execute JavaScript.
5. **Fast Client Hydration**: When opened in a browser with JavaScript enabled, React 19 mounts seamlessly.

---

## 4. Backend Form Delivery Integration (Pre-Launch Step)

The frontend form in [`src/components/forms/ContactForm.tsx`](file:///d:/nourdoc-website/src/components/forms/ContactForm.tsx) performs strict client-side validation on all 8 fields. 

To enable live email delivery:
1. Deploy a secure serverless function (e.g., Cloudflare Worker, AWS Lambda, or use Resend / Formspree / SendGrid).
2. Point the `onSubmit` handler to your HTTPS endpoint.
3. **Security Rule**: Never place email provider private API keys in client-side `VITE_` environment variables. All email dispatching and rate-limiting must happen on the backend serverless layer.
