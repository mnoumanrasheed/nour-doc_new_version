// src/components/sections/GlobalCTA.tsx
import React from 'react';
import { Button } from '../common/Button';
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
}) => {
  const appStoreUrl = contentData.brand.appStoreUrl;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-nourdoc-primary-surface to-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-block text-xs font-bold text-nourdoc-primary uppercase tracking-widest bg-nourdoc-primary-light px-3 py-1 rounded-full mb-4">
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

      </div>
    </section>
  );
};
