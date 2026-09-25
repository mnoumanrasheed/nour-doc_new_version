// src/pages/MedicalCodingPage.tsx
import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Enterprise1MStat } from '../components/diagrams/Enterprise1MStat';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  FileSpreadsheet, 
  Mic, 
  FileText, 
  FileAudio, 
  Database, 
  UserCheck, 
  Check, 
  Cpu, 
  ShieldCheck,
  Workflow
} from 'lucide-react';
import contentData from '../data.json';

const challengeIcons = [Mic, FileText, FileAudio, FileSpreadsheet, Database];

export const MedicalCodingPage: React.FC = () => {
  const page = contentData.pages.medicalCoding;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Flagship Enterprise Hero */}
      <section className="hero-100vsh relative overflow-hidden flex flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-[#F4F9FA]/80 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EBF3F5] text-[#507D88] border border-[#507D88]/20 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-[#507D88]" />
              <span>{page.hero.badge}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {page.hero.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
              {page.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                to="/contact?intent=bookDemo&topic=Other"
                variant="primary"
                size="lg"
                icon={true}
              >
                BOOK AN ENTERPRISE DEMO
              </Button>
              <Button
                to="/contact?topic=Batch+Processing"
                variant="outline"
                size="lg"
              >
                TALK TO OUR TEAM
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#507D88]" />
                Professional Validation Workflow
              </span>
              <span>•</span>
              <span>1M+ Encounters/Day Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise-Scale Processing (1M+ Stat Display with Exact Qualifier) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.enterpriseScale.eyebrow}
          title={page.enterpriseScale.h2}
          description="A scalable clinical information engine built for high-throughput batch environments."
        />
        <Enterprise1MStat />
      </section>

      {/* 3. The Enterprise Challenge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.enterpriseChallenge.eyebrow}
          title={page.enterpriseChallenge.h2}
          description={`${page.enterpriseChallenge.lead} ${page.enterpriseChallenge.conclusion}`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {page.enterpriseChallenge.inputs.map((inp, idx) => {
            const Icon = challengeIcons[idx % challengeIcons.length];
            return (
              <Card key={idx} hover={true} className="text-center p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{inp}</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                  INPUT STREAM 0{idx + 1}
                </span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. The 6-Stage Batch Processing Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-[#7AB1BF] uppercase tracking-widest bg-slate-800 px-3.5 py-1 rounded-full border border-slate-700">
              {page.batchPipeline.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {page.batchPipeline.h2}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Six-stage batch automation transforming diverse clinical voice and text payloads into claim-ready records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.batchPipeline.stages.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/70 hover:border-[#7AB1BF]/60 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-900 text-[#7AB1BF] border border-slate-700">
                      STAGE {st.num}
                    </span>
                    <Workflow className="w-4 h-4 text-slate-500" />
                  </div>
                  <h3 className="text-base font-black text-white mb-3 tracking-wide">{st.title}</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {st.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7AB1BF] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Multiple Output Formats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3.5 py-1 rounded-full border border-[#507D88]/20">
              {page.outputFormats.eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              {page.outputFormats.h2}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {page.outputFormats.conclusion}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
            {page.outputFormats.formats.map((fmt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs hover:border-[#507D88]/50 hover:shadow-md transition-all flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-slate-800"
              >
                {fmt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Revenue Cycle Workflows & Human Review */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RCM Layer */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 p-8 space-y-5">
            <div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.rcmLayer.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{page.rcmLayer.h2}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {page.rcmLayer.areas.map((area, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#507D88]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
              {page.rcmLayer.conclusion}
            </p>
          </Card>

          {/* Human Review */}
          <Card hover={false} className="bg-[#EBF3F5]/80 border-2 border-[#507D88]/30 p-8 flex flex-col justify-between space-y-5 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#507D88] flex items-center justify-center mb-4 shadow-xs border border-[#507D88]/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.humanReview.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{page.humanReview.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {page.humanReview.description}
              </p>
            </div>
            <div className="pt-3 border-t border-[#507D88]/20 text-[11px] font-mono text-[#507D88] font-bold">
              Full Regulatory & Organizational Compliance
            </div>
          </Card>
        </div>
      </section>

      {/* 7. Enterprise Closing CTA */}
      <GlobalCTA
        title={page.cta.h2}
        subtitle={page.cta.lead}
        primaryLabel={page.cta.primaryCta.label}
        primaryTarget="/contact?intent=bookDemo&topic=Other"
        primaryIsApp={false}
        secondaryLabel="TALK TO OUR TEAM"
        secondaryTarget="/contact?topic=Batch+Processing"
      />
    </div>
  );
};

export default MedicalCodingPage;
