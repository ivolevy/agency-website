import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import "../assets/styles/projects.css";
import photoEditor from "../assets/images/projects/photoEditor.webp";
import restaurant from "../assets/images/projects/restaurant.webp";
import spoty from "../assets/images/projects/spoty.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Editor de imágenes centralizado",
      description: "Sistema de gestión integral para estudios de arquitectura y diseño",
      img: photoEditor,
      achievements: ["Remover fondo con IA", "Recorte", "Redimensionado", "Cambio de extensión"],
      link: "https://v0-centralized-image-editor.vercel.app",
    },
    {
      id: 2,
      title: "Mediterra Restaurant",
      description: "Sitio web para restaurante mediterráneo de alta gama",
      img: restaurant,
      achievements: ["Formulario de reserva", "Menú", "Pedidos online", "Información"],
      link: "https://v0-luxury-restaurant-design.vercel.app",
    },
    {
      id: 3,
      title: "Spoty",
      description: "App de playlisting masivo con IA para sellos discográficos",
      img: spoty,
      achievements: ["Playlisting Masivo", "Análisis con IA", "Gestión de Sellos", "Automatización"],
      link: "#",
    },
  ];

  const features = [
    {
      id: "feature-speed",
      title: "Generación de Sistemas Ultra-Rápida",
      description: "Escribe lo que imaginas y observa cómo la IA lo hace realidad en segundos."
    },
    {
      id: "feature-custom",
      title: "Múltiples Estilos y Personalización",
      description: "Elige un estilo y ajusta detalles como color e iluminación a medida."
    },
    {
      id: "feature-results",
      title: "Resultados de Alta Calidad",
      description: "Sistemas optimizados y listos para producción con un diseño impecable."
    }
  ];

  return (
    <section className="projects-section" id="projects" style={{ scrollMarginTop: '80px' }}>
      <div className="projects-container">
        <div className="projects-header">
          <motion.span
            className="projects-badge"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            NUESTROS SISTEMAS
          </motion.span>

          <motion.h1
            className="projects-main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Sistemas que impulsan tu rentabilidad
          </motion.h1>

          <motion.p
            className="projects-main-description"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Implementaciones diseñadas para maximizar ganancias, optimizar operaciones y escalar tu negocio sin complicaciones.
          </motion.p>
        </div>

        <div className="systems-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`system-item ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="system-text-content">
                <h2 className="system-title">{project.title}</h2>
                <p className="system-description">{project.description}</p>
                <ul className="system-achievements">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="achievement-item">
                      <div className="achievement-dot"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="system-view-more"
                  whileHover={{ x: 5 }}
                >
                  Ver más <ArrowRight size={18} />
                </motion.a>
              </div>

              <div className="system-image-container">
                <div className="system-image-glow"></div>
                <img src={project.img} alt={project.title} className="system-image" />
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  );
};
