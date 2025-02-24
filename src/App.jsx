import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header.jsx'
import Services from './components/Services.jsx'
import { Steps } from './components/Steps.jsx'
import { Projects } from './components/Projects.jsx'
import { Faq } from './components/Faq.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Analytics } from "@vercel/analytics/react" // Importá Analytics

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Services />
        <Steps />
        <Projects />
        <Faq />
        <Contact />
        <Footer />
      </div>
      <Analytics /> {/* Acá colocamos Analytics */}
    </>
  )
}

export default App