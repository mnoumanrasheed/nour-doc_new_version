// src/pages/ContactPage.tsx
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ContactForm } from '../components/forms/ContactForm';
import { GlobalCTA } from '../components/sections/GlobalCTA';
import contentData from '../data.json';

export const ContactPage: React.FC = () => {
  const page = contentData.pages.contact;

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. Page Hero: Contact & Book a Demo with Executive Consultation Background */}
      <Hero
        badge="CONTACT & BOOK A DEMO"
        h1={page.hero.h1}
        description={page.hero.lead}
        showVisual={false}
        backgroundImage="/images/hero/hero_contact.jpg"
      />

      {/* 2. Interactive Contact Form, 4 Official Email Channels, and Audience Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      {/* 3. Final CTA with Enterprise Box */}
      <GlobalCTA
        eyebrow={page.finalCta.eyebrow}
        title={page.finalCta.h2}
        subtitle={page.finalCta.sub}
        primaryLabel={page.finalCta.primaryCta.label}
        primaryIsApp={true}
        secondaryLabel={page.finalCta.secondaryCta.label}
        secondaryTarget="/contact?intent=bookDemo&topic=Other"
        showEnterpriseBox={true}
      />
    </div>
  );
};

export default ContactPage;
