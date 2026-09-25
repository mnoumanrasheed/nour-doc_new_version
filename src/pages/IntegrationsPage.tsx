// src/pages/IntegrationsPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ArchitectureHub } from '../components/diagrams/ArchitectureHub';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  Check, 
  Database, 
  Activity, 
  Network, 
  Cloud, 
  Server, 
  Cpu
} from 'lucide-react';
import contentData from '../data.json';

export const IntegrationsPage: React.FC = () => {
  const page = contentData.pages.integrations;

  const deploymentCards = [
    {
      title: 'CLOUD',
      desc: 'For organizations seeking scalable cloud-based deployment.',
      icon: Cloud,
    },
    {
      title: 'ON-PREMISES',
      desc: 'For organizations requiring deployment within their own infrastructure.',
      icon: Server,
    },
    {
      title: 'HYBRID',
      desc: 'For organizations requiring a combination of cloud services and existing infrastructure.',
      icon: Cpu,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero with Healthcare Systems & Network Integration Photography */}
      <Hero
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.cta.primaryCta}
        showVisual={false}
        backgroundImage="/images/hero/hero_integrations.jpg"
      />

      {/* 2. Core Systems (EHR / EMR / HIMS Definitions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.coreSystems.eyebrow}
          title={page.coreSystems.h2}
          description="NourDoc connects clinical intelligence to your existing systems of record without requiring proprietary EHR lock-in."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {page.coreSystems.cards.map((sys, idx) => {
            const icons = [Database, Activity, Network];
            const Icon = icons[idx % icons.length];
            return (
              <Card key={idx} hover={true} className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-5 font-black font-mono">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#507D88] block mb-1">
                    {sys.name} SYSTEM
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{sys.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sys.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-100">
                  INTEROPERABILITY TARGET 0{idx + 1}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 font-medium">
            * {page.coreSystems.conclusion}
          </p>
        </div>
      </section>

      {/* 3. Central Interoperability Hub Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureHub />
      </section>

      {/* 4. API & Data Connectivity Dual Workflows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.apiConnectivity.eyebrow}
          title={page.apiConnectivity.h2}
          description={page.apiConnectivity.lead}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Point-of-Care Workflow */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                Workflow Model A
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {page.apiConnectivity.pointOfCareFlow.title}
              </h3>
            </div>

            <div className="space-y-3">
              {page.apiConnectivity.pointOfCareFlow.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 shadow-xs"
                >
                  <span>{step}</span>
                  <span className="text-[10px] font-mono text-[#507D88] bg-[#EBF3F5] px-2 py-0.5 rounded">
                    STEP 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Batch Workflow */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#EBF3F5]/70 border-2 border-[#507D88]/30 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                Workflow Model B
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#507D88]">
                {page.apiConnectivity.batchFlow.title}
              </h3>
            </div>

            <div className="space-y-3">
              {page.apiConnectivity.batchFlow.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#507D88]/20 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 shadow-sm"
                >
                  <span>{step}</span>
                  <span className="text-[10px] font-mono text-[#507D88] bg-[#EBF3F5] px-2 py-0.5 rounded">
                    PHASE 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Output Flexibility (7 Destination Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm space-y-8">
          <SectionHeading
            eyebrow={page.outputFlexibility.eyebrow}
            title={page.outputFlexibility.h2}
            description={page.outputFlexibility.description}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            {page.outputFlexibility.destinations.map((dest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-xs sm:text-sm text-slate-800 hover:border-[#507D88]/40 hover:bg-[#F4F9FA] transition-all flex items-center justify-center shadow-xs"
              >
                {dest}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deployment Options (3 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DEPLOYMENT OPTIONS"
          title="Cloud-Native. On-Premises When Required."
          description="Flexible deployment architectures accommodating institutional data sovereignty and governance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deploymentCards.map((dep, idx) => {
            const Icon = dep.icon;
            return (
              <Card key={idx} hover={true} className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{dep.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{dep.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-[#507D88] pt-3 border-t border-slate-100 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Deployment Architecture</span>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 7. Enterprise Architecture (8 Capabilities) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
          <SectionHeading
            eyebrow={page.enterpriseArchitecture.eyebrow}
            title={page.enterpriseArchitecture.h2}
            description="Robust architectural features supporting enterprise clinical operations."
            dark={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.enterpriseArchitecture.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-[#7AB1BF]/60 transition-all flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200"
              >
                <div className="w-6 h-6 rounded-md bg-[#507D88]/30 text-[#7AB1BF] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technical Demo CTA */}
      <GlobalCTA
        title={page.cta.h2}
        primaryLabel={page.cta.primaryCta.label}
        primaryTarget="/contact?intent=bookDemo&topic=Other"
        primaryIsApp={false}
        secondaryLabel="EXPLORE INTEGRATIONS"
        secondaryTarget="/contact?topic=EHR+%2F+EMR+%2F+HIMS+Integration"
      />
    </div>
  );
};

export default IntegrationsPage;
