// src/pages/DesignSystemPage.tsx
import React from 'react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { SectionHeading } from '../components/common/SectionHeading';
import { AIEngineVisual } from '../components/diagrams/AIEngineVisual';
import { 
  ClinicalDialogueVisual, 
  AdministrativeBurdenVisual, 
  ClinicalAdvantageVisual, 
  PracticeWorkflowVisual, 
  MedicalCodingVisual,
  CollaborationExchangeVisual 
} from '../components/visuals/ClinicalVisuals';
import logoImg from '../assets/logo.png';
import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const DesignSystemPage: React.FC = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <Badge variant="teal" size="md">Design System Showcase</Badge>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
          NourDoc Premium HealthTech Design System
        </h1>
        <p className="mt-3 text-slate-600 max-w-3xl text-sm sm:text-base leading-relaxed">
          A restrained, clinical-grade design system engineered for high legibility, accessible color contrasts, and subtle visual hierarchy. White is dominant; <code className="font-mono text-[#507D88] font-bold">#507D88</code> and <code className="font-mono text-[#7AB1BF] font-bold">#7AB1BF</code> serve as focused accents.
        </p>
      </div>

      {/* 1. Official Logo Inspection at Real Scales */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          1. Official Brand Mark Inspection (Lossless Source Artboard)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center justify-center text-center space-y-3 bg-white">
            <div className="h-10 flex items-center justify-center p-1 border border-slate-100 rounded-lg">
              <img src={logoImg} alt="NourDoc Logo (Header Scale)" className="h-9 w-auto object-contain" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">Header Scale (h-9 / 36px)</span>
          </Card>

          <Card className="p-6 flex flex-col items-center justify-center text-center space-y-3 bg-white">
            <div className="h-16 flex items-center justify-center p-2 border border-slate-100 rounded-lg">
              <img src={logoImg} alt="NourDoc Logo (Hero Scale)" className="h-14 w-auto object-contain" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">Feature Scale (h-14 / 56px)</span>
          </Card>

          <Card className="p-6 flex flex-col items-center justify-center text-center space-y-3 bg-slate-900 text-white">
            <div className="h-16 flex items-center justify-center p-2 bg-white/10 rounded-lg">
              <img src={logoImg} alt="NourDoc Logo (Dark Contrast)" className="h-14 w-auto object-contain brightness-105" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400">Dark Background Placement</span>
          </Card>
        </div>
      </section>

      {/* 2. Color Palette & WCAG Contrast Verification */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          2. Color Palette & Measured Contrast Tokens
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Primary Teal */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-20 bg-[#507D88] p-3 flex flex-col justify-end text-white">
              <span className="font-mono text-xs font-bold">#507D88</span>
            </div>
            <div className="p-4 bg-white space-y-1">
              <div className="font-bold text-xs text-slate-900">Primary Teal</div>
              <div className="text-[11px] text-slate-500">Core Brand Accent & CTAs</div>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">
                Contrast on White: 4.54:1 (AA)
              </div>
            </div>
          </div>

          {/* Secondary Light Teal */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-20 bg-[#7AB1BF] p-3 flex flex-col justify-end text-slate-900">
              <span className="font-mono text-xs font-bold">#7AB1BF</span>
            </div>
            <div className="p-4 bg-white space-y-1">
              <div className="font-bold text-xs text-slate-900">Secondary Light Teal</div>
              <div className="text-[11px] text-slate-500">Highlights & Node Accents</div>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">
                Contrast on Dark: 6.82:1 (AAA)
              </div>
            </div>
          </div>

          {/* Dark Slate Background */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-20 bg-[#0F172A] p-3 flex flex-col justify-end text-white">
              <span className="font-mono text-xs font-bold">#0F172A</span>
            </div>
            <div className="p-4 bg-white space-y-1">
              <div className="font-bold text-xs text-slate-900">Dark Slate Neutral</div>
              <div className="text-[11px] text-slate-500">Footer & Architecture Diagrams</div>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">
                White on Dark: 18.5:1 (AAA)
              </div>
            </div>
          </div>

          {/* Soft Tint Surface */}
          <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="h-20 bg-[#EBF3F5] p-3 flex flex-col justify-end text-[#507D88]">
              <span className="font-mono text-xs font-bold">#EBF3F5</span>
            </div>
            <div className="p-4 bg-white space-y-1">
              <div className="font-bold text-xs text-slate-900">Teal Soft Surface</div>
              <div className="text-[11px] text-slate-500">Badges & Interactive Backdrops</div>
              <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">
                Teal on Surface: 4.1:1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Typography Hierarchy */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          3. Typography Hierarchy (Plus Jakarta Sans & JetBrains Mono)
        </h2>
        <Card className="p-6 space-y-6 divide-y divide-slate-100">
          <div className="pt-2">
            <div className="text-xs font-mono text-slate-400 mb-1">Display H1 (36px - 56px / Font-black)</div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Listen to the Patient. Let AI Handle the Paperwork.
            </h1>
          </div>

          <div className="pt-6">
            <div className="text-xs font-mono text-slate-400 mb-1">Section Heading H2 (24px - 36px / Font-extrabold)</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Healthcare Technology Should Reduce Administrative Work
            </h2>
          </div>

          <div className="pt-6">
            <div className="text-xs font-mono text-slate-400 mb-1">Subsection Heading H3 (18px - 22px / Font-bold)</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Point-of-Care Ambient Capture & SOAP Note Generation
            </h3>
          </div>

          <div className="pt-6">
            <div className="text-xs font-mono text-slate-400 mb-1">Lead Body Text (16px / Leading-relaxed)</div>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              NourDoc assists healthcare providers by capturing clinical dialogue and transforming it into structured SOAP notes, ready for review before entering EHR systems.
            </p>
          </div>

          <div className="pt-6">
            <div className="text-xs font-mono text-slate-400 mb-1">Standard Body Text (14px / Leading-normal)</div>
            <p className="text-sm text-slate-600 leading-normal max-w-3xl">
              Architecture capability statements: NourDoc's platform architecture is designed to entertain 1+ million clinical encounters per day in appropriately configured enterprise environments.
            </p>
          </div>
        </Card>
      </section>

      {/* 4. Button & Action Primitives */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          4. Button Hierarchy & Interactive States
        </h2>
        <Card className="p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" icon={true}>
              TRY NOURDOC FREE
            </Button>
            <Button variant="primary" size="md">
              Book a Demo
            </Button>
            <Button variant="secondary" size="md">
              Choose Starter
            </Button>
            <Button variant="outline" size="md">
              Talk to Enterprise
            </Button>
            <Button variant="dark" size="md">
              Technical Architecture
            </Button>
            <Button variant="ghost" size="md">
              View Documentation
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="outline" size="sm">Small Outline</Button>
            <Button variant="primary" size="md" disabled={true}>Disabled State</Button>
          </div>
        </Card>
      </section>

      {/* 5. Badges, Cards & Indicators */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          5. Badges, Indicators & Feedback Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Badges & Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="teal">Primary Teal</Badge>
              <Badge variant="outline">Enterprise</Badge>
              <Badge variant="neutral">Starter</Badge>
              <Badge variant="success">Claim-Ready</Badge>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Status Indicators</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Validation Success & Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700 font-medium">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Unconfigured Delivery Warning</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#507D88]" />
                <span>HIPAA-Conforming Design</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Section Headings</h3>
            <SectionHeading
              eyebrow="Clinical Governance"
              title="Enterprise Control"
              description="Standardized audit trails and compliance."
              align="left"
            />
          </Card>
        </div>
      </section>

      {/* 6. Custom SVG/CSS Clinical Visuals Showcase */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          6. Code-Native Clinical Visuals & Diagrams (SVG/CSS Architecture)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClinicalDialogueVisual />
          <CollaborationExchangeVisual />
          <PracticeWorkflowVisual />
          <MedicalCodingVisual />
          <AdministrativeBurdenVisual />
          <ClinicalAdvantageVisual />
        </div>
      </section>

      {/* 7. Proprietary NourDoc AI Engine Pipeline Visual */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          7. Proprietary Clinical Engine Pipeline Visual (Code-Native SVG/HTML)
        </h2>
        <AIEngineVisual />
      </section>
    </div>
  );
};

export default DesignSystemPage;
