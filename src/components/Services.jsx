import "../assets/styles/services.css";
import { useState, useEffect } from 'react';

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
          <span className="services-badge">ACERCA DE NOSOTROS</span>
          
          <h1 className="services-title">
            Transformamos ideas en realidad digital
          </h1>
          
          <p className="services-description">
            Creemos en el poder de la tecnología para impulsar el crecimiento empresarial. 
            Cada proyecto es una oportunidad de crear algo único que marque la diferencia.
          </p>

          <div className="services-features">
            <div className="feature-item">
              <h3 className="feature-title">Innovación constante</h3>
              <p className="feature-text">
                Nos mantenemos al día con las últimas tendencias y tecnologías para ofrecerte soluciones de vanguardia.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Enfoque personalizado</h3>
              <p className="feature-text">
                Cada negocio es único. Trabajamos contigo para entender tus necesidades específicas y crear soluciones a medida.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Compromiso con resultados</h3>
              <p className="feature-text">
                No solo entregamos proyectos, garantizamos que funcionen y generen valor real para tu empresa.
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

          <div className="services-cta">
            <a href="#contact" className="cta-button">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
