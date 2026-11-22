import React from 'react';
import { FileText, Heart, Server, Shield } from 'lucide-react';

const benefits = [
  { label: 'No hidden fees', icon: Shield },
  { label: 'Cost-efficient AI stack', icon: Server },
  { label: 'No contracts or lock-in', icon: Heart },
  { label: 'Invoice in USD', icon: FileText },
] as const;

export const SubscriptionBenefitsStrip: React.FC = () => (
  <section className="border-y border-slate-200/80 bg-[#FCF9F7] py-7 sm:py-8" aria-label="Subscription benefits">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-5 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {benefits.map(({ label, icon: Icon }) => (
        <div key={label} className="flex items-center justify-center gap-3 lg:justify-start">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nourdoc-primary/25 bg-nourdoc-primary-light text-nourdoc-primary">
            <Icon className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-sm font-bold text-slate-700">{label}</span>
        </div>
      ))}
    </div>
  </section>
);
