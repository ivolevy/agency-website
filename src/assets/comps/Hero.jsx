import { motion } from "framer-motion";
import "../styles/header.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Hero = () => {
  return (
    <motion.section
      className="hero w-full h-screen flex flex-col items-center justify-center text-center bg-[#FAFAFA]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
    >
      <motion.div className="relative">
        {/* Título principal */}
        <motion.h1
          id="hero-title"
          className="text-5xl md:text-6xl font-bold text-black leading-tight heroTitle"
          variants={itemVariants}
        >
          Soluciones Digitales <br /> 100% Personalizadas
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Digitaliza y centralizá tu negocio con soluciones web y de gestión 100% personalizadas.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          variants={itemVariants}
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
            href="https://calendly.com/solutionsdota/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black font-light py-3 px-6 hover:bg-gray-100 transition-all navButton2"
            aria-label="Agendar una llamada"
            title="Agendar una llamada de 30 minutos con nosotros"
          >
            Mirá más
          </a>
        </motion.div>
      </motion.div>

      {/* Texto adicional */}
      <motion.p
        className="mt-12 text-gray-500 text-sm"
        variants={itemVariants}
      >
        Algunos de los sitios que monitoreamos:
      </motion.p>
    </motion.section>
  );
};
