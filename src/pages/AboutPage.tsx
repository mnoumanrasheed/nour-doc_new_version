// src/pages/AboutPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SectionHeading } from '../components/common/SectionHeading';
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

export const AboutPage: React.FC = () => {
  const page = contentData.pages.about;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Page Hero: Human First with Clinical Dialogue Background */}
      <Hero
        badge="ABOUT NOURDOC"
        h1={page.hero.h1}
        description={page.hero.lead}
        showVisual={false}
        backgroundImage="/images/hero/hero_about_wide.webp"
        visualVariant="about"
      />

{/* 2. Canada / Pakistan / Finland Triad Story Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERNATIONAL FOUNDATION"
          title="Canadian Ownership. Pakistani Engineering. Finnish Research."
          description="NourDoc connects complementary cross-border capabilities into one cohesive HealthTech initiative."
        />

        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-nourdoc-secondary/40 via-nourdoc-primary/60 to-nourdoc-secondary/40 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Canada Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="aspect-[3/2] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-100 shadow-[0_10px_24px_rgba(15,42,34,0.10)]">
                  <img
                    src="/images/sections/about_canada.webp"
                    alt="Canadian healthcare ownership and governance"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 text-nourdoc-primary flex items-center justify-center shadow-xs">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                    Region: North America
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Canadian Ownership & Global Positioning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An international foundation for product growth, strategic partnerships and global healthcare-market development.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-nourdoc-primary">
                <span>Governance & Positioning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pakistan Panel */}
            <div className="bg-white rounded-2xl p-6 border-2 border-nourdoc-primary/30 shadow-md flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="aspect-[3/2] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-100 shadow-[0_10px_24px_rgba(15,42,34,0.10)]">
                  <img
                    src="/images/sections/about_pakistan.jpg"
                    alt="Pakistani AI and software engineering team at M3 Hive"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-nourdoc-primary text-white flex items-center justify-center shadow-xs">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
                    Engineering Center: M3 Hive
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Pakistani Engineering (M3 Hive)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep engineering expertise across Artificial Intelligence, Machine Learning, Data Engineering, Software Development, Cloud Platforms, Generative AI, and Intelligent Automation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-nourdoc-primary">
                <span>Core AI & Platform Engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Finland Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="aspect-[3/2] w-full rounded-xl overflow-hidden mb-4 relative bg-slate-100 shadow-[0_10px_24px_rgba(15,42,34,0.10)]">
                  <img
                    src="/images/sections/about_finland.webp"
                    alt="Finnish clinical research and healthcare evaluation laboratory"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nourdoc-primary-dark/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 text-nourdoc-primary flex items-center justify-center shadow-xs">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-2 left-3 text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                    Region: Europe / Nordics
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Finnish Research & Healthcare Perspectives
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Research and healthcare perspectives contribute to continuous product evolution, rigorous clinical evaluation and real-world medical relevance.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-nourdoc-primary">
                <span>Research & Clinical Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Human-Centered Editorial Visual Frame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <ClinicalDialogueVisual />
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-nourdoc-primary/15 bg-[linear-gradient(145deg,#ffffff_0%,#f3faf7_100%)] p-7 shadow-[0_18px_50px_rgba(15,42,34,0.08)] sm:p-9 lg:col-span-6 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-nourdoc-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/5 bg-gradient-to-r from-nourdoc-primary to-nourdoc-secondary" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-nourdoc-primary/10 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-nourdoc-primary shadow-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  Core philosophy
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-nourdoc-primary/60">Human-first AI</span>
              </div>

              <h2 className="mt-7 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.045em] text-slate-900 sm:text-4xl">
                Technology That Listens, Understands, and Gives Time Back
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                NourDoc was created on the conviction that the clinical consultation is fundamentally human. By managing complex documentation, medical coding support, and downstream data integration, our platform enables clinicians to focus completely on diagnosis, care, and patient relationships.
              </p>

              <div className="mt-7 grid gap-2.5 sm:grid-cols-3">
                {['Listen naturally', 'Structure intelligently', 'Keep clinicians in control'].map((value, index) => (
                  <div key={value} className="rounded-xl border border-nourdoc-primary/10 bg-white/80 px-3.5 py-3">
                    <span className="text-[10px] font-mono font-bold text-nourdoc-primary/60">0{index + 1}</span>
                    <p className="mt-1 text-xs font-bold leading-snug text-slate-800">{value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Who We Are, Mission & Vision Progression */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Who We Are (M3 Hive) */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block mb-1">
                {page.whoWeAre.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.whoWeAre.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {page.whoWeAre.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-nourdoc-primary">
              <span>M3 Hive Engineering Initiative</span>
            </div>
          </Card>

          {/* Our Mission */}
          <Card hover={false} className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block mb-1">
                {page.ourMission.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.ourMission.h2}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {page.ourMission.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-nourdoc-primary">
              <span>Reducing Administrative Friction</span>
            </div>
          </Card>

          {/* Our Vision */}
          <Card hover={false} className="bg-nourdoc-primary-light/80 border-2 border-nourdoc-primary/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white text-nourdoc-primary flex items-center justify-center mb-4 shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-nourdoc-primary uppercase tracking-wider block mb-1">
                {page.ourVision.eyebrow}
              </span>
              <h3 className="text-xl font-black text-slate-900 mb-3">{page.ourVision.h2}</h3>

              <div className="space-y-3 text-xs mt-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-800 block mb-1 text-[11px] uppercase tracking-wider">
                    {page.ourVision.today.label}
                  </span>
                  <span className="font-mono text-nourdoc-primary font-bold">
                    {page.ourVision.today.flow}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-nourdoc-primary/40 shadow-xs">
                  <span className="font-bold text-nourdoc-primary block mb-1 text-[11px] uppercase tracking-wider">
                    {page.ourVision.expanding.label}
                  </span>
                  <span className="font-mono text-[11px] text-slate-800 leading-snug block font-semibold">
                    {page.ourVision.expanding.flow}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 mt-4 pt-3 border-t border-nourdoc-primary/20 leading-relaxed">
              {page.ourVision.conclusion}
            </p>
          </Card>
        </div>
      </section>

      {/* 5. Final CTA leading to Contact / Demo */}
      <GlobalCTA
        eyebrow="CONNECT WITH NOURDOC"
        title="Experience the Next Generation of Clinical Intelligence"
        subtitle="Let AI assist with the administrative work. Let healthcare professionals focus on clinical care."
        primaryLabel="TRY NOURDOC FREE"
        primaryIsApp={true}
        secondaryLabel="BOOK A DEMO"
        secondaryTarget="/contact"
      />
    </div>
  );
};

export default AboutPage;

