import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Handshake, Headphones, MapPin, ArrowUpRight } from 'lucide-react';
import contentData from '../data.json';

const contactPaths = [
  {
    title: 'Get support',
    description: 'Have a question about NourDoc, need help with the platform, or want to share feedback? Our support team would love to hear from you.',
    label: 'Visit support hub',
    icon: Headphones,
    path: '/support',
  },
  {
    title: 'Contact sales',
    description: 'Interested in our plans, enterprise deployment, integrations, or a live platform demonstration? Let’s talk about your workflow.',
    label: 'Contact sales',
    icon: CalendarDays,
    path: '/contact-sales',
  },
  {
    title: 'Partner with NourDoc',
    description: 'Explore opportunities for technology, research, distribution, or healthcare partnerships with the NourDoc team.',
    label: 'Explore partnerships',
    icon: Handshake,
    path: '/partners-collaborators',
  },
] as const;

export const ContactPage: React.FC = () => {
  const { emails } = contentData.brand;

  return (
    <div className="overflow-hidden bg-[#fbfcfb]">
      <section className="hero-100vsh relative isolate flex items-center overflow-hidden border-b border-slate-100 bg-[#F8FBFA]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <img
            src="/images/hero/hero_contact_demo.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-right"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.97)_0%,rgba(248,251,250,0.90)_28%,rgba(248,251,250,0.58)_40%,rgba(248,251,250,0.14)_48%,transparent_55%),radial-gradient(ellipse_at_18%_78%,rgba(248,251,250,0.68)_0%,rgba(248,251,250,0.34)_24%,transparent_42%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.78)_42%,rgba(248,251,250,0.46)_70%,rgba(248,251,250,0.12)_88%,transparent_100%)]" />
          <div className="absolute -right-[12%] top-[12%] h-[72%] w-[48%] rounded-full bg-nourdoc-primary/[0.07] blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="max-w-[575px] text-left">
            <span className="inline-flex rounded-full border border-nourdoc-primary/15 bg-white/75 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-nourdoc-primary shadow-[0_4px_16px_rgba(40,98,82,0.08)] backdrop-blur-sm">
              Contact NourDoc
            </span>
            <h1 className="mt-6 text-[clamp(2.75rem,5.2vw,4.5rem)] font-black leading-[0.98] tracking-[-0.06em] text-slate-900">
              Need a hand?
            </h1>
            <div className="mt-6 max-w-[510px] border-l-2 border-nourdoc-primary/35 pl-5">
              <p className="text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                Our support, sales, and partnership teams are here to help you make more time for patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="contact-options-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="contact-options-heading" className="sr-only">Ways to contact NourDoc</h2>
          <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
            {contactPaths.map(({ title, description, label, icon: Icon, path }) => (
              <article
                key={title}
                className="group flex min-h-[290px] flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-nourdoc-primary/25 hover:shadow-[0_18px_45px_rgba(40,98,82,0.12)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nourdoc-primary-light text-nourdoc-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em] text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <Link
                  to={path}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-bold text-nourdoc-primary underline decoration-nourdoc-primary/35 underline-offset-4 transition-colors hover:text-nourdoc-primary-hover hover:decoration-nourdoc-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nourdoc-primary focus-visible:ring-offset-4"
                >
                  {label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-nourdoc-primary/10 bg-nourdoc-primary-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="office-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-nourdoc-primary">Visit us</span>
            <h2 id="office-heading" className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-900 sm:text-4xl">
              Our office
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              The NourDoc team is based in Vancouver and is always happy to connect.
            </p>
          </div>

          <article className="mt-10 grid overflow-hidden rounded-[30px] border border-nourdoc-primary/10 bg-white shadow-[0_12px_40px_rgba(40,98,82,0.08)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nourdoc-primary text-white shadow-jade-glow">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-3xl">Vancouver, Canada</h3>
              <address className="mt-5 not-italic text-base leading-8 text-slate-600">
                450 West Hastings Street<br />
                Vancouver, BC<br />
                V6B 1L1<br />
                Canada
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=450+West+Hastings+Street%2C+Vancouver%2C+BC+V6B+1L1%2C+Canada"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-nourdoc-primary underline decoration-nourdoc-primary/35 underline-offset-4 transition-colors hover:text-nourdoc-primary-hover hover:decoration-nourdoc-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nourdoc-primary focus-visible:ring-offset-4"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="relative min-h-64 bg-nourdoc-primary">
              <img
                src="/images/sections/about_canada.webp"
                alt="Vancouver, Canada"
                className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,59,51,0.35),rgba(40,98,82,0.68))]" />
              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:inset-x-10 sm:bottom-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">NourDoc headquarters</p>
                <p className="mt-2 text-lg font-bold leading-snug">Building calmer, more connected clinical workflows.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-nourdoc-primary">NourDoc</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Care should come first.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">Let NourDoc help with the clinical documentation that comes after every conversation.</p>
          <a href={`mailto:${emails.sales}?subject=Talk%20to%20NourDoc`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-nourdoc-primary px-6 py-3.5 text-sm font-bold text-white shadow-jade-glow transition-colors hover:bg-nourdoc-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nourdoc-primary focus-visible:ring-offset-4">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
