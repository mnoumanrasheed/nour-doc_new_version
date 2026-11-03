// src/data/pricingConfig.ts
/**
 * NourDoc Commercial Model and Pricing Configuration
 * Specification Version 1.0 (03 November 2026)
 *
 * IMPORTANT PRICING CONTROL:
 * All commercial values are served from this configuration layer.
 * Frontend does not fabricate unapproved recurring fees or FX conversions.
 */

export type MarketCode = 'PK' | 'INTL';
export type BillingCycle = 'monthly' | 'annual';

export interface PlanFeature {
  name: string;
  included: boolean;
  note?: string;
}

export interface PlanConfig {
  plan_id: string;
  name: string;
  badge?: string;
  audience: string;
  included_minutes: number;
  included_minutes_label: string;
  market: MarketCode;
  currency: string;
  billing_cycle: BillingCycle;
  subscription_fee: number | null; // null indicates pending commercial approval
  subscription_fee_display: string;
  reference_price_note: string;
  overage_rate_per_minute: number | null;
  overage_display: string;
  rollover_enabled: boolean;
  rollover_display: string;
  is_recommended?: boolean;
  is_active: boolean;
  effective_from: string;
  cta: {
    label: string;
    action: 'trial' | 'checkout' | 'enterprise';
    href?: string;
  };
  key_inclusions: string[];
}

export interface EnterpriseTier {
  id: string;
  name: string;
  capacity_minutes: number;
  capacity_label: string;
  commercial_treatment: string;
  description: string;
  suitable_for: string;
}

export interface TrialOffer {
  id: string;
  title: string;
  allowance_minutes: number;
  allowance_label: string;
  price_display: {
    PK: string;
    INTL: string;
  };
  card_required: boolean;
  status: string;
  description: string;
  eligibility: string;
  key_points: string[];
}

export interface FeatureMatrixRow {
  capability: string;
  description: string;
  free: string;
  starter: string;
  growth: string;
  professional: string;
  enterprise: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'metering' | 'trials' | 'billing' | 'features' | 'security';
}

export interface PaymentGateway {
  id: string;
  name: string;
  type: string;
  markets: MarketCode[];
  iconName: string;
  status: 'active' | 'subject_to_activation';
  description: string;
}

export interface MarketCatalogue {
  market: MarketCode;
  marketName: string;
  currency: string;
  currencySymbol: string;
  plans: PlanConfig[];
}

export const TRIAL_OFFERS: TrialOffer[] = [
  {
    id: 'free_trial',
    title: 'Free Trial',
    allowance_minutes: 30,
    allowance_label: '30 processing minutes',
    price_display: {
      PK: 'Free (PKR 0)',
      INTL: 'Free ($0)',
    },
    card_required: false,
    status: 'Proposed UX/commercial recommendation; requires approval.',
    description: 'Immediate point-of-care ambient documentation testing for clinicians evaluating NourDoc.',
    eligibility: 'New clinician accounts. Zero payment details required. No auto-converting recurring charges.',
    key_points: [
      '30 processing minutes included at zero cost',
      'No credit card or payment information required',
      'Ambient audio capture & instant SOAP drafting',
      'Document export to clipboard, PDF & standard text',
      'Transparent upgrade path with preserved clinical data',
    ],
  },
  {
    id: 'extended_trial',
    title: 'Paid Extended Trial',
    allowance_minutes: 100,
    allowance_label: '100 processing minutes',
    price_display: {
      PK: 'PKR equivalent of USD 9 (Subject to local taxes & gateway confirmation)',
      INTL: 'USD 9 one-time',
    },
    card_required: true,
    status: 'Existing trial commercial reference; confirm Pakistan equivalent, taxes and payment handling.',
    description: 'Extended evaluation package designed for busy clinicians who need multiple days of full clinic shifts.',
    eligibility: 'Clinicians desiring a longer multi-shift evaluation before committing to a recurring subscription.',
    key_points: [
      '100 processing minutes for thorough multi-day clinical trials',
      'One-time payment without involuntary auto-renewal',
      'Covers up to 12–15 average outpatient consultations',
      'Complete SOAP note structuring & ICD-10 exploration',
      'Easily convertible into Starter, Growth, or Professional subscriptions',
    ],
  },
];

export const ENTERPRISE_CAPACITY_TIERS: EnterpriseTier[] = [
  {
    id: 'silver',
    name: 'Silver Capacity',
    capacity_minutes: 50000,
    capacity_label: '50,000 minutes / month',
    commercial_treatment: 'Custom quotation',
    description: 'Tailored for multi-specialty regional clinics, ambulatory surgical centers, and outpatient networks.',
    suitable_for: '10–25 clinicians or ~5,000 monthly patient consultations',
  },
  {
    id: 'gold',
    name: 'Gold Capacity',
    capacity_minutes: 250000,
    capacity_label: '250,000 minutes / month',
    commercial_treatment: 'Custom quotation',
    description: 'Designed for acute-care hospitals, large medical centers, and regional healthcare directorates.',
    suitable_for: '50–120 clinicians or ~25,000 monthly patient consultations',
  },
  {
    id: 'enterprise_high_volume',
    name: 'Enterprise 1M+',
    capacity_minutes: 1000000,
    capacity_label: '1,000,000+ minutes / month',
    commercial_treatment: 'Negotiated agreement',
    description: 'Institutional-scale deployment for nationwide healthcare chains, hospital networks, and batch RCM pipelines.',
    suitable_for: 'Hospital networks, 250+ clinicians, or high-throughput batch operations',
  },
];

export const PAKISTAN_PLANS: PlanConfig[] = [
  {
    plan_id: 'free',
    name: 'Free Trial',
    badge: 'Experience NourDoc',
    audience: 'Clinicians evaluating NourDoc',
    included_minutes: 30,
    included_minutes_label: '30 processing minutes',
    market: 'PK',
    currency: 'PKR',
    billing_cycle: 'monthly',
    subscription_fee: 0,
    subscription_fee_display: 'PKR 0',
    reference_price_note: 'Approved trial allowance; proposed 30 min (No card required)',
    overage_rate_per_minute: null,
    overage_display: 'No overage (Hard stop upon limit)',
    rollover_enabled: false,
    rollover_display: '30-day evaluation validity',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Start free trial',
      action: 'trial',
    },
    key_inclusions: [
      '30 billable processing minutes',
      'Ambient clinical speech transcription',
      'Instant structured SOAP note generation',
      'Clinical visit summaries',
      'Android mobile application access',
      'Direct copy & export to clipboard/PDF',
    ],
  },
  {
    plan_id: 'starter',
    name: 'Starter',
    badge: 'Individual Practice',
    audience: 'Individual clinicians beginning with NourDoc',
    included_minutes: 300,
    included_minutes_label: '300 minutes / month',
    market: 'PK',
    currency: 'PKR',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'PKR 5,817',
    reference_price_note: 'Reference prepaid pack price at PKR 19.39/min; convert to monthly subscription only after commercial approval.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Starter',
      action: 'checkout',
    },
    key_inclusions: [
      '300 processing minutes / month included',
      'Standard ambient AI transcription',
      'Comprehensive SOAP note generation',
      'Patient encounter summaries',
      'Basic usage & minutes dashboard',
      'Standard support via email & helpdesk',
    ],
  },
  {
    plan_id: 'growth',
    name: 'Growth',
    badge: 'Recommended',
    audience: 'Active clinicians and growing practices',
    included_minutes: 1500,
    included_minutes_label: '1,500 minutes / month',
    market: 'PK',
    currency: 'PKR',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'PKR 29,085',
    reference_price_note: 'Reference prepaid pack price at PKR 19.39/min; monthly recurring fee subject to final approval.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: true,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Growth',
      action: 'checkout',
    },
    key_inclusions: [
      '1,500 processing minutes / month included',
      'High-accuracy multi-accent transcription',
      'Advanced SOAP note generation & visit summaries',
      'ICD-10 clinical code suggestions (Subject to verification)',
      'Standard usage metering dashboard',
      'Multi-clinician team management options (Subject to approval)',
      'Standard clinical support',
    ],
  },
  {
    plan_id: 'professional',
    name: 'Professional',
    badge: 'High Volume',
    audience: 'High-volume clinicians and medical practices',
    included_minutes: 5000,
    included_minutes_label: '5,000 minutes / month',
    market: 'PK',
    currency: 'PKR',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'PKR 96,950',
    reference_price_note: 'Reference prepaid pack price at PKR 19.39/min; monthly subscription terms pending commercial sign-off.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Professional',
      action: 'checkout',
    },
    key_inclusions: [
      '5,000 processing minutes / month included',
      'Priority processing queue for fast turnaround',
      'Full SOAP, ICD-10 suggestions & CPT workflow options',
      'Practice-wide team management & admin controls',
      'Advanced usage analytics & audit logging',
      'Priority clinician support channel',
    ],
  },
  {
    plan_id: 'enterprise',
    name: 'Enterprise',
    badge: 'Hospitals & Networks',
    audience: 'Hospitals, networks and multi-site organizations',
    included_minutes: 50000,
    included_minutes_label: '50,000 to 1,000,000+ / month',
    market: 'PK',
    currency: 'PKR',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'Custom Quotation',
    reference_price_note: 'Capacity commitment starting from 50,000 minutes; custom negotiated SLA and contract.',
    overage_rate_per_minute: null,
    overage_display: 'Contractual agreed overage rate',
    rollover_enabled: false,
    rollover_display: 'Contractual commitment schedule',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Request enterprise proposal',
      action: 'enterprise',
    },
    key_inclusions: [
      '50,000 to 1,000,000+ minutes capacity commitments',
      'Custom EHR / EMR / HIMS integration pipelines',
      'Central administration & role-based access control',
      'Dedicated deployment (Cloud, Hybrid, or On-Premises)',
      'Contractual SLA & designated technical account manager',
      'Batch processing capability & custom data retention',
    ],
  },
];

export const INTERNATIONAL_PLANS: PlanConfig[] = [
  {
    plan_id: 'free',
    name: 'Free Trial',
    badge: 'Experience NourDoc',
    audience: 'Clinicians evaluating NourDoc',
    included_minutes: 30,
    included_minutes_label: '30 processing minutes',
    market: 'INTL',
    currency: 'USD',
    billing_cycle: 'monthly',
    subscription_fee: 0,
    subscription_fee_display: '$0',
    reference_price_note: 'Approved trial allowance; proposed 30 min (No card required)',
    overage_rate_per_minute: null,
    overage_display: 'No overage (Hard stop upon limit)',
    rollover_enabled: false,
    rollover_display: '30-day evaluation validity',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Start free trial',
      action: 'trial',
    },
    key_inclusions: [
      '30 billable processing minutes',
      'Ambient clinical speech transcription',
      'Instant structured SOAP note generation',
      'Clinical visit summaries',
      'Mobile & web application access',
      'Direct copy & export to clipboard/PDF',
    ],
  },
  {
    plan_id: 'starter',
    name: 'Starter',
    badge: 'Individual Practice',
    audience: 'Individual clinicians beginning with NourDoc',
    included_minutes: 300,
    included_minutes_label: '300 minutes / month',
    market: 'INTL',
    currency: 'USD',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'USD 15–29',
    reference_price_note: 'Planning range only; validate by region. Recurring monthly fee subject to commercial approval.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Starter',
      action: 'checkout',
    },
    key_inclusions: [
      '300 processing minutes / month included',
      'Standard ambient AI transcription',
      'Comprehensive SOAP note generation',
      'Patient encounter summaries',
      'Basic usage & minutes dashboard',
      'Standard support via email & helpdesk',
    ],
  },
  {
    plan_id: 'growth',
    name: 'Growth',
    badge: 'Recommended',
    audience: 'Active clinicians and growing practices',
    included_minutes: 1500,
    included_minutes_label: '1,500 minutes / month',
    market: 'INTL',
    currency: 'USD',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'USD 79–149',
    reference_price_note: 'Planning range only; validate by region. Recurring monthly fee subject to commercial approval.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: true,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Growth',
      action: 'checkout',
    },
    key_inclusions: [
      '1,500 processing minutes / month included',
      'High-accuracy multi-accent transcription',
      'Advanced SOAP note generation & visit summaries',
      'ICD-10 clinical code suggestions (Subject to verification)',
      'Standard usage metering dashboard',
      'Multi-clinician team management options (Subject to approval)',
      'Standard clinical support',
    ],
  },
  {
    plan_id: 'professional',
    name: 'Professional',
    badge: 'High Volume',
    audience: 'High-volume clinicians and medical practices',
    included_minutes: 5000,
    included_minutes_label: '5,000 minutes / month',
    market: 'INTL',
    currency: 'USD',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'USD 249–599',
    reference_price_note: 'Planning range only; validate by region. Recurring monthly fee subject to commercial approval.',
    overage_rate_per_minute: null,
    overage_display: 'Requires commercial confirmation',
    rollover_enabled: false,
    rollover_display: 'Resets monthly (No rollover)',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Choose Professional',
      action: 'checkout',
    },
    key_inclusions: [
      '5,000 processing minutes / month included',
      'Priority processing queue for fast turnaround',
      'Full SOAP, ICD-10 suggestions & CPT workflow options',
      'Practice-wide team management & admin controls',
      'Advanced usage analytics & audit logging',
      'Priority clinician support channel',
    ],
  },
  {
    plan_id: 'enterprise',
    name: 'Enterprise',
    badge: 'Hospitals & Networks',
    audience: 'Hospitals, networks and multi-site organizations',
    included_minutes: 50000,
    included_minutes_label: '50,000 to 1,000,000+ / month',
    market: 'INTL',
    currency: 'USD',
    billing_cycle: 'monthly',
    subscription_fee: null,
    subscription_fee_display: 'Custom Quotation',
    reference_price_note: 'Capacity commitment starting from 50,000 minutes; custom negotiated SLA and contract.',
    overage_rate_per_minute: null,
    overage_display: 'Contractual agreed overage rate',
    rollover_enabled: false,
    rollover_display: 'Contractual commitment schedule',
    is_recommended: false,
    is_active: true,
    effective_from: '2026-11-03',
    cta: {
      label: 'Request enterprise proposal',
      action: 'enterprise',
    },
    key_inclusions: [
      '50,000 to 1,000,000+ minutes capacity commitments',
      'Custom EHR / EMR / HIMS integration pipelines',
      'Central administration & role-based access control',
      'Dedicated deployment (Cloud, Hybrid, or On-Premises)',
      'Contractual SLA & designated technical account manager',
      'Batch processing capability & custom data retention',
    ],
  },
];

export const FEATURE_COMPARISON_MATRIX: FeatureMatrixRow[] = [
  {
    capability: 'AI transcription',
    description: 'Ambient voice-to-text processing tuned for clinical terminology and doctor-patient dialogue',
    free: 'Limited',
    starter: 'Yes',
    growth: 'Yes',
    professional: 'Yes',
    enterprise: 'Yes',
  },
  {
    capability: 'SOAP note generation',
    description: 'Automated synthesis of Subjective, Objective, Assessment, and Plan structured records',
    free: 'Limited',
    starter: 'Yes',
    growth: 'Yes',
    professional: 'Yes',
    enterprise: 'Yes',
  },
  {
    capability: 'Visit summaries',
    description: 'Concise encounter summaries for fast chart reviews and handovers',
    free: 'Limited',
    starter: 'Yes',
    growth: 'Yes',
    professional: 'Yes',
    enterprise: 'Yes',
  },
  {
    capability: 'ICD-10 suggestions',
    description: 'Contextual diagnosis coding assistance surfaced during documentation',
    free: 'Confirm',
    starter: 'Confirm',
    growth: 'Yes*',
    professional: 'Yes*',
    enterprise: 'Yes*',
  },
  {
    capability: 'CPT suggestions',
    description: 'Procedural code alignment support for billing verification',
    free: 'No / confirm',
    starter: 'No / confirm',
    growth: 'Optional*',
    professional: 'Optional*',
    enterprise: 'Optional*',
  },
  {
    capability: 'Usage dashboard',
    description: 'Live visibility of consumed processing minutes and remaining monthly balance',
    free: 'Basic',
    starter: 'Basic',
    growth: 'Standard',
    professional: 'Advanced',
    enterprise: 'Advanced',
  },
  {
    capability: 'Team management',
    description: 'Multi-clinician seat provisioning, centralized licensing and member invites',
    free: 'No',
    starter: 'No',
    growth: 'Confirm',
    professional: 'Yes*',
    enterprise: 'Yes*',
  },
  {
    capability: 'Central administration',
    description: 'Organizational policy enforcement, practice-level reporting and consolidated billing',
    free: 'No',
    starter: 'No',
    growth: 'No',
    professional: 'Confirm',
    enterprise: 'Yes*',
  },
  {
    capability: 'Integrations',
    description: 'HL7, FHIR, REST API, and native EMR / EHR / HIMS pipeline integration',
    free: 'No',
    starter: 'No',
    growth: 'Optional*',
    professional: 'Optional*',
    enterprise: 'Custom',
  },
  {
    capability: 'Dedicated deployment',
    description: 'Isolated virtual private cloud or on-premises server infrastructure',
    free: 'No',
    starter: 'No',
    growth: 'No',
    professional: 'No',
    enterprise: 'Optional',
  },
  {
    capability: 'SLA / dedicated support',
    description: 'Guaranteed response times, priority incident resolution and designated support lead',
    free: 'No',
    starter: 'Standard support*',
    growth: 'Standard support*',
    professional: 'Priority option*',
    enterprise: 'Contractual',
  },
];

export const PAYMENT_GATEWAYS: PaymentGateway[] = [
  {
    id: 'cards_pk',
    name: 'Debit & Credit Cards',
    type: 'Visa / Mastercard',
    markets: ['PK', 'INTL'],
    iconName: 'CreditCard',
    status: 'active',
    description: 'Standard chip and 3D Secure credit and debit card processing.',
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    type: 'Mobile Wallet & Voucher',
    markets: ['PK'],
    iconName: 'Smartphone',
    status: 'subject_to_activation',
    description: 'Direct mobile wallet payment for Pakistan clinicians subject to live gateway activation.',
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    type: 'Mobile Wallet & OTC',
    markets: ['PK'],
    iconName: 'Wallet',
    status: 'subject_to_activation',
    description: 'Convenient mobile wallet and over-the-counter payment option in Pakistan.',
  },
  {
    id: 'bank_transfer',
    name: 'Direct Bank Transfer / IBFT',
    type: 'Institutional Invoice',
    markets: ['PK', 'INTL'],
    iconName: 'Building',
    status: 'active',
    description: 'Direct corporate wire/IBFT transfer for annual clinic and institutional enterprise accounts.',
  },
  {
    id: 'intl_wallets',
    name: 'Apple Pay / Google Pay',
    type: 'Digital Wallets',
    markets: ['INTL'],
    iconName: 'CheckCircle',
    status: 'active',
    description: 'One-touch encrypted digital checkout for international clinicians.',
  },
];

export const PRICING_FAQS: FAQItem[] = [
  {
    id: 'billable_minutes',
    category: 'metering',
    question: 'What is a billable processing minute and how is it metered?',
    answer:
      'A billable processing minute represents the actual elapsed duration of recorded audio processed by the NourDoc AI transcription and SOAP drafting engine. Metering starts upon speech processing initiation and stops when processing completes. Audio capture retries caused by network dropouts or failed system runs are not billed. Pause intervals are excluded from metering, and time is tallied with standard documented increments.',
  },
  {
    id: 'trial_eligibility',
    category: 'trials',
    question: 'What are the trial offers and do I need a credit card for the free trial?',
    answer:
      'NourDoc offers a Free Trial providing 30 processing minutes so clinicians can experience the ambient documentation workflow without any commitment. You do NOT need a credit card to activate the Free Trial; a user is never silently charged for a free trial. For clinicians requiring more extensive multi-shift evaluation, an Extended Trial of 100 processing minutes is available for USD 9 (with local Pakistan equivalent pricing confirming applicable taxes and payment handling).',
  },
  {
    id: 'included_minutes',
    category: 'metering',
    question: 'How do included monthly minutes work and when do they reset?',
    answer:
      'Each subscription plan tier includes a defined monthly minute allowance: 300 minutes for Starter, 1,500 minutes for Growth, and 5,000 minutes for Professional (with custom capacity from 50,000 to 1,000,000+ for Enterprise). Included minutes become available at the start of each billing cycle and reset at the beginning of the next cycle.',
  },
  {
    id: 'overage_behavior',
    category: 'billing',
    question: 'What happens if I exceed my included processing minutes (overage)?',
    answer:
      'NourDoc is designed to eliminate surprise bills. When your usage approaches capacity, configurable automated warnings trigger at 70%, 90%, and 100% of your allowance. When overage occurs, additional processing minutes are billed at the designated plan overage rate or managed via approved capacity top-ups. Overages are never charged silently without prior notice.',
  },
  {
    id: 'rollover_policy',
    category: 'billing',
    question: 'Do unused processing minutes roll over or expire?',
    answer:
      'Under the default baseline commercial specification, unused processing minutes expire at the end of each billing period and do not roll over to subsequent months unless explicitly stated in a custom enterprise contract or updated commercial policy approved by the product owner.',
  },
  {
    id: 'cancellation_refunds',
    category: 'billing',
    question: 'What are the cancellation and refund policies?',
    answer:
      'Subscriptions can be cancelled at any time from your account management dashboard before the next billing cycle renews. Upon cancellation, your service remains active with full access to your remaining included minutes until the end of the paid billing period. Refund eligibility for unused portions of pre-billed periods follows NourDoc published commercial terms.',
  },
  {
    id: 'plan_changes',
    category: 'billing',
    question: 'Can I change my plan or upgrade capacity mid-cycle?',
    answer:
      'Yes. If your patient consultation volume increases, you can upgrade from Starter to Growth or Professional at any time. When upgrading, your new minute allowance takes effect immediately, with prorated fee adjustments applied to your active billing cycle.',
  },
  {
    id: 'multiple_clinicians',
    category: 'features',
    question: 'Can multiple clinicians share a single subscription or practice account?',
    answer:
      'The Starter plan is optimized for solo clinicians. Growth and Professional tiers support multi-clinician practice configurations subject to active team management entitlements, enabling practice managers to allocate capacity pools across doctors while preserving individual privacy and clinical audit trails.',
  },
  {
    id: 'coding_support',
    category: 'features',
    question: 'Is medical coding assistance (ICD-10 / CPT) included in all plans?',
    answer:
      'ICD-10 diagnostic suggestions and CPT procedural alignments are advanced capabilities available on Growth, Professional, and Enterprise plans subject to regional entitlement activation. Free Trial and Starter tiers provide ambient transcription and comprehensive SOAP notes with coding suggestions requiring confirmation.',
  },
  {
    id: 'international_availability',
    category: 'billing',
    question: 'Is NourDoc available internationally and how is currency billed?',
    answer:
      'NourDoc is designed for both Pakistan and international healthcare markets. Our platform displays regional catalogues: Pakistan accounts are billed in PKR through locally supported payment gateways, while international users are billed in USD or regional currency via international payment methods. We do not fabricate arbitrary foreign exchange conversions.',
  },
  {
    id: 'data_protection',
    category: 'security',
    question: 'How does NourDoc protect patient privacy and health data security?',
    answer:
      'Patient privacy is paramount. NourDoc employs end-to-end encryption in transit (TLS 1.3) and at rest (AES-256). Speech audio is streamed to our secure AI processing engine and never sold to third parties or used for public AI training without explicit consent. Furthermore, clinicians retain full professional responsibility for reviewing and verifying all generated SOAP notes before chart sign-off.',
  },
];

