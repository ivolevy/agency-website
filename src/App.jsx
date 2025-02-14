import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import Services from './components/Services.jsx'
import { Projects } from './components/Projects.jsx'
import { Faq } from './components/Faq.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <Services />
        <About />
        <Projects />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
