import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import "../assets/styles/projects.css";

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
      tags: ["Fintech", "Dashboard", "React", "Node.js"],
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
      tags: ["SaaS", "Arquitectura", "Vue.js", "AWS"],
      achievements: ["+ 200 estudios", "- 40% tiempo gestión", "+ 65% productividad"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Carlos Galán",
      description: "Plataforma e-learning para cursos de desarrollo profesional",
      img: "/images/proyecto3.jpg",
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Imagen del proyecto Carlos Galán",
      tags: ["E-learning", "Next.js", "MongoDB", "AWS"],
      achievements: ["+ 3,000 estudiantes", "95% completitud", "4.8/5 valoración"],
      link: "#",
      github: "#"
    },
  ];

  return (
    <section className="w-full py-16" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            NUESTROS PROYECTOS
          </motion.span>
          <motion.h2 
            className="servicesTitle text-center mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline">Proyectos</span> que transforman
          </motion.h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
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
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={project.img}
                  alt={project.altText}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-medium"
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
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.15 }}
                >
                  Ver proyecto
                  <ExternalLink size={16} className="ml-2" />
                </motion.a>
                
                <motion.a
                  href={project.github}
                  className="text-gray-600 hover:text-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                >
                  <Github size={20} />
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
