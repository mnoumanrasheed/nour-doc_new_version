// src/components/subscription/TrustResponsibility.tsx
import React from 'react';
import { UserCheck, Lock, EyeOff, FileText } from 'lucide-react';

export const TrustResponsibility: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
            Clinical Governance & Data Integrity
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trust & Clinical Responsibility
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our engineering architecture is built on the fundamental principle that clinician judgment remains sovereign, backed by rigorous data privacy safeguards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Clinician Review Sovereignty */}
          <div className="rounded-2xl border border-slate-200 bg-[#F4F8F7] p-6 space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nourdoc-primary text-white">
              <UserCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Mandatory Clinician Review
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              NourDoc provides assistive AI transcription and SOAP drafting. The clinician maintains final medical discretion and review before signing or filing any documentation into permanent medical records. We do not claim automated clinical decision outcomes.
            </p>
          </div>

          {/* Pillar 2: Encryption & Isolation */}
          <div className="rounded-2xl border border-slate-200 bg-[#F4F8F7] p-6 space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nourdoc-primary text-white">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              In-Transit & At-Rest Encryption
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every audio transmission is protected with modern TLS 1.3 protocol encryption, and stored documentation artifacts are secured with AES-256 cryptographic standards. Strict tenant isolation prevents cross-practice data leakage.
            </p>
          </div>

          {/* Pillar 3: Zero Data Monetization */}
          <div className="rounded-2xl border border-slate-200 bg-[#F4F8F7] p-6 space-y-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nourdoc-primary text-white">
              <EyeOff className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Zero Unauthorized Data Selling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your clinical notes and patient interactions are never monetized, brokered, or used for open foundation AI model training without explicit consent. Audio is strictly processed for the encounter and handled under documented retention policies.
            </p>
          </div>
        </div>

        {/* Regulatory Governance Note */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 flex items-start gap-3">
          <FileText className="h-5 w-5 text-nourdoc-primary shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-800 font-semibold block mb-0.5">
              Verified Compliance & Transparent Communication:
            </strong>
            NourDoc adheres to ethical healthcare communication. We state our technical specifications honestly and never advertise unverified medical device certifications, regulatory clearances, or speculative diagnostic claims.
          </div>
        </div>
      </div>
    </div>
  );
};
