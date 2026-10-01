# NourDoc — Ambient Clinical Intelligence Web Platform

> **AI-Assisted Clinical Documentation. Enterprise-Scale Processing. Flexible Deployment.**  
> *"Listen to the Patient. Let AI Handle the Paperwork."*

---

## 1. Project Overview & Architecture

NourDoc is a responsive, accessible, high-performance web platform built for healthcare professionals, clinical operations leads, hospital administrators, and enterprise integrators.

### Tech Stack
- **Framework & Build**: Vite 6 + React 19 + TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 with design tokens mapped from `src/theme.js`
- **Routing**: React Router v7 (Declarative SPA mode with lazy loading & deep-link fallbacks)
- **UI Animation**: Motion for React (`motion/react`) for UI interactions and modal transitions
- **Complex Diagram Animations**: GSAP 3.15 + `@gsap/react` for scroll-triggered pipelines and node graphs
- **Forms & Validation**: React Hook Form + Zod (`@hookform/resolvers/zod`)
- **Iconography**: Lucide React (Unified icon family)

---

## 2. Directory Structure

```text
nourdoc-website/
├── public/
│   ├── favicon.svg              # Brand SVG favicon
│   ├── robots.txt               # Search crawler directives
│   ├── sitemap.xml              # XML Sitemap covering all 10 routes
│   ├── _redirects               # SPA routing fallback for Netlify/Cloudflare
│   ├── .htaccess                # SPA routing fallback for Apache/cPanel
│   └── 404.html                 # Fallback for static hosting providers
├── reference/
│   ├── NourDoc - Website Textual Content V1.0.pdf          (24 pages source)
│   ├── NourDoc - Visual Recommendations for the Website V1.0.pdf (21 pages source)
│   ├── Nourdoc - Logo(1).png                               (Brand logo source)
│   ├── source_extract_textual_content.md                   (Full verified extract)
│   └── source_extract_visual_recommendations.md            (Full verified extract)
├── src/
│   ├── assets/                  # Static assets (logo.png, etc.)
│   ├── components/
│   │   ├── common/              # Button, Badge, Card, SectionHeading
│   │   ├── diagrams/            # ProcessPipeline, Enterprise1MStat, ArchitectureHub, EcosystemMap
│   │   ├── forms/               # ContactForm (RHF + Zod + PHP/Resend delivery)
│   │   ├── layout/              # Header, Footer, Layout
│   │   └── sections/            # Hero, CapabilitiesGrid, PricingTierGrid, GlobalCTA
│   ├── layouts/                 # Layout export layer (Layout, Header, Footer)
│   ├── lib/
│   │   ├── schema.ts            # Zod validation schemas for forms and data.json
│   │   └── theme.ts             # Typed theme helpers
│   ├── pages/                   # 10 Route Components
│   │   ├── HomePage.tsx
│   │   ├── WhyNourDocPage.tsx
│   │   ├── ProductPage.tsx
│   │   ├── BenefitsPage.tsx
│   │   ├── SecurityPage.tsx
│   │   ├── SubscriptionPage.tsx
│   │   ├── MedicalCodingPage.tsx
│   │   ├── IntegrationsPage.tsx
│   │   ├── PartnersPage.tsx
│   │   └── AboutContactPage.tsx
│   ├── styles/
│   │   └── index.css            # Tailwind CSS v4 configuration and core styles
│   ├── types/
│   │   ├── content.ts           # Strict TypeScript interfaces for content
│   │   └── forms.ts             # Form type definitions
│   ├── App.tsx                  # Main router configuration with lazy loading
│   ├── data.json                # Single Source of Truth for all copy, routes & emails
│   ├── main.tsx                 # React DOM mount
│   └── theme.js                 # Single Source of Truth for Design Tokens (JSDoc typed)
├── index.html                   # HTML5 Entry point
├── package.json                 # Scripts and dependencies
├── tsconfig.json                # TypeScript root configuration
└── vite.config.ts               # Vite build and Tailwind integration
```

---

## 3. Single Source of Truth (SSOT) Rules

### 1. Design Tokens: `src/theme.js`
- **Colors**:
  - Primary Deep Jade: `#286252` (Hover: `#1F4E42`, Dark: `#183B33`, Light: `#E8F2EF`)
  - Secondary Jade: `#6F9C90` (Medium: `#3D7566`, Light: `#EDF5F2`)
  - Deep Jade Contrast / Footer: `#183B33` (Cards: translucent white overlays)
- **Typography**: Sans (`Plus Jakarta Sans`, `Inter`, sans-serif) & Mono (`JetBrains Mono`, monospace)
- **Motion Tokens**: Durations, spring parameters, and standard bezier curves (`[0.16, 1, 0.3, 1]`)
- **Rule**: Never hardcode arbitrary hex codes in components; consume Tailwind utility variables or `src/theme.js`.

### 2. Website Content & Copy: `src/data.json`
- All copy across all 10 pages, headings, paragraph text, bullet points, navigation items, pricing cards, and email directory are housed in `src/data.json`.
- Components read directly from `data.json` without duplicating text strings in JSX.
- **Rule**: When updating website text, update `src/data.json`. The schema is enforced and validated in `src/lib/schema.ts`.

---

## 4. Key Owner Decisions & Destination Protocols

1. **Approved Google Play Store Destination**:
   - URL: `https://play.google.com/store/apps/details?id=com.m3hive.medicalai&pli=1`
   - Connected directly to all `[ TRY NOURDOC FREE ]` and `[ TRY FREE ]` buttons. No fake download drawers or mock modals.
2. **Book a Demo Routing Protocol**:
   - Destination: `/about-contact?intent=bookDemo&topic=Other`
   - Pre-selects `"Other"` among the 9 source topics (the source PDF contains no "Book a Demo" topic).
   - Displays direct Sales email fallback (`hello@nour-doc.com`).
   - Never claims a demo/meeting has been booked.
3. **Contact Form 9 Discussion Topics (Exact Source Fact)**:
   - `Try NourDoc`
   - `Subscription`
   - `Enterprise Deployment`
   - `Medical Coding & Billing`
   - `Batch Processing`
   - `EHR / EMR / HIMS Integration`
   - `Research Collaboration`
   - `Partnership`
   - `Other`
4. **Official Contact Emails**:
   - **Sales**: `hello@nour-doc.com`
   - **Support**: `support@nour-doc.com`
   - **Partnerships**: `hello@nour-doc.com`
   - **Investors**: `hello@nour-doc.com`
5. **Form Delivery Protocol**:
   - The browser posts validated form data to `/deployment/contact.php`.
   - The PHP endpoint sends through Resend from `website@nour-doc.com` to `hello@nour-doc.com`.
   - The visitor's validated email is sent as `Reply-To`; the Resend API key is never exposed to the browser.
   - If cPanel configuration is missing or Resend rejects the request, the form shows an error and the official fallback email (`hello@nour-doc.com`).
6. **1M+ Encounters Architecture Claim**:
   - Verbatim wording preserved: `"NourDoc's platform architecture is designed to entertain 1+ million clinical encounters per day in appropriately configured enterprise environments."`
   - Flagged `"entertain"` for owner editorial review while keeping qualification strictly intact.

---

## 5. SEO Architecture Limitation & Prerendering Recommendation

### Current Architecture Limitation
This application is configured as a high-performance **Vite Single Page Application (SPA)**.
- **Client-Side Rendering (CSR)**: The server serves a single `index.html` shell. Route components, titles, and meta descriptions are injected dynamically on the client via React Router and TypeScript.
- **Impact on Search & Social Bots**:
  - Major search engines (such as Googlebot) execute JavaScript and can index the pages, but indexing may suffer rendering latency.
  - Social platform scrapers (LinkedIn Post Inspector, Twitter/X Card Validator, WhatsApp preview, Slack unfurlers, Facebook crawler) **do not** execute JavaScript and will only see the default root `index.html` meta tags.

### Production Recommendation
If multi-route organic search rankings and dynamic per-route OpenGraph cards are primary growth objectives:
1. **Prerendering Plugin**: Integrate `vite-plugin-prerender` or `prerender-spa-plugin` during the build step to emit 10 static HTML files into `dist/` (e.g. `dist/index.html`, `dist/why-nourdoc/index.html`, etc.).
2. **Edge / Hybrid SSR**: Deploy on Cloudflare Workers / Netlify Edge with edge-side OpenGraph injection or migrate the routing layer to Next.js (App Router) / Astro if server rendering is mandated.

---

## 6. Deployment Configuration and Test Boundaries

Copy `.env.example` for public build settings only. Copy `deployment/config.example.php` to `/home/nourdoc/nourdoc-config.php` on cPanel and replace the placeholders. Preserve this existing file during website updates; keep it outside `public_html`, Git, and `dist`.

The verified public origin is `https://nour-doc.com`. The prerender script uses `PUBLIC_SITE_URL` or `VITE_PUBLIC_SITE_URL`, with that domain as its production fallback. It writes the same domain into canonical tags, Open Graph/Twitter URLs, `sitemap.xml`, and `robots.txt`.

Mocked/local checks that do not send email:

```bash
npm run typecheck
npm run build
```

The PHP syntax check is also local-only when PHP is installed:

```bash
php -l deployment/contact.php
php -l deployment/config.example.php
```

Live credential-dependent verification is not run from this repository: submit a real form after configuring `/home/nourdoc/nourdoc-config.php` in cPanel and confirm receipt at `hello@nour-doc.com`, with the visitor address shown as Reply-To. Do not put live Resend or Google Cloud keys in `.env`, frontend code, `public_html`, or Git.

reCAPTCHA Enterprise is implemented on both sides. The frontend loads `enterprise.js`, calls `grecaptcha.enterprise.execute` immediately before submission with the `contact_submit` action, and PHP verifies the token with Google Cloud `CreateAssessment`. PHP rejects provider errors, invalid `tokenProperties.valid`, unexpected hostnames, unexpected actions, and scores below `recaptcha_min_score`. Only `nour-doc.com` and `www.nour-doc.com` are allowed.

The private configuration must contain these exact fields: `resend_api_key`, `from_email`, `from_name`, `to_email`, `recaptcha_project_id`, `recaptcha_api_key`, `recaptcha_site_key`, `recaptcha_expected_action`, `recaptcha_min_score`, `allowed_hostnames`, `rate_limit_max_requests`, and `rate_limit_window_seconds`. Use `website@nour-doc.com` as `from_email`, `hello@nour-doc.com` as `to_email`, and `['nour-doc.com', 'www.nour-doc.com']` as `allowed_hostnames`.

`npm run build` copies only `deployment/contact.php` and the public `public/.htaccess` routing configuration into `dist/`. Upload the contents of `dist/` into `/home/nourdoc/public_html/`; do not delete or overwrite `/home/nourdoc/nourdoc-config.php`. Set `NOURDOC_CONFIG_PATH` only if the private file is stored elsewhere; otherwise the endpoint loads `dirname(__DIR__, 2) . '/nourdoc-config.php'`, which resolves to `/home/nourdoc/nourdoc-config.php` for `/home/nourdoc/public_html/deployment/contact.php`.

## 7. Development & Build Scripts

```bash
# Start local development server (with HMR)
npm run dev

# Run TypeScript type check
npm run typecheck

# Run linter
npm run lint

# Compile and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 8. Route Inventory & Status

| Route | Page Name | Status | Primary CTA Destination |
| :--- | :--- | :--- | :--- |
| `/` | Home | ✅ Complete | Google Play Store (`appUrl`) |
| `/why-nourdoc` | Why NourDoc | ✅ Complete | `/about-contact?intent=bookDemo&topic=Other` |
| `/product` | Product & Features | ✅ Complete | Google Play Store (`appUrl`) |
| `/benefits` | Benefits & Impact | ✅ Complete | `/subscription` & `/about-contact` |
| `/security-compliance` | Security & Compliance | ✅ Complete | `/about-contact?topic=Enterprise%20Deployment` |
| `/subscription` | Subscription & Pricing | ✅ Complete | Google Play Store & `/about-contact` |
| `/medical-coding-billing` | Medical Coding & Billing | ✅ Complete | `/about-contact?intent=bookDemo&topic=Other` |
| `/integrations-deployment` | Integrations & Deployment | ✅ Complete | `/about-contact?intent=bookDemo&topic=Other` |
| `/partners-collaborators` | Partners & Collaborators | ✅ Complete | `/about-contact?intent=bookDemo&topic=Other` |
| `/about-contact` | About & Contact | ✅ Complete | Direct Form + Email Fallbacks |

---

## 9. Open Inputs & Asset Verification

1. **iOS / App Store URL**: Currently pending owner provision. All app links route to the approved Google Play Store URL.
2. **Live Backend Form Configuration**: The Resend and Google Cloud settings belong in the private cPanel PHP configuration before live testing.
3. **Editorial Review**: Flagged the verb *"entertain"* in the 1M+ daily encounter claim for owner confirmation.
