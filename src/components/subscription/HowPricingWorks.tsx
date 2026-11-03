// src/components/subscription/HowPricingWorks.tsx
import React from 'react';
import { Layers, Activity, PlusCircle, ShieldCheck, Bell, RefreshCw } from 'lucide-react';

export const HowPricingWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose a plan',
      subtitle: 'Capacity aligned with your clinical workload',
      description:
        'Select the subscription tier matching your monthly patient encounters, from solo clinicians (Starter) to active group practices (Growth / Professional) and hospital networks (Enterprise).',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Use included minutes',
      subtitle: 'Transparent ambient processing metering',
      description:
        'Activate NourDoc during consultations. Every billable minute represents actual speech-to-text and SOAP note generation duration, tracked live on your account dashboard.',
      icon: Activity,
    },
    {
      step: '03',
      title: 'Add capacity or upgrade when needed',
      subtitle: 'Zero silent charges, predictable scaling',
      description:
        'Usage alerts trigger at 70%, 90%, and 100% of capacity. Scale smoothly by upgrading your plan tier or purchasing approved top-up minutes with no unexpected penalties.',
      icon: PlusCircle,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Transparent Commercial Architecture
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          How NourDoc Pricing Works
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          A hybrid commercial model combining predictable recurring subscription access, included processing minutes, and fair, transparent usage metering.
        </p>
      </div>

      {/* 3 Step Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-nourdoc-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nourdoc-primary-light text-nourdoc-primary font-bold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-300">
                    {st.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {st.title}
                </h3>
                <span className="block text-xs font-semibold text-nourdoc-primary mt-1 mb-3">
                  {st.subtitle}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Billable Minute & Usage Metering Specification Block */}
      <div className="rounded-3xl border border-slate-200/90 bg-[#F4F8F7] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-nourdoc-primary block mb-1">
                Metering Integrity & Policy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Understanding the Billable Processing Minute
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                NourDoc meters audio encounters based on precise processing events. We maintain strict clinical transparency so your practice never incurs opaque charges.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80">
                <ShieldCheck className="h-5 w-5 text-nourdoc-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-semibold block">Start / Stop Metering Events:</strong>
                  <span className="text-slate-600">
                    Billing begins precisely when ambient recording is processed into clinical synthesis and stops upon job completion. Pauses between discussions are not billed.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80">
                <RefreshCw className="h-5 w-5 text-nourdoc-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-semibold block">Failed Processing & Retries:</strong>
                  <span className="text-slate-600">
                    Failed encounters resulting from network interruptions or system timeouts are automatically excluded from your billable minute tally.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80">
                <Bell className="h-5 w-5 text-nourdoc-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 font-semibold block">Proactive Capacity Threshold Notifications:</strong>
                  <span className="text-slate-600">
                    Configurable alerts warn you at 70%, 90%, and 100% of included minutes. Overages require explicit approval or documented plan settings, with no silent billing.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
              <img
                src="/images/sections/why_clinical_focus_wide.webp"
                alt="Doctor speaking with a patient during a consultation while a tablet is nearby"
                className="w-full h-64 sm:h-72 object-cover object-center"
                loading="lazy"
              />
              <div className="p-4 bg-white/95 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-800">
                  Natural Consultation Workflow
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Ambient capture listens unobtrusively in the background without requiring manual typing during patient engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

