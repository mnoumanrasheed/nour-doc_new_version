import React from 'react';
import { ArrowRight, Code2, Globe2, Microscope, Network, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface FoundationPillar {
  id: string;
  name: string;
  role: string;
  region: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone: string;
}

const pillars: FoundationPillar[] = [
  {
    id: 'canada',
    name: 'Canadian Ownership',
    role: 'Global positioning & growth',
    region: 'North America',
    Icon: Globe2,
    tone: 'bg-sky-50 text-sky-800 ring-sky-100',
  },
  {
    id: 'finland',
    name: 'Finnish Research',
    role: 'Clinical research & evaluation',
    region: 'Nordics / Europe',
    Icon: Microscope,
    tone: 'bg-violet-50 text-violet-800 ring-violet-100',
  },
  {
    id: 'pakistan',
    name: 'Pakistan Engineering',
    role: 'M3 Hive technology center',
    region: 'South Asia',
    Icon: Code2,
    tone: 'bg-emerald-50 text-emerald-800 ring-emerald-100',
  },
];

export const GlobalCollabMap: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,42,34,0.10)]" aria-labelledby="global-network-heading">
      <header className="relative overflow-hidden bg-[linear-gradient(120deg,#123B32_0%,#1E5D4D_55%,#286252_100%)] px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-24 top-8 h-28 w-28 rounded-full bg-nourdoc-secondary/20 blur-3xl" />
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-nourdoc-secondary">Global Foundation</p>
            <h2 id="global-network-heading" className="mt-3 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
              One healthcare mission, strengthened across borders.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Canadian leadership, Finnish clinical research, and Pakistani engineering come together to support real-world healthcare collaboration.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(110,231,183,0.12)]" />
            Active cross-border exchange
          </div>
        </div>
      </header>

      <div className="bg-[linear-gradient(180deg,#F8FBFA_0%,#FFFFFF_100%)] px-6 py-8 sm:px-10 sm:py-10">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {pillars.map((pillar, index) => {
            const Icon = pillar.Icon;
            return (
              <React.Fragment key={pillar.id}>
                <motion.article
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.1, ease: 'easeOut' }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_22px_rgba(15,42,34,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${pillar.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{pillar.region}</p>
                  <h3 className="mt-2 text-base font-semibold tracking-[-0.015em] text-slate-900">{pillar.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.role}</p>
                </motion.article>
                {index < pillars.length - 1 && (
                  <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-nourdoc-primary/15 bg-nourdoc-primary-light text-nourdoc-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48, delay: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-nourdoc-primary/15 bg-nourdoc-primary-light/55 p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6"
        >
          <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-nourdoc-secondary/20 blur-3xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nourdoc-primary text-white shadow-[0_8px_18px_rgba(40,98,82,0.22)]">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-nourdoc-primary">Worldwide Network</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">Healthcare Collaborators</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">Real-world clinical insight grounds every stage of the NourDoc platform.</p>
            </div>
          </div>
          <div className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-nourdoc-primary sm:mt-0">
            <Stethoscope className="h-4 w-4" />
            Clinical validation at the center
          </div>
        </motion.div>
      </div>
    </section>
  );
};