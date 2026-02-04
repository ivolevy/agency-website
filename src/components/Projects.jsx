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
            viewport={{ once: true }}
          >
            NUESTROS SISTEMAS
          </motion.span>

          <motion.h1
            className="projects-main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Sistemas que impulsan <span className="italic-text">tu rentabilidad</span>
          </motion.h1>

          <motion.p
            className="projects-main-description"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Implementaciones diseñadas para maximizar ganancias, optimizar operaciones y escalar tu negocio sin complicaciones.
          </motion.p>

          <motion.div
            className="projects-cta-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#contact" className="projects-primary-btn" id="generate-system-btn">
              Generar sistema <ArrowRight className="btn-icon" />
            </a>
          </motion.div>
        </div>

        <div className="projects-carousel-wrapper">
          <div className="central-glow-effect"></div>

          <div className="perspective-carousel">
            {projects.map((project, index) => {
              // Calculate side for perspective (central item is 1 in this 3-item array)
              const position = index - 1; // -1 (left), 0 (center), 1 (right)

              return (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`carousel-card card-pos-${position}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-image-wrapper">
                    <img src={project.img} alt={project.title} className="card-image" />
                    {position === 0 && <div className="card-active-glow"></div>}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="projects-features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="bottom-feature-item" id={feature.id}>
              <h3 className="bottom-feature-title">{feature.title}</h3>
              <p className="bottom-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
