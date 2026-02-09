import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap, Shield, Cpu } from 'lucide-react';
import smartLeadsImg from "../assets/images/projects/smartleads.png";
import "../assets/styles/projects.css";

export const Projects = () => {
  const features = [
    {
      id: 1,
      title: "Monitoreo Proactivo",
      description: "Sistemas que vigilan tu negocio 24/7, detectando cuellos de botella antes de que ocurran.",
      color: "#ff80bf",
      icon: (
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-svg">
          <rect x="40" y="20" width="120" height="60" rx="4" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
          <path d="M40 40H160" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx="60" cy="50" r="1.5" fill="white" fillOpacity="0.4" />
          <circle cx="70" cy="50" r="1.5" fill="white" fillOpacity="0.4" />
          <circle cx="80" cy="50" r="1.5" fill="white" fillOpacity="0.4" />
          <path d="M140 30L150 40L140 50" stroke="#ff80bf" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="50" y="90" width="100" height="2" rx="1" fill="white" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Soporte en Tiempo Real",
      description: "Respuestas instantáneas y precisas, eliminando tiempos de espera para tus clientes.",
      color: "#60a5fa",
      icon: (
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-svg">
          <path d="M30 30H170V80H60L30 100V30Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
          <rect x="50" y="45" width="80" height="1.5" rx="0.75" fill="white" fillOpacity="0.2" />
          <rect x="50" y="55" width="60" height="1.5" rx="0.75" fill="white" fillOpacity="0.2" />
          <rect x="50" y="65" width="40" height="1.5" rx="0.75" fill="white" fillOpacity="0.2" />
          <circle cx="150" cy="55" r="8" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Escalabilidad Infinita",
      description: "Infraestructura diseñada para crecer al ritmo de tu demanda sin degradar la calidad.",
      color: "#34d399",
      icon: (
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-svg">
          <path d="M50 80L100 30L150 80" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
          <path d="M70 80L100 50L130 80" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          <rect x="95" y="25" width="10" height="10" stroke="#34d399" strokeWidth="1" />
          <line x1="50" y1="90" x2="150" y2="90" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>
      )
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Superior: Título Central */}
        <div className="projects-header-v2">
          <motion.span
            className="p-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            NUESTROS SISTEMAS
          </motion.span>
          <motion.h2
            className="p-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automatizá tus procesos más complejos
          </motion.h2>
          {
            /**<motion.button
              className="p-header-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver cómo funciona
            </motion.button> */
          }
        </div>

        {/* Grid de Features Técnicos */}
        <div className="p-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="p-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="f-header">
                <div className="f-dot" style={{ backgroundColor: feature.color }}></div>
                <h3 className="f-title">{feature.title}</h3>
              </div>
              <p className="f-text">{feature.description}</p>
              <div className="f-icon-container">
                {feature.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección Highlight: Split Text/Mockup */}
        <motion.div
          className="p-highlight-box"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-highlight-content">
            <h3 className="h-title">SmartLeads: Extracción masiva de clientes</h3>
            <p className="h-text">
              Automatizá tu prospección y contactalos masivamente sin mover un dedo.
            </p>
            <motion.a
              href="https://b2b-client-acquisition-system.vercel.app/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-project-link"
              whileHover={{ x: 5 }}
            >
              Ver proyecto<ArrowRight size={16} />
            </motion.a>
          </div>
          <div className="p-highlight-visual image-mode">
            <div className="safari-frame">
              <div className="safari-header">
                <div className="safari-dots">
                  <span className="s-dot red"></span>
                  <span className="s-dot yellow"></span>
                  <span className="s-dot green"></span>
                </div>
                <div className="safari-address">smartleads</div>
              </div>
              <div className="safari-content">
                <img src={smartLeadsImg} alt="SmartLeads Dashboard" className="p-project-img" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sección Final: Interoperabilidad */}
        <div className="p-interop-section">
          <motion.h3
            className="interop-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Totalmente interoperable
          </motion.h3>
          <motion.p
            className="interop-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Nos integramos con todas las herramientas que ya usás: Slack, WhatsApp, CRM y más.
          </motion.p>

          <div className="interop-visual">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="interop-svg">
              {/* Isometría simplificada */}
              <motion.path
                d="M200 150L280 110L200 70L120 110L200 150Z"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M200 190L280 150L200 110L120 150L200 190Z"
                stroke="#ff80bf"
                strokeWidth="1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <path d="M120 150V190L200 230V190" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
              <path d="M280 150V190L200 230" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
