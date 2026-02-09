import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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

export const Hero = ({
  subtitle = "Sistemas automáticos listos para usar. Conseguí más clientes, ganá más plata y ahorrá tiempo hoy mismo."
}) => {
  return (
    <motion.section
      className="hero w-full h-screen flex flex-col items-center justify-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.1 }}
      aria-labelledby="hero-title"
    >
      <motion.div className="relative">
        {/* Título principal */}
        <motion.h1
          id="hero-title"
          className="text-5xl md:text-6xl text-white leading-tight heroTitle"
          variants={itemVariants}
        >
          Automatizá tu negocio<br />sin mover un dedo
        </motion.h1>
        {/* Subtítulo */}
        <motion.p
          className="heroText text-gray-300 mt-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
