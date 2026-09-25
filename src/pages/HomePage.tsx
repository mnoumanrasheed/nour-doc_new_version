// src/pages/HomePage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProcessPipeline } from '../components/diagrams/ProcessPipeline';
import { Enterprise1MStat } from '../components/diagrams/Enterprise1MStat';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Smartphone, Cloud, Server, ShieldCheck } from 'lucide-react';
import contentData from '../data.json';

export const HomePage: React.FC = () => {
  const page = contentData.pages.home;
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section with Authentic Editorial Healthcare Photography */}
      <Hero
        badge={page.hero.badge}
        h1={page.hero.h1}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        showVisual={true}
        backgroundImage="/images/hero/hero_home.jpg"
      />

      {/* 2. The Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.theProblem.eyebrow}
          title={page.theProblem.h2}
          description={page.theProblem.lead}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-8">
          {page.theProblem.roles.map((item, idx) => (
            <Card key={idx} hover={true} className="text-center p-5">
              <div className="w-8 h-8 rounded-full bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mx-auto mb-3 text-xs font-mono font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.role}</h3>
              <p className="text-xs text-slate-500 mt-1 capitalize">{item.action}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-slate-800">
            {page.theProblem.conclusion}
          </p>
        </div>
      </section>

      {/* 3. Process Pipeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.pipeline.eyebrow}
          title={page.pipeline.h2}
          description="From spoken clinical dialogue to downstream healthcare systems of record."
        />
        <ProcessPipeline steps={page.pipeline.steps} />
      </section>

      {/* 4. Start With Your Phone (Android App Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#EBF3F5]/90 via-white to-slate-50 border border-[#507D88]/20 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#507D88]/20">
                {page.appSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {page.appSection.h2}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {page.appSection.description}
              </p>
              <div className="pt-2">
                <Button
                  href={appStoreUrl}
                  external={true}
                  variant="primary"
                  size="lg"
                  icon={true}
                >
                  {page.appSection.cta.label}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              {/* Contextual Clinical Photography & App UI Card */}
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src="/images/sections/home_app_doctor.jpg"
                    alt="Clinician using NourDoc mobile ambient assistant"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#7AB1BF]" />
                      Point-of-Care Assistant
                    </span>
                    <span className="text-[10px] font-mono text-[#7AB1BF] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                      Android v1.0
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="text-slate-300 font-semibold">Live Consultation Stream</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">SOAP READY</span>
                  </div>
                  <div className="text-[11px] text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800 font-mono space-y-1">
                    <div className="text-emerald-400">✓ Subjective & Chief Complaint</div>
                    <div className="text-emerald-400">✓ Objective Examination</div>
                    <div className="text-emerald-400">✓ Clinical Assessment</div>
                    <div className="text-emerald-400">✓ Care & Treatment Plan</div>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Google Play Available</span>
                    <span className="text-[#7AB1BF] font-mono font-bold">Try Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Enterprise Scale Section (1M+ Encounters Architectural Display) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.scaleSection.eyebrow}
          title={page.scaleSection.h2}
          description={page.scaleSection.description}
        />
        <Enterprise1MStat />
      </section>

      {/* 6. Flexible Deployment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.deploymentSection.eyebrow}
          title={page.deploymentSection.h2}
          description={page.deploymentSection.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover={true}>
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Cloud</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Centrally managed, highly scalable healthcare AI infrastructure for modern clinical workflows.
            </p>
          </Card>

          <Card hover={true}>
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">On-Premises</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Configured within your organization's private datacenter to meet strict data residency requirements.
            </p>
          </Card>

          <Card hover={true}>
            <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise / Hybrid</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seamless integration bridging secure cloud compute with existing on-premises hospital IT systems.
            </p>
          </Card>
        </div>
      </section>

      {/* 7. Final Global CTA */}
      <GlobalCTA
        eyebrow={page.finalCta.eyebrow}
        title={page.finalCta.h2}
        primaryLabel={page.finalCta.primaryCta.label}
        secondaryLabel={page.finalCta.secondaryCta.label}
        showEnterpriseBox={true}
      />
    </div>
  );
};
