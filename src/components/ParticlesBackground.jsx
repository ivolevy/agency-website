import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const auroraColors = [
    "rgba(255, 80, 180, 0.25)",  // Rosa vibrante
    "rgba(140, 160, 255, 0.15)", // Azul/Violeta suave
    "rgba(140, 80, 255, 0.15)",  // Violeta profundo
    "rgba(255, 160, 200, 0.15)", // Rosa suave
  ];

  return (
    <div className="mesh-container">
      {/* 1. Aurora Blobs (Base) */}
      <motion.div
        className="aurora-blob"
        animate={{
          x: isMobile ? ["-10%", "10%", "-10%"] : ["-10%", "40%", "-10%"],
          y: isMobile ? ["0%", "10%", "0%"] : ["-10%", "20%", "10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: isMobile ? "90vw" : "70vw",
          height: isMobile ? "90vw" : "70vw",
          top: isMobile ? "10%" : "-20%",
          left: isMobile ? "-5%" : "-10%",
          background: `radial-gradient(circle, ${auroraColors[0]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: isMobile ? ["5%", "-5%", "5%"] : ["10%", "-30%", "10%"],
          y: isMobile ? ["10%", "20%", "10%"] : ["20%", "-10%", "30%"],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: isMobile ? "80vw" : "60vw",
          height: isMobile ? "80vw" : "60vw",
          top: isMobile ? "30%" : "10%",
          right: isMobile ? "-20%" : "-10%",
          background: `radial-gradient(circle, ${auroraColors[1]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: isMobile ? ["-5%", "5%", "-5%"] : ["-20%", "20%", "-20%"],
          y: isMobile ? ["40%", "30%", "40%"] : ["30%", "10%", "-10%"],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: isMobile ? "100vw" : "80vw",
          height: isMobile ? "100vw" : "80vw",
          bottom: isMobile ? "10%" : "-20%",
          left: isMobile ? "0%" : "10%",
          background: `radial-gradient(circle, ${auroraColors[2]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: isMobile ? ["10%", "-10%", "10%"] : ["20%", "-20%", "20%"],
          y: isMobile ? ["5%", "-5%", "5%"] : ["-5%", "15%", "-5%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: isMobile ? "70vw" : "50vw",
          height: isMobile ? "70vw" : "50vw",
          top: isMobile ? "50%" : "5%",
          left: isMobile ? "15%" : "30%",
          background: `radial-gradient(circle, ${auroraColors[3]} 0%, transparent 70%)`,
        }}
      />

      {/* 2. Glass Overlay (Frosted Effect + Highlights) */}
      <div className="glass-overlay" />
    </div>
  );
};


