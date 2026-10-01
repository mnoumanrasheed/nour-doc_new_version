// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import contentData from '../../data.json';

export const Footer: React.FC = () => {
  const footerData = contentData.footer;
  const brand = contentData.brand;

  return (
    <footer className="bg-nourdoc-primary text-white pt-14 sm:pt-16 pb-8 sm:pb-10 border-t border-white/15" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master Brand Statement Bar */}
        <div className="pb-10 sm:pb-12 mb-10 sm:mb-12 border-b border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6">
          <div className="max-w-3xl">
            <div className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">
              {brand.name}: <span className="text-white/90 font-medium">{brand.masterBrandStatement}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-nourdoc-accent-hover" />
              Enterprise Architecture
            </span>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-x-8 lg:gap-y-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-4 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-nourdoc-primary rounded-sm">
                <img
                  src="/logo.png"
                  alt="NourDoc Logo Emblem"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain shrink-0 brightness-0 invert"
                />
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-nourdoc-accent-hover transition-colors leading-none">
                  NourDoc
                </span>
                <span className="text-xs font-bold text-white/85 uppercase tracking-[0.12em] mt-2">
                  Ambient Intelligence
                </span>
              </div>
            </Link>
            <p className="text-base font-medium leading-relaxed text-white/90">
              {footerData.brand.tagline}
            </p>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              {footerData.brand.summary}
            </p>

            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                  Sales
                </div>
                <a
                  href={`mailto:${brand.emails.sales}`}
                  className="mt-1.5 inline-flex text-sm font-medium text-white hover:text-nourdoc-accent-hover hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
                >
                  {brand.emails.sales}
                </a>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                  Support
                </div>
                <a
                  href={`mailto:${brand.emails.support}`}
                  className="mt-1.5 inline-flex text-sm font-medium text-white hover:text-nourdoc-accent-hover hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
                >
                  {brand.emails.support}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Directory Columns */}
          {footerData.columns.slice(0, 3).map((col, idx) => (
            <div key={idx} className={`space-y-4 ${idx === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.12em]">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm leading-6">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Bottom Bar */}
        <div className="pt-7 sm:pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center sm:items-start justify-between text-sm text-white/75 gap-4 sm:gap-6">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} NourDoc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-5 gap-y-2 text-center sm:text-right">
            <span className="text-sm text-white/75">Canadian Ownership &bull; Pakistani Engineering &bull; Finnish Research</span>
            <a
              href="https://m3hive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/15 hover:text-nourdoc-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Built by M3 Hive
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
