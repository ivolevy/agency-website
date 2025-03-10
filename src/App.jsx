import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/politica-de-privacidad' && location.pathname !== '/aviso-legal' && location.pathname !== '/cookies' && <Header />}
      
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
      </Routes>

      {location.pathname !== '/politica-de-privacidad' && location.pathname !== '/aviso-legal' && location.pathname !== '/cookies' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
      <Analytics /> {/* Agrega esto aquí para que Vercel Analytics funcione */}
    </Router>
  );
}

export default App;
