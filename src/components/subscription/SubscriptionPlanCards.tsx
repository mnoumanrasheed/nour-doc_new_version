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
  return (
    <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
      {/* 5 Subscription Plan Cards as specified in Section 03 & Section 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 items-stretch">
        {plans.map((plan) => {
          const isFree = plan.plan_id === 'free';
          const isGrowth = plan.plan_id === 'growth';
          const isEnterprise = plan.plan_id === 'enterprise';

          return (
            <div
              key={plan.plan_id}
              className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                isGrowth
                  ? 'border-2 border-nourdoc-primary bg-gradient-to-b from-[#F5FAF8] via-white to-white shadow-[0_20px_50px_rgba(32,98,84,0.16)] ring-4 ring-nourdoc-primary/10 z-10 -translate-y-1 xl:-translate-y-2'
                  : 'border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(24,59,51,0.04)] hover:border-nourdoc-primary/40 hover:shadow-[0_14px_36px_rgba(24,59,51,0.08)]'
              }`}
            >
              {/* Recommended Highlight on Growth as specified in Section 4 */}
              {isGrowth && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-nourdoc-primary to-nourdoc-primary-hover px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Recommended
                </div>
              )}

              <div>
                {/* Header: Plan Name, Badge & Audience */}
                <div className="border-b border-slate-100 pb-4 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {plan.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isGrowth
                          ? 'bg-nourdoc-primary/10 text-nourdoc-primary'
                          : isEnterprise
                          ? 'bg-slate-900 text-white'
                          : isFree
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {plan.badge || 'Plan'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {plan.audience}
                  </p>
                </div>

                {/* Pricing Block */}
                <div className="py-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                      {plan.subscription_fee_display}
                    </span>
                    {!isFree && !isEnterprise && (
                      <span className="text-xs font-bold text-slate-500">
                        / month
                      </span>
                    )}
                  </div>

                  {/* Reference Note */}
                  <div className="mt-2 rounded-lg bg-slate-50 p-2 border border-slate-100">
                    <p className="text-[10px] text-slate-500 leading-normal">
                      <strong className="text-slate-700">Ref:</strong> {plan.reference_price_note}
                    </p>
                  </div>

                  {/* Included Processing Minutes Box */}
                  <div className="mt-3.5 rounded-2xl bg-nourdoc-primary-light/70 border border-nourdoc-primary/20 p-3">
                    <div className="flex items-center gap-2 text-nourdoc-primary text-xs font-bold">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span>{plan.included_minutes_label}</span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-slate-600 font-medium">
                      Included processing capacity per billing cycle
                    </p>
                  </div>
                </div>

                {/* Rules & Policies: Overage & Rollover as specified in Section 4.1 */}
                <div className="py-3.5 border-b border-slate-100 space-y-2 text-[11px]">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-700 shrink-0">Overage Rule:</span>
                    <span className="text-right text-slate-500 font-medium">{plan.overage_display}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-700 shrink-0">Rollover:</span>
                    <span className="text-right text-slate-500 font-medium">{plan.rollover_display}</span>
                  </div>
                </div>

                {/* Key Inclusions as specified in Section 4 */}
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

              {/* Card CTA as specified in Section 4 */}
              <div className="pt-4 border-t border-slate-100 mt-2 space-y-2.5">
                {isFree ? (
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-sm hover:-translate-y-0.5 focus-visible:outline-none"
                  >
                    <span>{plan.cta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : isEnterprise ? (
                  <button
                    type="button"
                    onClick={onOpenEnterprise}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-slate-800 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none"
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
                      : isEnterprise
                      ? 'Custom SLA & commitment'
                      : 'Commercial approval pending'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Required Pricing Disclosures (Section 4.1 & Section 11) */}
      <div className="mt-10 rounded-2xl bg-[#F4F8F7] border border-slate-200/90 p-4 sm:p-5 text-center text-xs text-slate-600 leading-relaxed max-w-4xl mx-auto shadow-2xs">
        <p>
          *<strong>Pricing & Commercial Disclosure:</strong> Reference pack prices (PKR 19.39/min) and international planning ranges are provided for commercial baseline context. All recurring monthly subscription fees, overage rates, and annual billing terms require official product-owner approval before launch. Taxes are calculated at checkout where applicable.
        </p>
      </div>
    </div>
  );
};
