// src/components/diagrams/GlobalCollabMap.tsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Globe, Code2, Microscope, Stethoscope, Compass } from 'lucide-react';

interface NodeLocation {
  id: string;
  name: string;
  role: string;
  region: string;
  coords: string;
  x: number; // percentage in SVG coordinate space (0-1000)
  y: number; // percentage in SVG coordinate space (0-500)
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const mapNodes: NodeLocation[] = [
  {
    id: 'canada',
    name: 'Canadian Ownership',
    role: 'Global Positioning & Growth',
    region: 'North America',
    coords: '45.42° N, 75.70° W',
    x: 230,
    y: 160,
    icon: Globe,
    description: 'An international foundation for product growth, partnerships and healthcare-market development.',
  },
  {
    id: 'finland',
    name: 'Finnish Research',
    role: 'Clinical Research & Evaluation',
    region: 'Nordics / Europe',
    coords: '60.17° N, 24.94° E',
    x: 540,
    y: 130,
    icon: Microscope,
    description: 'Research and healthcare perspectives contribute to product evolution, evaluation and clinical relevance.',
  },
  {
    id: 'pakistan',
    name: 'Pakistani Engineering',
    role: 'M3 Hive Technology Center',
    region: 'South Asia',
    coords: '33.68° N, 73.05° E',
    x: 680,
    y: 225,
    icon: Code2,
    description: 'Developed by an experienced technology team across AI, machine learning, clinical data systems, and cloud infrastructure.',
  },
  {
    id: 'global-collaborators',
    name: 'Healthcare Collaborators',
    role: 'Real-World Clinical Insight',
    region: 'Worldwide Network',
    coords: 'Global Multi-Region',
    x: 480,
    y: 270,
    icon: Stethoscope,
    description: 'Clinicians, institutions and healthcare organizations bringing real-world healthcare requirements into development.',
  },
];

export const GlobalCollabMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const arcs = containerRef.current?.querySelectorAll('.connection-arc');
      const nodes = containerRef.current?.querySelectorAll('.map-node-pulse');

      if (arcs && arcs.length > 0) {
        gsap.fromTo(
          arcs,
          { strokeDashoffset: 1000, opacity: 0.2 },
          {
            strokeDashoffset: 0,
            opacity: 0.85,
            duration: 2.2,
            stagger: 0.3,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
          }
        );
      }

      if (nodes && nodes.length > 0) {
        gsap.to(nodes, {
          scale: 1.6,
          opacity: 0,
          duration: 2.4,
          repeat: -1,
          stagger: 0.4,
          ease: 'power1.out',
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10 relative overflow-hidden"
      aria-label="Global Healthcare AI Collaboration Map"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3F5] text-[#507D88] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Cross-Border Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Canadian Ownership. Pakistani Engineering. Finnish Research.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            NourDoc brings together complementary capabilities across borders without geographical boundaries.
          </p>
        </div>
        <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono text-slate-400 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200/60">
          <span className="w-2 h-2 rounded-full bg-[#507D88] animate-pulse" />
          <span>Active Cross-Border Exchange</span>
        </div>
      </div>

      {/* SVG Map Canvas */}
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-8 overflow-hidden border border-slate-800 shadow-inner">
        {/* Subtle coordinate grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#7AB1BF 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto max-h-[440px] select-none"
          role="img"
          aria-label="Interactive map showing Canadian ownership, Finnish research, and Pakistani engineering connecting with global healthcare collaborators"
        >
          <defs>
            {/* Gradient for connection arcs */}
            <linearGradient id="collabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7AB1BF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7AB1BF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#507D88" stopOpacity="0.4" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Abstract World Landmass Vector Geometry (Simplified, high-elegance continents) */}
          <g fill="#1E293B" opacity="0.6" stroke="#334155" strokeWidth="0.75">
            {/* North America */}
            <path d="M 120 80 Q 180 60 270 80 Q 300 120 280 170 Q 230 200 190 240 Q 150 200 140 140 Z" />
            {/* South America */}
            <path d="M 230 270 Q 290 280 300 340 Q 280 430 240 450 Q 210 370 230 270 Z" />
            {/* Europe */}
            <path d="M 460 90 Q 550 70 560 140 Q 520 180 470 170 Q 450 130 460 90 Z" />
            {/* Africa */}
            <path d="M 460 200 Q 550 190 560 270 Q 530 390 480 390 Q 440 290 460 200 Z" />
            {/* Asia */}
            <path d="M 570 80 Q 750 70 850 140 Q 840 260 720 280 Q 640 230 580 160 Z" />
            {/* Australia */}
            <path d="M 770 330 Q 850 320 870 380 Q 820 430 760 390 Z" />
          </g>

          {/* Geodesic Connection Arcs */}
          <g fill="none" stroke="url(#collabGradient)" strokeWidth="2" strokeLinecap="round">
            {/* Canada (230, 160) <-> Finland (540, 130) */}
            <path
              d="M 230 160 Q 380 70 540 130"
              className="connection-arc"
              strokeDasharray="6 4"
            />
            {/* Finland (540, 130) <-> Pakistan (680, 225) */}
            <path
              d="M 540 130 Q 630 140 680 225"
              className="connection-arc"
              strokeDasharray="6 4"
            />
            {/* Canada (230, 160) <-> Global Collaborators (480, 270) */}
            <path
              d="M 230 160 Q 340 250 480 270"
              className="connection-arc"
              strokeDasharray="6 4"
            />
            {/* Pakistan (680, 225) <-> Global Collaborators (480, 270) */}
            <path
              d="M 680 225 Q 580 280 480 270"
              className="connection-arc"
              strokeDasharray="6 4"
            />
            {/* Finland (540, 130) <-> Global Collaborators (480, 270) */}
            <path
              d="M 540 130 Q 490 200 480 270"
              className="connection-arc"
              strokeDasharray="6 4"
            />
          </g>

          {/* Interactive Node Anchors with Radar Pulse */}
          {mapNodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {/* Radar pulse wave */}
              <circle
                r="16"
                fill="#7AB1BF"
                className="map-node-pulse"
                opacity="0.3"
              />

              {/* Core halo */}
              <circle
                r="9"
                fill="#0F172A"
                stroke="#7AB1BF"
                strokeWidth="2.5"
                filter="url(#glow)"
              />
              <circle r="4" fill="#FFFFFF" />

              {/* Pinpoint Label Box */}
              <g transform="translate(0, -22)">
                <rect
                  x="-75"
                  y="-14"
                  width="150"
                  height="22"
                  rx="6"
                  fill="#0F172A"
                  stroke="#334155"
                  strokeWidth="1"
                  className="shadow-md"
                />
                <text
                  x="0"
                  y="1"
                  fill="#F8FAFC"
                  fontSize="9.5"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.name}
                </text>
              </g>

              {/* Coordinate string underneath */}
              <text
                x="0"
                y="26"
                fill="#94A3B8"
                fontSize="8"
                fontWeight="500"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {node.coords}
              </text>
            </g>
          ))}
        </svg>

        {/* Dynamic Legend at bottom of map */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {mapNodes.map((node) => (
            <div key={node.id} className="text-xs">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-[#7AB1BF]">
                {node.region}
              </span>
              <span className="font-bold text-slate-200 block text-xs">
                {node.name}
              </span>
              <span className="text-[11px] text-slate-400">
                {node.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Architectural Pillar Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {mapNodes.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#507D88]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {pillar.region}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                  {pillar.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#507D88]">
                <span>{pillar.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
