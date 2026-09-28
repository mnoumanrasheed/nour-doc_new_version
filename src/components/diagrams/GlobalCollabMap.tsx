// src/components/diagrams/GlobalCollabMap.tsx
import React from 'react';
import { Code2, Globe2, Microscope, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface NetworkNode {
  id: string;
  name: string;
  role: string;
  region: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: 'start' | 'middle' | 'end';
  icon: React.ComponentType<{ className?: string }>;
}

const networkNodes: NetworkNode[] = [
  { id: 'canada', name: 'Canadian Ownership', role: 'Global Positioning & Growth', region: 'North America', x: 235, y: 175, labelX: 110, labelY: 112, anchor: 'start', icon: Globe2 },
  { id: 'finland', name: 'Finnish Research', role: 'Clinical Research & Evaluation', region: 'Nordics / Europe', x: 525, y: 132, labelX: 525, labelY: 62, anchor: 'middle', icon: Microscope },
  { id: 'pakistan', name: 'Pakistan Engineering', role: 'M3Hive Technology Center', region: 'South Asia', x: 675, y: 235, labelX: 742, labelY: 292, anchor: 'start', icon: Code2 },
  { id: 'collaborators', name: 'Healthcare Collaborators', role: 'Real-World Clinical Insight', region: 'Worldwide Network', x: 480, y: 292, labelX: 480, labelY: 358, anchor: 'middle', icon: Stethoscope },
];

const connections = [
  'M 235 175 Q 380 72 525 132',
  'M 525 132 Q 630 145 675 235',
  'M 235 175 Q 350 282 480 292',
  'M 525 132 Q 502 205 480 292',
  'M 675 235 Q 572 302 480 292',
];

export const GlobalCollabMap: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#183B33_0%,#1F4E42_52%,#286252_100%)] p-6 shadow-[0_18px_42px_rgba(15,40,34,0.16)] sm:p-8 lg:p-10"
      aria-labelledby="global-network-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.20) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-nourdoc-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-nourdoc-primary/30 blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col gap-5 border-b border-white/15 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-nourdoc-accent-hover">Global Collaboration Network</p>
            <h2 id="global-network-heading" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Canadian Ownership. Pakistani Engineering. Finnish Research.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              NourDoc is built through international leadership, engineering, research, and real-world healthcare collaboration.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-nourdoc-secondary/50 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/85">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-nourdoc-accent-hover/70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-nourdoc-accent-hover" />
            </span>
            Active Cross-Border Exchange
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#183B33]/35 px-3 py-5 sm:px-6 sm:py-7"
        >
          <svg
            viewBox="0 0 1000 430"
            className="h-auto min-h-[270px] w-full select-none sm:min-h-[340px] lg:min-h-[390px]"
            role="img"
            aria-label="Global network linking Canadian ownership, Finnish research, Pakistan engineering, and healthcare collaborators"
          >
            <defs>
              <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A9CBC2" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A9CBC2" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#6F9C90" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            <g fill="rgba(255,255,255,0.075)" stroke="rgba(169,203,194,0.18)" strokeWidth="1">
              <path d="M 105 78 Q 185 48 278 82 Q 312 121 280 176 Q 230 211 188 241 Q 145 202 133 140 Z" />
              <path d="M 226 270 Q 287 279 302 340 Q 281 408 239 428 Q 211 363 226 270 Z" />
              <path d="M 452 78 Q 536 64 566 127 Q 527 173 474 166 Q 451 129 452 78 Z" />
              <path d="M 458 195 Q 546 185 560 270 Q 532 368 483 382 Q 442 290 458 195 Z" />
              <path d="M 570 78 Q 748 62 860 140 Q 839 257 720 278 Q 640 232 579 160 Z" />
              <path d="M 774 328 Q 850 320 878 376 Q 824 416 760 386 Z" />
            </g>

            <g fill="none" stroke="url(#network-line)" strokeLinecap="round" strokeWidth="2">
              {connections.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  strokeDasharray="6 8"
                  initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1, ease: 'easeOut' }}
                />
              ))}
            </g>

            <g aria-hidden="true">
              <circle cx="480" cy="292" r="34" fill="rgba(169,203,194,0.08)" stroke="rgba(169,203,194,0.28)" strokeWidth="1" />
              <text x="480" y="287" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Global Clinical</text>
              <text x="480" y="303" fill="rgba(255,255,255,0.70)" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Network</text>
            </g>

            {networkNodes.map((node, index) => (
              <motion.g
                key={node.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.35 + index * 0.12, ease: 'easeOut' }}
              >
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="13"
                  fill="none"
                  stroke="#A9CBC2"
                  strokeWidth="1"
                  initial={false}
                  animate={shouldReduceMotion ? undefined : { scale: [0.9, 1.35, 0.9], opacity: [0.15, 0.45, 0.15] }}
                  transition={{ duration: 3.6, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
                />
                <circle cx={node.x} cy={node.y} r="6" fill="#183B33" stroke="#A9CBC2" strokeWidth="2" />
                <circle cx={node.x} cy={node.y} r="2.5" fill="#FFFFFF" />
                <g className="hidden sm:block">
                  <text x={node.labelX} y={node.labelY} fill="rgba(169,203,194,0.88)" fontSize="8.5" fontWeight="700" letterSpacing="1.1" textAnchor={node.anchor} fontFamily="system-ui, sans-serif">
                    {node.region.toUpperCase()}
                  </text>
                  <text x={node.labelX} y={node.labelY + 17} fill="#FFFFFF" fontSize="13" fontWeight="700" textAnchor={node.anchor} fontFamily="system-ui, sans-serif">
                    {node.name}
                  </text>
                  <text x={node.labelX} y={node.labelY + 32} fill="rgba(255,255,255,0.70)" fontSize="10" textAnchor={node.anchor} fontFamily="system-ui, sans-serif">
                    {node.role}
                  </text>
                </g>
              </motion.g>
            ))}
          </svg>
        </motion.div>

        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {networkNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.15 + index * 0.1, ease: 'easeOut' }}
                className="min-w-0 border-b border-white/10 p-5 last:border-b-0 sm:nth-[2n]:border-l sm:nth-[n+3]:border-b-0 lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-nourdoc-accent-hover">
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {node.region}
                </div>
                <div className="mt-3 text-sm font-semibold text-white">{node.name}</div>
                <div className="mt-1 text-xs leading-relaxed text-white/70">{node.role}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
