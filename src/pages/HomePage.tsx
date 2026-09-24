// src/pages/HomePage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProcessPipeline } from '../components/diagrams/ProcessPipeline';
import { Enterprise1MStat } from '../components/diagrams/Enterprise1MStat';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Smartphone, Cloud, Server, Cpu, ShieldCheck } from 'lucide-react';
import contentData from '../data.json';

export const HomePage: React.FC = () => {
  const page = contentData.pages.home;
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section */}
      <Hero
        badge={page.hero.badge}
        h1={page.hero.h1}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        showVisual={true}
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

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-3xl bg-slate-900 p-4 shadow-2xl border-4 border-slate-800 text-white">
                <div className="flex justify-between items-center text-[10px] text-slate-400 pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-[#7AB1BF]" />
                    Android App
                  </span>
                  <span>v1.0 Ready</span>
                </div>
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#507D88]/30 text-[#7AB1BF] flex items-center justify-center mx-auto">
                    <Cpu className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-xs font-bold">Ambient Consultation</div>
                  <div className="text-[11px] text-slate-400 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-left font-mono">
                    <span className="text-emerald-400">✓ Subjective</span><br />
                    <span className="text-emerald-400">✓ Objective</span><br />
                    <span className="text-emerald-400">✓ Assessment</span><br />
                    <span className="text-emerald-400">✓ Plan</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-center">
                  <span className="text-[10px] text-[#7AB1BF] font-mono">Google Play Available</span>
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
