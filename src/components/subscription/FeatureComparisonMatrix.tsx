// src/components/subscription/FeatureComparisonMatrix.tsx
import React from 'react';
import { Check, Minus } from 'lucide-react';
import { FEATURE_COMPARISON_MATRIX } from '../../data/pricingConfig';

export const FeatureComparisonMatrix: React.FC = () => {
  const renderCellContent = (value: string) => {
    if (value === 'Yes') {
      return (
        <span className="inline-flex items-center gap-1 font-semibold text-nourdoc-primary">
          <Check className="h-4 w-4 stroke-[2.5]" />
          <span>Yes</span>
        </span>
      );
    }
    if (value === 'Yes*') {
      return (
        <span className="inline-flex items-center gap-1 font-semibold text-nourdoc-primary">
          <Check className="h-4 w-4 stroke-[2.5]" />
          <span>Yes*</span>
        </span>
      );
    }
    if (value === 'No') {
      return (
        <span className="inline-flex items-center gap-1 text-slate-400">
          <Minus className="h-4 w-4" />
          <span>No</span>
        </span>
      );
    }
    return <span className="font-medium text-slate-700">{value}</span>;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Detailed Entitlement Matrix
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Feature Comparison Across All Tiers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Evaluate capabilities across evaluation, solo clinician, group practice, and hospital network editions.
        </p>
      </div>

      {/* Accessible Table Container with Horizontal Scroll affordance */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
        <table className="w-full min-w-[760px] text-left border-collapse" aria-label="Feature Comparison Across Plan Tiers">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-700">
              <th scope="col" className="py-4 px-6 min-w-[220px]">
                Capability
              </th>
              <th scope="col" className="py-4 px-4 text-center">
                Free Trial
              </th>
              <th scope="col" className="py-4 px-4 text-center">
                Starter
              </th>
              <th scope="col" className="py-4 px-4 text-center bg-nourdoc-primary-light/50 text-nourdoc-primary border-x border-nourdoc-primary/20">
                Growth (Rec.)
              </th>
              <th scope="col" className="py-4 px-4 text-center">
                Professional
              </th>
              <th scope="col" className="py-4 px-4 text-center">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {FEATURE_COMPARISON_MATRIX.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white hover:bg-slate-50/50' : 'bg-slate-50/30 hover:bg-slate-50/70'}
              >
                <th scope="row" className="py-4 px-6 font-semibold text-slate-900">
                  <div className="font-bold text-slate-800">{row.capability}</div>
                  <div className="text-[11px] text-slate-500 font-normal mt-0.5 max-w-xs leading-snug">
                    {row.description}
                  </div>
                </th>
                <td className="py-4 px-4 text-center">{renderCellContent(row.free)}</td>
                <td className="py-4 px-4 text-center">{renderCellContent(row.starter)}</td>
                <td className="py-4 px-4 text-center bg-nourdoc-primary-light/20 border-x border-nourdoc-primary/10">
                  {renderCellContent(row.growth)}
                </td>
                <td className="py-4 px-4 text-center">{renderCellContent(row.professional)}</td>
                <td className="py-4 px-4 text-center">{renderCellContent(row.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote Disclosures */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 leading-relaxed">
        <p>
          *<strong>Entitlement Note:</strong> Capabilities marked with an asterisk (*) are subject to current product capability, configuration, support model, and formal commercial approval. In accordance with NourDoc pricing governance, unavailable or unconfigured features are not exposed as active plan benefits.
        </p>
      </div>
    </div>
  );
};
