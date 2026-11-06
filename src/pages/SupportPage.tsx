import React from 'react';
import { ArrowRight, BookOpen, CreditCard, LockKeyhole, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import contentData from '../data.json';

const resources = [
  { title: 'Explore NourDoc', description: 'Understand the platform, clinical documentation workflows, and key capabilities.', to: '/product', icon: BookOpen },
  { title: 'Plans & billing', description: 'Review subscriptions and find the plan that fits your team.', to: '/subscription', icon: CreditCard },
  { title: 'Security & compliance', description: 'See how NourDoc approaches enterprise healthcare data protection.', to: '/security-compliance', icon: LockKeyhole },
];

export const SupportPage: React.FC = () => {
  const { support } = contentData.brand.emails;

  return (
    <div className="bg-[#fbfcfb]">
      <section className="border-b border-nourdoc-primary/10 bg-nourdoc-primary-surface px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-nourdoc-primary shadow-sm">NourDoc support</span>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.055em] text-slate-900 sm:text-5xl">How can we help?</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">Find the right next step for your NourDoc journey, from getting started to plans and security.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
          {resources.map(({ title, description, to, icon: Icon }) => (
            <Link key={title} to={to} className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_8px_28px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-1 hover:border-nourdoc-primary/25 hover:shadow-[0_16px_38px_rgba(40,98,82,0.11)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nourdoc-primary-light text-nourdoc-primary"><Icon className="h-6 w-6" /></div>
              <h2 className="mt-7 text-xl font-extrabold tracking-[-0.03em] text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-nourdoc-primary">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[26px] bg-nourdoc-primary p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div><MessageCircle className="h-6 w-6 text-nourdoc-accent-hover" /><h2 className="mt-4 text-2xl font-extrabold tracking-[-0.035em]">Still need a hand?</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/80">Our support team is ready to help with your NourDoc questions.</p></div>
          <a href={`mailto:${support}`} className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-bold text-nourdoc-primary transition-colors hover:bg-nourdoc-primary-light">Email support</a>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
