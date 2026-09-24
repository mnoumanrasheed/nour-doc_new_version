// src/components/diagrams/ArchitectureHub.tsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Network, Database, Shield, Cloud, FileSpreadsheet, Activity } from 'lucide-react';

const targets = [
  { name: 'EHR Systems', desc: 'Longitudinal Health Records', icon: Database },
  { name: 'EMR Platforms', desc: 'Point-of-Care Clinical Notes', icon: Activity },
  { name: 'HIMS Systems', desc: 'Hospital Information Management', icon: Network },
  { name: 'Medical Coding', desc: 'ICD-10 & CPT Automation', icon: FileSpreadsheet },
  { name: 'Billing & RCM', desc: 'Claims & Clearance Workflows', icon: Shield },
  { name: 'Cloud & On-Prem', desc: 'Hybrid Infrastructure Support', icon: Cloud },
];

export const ArchitectureHub: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const spokeCards = containerRef.current?.querySelectorAll('.spoke-card');
      if (spokeCards && spokeCards.length > 0) {
        gsap.fromTo(
          spokeCards,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
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
      className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block text-xs font-bold text-[#7AB1BF] uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full mb-2">
          Interoperability Architecture
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          The Clinical Intelligence Layer
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Seamless bidirectional data flow between NourDoc and your existing healthcare infrastructure.
        </p>
      </div>

      {/* Central Hub and Spoke Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
        {targets.map((target, idx) => {
          const Icon = target.icon;
          return (
            <div
              key={idx}
              className="spoke-card bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 hover:border-[#7AB1BF]/60 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#507D88]/20 text-[#7AB1BF] flex items-center justify-center text-[#7AB1BF] shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{target.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{target.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
