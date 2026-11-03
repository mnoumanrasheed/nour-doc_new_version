// src/components/subscription/PremiumBenefitsSection.tsx
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PremiumBenefitsSection: React.FC = () => {
  const benefits = [
    { title: 'AI‑Enhanced Transcription', description: 'Accurate, real‑time notes with medical vocab.' },
    { title: 'Structured SOAP Notes', description: 'Automatic formatting to streamline charting.' },
    { title: 'Coding Assistance', description: 'Instant ICD‑10 suggestions for reimbursement.' },
    { title: 'Scalable Infrastructure', description: 'Built for solo clinicians to enterprise hospitals.' },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0F2620] to-[#183B33] py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-8">
          Why NourDoc?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-slate-200">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact?topic=Start+Free+Trial"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-md hover:bg-emerald-400"
          >
            Explore Plans
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

