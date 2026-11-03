// src/components/subscription/UsageCalculator.tsx
import React, { useState, useId } from 'react';
import { Calculator, Users, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import type { MarketCode, PlanConfig } from '../../data/pricingConfig';

interface UsageCalculatorProps {
  market: MarketCode;
  plans: PlanConfig[];
  onSelectPlan: (plan: PlanConfig) => void;
  onOpenEnterprise: () => void;
}

export const UsageCalculator: React.FC<UsageCalculatorProps> = ({
  market,
  plans,
  onSelectPlan,
  onOpenEnterprise,
}) => {
  const [dailyConsultations, setDailyConsultations] = useState<number>(20);
  const [durationMinutes, setDurationMinutes] = useState<number>(8);
  const [workingDays, setWorkingDays] = useState<number>(26);
  const [cliniciansCount, setCliniciansCount] = useState<number>(1);
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);

  const dailyId = useId();
  const durationId = useId();
  const daysId = useId();
  const cliniciansId = useId();

  // Active clinicians multiplier
  const effectiveClinicians = isPracticeMode ? Math.max(1, cliniciansCount) : 1;

  // Monthly estimated minutes = consultations/day * avg duration * working days * clinicians
  const estimatedMonthlyMinutes = Math.round(
    Math.max(1, dailyConsultations) *
    Math.max(1, durationMinutes) *
    Math.max(1, workingDays) *
    effectiveClinicians
  );

  // Plan recommendation: lowest suitable plan based on configured capacity
  let recommendedPlanId = 'free';

  if (estimatedMonthlyMinutes <= 30) {
    recommendedPlanId = 'free';
  } else if (estimatedMonthlyMinutes <= 300) {
    recommendedPlanId = 'starter';
  } else if (estimatedMonthlyMinutes <= 1500) {
    recommendedPlanId = 'growth';
  } else if (estimatedMonthlyMinutes <= 5000) {
    recommendedPlanId = 'professional';
  } else {
    recommendedPlanId = 'enterprise';
  }

  const recommendedPlan = plans.find((p) => p.plan_id === recommendedPlanId) || plans[2];

  // Capacity calculation
  const includedMinutes = recommendedPlan.included_minutes;
  const estimatedOverageMinutes = Math.max(0, estimatedMonthlyMinutes - includedMinutes);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(32,98,84,0.06)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-nourdoc-primary">
              <Calculator className="h-4 w-4" />
              <span>Interactive Clinical Volume Estimator</span>
            </div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Estimate your monthly processing volume
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Calculate required processing minutes based on your consultation workload and clinic team size.
            </p>
          </div>

          {/* Toggle Single Clinician vs Clinic / Practice */}
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setIsPracticeMode(false);
                setCliniciansCount(1);
              }}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                !isPracticeMode
                  ? 'bg-white text-nourdoc-primary shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo Clinician
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPracticeMode(true);
                if (cliniciansCount === 1) setCliniciansCount(3);
              }}
              className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                isPracticeMode
                  ? 'bg-white text-nourdoc-primary shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Clinic / Practice Team
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-6">
            {/* Input 1: Daily Consultations */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={dailyId} className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-nourdoc-primary" />
                  <span>Average Consultations per Day (per doctor)</span>
                </label>
                <span className="font-mono text-base font-bold text-nourdoc-primary">
                  {dailyConsultations} <span className="text-xs text-slate-500 font-normal">pts/day</span>
                </span>
              </div>
              <input
                id={dailyId}
                type="range"
                min={1}
                max={60}
                step={1}
                value={dailyConsultations}
                onChange={(e) => setDailyConsultations(Number(e.target.value))}
                className="w-full accent-nourdoc-primary cursor-pointer h-2 bg-slate-100 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1 pt/day</span>
                <span>20 (Standard Outpatient)</span>
                <span>60 pts/day</span>
              </div>
            </div>

            {/* Input 2: Consultation Processing Duration */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={durationId} className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-nourdoc-primary" />
                  <span>Average Processing Duration per Encounter</span>
                </label>
                <span className="font-mono text-base font-bold text-nourdoc-primary">
                  {durationMinutes} <span className="text-xs text-slate-500 font-normal">minutes</span>
                </span>
              </div>
              <input
                id={durationId}
                type="range"
                min={2}
                max={30}
                step={1}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full accent-nourdoc-primary cursor-pointer h-2 bg-slate-100 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2 min (Follow-up)</span>
                <span>8 min (Typical Visit)</span>
                <span>30 min (Complex Consult)</span>
              </div>
            </div>

            {/* Input 3: Working Days per Month */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={daysId} className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-nourdoc-primary" />
                  <span>Working Days per Month</span>
                </label>
                <span className="font-mono text-base font-bold text-nourdoc-primary">
                  {workingDays} <span className="text-xs text-slate-500 font-normal">days/mo</span>
                </span>
              </div>
              <input
                id={daysId}
                type="range"
                min={10}
                max={30}
                step={1}
                value={workingDays}
                onChange={(e) => setWorkingDays(Number(e.target.value))}
                className="w-full accent-nourdoc-primary cursor-pointer h-2 bg-slate-100 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>10 days</span>
                <span>22 (Mon-Fri)</span>
                <span>26 (Standard PK Clinic)</span>
                <span>30 days</span>
              </div>
            </div>

            {/* Input 4: Clinicians Count (when practice mode is active) */}
            {isPracticeMode && (
              <div className="rounded-2xl border border-nourdoc-primary/20 bg-nourdoc-primary-light/30 p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor={cliniciansId} className="font-semibold text-nourdoc-primary flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>Active Clinicians in Practice</span>
                  </label>
                  <span className="font-mono text-base font-bold text-nourdoc-primary">
                    {cliniciansCount} <span className="text-xs text-slate-600 font-normal">clinicians</span>
                  </span>
                </div>
                <input
                  id={cliniciansId}
                  type="range"
                  min={1}
                  max={25}
                  step={1}
                  value={cliniciansCount}
                  onChange={(e) => setCliniciansCount(Number(e.target.value))}
                  className="w-full accent-nourdoc-primary cursor-pointer h-2 bg-white rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 clinician</span>
                  <span>5 clinicians</span>
                  <span>25 clinicians</span>
                </div>
              </div>
            )}
          </div>

          {/* Outputs & Recommendation Card */}
          <div className="lg:col-span-5 rounded-2xl border border-nourdoc-primary/20 bg-gradient-to-b from-white to-[#F4F8F7] p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-nourdoc-primary block mb-1">
              Estimated Monthly Output
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900 font-mono">
                {estimatedMonthlyMinutes.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                processing minutes / month
              </span>
            </div>

            {/* Breakdown */}
            <div className="mt-4 space-y-2 text-xs text-slate-600 border-t border-slate-200/80 pt-4">
              <div className="flex justify-between">
                <span>Monthly Consultations:</span>
                <span className="font-semibold text-slate-800">
                  {(dailyConsultations * workingDays * effectiveClinicians).toLocaleString()} encounters
                </span>
              </div>
              <div className="flex justify-between">
                <span>Daily Total Time:</span>
                <span className="font-semibold text-slate-800">
                  {((dailyConsultations * durationMinutes * effectiveClinicians) / 60).toFixed(1)} hours/day
                </span>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="mt-5 rounded-xl border border-nourdoc-primary bg-nourdoc-primary-light/80 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-nourdoc-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Recommended Plan Tier:</span>
              </div>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {recommendedPlan.name}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Included Capacity: {recommendedPlan.included_minutes_label}
              </p>

              {/* Overage check */}
              {estimatedOverageMinutes > 0 && (
                <div className="mt-2 text-xs font-medium text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200">
                  Estimated excess: ~{estimatedOverageMinutes.toLocaleString()} mins beyond included tier. Additional usage is metered via standard overage tariffs.
                </div>
              )}
            </div>

            {/* Estimated monthly bill display rule */}
            <div className="mt-4 rounded-xl bg-slate-100 p-3.5 text-xs text-slate-600 space-y-1.5 border border-slate-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800 block">
                    Estimated Monthly Charge ({market === 'PK' ? 'PKR' : 'USD'}):
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Pricing requires commercial confirmation. As specified in Section 5, recurring subscription fee and overage charges are calculated only upon approved commercial sign-off to ensure accurate billing without fabricated amounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-5">
              {recommendedPlanId === 'enterprise' ? (
                <button
                  type="button"
                  onClick={onOpenEnterprise}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-slate-800 shadow-sm"
                >
                  <span>Request Enterprise Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onSelectPlan(recommendedPlan)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-nourdoc-primary px-4 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-nourdoc-primary-hover shadow-sm"
                >
                  <span>Proceed with {recommendedPlan.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
