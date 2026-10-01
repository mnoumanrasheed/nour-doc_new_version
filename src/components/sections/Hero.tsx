import React from 'react';
import { Button } from '../common/Button';
import contentData from '../../data.json';

interface HeroProps {
  badge?: string;
  h1: string;
  headlineLines?: string[];
  subtitle?: string;
  description?: string;
  supportingLine?: string;
  primaryCta?: { label: string; type: string; target?: string };
  secondaryCta?: { label: string; type: string; target?: string };
  showVisual?: boolean;
  backgroundImage?: string;
  heroImage?: string;
  heroImageAlt?: string;
  visualVariant?: 'clinical' | 'homeClinical' | 'product' | 'coding';
  backgroundAlt?: string;
}

const demoPath = '/contact?intent=bookDemo&topic=Other';

const HeroActions: React.FC = () => (
  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center [&>div]:w-full sm:[&>div]:w-auto">
    <Button href={contentData.brand.appStoreUrl} external variant="primary" size="lg" icon={false} className="h-[50px] w-full rounded-xl px-7 text-[15px] shadow-[0_8px_22px_rgba(40,98,82,0.22)] sm:w-auto">
      Try NourDoc Free
    </Button>
    <Button to={demoPath} variant="outline" size="lg" icon={false} className="h-[50px] w-full rounded-xl border-nourdoc-primary bg-white/75 px-7 text-[15px] text-nourdoc-primary backdrop-blur-sm hover:bg-white sm:w-auto">
      Book a Demo
    </Button>
  </div>
);

/* Removed from the home hero: the right-side foundation timeline animation.
const GlobalFoundationTimeline: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const items = [
    {
      number: '01',
      title: 'Canadian Ownership',
      description: 'Strategic leadership and international vision',
      Icon: Globe2,
    },
    {
      number: '02',
      title: 'Finnish Research',
      description: 'Clinical insight and research-driven relevance',
      Icon: Microscope,
    },
    {
      number: '03',
      title: 'Pakistan Engineered',
      description: 'Strong product development and technical execution',
      Icon: Code2,
    },
  ];

  return (
    <motion.aside
      aria-label="NourDoc global foundation"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.15, ease: 'easeOut' }}
      className="absolute right-[5%] top-1/2 z-20 hidden w-[390px] -translate-y-1/2 overflow-hidden rounded-[24px] border border-white/80 bg-white/72 px-7 py-8 shadow-[0_24px_65px_rgba(15,42,34,0.12)] backdrop-blur-[18px] lg:block"
    >
      <div className="relative space-y-8">
        <motion.div
          aria-hidden="true"
          className="absolute bottom-4 left-[9px] top-4 w-px origin-top bg-nourdoc-primary/20"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={reduceMotion ? undefined : { scaleY: 1 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
        />
        {items.map(({ number, title, description, Icon }, index) => (
          <motion.div
            key={number}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: reduceMotion ? 0 : 0.35 + index * 0.14, ease: 'easeOut' }}
            className="relative grid grid-cols-[20px_1fr] gap-4"
          >
            <span className="relative z-10 flex h-5 w-5 items-center justify-center bg-white/80 text-nourdoc-primary">
              <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <div>
              <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-nourdoc-primary/65">{number}</span>
              <h2 className="mt-1 text-[15px] font-semibold tracking-[-0.01em] text-slate-900">{title}</h2>
              <p className="mt-1 text-[12px] leading-[1.5] text-slate-500">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: reduceMotion ? 0 : 0.85, ease: 'easeOut' }}
        className="mt-7 border-t border-nourdoc-primary/10 pt-5"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-nourdoc-primary">Global Collaboration</p>
        <p className="mt-2 text-[13px] font-semibold tracking-[-0.01em] text-slate-800">
          Canada <span className="mx-1.5 text-nourdoc-primary/40">·</span> Finland <span className="mx-1.5 text-nourdoc-primary/40">·</span> Pakistan
        </p>
        <p className="mt-2 text-[11px] italic leading-[1.55] text-slate-500">Built through international healthcare, research and engineering collaboration.</p>
      </motion.div>
    </motion.aside>
  );
};

*/

const HomeHero: React.FC<Pick<HeroProps, 'description' | 'supportingLine' | 'heroImage' | 'heroImageAlt' | 'headlineLines'>> = ({ description, supportingLine, heroImage, heroImageAlt, headlineLines }) => (
  <section aria-labelledby="home-hero-heading" className="hero-100vsh relative flex overflow-hidden bg-[#F8FBFA]">
    <div className="absolute inset-0">
      <picture>
        <img
          src={heroImage ?? '/images/hero/hero_home_custom.png'}
          alt={heroImageAlt ?? 'Doctor speaking with a patient during a clinical consultation'}
          className="ml-auto h-full w-[62%] object-cover object-[70%_center] max-[899px]:w-full max-[899px]:object-[68%_center]"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F8FBFA_0%,#F8FBFA_44%,rgba(248,251,250,0.78)_58%,rgba(248,251,250,0.06)_100%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.86)_66%,rgba(248,251,250,0.68)_100%)]" aria-hidden="true" />
      <div className="absolute -right-[12%] top-[8%] h-[78%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(40,98,82,0.13)_0%,rgba(143,183,172,0.06)_42%,transparent_72%)] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
    </div>
    <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.49fr)_minmax(0,0.51fr)] lg:px-10 lg:py-12">
      <div className="max-w-[620px]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nourdoc-primary">Ambient Clinical Intelligence</p>
        <h1 id="home-hero-heading" className="mt-4 text-[clamp(2.125rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101827]">
          {headlineLines?.[0] ?? 'Let AI Handle the Documentation.'}
          <br />
          {headlineLines?.[1]?.replace('Focus on Care.', '') ?? 'Let Doctors '}
          <span className="text-nourdoc-primary">Focus on Care.</span>
        </h1>
        {description && <p className="mt-5 max-w-[610px] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] text-slate-600">{description}</p>}
        <div className="mt-5 max-w-[500px] rounded-2xl border border-nourdoc-primary/20 bg-white/75 px-5 py-4 shadow-[0_12px_30px_rgba(15,42,34,0.08)] backdrop-blur-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nourdoc-primary">Global Collaboration</p>
          <p className="mt-2 text-base font-bold tracking-[-0.01em] text-slate-900">
            Canada <span className="mx-2 text-nourdoc-primary/50">·</span> Finland <span className="mx-2 text-nourdoc-primary/50">·</span> Pakistan
          </p>
          <p className="mt-1.5 text-xs italic leading-relaxed text-slate-600">
            Built through international healthcare, research and engineering collaboration.
          </p>
        </div>
        <HeroActions />
        {supportingLine && <p className="mt-3 text-sm leading-relaxed text-slate-500">{supportingLine}</p>}
      </div>
    </div>
  </section>
);

const PageHero: React.FC<HeroProps & { kind: 'product' | 'coding' }> = ({ kind, badge, h1, subtitle, description, backgroundImage, backgroundAlt }) => (
  <section className="hero-100vsh relative flex overflow-hidden border-b border-slate-100 bg-[#F8FBFA]">
    <div className="pointer-events-none absolute inset-0">
      {backgroundImage && <img src={backgroundImage} alt={backgroundAlt ?? ''} className="h-full w-full object-cover object-right" loading="eager" fetchPriority="high" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.98)_0%,rgba(248,251,250,0.92)_45%,rgba(248,251,250,0.36)_68%,rgba(248,251,250,0.04)_100%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.86)_65%,rgba(248,251,250,0.7)_100%)]" />
      <div className="absolute -right-[8%] top-[8%] h-[84%] w-[48%] rounded-full bg-nourdoc-primary/[0.08] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/75 to-transparent" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="max-w-[650px]">
        {badge && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nourdoc-primary">{badge}</p>}
        <h1 className="mt-4 text-[clamp(2.125rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101827]">{kind === 'product' ? <>Meet <span className="text-nourdoc-primary">NourDoc</span></> : h1}</h1>
        {subtitle && <p className="mt-4 text-[clamp(1rem,1.3vw,1.125rem)] font-medium leading-relaxed text-nourdoc-primary">{subtitle}</p>}
        {description && <p className="mt-4 max-w-[600px] whitespace-pre-line text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] text-slate-600">{description}</p>}
        <HeroActions />
      </div>
    </div>
  </section>
);

const StandardHero: React.FC<HeroProps> = ({ badge, h1, description, backgroundImage, backgroundAlt }) => (
  <section className="hero-100vsh relative flex overflow-hidden border-b border-slate-100 bg-[#F8FBFA]">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {backgroundImage && <img src={backgroundImage} alt={backgroundAlt ?? ''} className="h-full w-full object-cover object-right" loading="eager" fetchPriority="high" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.98)_0%,rgba(248,251,250,0.92)_47%,rgba(248,251,250,0.34)_70%,rgba(248,251,250,0.04)_100%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.87)_68%,rgba(248,251,250,0.72)_100%)]" />
      <div className="absolute -right-[12%] top-[12%] h-[72%] w-[48%] rounded-full bg-nourdoc-primary/[0.07] blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_30%_40%,rgba(40,98,82,0.06),transparent_58%)]" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="max-w-[630px]">
        {badge && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nourdoc-primary">{badge}</p>}
        <h1 className="mt-4 text-[clamp(2.125rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101827]">{h1}</h1>
        {description && <p className="mt-5 max-w-[610px] whitespace-pre-line text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] text-slate-600">{description}</p>}
        <HeroActions />
      </div>
    </div>
  </section>
);

export const Hero: React.FC<HeroProps> = (props) => {
  if (props.visualVariant === 'homeClinical') return <HomeHero description={props.description} supportingLine={props.supportingLine} heroImage={props.heroImage} heroImageAlt={props.heroImageAlt} headlineLines={props.headlineLines} />;
  if (props.visualVariant === 'product' || props.visualVariant === 'coding') return <PageHero {...props} kind={props.visualVariant} />;
  return <StandardHero {...props} />;
};
