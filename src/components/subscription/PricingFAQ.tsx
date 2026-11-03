// src/components/subscription/PricingFAQ.tsx
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { PRICING_FAQS } from '../../data/pricingConfig';

export const PricingFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('billable_minutes');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'metering', label: 'Processing & Minutes' },
    { id: 'trials', label: 'Trials & Evaluation' },
    { id: 'billing', label: 'Billing & Overages' },
    { id: 'features', label: 'Features & Teams' },
    { id: 'security', label: 'Security & Privacy' },
  ];

  const filteredFaqs = PRICING_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Frequently Answered Inquiries
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Subscription & Pricing FAQs
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive answers covering billable minutes, trial eligibility, overage metering, cancellation, multiple clinicians, and healthcare data security.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-nourdoc-primary text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-nourdoc-primary focus:outline-none"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-sm text-slate-500">
              No matching questions found for &quot;{searchQuery}&quot;.
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-nourdoc-primary/30 bg-white shadow-xs'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-slate-900 focus-visible:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 ${
                      isOpen
                        ? 'border-nourdoc-primary/20 bg-nourdoc-primary-light text-nourdoc-primary rotate-180'
                        : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Contact Support Banner */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
        <p className="text-xs sm:text-sm text-slate-600">
          Have a specific billing question or need a multi-provider quotation?{' '}
          <a
            href="mailto:support@nour-doc.com"
            className="font-bold text-nourdoc-primary hover:underline underline-offset-4"
          >
            Contact our commercial support team at support@nour-doc.com
          </a>
        </p>
      </div>
    </div>
  );
};
