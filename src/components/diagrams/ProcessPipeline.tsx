// src/components/diagrams/ProcessPipeline.tsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useReducedMotion } from 'motion/react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || steps.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 1500);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion, steps.length]);

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
          const isActive = idx === activeIndex;
          return (
            <div key={idx} className="pipeline-card flex flex-col relative group">
              <div
                className={`flex-1 rounded-xl p-4 flex flex-col justify-between border transition-all duration-300 ${
                  dark
                    ? isActive
                      ? 'bg-white/10 border-nourdoc-secondary/70 text-white shadow-md shadow-nourdoc-primary/20'
                      : 'bg-white/5 border-white/10 hover:border-white/25 text-white shadow-md'
                    : isActive
                      ? 'bg-nourdoc-primary-light/70 border-nourdoc-primary text-slate-900 shadow-md shadow-nourdoc-primary/15'
                      : 'bg-white border-slate-200/90 hover:border-nourdoc-primary/40 text-slate-900 shadow-sm hover:shadow-md'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-black px-2 py-0.5 rounded ${
                        dark
                          ? 'bg-white/10 text-nourdoc-secondary'
                          : 'bg-nourdoc-primary-light text-nourdoc-primary'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-nourdoc-primary text-white'
                          : dark ? 'bg-white/10 text-nourdoc-secondary' : 'bg-nourdoc-primary-light text-nourdoc-primary'
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
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center justify-center w-5 h-5 rounded-full bg-nourdoc-primary text-white shadow-sm pointer-events-none overflow-hidden">
                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: [0, 1, 0], x: [-6, 0, 6] }}
                      transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute h-2 w-2 rounded-full bg-white"
                    />
                  )}
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
          const isActive = idx === activeIndex;
          return (
            <div key={idx} className="pipeline-card flex flex-col items-center">
              <div
                className={`w-full rounded-xl p-4 border flex items-start gap-4 ${
                  dark
                    ? isActive ? 'bg-white/10 border-nourdoc-secondary/70 text-white shadow-md' : 'bg-white/5 border-white/10 text-white'
                    : isActive ? 'bg-nourdoc-primary-light/70 border-nourdoc-primary text-slate-900 shadow-md' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                <div
                  className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-nourdoc-primary text-white' : dark ? 'bg-white/10 text-nourdoc-secondary' : 'bg-nourdoc-primary-light text-nourdoc-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        dark
                          ? 'bg-white/10 text-nourdoc-secondary'
                          : 'bg-nourdoc-primary-light text-nourdoc-primary'
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
                <div className="py-1 text-nourdoc-primary">
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
