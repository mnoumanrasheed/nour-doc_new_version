// src/components/sections/Hero.tsx
import React from 'react';
import { Button } from '../common/Button';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Activity, Code2, FileCheck, Globe2, Microscope, Stethoscope } from 'lucide-react';
import contentData from '../../data.json';

interface HeroProps {
  badge?: string;
  h1: string;
  headlineLines?: string[];
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; type: string; target?: string };
  secondaryCta?: { label: string; type: string; target?: string };
  showVisual?: boolean;
  backgroundImage?: string;
  heroImage?: string;
  heroImageAlt?: string;
  visualVariant?: 'clinical' | 'globalFoundation';
}

const globalFoundationItems = [
  {
    title: 'Canadian Ownership',
    description: 'Strategic leadership and international vision',
    icon: Globe2,
  },
  {
    title: 'Finnish Research',
    description: 'Clinical insight and research-driven relevance',
    icon: Microscope,
  },
  {
    title: 'Pakistan Engineered',
    description: 'Strong product development and technical execution',
    icon: Code2,
  },
];

export const Hero: React.FC<HeroProps> = ({
  badge,
  h1,
  headlineLines,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showVisual = true,
  backgroundImage,
  heroImage,
  heroImageAlt = 'NourDoc Healthcare Consultation',
  visualVariant = 'clinical',
}) => {
  const appStoreUrl = contentData.brand.appStoreUrl;
  const shouldReduceMotion = useReducedMotion();
  const isGlobalFoundation = visualVariant === 'globalFoundation';

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
    <section className="hero-100vsh relative overflow-hidden flex flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-nourdoc-primary-surface/80 via-white to-white border-b border-slate-100">
      {/* Background Photography Layer with a lighter directional scrim */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center lg:object-right select-none"
            loading="eager"
          />
          {/* Directional Horizontal Scrim on Desktop: keep the photo visible while preserving text contrast */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 via-45% to-transparent" />
          
          {/* Directional Scrim on Tablet / Mobile: ensures high text contrast while keeping photo recognizable */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/15" />

          {/* Subtle Top & Bottom Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
        </div>
      )}

      {/* Subtle Background Glow (when no photo background is used) */}
      {!backgroundImage && (
        <>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-nourdoc-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-nourdoc-secondary/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className={`grid grid-cols-1 ${showVisual ? 'lg:grid-cols-12' : ''} ${isGlobalFoundation ? 'gap-10 lg:gap-14' : 'gap-12'} items-center`}>
          {/* Hero Text Content */}
          <div className={`${showVisual ? isGlobalFoundation ? 'lg:col-span-7 lg:pr-4' : 'lg:col-span-7' : backgroundImage ? 'max-w-2xl text-left' : 'max-w-3xl mx-auto text-center'}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-nourdoc-primary-light text-nourdoc-primary border border-nourdoc-primary/20 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-nourdoc-primary" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              {headlineLines ? headlineLines.map((line) => <span key={line} className="block">{line}</span>) : h1}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl font-bold text-nourdoc-primary mb-4">
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
            <div className={`lg:col-span-5 ${isGlobalFoundation ? 'lg:pl-2' : ''}`}>
              <div className={`relative mx-auto max-w-md ${isGlobalFoundation ? 'lg:ml-auto' : 'lg:max-w-none'}`}>
                {heroImage ? (
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
                    <div className="h-64 sm:h-72 w-full relative">
                      <img
                        src={heroImage}
                        alt={heroImageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/80 via-nourdoc-primary-dark/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs font-bold flex items-center gap-1.5 mb-1">
                          <Stethoscope className="w-3.5 h-3.5 text-nourdoc-secondary" />
                          Ambient Consultation Active
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono">
                          Natural Dialogue → Structured SOAP Note
                        </div>
                      </div>
                    </div>
                  </div>
                ) : visualVariant === 'globalFoundation' ? (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="w-full lg:w-[31vw] lg:max-w-[420px]"
                  >
                    <div className="relative overflow-hidden rounded-[24px] border border-white/[0.65] bg-white/[0.92] p-6 shadow-[0_18px_44px_rgba(15,40,45,0.08),0_3px_10px_rgba(15,40,45,0.04)] backdrop-blur-md sm:p-7">
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
                        className="border-b border-[rgba(40,98,82,0.10)] pb-4"
                      >
                        <div>
                          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-nourdoc-primary">
                            Global Foundation
                          </div>
                          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-[22px]">
                            Built across borders.
                          </h2>
                          <p className="mt-2 max-w-[340px] text-[13px] leading-relaxed text-slate-500">
                            One healthcare intelligence platform, shaped by global collaboration.
                          </p>
                        </div>
                      </motion.div>

                      <div className="relative mt-5 space-y-1">
                        <motion.div
                          initial={shouldReduceMotion ? false : { scaleY: 0 }}
                          animate={shouldReduceMotion ? undefined : { scaleY: 1 }}
                          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                          className="absolute bottom-4 left-3 top-4 w-px origin-top bg-nourdoc-primary/[0.16]"
                          aria-hidden="true"
                        />
                        {globalFoundationItems.map((item, index) => {
                          const Icon = item.icon;

                          return (
                            <motion.div
                              key={item.title}
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                              whileHover={shouldReduceMotion ? undefined : { x: 2 }}
                              transition={{ duration: 0.42, delay: shouldReduceMotion ? 0 : 0.16 + index * 0.08, ease: 'easeOut' }}
                              className="group relative flex gap-3 rounded-lg px-1 py-2.5 transition-colors hover:bg-nourdoc-primary-surface/70"
                            >
                              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center text-nourdoc-primary">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-nourdoc-primary/70">0{index + 1}</span>
                                <div className="text-[13px] font-semibold text-slate-900">{item.title}</div>
                                <div className="mt-0.5 text-[11px] leading-relaxed text-slate-500">{item.description}</div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                        className="mt-5 border-t border-[rgba(40,98,82,0.10)] pt-4 text-[11px] font-medium leading-relaxed text-slate-500"
                      >
                        Built through global collaboration for healthcare innovation
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  /* Clinical Intelligence UI Frame */
                  <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
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
                        <Activity className="w-4 h-4 text-nourdoc-primary" />
                        <span className="text-slate-700 font-medium">Natural Dialogue Input</span>
                      </div>
                      <span className="text-[10px] font-mono text-nourdoc-primary font-bold">LIVE SPEECH</span>
                    </div>

                    <div className="p-3 rounded-xl bg-nourdoc-primary-light/80 border border-nourdoc-primary/20 space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-nourdoc-primary text-[11px]">
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
                    <span className="text-nourdoc-primary font-bold">Assistive AI</span>
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
