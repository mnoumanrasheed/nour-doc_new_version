// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import contentData from '../../data.json';
import logoIcon from '../../assets/logo-icon.png';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const navigation = contentData.navigation;
  const appStoreUrl = contentData.brand.appStoreUrl;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 min-h-[72px] md:min-h-[80px] lg:min-h-[88px] py-3 md:py-4 lg:py-2'
          : 'bg-white border-b border-slate-100 min-h-[72px] md:min-h-[80px] lg:min-h-[88px] py-3 md:py-4 lg:py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 bg-transparent group focus-visible:outline-2 focus-visible:outline-nourdoc-primary shrink-0"
            aria-label="NourDoc Home"
          >
            <img
              src={logoIcon}
              alt="NourDoc emblem"
              className="h-9 sm:h-10 md:h-11 lg:h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="font-sans text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-none text-slate-900 group-hover:text-nourdoc-primary transition-colors">
              NourDoc
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2" aria-label="Main Navigation">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-xs font-bold rounded-md transition-colors relative ${isActive
                      ? 'text-nourdoc-primary bg-nourdoc-primary-light'
                      : 'text-slate-600 hover:text-nourdoc-primary hover:bg-slate-50'
                    }`}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-nourdoc-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Group */}
          <div className="hidden lg:flex shrink-0 flex-col items-center gap-1">
            <Button
              href={appStoreUrl}
              external={true}
              variant="outline"
              size="sm"
              icon={true}
              className="w-24 min-h-[34px] py-1.5"
            >
              Try Free
            </Button>
            <Button
              to="/contact?intent=bookDemo&topic=Other"
              variant="primary"
              size="sm"
              className="w-24 min-h-[34px] py-1.5"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-bold bg-nourdoc-primary-light text-nourdoc-primary rounded-md"
            >
              Try Free
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-nourdoc-primary hover:bg-slate-100 focus-visible:outline-nourdoc-primary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Motion for React) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[72px] bg-nourdoc-primary-dark/40 backdrop-blur-sm z-40 xl:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-[72px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 xl:hidden overflow-y-auto border-l border-slate-200 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                  Navigation
                </div>
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${isActive
                            ? 'bg-nourdoc-primary-light text-nourdoc-primary'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-nourdoc-primary'
                          }`}
                      >
                        <span>{item.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <Button
                    to="/contact?intent=bookDemo&topic=Other"
                    onClick={() => setIsOpen(false)}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Book a Demo
                  </Button>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`block text-center text-xs font-bold py-2 rounded-lg transition-colors ${location.pathname === '/contact'
                        ? 'bg-nourdoc-primary-light text-nourdoc-primary'
                        : 'text-slate-600 hover:text-nourdoc-primary hover:bg-slate-50'
                      }`}
                  >
                    Contact & Inquiries →
                  </Link>
                  <Button
                    href={appStoreUrl}
                    external={true}
                    variant="outline"
                    size="md"
                    icon={true}
                    className="w-full justify-center"
                  >
                    Try NourDoc Free (Android)
                  </Button>
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500">Contact Sales:</div>
                <a
                  href={`mailto:${contentData.brand.emails.sales}`}
                  className="text-xs font-bold text-nourdoc-primary hover:underline"
                >
                  {contentData.brand.emails.sales}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
