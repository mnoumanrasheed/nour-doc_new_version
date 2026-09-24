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
│   │   ├── forms/               # ContactForm (RHF + Zod + Exact unconfigured alert)
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
  - Primary Brand Teal: `#507D88` (Hover: `#3F646D`, Dark: `#2C4950`, Light: `#EBF3F5`)
  - Secondary Light Teal: `#7AB1BF` (Hover: `#649CA9`, Light: `#F0F7F9`)
  - Dark Contrast / Footer: `#0F172A` (Cards: `#1E293B`)
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
   - Displays direct Sales email fallback (`hello@nur-doc.com`).
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
   - **Sales**: `hello@nur-doc.com`
   - **Support**: `support@nur-doc.com`
   - **Partnerships**: `hello@nur-doc.com`
   - **Investors**: `hello@nur-doc.com`
5. **Unconfigured Form Submission Protocol**:
   - If online form backend is not connected, the form renders:
     > *"Your message was not sent because form delivery is not configured."*
   - Displays official fallback email (`hello@nur-doc.com`). No false success toasts or claims of message dispatch.
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

## 6. Development & Build Scripts

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

## 7. Route Inventory & Status

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

## 8. Open Inputs & Asset Verification

1. **iOS / App Store URL**: Currently pending owner provision. All app links route to the approved Google Play Store URL.
2. **Live Backend Form API Endpoint**: When an API endpoint (e.g. Resend, SendGrid, AWS SES, or custom webhook) is provided, wire it into `src/components/forms/ContactForm.tsx`.
3. **Editorial Review**: Flagged the verb *"entertain"* in the 1M+ daily encounter claim for owner confirmation.
