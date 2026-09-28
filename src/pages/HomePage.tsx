// src/pages/HomePage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProcessPipeline } from '../components/diagrams/ProcessPipeline';
import { Enterprise1MStat } from '../components/diagrams/Enterprise1MStat';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Smartphone, Cloud, Server, ShieldCheck, FileText, ClipboardCheck, ReceiptText, Settings2, Network, ArrowRight } from 'lucide-react';
import contentData from '../data.json';

const stakeholderImpactDetails = [
  { task: 'Document care', painPoint: 'Time is pulled away from patient interaction.', tag: 'Clinical efficiency', icon: FileText },
  { task: 'Review records', painPoint: 'Coding accuracy depends on complete documentation.', tag: 'Coding readiness', icon: ClipboardCheck },
  { task: 'Process claims', painPoint: 'Incomplete data can slow reimbursement cycles.', tag: 'Revenue workflow', icon: ReceiptText },
  { task: 'Reconcile operations', painPoint: 'Manual coordination creates friction across teams.', tag: 'Operational control', icon: Settings2 },
  { task: 'Move information between systems', painPoint: 'Disconnected workflows reduce efficiency and traceability.', tag: 'System interoperability', icon: Network },
];

export const HomePage: React.FC = () => {
  const page = contentData.pages.home;
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section with Authentic Editorial Healthcare Photography */}
      <Hero
        badge="NOURDOC AI PLATFORM"
        h1={page.hero.h1}
        headlineLines={['Let AI Handle the Documentation.', 'Let Doctors Focus on Care.']}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        showVisual={true}
        backgroundImage="/images/hero/hero_home_custom.jpg"
        visualVariant="globalFoundation"
      />

      {/* 2. The Problem Section */}
      <section className="bg-[#F7FAF9] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mx-auto max-w-[820px] text-center" y={16}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-nourdoc-primary">The Challenge</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Administrative burden touches every part of care delivery.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Every clinical encounter creates valuable information, but turning it into structured, billable and transferable documentation often requires significant manual effort.
            </p>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
            {page.theProblem.roles.map((item, idx) => {
              const detail = stakeholderImpactDetails[idx];
              const Icon = detail.icon;

              return (
                <Card
                  key={item.role}
                  hover={true}
                  revealDelay={idx * 0.09}
                  className={`rounded-[22px] border-nourdoc-primary/15 bg-white/90 p-6 md:p-6 ${idx === 3 ? 'lg:col-start-2 xl:col-auto' : ''} lg:col-span-2 xl:col-span-1`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-nourdoc-primary-light px-2 font-mono text-xs font-bold text-nourdoc-primary">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-nourdoc-primary" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{item.role}</h3>
                  <p className="mt-2 text-sm font-semibold text-nourdoc-primary">{detail.task}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{detail.painPoint}</p>
                  <span className="mt-5 inline-flex rounded-full border border-nourdoc-primary/15 bg-nourdoc-primary-light/60 px-2.5 py-1 text-[10px] font-semibold text-nourdoc-primary">
                    {detail.tag}
                  </span>
                </Card>
              );
            })}
          </div>

          <RevealOnScroll className="mx-auto mt-10 max-w-6xl" delay={0.12} y={18}>
            <div className="relative overflow-hidden rounded-3xl border border-nourdoc-primary/15 bg-gradient-to-br from-nourdoc-primary-light via-white to-nourdoc-secondary-light/60 p-7 text-center sm:p-10">
              <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-nourdoc-primary/30" />
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-nourdoc-primary">NourDoc Solution Bridge</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Where NourDoc fits</h3>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                NourDoc brings AI into the documentation and information workflow, helping capture, structure, review and prepare clinical information for downstream coding, billing and system integration.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-2.5">
                {['Speech-to-Documentation', 'Clinical Structuring', 'Coding Assistance', 'Workflow Integration'].map((capability) => (
                  <span key={capability} className="rounded-full border border-nourdoc-primary/15 bg-white/85 px-3 py-1.5 text-xs font-semibold text-nourdoc-primary">
                    {capability}
                  </span>
                ))}
              </div>
              <div className="mx-auto mt-7 flex max-w-3xl items-start justify-center gap-2 border-t border-nourdoc-primary/15 pt-6 text-sm font-semibold leading-relaxed text-slate-800 sm:text-base">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-nourdoc-primary" />
                <p>Let healthcare professionals focus on care while administrative workflows become more structured, traceable and efficient.</p>
              </div>
            </div>
          </RevealOnScroll>
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
        <div className="rounded-3xl bg-gradient-to-br from-nourdoc-primary-light/90 via-white to-slate-50 border border-nourdoc-primary/20 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-nourdoc-primary/20">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark via-nourdoc-primary-dark/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-nourdoc-secondary" />
                      Point-of-Care Assistant
                    </span>
                    <span className="text-[10px] font-mono text-nourdoc-secondary bg-white/10 px-2 py-0.5 rounded border border-white/15">
                      Android v1.0
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-nourdoc-primary-dark text-white space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="text-slate-300 font-semibold">Live Consultation Stream</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">SOAP READY</span>
                  </div>
                  <div className="text-[11px] text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10 font-mono space-y-1">
                    <div className="text-emerald-400">✓ Subjective & Chief Complaint</div>
                    <div className="text-emerald-400">✓ Objective Examination</div>
                    <div className="text-emerald-400">✓ Clinical Assessment</div>
                    <div className="text-emerald-400">✓ Care & Treatment Plan</div>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Google Play Available</span>
                    <span className="text-nourdoc-secondary font-mono font-bold">Try Free</span>
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
            <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mb-4">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Cloud</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Centrally managed, highly scalable healthcare AI infrastructure for modern clinical workflows.
            </p>
          </Card>

          <Card hover={true}>
            <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">On-Premises</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Configured within your organization's private datacenter to meet strict data residency requirements.
            </p>
          </Card>

          <Card hover={true}>
            <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mb-4">
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
      />
    </div>
  );
};
