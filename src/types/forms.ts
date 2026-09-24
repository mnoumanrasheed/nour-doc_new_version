// src/types/forms.ts
// Type definitions for Contact Form

export interface ContactFormData {
  name: string;
  organization: string;
  role: string;
  country: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export type DiscussionTopic =
  | 'Try NourDoc'
  | 'Subscription'
  | 'Enterprise Deployment'
  | 'Medical Coding & Billing'
  | 'Batch Processing'
  | 'EHR / EMR / HIMS Integration'
  | 'Research Collaboration'
  | 'Partnership'
  | 'Other';
