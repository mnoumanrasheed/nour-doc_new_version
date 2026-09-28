// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import contentData from '../../data.json';
import logoIcon from '../../assets/logo-icon.png';

export const Footer: React.FC = () => {
  const footerData = contentData.footer;
  const brand = contentData.brand;

  return (
    <footer className="bg-nourdoc-primary-dark text-white pt-16 pb-12 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master Brand Statement Bar */}
        <div className="pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-bold text-nourdoc-accent-light uppercase tracking-widest mb-1">
              Master Brand Statement
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {brand.name}: <span className="text-white/[0.88] font-medium">{brand.masterBrandStatement}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.08] text-white border border-white/[0.12]">
              <ShieldCheck className="w-4 h-4 text-nourdoc-accent-light" />
              Enterprise Architecture
            </span>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
                <img
                  src={logoIcon}
                  alt="NourDoc Logo Emblem"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-nourdoc-accent-light transition-colors leading-none">
                  NourDoc
                </span>
                <span className="text-[10px] font-bold text-nourdoc-accent-light uppercase tracking-widest mt-1">
                  Ambient Intelligence
                </span>
              </div>
            </Link>
            <p className="text-sm font-semibold text-white/[0.78]">
              {footerData.brand.tagline}
            </p>
            <p className="text-xs text-white/[0.58] leading-relaxed max-w-sm">
              {footerData.brand.summary}
            </p>

            <div className="pt-2 space-y-4">
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-white">
                  Sales
                </div>
                <a
                  href={`mailto:${brand.emails.sales}`}
                  className="mt-1 inline-block text-sm text-white hover:text-nourdoc-accent-hover hover:underline"
                >
                  {brand.emails.sales}
                </a>
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-white">
                  Support
                </div>
                <a
                  href={`mailto:${brand.emails.support}`}
                  className="mt-1 inline-block text-sm text-white hover:text-nourdoc-accent-hover hover:underline"
                >
                  {brand.emails.support}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Directory Columns */}
          {footerData.columns.slice(0, 3).map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-xs">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/[0.70] hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white/[0.70] hover:text-white transition-colors"
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
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/[0.55] gap-4">
          <p>© {new Date().getFullYear()} NourDoc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="text-white/[0.58] hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white/[0.58] hover:text-white transition-colors">
              Contact & Demo
            </Link>
            <a
              href="/images/IMAGE_CREDITS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/[0.58] hover:text-white transition-colors"
            >
              Image Credits
            </a>
            <span>Canadian Ownership • Pakistani Engineering • Finnish Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
