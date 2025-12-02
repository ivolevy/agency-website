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
          <span className="services-badge">ABOUT US</span>
          
          <h1 className="services-title">
            We turn ideas into digital solutions
          </h1>
          
          <p className="services-description">
            We believe technology has the power to transform businesses. 
            Every project is a chance to build something unique that truly matters.
          </p>

          <div className="services-features">
            <div className="feature-item">
              <h3 className="feature-title">Constant innovation</h3>
              <p className="feature-text">
                We stay up-to-date with the latest trends and technologies to offer you cutting-edge solutions.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Personalized approach</h3>
              <p className="feature-text">
                Every business is unique. We work with you to understand your specific needs and create tailored solutions.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Commitment to results</h3>
              <p className="feature-text">
                We don't just deliver projects—we make sure they work and add real value to your business.
              </p>
            </div>
          </div>

          <div className="services-stats" id="stats-section">
            <div className="stat-item">
              <div className="stat-number">+{contadores.proyectos}</div>
              <div className="stat-label">Projects delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+{contadores.experiencia}</div>
              <div className="stat-label">Years of experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{contadores.soporte}/7</div>
              <div className="stat-label">Technical support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+{contadores.paises}</div>
              <div className="stat-label">Countries reached</div>
            </div>
          </div>

          <div className="services-cta">
            <a href="#contact" className="cta-button">
              Let's talk about your project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
