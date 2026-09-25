// src/pages/PartnersPage.tsx
import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlobalCollabMap } from '../components/diagrams/GlobalCollabMap';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import { CollaborationExchangeVisual } from '../components/visuals/ClinicalVisuals';
import {
  Stethoscope,
  Microscope,
  Cpu,
  Globe2,
  Building2,
  Receipt,
  Users,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import contentData from '../data.json';
import { Link } from 'react-router-dom';

type CategoryFilter = 'all' | 'research' | 'clinical' | 'technology' | 'commercial';

interface CategoryMeta {
  id: CategoryFilter;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const visualCategories: CategoryMeta[] = [
  {
    id: 'all',
    label: 'All Opportunities',
    icon: Layers,
    description: 'Explore all six collaborative tracks across clinical, research, tech, and enterprise.',
  },
  {
    id: 'research',
    label: 'Research',
    icon: Microscope,
    description: 'Algorithmic precision, clinical validation, and ambient intelligence studies.',
  },
  {
    id: 'clinical',
    label: 'Clinical',
    icon: Stethoscope,
    description: 'Point-of-care workflow testing and physician documentation experience.',
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: Cpu,
    description: 'EHR/EMR integration, API data feeds, and batch data processing pipelines.',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: Globe2,
    description: 'Enterprise deployment, regional distribution, and revenue cycle partnerships.',
  },
];

interface OpportunityItem {
  title: string;
  desc: string;
  category: 'research' | 'clinical' | 'technology' | 'commercial';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  actionTopic: string;
}

const opportunitiesData: OpportunityItem[] = [
  {
    title: 'Clinical Collaboration',
    desc: 'Evaluate NourDoc in real-world clinical environments.',
    category: 'clinical',
    categoryLabel: 'Clinical',
    icon: Stethoscope,
    actionTopic: 'Partnership',
  },
  {
    title: 'Research Collaboration',
    desc: 'Study ambient clinical intelligence, documentation and healthcare AI.',
    category: 'research',
    categoryLabel: 'Research',
    icon: Microscope,
    actionTopic: 'Research Collaboration',
  },
  {
    title: 'Technology Integration',
    desc: 'Connect NourDoc with healthcare systems and platforms.',
    category: 'technology',
    categoryLabel: 'Technology',
    icon: Cpu,
    actionTopic: 'EHR / EMR / HIMS Integration',
  },
  {
    title: 'Commercial Partnership',
    desc: 'Bring NourDoc into new healthcare markets.',
    category: 'commercial',
    categoryLabel: 'Commercial',
    icon: Globe2,
    actionTopic: 'Partnership',
  },
  {
    title: 'Enterprise Deployment',
    desc: 'Deploy NourDoc across hospitals, healthcare networks and organizations.',
    category: 'commercial',
    categoryLabel: 'Commercial & Enterprise',
    icon: Building2,
    actionTopic: 'Enterprise Deployment',
  },
  {
    title: 'Coding & Billing Partnership',
    desc: "Use NourDoc's batch-processing capabilities within medical coding, billing and revenue-cycle workflows.",
    category: 'technology',
    categoryLabel: 'Technology & Operations',
    icon: Receipt,
    actionTopic: 'Medical Coding & Billing',
  },
];

export const PartnersPage: React.FC = () => {
  const page = contentData.pages.partners;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredOpportunities =
    activeCategory === 'all'
      ? opportunitiesData
      : opportunitiesData.filter((opp) => opp.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Page Hero with Global Healthcare Collaboration Background */}
      <Hero
        badge="GLOBAL HEALTHCARE AI COLLABORATION"
        h1={page.hero.h1}
        description={page.hero.lead}
        primaryCta={{
          label: page.cta.primaryCta.label,
          type: 'route',
          target: page.cta.primaryCta.target || '/contact?topic=Partnership',
        }}
        secondaryCta={{
          label: page.cta.secondaryCta.label,
          type: 'demo',
          target: '/contact?intent=bookDemo&topic=Other',
        }}
        showVisual={false}
        backgroundImage="/images/hero/hero_partners.jpg"
      />

      {/* 2. Global Map & Geographic Typography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalCollabMap />
      </section>

      {/* 3. Pakistani Engineering (M3 Hive) Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Contextual Engineering Team Photography Background Tint */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
            <img
              src="/images/sections/about_pakistan.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7AB1BF] uppercase tracking-widest bg-slate-800/90 px-3.5 py-1.5 rounded-full mb-3 border border-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#7AB1BF]" />
                  Technology Leadership
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Pakistani Engineering (M3 Hive)
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {page.globalCollaboration.pillars[1].desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact?topic=Partnership"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-100 border border-slate-600 transition-colors"
                >
                  <span>Connect with Engineering</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7AB1BF]" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {page.globalCollaboration.pillars[1].skills?.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-[#7AB1BF]/50 hover:bg-slate-800 transition-all text-center flex flex-col items-center justify-center min-h-[84px]"
                >
                  <span className="text-xs font-mono text-[#7AB1BF] mb-1">0{idx + 1}</span>
                  <span className="font-bold text-xs sm:text-sm text-slate-100 leading-snug">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Collaboration Opportunities (6 Textual Opportunities + 4 Visual Categories Filter) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={page.opportunities.eyebrow}
          title={page.opportunities.h2}
          description="We collaborate with clinicians, researchers, healthcare institutions, and technology providers worldwide across four key functional tracks."
        />

        {/* Visual PDF 4-Category Secondary Filter / Navigation */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {visualCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#507D88] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">
            {visualCategories.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>

        {/* 6 Textual Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp, idx) => {
            const Icon = opp.icon;
            return (
              <Card key={idx} hover={true} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="neutral" size="sm">
                      {opp.categoryLabel}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{opp.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {opp.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <Link
                    to={`/contact?topic=${encodeURIComponent(opp.actionTopic)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#507D88] hover:text-[#3B5C64] transition-colors"
                  >
                    <span>Discuss Collaboration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 5. Editorial Clinical Collaboration Frame & "Build With Healthcare" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Cross-Border Clinical Exchange Visual */}
          <div className="lg:col-span-5">
            <CollaborationExchangeVisual />
          </div>

          {/* Right: Build With Healthcare Callout Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-br from-[#EBF3F5] via-white to-[#EBF3F5]/60 border-2 border-[#507D88]/20 p-8 sm:p-10 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#507D88] text-white flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-2 font-mono">
                {page.buildWithHealthcare.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                {page.buildWithHealthcare.h2}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-medium">
                {page.buildWithHealthcare.description.split('\n\n')[0]}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#507D88]/30 shadow-xs">
                <p className="text-base sm:text-lg font-black text-[#507D88] tracking-tight">
                  “Build with healthcare. Not just for healthcare.”
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  NourDoc Core Principle — Clinical intelligence shaped directly by practicing medical professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <GlobalCTA
        title={page.cta.h2}
        primaryLabel={page.cta.primaryCta.label}
        primaryTarget={page.cta.primaryCta.target || '/contact?topic=Partnership'}
        primaryIsApp={false}
        secondaryLabel={page.cta.secondaryCta.label}
        secondaryTarget="/contact?intent=bookDemo&topic=Other"
      />
    </div>
  );
};
