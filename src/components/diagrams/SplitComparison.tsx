// src/components/diagrams/SplitComparison.tsx
import React from 'react';
import { XCircle, CheckCircle2, Clock, HeartHandshake } from 'lucide-react';
import { AdministrativeBurdenVisual, ClinicalAdvantageVisual } from '../visuals/ClinicalVisuals';

export const SplitComparison: React.FC = () => {
  return (
    <div className="space-y-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left: Administrative Burden (Before) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-100 border border-slate-200 text-slate-700 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Clock className="w-4 h-4 text-slate-400" />
              The Administrative Burden
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
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
        <div className="rounded-2xl p-6 sm:p-8 bg-[#EBF3F5]/80 border-2 border-[#507D88]/30 text-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#507D88]">
              <HeartHandshake className="w-4 h-4 text-[#507D88]" />
              The NourDoc Advantage
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#507D88] mb-4">
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
