import "../assets/styles/services.css";
import { useState, useEffect } from 'react';
import { TrendingUp, Zap, DollarSign, BarChart3, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const [contadores, setContadores] = useState({ proyectos: 0, experiencia: 0, soporte: 0, paises: 0 });
  const [contadoresIniciados, setContadoresIniciados] = useState(false);

  const features = [
    {
      title: "Reducí costos operativos",
      text: "Automatiza tareas repetitivas y elimina procesos manuales. Recortá gastos hasta un 60% mejorando la precisión y velocidad de tu operación.",
      color: "#ff80bf",
      icon: <Zap size={24} />
    },
    {
      title: "Aumentá tus ingresos",
      text: "Optimizá tus procesos de venta y mejorá la conversión de clientes. Crecimiento real en tu bolsillo mediante tecnología inteligente.",
      color: "#60a5fa",
      icon: <TrendingUp size={24} />
    },
    {
      title: "ROI Inmediato",
      text: "Nuestras aplicaciones se pagan solas rápidamente. La mayoría de nuestros clientes ven resultados positivos en el primer mes de uso.",
      color: "#34d399",
      icon: <DollarSign size={24} />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !contadoresIniciados) {
            setContadoresIniciados(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [contadoresIniciados]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setContadores({
        proyectos: Math.floor(19 * progress),
        experiencia: Math.floor(2 * progress),
        soporte: 24,
        paises: Math.floor(3 * progress)
      });

      if (step >= steps) {
        clearInterval(interval);
        setContadores({
          proyectos: 19,
          experiencia: 2,
          soporte: 24,
          paises: 3
        });
      }
    }, stepDuration);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header-v2">
          <motion.span
            className="s-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            SOBRE NOSOTROS
          </motion.span>

          <motion.h2
            className="s-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Software que escala tu rentabilidad
          </motion.h2>

          <motion.p
            className="s-section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            No creamos solo código, diseñamos activos digitales para optimizar el flujo de caja y eliminar ineficiencias en tu negocio.
          </motion.p>
        </div>

        <div className="s-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="s-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="sf-header">
                <div className="sf-icon-wrapper" style={{ color: feature.color, backgroundColor: `${feature.color}15` }}>
                  {feature.icon}
                </div>
                <h3 className="sf-title">{feature.title}</h3>
              </div>
              <p className="sf-text">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="s-stats-divider"></div>

        <motion.div
          className="s-stats-clean"
          id="stats-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="ss-item">
            <span className="ss-number">+{contadores.proyectos}</span>
            <span className="ss-label">Sistemas Activos</span>
          </div>
          <div className="ss-item">
            <span className="ss-number">+{contadores.experiencia}</span>
            <span className="ss-label">Años de Expertise</span>
          </div>
          <div className="ss-item">
            <span className="ss-number">{contadores.soporte}/7</span>
            <span className="ss-label">Soporte Técnico</span>
          </div>
          <div className="ss-item">
            <span className="ss-number">+{contadores.paises}</span>
            <span className="ss-label">Países Alcanzados</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
