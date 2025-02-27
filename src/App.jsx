import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/museomoderno';

import { Header } from './components/Header.jsx'
import Services from './components/Services.jsx'
import { Steps } from './components/Steps.jsx'
import { Projects } from './components/Projects.jsx'
import { Faq } from './components/Faq.jsx'
/* import { Cloud } from './components/Cloud.jsx' */
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Services />
        <Steps />
        <Projects />
        <Faq />
        {/* <Cloud /> */}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App