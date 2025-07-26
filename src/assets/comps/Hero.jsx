import { motion } from "framer-motion";
import "../styles/header.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4, // Reducido de 0.8 a 0.4
      ease: "easeOut",
      staggerChildren: 0.1 // Reducido de 0.2 a 0.1
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Agregado y: 10 para movimiento sutil
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Reducido de 0.6 a 0.3
      ease: "easeOut"
    }
  }
};

export const Hero = ({
  title = "Soluciones Digitales <br /> 100% Personalizadas",
  subtitle = "Digitaliza y centralizá tu negocio con soluciones web y de gestión 100% personalizadas.",
  showButtons = true,
  extraText = "Alcance internacional: Argentina, Uruguay, USA y más"
}) => {
  return (
    <motion.section
      className="hero w-full h-screen flex flex-col items-center justify-center text-center bg-[#FAFAFA]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
      style={{ willChange: 'opacity' }} // Optimización de rendimiento
    >
      <motion.div className="relative">
        {/* Título principal */}
        <motion.h1
          id="hero-title"
          className="text-5xl md:text-6xl font-bold text-black leading-tight heroTitle"
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: title }}
          style={{ willChange: 'opacity, transform' }}
        />
        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          variants={itemVariants}
          style={{ willChange: 'opacity, transform' }}
        >
          {subtitle}
        </motion.p>
        {/* Botones */}
        {showButtons && (
          <motion.div
            className="mt-6 flex gap-4 justify-center"
            variants={itemVariants}
            style={{ willChange: 'opacity, transform' }}
          >
            <a
              className="border border-transparent font-light transition-all headerButton"
              aria-label="Contactarnos"
              title="Haz clic para contactarnos y comenzar a mejorar tu presencia digital"
              href="#contact"
            >
              Contactános
            </a>
            <a
              href="#services"
              rel="noopener noreferrer"
              className="border border-black text-black font-light py-3 px-6 hover:bg-gray-100 transition-all navButton2"
              aria-label="Servicios"
              title="Lo que sabemos hacer - Servicios"
            >
              Servicios
            </a>
          </motion.div>
        )}
      </motion.div>
      {/* Texto adicional */}
      {extraText && (
        <motion.p
          className="mt-12 text-gray-500 text-sm"
          variants={itemVariants}
          style={{ willChange: 'opacity, transform' }}
        >
          {extraText}
        </motion.p>
      )}
    </motion.section>
  );
};
