import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from 'lucide-react';
import "../assets/styles/projects.css";
import construction from "../assets/images/projects/constructionSystem.webp";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tengo un Plan",
      description: "Plataforma de gestión financiera para emprendedores y pequeñas empresas",
      img: "/images/proyecto1.jpg",
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Imagen del proyecto Tengo un Plan",
      tags: ["Dashboard", "Finanzas", "Reportes", "Análisis"],
      achievements: ["+ 5,000 usuarios activos", "98% satisfacción", "ROI 250%"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "estudio versus.",
      description: "Sistema de gestión integral para estudios de arquitectura y diseño",
      img: "/images/proyecto2.jpg",
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Imagen del proyecto estudio versus.",
      tags: ["Proyectos", "Clientes", "Recursos", "Facturación"],
      achievements: ["+ 200 estudios", "- 40% tiempo gestión", "+ 65% productividad"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Construction Management",
      description: "Sistema de gestión integral para empresas constructoras con control de stock, proveedores, proyectos y facturación",
      img: construction,
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Dashboard del sistema de gestión de construcción",
      tags: ["Inventario", "Proveedores", "Facturación", "Proyectos"],
      achievements: ["Control de inventario", "Gestión de proveedores", "Balance financiero", "Facturación"],
      link: "https://v0-construction-management-site.vercel.app",
      github: "#"
    },
  ];

  return (
    <section className="w-full py-16" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-lg text-xs font-medium mb-3"
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
            Descubre cómo ayudamos a empresas como la tuya a alcanzar sus objetivos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.01,
                transition: {
                  duration: 0.15,
                  ease: "easeOut"
                }
              }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 md:mb-6">
                <img
                  src={project.img}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="225"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">{project.title}</h2>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                {project.achievements.map(achievement => (
                  <div key={achievement} className="flex items-center text-gray-600">
                    <ArrowRight size={16} className="text-blue-600 mr-2" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ver proyecto
                  <ExternalLink size={16} className="ml-2" />
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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            ¿Listo para tu proyecto?
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
