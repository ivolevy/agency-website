import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock, PhoneOff, TrendingDown, CheckCircle2 } from "lucide-react";
import "../assets/styles/problem-solver.css";

const ProblemSolver = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const problems = [
        {
            icon: <Clock size={20} className="text-blue-400" />,
            title: "Horas desperdiciadas",
            description: "Búsqueda manual de leads sin estrategia, perdiendo tiempo clave para cerrar ventas."
        },
        {
            icon: <PhoneOff size={20} className="text-pink-400" />,
            title: "Llamadas absurdas",
            description: "Charlas con prospectos no calificados que no tienen interés real en tu servicio."
        },
        {
            icon: <TrendingDown size={20} className="text-orange-400" />,
            title: "Pérdida de dinero",
            description: "Procesos ineficientes que desangran la rentabilidad de tu equipo comercial."
        }
    ];

    const pills = [
        { text: "Ahorro de tiempo", color: "rgba(59, 130, 246, 0.5)", x: isMobile ? "2%" : "10%", y: isMobile ? "5%" : "20%" },
        { text: "+ ROI", color: "rgba(236, 72, 153, 0.5)", x: isMobile ? "60%" : "60%", y: isMobile ? "15%" : "15%" },
        { text: "Lead Calificado", color: "rgba(16, 185, 129, 0.5)", x: isMobile ? "5%" : "30%", y: isMobile ? "45%" : "50%" },
        { text: "Monitoreo 24/7", color: "rgba(139, 92, 246, 0.5)", x: isMobile ? "50%" : "70%", y: isMobile ? "65%" : "60%" },
        { text: "Control Total", color: "rgba(245, 158, 11, 0.5)", x: isMobile ? "15%" : "20%", y: isMobile ? "85%" : "80%" }
    ];

    return (
        <section className="problem-solver-section">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    className="solver-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Text Content */}
                        <div className="solver-left">
                            <span className="solver-badge">RESOLVEMOS</span>
                            <h2 className="solver-title">
                                Lo que resolvemos por vos
                            </h2>

                            <div className="problems-list">
                                {problems.map((problem, index) => (
                                    <motion.div
                                        key={index}
                                        className="problem-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="problem-icon-wrapper">
                                            {problem.icon}
                                        </div>
                                        <div className="problem-text">
                                            <h4>{problem.title}</h4>
                                            <p>{problem.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Visual Element (Floating Pills) */}
                        <div className="solver-right relative h-[400px]">
                            <div className="pills-container relative w-full h-full">
                                {pills.map((pill, index) => (
                                    <motion.div
                                        key={index}
                                        className="floating-pill"
                                        style={{
                                            backgroundColor: pill.color,
                                            left: pill.x,
                                            top: pill.y,
                                            boxShadow: `0 10px 30px ${pill.color.replace('0.5', '0.2')}`
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 4 + index,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <CheckCircle2 size={16} className="mr-2" />
                                        <span>{pill.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolver;
