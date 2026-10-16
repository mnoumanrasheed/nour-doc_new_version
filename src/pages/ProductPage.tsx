// src/pages/ProductPage.tsx
import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { CapabilitiesGrid } from '../components/sections/CapabilitiesGrid';
import { AIEngineVisual } from '../components/diagrams/AIEngineVisual';
import { Card } from '../components/common/Card';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { Hero } from '../components/sections/Hero';
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
} from 'lucide-react';
import contentData from '../data.json';

const inputIcons = [Mic, FileAudio, FileText, FileCode2, Database];

export const ProductPage: React.FC = () => {
  const page = contentData.pages.product;

  return (
    <div className="space-y-16 md:space-y-24">
      <Hero
        badge="AI PLATFORM"
        h1="Meet NourDoc"
        subtitle={page.hero.subtitle}
        description={page.hero.description}
        primaryCta={page.cta.primaryCta}
        secondaryCta={page.cta.secondaryCta}
        backgroundImage="/images/hero/hero_product_wide.webp"
        backgroundAlt="Clinician using a laptop during a healthcare workflow"
        visualVariant="product"
      />


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
              <Card key={idx} hover={true} revealDelay={idx * 0.1} className="text-center p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
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
        <div className="nourdoc-ambient-surface rounded-3xl bg-nourdoc-primary-dark text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl space-y-8">
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
                  className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-nourdoc-primary/20 text-nourdoc-secondary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="text-[11px] font-mono text-nourdoc-secondary pt-3 border-t border-white/10 flex items-center gap-1.5">
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
        <div className="rounded-3xl bg-gradient-to-br from-nourdoc-primary-light/80 via-white to-slate-50 border border-nourdoc-primary/30 p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-white text-nourdoc-primary flex items-center justify-center mx-auto border border-nourdoc-primary/20 shadow-sm">
            <Network className="w-7 h-7" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-white px-4 py-1.5 rounded-full mb-3 border border-nourdoc-primary/20 shadow-xs">
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
