import "../assets/styles/services.css";
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [contadores, setContadores] = useState({ proyectos: 0, experiencia: 0, soporte: 0, paises: 0 });
  const [contadoresIniciados, setContadoresIniciados] = useState(false);

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
          <span className="services-badge">SOBRE NOSOTROS</span>

          <h1 className="services-title">
            Software que te hace ganar dinero
          </h1>

          <p className="services-description">
            Creamos soluciones a medida que reducen costos operativos, automatizan el trabajo manual y aumentan tus ganancias netas.
            Cada proyecto entrega resultados financieros medibles.
          </p>

          <div className="services-features">
            <div className="feature-item">
              <h3 className="feature-title">Reducí costos operativos</h3>
              <p className="feature-text">
                Automatiza tareas repetitivas y elimina procesos manuales. Recortá gastos hasta un 60% mejorando precisión y velocidad.
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">Aumentá tus ingresos</h3>
              <p className="feature-text">
                Optimizá procesos de venta, mejorá la experiencia del cliente y desbloqueá nuevas fuentes de ingresos. Crecimiento real en tu bolsillo.
              </p>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">ROI Rápido</h3>
              <p className="feature-text">
                Nuestras soluciones se pagan solas rápidamente. La mayoría de clientes ven retorno de inversión positivo en el primer trimestre.
              </p>
            </div>
          </div>

          <div className="services-stats" id="stats-section">
            <div className="stat-item">
              <div className="stat-number">+{contadores.proyectos}</div>
              <div className="stat-label">Proyectos entregados</div>
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
    </section>
  );
}
