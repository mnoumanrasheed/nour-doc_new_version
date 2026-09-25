// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import contentData from '../../data.json';
import logoIcon from '../../assets/logo-icon.png';

export const Footer: React.FC = () => {
  const footerData = contentData.footer;
  const brand = contentData.brand;

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Master Brand Statement Bar */}
        <div className="pb-12 mb-12 border-b border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-bold text-[#7AB1BF] uppercase tracking-widest mb-1">
              Master Brand Statement
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {brand.name}: <span className="text-slate-300 font-medium">{brand.masterBrandStatement}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#7AB1BF]" />
              Enterprise Architecture
            </span>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-[#7AB1BF]/60 transition-all">
                <img
                  src={logoIcon}
                  alt="NourDoc Logo Emblem"
                  className="h-9 w-9 object-contain filter drop-shadow-xs"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#7AB1BF] transition-colors leading-none">
                  NourDoc
                </span>
                <span className="text-[10px] font-bold text-[#7AB1BF] uppercase tracking-widest mt-1">
                  Ambient Intelligence
                </span>
              </div>
            </Link>
            <p className="text-sm font-semibold text-slate-300">
              {footerData.brand.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {footerData.brand.summary}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="font-bold text-slate-300">Direct Inquiries:</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7AB1BF]" />
                <span>Sales:</span>
                <a href={`mailto:${brand.emails.sales}`} className="text-[#7AB1BF] hover:underline font-mono">
                  {brand.emails.sales}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#7AB1BF]" />
                <span>Support:</span>
                <a href={`mailto:${brand.emails.support}`} className="text-[#7AB1BF] hover:underline font-mono">
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
                        className="text-slate-400 hover:text-[#7AB1BF] transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-400 hover:text-[#7AB1BF] transition-colors"
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
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} NourDoc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact & Demo
            </Link>
            <span>Canadian Ownership • Pakistani Engineering • Finnish Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
