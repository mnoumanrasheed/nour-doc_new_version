// src/components/diagrams/Enterprise1MStat.tsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Zap, Database, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Enterprise1MStat: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Animate stat number and data nodes
      const statNumber = containerRef.current?.querySelector('.stat-number');
      const nodes = containerRef.current?.querySelectorAll('.data-node');

      if (statNumber) {
        gsap.fromTo(
          statNumber,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (nodes && nodes.length > 0) {
        gsap.to(nodes, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          stagger: 0.2,
          ease: 'sine.inOut',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl"
    >
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#507D88_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#507D88]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7AB1BF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 1M+ Typographic Stat */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#1E293B] text-[#7AB1BF] border border-[#7AB1BF]/30 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Architectural Capacity
          </div>

          <div className="stat-number text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#7AB1BF] font-mono leading-none">
            1M+
          </div>

          <div className="text-xl sm:text-2xl font-black text-white mt-2 tracking-tight">
            Clinical Encounters / Day
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2 max-w-md">
            Designed for appropriately configured enterprise environments
          </p>

          <p className="text-xs text-slate-500 mt-4 leading-relaxed max-w-md">
            NourDoc's platform architecture is designed to entertain 1+ million clinical encounters per day in appropriately configured enterprise environments.
          </p>
        </div>

        {/* Right: Architecture Data Node Streaming Graphic */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#1E293B]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-lg">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#7AB1BF]" />
                Encounter Ingestion Pipeline
              </span>
              <span className="font-mono text-[11px] text-[#7AB1BF] bg-slate-800 px-2 py-0.5 rounded">
                ENTERPRISE SCALE
              </span>
            </div>

            <div className="space-y-3">
              <div className="data-node flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-700/40 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#507D88]/20 flex items-center justify-center text-[#7AB1BF]">
                    <Server className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Point-of-Care Documentation</div>
                    <div className="text-[10px] text-slate-400">One clinician • One consultation • One SOAP note</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  REAL-TIME
                </span>
              </div>

              <div className="data-node flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-700/40 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#507D88]/20 flex items-center justify-center text-[#7AB1BF]">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Enterprise Batch Processing</div>
                    <div className="text-[10px] text-slate-400">Thousands to millions of clinical encounters</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#7AB1BF] bg-[#507D88]/20 px-2 py-0.5 rounded border border-[#7AB1BF]/30">
                  DISTRIBUTED
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between text-[11px] text-slate-400">
              <span>Output: JSON • XML • CSV • PDF • API</span>
              <span className="text-[#7AB1BF] font-mono">100% Audit-Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
