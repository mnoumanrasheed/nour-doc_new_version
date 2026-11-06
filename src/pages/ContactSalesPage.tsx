import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { SalesLeadForm } from '../components/forms/SalesLeadForm';

const nextSteps = [
  'Share your clinical workflow and requirements',
  'Explore the most relevant NourDoc options',
  'Plan a clear next step with our team',
];

export const ContactSalesPage: React.FC = () => (
  <div className="bg-white px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
    <section className="mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#fbf7f5] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="lg:pt-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-nourdoc-primary">NourDoc sales</p>
          <h1 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#201218] sm:text-5xl">Contact our sales team</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#4b343b] sm:text-lg">Leave your details and tell us what you would like to explore. We’ll be in touch by email shortly.</p>

          <div className="mt-9 rounded-[24px] bg-nourdoc-primary p-7 text-white shadow-[0_16px_36px_rgba(24,59,51,0.18)] sm:p-8">
            <MessageCircle className="h-8 w-8 text-nourdoc-accent-hover" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-bold tracking-[-0.025em]">A focused conversation, built around your workflow.</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/85">
              {nextSteps.map((step) => <li key={step} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-nourdoc-accent-hover" aria-hidden="true" /><span>{step}</span></li>)}
            </ul>
          </div>
        </div>

        <div className="rounded-[24px] bg-white p-6 shadow-[0_10px_30px_rgba(66,38,44,0.08)] sm:p-8">
          <SalesLeadForm />
        </div>
      </div>
    </section>
  </div>
);

export default ContactSalesPage;
