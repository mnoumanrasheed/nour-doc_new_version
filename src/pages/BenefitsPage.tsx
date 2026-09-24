// src/pages/BenefitsPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  ClinicalDialogueVisual, 
  PracticeWorkflowVisual, 
  MedicalCodingVisual 
} from '../components/visuals/ClinicalVisuals';
import { 
  Stethoscope, 
  Building, 
  Hospital, 
  FileSpreadsheet, 
  Heart, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import contentData from '../data.json';

export const BenefitsPage: React.FC = () => {
  const page = contentData.pages.benefits;
  const s = page.stakeholders;

  const stakeholderNav = [
    { label: 'Clinicians', id: 'clinicians', icon: Stethoscope },
    { label: 'Practices', id: 'practices', icon: Building },
    { label: 'Hospitals', id: 'hospitals', icon: Hospital },
    { label: 'Coding & Billing', id: 'coding-billing', icon: FileSpreadsheet },
    { label: 'Patients', id: 'patients', icon: Heart },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section */}
      <Hero
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.resultCta.primaryCta}
        secondaryCta={page.resultCta.secondaryCta}
        showVisual={false}
      />

      {/* Stakeholder Quick-Scan Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-between overflow-x-auto gap-2">
          {stakeholderNav.map((nav) => {
            const Icon = nav.icon;
            return (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-[#507D88] hover:bg-white transition-all shrink-0 border border-transparent hover:border-slate-200 shadow-xs"
              >
                <Icon className="w-4 h-4 text-[#507D88]" />
                <span>{nav.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* 2. For Clinicians */}
      <section id="clinicians" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block">Stakeholder Value</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.clinicians.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.clinicians.items.map((item, idx) => (
                <Card key={idx} hover={true} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#507D88]">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#507D88] pt-2 border-t border-slate-100">
                    CLINICAL BENEFIT 0{idx + 1}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ClinicalDialogueVisual />
          </div>
        </div>
      </section>

      {/* 3. For Practices */}
      <section id="practices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <PracticeWorkflowVisual />
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block">Stakeholder Value</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.practices.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {s.practices.items.map((item, idx) => (
                <Card key={idx} hover={true} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#507D88]">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#507D88] pt-2 border-t border-slate-100">
                    PRACTICE PILLAR 0{idx + 1}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. For Hospitals */}
      <section id="hospitals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#507D88]/30 text-[#7AB1BF] flex items-center justify-center">
              <Hospital className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#7AB1BF] uppercase tracking-wider block">Enterprise Governance</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{s.hospitals.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.hospitals.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/60 hover:border-[#7AB1BF]/60 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#7AB1BF]">
                    <CheckCircle2 className="w-4 h-4" />
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-[#7AB1BF] pt-3 border-t border-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Hospital Capability 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. For Coding & Billing Organizations */}
      <section id="coding-billing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block">Revenue Cycle & Operations</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.codingBilling.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {s.codingBilling.items.map((item, idx) => (
                <Card key={idx} hover={true} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#507D88]">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#507D88] pt-2 border-t border-slate-100">
                    CODING / BILLING 0{idx + 1}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <MedicalCodingVisual />
          </div>
        </div>
      </section>

      {/* 6. For Patients */}
      <section id="patients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-gradient-to-br from-[#EBF3F5] via-white to-slate-50 border-2 border-[#507D88]/20 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-sm space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mx-auto shadow-sm border border-[#507D88]/20">
            <Heart className="w-7 h-7 text-[#507D88]" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full mb-3 border border-[#507D88]/20 shadow-xs">
              {s.patients.title}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {s.patients.h2}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
            {s.patients.desc}
          </p>
        </div>
      </section>

      {/* 7. Result & CTA */}
      <GlobalCTA
        eyebrow={page.resultCta.eyebrow}
        title={page.resultCta.h2}
        subtitle={page.resultCta.sub}
        primaryLabel={page.resultCta.primaryCta.label}
        secondaryLabel={page.resultCta.secondaryCta.label}
      />
    </div>
  );
};

export default BenefitsPage;
