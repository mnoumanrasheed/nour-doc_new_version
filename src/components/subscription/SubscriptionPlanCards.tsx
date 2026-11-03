// src/components/subscription/SubscriptionPlanCards.tsx
import React from 'react';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';
import type { PlanConfig } from '../../data/pricingConfig';

interface SubscriptionPlanCardsProps {
  plans: PlanConfig[];
  onSelectPlan: (plan: PlanConfig) => void;
  onOpenEnterprise: () => void;
  onOpenTrial: () => void;
}

export const SubscriptionPlanCards: React.FC<SubscriptionPlanCardsProps> = ({
  plans,
  onSelectPlan,
  onOpenEnterprise,
  onOpenTrial,
}) => {
  // Separate standard plans (Free, Starter, Growth, Professional) and Enterprise for balanced layout
  const standardPlans = plans.filter((p) => p.plan_id !== 'enterprise');
  const enterprisePlan = plans.find((p) => p.plan_id === 'enterprise');

  return (
    <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
      {/* 4 Standard Plans in a Spacious 4-Column Grid (Eliminates Skinny Pillars) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {standardPlans.map((plan) => {
          const isFree = plan.plan_id === 'free';
          const isGrowth = plan.plan_id === 'growth';

          return (
            <div
              key={plan.plan_id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                isGrowth
                  ? 'border-2 border-nourdoc-primary bg-gradient-to-b from-[#F5FAF8] via-white to-white shadow-[0_20px_50px_rgba(32,98,84,0.14)] ring-4 ring-nourdoc-primary/10 z-10 lg:-translate-y-2'
                  : 'border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(24,59,51,0.04)] hover:border-nourdoc-primary/40 hover:shadow-[0_12px_32px_rgba(24,59,51,0.08)]'
              }`}
            >
              {/* Recommended Badge on Growth */}
              {isGrowth && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-nourdoc-primary to-nourdoc-primary-hover px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Recommended
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-slate-100 pb-4 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isGrowth
                          ? 'bg-nourdoc-primary/10 text-nourdoc-primary'
                          : isFree
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {plan.badge || 'Plan'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[34px]">
                    {plan.audience}
                  </p>
                </div>

                {/* Price Display (Clean, No Asterisk on Price) */}
                <div className="py-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                      {plan.subscription_fee_display}
                    </span>
                    {!isFree && (
                      <span className="text-sm font-semibold text-slate-500">
                        / month
                      </span>
                    )}
                  </div>

                  {/* Clean Reference Note */}
                  <p className="mt-2 text-[11px] text-slate-500 leading-normal">
                    <strong className="text-slate-700">Ref:</strong> {plan.reference_price_note}
                  </p>

                  {/* Included Minutes Tag */}
                  <div className="mt-3.5 flex items-center gap-2 rounded-xl bg-nourdoc-primary-light/70 px-3.5 py-2.5 border border-nourdoc-primary/20 text-nourdoc-primary text-xs font-bold">
                    <Clock className="h-4 w-4 shrink-0 text-nourdoc-primary" />
                    <span>{plan.included_minutes_label}</span>
                  </div>
                </div>

                {/* Overage & Rollover 2-Column Grid */}
                <div className="py-3.5 border-b border-slate-100 grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Overage Rule
                    </span>
                    <span className="font-semibold text-slate-700 leading-tight block">
                      {plan.overage_display}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Rollover
                    </span>
                    <span className="font-semibold text-slate-700 leading-tight block">
                      {plan.rollover_display}
                    </span>
                  </div>
                </div>

                {/* Key Inclusions */}
                <div className="py-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Key Inclusions:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {plan.key_inclusions.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
                {isFree ? (
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-sm hover:-translate-y-0.5 focus-visible:outline-none"
                  >
                    <span>{plan.cta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all focus-visible:outline-none ${
                      isGrowth
                        ? 'bg-nourdoc-primary text-white hover:bg-nourdoc-primary-hover shadow-md hover:-translate-y-0.5'
                        : 'border-2 border-nourdoc-primary text-nourdoc-primary hover:bg-nourdoc-primary-light hover:-translate-y-0.5'
                    }`}
                  >
                    <span>{plan.cta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

                <div className="text-center">
                  <span className="text-[10px] text-slate-400 block font-medium">
                    {isFree
                      ? 'Approved trial allowance; proposed 30 min'
                      : 'Commercial approval pending'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Full-Width Enterprise Card */}
      {enterprisePlan && (
        <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#143029] via-[#183B33] to-[#0F2620] text-white shadow-2xl border border-emerald-900/40">
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-[90px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: Label + Title + Capacity */}
            <div className="lg:col-span-4 flex flex-col justify-center p-8 lg:p-10 space-y-5 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  Hospitals &amp; Networks
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Institutional Commitment
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white tracking-tight">{enterprisePlan.name}</h3>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{enterprisePlan.audience}</p>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  {enterprisePlan.subscription_fee_display}
                </span>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{enterprisePlan.reference_price_note}</p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/25 px-4 py-2.5 text-emerald-300 text-xs font-bold w-fit">
                <Clock className="h-4 w-4 shrink-0 text-emerald-400" />
                {enterprisePlan.included_minutes_label}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Overage Rule</span>
                  <span className="text-slate-200 font-semibold">{enterprisePlan.overage_display}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-0.5">Rollover</span>
                  <span className="text-slate-200 font-semibold">{enterprisePlan.rollover_display}</span>
                </div>
              </div>
            </div>

            {/* Middle: Key Inclusions */}
            <div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-5 block">
                Key Inclusions &amp; Governance
              </span>
              <ul className="space-y-3">
                {enterprisePlan.key_inclusions.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-200 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center p-8 lg:p-10 gap-5 text-center">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-300">Custom SLA &amp; negotiated agreement</p>
                <p className="text-[11px] text-slate-400">Scoped within 1 business day</p>
              </div>
              <button
                type="button"
                onClick={onOpenEnterprise}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none"
              >
                <span>{enterprisePlan.cta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11px] text-slate-400">No upfront commitment required</p>
            </div>

          </div>
        </div>
      )}

      {/* Required Pricing Disclosures (Section 4.1 & Section 11) */}
      <div className="mt-8 rounded-2xl bg-[#F4F8F7] border border-slate-200/90 p-4 sm:p-5 text-center text-xs text-slate-600 leading-relaxed max-w-4xl mx-auto shadow-2xs">
        <p>
          *<strong>Pricing & Commercial Disclosure:</strong> Reference pack prices (PKR 19.39/min) and international planning ranges are provided for commercial baseline context. All recurring monthly subscription fees, overage rates, and annual billing terms require official product-owner approval before launch. Taxes are calculated at checkout where applicable.
        </p>
      </div>
    </div>
  );
};
