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
  subtitle = "Custom software that cuts costs, boosts revenue, and automates workflows. See measurable ROI in weeks, not years."
}) => {
  return (
    <motion.section
      className="hero w-full h-screen flex flex-col items-center justify-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="hero-title"
    >
      <motion.div className="relative">
        {/* Título principal */}
        <motion.h1
          id="hero-title"
          className="text-5xl md:text-6xl font-bold text-white leading-tight heroTitle"
          variants={itemVariants}
        >
          Building the future<br />with software
        </motion.h1>
        {/* Subtítulo */}
        <motion.p
          className="heroText text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        {/* Flecha con texto */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center cursor-pointer group"
          variants={itemVariants}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.p
            className="mb-2 text-sm"
            style={{ fontFamily: '"Inter", sans-serif', fontWeight: '300', color: '#ff80bf' }}
          >
            become a doter
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} className="text-pink-400" style={{ color: '#ff80bf' }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
