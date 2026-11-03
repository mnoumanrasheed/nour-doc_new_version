// src/components/subscription/PremiumHeroSection.tsx
import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface PremiumHeroSectionProps {
  onStartTrial: () => void;
  onScrollToPlans: () => void;
}

export const PremiumHeroSection: React.FC<PremiumHeroSectionProps> = ({
  onStartTrial,
  onScrollToPlans,
}) => {
  return (
    <section className="hero-100vsh relative isolate flex items-center overflow-hidden bg-white">
      {/* ── Full-bleed background image (right half) ── */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="/images/hero/hero_subscription_plans.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[68%_center] lg:object-center"
          loading="eager"
        />
        {/* gradient fade from white on the left into the image */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.97)_0%,rgba(248,251,250,0.90)_28%,rgba(248,251,250,0.58)_40%,rgba(248,251,250,0.14)_48%,transparent_55%),radial-gradient(ellipse_at_18%_78%,rgba(248,251,250,0.68)_0%,rgba(248,251,250,0.34)_24%,transparent_42%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.78)_42%,rgba(248,251,250,0.46)_70%,rgba(248,251,250,0.12)_88%,transparent_100%)]" />
        {/* subtle dark veil at very bottom for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/12 to-transparent" />
        <div className="absolute -left-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-nourdoc-primary/8 blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-xl space-y-7 lg:max-w-2xl">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-nourdoc-primary/20 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-nourdoc-primary shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-nourdoc-primary" />
            <span>NourDoc Pricing &amp; Subscription</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl font-black leading-[1.03] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Clinical<br />Documentation.<br />
              <span className="text-nourdoc-primary">Simplified.</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-600">
              More time for patients. Less time on paperwork.
            </p>
          </div>

          {/* Body */}
          <p className="max-w-lg text-base leading-relaxed text-slate-600">
            NourDoc turns natural doctor-patient dialogues into structured SOAP notes and clinical coding suggestions, built for solo clinicians, growing practices, and enterprise hospital systems.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-4">
            {['Ambient AI Transcription', 'Structured SOAP Notes', 'ICD-10 & Coding Support'].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-nourdoc-primary" />
                {f}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onStartTrial}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(40,98,82,0.24)] transition-all hover:-translate-y-0.5 hover:bg-nourdoc-primary-hover"
            >
              Start your free trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onScrollToPlans}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-nourdoc-primary/40 hover:bg-white"
            >
              Explore plans
            </button>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 text-xs text-slate-500">
            <span>✓ 30 mins free trial</span>
            <span>✓ Zero card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* Floating caption badge (bottom-right of image) */}
      <div className="absolute bottom-8 right-6 z-20 hidden max-w-[240px] flex-col gap-1 rounded-2xl border border-white/15 bg-slate-950/65 px-4 py-3 shadow-2xl backdrop-blur-md lg:right-16 lg:flex">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
          Point-of-Care Ambient Intelligence
        </span>
        <p className="text-[11px] text-slate-300 leading-snug">
          Trusted clinical documentation workflow designed for physicians and healthcare networks.
        </p>
      </div>
    </section>
  );
};
