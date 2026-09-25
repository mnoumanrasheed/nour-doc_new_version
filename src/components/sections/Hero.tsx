// src/components/sections/Hero.tsx
import React from 'react';
import { Button } from '../common/Button';
import { Sparkles, Activity, FileCheck, Stethoscope } from 'lucide-react';
import contentData from '../../data.json';

interface HeroProps {
  badge?: string;
  h1: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; type: string; target?: string };
  secondaryCta?: { label: string; type: string; target?: string };
  showVisual?: boolean;
  backgroundImage?: string;
  heroImage?: string;
  heroImageAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  badge,
  h1,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showVisual = true,
  backgroundImage,
  heroImage,
  heroImageAlt = 'NourDoc Healthcare Consultation',
}) => {
  const appStoreUrl = contentData.brand.appStoreUrl;

  const renderCtaButton = (
    ctaConfig?: { label: string; type: string; target?: string },
    isPrimary: boolean = true
  ) => {
    if (!ctaConfig) return null;

    if (ctaConfig.type === 'app') {
      return (
        <Button
          href={appStoreUrl}
          external={true}
          variant={isPrimary ? 'primary' : 'outline'}
          size="lg"
          icon={true}
        >
          {ctaConfig.label}
        </Button>
      );
    }

    if (ctaConfig.type === 'demo') {
      return (
        <Button
          to="/contact?intent=bookDemo&topic=Other"
          variant={isPrimary ? 'primary' : 'outline'}
          size="lg"
        >
          {ctaConfig.label}
        </Button>
      );
    }

    if (ctaConfig.target) {
      return (
        <Button
          to={ctaConfig.target}
          variant={isPrimary ? 'primary' : 'outline'}
          size="lg"
        >
          {ctaConfig.label}
        </Button>
      );
    }

    return null;
  };

  return (
    <section className="hero-100vsh relative overflow-hidden flex flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-[#F4F9FA]/80 via-white to-white border-b border-slate-100">
      {/* Background Photography Layer (Full Opacity + Directional Scrim) */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center lg:object-right select-none"
            loading="eager"
          />
          {/* Directional Horizontal Scrim on Desktop: solid white on far left behind text, fading to transparent on right so photo subject is 100% visible */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/85 via-45% to-transparent" />
          
          {/* Directional Scrim on Tablet / Mobile: ensures high text contrast while keeping photo recognizable */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/40" />

          {/* Subtle Top & Bottom Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
        </div>
      )}

      {/* Subtle Background Glow (when no photo background is used) */}
      {!backgroundImage && (
        <>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#507D88]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#7AB1BF]/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className={`grid grid-cols-1 ${showVisual ? 'lg:grid-cols-12' : ''} gap-12 items-center`}>
          {/* Hero Text Content */}
          <div className={`${showVisual ? 'lg:col-span-7' : backgroundImage ? 'max-w-2xl text-left' : 'max-w-3xl mx-auto text-center'}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EBF3F5] text-[#507D88] border border-[#507D88]/20 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#507D88]" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {h1}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl font-bold text-[#507D88] mb-4">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-line">
                {description}
              </p>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className={`flex flex-wrap items-center gap-4 ${!showVisual && !backgroundImage ? 'justify-center' : ''}`}>
                {renderCtaButton(primaryCta, true)}
                {renderCtaButton(secondaryCta, false)}
              </div>
            )}
          </div>

          {/* Hero Visual Composition (Patient-First + AI Stream UI) */}
          {showVisual && (
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {heroImage ? (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
                    <div className="h-64 sm:h-72 w-full relative">
                      <img
                        src={heroImage}
                        alt={heroImageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs font-bold flex items-center gap-1.5 mb-1">
                          <Stethoscope className="w-3.5 h-3.5 text-[#7AB1BF]" />
                          Ambient Consultation Active
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono">
                          Natural Dialogue → Structured SOAP Note
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Clinical Intelligence UI Frame */
                  <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Active Consultation</div>
                        <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Ambient Capture Active
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      NourDoc AI
                    </span>
                  </div>

                  {/* Flow Simulation */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Activity className="w-4 h-4 text-[#507D88]" />
                        <span className="text-slate-700 font-medium">Natural Dialogue Input</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#507D88] font-bold">LIVE SPEECH</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#EBF3F5]/80 border border-[#507D88]/20 space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-[#507D88] text-[11px]">
                        <span>Clinical Understanding Engine</span>
                        <span>SOAP Note Ready</span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-mono bg-white/80 p-2 rounded border border-slate-200/60 leading-tight">
                        <strong>Assessment:</strong> Patient presents with mild respiratory symptoms...<br />
                        <strong>Plan:</strong> Prescribed maintenance therapy. Follow up in 14 days.
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-bold text-slate-800 text-[11px]">ICD-10 & CPT Assistance</div>
                          <div className="text-[10px] text-slate-500">Auto-tagged for downstream EHR ingestion</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        VALIDATED
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span>AI Assists. Professionals Remain in Control.</span>
                    <span className="text-[#507D88] font-bold">Assistive AI</span>
                  </div>
                </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
