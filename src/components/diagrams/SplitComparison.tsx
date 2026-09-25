// src/components/diagrams/SplitComparison.tsx
import React from 'react';
import { XCircle, CheckCircle2, Clock, HeartHandshake } from 'lucide-react';
import { AdministrativeBurdenVisual, ClinicalAdvantageVisual } from '../visuals/ClinicalVisuals';

export const SplitComparison: React.FC = () => {
  return (
    <div className="space-y-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Administrative Burden (Before) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-slate-100/90 border border-slate-200/90 text-slate-700 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              The Administrative Burden
            </div>
            
            {/* Photographic Context: Screen & Paperwork Burden */}
            <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src="/images/sections/why_admin_burden.jpg"
                alt="Physician experiencing administrative fatigue and after-hours documentation workload"
                className="w-full h-full object-cover object-center filter grayscale-[30%] opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-200 font-semibold">
                Traditional Workflow: 2+ Hours Screen Time
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Typing, Screen Switching & Paperwork
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Doctors constantly switching attention between patients and computer screens</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Hours spent after clinical hours reconstructing notes and manual coding</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Administrative fatigue reducing quality of direct doctor-patient interaction</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Disjointed documentation moving manually between disparate billing systems</span>
              </li>
            </ul>
          </div>

          <AdministrativeBurdenVisual />
        </div>

        {/* Right: Clinical Focus with NourDoc (After) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#EBF3F5]/80 border-2 border-[#507D88]/30 text-slate-800 shadow-sm flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#507D88]">
              <HeartHandshake className="w-4 h-4 text-[#507D88]" />
              The NourDoc Advantage
            </div>

            {/* Photographic Context: Patient Focus & Direct Eye Contact */}
            <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-[#507D88]/30">
              <img
                src="/images/sections/why_clinical_focus.jpg"
                alt="Physician engaged in warm eye contact and focused patient consultation"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-emerald-300 font-bold">
                NourDoc Ambient Care: 100% Patient Connection
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#507D88]">
              Direct Patient Engagement & Ambient Intelligence
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#507D88] shrink-0 mt-0.5" />
                <span>Natural spoken consultations transformed into structured SOAP notes in real time</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#507D88] shrink-0 mt-0.5" />
                <span>Clinicians review, validate, and approve notes instead of typing from scratch</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#507D88] shrink-0 mt-0.5" />
                <span>Automated ICD-10 and CPT coding assistance accelerating revenue cycle workflows</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#507D88] shrink-0 mt-0.5" />
                <span>Structured outputs ready for direct EHR, EMR, and HIMS integration</span>
              </li>
            </ul>
          </div>

          <ClinicalAdvantageVisual />
        </div>
      </div>
    </div>
  );
};

export default SplitComparison;
