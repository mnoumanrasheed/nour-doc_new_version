import React from 'react';
import { Brain, Building2, Check, Lock, Server, Shield, Users } from 'lucide-react';

const deploymentFeatures = [
  {
    title: 'Complete Data Sovereignty',
    description: 'All patient data, audio recordings, and AI models stay within your private network. Zero external dependencies.',
    icon: Lock,
  },
  {
    title: 'Dedicated GPU Infrastructure',
    description: 'NVIDIA GPU server deployed on-site for real-time AI processing. No internet required for core functionality.',
    icon: Server,
  },
  {
    title: 'Air-Gapped Option',
    description: 'Fully offline deployment for defence, government, and high-security healthcare facilities.',
    icon: Building2,
  },
  {
    title: 'Unlimited Doctors',
    description: 'Flat licensing model, no per-seat costs. Add as many doctors as you need.',
    icon: Users,
  },
  {
    title: 'Custom Model Fine-Tuning',
    description: 'AI models trained on your terminology, templates, and specialty workflows.',
    icon: Brain,
  },
  {
    title: 'Regulatory Governance',
    description: 'Designed for HIPAA and GDPR-aligned controls with audit trails and role-based access.',
    icon: Shield,
  },
] as const;

const licensingItems = [
  'One-time perpetual license',
  'Annual maintenance & support (AMC)',
  'On-site deployment & configuration',
  'Staff training & onboarding',
  'Custom SOAP templates per specialty',
  'SSO / LDAP integration',
  'Multi-EMR integration (FHIR, HL7)',
  'Dedicated account manager',
  'Priority support (2hr SLA)',
  'Quarterly model updates',
  'Custom branding',
] as const;

export const PrivateDeploymentSection: React.FC = () => (
  <section className="border-y border-slate-200/80 bg-[#F4F8F7] py-16 sm:py-20" aria-labelledby="private-deployment-heading">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-[#D96B52]/25 bg-[#FFF6F3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#B9513B]">
          Private Deployment
        </span>
        <h2 id="private-deployment-heading" className="mt-4 text-3xl font-black tracking-[-0.045em] text-slate-900 sm:text-4xl">
          Your Data. Your Servers. Your Control.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          For healthcare teams that need complete data sovereignty, air-gapped deployments, or governance that demands private infrastructure.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {deploymentFeatures.map(({ title, description, icon: Icon }) => (
          <article key={title} className="group min-h-[218px] rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D96B52]/35 hover:shadow-[0_14px_30px_rgba(15,23,42,0.07)] sm:p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D96B52]/35 bg-[#FFF9F7] text-[#D96B52]">
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold tracking-[-0.025em] text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.035)] sm:mt-10 sm:p-8" aria-labelledby="licensing-heading">
        <h3 id="licensing-heading" className="text-xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-2xl">
          Private Deployment Licensing Includes
        </h3>
        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {licensingItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <aside className="mt-5 rounded-2xl border border-nourdoc-primary/15 bg-white px-6 py-6 sm:mt-6 sm:px-8 sm:py-7" aria-labelledby="quote-heading">
        <h3 id="quote-heading" className="text-lg font-extrabold tracking-[-0.025em] text-slate-900 sm:text-xl">
          What affects a private deployment NourDoc quote?
        </h3>
        <p className="mt-3 max-w-5xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          Private deployment pricing depends on organization size, deployment model, GPU capacity, specialty templates, EMR integration depth, SSO or LDAP requirements, data residency controls, training scope, and support SLA. This is why private deployment pricing is quoted instead of shown as a generic package.
        </p>
      </aside>
    </div>
  </section>
);
