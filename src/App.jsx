import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import Services from './components/Services.jsx';
import { Steps } from './components/Steps.jsx';
import { Projects } from './components/Projects.jsx';
import { Faq } from './components/Faq.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

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

  return (
    <>
      {!isLegalRoute && <Header />}
      
      <Routes>
        <Route path="/" element={<>
          <Services />
          <Steps />
          <Projects />
          <Faq />
          <Contact />
        </>} />
        {LEGAL_ROUTES_CONFIG.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {!isLegalRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
