import { motion } from "framer-motion";
import "../styles/header.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center text-center bg-[#FAFAFA]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="relative">
        {/* Título principal */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-black leading-tight"
          variants={containerVariants}
          transition={{ delay: 0.2 }}
        >
          Impulsamos tu Negocio con <br /> Soluciones <span className="text-black">Digitales</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          variants={containerVariants}
          transition={{ delay: 0.4 }}
        >
          Desde tu sitio web hasta campañas avanzadas, diseñamos servicios que potencian tu marca y multiplican resultados
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-6 flex gap-4 justify-center"
          variants={containerVariants}
          transition={{ delay: 0.6 }}
        >
          <button
            className="border border-transparent text-black font-light py-3 px-6 rounded-full hover:bg-gray-100 transition-all navButton"
            aria-label="Contactarnos"
          >
            Contactános
          </button>
          <a
            href="https://calendly.com/solutionsdota/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black font-light py-3 px-6 rounded-full hover:bg-gray-100 transition-all navButton2"
            aria-label="Agendar una llamada"
          >
            Agendá una llamada
          </a>
        </motion.div>
      </motion.div>

      {/* Texto adicional */}
      <motion.p
        className="mt-12 text-gray-500 text-sm"
        variants={containerVariants}
        transition={{ delay: 0.8 }}
      >
        Algunos de los sitios que monitoreamos:
      </motion.p>
    </motion.div>
  );
};
