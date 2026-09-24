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
 * Represents: Doctor speaking naturally with patient in clinical environment + subtle translucent teal AI layer
 */
export const ClinicalDialogueVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#101E24] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden ${className}`}>
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#507D88]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7AB1BF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#7AB1BF] uppercase tracking-wider">
            Ambient Consultation Session
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
          NourDoc Engine v1.0
        </span>
      </div>

      {/* Main visual composition */}
      <div className="relative z-10 space-y-4">
        {/* Dialogue Stream */}
        <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <Mic className="w-3.5 h-3.5 text-[#7AB1BF]" />
              Natural Dialogue Capture
            </span>
            <span className="text-[10px] font-mono text-[#7AB1BF]">SPEECH WAVEFORM ACTIVE</span>
          </div>

          {/* SVG Animated-feel waveform */}
          <div className="h-8 flex items-center justify-between gap-1 px-2 py-1 bg-slate-950/60 rounded-lg border border-slate-800">
            {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 70, 85, 40, 90, 65, 30, 80, 50, 95, 60, 40, 75].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-[#507D88] to-[#7AB1BF]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Real-time AI Extraction Box */}
        <div className="p-4 rounded-xl bg-[#507D88]/15 border border-[#507D88]/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#7AB1BF]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7AB1BF]" />
              Clinical Understanding & Structuring
            </span>
            <span className="text-[10px] font-mono text-emerald-400">ASSISTIVE AI</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700/60">
              <span className="text-[#7AB1BF] block font-bold mb-0.5">Assessment:</span>
              <span className="text-slate-300">Acute bronchitis with mild dyspnea</span>
            </div>
            <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700/60">
              <span className="text-[#7AB1BF] block font-bold mb-0.5">Coding Support:</span>
              <span className="text-emerald-400">ICD-10: J20.9 • CPT: 99214</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer verification tag */}
      <div className="relative z-10 mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Physician In Full Review Control
        </span>
        <span className="text-[#7AB1BF] font-mono">EHR-Ready</span>
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
    <div className={`relative rounded-2xl bg-gradient-to-br from-[#EBF3F5] via-white to-[#EBF3F5]/80 border-2 border-[#507D88]/30 p-6 text-slate-800 space-y-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-[#507D88]/20">
        <span className="text-xs font-bold uppercase tracking-wider text-[#507D88] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#507D88]" />
          Ambient Clinical Intelligence
        </span>
        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
          REAL-TIME SOAP
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-white rounded-xl border border-[#507D88]/30 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span className="text-[#507D88]">Direct Patient Presence</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-[11px] text-slate-600">
            Uninterrupted doctor-patient dialogue while ambient capture drafts documentation.
          </p>
        </div>

        <div className="p-3 bg-white rounded-xl border border-[#507D88]/30 text-xs space-y-1 shadow-xs">
          <div className="flex items-center justify-between text-slate-900 font-bold">
            <span className="text-[#507D88]">Review Instead of Reconstruct</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <p className="text-[11px] text-slate-600">
            Clinicians approve auto-generated structured notes and validated billing codes.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#507D88]/20 flex items-center justify-between text-[11px] text-[#507D88] font-bold">
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
          <div className="w-7 h-7 rounded-lg bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-slate-900">Standardized Clinic Workflow</span>
        </div>
        <span className="text-[10px] font-mono text-[#507D88] bg-[#EBF3F5] px-2 py-0.5 rounded">
          Enterprise Scalable
        </span>
      </div>

      <div className="space-y-2">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">01. Multi-Clinician Capture</span>
          <span className="text-[10px] font-mono text-[#507D88] font-bold">Android & Ambient</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">02. Uniform SOAP Structuring</span>
          <span className="text-[10px] font-mono text-[#507D88] font-bold">Consistent Quality</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">03. EHR / Billing Export</span>
          <span className="text-[10px] font-mono text-[#507D88] font-bold">Automated Feeds</span>
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
    <div className={`rounded-2xl bg-slate-900 text-white p-6 border border-slate-800 shadow-md space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <span className="font-bold text-[#7AB1BF] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          Batch Documentation Pipeline
        </span>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
          Claim-Ready Feeds
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
          <span className="text-slate-400 block text-[10px] uppercase">Input Stream</span>
          <span className="text-white font-bold">Voice, Transcripts & Notes</span>
        </div>
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
          <span className="text-[#7AB1BF] block text-[10px] uppercase">Automated Output</span>
          <span className="text-emerald-400 font-bold">ICD-10 + CPT Payloads</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40 text-[11px] text-slate-300 flex items-center justify-between">
        <span>Downstream Clearances:</span>
        <span className="text-[#7AB1BF] font-bold">JSON • XML • CSV • PDF</span>
      </div>
    </div>
  );
};

/**
 * 6. Cross-Border Collaboration Visual (for Partners & About pages)
 */
export const CollaborationExchangeVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl bg-slate-900 text-white p-6 border border-slate-800 shadow-xl space-y-4 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <span className="font-bold text-[#7AB1BF] flex items-center gap-1.5 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#7AB1BF]" />
          Cross-Border Clinical Network
        </span>
        <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
          Active Node Mesh
        </span>
      </div>

      <div className="space-y-2.5 text-xs">
        <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Canada ↔ Global Market</span>
            <span className="text-[10px] text-slate-400">Governance, Strategy & Product Development</span>
          </div>
          <span className="text-[10px] font-mono text-[#7AB1BF] font-bold">POSITIONING</span>
        </div>

        <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Pakistan (M3 Hive)</span>
            <span className="text-[10px] text-slate-400">AI, NLP, Machine Learning & Systems Engineering</span>
          </div>
          <span className="text-[10px] font-mono text-[#7AB1BF] font-bold">ENGINEERING</span>
        </div>

        <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
          <div>
            <span className="font-bold text-white block">Finland & Healthcare Partners</span>
            <span className="text-[10px] text-slate-400">Research Rigor, Clinical Evaluation & Relevance</span>
          </div>
          <span className="text-[10px] font-mono text-[#7AB1BF] font-bold">RESEARCH</span>
        </div>
      </div>
    </div>
  );
};

