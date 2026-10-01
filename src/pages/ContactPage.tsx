// src/pages/ContactPage.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { ContactForm } from '../components/forms/ContactForm';
import contentData from '../data.json';

export const ContactPage: React.FC = () => {
  const page = contentData.pages.contact;
  const location = useLocation();

  useEffect(() => {
    const shouldScrollToForm = location.hash === '#contact-form' || location.search.includes('intent=bookDemo');
    if (!shouldScrollToForm) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, [location.hash, location.search]);

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

    </div>
  );
};

export default ContactPage;
