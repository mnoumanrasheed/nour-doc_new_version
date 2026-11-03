// src/components/subscription/TrialExplanation.tsx
import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Zap, CreditCard } from 'lucide-react';
import { TRIAL_OFFERS, type MarketCode } from '../../data/pricingConfig';

interface TrialExplanationProps {
  market: MarketCode;
  onOpenTrial: () => void;
  onSelectExtendedTrial: () => void;
}

export const TrialExplanation: React.FC<TrialExplanationProps> = ({
  market,
  onOpenTrial,
  onSelectExtendedTrial,
}) => {
  const freeTrial = TRIAL_OFFERS.find((t) => t.id === 'free_trial')!;
  const extendedTrial = TRIAL_OFFERS.find((t) => t.id === 'extended_trial')!;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Risk-Free Clinical Testing
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          NourDoc Trial Architecture
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Experience AI transcription and structured SOAP drafting in your own clinical workflow before committing to a recurring subscription.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Card 1: Free Trial */}
        <div className="relative rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs hover:border-nourdoc-primary/40 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                Zero Cost Evaluation
              </span>
              <span className="font-mono text-sm font-bold text-slate-400">
                NO CARD REQUIRED
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {freeTrial.title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-nourdoc-primary">
                {freeTrial.allowance_label}
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              {freeTrial.price_display[market]}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {freeTrial.description}
            </p>

            <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Trial Inclusions & Protections:
              </span>
              {freeTrial.key_points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            {/* Zero Charge Guarantee Box */}
            <div className="mt-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-950">
                <strong className="block font-semibold">Strict Zero-Charge Guarantee:</strong>
                A user is never silently charged for a free trial. When your 30 minutes conclude, processing pauses gracefully until you select an active plan or purchase an extended trial.
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={onOpenTrial}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-xs focus-visible:outline-none"
            >
              <span>Start Free Trial Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-2 text-center text-[11px] text-slate-400">
              {freeTrial.status}
            </p>
          </div>
        </div>

        {/* Card 2: Paid Extended Trial */}
        <div className="relative rounded-3xl border border-nourdoc-primary/30 bg-gradient-to-b from-white to-[#F4F8F7] p-7 sm:p-9 shadow-sm hover:border-nourdoc-primary/60 hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-nourdoc-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Zap className="h-3.5 w-3.5 text-amber-300" />
                Comprehensive Testing
              </span>
              <span className="font-mono text-sm font-bold text-nourdoc-primary">
                ONE-TIME PURCHASE
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {extendedTrial.title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">
                {extendedTrial.allowance_label}
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold text-nourdoc-primary">
              {extendedTrial.price_display[market]}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {extendedTrial.description}
            </p>

            <div className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Extended Trial Inclusions:
              </span>
              {extendedTrial.key_points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-nourdoc-primary mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            {/* Fair Use & Non-Recurring Box */}
            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4 flex items-start gap-3 shadow-xs">
              <CreditCard className="h-5 w-5 text-nourdoc-primary shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <strong className="block font-semibold text-slate-900">Transparent One-Time Transaction:</strong>
                The extended trial is billed once and does not bind you to an unwanted recurring subscription. When your 100 minutes finish, you choose if and when to activate Starter, Growth, or Professional.
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/80">
            <button
              type="button"
              onClick={onSelectExtendedTrial}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-slate-800 shadow-xs focus-visible:outline-none"
            >
              <span>Get Extended Trial (100 Minutes)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-2 text-center text-[11px] text-slate-500">
              {extendedTrial.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
