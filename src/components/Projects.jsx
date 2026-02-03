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
      <div className="container mx-auto px-4 md:px-4 max-w-6xl">
        <div className="text-center mb-12">
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
            className="max-w-3xl mx-auto text-sm"
            style={{ color: '#d1d1d1', fontSize: '0.9rem' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Mira nuestras soluciones en acción. Implementaciones diseñadas para maximizar ganancias, optimizar operaciones y escalar tu negocio sin complicaciones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative borderRadius p-3 md:p-4 shadow-lg project-card block no-underline"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', cursor: 'pointer', textDecoration: 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.03 }}
            >
              <div className="relative aspect-video borderRadius overflow-hidden mb-3 md:mb-4">
                <img
                  src={project.img}
                  alt={`${project.title} - ${project.description}`}
                  className="project-image"
                  loading="lazy"
                  width="400"
                  height="200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <h2 className="text-sm md:text-base font-semibold mb-2 md:mb-3" style={{ color: '#fff', fontFamily: '"MuseoModerno", sans-serif', letterSpacing: '0.02em', fontSize: '1.1rem' }}>{project.title}</h2>

              <div className="space-y-2 mb-2">
                {project.achievements.map(achievement => (
                  <div key={achievement} className="flex items-center" style={{ color: '#d1d1d1' }}>
                    <ArrowRight size={14} className="text-pink-400 mr-2" />
                    <span className="text-xs md:text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl mx-auto py-6 px-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px' }}>
            <p className="text-base md:text-lg text-white font-light mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
              Tambien <span className="text-pink-400">Desarrollamos tu sistema a medida.</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-pink-400 transition-all duration-300 mt-1 uppercase tracking-wider group"
            >
              Consulta cotización
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
