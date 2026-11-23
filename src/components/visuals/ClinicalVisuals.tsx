// src/components/visuals/ClinicalVisuals.tsx
import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Mic
} from 'lucide-react';

/**
 * 1. Clinical Consultation & Ambient AI Layer Visual
 * Represents: Doctor speaking naturally with patient in clinical environment + subtle translucent jade AI layer
 */
export const ClinicalDialogueVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[26px] border border-white/10 p-5 text-white shadow-[0_24px_60px_rgba(15,42,34,0.24)] sm:p-7 ${className}`}
      style={{ background: 'linear-gradient(145deg, #0d342d 0%, #174c40 58%, #123d34 100%)' }}
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-16 h-32 w-32 rounded-full border border-emerald-200/10" />
      <div className="pointer-events-none absolute right-14 top-22 h-20 w-20 rounded-full border border-emerald-200/10" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-200/75">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)] animate-pulse" />
            Live ambient session
          </div>
          <p className="mt-1.5 text-sm font-semibold text-white/90">Listening for clinical meaning</p>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[9px] font-mono text-emerald-100/75">NOURDOC / 01</span>
      </div>

      {/* Main visual composition */}
      <div className="relative z-10 mt-5 space-y-3">
        {/* Dialogue Stream */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-100/75">
            <span className="flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-nourdoc-secondary" />
              Speech signal
            </span>
            <span className="text-emerald-300">Active</span>
          </div>

          {/* SVG Animated-feel waveform */}
          <div className="mt-4 flex h-10 items-center justify-between gap-1 rounded-xl border border-white/10 bg-black/10 px-3">
            {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 70, 85, 40, 90, 65, 30, 80, 50, 95, 60, 40, 75].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-emerald-500/50 to-emerald-200 animate-pulse"
                style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Real-time AI Extraction Box */}
        <div className="rounded-2xl border border-emerald-200/20 bg-emerald-100/[0.08] p-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-100/75">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-nourdoc-secondary" />
              Clinical synthesis
            </span>
            <span className="text-emerald-300">Ready</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
              <span className="text-nourdoc-secondary block font-bold mb-0.5">Assessment:</span>
              <span className="text-slate-300">Acute bronchitis with mild dyspnea</span>
            </div>
            <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
              <span className="text-nourdoc-secondary block font-bold mb-0.5">Coding Support:</span>
              <span className="text-emerald-400">ICD-10: J20.9 • CPT: 99214</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer verification tag */}
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-medium text-white/55">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Physician remains in control
        </span>
        <span className="font-mono text-emerald-200/70">ENCRYPTED</span>
      </div>
    </div>
  );
};

/**
 * 2. Administrative Burden Visual (Split comparison - Left)
 */
export const AdministrativeBurdenVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative rounded-2xl bg-slate-200/70 border border-slate-300 p-6 text-slate-700 space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-300/80">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-500" />
          Manual Documentation Friction
        </span>
        <span className="text-[10px] font-mono font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded border border-red-200">
          AFTER-HOURS TYPING
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white/90 rounded-xl border border-slate-300 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span>Disjointed Note Entry</span>
            <XCircle className="w-3.5 h-3.5 text-red-500" />
          </div>
          <p className="text-[11px] text-slate-500">
            Repetitive keyboard typing and screen switching distracting from patient focus.
          </p>
        </div>

        <div className="p-3 bg-white/90 rounded-xl border border-slate-300 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span>Manual Coding & Billing Lookup</span>
            <XCircle className="w-3.5 h-3.5 text-red-500" />
          </div>
          <p className="text-[11px] text-slate-500">
            Searching for ICD-10 and CPT codes manually after consultations end.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>Administrative Fatigue</span>
        <span>High Note Reconstruction Time</span>
      </div>
    </div>
  );
};

/**
 * 3. NourDoc Clinical Advantage Visual (Split comparison - Right)
 */
export const ClinicalAdvantageVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-br from-nourdoc-primary-light via-white to-nourdoc-primary-light/80 border-2 border-nourdoc-primary/30 p-6 text-slate-800 space-y-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-nourdoc-primary/20">
        <span className="text-xs font-bold uppercase tracking-wider text-nourdoc-primary flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-nourdoc-primary" />
          Ambient Clinical Intelligence
        </span>
        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
          REAL-TIME SOAP
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white rounded-xl border border-nourdoc-primary/30 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span className="text-nourdoc-primary">Direct Patient Presence</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-[11px] text-slate-600">
            Uninterrupted doctor-patient dialogue while ambient capture drafts documentation.
          </p>
        </div>

        <div className="p-3 bg-white rounded-xl border border-nourdoc-primary/30 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span className="text-nourdoc-primary">Review Instead of Reconstruct</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-[11px] text-slate-600">
            Clinicians approve auto-generated structured notes and validated billing codes.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-nourdoc-primary/20 flex items-center justify-between text-[11px] text-nourdoc-primary font-bold">
        <span>More Clinical Time</span>
        <span>Downstream-Ready Feeds</span>
      </div>
    </div>
  );
};

/**
 * 4. Practice & Hospital Workflow Diagram Visual (for Benefits Page)
 */
export const PracticeWorkflowVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-900">Standardized Clinic Workflow</span>
        </div>
        <span className="text-[10px] font-mono text-nourdoc-primary bg-nourdoc-primary-light px-2 py-0.5 rounded">
          Enterprise Scalable
        </span>
      </div>

      <div className="space-y-2">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">01. Multi-Clinician Capture</span>
          <span className="text-[10px] font-mono text-nourdoc-primary font-bold">Android & Ambient</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">02. Uniform SOAP Structuring</span>
          <span className="text-[10px] font-mono text-nourdoc-primary font-bold">Consistent Quality</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">03. EHR / Billing Export</span>
          <span className="text-[10px] font-mono text-nourdoc-primary font-bold">Automated Feeds</span>
        </div>
      </div>
    </div>
  );
};

/**
 * 5. Medical Coder & Revenue Cycle Visual (for Benefits & Medical Coding)
 */
export const MedicalCodingVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl bg-nourdoc-primary-dark text-white p-6 border border-white/10 shadow-md space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <span className="font-bold text-nourdoc-secondary flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          Batch Documentation Pipeline
        </span>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
          Claim-Ready Feeds
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <span className="text-slate-400 block text-[10px] uppercase">Input Stream</span>
          <span className="text-white font-bold">Voice, Transcripts & Notes</span>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <span className="text-nourdoc-secondary block text-[10px] uppercase">Automated Output</span>
          <span className="text-emerald-400 font-bold">ICD-10 + CPT Payloads</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
        <span>Downstream Clearances:</span>
        <span className="text-nourdoc-secondary font-bold">JSON • XML • CSV • PDF</span>
      </div>
    </div>
  );
};

/**
 * 6. Cross-Border Collaboration Visual (for Partners & About pages)
 */
export const CollaborationExchangeVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl bg-nourdoc-primary-dark text-white p-6 border border-white/10 shadow-xl space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <span className="font-bold text-nourdoc-secondary flex items-center gap-1.5 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-nourdoc-secondary" />
          Cross-Border Clinical Network
        </span>
        <span className="font-mono text-[10px] text-slate-400 bg-white/10 px-2 py-0.5 rounded">
          Active Node Mesh
        </span>
      </div>

      <div className="space-y-2.5 text-xs">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Canada ↔ Global Market</span>
            <span className="text-[10px] text-slate-400">Governance, Strategy & Product Development</span>
          </div>
          <span className="text-[10px] font-mono text-nourdoc-secondary font-bold">POSITIONING</span>
        </div>

        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Pakistan (M3 Hive)</span>
            <span className="text-[10px] text-slate-400">AI, NLP, Machine Learning & Systems Engineering</span>
          </div>
          <span className="text-[10px] font-mono text-nourdoc-secondary font-bold">ENGINEERING</span>
        </div>

        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Finland & Healthcare Partners</span>
            <span className="text-[10px] text-slate-400">Research Rigor, Clinical Evaluation & Relevance</span>
          </div>
          <span className="text-[10px] font-mono text-nourdoc-secondary font-bold">RESEARCH</span>
        </div>
      </div>
    </div>
  );
};
