// src/components/forms/ContactForm.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Calendar, ShieldAlert, Mail } from 'lucide-react';
import { Button } from '../common/Button';
import contentData from '../../data.json';
import { ContactFormSchema, type ContactFormData, type DiscussionTopic } from '../../lib/schema';

const discussionTopics: DiscussionTopic[] = [
  'Try NourDoc',
  'Subscription',
  'Enterprise Deployment',
  'Medical Coding & Billing',
  'Batch Processing',
  'EHR / EMR / HIMS Integration',
  'Research Collaboration',
  'Partnership',
  'Other',
];

const audienceList = [
  'A clinician',
  'A medical practice',
  'A hospital',
  'A healthcare network',
  'A medical coding company',
  'A billing organization',
  'An EHR / EMR / HIMS provider',
  'A technology partner',
  'A research institution',
  'A distribution partner',
];

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const emails = contentData.brand.emails;

  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isBookDemoIntent = searchParams.get('intent') === 'bookDemo';
  const urlTopic = searchParams.get('topic') as DiscussionTopic | null;

  const initialTopic: DiscussionTopic =
    urlTopic && discussionTopics.includes(urlTopic)
      ? urlTopic
      : isBookDemoIntent
      ? 'Other'
      : 'Other';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      organization: '',
      role: '',
      country: '',
      email: '',
      phone: '',
      topic: initialTopic,
      message: '',
    },
  });

  useEffect(() => {
    if (urlTopic && discussionTopics.includes(urlTopic)) {
      setValue('topic', urlTopic);
    } else if (isBookDemoIntent) {
      setValue('topic', 'Other');
    }
  }, [urlTopic, isBookDemoIntent, setValue]);

  const onSubmit = () => {
    setIsSubmitting(true);
    // Simulate short network delay for submitting UX state
    setTimeout(() => {
      setIsSubmitting(false);
      // Explicit unconfigured form delivery rule:
      // Never claim delivery or success toast on Vite frontend without configured backend endpoint
      setSubmittedNotice('Your message was not sent because form delivery is not configured.');
    }, 400);
  };

  return (
    <div id="contact-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Column: Context, 10 Stakeholder Audiences & 4 Official Mailto Directory */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="inline-block text-xs font-bold text-[#507D88] uppercase tracking-widest bg-[#EBF3F5] px-3 py-1 rounded-full mb-3">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Let's Talk About Your Healthcare Workflow
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            We would like to understand what you are trying to solve.
          </p>
        </div>

        {/* Demo Request Guidance Banner */}
        {isBookDemoIntent && (
          <div className="rounded-2xl p-5 bg-[#EBF3F5] border border-[#507D88]/30 flex items-start gap-3.5 shadow-xs">
            <Calendar className="w-5 h-5 text-[#507D88] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-800">
              <span className="font-bold text-[#507D88] block mb-1">Live Platform Demonstration Inquiry</span>
              <p className="leading-relaxed">
                To schedule a demonstration, please submit your organization and workflow requirements below or email our Sales team directly at{' '}
                <a href={`mailto:${emails.sales}`} className="font-bold text-[#507D88] hover:underline">
                  {emails.sales}
                </a>.
              </p>
              <span className="text-[11px] text-slate-500 block mt-2 italic">
                Note: Submitting this inquiry initiates scheduling; meeting times are confirmed directly by our team.
              </span>
            </div>
          </div>
        )}

        {/* 4 Official Contact Categories with Working Mailto Links */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-[#507D88]" />
            <span>Official Email Channels</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/60">
              <span className="font-bold text-slate-700">Sales:</span>
              <a
                href={`mailto:${emails.sales}`}
                className="font-mono text-[#507D88] hover:underline font-semibold text-xs sm:text-sm"
              >
                {emails.sales}
              </a>
            </div>

            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/60">
              <span className="font-bold text-slate-700">Support:</span>
              <a
                href={`mailto:${emails.support}`}
                className="font-mono text-[#507D88] hover:underline font-semibold text-xs sm:text-sm"
              >
                {emails.support}
              </a>
            </div>

            <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/60">
              <span className="font-bold text-slate-700">Partnerships:</span>
              <a
                href={`mailto:${emails.partnerships}`}
                className="font-mono text-[#507D88] hover:underline font-semibold text-xs sm:text-sm"
              >
                {emails.partnerships}
              </a>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Investors:</span>
              <a
                href={`mailto:${emails.investors}`}
                className="font-mono text-[#507D88] hover:underline font-semibold text-xs sm:text-sm"
              >
                {emails.investors}
              </a>
            </div>
          </div>
        </div>

        {/* Target Audiences List (Exact 10 Audiences from Source PDF) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Whether You Are:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {audienceList.map((aud, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#507D88] shrink-0" />
                <span>{aud}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Accessible Contact Form */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-lg">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Fill out the form below to inquire about clinical trials, enterprise deployment, coding & billing workflows, or partnerships.
        </p>

        {/* Unconfigured Delivery Notice */}
        {submittedNotice && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3 font-medium shadow-xs">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <div className="space-y-2">
              <span className="font-bold text-amber-900 block text-sm">Form Delivery Notice</span>
              <p className="leading-relaxed">{submittedNotice}</p>
              <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-snug">
                Please forward your inquiry directly to our team at{' '}
                <a href={`mailto:${emails.sales}`} className="font-bold underline text-[#507D88]">
                  {emails.sales}
                </a>{' '}
                or use our specific departmental email channels on the left.
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field: Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                maxLength={100}
                {...register('name')}
                placeholder="Dr. Jane Smith"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                  errors.name
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Field: Organization */}
            <div>
              <label htmlFor="organization" className="block text-xs font-bold text-slate-700 mb-1">
                Organization <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="organization"
                type="text"
                maxLength={120}
                {...register('organization')}
                placeholder="Apex Health Network"
                aria-invalid={!!errors.organization}
                aria-describedby={errors.organization ? 'organization-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                  errors.organization
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
                }`}
              />
              {errors.organization && (
                <p id="organization-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.organization.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field: Role / Position */}
            <div>
              <label htmlFor="role" className="block text-xs font-bold text-slate-700 mb-1">
                Role / Position <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="role"
                type="text"
                maxLength={100}
                {...register('role')}
                placeholder="Chief Medical Officer / Physician"
                aria-invalid={!!errors.role}
                aria-describedby={errors.role ? 'role-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                  errors.role
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
                }`}
              />
              {errors.role && (
                <p id="role-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Field: Country */}
            <div>
              <label htmlFor="country" className="block text-xs font-bold text-slate-700 mb-1">
                Country <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="country"
                type="text"
                maxLength={80}
                {...register('country')}
                placeholder="Canada / United States / Pakistan / Finland"
                aria-invalid={!!errors.country}
                aria-describedby={errors.country ? 'country-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                  errors.country
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
                }`}
              />
              {errors.country && (
                <p id="country-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field: Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                maxLength={120}
                {...register('email')}
                placeholder="jane.smith@healthcare.org"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all ${
                  errors.email
                    ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Field: Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                Phone <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                maxLength={30}
                {...register('phone')}
                placeholder="+1 (555) 019-2834"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20 outline-none transition-all"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-[11px] text-red-600 font-medium">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Field: What would you like to discuss? (Exact 9 discussion topics) */}
          <div>
            <label htmlFor="topic" className="block text-xs font-bold text-slate-700 mb-1">
              What would you like to discuss? <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              id="topic"
              {...register('topic')}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20 outline-none transition-all bg-white font-medium"
            >
              {discussionTopics.map((top, idx) => (
                <option key={idx} value={top}>
                  {top}
                </option>
              ))}
            </select>
            {errors.topic && (
              <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.topic.message}</p>
            )}
          </div>

          {/* Field: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
              Message <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              maxLength={2000}
              {...register('message')}
              placeholder="Tell us about your clinical documentation volume, EHR integration needs, or partnership inquiry..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm outline-none transition-all resize-y ${
                errors.message
                  ? 'border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-slate-200 focus:border-[#507D88] focus:ring-2 focus:ring-[#507D88]/20'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* PHI Safety Microcopy Warning (Flagged for Owner Review) */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-[11px] text-slate-600">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Privacy Notice:</span> Please do not include Protected Health Information (PHI) or identifiable patient medical records in this message field.
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={true}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'PROCESSING...' : 'SEND MESSAGE'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
