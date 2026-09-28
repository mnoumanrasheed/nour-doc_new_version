// src/pages/ProductPage.tsx
import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CapabilitiesGrid } from '../components/sections/CapabilitiesGrid';
import { AIEngineVisual } from '../components/diagrams/AIEngineVisual';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  Mic, 
  FileAudio, 
  FileText, 
  FileCode2, 
  Database, 
  Network, 
  Cloud, 
  Server, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import contentData from '../data.json';

const inputIcons = [Mic, FileAudio, FileText, FileCode2, Database];

export const ProductPage: React.FC = () => {
  const page = contentData.pages.product;
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Editorial Split Hero combining Consultation & Conceptual Documentation UI */}
      <section className="hero-100vsh relative overflow-hidden flex flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-nourdoc-primary-surface/80 via-white to-white border-b border-slate-100">
        {/* Background Photography Layer with a lighter directional scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero/hero_product.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center lg:object-right select-none"
            loading="eager"
          />
          {/* Directional Horizontal Scrim on Desktop */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 via-45% to-transparent" />
          
          {/* Directional Scrim on Tablet / Mobile */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/15" />

          {/* Subtle Top & Bottom Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Product Hero Information */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-nourdoc-primary-light text-nourdoc-primary border border-nourdoc-primary/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-nourdoc-primary" />
                <span>AI PLATFORM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Meet <span className="bg-gradient-to-r from-nourdoc-primary to-nourdoc-primary-hover bg-clip-text text-transparent">NourDoc</span>
              </h1>

              <p className="text-lg sm:text-xl font-bold text-nourdoc-primary leading-snug">
                {page.hero.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {page.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href={appStoreUrl}
                  external={true}
                  variant="primary"
                  size="lg"
                  icon={true}
                >
                  {page.cta.primaryCta.label}
                </Button>
                <Button
                  to="/contact?intent=bookDemo&topic=Other"
                  variant="outline"
                  size="lg"
                >
                  {page.cta.secondaryCta.label}
                </Button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-nourdoc-primary" />
                  Clinician Validation Control
                </span>
                <span>•</span>
                <span>Cloud & On-Premises Ready</span>
              </div>
            </div>

            {/* Right: Single Cohesive Ultra-Premium Ambient Clinical Intelligence Frame */}
            <div className="lg:col-span-6">
              <div className="nourdoc-ambient-surface relative rounded-3xl bg-gradient-to-br from-nourdoc-primary-dark via-nourdoc-primary-dark/95 to-nourdoc-primary-hover text-white p-6 sm:p-7 border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Ambient glow effects */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-nourdoc-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-nourdoc-secondary/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Status Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-100 uppercase tracking-wider">
                        Ambient Consultation Active
                      </div>
                      <div className="text-[10px] text-emerald-400 font-mono">
                        Live Speech Stream • Encrypted TLS 1.3
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-nourdoc-secondary bg-nourdoc-primary/20 px-2.5 py-1 rounded-md border border-nourdoc-primary/40">
                    NourDoc Engine
                  </span>
                </div>

                {/* Natural Speech Capture & Audio Waveform */}
                <div className="relative z-10 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-bold text-slate-200">
                        <Mic className="w-3.5 h-3.5 text-nourdoc-secondary" />
                        Natural Dialogue Input
                      </span>
                      <span className="text-[10px] font-mono text-nourdoc-secondary font-semibold">
                        SPEECH WAVEFORM
                      </span>
                    </div>

                    {/* Gradient Equalizer Waveform */}
                    <div className="h-7 flex items-center justify-between gap-1 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">
                      {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 70, 85, 40, 90, 65, 30, 80, 50, 95, 60, 40, 75, 85, 50, 90].map((h, i) => (
                        <div
                          key={i}
                          className="nourdoc-wave-bar w-1 rounded-full bg-gradient-to-t from-nourdoc-primary to-nourdoc-secondary"
                          style={{ height: `${h}%`, animationDelay: `${i * -0.07}s` }}
                        />
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-300 italic bg-white/5 px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nourdoc-secondary shrink-0" />
                      <span className="truncate">"Patient presents with mild respiratory symptoms and dry cough for 4 days..."</span>
                    </div>
                  </div>

                  {/* Real-time SOAP Synthesis & ICD-10 Tagging */}
                  <div className="p-3.5 rounded-2xl bg-nourdoc-primary/15 border border-nourdoc-primary/30 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-bold text-nourdoc-secondary">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-nourdoc-secondary" />
                        Clinical Synthesis & Coding Support
                      </span>
                      <span className="animate-pulse text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                        SOAP READY
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
                        <span className="text-nourdoc-secondary block font-bold text-[10px] uppercase">Assessment & Plan</span>
                        <span className="text-slate-300 line-clamp-2">Acute bronchitis. Prescribed maintenance therapy.</span>
                      </div>
                      <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 space-y-0.5">
                        <span className="text-emerald-400 block font-bold text-[10px] uppercase">Validated Codes</span>
                        <span className="text-slate-300 text-[10px]">ICD-10: J20.9 • CPT: 99214</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Governance Tag */}
                <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Clinician Validated • Assistive AI
                  </span>
                  <span className="text-nourdoc-secondary font-mono font-semibold">FHIR / EHR Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities (2x4 Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.coreCapabilities.eyebrow}
          title={page.coreCapabilities.h2}
          description="A comprehensive ambient clinical intelligence suite designed for individual practitioners and healthcare networks."
        />
        <CapabilitiesGrid items={page.coreCapabilities.items} />
      </section>

      {/* 3. Proprietary AI Engine Pipeline Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIEngineVisual />
      </section>

      {/* 4. Multiple Inputs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.multipleInputs.eyebrow}
          title={page.multipleInputs.h2}
          description={page.multipleInputs.conclusion}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
          {page.multipleInputs.inputs.map((inp, idx) => {
            const Icon = inputIcons[idx % inputIcons.length];
            return (
              <Card key={idx} hover={true} revealDelay={idx * 0.1} className="text-center p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{inp}</h3>
                </div>
                <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                  INPUT FORMAT 0{idx + 1}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 5. Flexible Deployment (Cloud / On-Premises / Hybrid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nourdoc-ambient-surface rounded-3xl bg-nourdoc-primary-dark text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl space-y-8">
          <SectionHeading
            eyebrow={page.deployment.eyebrow}
            title={page.deployment.h2}
            description="Built to adapt seamlessly to an organization's specific data sovereignty, governance, and infrastructure policies."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.deployment.cards.map((card, idx) => {
              const icons = [Cloud, Server, Cpu];
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-nourdoc-primary/20 text-nourdoc-secondary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="text-[11px] font-mono text-nourdoc-secondary pt-3 border-t border-white/10 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Enterprise Deployment Option</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Integration-Ready (EHR / EMR / HIMS Positioning) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-nourdoc-primary-light/80 via-white to-slate-50 border border-nourdoc-primary/30 p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-white text-nourdoc-primary flex items-center justify-center mx-auto border border-nourdoc-primary/20 shadow-sm">
            <Network className="w-7 h-7" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-white px-4 py-1.5 rounded-full mb-3 border border-nourdoc-primary/20 shadow-xs">
              {page.integrationReady.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {page.integrationReady.h2}
            </h2>
          </div>

          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 text-left space-y-4 max-w-2xl mx-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Positioned to Connect With:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
                <span className="font-bold text-xs text-slate-800 block">EHR</span>
                <span className="text-[10px] text-slate-500">Electronic Health Records</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
                <span className="font-bold text-xs text-slate-800 block">EMR</span>
                <span className="text-[10px] text-slate-500">Electronic Medical Records</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
                <span className="font-bold text-xs text-slate-800 block">HIMS</span>
                <span className="text-[10px] text-slate-500">Hospital Information Systems</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              Along with coding, billing, telemedicine and other healthcare technology platforms without requiring proprietary vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final Page CTA */}
      <GlobalCTA
        title={page.cta.h2}
        primaryLabel={page.cta.primaryCta.label}
        secondaryLabel={page.cta.secondaryCta.label}
      />
    </div>
  );
};

export default ProductPage;
