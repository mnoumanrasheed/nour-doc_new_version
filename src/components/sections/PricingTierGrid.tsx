// src/components/sections/PricingTierGrid.tsx
import React from 'react';
import { Check, Sparkles } from 'lucide-react';
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {tiers.map((tier) => {
        const isFree = tier.id === 'free';
        const isEnterprise = tier.id === 'enterprise';
        const isProfessional = tier.id === 'professional';

        return (
          <div
            key={tier.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
              isProfessional
                ? 'bg-white border-2 border-[#507D88] shadow-xl shadow-[#507D88]/10'
                : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
            }`}
          >
            {isProfessional && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#507D88] text-white flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#7AB1BF]" />
                Most Popular
              </div>
            )}

            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-[#507D88] uppercase tracking-wider block mb-1">
                  {tier.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[36px] leading-relaxed">
                  {tier.subtitle}
                </p>
              </div>

              <div className="py-4 border-t border-slate-100 mb-4">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  {tier.includesLabel}
                </div>
                {tier.featuresPrefix && (
                  <div className="text-xs font-semibold text-[#507D88] mb-2 italic">
                    {tier.featuresPrefix}
                  </div>
                )}
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#507D88] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              {isFree ? (
                <Button
                  href={appStoreUrl}
                  external={true}
                  variant="primary"
                  size="md"
                  icon={true}
                  className="w-full justify-center"
                >
                  {tier.cta.label}
                </Button>
              ) : isEnterprise ? (
                <Button
                  to="/contact?topic=Enterprise+Deployment"
                  variant="dark"
                  size="md"
                  className="w-full justify-center"
                >
                  {tier.cta.label}
                </Button>
              ) : (
                <Button
                  to={tier.cta.target || '/contact?topic=Subscription'}
                  variant={isProfessional ? 'primary' : 'outline'}
                  size="md"
                  className="w-full justify-center"
                >
                  {tier.cta.label}
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
