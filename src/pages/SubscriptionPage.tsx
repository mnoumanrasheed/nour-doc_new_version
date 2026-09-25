// src/pages/SubscriptionPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { PricingTierGrid } from '../components/sections/PricingTierGrid';
import { Button } from '../components/common/Button';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { 
  Check, 
  ArrowRight, 
  User, 
  Users, 
  Building2, 
  Cpu
} from 'lucide-react';
import contentData from '../data.json';

export const SubscriptionPage: React.FC = () => {
  const page = contentData.pages.subscription;
  const custom = page.customEnterprise;

  const growthStages = [
    {
      stage: '01',
      title: 'Individual Clinician',
      subtitle: 'Point-of-Care Assistant',
      desc: 'Mobile ambient capture & instant SOAP drafting.',
      icon: User,
    },
    {
      stage: '02',
      title: 'Practice & Team',
      subtitle: 'Collaborative Practice',
      desc: 'Team workflows, shared templates & ICD-10/CPT support.',
      icon: Users,
    },
    {
      stage: '03',
      title: 'Hospital & Network',
      subtitle: 'Departmental Integration',
      desc: 'EHR/EMR/HIMS integration & centralized management.',
      icon: Building2,
    },
    {
      stage: '04',
      title: 'Enterprise Operations',
      subtitle: 'High-Volume Batch Engine',
      desc: '1M+ encounters/day capability & multi-format RCM pipelines.',
      icon: Cpu,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Hero with Clinical Practice Photography Background */}
      <Hero
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.cta.primaryCta}
        secondaryCta={page.cta.secondaryCta}
        showVisual={false}
        backgroundImage="/images/hero/hero_subscription.jpg"
      />

      {/* 2. Four Tier Cards (Free / Starter / Professional / Enterprise) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TIERED HEALTHCARE EDITIONS"
          title="Designed for Every Stage of Clinical Practice"
          description="Select the edition tailored to your consultation volume, clinical specialization, and integration requirements."
        />

        <PricingTierGrid tiers={page.tiers} />

        {/* Ethical Transparency Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Notice:</strong> NourDoc plan tiers represent functional capability specifications. Every plan CTA connects directly to our onboarding channel or Google Play Store application. No hidden checkout fees or auto-renew charges are processed through this informational site.
          </p>
        </div>
      </section>

      {/* 3. Growth Pathway (Linear Journey) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3.5 py-1 rounded-full border border-[#507D88]/20">
              Scalable Growth Pathway
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Smooth Pathway as Your Clinical Needs Evolve
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Start with mobile ambient assistance on your personal device and expand into enterprise-wide EHR integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {growthStages.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#507D88]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      PHASE {st.stage}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                      {st.title}
                    </h4>
                    <span className="text-xs font-bold text-[#507D88] block mt-0.5 mb-2">
                      {st.subtitle}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <span>Seamless Transition</span>
                    <ArrowRight className="w-3 h-3 text-[#507D88]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Custom Enterprise Full-Width Configurability Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-xs font-bold text-[#7AB1BF] uppercase tracking-widest bg-slate-800 px-3.5 py-1 rounded-full border border-slate-700">
                {custom.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {custom.h2}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {custom.description}
              </p>
              <div className="pt-2">
                <Button
                  to="/contact?topic=Enterprise+Deployment"
                  variant="primary"
                  size="lg"
                  icon={true}
                >
                  {custom.cta.label}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {custom.aspects.map((asp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/60 hover:border-[#7AB1BF]/60 transition-all flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-100"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#507D88]/30 text-[#7AB1BF] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{asp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Page CTA */}
      <GlobalCTA
        title={page.cta.h2}
        primaryLabel={page.cta.primaryCta.label}
        secondaryLabel={page.cta.secondaryCta.label}
      />
    </div>
  );
};

export default SubscriptionPage;
