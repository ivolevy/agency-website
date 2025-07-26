import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { useEffect, lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { initPerformanceOptimizations } from './utils/performance';

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import Services from './components/Services.jsx';

// Lazy loading para componentes no críticos
const Steps = lazy(() => import('./components/Steps.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Faq = lazy(() => import('./components/Faq.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

/* legales */
const Privacy = lazy(() => import('./assets/comps/legal/Privacy.jsx'));
const Legal = lazy(() => import('./assets/comps/legal/Legal.jsx'));
const Cookies = lazy(() => import('./assets/comps/legal/Cookies.jsx'));

/* 404 */
const NotFound = lazy(() => import('./assets/comps/Notfound.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rosa"></div>
  </div>
);

// Preload critical fonts
const preloadFonts = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = './assets/fonts/hero/Hero-Regular.ttf';
  link.as = 'font';
  link.type = 'font/ttf';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

const LEGAL_ROUTES = [
  '/404',
  '/politica-de-privacidad',
  '/aviso-legal',
  '/cookies'
];

const LEGAL_ROUTES_CONFIG = [
  { path: '/politica-de-privacidad', element: <Privacy /> },
  { path: '/aviso-legal', element: <Legal /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/404', element: <NotFound /> }
];

function Layout() {
  const location = useLocation();
  const isLegalRoute = LEGAL_ROUTES.includes(location.pathname);
  let headerProps = {};
  if (location.pathname === "/") {
    headerProps = {};
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <SEO />
      {!isLegalRoute && <Header {...headerProps} />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
              <Steps />
              <Projects />
              <Faq />
              <Contact />
            </Suspense>
          } />
          {LEGAL_ROUTES_CONFIG.map(({ path, element }) => (
            <Route key={path} path={path} element={
              <Suspense fallback={<LoadingSpinner />}>
                {element}
              </Suspense>
            } />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      {!isLegalRoute && (
        <Suspense fallback={<div className="h-20 bg-gray-100"></div>}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

function App() {
  useEffect(() => {
    preloadFonts();
    initPerformanceOptimizations();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  );
}

export default App;
