// src/components/diagrams/EcosystemMap.tsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Sparkles, ArrowDown, FileText, CheckSquare, Network, BarChart3 } from 'lucide-react';

interface EcosystemMapProps {
  nodes?: string[];
}

const defaultNodes = [
  'Symptoms',
  'History',
  'Findings',
  'Assessment',
  'Treatment Plans',
  'Diagnoses',
  'Procedures',
  'Clinical Terminology',
  'Coding Information',
];

const downstreamTargets = [
  {
    title: 'Structured Documentation',
    desc: 'SOAP Notes & Comprehensive Consult Summaries',
    icon: FileText,
  },
  {
    title: 'Coding & Billing Preparation',
    desc: 'ICD-10-CM & CPT Claim-Ready Feeds',
    icon: CheckSquare,
  },
  {
    title: 'EHR / EMR / HIMS Systems',
    desc: 'Target System Interoperability',
    icon: Network,
  },
  {
    title: 'Analytics & Clinical Intelligence',
    desc: 'Departmental Governance & Care Insights',
    icon: BarChart3,
  },
];

export const EcosystemMap: React.FC<EcosystemMapProps> = ({
  nodes = defaultNodes,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const nodeElements = containerRef.current?.querySelectorAll('.ecosystem-node');
      const downstreamElements = containerRef.current?.querySelectorAll('.downstream-card');

      if (nodeElements && nodeElements.length > 0) {
        gsap.fromTo(
          nodeElements,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (downstreamElements && downstreamElements.length > 0) {
        gsap.fromTo(
          downstreamElements,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 lg:p-12 space-y-10 relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Clinical Information Ecosystem
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          From Spoken Words to Structured Digital Intelligence
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A single clinical consultation contains critical structured healthcare data that fuels multiple organizational workflows.
        </p>
      </div>

      {/* 1. Central Clinical Conversation Hub */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="px-6 py-4 rounded-2xl bg-nourdoc-primary text-white font-black text-base sm:text-lg shadow-lg shadow-nourdoc-primary/20 flex items-center gap-3 border-2 border-white">
          <Sparkles className="w-5 h-5 text-nourdoc-secondary" />
          <span>Clinical Conversation Hub</span>
        </div>

        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          Extracted Clinical Dimensions:
        </div>

        {/* 9 Dimensions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-3xl">
          {nodes.map((node, idx) => (
            <div
              key={idx}
              className="ecosystem-node bg-white rounded-xl p-3 sm:p-3.5 text-center border border-slate-200 shadow-xs hover:border-nourdoc-primary/50 hover:bg-nourdoc-primary-surface transition-all flex items-center justify-center"
            >
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {node}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transition Flow Arrow */}
      <div className="flex flex-col items-center justify-center text-nourdoc-primary" aria-hidden="true">
        <div className="w-0.5 h-6 bg-nourdoc-primary/40" />
        <div className="w-8 h-8 rounded-full bg-nourdoc-primary-light border border-nourdoc-primary/30 flex items-center justify-center my-1 shadow-xs">
          <ArrowDown className="w-4 h-4 text-nourdoc-primary" />
        </div>
        <div className="text-[11px] font-bold text-nourdoc-primary uppercase tracking-wider mt-1">
          Downstream Healthcare Integration
        </div>
      </div>

      {/* 2. Downstream Healthcare Workflows Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {downstreamTargets.map((target, idx) => {
          const Icon = target.icon;
          return (
            <div
              key={idx}
              className="downstream-card p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-nourdoc-primary/40 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-nourdoc-primary-light text-nourdoc-primary flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {target.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  {target.desc}
                </p>
              </div>
              <div className="text-[10px] font-mono font-semibold text-nourdoc-primary pt-2 border-t border-slate-100">
                ACTIVE WORKFLOW 0{idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EcosystemMap;
