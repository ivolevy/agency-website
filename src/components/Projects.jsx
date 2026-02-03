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
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Imagen del estudio versus proyecto.",
      achievements: ["Remover fondo con IA", "Recorte", "Redimensionado", "Cambio de extensión"],
      link: "https://v0-centralized-image-editor.vercel.app",
    },
    {
      id: 2,
      title: "Mediterra Restaurant",
      description: "Sitio web para restaurante mediterráneo de alta gama",
      img: restaurant,
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Imagen del proyecto Mediterra Restaurant",
      achievements: ["Formulario de reserva", "Menú", "Pedidos online", "Información"],
      link: "https://v0-luxury-restaurant-design.vercel.app",
    },
    {
      id: 3,
      title: "Spoty",
      description: "App de playlisting masivo con IA para sellos discográficos",
      img: spoty,
      textColor: "text-white", // Keeping text white as it likely contrasts well with dark bg
      bgColor: "bg-black", // Changed to black to fit 'Spotify' theme or just dark
      altText: "Interfaz de la app Spoty",
      achievements: ["Playlisting Masivo", "Análisis con IA", "Gestión de Sellos", "Automatización"],
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 projects-section" id="projects" style={{ scrollMarginTop: '80px', backgroundColor: '#000' }}>
      <div className="w-full">
        <div className="container mx-auto px-4 text-center mb-12">
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
            className="servicesTitle text-center mb-3"
            style={{ color: '#fff' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline">Sistemas</span> que impulsan tu rentabilidad
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', lineHeight: '1.6' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Mira nuestras soluciones en acción. Implementaciones diseñadas para maximizar ganancias, optimizar operaciones y escalar tu negocio sin complicaciones.
          </motion.p>
        </div>

        <div className="apple-showcase">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-item"
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="showcase-visual">
                <img
                  src={project.img}
                  alt={project.title}
                  className="showcase-image"
                  loading="lazy"
                />
                <div className="showcase-overlay" />
              </div>

              <div className="showcase-content">
                <h2 className="showcase-title">{project.title}</h2>
                <p className="showcase-desc">{project.description}</p>

                <div className="showcase-pills">
                  {project.achievements.map((achievement, idx) => (
                    <span key={idx} className="showcase-pill">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto py-8 px-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px' }}>
            <p className="text-lg text-white font-light mb-4" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              ¿Necesitás algo <span className="text-pink-400">a medida?</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest group"
            >
              Consulta cotización
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
