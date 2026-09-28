// src/pages/SubscriptionPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { PricingTierGrid } from '../components/sections/PricingTierGrid';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
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
        badge="PLANS & PRICING"
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={page.cta.primaryCta}
        secondaryCta={page.cta.secondaryCta}
        showVisual={false}
        backgroundImage="/images/hero/hero_subscription.jpg"
      />

      {/* 2. Four Tier Cards (Free / Starter / Professional / Enterprise) */}
      <section className="bg-[#F7FAF9] py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mx-auto mb-10 max-w-2xl text-center" y={16}>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-nourdoc-primary">
              Tiered Healthcare Editions
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Plans designed to scale with you
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              From individual clinicians to enterprise healthcare organizations.
            </p>
          </RevealOnScroll>

          <PricingTierGrid tiers={page.tiers} />

          <p className="mt-8 text-center text-sm text-slate-600">
            Need help choosing a plan?{' '}
            <Link to="/contact?topic=Subscription" className="inline-flex items-center gap-1 font-semibold text-nourdoc-primary hover:text-nourdoc-primary-hover hover:underline underline-offset-4">
              Talk to our team <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>

          {/* Ethical Transparency Notice */}
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-slate-200 bg-white/80 p-4 text-center">
            <p className="text-xs leading-relaxed text-slate-500">
              <strong className="text-slate-700">Notice:</strong> NourDoc plan tiers represent functional capability specifications. Every plan CTA connects directly to our onboarding channel or Google Play Store application. No hidden checkout fees or auto-renew charges are processed through this informational site.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Growth Pathway (Linear Journey) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
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
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-nourdoc-primary/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
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
                    <span className="text-xs font-bold text-nourdoc-primary block mt-0.5 mb-2">
                      {st.subtitle}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <span>Seamless Transition</span>
                    <ArrowRight className="w-3 h-3 text-nourdoc-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Custom Enterprise Full-Width Configurability Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-nourdoc-primary-dark text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block text-xs font-bold text-nourdoc-secondary uppercase tracking-widest bg-white/5 px-3.5 py-1 rounded-full border border-white/10">
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
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-100"
                  >
                    <div className="w-7 h-7 rounded-lg bg-nourdoc-primary/30 text-nourdoc-secondary flex items-center justify-center shrink-0">
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
