// src/components/subscription/FeatureComparisonMatrix.tsx
import React from 'react';
import { Check, Minus } from 'lucide-react';
import { FEATURE_COMPARISON_MATRIX } from '../../data/pricingConfig';

const PLANS = [
  { key: 'free', label: 'Free Trial', sub: '30 min' },
  { key: 'starter', label: 'Starter', sub: '300 min' },
  { key: 'growth', label: 'Growth', sub: '1,500 min', highlight: true },
  { key: 'professional', label: 'Professional', sub: '5,000 min' },
  { key: 'enterprise', label: 'Enterprise', sub: 'Custom' },
] as const;

type PlanKey = typeof PLANS[number]['key'];

const Cell: React.FC<{ value: string; highlight?: boolean }> = ({ value, highlight }) => {
  const base = `py-5 px-4 text-center align-middle ${highlight ? 'bg-nourdoc-primary/[0.04]' : ''}`;

  let content: React.ReactNode;

  if (value === 'Yes' || value === 'Yes*') {
    content = (
      <span className="inline-flex flex-col items-center gap-0.5">
        <span className={`flex h-6 w-6 items-center justify-center rounded-full ${highlight ? 'bg-nourdoc-primary text-white' : 'bg-emerald-100 text-emerald-700'}`}>
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </span>
        {value === 'Yes*' && <span className="text-[9px] text-slate-400 font-semibold">Pending</span>}
      </span>
    );
  } else if (value === 'No') {
    content = (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
        <Minus className="h-3.5 w-3.5 text-slate-400" />
      </span>
    );
  } else if (value === 'Limited') {
    content = (
      <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
        Limited
      </span>
    );
  } else if (value === 'Confirm') {
    content = (
      <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 border border-slate-200">
        Confirm
      </span>
    );
  } else {
    content = <span className="text-xs font-semibold text-slate-700">{value}</span>;
  }

  return <td className={base}>{content}</td>;
};

export const FeatureComparisonMatrix: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-4 py-1.5 rounded-full border border-nourdoc-primary/20">
          Detailed Entitlement Matrix
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Feature Comparison Across All Tiers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
          Evaluate capabilities across evaluation, solo clinician, group practice, and hospital network editions.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-[0_8px_40px_rgba(24,59,51,0.07)] bg-white">
        <table
          className="w-full min-w-[780px] border-collapse"
          aria-label="Feature Comparison Across Plan Tiers"
        >
          {/* Sticky thead */}
          <thead>
            <tr className="border-b-2 border-slate-100">
              {/* Capability column header */}
              <th
                scope="col"
                className="py-5 px-6 text-left min-w-[240px] bg-white"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Capability
                </span>
              </th>

              {PLANS.map((plan) => (
                <th
                  key={plan.key}
                  scope="col"
                  className={`py-5 px-4 text-center ${plan.highlight ? 'bg-nourdoc-primary/[0.06] border-x-2 border-nourdoc-primary/20' : 'bg-white'}`}
                >
                  <div className={`text-sm font-black tracking-tight ${plan.highlight ? 'text-nourdoc-primary' : 'text-slate-800'}`}>
                    {plan.label}
                    {plan.highlight && (
                      <span className="ml-1.5 inline-block rounded-full bg-nourdoc-primary px-2 py-0.5 text-[9px] font-black text-white uppercase tracking-wider align-middle">
                        Best
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold mt-0.5">{plan.sub} / mo</div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {FEATURE_COMPARISON_MATRIX.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-slate-100 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} hover:bg-[#F3FAF7]/70`}
              >
                {/* Capability label */}
                <th scope="row" className="py-5 px-6 text-left align-middle">
                  <div className="text-sm font-bold text-slate-800 leading-snug">{row.capability}</div>
                  <div className="text-[11px] text-slate-400 font-normal mt-0.5 max-w-[220px] leading-snug">
                    {row.description}
                  </div>
                </th>

                {PLANS.map((plan) => (
                  <Cell
                    key={plan.key}
                    value={(row as Record<PlanKey, string>)[plan.key]}
                    highlight={plan.highlight}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-[#F4F8F7] p-4 text-xs text-slate-500 leading-relaxed">
        <p>
          <strong className="text-slate-700">Entitlement Note: </strong>
          Capabilities marked with an asterisk (*) are subject to current product capability, configuration, support model, and formal commercial approval. Unavailable or unconfigured features are not exposed as active plan benefits.
        </p>
      </div>
    </div>
  );
};
