// src/components/subscription/MarketBillingSelector.tsx
import React from 'react';
import { Globe } from 'lucide-react';
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
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      {/* Floating Segmented Selector Card */}
      <div className="relative overflow-hidden rounded-[26px] border border-nourdoc-primary/15 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbf9_100%)] p-5 shadow-[0_18px_45px_rgba(15,42,34,0.08)] sm:p-6">
        <div className="max-w-2xl">
          
          {/* Market Selection Section */}
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-nourdoc-primary-light text-nourdoc-primary"><Globe className="h-4 w-4" /></span>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-800">Choose your billing region</span>
                <span className="mt-0.5 block text-[11px] text-slate-500">Pricing and plan details update instantly.</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/75 p-1.5 shadow-[inset_0_1px_2px_rgba(15,42,34,0.04)]">
              <button
                type="button"
                onClick={() => onMarketChange('PK')}
                className={`flex min-h-[58px] items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
                  market === 'PK'
                    ? 'bg-nourdoc-primary text-white shadow-[0_8px_18px_rgba(40,98,82,0.22)]'
                    : 'text-slate-600 hover:bg-nourdoc-primary-light/65 hover:text-nourdoc-primary'
                }`}
                aria-pressed={market === 'PK'}
              >
                <div className="text-left">
                  <span className="block leading-tight">Pakistan</span>
                  <span className={`block text-[10px] font-semibold ${market === 'PK' ? 'text-white/70' : 'text-slate-400'}`}>PKR Billing</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onMarketChange('INTL')}
                className={`flex min-h-[58px] items-center justify-center gap-2.5 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
                  market === 'INTL'
                    ? 'bg-nourdoc-primary text-white shadow-[0_8px_18px_rgba(40,98,82,0.22)]'
                    : 'text-slate-600 hover:bg-nourdoc-primary-light/65 hover:text-nourdoc-primary'
                }`}
                aria-pressed={market === 'INTL'}
              >
                <span className="text-lg leading-none" role="img" aria-label="Globe">🌐</span>
                <div className="text-left">
                  <span className="block leading-tight">International</span>
                  <span className={`block text-[10px] font-semibold ${market === 'INTL' ? 'text-white/70' : 'text-slate-400'}`}>USD Billing</span>
                </div>
              </button>
            </div>
          </div>

          {/* Divider on large screens */}
          <div className="hidden" />

          {/* Billing Frequency Section */}
          <div className="hidden">
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
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-nourdoc-primary/10 bg-white/75 px-3.5 py-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>
              Active catalogue:{' '}
              <strong className="text-slate-900 font-semibold">
                {market === 'PK' ? 'Pakistan B2C & Institutional' : 'International Healthcare Market'}
              </strong>{' '}
              ({market === 'PK' ? 'PKR' : 'USD'})
            </span>
          </div>

          <div className="hidden">
            <span>• No estimated FX conversions</span>
            <span>• Direct banking & tokenized card processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
