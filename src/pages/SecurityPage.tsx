// src/pages/SecurityPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  Eye, 
  Cloud, 
  Server, 
  UserCheck, 
  Globe2, 
  Check, 
  Key, 
  Layers, 
  Database
} from 'lucide-react';
import contentData from '../data.json';

const pillarIcons = [Lock, FileCheck, ShieldCheck, Eye];

export const SecurityPage: React.FC = () => {
  const page = contentData.pages.security;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero Section with Cautious Trust Statement */}
      <Hero
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.cta.secondaryCta}
        showVisual={false}
      />

      {/* 2. Security by Design (4 Core Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.securityByDesign.eyebrow}
          title={page.securityByDesign.h2}
          description="Engineered around healthcare data governance, role-based authorization, and comprehensive system audibility."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {page.securityByDesign.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <Card key={idx} hover={true} className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-[#507D88] pt-3 border-t border-slate-100">
                  SECURITY PILLAR 0{idx + 1}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 3. Restrained White Architecture Diagram (Governance & Boundary Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3.5 py-1 rounded-full border border-[#507D88]/20">
              System Architecture & Boundary Control
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Clinical Information Flow & Governance Safeguards
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Conceptual system diagram illustrating controlled access, data processing isolation, and mandatory human review before external transmission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Stage 1: Ingestion & Auth */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#507D88] border border-slate-200 flex items-center justify-center mx-auto shadow-xs">
                <Key className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">1. Authentication</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Role-based credential validation & authorized access gating.</p>
            </div>

            {/* Stage 2: Processing Boundary */}
            <div className="p-5 rounded-2xl bg-[#EBF3F5]/80 border border-[#507D88]/30 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#507D88] border border-[#507D88]/20 flex items-center justify-center mx-auto shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-[#507D88]">2. Secure Processing</h4>
              <p className="text-[11px] text-slate-700 leading-snug">Isolated NLP & structured extraction in configured environment.</p>
            </div>

            {/* Stage 3: Human Verification Boundary */}
            <div className="p-5 rounded-2xl bg-[#EBF3F5]/80 border border-[#507D88]/30 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#507D88] border border-[#507D88]/20 flex items-center justify-center mx-auto shadow-xs">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-[#507D88]">3. Human Review</h4>
              <p className="text-[11px] text-slate-700 leading-snug">Clinician reviews and approves note prior to EHR commit.</p>
            </div>

            {/* Stage 4: Enterprise Ingestion & Audit */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#507D88] border border-slate-200 flex items-center justify-center mx-auto shadow-xs">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">4. Governed Records</h4>
              <p className="text-[11px] text-slate-500 leading-snug">Structured export with logging and audit readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cloud-Native vs. On-Premises Deployments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cloud Native */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-[#7AB1BF] flex items-center justify-center mb-5">
                <Cloud className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#7AB1BF] uppercase tracking-wider block mb-1">
                {page.cloudNative.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                {page.cloudNative.h2}
              </h3>
              <p className="text-xs text-slate-400 mb-6">{page.cloudNative.lead}</p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                {page.cloudNative.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#7AB1BF] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
              Centrally Managed • Multi-Tenant / Dedicated Workloads
            </div>
          </div>

          {/* On-Premises */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-5">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.onPremises.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                {page.onPremises.h2}
              </h3>
              <p className="text-xs text-slate-500 mb-6">{page.onPremises.lead}</p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {page.onPremises.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#507D88] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-600 font-semibold">
              {page.onPremises.conclusion}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Responsible AI & Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Responsible AI */}
          <Card hover={false} className="bg-[#EBF3F5]/60 border border-[#507D88]/20 p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mb-4 shadow-sm">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.responsibleAi.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{page.responsibleAi.h2}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {page.responsibleAi.description}
            </p>
          </Card>

          {/* Compliance */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mb-4 shadow-sm">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.compliance.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{page.compliance.h2}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {page.compliance.description}
            </p>
          </Card>
        </div>
      </section>

      {/* 6. CTA Section */}
      <GlobalCTA
        title={page.cta.h2}
        secondaryLabel={page.cta.secondaryCta.label}
      />
    </div>
  );
};

export default SecurityPage;
