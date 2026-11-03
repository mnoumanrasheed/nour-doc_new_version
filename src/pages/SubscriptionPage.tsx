// src/pages/SubscriptionPage.tsx
/**
 * NourDoc Subscription & Pricing Page
 * Implementation Specification Version 1.0 (03 November 2026)
 *
 * Implements the 12 page sections:
 * 01. Hero and primary CTA
 * 02. Market and billing selector
 * 03. Subscription plan cards
 * 04. Usage calculator
 * 05. How pricing works
 * 06. Feature comparison
 * 07. Trial explanation
 * 08. Enterprise section
 * 09. Payment methods
 * 10. Trust and clinical responsibility
 * 11. FAQs
 * 12. Final conversion CTA and disclosures
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Stethoscope
} from 'lucide-react';
import { MarketBillingSelector } from '../components/subscription/MarketBillingSelector';
import { SubscriptionPlanCards } from '../components/subscription/SubscriptionPlanCards';
import { UsageCalculator } from '../components/subscription/UsageCalculator';
import { HowPricingWorks } from '../components/subscription/HowPricingWorks';
import { FeatureComparisonMatrix } from '../components/subscription/FeatureComparisonMatrix';
import { TrialExplanation } from '../components/subscription/TrialExplanation';
import { EnterpriseSection } from '../components/subscription/EnterpriseSection';
import { PaymentMethods } from '../components/subscription/PaymentMethods';
import { TrustResponsibility } from '../components/subscription/TrustResponsibility';
import { PricingFAQ } from '../components/subscription/PricingFAQ';
import { TrialModal } from '../components/subscription/TrialModal';
import { 
  PAKISTAN_PLANS, 
  INTERNATIONAL_PLANS, 
  type MarketCode, 
  type BillingCycle, 
  type PlanConfig 
} from '../data/pricingConfig';

export const SubscriptionPage: React.FC = () => {
  const [market, setMarket] = useState<MarketCode>('PK');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<PlanConfig | null>(null);
  const [modalMode, setModalMode] = useState<'free_trial' | 'extended_trial' | 'plan_checkout'>('free_trial');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePlans = market === 'PK' ? PAKISTAN_PLANS : INTERNATIONAL_PLANS;

  // Handlers for modal interactions
  const handleOpenFreeTrial = () => {
    const freePlan = activePlans.find((p) => p.plan_id === 'free') || activePlans[0];
    setSelectedPlanForModal(freePlan);
    setModalMode('free_trial');
    setIsModalOpen(true);
  };

  const handleOpenExtendedTrial = () => {
    setSelectedPlanForModal(null);
    setModalMode('extended_trial');
    setIsModalOpen(true);
  };

  const handleSelectPlan = (plan: PlanConfig) => {
    if (plan.plan_id === 'free') {
      handleOpenFreeTrial();
    } else {
      setSelectedPlanForModal(plan);
      setModalMode('plan_checkout');
      setIsModalOpen(true);
    }
  };

  const handleScrollToEnterprise = () => {
    const el = document.getElementById('enterprise-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPlans = () => {
    const el = document.getElementById('plans-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set document canonical and meta dynamically if needed
  useEffect(() => {
    document.title = 'Clinical Documentation. Simplified. | NourDoc Subscription & Pricing';
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          01. Hero and primary CTA
          Headline: “Clinical Documentation. Simplified.”
          Supporting line: “More time for patients. Less time on paperwork.”
          Explain AI transcription, structured SOAP notes and clinical coding assistance.
          Primary CTA: Start your free trial.
          Secondary CTA: Explore plans / Book an enterprise demo.
          Hero Image: South Asian physician reviewing note on laptop/tablet in consultation room.
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F7F6] via-white to-white pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & Conversions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-nourdoc-primary/20 bg-nourdoc-primary-light/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-nourdoc-primary shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-nourdoc-primary" />
                <span>NourDoc Pricing & Subscription Architecture</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                  Clinical Documentation. <br className="hidden sm:inline" />
                  <span className="text-nourdoc-primary">Simplified.</span>
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-slate-700">
                  More time for patients. Less time on paperwork.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                NourDoc turns natural doctor-patient dialogues into comprehensive, structured SOAP notes and clinical coding suggestions. Built for solo clinicians, growing multi-specialty practices, and enterprise hospital systems across Pakistan and international markets.
              </p>

              {/* Inclusions summary strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-nourdoc-primary shrink-0" />
                  <span>Ambient AI Transcription</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-nourdoc-primary shrink-0" />
                  <span>Structured SOAP Notes</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-nourdoc-primary shrink-0" />
                  <span>ICD-10 & Coding Support</span>
                </div>
              </div>

              {/* Primary & Secondary Conversions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <button
                  type="button"
                  onClick={handleOpenFreeTrial}
                  className="flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-6 py-3.5 text-sm font-bold text-white shadow-jade-glow transition-all hover:bg-nourdoc-primary-hover hover:-translate-y-0.5"
                >
                  <span>Start your free trial</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToPlans}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-all hover:bg-slate-50 hover:text-nourdoc-primary"
                >
                  <span>Explore plans</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToEnterprise}
                  className="flex items-center justify-center gap-2 rounded-xl border border-transparent bg-slate-100 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-200"
                >
                  <Building2 className="h-4 w-4 text-nourdoc-primary" />
                  <span>Book an enterprise demo</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span>✓ 30 minutes free trial</span>
                <span>✓ Zero card required</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>

            {/* Right Column: Recommended Hero Photography (Appendix A / Section 7.1) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(32,98,84,0.12)] bg-slate-100">
                <img
                  src="/images/hero/hero_subscription_plans.webp"
                  alt="A confident South Asian physician in a contemporary consultation room, reviewing a clinical note on a laptop or tablet"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-white/10 w-fit mb-1">
                    <Stethoscope className="h-3.5 w-3.5" />
                    <span>Point-of-Care Ambient Intelligence</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Trusted clinical documentation workflow designed for physicians and healthcare networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. Market and billing selector
          Pakistan / International switch + Monthly / Annual toggle + Pricing Control notice
      ========================================================================= */}
      <section className="py-12 bg-white">
        <MarketBillingSelector
          market={market}
          onMarketChange={setMarket}
          billingCycle={billingCycle}
          onBillingCycleChange={setBillingCycle}
          annualBillingApproved={false}
        />
      </section>

      {/* =========================================================================
          03. Subscription plan cards
          Free Trial, Starter, Growth (Recommended), Professional, Enterprise
      ========================================================================= */}
      <section id="plans-catalogue" className="py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
            Transparent Tiered Subscriptions
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Subscription Plans & Processing Allowances
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select the plan matching your monthly consultation volume. Every tier includes billable processing minutes with deterministic overage rules and transparent governance.
          </p>
        </div>

        <SubscriptionPlanCards
          plans={activePlans}
          onSelectPlan={handleSelectPlan}
          onOpenEnterprise={handleScrollToEnterprise}
          onOpenTrial={handleOpenFreeTrial}
        />
      </section>

      {/* =========================================================================
          04. Usage calculator
          Estimate monthly processing volume, working days, number of clinicians
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8F7] border-y border-slate-200/60">
        <UsageCalculator
          market={market}
          plans={activePlans}
          onSelectPlan={handleSelectPlan}
          onOpenEnterprise={handleScrollToEnterprise}
        />
      </section>

      {/* =========================================================================
          05. How pricing works
          3 steps + Billable minute definition & metering policies
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <HowPricingWorks />
      </section>

      {/* =========================================================================
          06. Feature comparison matrix
          Complete matrix across Free, Starter, Growth, Professional, Enterprise
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8F7] border-y border-slate-200/60">
        <FeatureComparisonMatrix />
      </section>

      {/* =========================================================================
          07. Trial explanation
          Free trial vs Paid extended trial, zero-charge guarantee, eligibility
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <TrialExplanation
          market={market}
          onOpenTrial={handleOpenFreeTrial}
          onSelectExtendedTrial={handleOpenExtendedTrial}
        />
      </section>

      {/* =========================================================================
          08. Enterprise section
          Capacity tiers (Silver, Gold, Enterprise 1M+), EHR integration, custom SLA & form
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8F7] border-y border-slate-200/60">
        <EnterpriseSection />
      </section>

      {/* =========================================================================
          09. Payment methods
          Market-aware payment options (Cards, JazzCash, EasyPaisa, Wire, Apple/Google Pay)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <PaymentMethods market={market} />
      </section>

      {/* =========================================================================
          10. Trust and clinical responsibility
          Security, encryption, clinician review requirement, verified communication
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8F7] border-y border-slate-200/60">
        <TrustResponsibility />
      </section>

      {/* =========================================================================
          11. FAQs
          Accordion covering all 11 topics
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <PricingFAQ />
      </section>

      {/* =========================================================================
          12. Final conversion CTA and disclosures footer
          Conversion actions + Mobile photography + Compliance & terms links
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#183B33] via-[#206254] to-[#183B33] text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-[#8FB7AC] uppercase tracking-widest bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                Ready to Reclaim Your Clinical Hours?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Spend Less Time on Documentation. More Time with Patients.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                Join forward-thinking healthcare professionals using NourDoc to generate accurate, compliant clinical records at the point of care.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={handleOpenFreeTrial}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-nourdoc-primary shadow-lg transition-all hover:bg-slate-100 hover:-translate-y-0.5"
                >
                  <span>Start your free trial (30 mins)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToPlans}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <span>Compare Plans</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToEnterprise}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <span>Request Enterprise Proposal</span>
                </button>
              </div>

              <div className="pt-4 border-t border-white/15 text-xs text-slate-300 space-y-1">
                <p>
                  Questions about institutional rollout? Email our healthcare partnerships team at{' '}
                  <a href="mailto:support@nour-doc.com" className="font-semibold text-white underline underline-offset-2">
                    support@nour-doc.com
                  </a>
                </p>
                <p className="text-[11px] text-slate-400">
                  All rights reserved © {new Date().getFullYear()} NourDoc. Clinical Documentation. Simplified.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
                <img
                  src="/images/sections/home_app_doctor.webp"
                  alt="Doctor holding a smartphone in a clinical corridor or consultation room"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-4 bg-slate-900/80 border-t border-white/10">
                  <p className="text-xs font-semibold text-white">
                    Available on Android Mobile & Clinic Workstations
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Start documentation from your pocket in outpatient clinics, ward rounds, and private practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial / Checkout Dialog Modal */}
      <TrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlanForModal}
        mode={modalMode}
      />
    </div>
  );
};

export default SubscriptionPage;
