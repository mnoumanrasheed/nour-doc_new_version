// src/lib/schema.ts
import { z } from 'zod';

export const DiscussionTopicEnum = z.enum([
  'Try NourDoc',
  'Subscription',
  'Enterprise Deployment',
  'Medical Coding & Billing',
  'Batch Processing',
  'EHR / EMR / HIMS Integration',
  'Research Collaboration',
  'Partnership',
  'Other',
]);

export type DiscussionTopic = z.infer<typeof DiscussionTopicEnum>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name is required (at least 2 characters)'),
  organization: z.string().min(2, 'Organization name is required'),
  role: z.string().min(2, 'Role / Position is required'),
  country: z.string().min(2, 'Country is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  topic: DiscussionTopicEnum,
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Schema for Content Data JSON validation
export const ContentDataSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
    appUrl: z.string().url(),
    emails: z.object({
      sales: z.string().email(),
      support: z.string().email(),
      partnerships: z.string().email(),
      investors: z.string().email(),
    }),
    masterStatement: z.string(),
  }),
  navigation: z.array(
    z.object({
      label: z.string(),
      path: z.string(),
    })
  ),
  footer: z.object({
    statement: z.string(),
    columns: z.array(
      z.object({
        title: z.string(),
        links: z.array(
          z.object({
            label: z.string(),
            path: z.string(),
          })
        ),
      })
    ),
    copyright: z.string(),
  }),
  pages: z.record(z.string(), z.any()),
});
