import React from 'react';
import { ArrowRight, Building2, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const capacityTiers = [
  {
    name: 'Silver Capacity',
    volume: '50,000 minutes',
    description: 'For multi-specialty clinics, ambulatory surgical centers, and outpatient networks.',
    scope: '10–25 clinicians or ~5,000 monthly patient consultations',
  },
  {
    name: 'Gold Capacity',
    volume: '250,000 minutes',
    description: 'For acute-care hospitals, large medical centers, and regional healthcare directorates.',
    scope: '50–120 clinicians or ~25,000 monthly patient consultations',
    featured: true,
  },
  {
    name: 'Enterprise 1M+',
    volume: '1,000,000+ minutes',
    description: 'For nationwide health networks, hospital groups, and high-throughput operations.',
    scope: 'Hospital networks, 250+ clinicians, or high-throughput batch operations',
  },
];

export const PremiumEnterpriseCTA: React.FC = () => (
  <section id="enterprise-section" className="bg-[#F4F8F7] py-14 sm:py-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-nourdoc-primary/15 bg-white p-6 shadow-[0_18px_50px_rgba(15,42,34,0.08)] sm:p-9">
        <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-nourdoc-primary-light px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-nourdoc-primary">
              <Building2 className="h-3.5 w-3.5" /> Enterprise deployment
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Enterprise Capacity &amp; Dedicated Infrastructure</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">Purpose-built volume commitments, deployment options, and support for hospitals and healthcare networks.</p>
          </div>
          <Link to="/contact?intent=bookDemo&topic=Enterprise+Deployment#contact-form" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-nourdoc-primary/25 bg-white px-5 py-3 text-sm font-bold text-nourdoc-primary transition-colors hover:bg-nourdoc-primary-light">
            Speak with an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {capacityTiers.map((tier) => (
            <article key={tier.name} className={`relative flex min-h-[280px] flex-col rounded-2xl border p-5 ${tier.featured ? 'border-nourdoc-primary bg-nourdoc-primary-light/35 shadow-[0_10px_24px_rgba(40,98,82,0.10)]' : 'border-slate-200 bg-white'}`}>
              {tier.featured && <span className="absolute -top-3 left-5 rounded-full bg-nourdoc-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Most popular scale</span>}
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-nourdoc-primary"><ShieldCheck className="h-4 w-4" /> Custom quotation</div>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-2xl font-black tracking-tight text-nourdoc-primary">{tier.volume}<span className="block text-base font-semibold text-slate-600">/ month</span></p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{tier.description}</p>
              <div className="mt-auto border-t border-slate-200 pt-4">
                <div className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"><Users className="mt-0.5 h-4 w-4 shrink-0 text-nourdoc-primary" />{tier.scope}</div>
                <Link to="/contact?topic=Enterprise+Deployment" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-nourdoc-primary-hover">Select this volume tier <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
