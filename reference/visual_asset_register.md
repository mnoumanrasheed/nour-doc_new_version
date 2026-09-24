# NourDoc Visual Asset Register (All 10 Routes)

> **Source**: `reference/NourDoc - Visual Recommendations for the Website V1.0.pdf` (21 Physical Pages)  
> **Asset Status Definitions**:
> - **SUPPLIED**: Asset provided directly by the owner (`reference/Nourdoc - Logo(1).png`).
> - **LICENSED/APPROVED**: Commercially cleared or licensed assets with known provenance (None currently).
> - **MISSING**: Assets specified in the visual recommendations that require procurement or photography production.
>
> **Policy**: No scraping of unverified web images, no AI-generated fake staff/customer portraits, and no presentation of conceptual mockups as live certified product screenshots.

---

## 1. Global & Master Brand Assets

| Asset ID | Route / Scope | Visual Recommendation Description | Current Status | Recommended Production / Procurement Specs |
| :--- | :--- | :--- | :--- | :--- |
| `ASSET-GLOBAL-01` | Global Header & Footer | NourDoc Official Brand Logo (Symbol + Wordmark) | **SUPPLIED** | `reference/Nourdoc - Logo(1).png` (Losslessly cropped into `src/assets/logo.png`). |
| `ASSET-GLOBAL-02` | Global Favicon | Simplified Symbol Favicon (SVG/PNG) | **SUPPLIED / DERIVED** | `public/favicon.svg` (Teal circular mark with clinical waveform element). |
| `ASSET-GLOBAL-03` | Global Icons | Thin-line clinical and architectural SVG iconography | **APPROVED** | Lucide React (unified 1.5px / 2.0px stroke stroke library). |

---

## 2. Route-by-Route Photographic & Visual Inventory

### Route 1: Home (`/`)
- **Page Visual Intent**: Doctor engaged in authentic consultation with patient; ambient technology working unobtrusively in background.
- **Assets**:
  1. `ASSET-HOME-01` (Hero Photo): Doctor seated across from a patient in natural clinic lighting, listening intently without looking at a computer screen.
     - *Status*: **MISSING**
     - *Specs*: 16:9 or 4:3, high-resolution (min 1920×1080), warm neutral clinic lighting, natural diversity, genuine clinician attire (lab coat/scrubs), no fake holograms or superimposed floating robot graphics.
  2. `ASSET-HOME-02` (Android App UI Context): Mobile phone display showcasing ambient recording active state.
     - *Status*: **MISSING** (Conceptual code-native UI frame used in development).
     - *Specs*: Clean device screenshot or SVG UI mockup labeled as "Mobile Ambient Interface".

### Route 2: Why NourDoc (`/why-nourdoc`)
- **Page Visual Intent**: Contrast between heavy administrative computer burden vs. human-centric patient care.
- **Assets**:
  1. `ASSET-WHY-01` (Split Comparison Left): Clinician slumped over desk late at night typing notes into legacy EHR.
     - *Status*: **MISSING**
     - *Specs*: 4:3 aspect ratio, cool/desaturated lighting, authentic paperwork/monitor clutter.
  2. `ASSET-WHY-02` (Split Comparison Right): Clinician making warm eye contact with smiling patient while holding a tablet.
     - *Status*: **MISSING**
     - *Specs*: 4:3 aspect ratio, bright natural clinic lighting, warm teal/slate tones.

### Route 3: Product & Features (`/product`)
- **Page Visual Intent**: Clinical documentation dashboard and multichannel input capture.
- **Assets**:
  1. `ASSET-PROD-01` (Feature Hero Image): Clean desktop/tablet UI showing structured SOAP note review prior to EHR dispatch.
     - *Status*: **MISSING**
     - *Specs*: 16:9 composition, authentic clinical SOAP fields (Subjective, Objective, Assessment, Plan), clearly labeled as *Conceptual Interface Preview*.

### Route 4: Benefits & Impact (`/benefits`)
- **Page Visual Intent**: 4-moment healthcare grid showcasing human connection, team efficiency, and enterprise scale.
- **Assets**:
  1. `ASSET-BEN-01` (Clinician Focus): Physician conducting examination with full attention on patient.
     - *Status*: **MISSING**
     - *Specs*: 1:1 or 4:3 square portrait, natural candid style.
  2. `ASSET-BEN-02` (Practice / Team Efficiency): Medical practice manager and clinician reviewing daily clinic schedule.
     - *Status*: **MISSING**
     - *Specs*: 1:1 or 4:3 square portrait.
  3. `ASSET-BEN-03` (Hospital Leadership): Chief Medical Officer / clinical informatics director in hospital corridor.
     - *Status*: **MISSING**
     - *Specs*: 1:1 or 4:3 square portrait.
  4. `ASSET-BEN-04` (Medical Coding Specialist): Certified professional coder reviewing claim-ready ICD-10 batches.
     - *Status*: **MISSING**
     - *Specs*: 1:1 or 4:3 square portrait.

### Route 5: Security & Compliance (`/security-compliance`)
- **Page Visual Intent**: Architectural diagrams and trust symbols.
- **Assets**:
  1. `ASSET-SEC-01` (Security Architecture Diagram): Hub showing encryption in transit (TLS 1.3), encryption at rest (AES-256), on-premises air-gapped boundary, and SOC2/HIPAA compliance nodes.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE SVG/HTML** (`src/components/diagrams/ArchitectureHub.tsx`).

### Route 6: Subscription & Pricing (`/subscription`)
- **Page Visual Intent**: Tiered hierarchy cards and growth trajectory visual.
- **Assets**:
  1. `ASSET-SUB-01` (Tier Visualization): 4 distinct tier cards (Free, Starter, Professional, Enterprise) with progressive teal highlights.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE COMPONENT** (`src/components/sections/PricingTierGrid.tsx`).

### Route 7: Medical Coding & Billing (`/medical-coding-billing`)
- **Page Visual Intent**: 1M+ throughput stat and 6-stage batch pipeline.
- **Assets**:
  1. `ASSET-MED-01` (1M+ Node Stream Canvas): Architectural stat display with real-time particle/node stream.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE GSAP COMPONENT** (`src/components/diagrams/Enterprise1MStat.tsx`).
  2. `ASSET-MED-02` (6-Stage Pipeline Graphic): Multi-format audio/text batch transformation flow into claim-ready ICD-10 & CPT.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE GSAP COMPONENT** (`src/components/diagrams/ProcessPipeline.tsx`).

### Route 8: Integrations & Deployment (`/integrations-deployment`)
- **Page Visual Intent**: Central platform hub connected to major EHR/EMR protocols (HL7, FHIR, REST, JSON).
- **Assets**:
  1. `ASSET-INT-01` (Interoperability Hub): Central NourDoc engine linked to EHR, EMR, HIMS, Billing, and Cloud/On-Prem storage.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE COMPONENT** (`src/components/diagrams/ArchitectureHub.tsx`).

### Route 9: Partners & Collaborators (`/partners-collaborators`)
- **Page Visual Intent**: World map linking Canada, Pakistan (M3 Hive), Finland, and global clinical networks.
- **Assets**:
  1. `ASSET-PART-01` (Global Map Visual): Clean vector map with connected node arcs and country data badges.
     - *Status*: **IMPLEMENTED AS CODE-NATIVE GSAP COMPONENT** (`src/components/diagrams/GlobalCollabMap.tsx`).

### Route 10: About & Contact (`/about-contact`)
- **Page Visual Intent**: Human-centered healthcare leadership and international collaboration.
- **Assets**:
  1. `ASSET-ABOUT-01` (Leadership / Collaboration Photography): Authentic clinical co-design session or doctor consultation.
     - *Status*: **MISSING**
     - *Specs*: 16:9, authentic clinical context, no generic corporate stock cliches.

---

## 3. Real Photography Production Guidelines

When procuring or shooting photography for NourDoc:
1. **Clinical Authenticity**: All clinicians must wear realistic, appropriate attire. Equipment, stethoscopes, and charts must look genuine.
2. **Patient Interaction Focus**: The primary subject is the **human dialogue**. Screens and devices should be secondary or background elements.
3. **Lighting & Color Palette**: Natural ambient lighting with cool gray, clean white, and soft teal accents matching `#507D88` and `#7AB1BF`. Avoid aggressive saturated blues or unnatural warm glows.
4. **No Artificial Intelligence Stereotypes**: Strictly avoid robot heads, floating wireframe holograms, glowing neural brain graphics, or generic cyborg imagery.
