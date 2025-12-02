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
            Software that saves money and drives revenue
          </h1>
          
          <p className="services-description">
            We build custom solutions that reduce operational costs, automate manual work, and increase your bottom line. 
            Every project delivers measurable financial impact.
          </p>

          <div className="services-features">
            <div className="feature-item">
              <h3 className="feature-title">Reduce operational costs</h3>
              <p className="feature-text">
                Automate repetitive tasks and eliminate manual processes. Cut overhead by up to 60% while improving accuracy and speed.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Increase revenue</h3>
              <p className="feature-text">
                Streamline sales processes, improve customer experience, and unlock new revenue streams. See measurable growth in your bottom line.
              </p>
            </div>
            
            <div className="feature-item">
              <h3 className="feature-title">Fast ROI</h3>
              <p className="feature-text">
                Our solutions pay for themselves quickly. Most clients see positive ROI within the first quarter, with ongoing savings year after year.
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
