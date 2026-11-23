// src/pages/BenefitsPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
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
      {/* 1. Hero Section with Authentic Editorial Healthcare Montage Background */}
      <Hero
        badge="CLINICAL BENEFITS"
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.resultCta.primaryCta}
        secondaryCta={page.resultCta.secondaryCta}
        showVisual={false}
        backgroundImage="/images/hero/hero_benefits_consultation.webp"
        visualVariant="benefits"
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-nourdoc-primary hover:bg-white transition-all shrink-0 border border-transparent hover:border-slate-200 shadow-xs"
              >
                <Icon className="w-4 h-4 text-nourdoc-primary" />
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
              <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block">Stakeholder Value</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.clinicians.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {s.clinicians.items.map((item, idx) => (
                <Card key={idx} hover={true} revealDelay={idx * 0.1} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-nourdoc-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-nourdoc-primary pt-2 border-t border-slate-100">
                    CLINICAL BENEFIT 0{idx + 1}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-48 w-full relative">
              <img
                src="/images/sections/benefit_clinician.webp"
                alt="Clinician conducting patient-centered examination"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white font-bold">
                Clinical Presence & Focused Care
              </div>
            </div>
            <ClinicalDialogueVisual />
          </div>
        </div>
      </section>

      {/* 3. For Practices */}
      <section id="practices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-48 w-full relative">
              <img
                src="/images/sections/benefit_practice.webp"
                alt="Medical practice team collaborating in modern healthcare clinic"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white font-bold">
                Team & Practice Workflow Efficiency
              </div>
            </div>
            <PracticeWorkflowVisual />
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block">Stakeholder Value</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.practices.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {s.practices.items.map((item, idx) => (
                <Card key={idx} hover={true} revealDelay={idx * 0.1} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-nourdoc-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-nourdoc-primary pt-2 border-t border-slate-100">
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
        <div className="relative overflow-hidden rounded-[30px] border border-nourdoc-primary/25 bg-gradient-to-br from-[#0f3029] via-[#16483c] to-[#0b2923] p-6 text-white shadow-[0_24px_70px_rgba(15,42,34,0.22)] sm:p-9 lg:p-12">
          {/* Subtle background photo tint */}
          <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
            <img
              src="/images/sections/benefit_hospital.webp"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#0f3029]/95 via-[#16483c]/75 to-[#0b2923]/95" />

          <div className="relative z-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200/20 bg-emerald-200/10 text-emerald-200 shadow-[0_0_24px_rgba(110,231,183,0.10)]">
                <Hospital className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200/80">Enterprise governance</span>
                <h2 className="mt-1 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{s.hospitals.title}</h2>
              </div>
            </div>
            <span className="w-fit rounded-full border border-emerald-200/20 bg-white/[0.06] px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-emerald-100/75">Built for healthcare networks</span>
          </div>

          <div className="relative z-10 mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {s.hospitals.items.map((item, idx) => (
              <RevealOnScroll
                key={idx}
                delay={idx * 0.1}
                className="group flex flex-col justify-between space-y-5 rounded-2xl border border-white/10 bg-white/[0.075] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-white/[0.12] sm:p-6"
              >
                <div>
                  <div className="mb-3 flex items-center gap-2 text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-50/70">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-mono font-bold uppercase tracking-[0.1em] text-emerald-200/65">
                  <span>Capability 0{idx + 1}</span>
                  <Sparkles className="h-3.5 w-3.5 text-emerald-300/80 transition-transform group-hover:rotate-12" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. For Coding & Billing Organizations */}
      <section id="coding-billing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block">Revenue Cycle & Operations</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{s.codingBilling.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {s.codingBilling.items.map((item, idx) => (
                <Card key={idx} hover={true} revealDelay={idx * 0.1} className="p-5 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-nourdoc-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[10px] font-mono text-nourdoc-primary pt-2 border-t border-slate-100">
                    CODING / BILLING 0{idx + 1}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-48 w-full relative">
              <img
                src="/images/sections/benefit_coding.webp"
                alt="Certified medical coding and clinical documentation specialist"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white font-bold">
                Batch Coding & RCM Workflows
              </div>
            </div>
            <MedicalCodingVisual />
          </div>
        </div>
      </section>

      {/* 6. For Patients */}
      <section id="patients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="relative grid overflow-hidden rounded-[28px] border border-nourdoc-primary/15 bg-white shadow-[0_18px_55px_rgba(15,42,34,0.10)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-nourdoc-primary-dark sm:min-h-[380px] lg:min-h-[440px]">
            <img
              src="/images/sections/benefit_patient.webp"
              alt="Compassionate doctor-patient consultation with direct eye contact"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/75 via-nourdoc-primary-dark/10 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-nourdoc-primary-dark/55 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-100 backdrop-blur-sm sm:left-7 sm:bottom-7">
              Uninterrupted human healthcare
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[linear-gradient(135deg,#f4faf7_0%,#ffffff_72%)] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-nourdoc-primary shadow-sm ring-1 ring-nourdoc-primary/15">
                <Heart className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-nourdoc-primary/15 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-nourdoc-primary">
                {s.patients.title}
              </span>
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-slate-900 sm:text-4xl lg:text-[2.7rem]">
              {s.patients.h2}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {s.patients.desc}
            </p>
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2">
              {['More eye contact', 'Less screen time', 'Calmer consultations', 'Better human connection'].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 rounded-xl border border-nourdoc-primary/10 bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-nourdoc-primary" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
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
