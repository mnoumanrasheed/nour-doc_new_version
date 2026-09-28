// src/components/sections/PricingTierGrid.tsx
import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '../common/Button';
import contentData from '../../data.json';

interface Tier {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  includesLabel: string;
  featuresPrefix?: string;
  features: string[];
  cta: {
    label: string;
    type: string;
    target?: string;
  };
}

interface PricingTierGridProps {
  tiers: Tier[];
}

export const PricingTierGrid: React.FC<PricingTierGridProps> = ({ tiers }) => {
  const appStoreUrl = contentData.brand.appStoreUrl;
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-start">
      {tiers.map((tier, tierIndex) => {
        const isFree = tier.id === 'free';
        const isEnterprise = tier.id === 'enterprise';
        const isProfessional = tier.id === 'professional';

        return (
          <motion.article
            key={tier.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : tierIndex * 0.1, ease: 'easeOut' }}
            className={`relative flex flex-col rounded-[20px] border bg-white p-6 shadow-[0_10px_30px_rgba(15,40,34,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-nourdoc-primary/30 hover:shadow-[0_14px_34px_rgba(15,40,34,0.10)] sm:p-7 ${
              isProfessional
                ? 'border-[1.5px] border-nourdoc-primary'
                : 'border-[rgba(40,98,82,0.12)]'
            }`}
          >
            {isProfessional && (
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-nourdoc-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </div>
            )}

            <div>
              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-nourdoc-primary">
                  {tier.badge}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[26px]">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tier.subtitle}
                </p>
              </div>

              <div className="mt-5 border-t border-[rgba(40,98,82,0.10)] pt-5">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
                  {tier.includesLabel}
                </div>
                {tier.featuresPrefix && (
                  <div className="mb-3 text-xs font-medium text-nourdoc-primary">
                    {tier.featuresPrefix}
                  </div>
                )}
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-nourdoc-primary" />
                      <span className="leading-5">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 [&>div]:w-full">
              {isFree ? (
                <Button
                  href={appStoreUrl}
                  external={true}
                  variant="primary"
                  size="md"
                  icon={true}
                  className="w-full min-h-[44px] justify-center py-3"
                >
                  {tier.cta.label}
                </Button>
              ) : isEnterprise ? (
                <Button
                  to="/contact?topic=Enterprise+Deployment"
                  variant="primary"
                  size="md"
                  className="w-full min-h-[44px] justify-center py-3"
                >
                  {tier.cta.label}
                </Button>
              ) : (
                <Button
                  to={tier.cta.target || '/contact?topic=Subscription'}
                  variant={isProfessional ? 'primary' : 'outline'}
                  size="md"
                  className="w-full min-h-[44px] justify-center py-3"
                >
                  {tier.cta.label}
                </Button>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};
