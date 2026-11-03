// src/components/subscription/EnterpriseSection.tsx
import React, { useState } from 'react';
import { 
  Building2, 
  Server, 
  Shield, 
  Headphones, 
  Send, 
  Check, 
  Sparkles, 
  Lock, 
  Clock, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Workflow,
  Cpu
} from 'lucide-react';
import { ENTERPRISE_CAPACITY_TIERS } from '../../data/pricingConfig';

export const EnterpriseSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    contactName: '',
    workEmail: '',
    phone: '',
    country: 'Pakistan',
    monthlyVolume: '50,000 minutes (Silver Tier)',
    sitesCount: '1 site',
    integrationNeeds: 'HL7 / FHIR EMR Integration',
    deploymentPreference: 'Dedicated Private Cloud',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectTierFromCard = (tierId: string) => {
    let volumeValue = '50,000 minutes (Silver Tier)';
    if (tierId === 'gold') volumeValue = '250,000 minutes (Gold Tier)';
    if (tierId === 'enterprise_high_volume') volumeValue = '1,000,000+ minutes (Enterprise High Volume)';

    setFormData((prev) => ({ ...prev, monthlyVolume: volumeValue }));
    const formEl = document.getElementById('enterprise-proposal-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating verified lead dispatch to NourDoc enterprise sales
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div id="enterprise-section" className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
      {/* Master Enterprise Suite Container */}
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#143029] via-[#183B33] to-[#0F2620] text-white p-6 sm:p-10 lg:p-16 border border-emerald-500/20 shadow-[0_30px_80px_rgba(15,38,32,0.4)]">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-[500px] w-[500px] rounded-full bg-teal-400/10 blur-[140px]" />

        <div className="relative z-10 space-y-16 lg:space-y-20">
          
          {/* Header Block */}
          <div className="max-w-3xl text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
              <Building2 className="h-4 w-4 text-emerald-400" />
              <span>Institutional & Hospital Systems</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Enterprise Capacity & Dedicated Infrastructure
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Designed for hospitals, multi-clinic directorates, nationwide health networks, and medical coding organizations requiring volume-based processing commitments, EHR/HIMS pipelines, and custom SLAs.
            </p>
          </div>

          {/* 3 Executive Capacity Tiers */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8FB7AC]">
                Institutional Capacity Structure
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Click any tier to pre-configure your proposal
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {ENTERPRISE_CAPACITY_TIERS.map((tier) => {
                const isGold = tier.id === 'gold';
                const isHighVolume = tier.id === 'enterprise_high_volume';

                return (
                  <div
                    key={tier.id}
                    className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 ${
                      isGold
                        ? 'border-2 border-amber-400/50 bg-gradient-to-b from-amber-500/[0.12] via-white/[0.05] to-white/[0.02] shadow-[0_16px_40px_rgba(245,158,11,0.12)] ring-1 ring-amber-400/20'
                        : isHighVolume
                        ? 'border-2 border-emerald-400/50 bg-gradient-to-b from-emerald-500/[0.12] via-white/[0.05] to-white/[0.02] shadow-[0_16px_40px_rgba(16,185,129,0.12)] ring-1 ring-emerald-400/20'
                        : 'border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:border-white/30 hover:bg-white/[0.09]'
                    }`}
                  >
                    {isGold && (
                      <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-sm">
                        <Sparkles className="h-3 w-3" />
                        Popular Scale
                      </div>
                    )}
                    {isHighVolume && (
                      <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-sm">
                        <Cpu className="h-3 w-3" />
                        Maximum Throughput
                      </div>
                    )}

                    <div>
                      {/* Top Pill & Treatment */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="font-mono font-bold tracking-wider text-slate-400 text-[11px]">
                          CAPACITY TIER
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            isGold
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                              : isHighVolume
                              ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                          }`}
                        >
                          {tier.commercial_treatment}
                        </span>
                      </div>

                      {/* Tier Name */}
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        {tier.name}
                      </h3>

                      {/* Big Volume Label */}
                      <div className="mt-2 text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                        {tier.capacity_label}
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[48px]">
                        {tier.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FB7AC] block mb-1">
                          Recommended Deployment Scope:
                        </span>
                        <span className="text-xs text-slate-200 font-medium leading-relaxed block">
                          {tier.suitable_for}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectTierFromCard(tier.id)}
                        className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold transition-all ${
                          isGold
                            ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm'
                            : isHighVolume
                            ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-sm'
                            : 'bg-white/15 text-white hover:bg-white/25 border border-white/10'
                        }`}
                      >
                        <span>Select this volume tier</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional Architecture & Photography Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-white/10">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8FB7AC] block mb-1">
                  Enterprise Integration Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Comprehensive Healthcare Institutional Scope
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  NourDoc enterprise solutions go beyond standard subscriptions with dedicated integration engineering, on-premises governance, and high-throughput pipelines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4.5 hover:border-emerald-400/30 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 mb-3 border border-emerald-500/30">
                    <Server className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Flexible Deployments</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Dedicated Private Cloud (HIPAA / GDPR), Hybrid, or On-Premises data center installations.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4.5 hover:border-emerald-400/30 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 mb-3 border border-emerald-500/30">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Security & Governance</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Custom Business Associate Agreements (BAAs), tamper-proof audit trails, and custom retention rules.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4.5 hover:border-emerald-400/30 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 mb-3 border border-emerald-500/30">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">EHR / HIMS Integration</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Seamless bi-directional HL7, FHIR, REST APIs, and automated PACS/RCM pipeline ingestion.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-4.5 hover:border-emerald-400/30 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 mb-3 border border-emerald-500/30">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Contractual SLA & Support</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    99.9% guaranteed uptime SLA, designated technical account manager, and priority clinical response.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                <img
                  src="/images/sections/benefit_hospital.webp"
                  alt="Hospital clinician and healthcare IT operations professional reviewing a deployment workflow together"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 w-fit mb-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Clinical IT & Institutional Collaboration</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Coordinated rollout across outpatient clinics, inpatient wards, and medical coding directorates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Executive Proposal & Demo Intake Console */}
          <div
            id="enterprise-proposal-form"
            className="rounded-[32px] bg-slate-900/80 backdrop-blur-2xl border border-white/20 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  <FileText className="h-4 w-4" />
                  <span>Direct Enterprise Channel</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Request an Enterprise Proposal or Book a Demo
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Submit your institutional requirements. Our healthcare solutions team will generate a scoped proposal covering volume, integrations, deployment, and SLA commitments.
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs text-slate-300 shrink-0">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>Response SLA: Within 1 Business Day</span>
              </div>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  Enterprise Proposal Request Dispatched
                </h4>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{formData.contactName || 'Colleague'}</strong>. A dedicated healthcare solutions engineer has been assigned to your institutional request for <strong>{formData.organization || 'your organization'}</strong> ({formData.monthlyVolume}). We will reach out to <strong>{formData.workEmail}</strong> within 1 business day.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                  >
                    Submit another inquiry or adjust parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Organization / Hospital Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Shaukat Khanum, Aga Khan, Mayo Clinic"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:bg-white/[0.12] focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Dr. / Director Name"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:bg-white/[0.12] focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="name@hospital.org"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:bg-white/[0.12] focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567 or +1 (555) 000-0000"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:bg-white/[0.12] focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  >
                    <option value="Pakistan" className="bg-slate-900 text-white">Pakistan</option>
                    <option value="United States" className="bg-slate-900 text-white">United States</option>
                    <option value="United Kingdom" className="bg-slate-900 text-white">United Kingdom</option>
                    <option value="Canada" className="bg-slate-900 text-white">Canada</option>
                    <option value="United Arab Emirates" className="bg-slate-900 text-white">United Arab Emirates</option>
                    <option value="Saudi Arabia" className="bg-slate-900 text-white">Saudi Arabia</option>
                    <option value="Other" className="bg-slate-900 text-white">Other International</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Expected Monthly Processing Volume *
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  >
                    <option value="50,000 minutes (Silver Tier)" className="bg-slate-900 text-white">Silver Tier (~50,000 minutes / month)</option>
                    <option value="250,000 minutes (Gold Tier)" className="bg-slate-900 text-white">Gold Tier (~250,000 minutes / month)</option>
                    <option value="1,000,000+ minutes (Enterprise High Volume)" className="bg-slate-900 text-white">Enterprise High Volume (1,000,000+ minutes)</option>
                    <option value="Custom Assessment" className="bg-slate-900 text-white">Not sure yet / Need volume audit</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Integration Needs
                  </label>
                  <select
                    name="integrationNeeds"
                    value={formData.integrationNeeds}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  >
                    <option value="HL7 / FHIR EMR Integration" className="bg-slate-900 text-white">HL7 / FHIR EMR Integration</option>
                    <option value="Custom REST API / Webhooks" className="bg-slate-900 text-white">Custom REST API / Webhooks</option>
                    <option value="Batch Transcription Audio Uploads" className="bg-slate-900 text-white">Batch Transcription Audio Uploads</option>
                    <option value="Direct Standalone Portal" className="bg-slate-900 text-white">Direct Standalone Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Deployment Preference
                  </label>
                  <select
                    name="deploymentPreference"
                    value={formData.deploymentPreference}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-800 px-4 py-3 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  >
                    <option value="Dedicated Private Cloud" className="bg-slate-900 text-white">Dedicated Private Cloud (HIPAA / GDPR compliant)</option>
                    <option value="Hybrid Hospital Deployment" className="bg-slate-900 text-white">Hybrid Hospital Deployment</option>
                    <option value="On-Premises Data Center" className="bg-slate-900 text-white">On-Premises Data Center</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-200 mb-1.5">
                    Additional Clinical Workflow Details or Number of Sites
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current EMR/EHR system, number of departments, or target go-live schedule..."
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] p-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:bg-white/[0.12] focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>We enforce strict confidentiality. No patient health information (PHI) should be entered.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-3.5 font-bold text-white shadow-[0_8px_25px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_12px_32px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Request...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Enterprise Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
