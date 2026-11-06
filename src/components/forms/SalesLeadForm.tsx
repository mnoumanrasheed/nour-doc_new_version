import React, { useRef, useState } from 'react';
import ReCAPTCHA, { type ReCAPTCHA as ReCAPTCHAInstance } from 'react-google-recaptcha';
import { AlertCircle } from 'lucide-react';
import contentData from '../../data.json';

type SalesLead = {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  country: string;
  message: string;
};

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() ?? '';
const emptyLead: SalesLead = { firstName: '', lastName: '', organization: '', email: '', phone: '', country: '', message: '' };

export const SalesLeadForm: React.FC = () => {
  const { sales } = contentData.brand.emails;
  const recaptchaRef = useRef<ReCAPTCHAInstance | null>(null);
  const [lead, setLead] = useState<SalesLead>(emptyLead);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);

  const updateLead = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setLead((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const fullName = `${lead.firstName} ${lead.lastName}`.trim();
  const emailBody = [
    `Name: ${fullName}`,
    `Organisation: ${lead.organization}`,
    `Work email: ${lead.email}`,
    `Contact number: ${lead.phone || 'Not provided'}`,
    `Country: ${lead.country}`,
    '',
    'Topics to cover:',
    lead.message || 'General NourDoc sales enquiry',
  ].join('\n');

  const submitLead: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setNotice(null);

    if (!recaptchaSiteKey) {
      window.location.href = `mailto:${sales}?subject=${encodeURIComponent('NourDoc sales enquiry')}&body=${encodeURIComponent(emailBody)}`;
      setNotice({ kind: 'success', message: 'Your email app should open with your enquiry pre-filled.' });
      return;
    }

    if (!recaptchaToken) {
      setNotice({ kind: 'error', message: 'Please complete the security check before sending your enquiry.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fullName,
          organization: lead.organization,
          role: 'Sales enquiry',
          country: lead.country,
          email: lead.email,
          phone: lead.phone,
          topic: 'Try NourDoc',
          intent: 'bookDemo',
          message: lead.message || 'General NourDoc sales enquiry',
          recaptchaToken,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string; success?: boolean };
      if (!response.ok || result.success === false) throw new Error(result.message || 'We could not send your enquiry. Please try again.');

      setNotice({ kind: 'success', message: result.message || 'Thanks — our sales team will be in touch shortly.' });
      setLead(emptyLead);
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      setNotice({ kind: 'error', message: error instanceof Error ? error.message : 'We could not send your enquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'mt-2 w-full rounded-xl border border-[#d9c4bc] bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-nourdoc-primary focus:ring-2 focus:ring-nourdoc-primary/15';
  const labelClass = 'text-sm font-medium text-[#3b2229]';

  return (
    <form onSubmit={submitLead} className="grid gap-x-5 gap-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>First name <span className="text-red-600">*</span><input required name="firstName" value={lead.firstName} onChange={updateLead} placeholder="Your first name" className={inputClass} /></label>
        <label className={labelClass}>Last name <span className="text-red-600">*</span><input required name="lastName" value={lead.lastName} onChange={updateLead} placeholder="Your last name" className={inputClass} /></label>
      </div>
      <label className={labelClass}>Company name <span className="text-red-600">*</span><input required name="organization" value={lead.organization} onChange={updateLead} placeholder="Your company name" className={inputClass} /></label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>Work email <span className="text-red-600">*</span><input required type="email" name="email" value={lead.email} onChange={updateLead} placeholder="you@company.com" className={inputClass} /></label>
        <label className={labelClass}>Contact number<input type="tel" name="phone" value={lead.phone} onChange={updateLead} placeholder="+1 000 000 0000" className={inputClass} /></label>
      </div>
      <label className={labelClass}>Country <span className="text-red-600">*</span><select required name="country" value={lead.country} onChange={updateLead} className={inputClass}><option value="" disabled>Select your country</option><option>Canada</option><option>United States</option><option>Pakistan</option><option>Finland</option><option>Other</option></select></label>
      <label className={labelClass}>Anything specific we should cover? <span className="font-normal text-slate-500">(Optional)</span><textarea name="message" value={lead.message} onChange={updateLead} rows={3} placeholder="Questions or topics you want answered" className={`${inputClass} resize-y`} /></label>
      {notice && <div className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${notice.kind === 'success' ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /><p>{notice.message}</p></div>}
      <div className="pt-1">
        {recaptchaSiteKey ? <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} onChange={setRecaptchaToken} onExpired={() => setRecaptchaToken(null)} onErrored={() => setRecaptchaToken(null)} /> : <p className="mb-3 text-sm text-slate-600">Submitting opens a pre-filled email to our sales team.</p>}
        <button type="submit" disabled={isSubmitting} className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-nourdoc-primary px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(40,98,82,0.20)] transition-colors hover:bg-nourdoc-primary-hover disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? 'Sending enquiry…' : recaptchaSiteKey ? 'Contact sales' : 'Open email enquiry'}</button>
      </div>
    </form>
  );
};
