// src/pages/MedicalCodingPage.tsx
import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Enterprise1MStat } from '../components/diagrams/Enterprise1MStat';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Hero } from '../components/sections/Hero';
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
      <Hero
        badge="CODING & BILLING"
        h1={page.hero.h1}
        description={page.hero.description}
        primaryCta={{ label: 'BOOK AN ENTERPRISE DEMO', type: 'demo' }}
        secondaryCta={{ label: 'TALK TO OUR TEAM', type: 'route', target: '/contact?topic=Batch+Processing' }}
        backgroundImage="/images/hero/cand_505751.jpg"
        backgroundAlt="Stethoscope and clinical writing instruments on a medical surface"
        visualVariant="coding"
      />
      {/* 1. Flagship Enterprise Hero */}
      <section className="hidden hero-100vsh relative overflow-hidden flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-nourdoc-primary-surface/80 via-white to-white border-b border-slate-100">
        {/* Background Photography Layer with a lighter directional scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/hero/hero_medical_coding.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center lg:object-right select-none"
            loading="eager"
          />
          {/* Directional Horizontal Scrim on Desktop */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 via-45% to-transparent" />
          
          {/* Directional Scrim on Tablet / Mobile */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/15" />

          {/* Subtle Top & Bottom Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
          <div className="max-w-2xl text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-nourdoc-primary-light text-nourdoc-primary border border-nourdoc-primary/20 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-nourdoc-primary" />
              <span>CODING &amp; BILLING</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {page.hero.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed whitespace-pre-line max-w-xl">
              {page.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
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

            <div className="flex items-center justify-start gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-nourdoc-primary" />
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
                  <div className="w-12 h-12 rounded-2xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
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
        <div className="rounded-3xl bg-nourdoc-primary-dark text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-nourdoc-secondary uppercase tracking-widest bg-white/5 px-3.5 py-1 rounded-full border border-white/10">
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
                className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-nourdoc-secondary border border-white/10">
                      STAGE {st.num}
                    </span>
                    <Workflow className="w-4 h-4 text-slate-500" />
                  </div>
                  <h3 className="text-base font-black text-white mb-3 tracking-wide">{st.title}</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {st.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-nourdoc-secondary shrink-0" />
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
            <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
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
                className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs hover:border-nourdoc-primary/50 hover:shadow-md transition-all flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-slate-800"
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
              <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block mb-1">
                {page.rcmLayer.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{page.rcmLayer.h2}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {page.rcmLayer.areas.map((area, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-nourdoc-primary" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
              {page.rcmLayer.conclusion}
            </p>
          </Card>

          {/* Human Review */}
          <Card hover={false} className="bg-nourdoc-primary-light/80 border-2 border-nourdoc-primary/30 p-8 flex flex-col justify-between space-y-5 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-nourdoc-primary flex items-center justify-center mb-4 shadow-xs border border-nourdoc-primary/20">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block mb-1">
                {page.humanReview.eyebrow}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{page.humanReview.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {page.humanReview.description}
              </p>
            </div>
            <div className="pt-3 border-t border-nourdoc-primary/20 text-[11px] font-mono text-nourdoc-primary font-bold">
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
