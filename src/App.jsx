import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/instrument-serif';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import Services from './components/Services.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

import ProblemSolver from './components/ProblemSolver.jsx';

/* legales */
import { Privacy } from './assets/comps/legal/Privacy.jsx';
import { Legal } from './assets/comps/legal/Legal.jsx';
import { Cookies } from './assets/comps/legal/Cookies.jsx';

/* 404 */
import { NotFound } from './assets/comps/Notfound.jsx';

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
            <>
              <Services />
              <ProblemSolver />
              <Projects />
              <Contact />
            </>
          } />
          {LEGAL_ROUTES_CONFIG.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      {!isLegalRoute && <Footer />}
    </>
  );
}

function App() {
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
