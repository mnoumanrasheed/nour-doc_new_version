// src/components/subscription/MarketBillingSelector.tsx
import React, { useState } from 'react';
import { Globe, ShieldCheck, ChevronDown, CheckCircle2, Lock } from 'lucide-react';
import type { MarketCode, BillingCycle } from '../../data/pricingConfig';

interface MarketBillingSelectorProps {
  market: MarketCode;
  onMarketChange: (market: MarketCode) => void;
  billingCycle: BillingCycle;
  onBillingCycleChange: (cycle: BillingCycle) => void;
  annualBillingApproved?: boolean;
}

export const MarketBillingSelector: React.FC<MarketBillingSelectorProps> = ({
  market,
  onMarketChange,
  billingCycle,
  onBillingCycleChange,
  annualBillingApproved = false,
}) => {
  const [showFullGovernance, setShowFullGovernance] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Premium Commercial Governance & Assurance Strip */}
      <div className="mb-8 rounded-2xl border border-emerald-900/10 bg-gradient-to-r from-[#F4F8F7] via-white to-[#F4F8F7] p-4 sm:p-5 shadow-xs transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-nourdoc-primary-light text-nourdoc-primary border border-nourdoc-primary/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-nourdoc-primary">
                  Commercial Governance & Pricing Control Notice
                </span>
                <span className="hidden md:inline-flex rounded-full bg-emerald-100/80 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Strict Verification Policy
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 line-clamp-1 sm:line-clamp-none">
                Do not publish unapproved monthly subscription fees, overage rates, annual discounts, or feature entitlements. All commercial values must be configurable in the backend/admin pricing configuration. Existing reference prices are not automatically monthly subscription prices.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowFullGovernance((prev) => !prev)}
            className="inline-flex items-center gap-1 self-start sm:self-center text-xs font-semibold text-nourdoc-primary hover:text-nourdoc-primary-hover hover:underline underline-offset-4 shrink-0 transition-colors"
          >
            <span>{showFullGovernance ? 'Hide Details' : 'View Full Policy'}</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showFullGovernance ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Collapsible Full Governance Disclosure */}
        {showFullGovernance && (
          <div className="mt-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600 leading-relaxed space-y-2 animate-in fade-in duration-200">
            <p>
              <strong>IMPORTANT PRICING CONTROL:</strong> Do not publish unapproved monthly subscription fees, overage rates, annual discounts, or feature entitlements. All commercial values must be configurable in the backend/admin pricing configuration. Existing reference prices are not automatically monthly subscription prices. Where an approved commercial value or product capability is not yet available, render a controlled placeholder or enquiry CTA rather than inventing a price or promising an unavailable feature.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3 text-nourdoc-primary" />
                Zero unapproved recurring charges
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-nourdoc-primary" />
                Audit-logged commercial parameters
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3 text-nourdoc-primary" />
                Independent market catalogues
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Segmented Selector Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_12px_40px_rgba(24,59,51,0.06)] backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          
          {/* Market Selection Section */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-nourdoc-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Your Market:
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100/80 p-1.5 border border-slate-200/80">
              <button
                type="button"
                onClick={() => onMarketChange('PK')}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  market === 'PK'
                    ? 'bg-white text-nourdoc-primary shadow-[0_2px_10px_rgba(32,98,84,0.12)] ring-1 ring-nourdoc-primary/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
                aria-pressed={market === 'PK'}
              >
                <span className="text-lg leading-none" role="img" aria-label="Pakistan flag">🇵🇰</span>
                <div className="text-left">
                  <span className="block leading-tight">Pakistan</span>
                  <span className="block text-[10px] font-semibold text-slate-400">PKR Billing</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onMarketChange('INTL')}
                className={`flex items-center justify-center gap-2.5 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  market === 'INTL'
                    ? 'bg-white text-nourdoc-primary shadow-[0_2px_10px_rgba(32,98,84,0.12)] ring-1 ring-nourdoc-primary/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
                aria-pressed={market === 'INTL'}
              >
                <span className="text-lg leading-none" role="img" aria-label="Globe">🌐</span>
                <div className="text-left">
                  <span className="block leading-tight">International</span>
                  <span className="block text-[10px] font-semibold text-slate-400">USD Billing</span>
                </div>
              </button>
            </div>
          </div>

          {/* Divider on large screens */}
          <div className="hidden lg:block h-14 w-[1px] bg-slate-200" />

          {/* Billing Frequency Section */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Billing Frequency:
              </span>
              <span className="text-[11px] text-slate-400">
                Cancel anytime
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100/80 p-1.5 border border-slate-200/80">
              <button
                type="button"
                onClick={() => onBillingCycleChange('monthly')}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-nourdoc-primary shadow-[0_2px_10px_rgba(32,98,84,0.12)] ring-1 ring-nourdoc-primary/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
                aria-pressed={billingCycle === 'monthly'}
              >
                <span>Monthly Billing</span>
              </button>

              {annualBillingApproved ? (
                <button
                  type="button"
                  onClick={() => onBillingCycleChange('annual')}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-4 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    billingCycle === 'annual'
                      ? 'bg-white text-nourdoc-primary shadow-[0_2px_10px_rgba(32,98,84,0.12)] ring-1 ring-nourdoc-primary/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                  aria-pressed={billingCycle === 'annual'}
                >
                  <span>Annual Billing</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                    Save 20%
                  </span>
                </button>
              ) : (
                <div
                  className="group relative flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-medium text-slate-400 bg-slate-200/50 cursor-not-allowed"
                  title="Annual billing discount requires formal product-owner commercial approval."
                >
                  <span>Annual Billing</span>
                  <span className="rounded-md bg-slate-300/80 px-1.5 py-0.5 text-[9px] font-bold text-slate-600">
                    Pending Approval
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Catalogue Indicator Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>
              Active Regional Catalogue:{' '}
              <strong className="text-slate-900 font-semibold">
                {market === 'PK' ? 'Pakistan B2C & Institutional' : 'International Healthcare Market'}
              </strong>{' '}
              ({market === 'PK' ? 'PKR' : 'USD'})
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span>• No estimated FX conversions</span>
            <span>• Direct banking & tokenized card processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
