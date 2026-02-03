import { motion } from "framer-motion";

export const ParticlesBackground = () => {
  const auroraColors = [
    "rgba(255, 80, 180, 0.25)",  // Rosa vibrante (de 0.45 a 0.25)
    "rgba(140, 160, 255, 0.15)", // Azul/Violeta suave (cambiado a mas sutil)
    "rgba(140, 80, 255, 0.15)",  // Violeta profundo (de 0.25 a 0.15)
    "rgba(255, 160, 200, 0.15)", // Rosa suave (de 0.3 a 0.15)
  ];

  return (
    <div className="mesh-container">
      {/* 1. Aurora Blobs (Base) */}
      <motion.div
        className="aurora-blob"
        animate={{
          x: ["-10%", "40%", "-10%"],
          y: ["-10%", "20%", "10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "70vw",
          height: "70vw",
          top: "-20%",
          left: "-10%",
          background: `radial-gradient(circle, ${auroraColors[0]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: ["10%", "-30%", "10%"],
          y: ["20%", "-10%", "30%"],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "60vw",
          height: "60vw",
          top: "10%",
          right: "-10%",
          background: `radial-gradient(circle, ${auroraColors[1]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["30%", "10%", "-10%"],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "80vw",
          height: "80vw",
          bottom: "-20%",
          left: "10%",
          background: `radial-gradient(circle, ${auroraColors[2]} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        className="aurora-blob"
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["-5%", "15%", "-5%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "50vw",
          height: "50vw",
          top: "5%",
          left: "30%",
          background: `radial-gradient(circle, ${auroraColors[3]} 0%, transparent 70%)`,
        }}
      />

      {/* 2. Glass Overlay (Frosted Effect + Highlights) */}
      <div className="glass-overlay" />
    </div>
  );
};


