// src/pages/PartnersPage.tsx
import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlobalCollabMap } from '../components/diagrams/GlobalCollabMap';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import {
  Stethoscope,
  Microscope,
  Cpu,
  Globe2,
  Building2,
  Receipt,
  Layers,
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
        badge="PARTNERS & COLLABORATORS"
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
          target: '/contact?intent=bookDemo&topic=Other#contact-form',
        }}
        showVisual={false}
        backgroundImage="/images/hero/hero_partners_wide.webp"
        visualVariant="partners"
      />

      {/* 2. Global Map & Geographic Typography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalCollabMap />
      </section>

      {/* 3. Collaboration Opportunities (6 Textual Opportunities + 4 Visual Categories Filter) */}
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
                      ? 'bg-nourdoc-primary text-white shadow-sm'
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
                    <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-nourdoc-primary hover:text-nourdoc-primary-hover transition-colors"
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

      {/* 4. Closing CTA */}
      <GlobalCTA
        title={page.cta.h2}
        primaryLabel={page.cta.primaryCta.label}
        primaryTarget={page.cta.primaryCta.target || '/contact?topic=Partnership'}
        primaryIsApp={false}
        secondaryLabel={page.cta.secondaryCta.label}
        secondaryTarget="/contact?intent=bookDemo&topic=Other#contact-form"
      />
    </div>
  );
};
