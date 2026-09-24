// src/pages/ProductPage.tsx
import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CapabilitiesGrid } from '../components/sections/CapabilitiesGrid';
import { AIEngineVisual } from '../components/diagrams/AIEngineVisual';
import { ClinicalDialogueVisual } from '../components/visuals/ClinicalVisuals';
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
  Tag
} from 'lucide-react';
import contentData from '../data.json';

const inputIcons = [Mic, FileAudio, FileText, FileCode2, Database];

export const ProductPage: React.FC = () => {
  const page = contentData.pages.product;
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Editorial Split Hero combining Consultation & Conceptual Documentation UI */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#F4F9FA]/80 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Product Hero Information */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EBF3F5] text-[#507D88] border border-[#507D88]/20 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-[#507D88]" />
                <span>Complete Clinical Documentation Workflow</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {page.hero.h1}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[#507D88] leading-snug">
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
                  to="/about-contact?intent=bookDemo&topic=Other"
                  variant="outline"
                  size="lg"
                >
                  {page.cta.secondaryCta.label}
                </Button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#507D88]" />
                  Clinician Validation Control
                </span>
                <span>•</span>
                <span>Cloud & On-Premises Ready</span>
              </div>
            </div>

            {/* Right: Dual Editorial Visual (Consultation Frame + Conceptual SOAP UI) */}
            <div className="lg:col-span-6 space-y-4">
              <ClinicalDialogueVisual />

              {/* Generic Conceptual Documentation Interface Frame */}
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-lg p-5 sm:p-6 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-800">Conceptual Documentation Preview</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                    Schematic Mockup
                  </span>
                </div>

                {/* Labeled SOAP Structure */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-mono font-bold text-[#507D88] block text-[10px] uppercase">Subjective</span>
                    <span className="text-slate-600">Chief complaint & symptom timeline</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-mono font-bold text-[#507D88] block text-[10px] uppercase">Objective</span>
                    <span className="text-slate-600">Vitals & physical exam findings</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#EBF3F5]/60 border border-[#507D88]/20">
                    <span className="font-mono font-bold text-[#507D88] block text-[10px] uppercase">Assessment</span>
                    <span className="text-slate-700 font-medium">Synthesized clinical assessment</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#EBF3F5]/60 border border-[#507D88]/20">
                    <span className="font-mono font-bold text-[#507D88] block text-[10px] uppercase">Plan</span>
                    <span className="text-slate-700 font-medium">Medications, orders & follow-up</span>
                  </div>
                </div>

                {/* ICD-10 & CPT Support Row */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-[#507D88]" />
                    <span className="text-[11px] font-semibold text-slate-700">Coding Assistance:</span>
                  </div>
                  <div className="flex gap-1.5 text-[10px] font-mono">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-bold">ICD-10-CM</span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-bold">CPT Codes</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 italic text-center pt-1">
                  *Demonstration schematic. Contains no real patient identifiers or proprietary EHR logos.
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
              <Card key={idx} hover={true} className="text-center p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
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
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
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
                  className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700/60 hover:border-[#7AB1BF]/60 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#507D88]/20 text-[#7AB1BF] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="text-[11px] font-mono text-[#7AB1BF] pt-3 border-t border-slate-700 flex items-center gap-1.5">
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
        <div className="rounded-3xl bg-gradient-to-br from-[#EBF3F5]/80 via-white to-slate-50 border border-[#507D88]/30 p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mx-auto border border-[#507D88]/20 shadow-sm">
            <Network className="w-7 h-7" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-white px-4 py-1.5 rounded-full mb-3 border border-[#507D88]/20 shadow-xs">
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
