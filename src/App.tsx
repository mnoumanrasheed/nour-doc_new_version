// src/App.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

// Code-split / lazy-load non-critical routes for fast initial bundle delivery
const WhyNourDocPage = lazy(() => import('./pages/WhyNourDocPage').then(m => ({ default: m.WhyNourDocPage })));
const ProductPage = lazy(() => import('./pages/ProductPage').then(m => ({ default: m.ProductPage })));
const BenefitsPage = lazy(() => import('./pages/BenefitsPage').then(m => ({ default: m.BenefitsPage })));
const SecurityPage = lazy(() => import('./pages/SecurityPage').then(m => ({ default: m.SecurityPage })));
const SubscriptionPage = lazy(() => import('./pages/SubscriptionPage').then(m => ({ default: m.SubscriptionPage })));
const MedicalCodingPage = lazy(() => import('./pages/MedicalCodingPage').then(m => ({ default: m.MedicalCodingPage })));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage').then(m => ({ default: m.IntegrationsPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then(m => ({ default: m.PartnersPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutContactPage = lazy(() => import('./pages/AboutContactPage').then(m => ({ default: m.AboutContactPage })));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage').then(m => ({ default: m.DesignSystemPage })));

const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page content">
    <div className="w-8 h-8 rounded-full border-3 border-[#507D88]/20 border-t-[#507D88] animate-spin" />
    <span className="sr-only">Loading...</span>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-nourdoc" element={<WhyNourDocPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product-features" element={<Navigate to="/product" replace />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/benefits-impact" element={<Navigate to="/benefits" replace />} />
            <Route path="/security-compliance" element={<SecurityPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/subscription-pricing" element={<Navigate to="/subscription" replace />} />
            <Route path="/medical-coding-billing" element={<MedicalCodingPage />} />
            <Route path="/integrations-deployment" element={<IntegrationsPage />} />
            <Route path="/partners-collaborators" element={<PartnersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-demo" element={<Navigate to="/contact?intent=bookDemo&topic=Other" replace />} />
            <Route path="/about-contact" element={<AboutContactPage />} />
            <Route path="/design-system" element={<DesignSystemPage />} />
            <Route path="/showcase" element={<Navigate to="/design-system" replace />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
