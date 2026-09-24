// src/components/diagrams/AIEngineVisual.tsx
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { 
  Mic, 
  Activity, 
  Sparkles, 
  FileText, 
  CheckSquare, 
  Share2, 
  ArrowRight, 
  ArrowDown, 
  ShieldCheck 
} from 'lucide-react';

interface StageInfo {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  technicalDetails: string[];
}

const engineStages: StageInfo[] = [
  {
    id: 'conversation',
    stepNumber: '01',
    title: 'Clinical Dialogue',
    subtitle: 'Ambient Acoustic Capture',
    icon: Mic,
    description: 'Natural doctor-patient conversation is recorded ambiently in the exam room without keyboard distraction.',
    technicalDetails: ['Multichannel input', 'Noise cancellation', 'Doctor-patient voice separation'],
  },
  {
    id: 'waveform',
    stepNumber: '02',
    title: 'Acoustic Processing',
    subtitle: 'Signal Stream Transformation',
    icon: Activity,
    description: 'Audio signals are processed through specialized medical speech models trained on clinical terminology.',
    technicalDetails: ['Specialty vocabularies', 'Multi-accent support', 'Real-time transcription buffer'],
  },
  {
    id: 'understanding',
    stepNumber: '03',
    title: 'Contextual Engine',
    subtitle: 'Clinical Understanding',
    icon: Sparkles,
    description: 'Proprietary clinical NLP synthesizes symptoms, history, physical findings, and medical decision-making.',
    technicalDetails: ['Medical entity extraction', 'Chronological correlation', 'Context-aware summarization'],
  },
  {
    id: 'documentation',
    stepNumber: '04',
    title: 'Note Synthesis',
    subtitle: 'Structured SOAP Draft',
    icon: FileText,
    description: 'Converts unstructured dialogue into complete, organized SOAP documentation ready for clinician review.',
    technicalDetails: ['Subjective & Objective', 'Assessment synthesis', 'Plan of care formulation'],
  },
  {
    id: 'coding',
    stepNumber: '05',
    title: 'Coding Layer',
    subtitle: 'ICD-10 & CPT Mapping',
    icon: CheckSquare,
    description: 'Extracts billable diagnostic (ICD-10-CM) and procedural (CPT) codes supporting revenue cycle compliance.',
    technicalDetails: ['Code justification trace', 'Hierarchical categorization', 'Claim readiness check'],
  },
  {
    id: 'dispatch',
    stepNumber: '06',
    title: 'EHR Dispatch',
    subtitle: 'Interoperable Integration',
    icon: Share2,
    description: 'Exports finalized documentation and codes into hospital EHR, EMR, HIMS, or clearinghouse systems.',
    technicalDetails: ['HL7 / FHIR compliance', 'JSON / PDF / CSV payloads', 'Zero manual re-entry'],
  },
];

export const AIEngineVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('understanding');
  const shouldReduceMotion = useReducedMotion();

  const currentStage = engineStages.find((s) => s.id === activeStage) || engineStages[2];

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-8 lg:p-10 space-y-8">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#507D88] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#507D88]">
              Proprietary Clinical Engine Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            End-to-End Ambient Intelligence Pipeline
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
          <ShieldCheck className="w-4 h-4 text-[#507D88]" />
          <span>Human-in-the-Loop Clinical Verification</span>
        </div>
      </div>

      {/* 6-Stage Interactive Visual Flow */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-2">
        {engineStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = stage.id === activeStage;
          const isLast = idx === engineStages.length - 1;

          return (
            <div key={stage.id} className="flex flex-col md:flex-row items-center relative">
              <button
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#EBF3F5] border-[#507D88] shadow-md ring-2 ring-[#507D88]/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
                aria-pressed={isSelected}
                aria-label={`Stage ${stage.stepNumber}: ${stage.title}`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#507D88]' : 'text-slate-400'}`}>
                    {stage.stepNumber}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#507D88] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {stage.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                    {stage.subtitle}
                  </p>
                </div>
              </button>

              {/* Directional Connector Arrow */}
              {!isLast && (
                <div className="hidden md:flex items-center justify-center px-1 text-slate-300" aria-hidden="true">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
              {!isLast && (
                <div className="flex md:hidden items-center justify-center py-1 text-slate-300" aria-hidden="true">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Stage Deep-Dive Panel */}
      <motion.div
        key={currentStage.id}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
      >
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#507D88] text-[11px] font-mono font-bold text-white uppercase">
              Stage {currentStage.stepNumber} Focus
            </span>
            <span className="text-xs font-semibold text-[#7AB1BF]">
              {currentStage.subtitle}
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {currentStage.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            {currentStage.description}
          </p>
        </div>

        <div className="lg:col-span-4 bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Key Architecture Capabilities:
          </div>
          <ul className="space-y-1.5 text-xs text-slate-200">
            {currentStage.technicalDetails.map((detail, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7AB1BF]" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AIEngineVisual;
