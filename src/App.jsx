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

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Renderizamos el header solo si no estamos en la página 404 */}
      {location.pathname !== '/404' && location.pathname !== '/politica-de-privacidad' && location.pathname !== '/aviso-legal' && location.pathname !== '/cookies' && <Header />}
      
      <Routes>
        <Route path="/" element={<>
          <Services />
          <Steps />
          <Projects />
          <Faq />
          <Contact />
        </>} />
        <Route path="/politica-de-privacidad" element={<Privacy />} />
        <Route path="/aviso-legal" element={<Legal />} />
        <Route path="/cookies" element={<Cookies />} />
        {/* Ruta 404 */}
        <Route path="/404" element={<NotFound />} />
        {/* Redirigir cualquier ruta no definida a /404 */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {/* Renderizamos el footer solo si no estamos en la página 404 */}
      {location.pathname !== '/404' && location.pathname !== '/politica-de-privacidad' && location.pathname !== '/aviso-legal' && location.pathname !== '/cookies' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
      <Analytics /> {/* Vercel Analytics */}
      <SpeedInsights /> {/* Vercel Speed Insights */}
    </Router>
  );
}

export default App;
