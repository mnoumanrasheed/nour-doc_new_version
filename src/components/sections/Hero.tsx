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
  visualVariant?: 'clinical' | 'homeClinical' | 'product' | 'coding' | 'integrations' | 'why' | 'benefits' | 'about' | 'partners' | 'contact' | 'subscription';
  backgroundAlt?: string;
  showBrandMark?: boolean;
}

const demoPath = '/contact?intent=bookDemo&topic=Other#contact-form';

// Keep every page hero's photo treatment aligned with the home hero.
const heroImageOverlayClass = 'absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.97)_0%,rgba(248,251,250,0.90)_28%,rgba(248,251,250,0.58)_40%,rgba(248,251,250,0.14)_48%,transparent_55%),radial-gradient(ellipse_at_18%_78%,rgba(248,251,250,0.68)_0%,rgba(248,251,250,0.34)_24%,transparent_42%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.94)_0%,rgba(248,251,250,0.78)_42%,rgba(248,251,250,0.46)_70%,rgba(248,251,250,0.12)_88%,transparent_100%)]';
const benefitsHeroOverlayClass = 'absolute inset-0 bg-[linear-gradient(90deg,rgba(248,251,250,0.98)_0%,rgba(248,251,250,0.94)_27%,rgba(248,251,250,0.76)_40%,rgba(248,251,250,0.42)_53%,rgba(248,251,250,0.12)_64%,transparent_73%),radial-gradient(ellipse_at_15%_78%,rgba(248,251,250,0.74)_0%,rgba(248,251,250,0.30)_31%,transparent_52%)] max-[899px]:bg-[linear-gradient(180deg,rgba(248,251,250,0.96)_0%,rgba(248,251,250,0.82)_45%,rgba(248,251,250,0.44)_72%,rgba(248,251,250,0.10)_92%,transparent_100%)]';

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

const HomeHero: React.FC<Pick<HeroProps, 'description' | 'supportingLine' | 'heroImage' | 'heroImageAlt' | 'headlineLines'>> = ({ description, supportingLine, heroImage, headlineLines }) => (
  <section aria-labelledby="home-hero-heading" className="hero-100vsh relative flex overflow-hidden bg-[#F8FBFA]">
    <div className="absolute inset-0">
      <img src={heroImage ?? '/images/hero/hero_home_custom.webp'} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-right" fetchPriority="high" decoding="async" />
      <div className={heroImageOverlayClass} aria-hidden="true" />
      <div className="absolute -right-[12%] top-[8%] h-[78%] w-[58%] rounded-full bg-[radial-gradient(circle,rgba(40,98,82,0.012)_0%,rgba(143,183,172,0.005)_42%,transparent_72%)] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/12 to-transparent" />
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
        {description && <p className="mt-5 max-w-[610px] text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] font-medium text-slate-800">{description}</p>}
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

const PageHero: React.FC<HeroProps & { kind: 'product' | 'coding' | 'integrations' | 'why' | 'benefits' | 'about' | 'partners' | 'contact' | 'subscription' }> = ({ kind, badge, h1, subtitle, description, backgroundImage, showBrandMark }) => (
  <section className={(kind === 'product' || kind === 'coding' || kind === 'integrations' || kind === 'why' || kind === 'benefits' || kind === 'about' || kind === 'partners' || kind === 'contact' || kind === 'subscription') ? 'relative flex aspect-[21/10] min-h-0 overflow-hidden border-b border-slate-100 bg-[#F8FBFA]' : 'hero-100vsh relative flex overflow-hidden border-b border-slate-100 bg-[#F8FBFA]'}>
    <div className="pointer-events-none absolute inset-0">
      {backgroundImage && <img src={backgroundImage} alt="" aria-hidden="true" className={`absolute inset-0 h-full w-full ${kind === 'product' ? 'object-cover object-center' : 'object-cover object-right'}`} fetchPriority="high" decoding="async" />}
      <div className={kind === 'benefits' ? benefitsHeroOverlayClass : heroImageOverlayClass} />
      <div className="absolute -right-[8%] top-[8%] h-[84%] w-[48%] rounded-full bg-nourdoc-primary/[0.08] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/75 to-transparent" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="max-w-[650px]">
        {showBrandMark && (
          <div className="mb-5 flex items-center gap-2.5 text-nourdoc-primary">
            <img src="/logo.png" alt="NourDoc" className="h-8 w-8 object-contain" />
            <span className="text-[15px] font-bold tracking-[-0.025em]">NourDoc</span>

          </div>
        )}
        {badge && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nourdoc-primary">{badge}</p>}
        <h1 className="mt-4 text-[clamp(2.125rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101827]">{kind === 'product' ? <>Meet <span className="text-nourdoc-primary">NourDoc</span></> : h1}</h1>
        {subtitle && <p className="mt-4 text-[clamp(1rem,1.3vw,1.125rem)] font-medium leading-relaxed text-nourdoc-primary">{subtitle}</p>}
        {description && <p className="mt-4 max-w-[600px] whitespace-pre-line text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] font-medium text-slate-800">{description}</p>}
        <HeroActions />
      </div>
    </div>
  </section>
);

const StandardHero: React.FC<HeroProps> = ({ badge, h1, description, backgroundImage }) => (
  <section className="hero-100vsh relative flex overflow-hidden border-b border-slate-100 bg-[#F8FBFA]">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {backgroundImage && <img src={backgroundImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-right" fetchPriority="high" decoding="async" />}
      <div className={heroImageOverlayClass} />
      <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-[#f8fbfa]/98 via-[#f8fbfa]/92 via-[48%] to-transparent" />
      <div className="absolute -right-[12%] top-[12%] h-[72%] w-[48%] rounded-full bg-nourdoc-primary/[0.07] blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_30%_40%,rgba(40,98,82,0.06),transparent_58%)]" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="max-w-[630px]">
        {badge && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nourdoc-primary">{badge}</p>}
        <h1 className="mt-4 text-[clamp(2.125rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#101827]">{h1}</h1>
        {description && <p className="mt-5 max-w-[610px] whitespace-pre-line text-[clamp(1rem,1.3vw,1.125rem)] leading-[1.6] font-medium text-slate-800">{description}</p>}
        <HeroActions />
      </div>
    </div>
  </section>
);

export const Hero: React.FC<HeroProps> = (props) => {
  if (props.visualVariant === 'homeClinical') return <HomeHero description={props.description} supportingLine={props.supportingLine} heroImage={props.heroImage} heroImageAlt={props.heroImageAlt} headlineLines={props.headlineLines} />;
  if (props.visualVariant === 'product' || props.visualVariant === 'coding' || props.visualVariant === 'integrations' || props.visualVariant === 'why' || props.visualVariant === 'benefits' || props.visualVariant === 'about' || props.visualVariant === 'partners' || props.visualVariant === 'contact' || props.visualVariant === 'subscription') return <PageHero {...props} kind={props.visualVariant} />;
  return <StandardHero {...props} />;
};
