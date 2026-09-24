// src/pages/AboutContactPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { Card } from '../components/common/Card';
import { ClinicalDialogueVisual } from '../components/visuals/ClinicalVisuals';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import {
  HeartHandshake,
  Eye,
  Building,
  Globe2,
  Code2,
  Microscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import contentData from '../data.json';

export const AboutContactPage: React.FC = () => {
  const page = contentData.pages.aboutContact;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Page Hero: Human First */}
      <Hero
        badge="ABOUT & CONTACT"
        h1={page.hero.h1}
        description={page.hero.lead}
        showVisual={false}
      />

      {/* 2. Hero Human-Centered Editorial Photo Frame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <ClinicalDialogueVisual />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#507D88]" />
              Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Technology That Listens, Understands, and Gives Time Back
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              NourDoc was created on the conviction that the clinical consultation is fundamentally human. By managing complex documentation, medical coding support, and downstream data integration, our platform enables clinicians to focus completely on diagnosis, care, and patient relationships.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Who We Are, Mission & Vision Progression */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Who We Are (M3 Hive) */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.whoWeAre.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.whoWeAre.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {page.whoWeAre.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-[#507D88]">
              <span>M3 Hive Engineering Initiative</span>
            </div>
          </Card>

          {/* Our Mission */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.ourMission.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.ourMission.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {page.ourMission.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-[#507D88]">
              <span>Reducing Administrative Friction</span>
            </div>
          </Card>

          {/* Our Vision */}
          <Card hover={false} className="bg-[#EBF3F5]/80 border-2 border-[#507D88]/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white text-[#507D88] flex items-center justify-center mb-4 shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                {page.ourVision.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.ourVision.h2}</h3>

              <div className="space-y-3 text-xs mt-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-800 block mb-1 text-[11px] uppercase tracking-wider">
                    {page.ourVision.today.label}
                  </span>
                  <span className="font-mono text-[#507D88] font-bold">
                    {page.ourVision.today.flow}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#507D88]/40 shadow-xs">
                  <span className="font-bold text-[#507D88] block mb-1 text-[11px] uppercase tracking-wider">
                    {page.ourVision.expanding.label}
                  </span>
                  <span className="font-mono text-[11px] text-slate-800 leading-snug block font-semibold">
                    {page.ourVision.expanding.flow}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 mt-4 pt-3 border-t border-[#507D88]/20 leading-relaxed">
              {page.ourVision.conclusion}
            </p>
          </Card>
        </div>
      </section>

      {/* 4. Canada / Pakistan / Finland Triad Story Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERNATIONAL FOUNDATION"
          title="Canadian Ownership. Pakistani Engineering. Finnish Research."
          description="NourDoc connects complementary cross-border capabilities into one cohesive HealthTech initiative."
        />

        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#7AB1BF]/40 via-[#507D88]/60 to-[#7AB1BF]/40 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Canada Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#507D88] block mb-1">
                  Region: North America
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Canadian Ownership & Global Positioning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An international foundation for product growth, strategic partnerships and global healthcare-market development.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#507D88]">
                <span>Governance & Positioning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pakistan Panel */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#507D88]/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#507D88] text-white flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#507D88] block mb-1">
                  Engineering Center: M3 Hive
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Pakistani Engineering (M3 Hive)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep engineering expertise across Artificial Intelligence, Machine Learning, Data Engineering, Software Development, Cloud Platforms, Generative AI, and Intelligent Automation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#507D88]">
                <span>Core AI & Platform Engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Finland Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-4">
                  <Microscope className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#507D88] block mb-1">
                  Region: Europe / Nordics
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Finnish Research & Healthcare Perspectives
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Research and healthcare perspectives contribute to continuous product evolution, rigorous clinical evaluation and real-world medical relevance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#507D88]">
                <span>Research & Clinical Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Contact Form & Working Mailto Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      {/* 6. Final CTA with Enterprise Box */}
      <GlobalCTA
        eyebrow={page.finalCta.eyebrow}
        title={page.finalCta.h2}
        subtitle={page.finalCta.sub}
        primaryLabel={page.finalCta.primaryCta.label}
        primaryIsApp={true}
        secondaryLabel={page.finalCta.secondaryCta.label}
        secondaryTarget="/about-contact?intent=bookDemo&topic=Other"
        showEnterpriseBox={true}
      />
    </div>
  );
};
