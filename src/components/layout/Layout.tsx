// src/components/layout/Layout.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WebsiteLoader } from './WebsiteLoader';

interface LayoutProps {
  children: React.ReactNode;
}

const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only scroll to top if not an anchor hash jump
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-nourdoc-primary-light selection:text-nourdoc-primary">
      <WebsiteLoader />
      <ScrollToTop />
      
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-nourdoc-primary text-white font-bold rounded-md shadow-lg outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" className="flex-grow pt-[var(--header-height)] focus:outline-none" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
