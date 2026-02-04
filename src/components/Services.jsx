import "../assets/styles/services.css";
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const [contadores, setContadores] = useState({ proyectos: 0, experiencia: 0, soporte: 0, paises: 0 });
  const [contadoresIniciados, setContadoresIniciados] = useState(false);

  const features = [
    {
      title: "Reducí costos operativos",
      text: "Automatiza tareas repetitivas y elimina procesos manuales. Recortá gastos hasta un 60% mejorando precisión y velocidad.",
      icon: <Zap className="feature-icon" size={24} />
    },
    {
      title: "Aumentá tus ingresos",
      text: "Optimizá procesos de venta, mejorá la experiencia del cliente y desbloqueá nuevas fuentes de ingresos. Crecimiento real en tu bolsillo.",
      icon: <TrendingUp className="feature-icon" size={24} />
    },
    {
      title: "ROI Rápido",
      text: "Nuestras soluciones están listas para usar y se pagan solas rápidamente. La mayoría de clientes ven retorno de inversión positivo en el primer mes de uso.",
      icon: <DollarSign className="feature-icon" size={24} />
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
      { threshold: 0.5 }
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
    <section className="services-section" id="services" style={{ scrollMarginTop: '80px' }}>
      <div className="services-container">
        <div className="services-content">
          <motion.span
            className="services-badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SOBRE NOSOTROS
          </motion.span>

          <motion.h2
            className="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Software que te hace ganar dinero
          </motion.h2>

          <motion.p
            className="services-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ofrecemos soluciones listas para usar que reducen costos operativos, automatizan el trabajo manual y aumentan tus ganancias netas desde el primer día.
          </motion.p>

          <div className="services-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="services-stats-wrapper">
            <div className="services-stats" id="stats-section">
              <div className="stat-item">
                <div className="stat-number">+{contadores.proyectos}</div>
                <div className="stat-label">Sistemas activos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+{contadores.experiencia}</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{contadores.soporte}/7</div>
                <div className="stat-label">Soporte técnico</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+{contadores.paises}</div>
                <div className="stat-label">Países alcanzados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
