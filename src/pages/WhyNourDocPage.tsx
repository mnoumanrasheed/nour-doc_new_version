// src/pages/WhyNourDocPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { SplitComparison } from '../components/diagrams/SplitComparison';
import { EcosystemMap } from '../components/diagrams/EcosystemMap';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Check, ShieldAlert, Sparkles } from 'lucide-react';
import contentData from '../data.json';

export const WhyNourDocPage: React.FC = () => {
  const page = contentData.pages.whyNourDoc;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section */}
      <Hero
        h1={page.hero.h1}
        description={`${page.hero.lead}\n\n${page.hero.conclusion}`}
        primaryCta={page.cta.primaryCta}
        secondaryCta={page.cta.secondaryCta}
        showVisual={false}
      />

      {/* 2. Before / After Editorial Split Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLINICAL PARADIGM SHIFT"
          title="From Screen Distraction to Patient-Centered Presence"
          description="A direct look at the daily friction of administrative paperwork versus the seamless flow of ambient clinical intelligence."
        />
        <SplitComparison />
      </section>

      {/* 3. For Clinicians (3 Core Benefit Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.forClinicians.eyebrow}
          title={page.forClinicians.h2}
          description="Designed to keep clinicians engaged in genuine eye contact and thoughtful care instead of after-hours typing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {page.forClinicians.points.map((pt, idx) => (
            <Card key={idx} hover={true} className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4 font-mono font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
              <div className="text-[11px] font-mono font-semibold text-[#507D88] pt-3 border-t border-slate-100 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinician Benefit 0{idx + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. For Healthcare Organizations (8 Workflow Dimensions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
          <SectionHeading
            eyebrow={page.forOrganizations.eyebrow}
            title={page.forOrganizations.h2}
            description={page.forOrganizations.lead}
            dark={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.forOrganizations.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/70 hover:border-[#7AB1BF]/60 transition-all flex items-center gap-3.5 text-xs sm:text-sm font-semibold text-slate-100"
              >
                <div className="w-7 h-7 rounded-lg bg-[#507D88]/30 text-[#7AB1BF] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Bigger Opportunity (Information Ecosystem Hub) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.theBiggerOpportunity.eyebrow}
          title={page.theBiggerOpportunity.h2}
          description={`${page.theBiggerOpportunity.lead} ${page.theBiggerOpportunity.conclusion}`}
        />
        <EcosystemMap nodes={page.theBiggerOpportunity.nodes} />
      </section>

      {/* 6. Human-In-The-Loop Oversight Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#F4F9FA] via-[#EBF3F5] to-white border-2 border-[#507D88]/30 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-sm space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mx-auto shadow-sm border border-[#507D88]/20">
            <ShieldAlert className="w-7 h-7 text-[#507D88]" />
          </div>

          <div>
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full mb-3 border border-[#507D88]/20 shadow-xs">
              {page.humanInTheLoop.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {page.humanInTheLoop.h2}
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-[#507D88]/20 text-left space-y-4">
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              NourDoc is designed as an assistive technology. AI generates and structures information. <strong>Qualified professionals review, validate and finalize information</strong> according to their organization's workflow and applicable requirements.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              The objective is not to replace clinical judgment. The objective is to give clinical judgment more time and better-organized information.
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

export default WhyNourDocPage;
