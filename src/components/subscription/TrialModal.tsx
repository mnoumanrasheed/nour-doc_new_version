// src/components/subscription/TrialModal.tsx
import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Download, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import contentData from '../../data.json';
import type { PlanConfig } from '../../data/pricingConfig';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanConfig | null;
  mode: 'free_trial' | 'extended_trial' | 'plan_checkout';
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  mode,
}) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const appStoreUrl = contentData.brand.appStoreUrl;

  if (!isOpen) return null;

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Account Onboarding Initiated!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We have dispatched your activation instructions to <strong>{email}</strong>. You can now launch NourDoc on your mobile device to begin ambient documentation.
            </p>
            <div className="pt-2">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-nourdoc-primary-hover shadow-xs transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Open Google Play Store</span>
              </a>
            </div>
          </div>
        ) : mode === 'free_trial' ? (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>30 Processing Minutes Included</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Start Your NourDoc Free Trial
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Experience automated SOAP note generation and ambient clinical speech recognition with zero financial obligation.
            </p>

            <div className="mt-5 space-y-2.5 rounded-2xl bg-[#F4F8F7] p-4 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>30 free minutes of real-time clinical processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>No credit card required & no recurring commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Available immediately on the NourDoc Android application</span>
              </div>
            </div>

            <form onSubmit={handleActivate} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Clinician Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@hospital.org or practice@clinic.pk"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-nourdoc-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-xs"
              >
                <span>Activate Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-nourdoc-primary" />
                Zero-charge guarantee
              </span>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-nourdoc-primary hover:underline flex items-center gap-1"
              >
                Direct App Download <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              <span>{selectedPlan ? selectedPlan.name : 'Subscription Plan'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {selectedPlan ? `Choose ${selectedPlan.name} Plan` : 'Selected Plan Configuration'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              {selectedPlan?.audience}
            </p>

            <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold">Included Processing:</span>
                <span className="font-bold text-slate-900">{selectedPlan?.included_minutes_label}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="font-semibold">Reference Baseline:</span>
                <span className="font-bold text-slate-900">{selectedPlan?.subscription_fee_display}</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                {selectedPlan?.reference_price_note}
              </p>
            </div>

            <form onSubmit={handleActivate} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@clinic.com"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-nourdoc-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-xs"
              >
                <span>Proceed to Account Setup</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-3 text-center text-[11px] text-slate-400">
              By proceeding, you agree to the NourDoc Terms of Service and Clinical Privacy Policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
