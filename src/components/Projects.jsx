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
      title: "Centralized image editor",
      description: "Comprehensive management system for architecture and design studios",
      img: photoEditor,
      textColor: "text-black",
      bgColor: "bg-[#F5F1E5]",
      altText: "Image of the studio versus project.",
      achievements: ["AI background remover", "Cropping", "Resizing", "Extension change"],
      link: "https://v0-centralized-image-editor.vercel.app",
    },
    {
      id: 2,
      title: "Mediterra Restaurant",
      description: "Website for a high-end Mediterranean restaurant",
      img: restaurant,
      textColor: "text-yellow-400",
      bgColor: "bg-black",
      altText: "Image of the Mediterra Restaurant project",
      achievements: ["Reservation form", "Menu", "Online orders", "Information"],
      link: "https://v0-luxury-restaurant-design.vercel.app",
    },
    {
      id: 3,
      title: "Labor law attorney management",
      description: "Comprehensive ERP system for labor law firms with client management, finances, documents, and scheduling",
      img: lawyer,
      textColor: "text-white",
      bgColor: "bg-gray-900",
      altText: "Dashboard of the management system for labor attorneys",
      achievements: ["Client management", "Finances", "Documents", "Schedule"],
      link: "https://v0-laboral-erp-interface.vercel.app",
    },
  ];

  return (
    <section className="w-full py-16 projects-section" id="projects" style={{ scrollMarginTop: '80px', backgroundColor: '#000' }}>
      <div className="container mx-auto px-4 md:px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-pink-400/20 text-pink-400 borderRadius text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            LATEST PROJECTS
          </motion.span>
          <motion.h1 
            className="servicesTitle text-center mb-3"
            style={{ color: '#fff' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="underline">Projects</span> that make a difference
          </motion.h1>
          <motion.p 
            className="max-w-3xl mx-auto"
            style={{ color: '#d1d1d1' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how we help businesses cut costs and increase revenue. Explore our demo templates below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="relative borderRadius p-3 md:p-4 shadow-lg project-card"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
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

            <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-3" style={{ color: '#fff' }}>{project.title}</h2>

            <div className="space-y-2 mb-4">
              {project.achievements.map(achievement => (
                <div key={achievement} className="flex items-center" style={{ color: '#d1d1d1' }}>
                  <ArrowRight size={14} className="text-pink-400 mr-2" />
                  <span className="text-xs md:text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium text-sm"
              >
                View project
                <ArrowUpRight size={14} className="ml-2" />
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
            className="inline-flex items-center px-6 py-3 transition-colors no-underline"
            style={{ 
              background: 'linear-gradient(to bottom, #ff80bf, #ea9c9c)', 
              color: '#000', 
              borderRadius: '35px', 
              fontWeight: '400',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000';
            }}
          >
            Ready to start your project?
            <ArrowDown size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
