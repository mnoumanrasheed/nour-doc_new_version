// src/components/sections/GlobalCTA.tsx
import React from 'react';
import { Button } from '../common/Button';
import { Building2 } from 'lucide-react';
import contentData from '../../data.json';

interface GlobalCTAProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTarget?: string;
  primaryIsApp?: boolean;
  secondaryLabel?: string;
  secondaryTarget?: string;
  showEnterpriseBox?: boolean;
}

export const GlobalCTA: React.FC<GlobalCTAProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryLabel = 'TRY NOURDOC FREE',
  primaryTarget,
  primaryIsApp = true,
  secondaryLabel = 'BOOK A DEMO',
  secondaryTarget = '/contact?intent=bookDemo&topic=Other',
  showEnterpriseBox = false,
}) => {
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F4F9FA] to-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3 py-1 rounded-full mb-4">
            {eyebrow}
          </span>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
          {title}
        </h2>

        {subtitle && (
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {primaryIsApp ? (
            <Button
              href={appStoreUrl}
              external={true}
              variant="primary"
              size="lg"
              icon={true}
            >
              {primaryLabel}
            </Button>
          ) : (
            <Button
              to={primaryTarget || '/contact?intent=bookDemo&topic=Other'}
              variant="primary"
              size="lg"
            >
              {primaryLabel}
            </Button>
          )}

          <Button
            to={secondaryTarget}
            variant="outline"
            size="lg"
          >
            {secondaryLabel}
          </Button>
        </div>

        {/* Optional Enterprise Box */}
        {showEnterpriseBox && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white max-w-2xl mx-auto text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#7AB1BF] text-xs font-bold uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4" />
                Enterprise Healthcare?
              </div>
              <p className="text-xs text-slate-300 max-w-sm">
                Need batch processing, medical coding & billing workflows, EHR/EMR/HIMS integration or on-premises deployment?
              </p>
            </div>
            <Button
              to="/contact?topic=Enterprise+Deployment"
              variant="secondary"
              size="sm"
              className="shrink-0"
            >
              Talk to Our Enterprise Team
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
