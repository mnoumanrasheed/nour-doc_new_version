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
import { ArrowRight } from 'lucide-react';
import { MarketBillingSelector } from '../components/subscription/MarketBillingSelector';
import { SubscriptionPlanCards } from '../components/subscription/SubscriptionPlanCards';
import { UsageCalculator } from '../components/subscription/UsageCalculator';
import { HowPricingWorks } from '../components/subscription/HowPricingWorks';
import { FeatureComparisonMatrix } from '../components/subscription/FeatureComparisonMatrix';
import { TrialExplanation } from '../components/subscription/TrialExplanation';
import { PremiumEnterpriseCTA } from '../components/subscription/PremiumEnterpriseCTA';
import { PremiumHeroSection } from '../components/subscription/PremiumHeroSection';
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
      return;
    }
    window.location.assign('/contact?intent=bookDemo&topic=Enterprise+Deployment#contact-form');
  };

  const _handleScrollToPlans = () => {
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
      <PremiumHeroSection
        onStartTrial={handleOpenFreeTrial}
        onScrollToPlans={_handleScrollToPlans}
      />

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

      <PremiumEnterpriseCTA />

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
          12. Final conversion CTA, premium centered block
      ========================================================================= */}
      <section className="bg-[#F4F8F7] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-nourdoc-primary/15 bg-white px-5 py-6 text-center shadow-[0_14px_34px_rgba(15,42,34,0.07)] sm:px-8 sm:py-7">
          {/* Eyebrow */}
          <span className="inline-block rounded-full border border-nourdoc-primary/20 bg-nourdoc-primary-light px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-nourdoc-primary">
            Ready to Reclaim Your Clinical Hours?
          </span>

          {/* Headline */}
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Spend Less Time on<br className="hidden sm:inline" /> Documentation.{' '}
            <span className="text-nourdoc-primary">More Time with Patients.</span>
          </h2>

          {/* Supporting line */}
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Join clinicians across Pakistan and beyond using NourDoc to generate accurate, compliant records at the point of care.
          </p>

          {/* CTAs */}
          <div className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={handleOpenFreeTrial}
              className="inline-flex items-center gap-2 rounded-xl bg-nourdoc-primary px-6 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(40,98,82,0.20)] transition-all hover:-translate-y-0.5 hover:bg-nourdoc-primary-hover"
            >
              <span>Start your free trial: 30 mins</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleScrollToEnterprise}
              className="inline-flex items-center gap-2 rounded-xl border border-nourdoc-primary/25 bg-white px-6 py-3 text-sm font-semibold text-nourdoc-primary transition-all hover:-translate-y-0.5 hover:bg-nourdoc-primary-light"
            >
              Request Enterprise Proposal
            </button>
          </div>

          {/* Trust micro-copy */}
          <p className="pt-3 text-xs text-slate-500">
            No card required &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp;{' '}
            <a href="mailto:support@nour-doc.com" className="text-nourdoc-primary hover:underline">
              support@nour-doc.com
            </a>
          </p>
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
