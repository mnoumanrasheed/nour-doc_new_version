// src/components/diagrams/ProcessPipeline.tsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Cpu, FileText, Code2, Layers, Database, ArrowRight, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  step: string;
  title: string;
  desc?: string;
}

interface ProcessPipelineProps {
  steps?: Step[];
  dark?: boolean;
}

const defaultSteps: Step[] = [
  { step: '01', title: 'Clinical Conversation / Voice / Notes', desc: 'Natural spoken dialogue or recorded notes' },
  { step: '02', title: 'AI Transcription & Clinical Understanding', desc: 'Speech-to-text with medical entity extraction' },
  { step: '03', title: 'Structured Clinical Documentation', desc: 'Structured SOAP notes (S-O-A-P)' },
  { step: '04', title: 'ICD-10 & CPT Coding Assistance', desc: 'Diagnostic & procedural coding suggestions' },
  { step: '05', title: 'Multiple Output Formats', desc: 'JSON, XML, CSV, PDF & integration payloads' },
  { step: '06', title: 'EHR / EMR / HIMS Workflows', desc: 'Downstream billing, coding & EHR synchronization' },
];

const icons = [Mic, Cpu, FileText, Code2, Layers, Database];

export const ProcessPipeline: React.FC<ProcessPipelineProps> = ({
  steps = defaultSteps,
  dark = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const cards = containerRef.current?.querySelectorAll('.pipeline-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full py-6">
      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-6 gap-3 relative">
        {steps.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={idx} className="pipeline-card flex flex-col relative group">
              <div
                className={`flex-1 rounded-xl p-4 flex flex-col justify-between border transition-all duration-300 ${
                  dark
                    ? 'bg-[#1E293B] border-slate-700/60 hover:border-[#7AB1BF]/50 text-white shadow-md'
                    : 'bg-white border-slate-200/90 hover:border-[#507D88]/40 text-slate-900 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-black px-2 py-0.5 rounded ${
                        dark
                          ? 'bg-[#0F172A] text-[#7AB1BF]'
                          : 'bg-[#EBF3F5] text-[#507D88]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        dark ? 'bg-slate-800 text-[#7AB1BF]' : 'bg-[#EBF3F5] text-[#507D88]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs font-bold leading-snug mb-1.5 line-clamp-3">
                    {item.title}
                  </h3>
                </div>

                {item.desc && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Arrow Connector to Next Card */}
              {idx < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-5 h-5 rounded-full bg-[#507D88] text-white shadow-sm pointer-events-none">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile & Tablet Vertical Flow */}
      <div className="lg:hidden space-y-3">
        {steps.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div key={idx} className="pipeline-card flex flex-col items-center">
              <div
                className={`w-full rounded-xl p-4 border flex items-start gap-4 ${
                  dark
                    ? 'bg-[#1E293B] border-slate-700 text-white'
                    : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                }`}
              >
                <div
                  className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                    dark ? 'bg-slate-800 text-[#7AB1BF]' : 'bg-[#EBF3F5] text-[#507D88]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        dark
                          ? 'bg-[#0F172A] text-[#7AB1BF]'
                          : 'bg-[#EBF3F5] text-[#507D88]'
                      }`}
                    >
                      STAGE {item.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="py-1 text-[#507D88]">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
