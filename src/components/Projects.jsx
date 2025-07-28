import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import "../assets/styles/projects.css";
import photoEditor from "../assets/images/projects/photoEditor.webp";
import restaurant from "../assets/images/projects/restaurant.webp";
import lawyer from "../assets/images/projects/lawyer.webp";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "editor de imágenes centralizado",
      description: "Sistema de gestión integral para estudios de arquitectura y diseño",
      img: photoEditor,
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Imagen del proyecto estudio versus.",
      achievements: ["Background remover con IA", "Cropping", "Resizing", "Extension change"],
      link: "https://v0-centralized-image-editor.vercel.app",
    },
    {
      id: 2,
      title: "Mediterra Restaurant",
      description: "Sitio web para restaurante mediterráneo de alta cocina",
      img: restaurant,
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Imagen del proyecto Mediterra Restaurant",
      achievements: ["Form de reservas", "Menú", "Pedidos online", "Información"],
      link: "https://v0-luxury-restaurant-design.vercel.app",
    },
    {
      id: 3,
      title: "Gestión abogado laboral",
      description: "Sistema ERP integral para estudios jurídicos laborales con gestión de clientes, finanzas, escritos y agenda",
      img: lawyer,
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Dashboard del sistema de gestión para abogados laborales",
      achievements: ["Gestión de clientes", "Finanzas", "Escritos", "Agenda"],
      link: "https://v0-laboral-erp-interface.vercel.app",
    },
  ];

  return (
    <section className="w-full py-16" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 borderRadius text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            ÚLTIMOS PROYECTOS
          </motion.span>
          <motion.h1 
            className="servicesTitle text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline">Proyectos</span> que transforman
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Descubre cómo ayudamos a clientes como vos a alcanzar sus objetivos (templates demostrativos)
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="relative bg-white borderRadius p-4 md:p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.03 }}
          >
            <div className="relative aspect-video borderRadius overflow-hidden mb-4 md:mb-6">
              <img
                src={project.img}
                alt={`${project.title} - ${project.description}`}
                className="project-image"
                loading="lazy"
                width="400"
                height="225"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">{project.title}</h2>

            <div className="space-y-3 mb-6">
              {project.achievements.map(achievement => (
                <div key={achievement} className="flex items-center text-gray-600">
                  <ArrowRight size={16} className="text-pink-500 mr-2" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-400 hover:text-pink-500 font-medium"
              >
                Ver proyecto
                <ArrowUpRight size={16} className="ml-2" />
              </motion.a>
            </div>
          </motion.article>
        ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-black text-white borderRadius font-medium hover:bg-pink-600 transition-colors no-underline"
          >
            ¿Listo para tu proyecto?
            <ArrowDown size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
