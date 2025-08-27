import "../assets/styles/services.css";
import photoEditor from "../assets/images/projects/photoEditor.webp";
import restaurant from "../assets/images/projects/restaurant.webp";
import { ArrowDown, ChevronLeft, ChevronRight, Zap, Globe, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "Multiplica tus Ventas",
    subtitle: "Sitios web que convierten",
    description: "Sitios web personalizados con SEO optimizado que transforman visitantes en clientes.",
    highlight: "¡Listo en 1 semana!",
    icon: Globe,
    cta: "Ver Proyectos",
    ctaLink: "#projects"
  },
  {
    title: "Automatiza tu Empresa",
    subtitle: "Sistemas ERP a medida",
    description: "ERP adaptado a tu rubro que elimina tareas manuales y optimiza todos tus procesos.",
    highlight: "Ahorro del 70% en tiempo",
    icon: Zap,
    cta: "Solicitar Demo",
    ctaLink: "#contact"
  },
  {
    title: "Escala sin Límites",
    subtitle: "Sistemas de gestión integral",
    description: "Soluciones completas que crecen con tu negocio y centralizan toda la información.",
    highlight: "Panel de administración completo",
    icon: TrendingUp,
    cta: "Comenzar Ahora",
    ctaLink: "#contact"
  }
];

const testimonios = [
  {
    texto: "Dota transformó completamente nuestros procesos. Ahora somos 3 veces más eficientes.",
    autor: "Laura Fernández",
    cargo: "CEO, AgroTech Solutions"
  },
  {
    texto: "El sistema que desarrollaron nos permitió automatizar el 80% de nuestras tareas manuales.",
    autor: "Carlos Mendoza",
    cargo: "Director de Operaciones, Constructora Norte"
  },
  {
    texto: "Excelente soporte técnico y entregas siempre a tiempo. Altamente recomendados.",
    autor: "Ana Rodríguez",
    cargo: "Fundadora, Restaurante El Buen Sabor"
  },
  {
    texto: "Gracias a Dota, pudimos lanzar nuestra plataforma en tiempo récord y sin problemas.",
    autor: "Miguel Torres",
    cargo: "CTO, StartupTech"
  }
];

export default function Services() {
  const [testimonioActual, setTestimonioActual] = useState(0);
  const [contadores, setContadores] = useState({ proyectos: 0, experiencia: 0, soporte: 0 });
  const [contadoresIniciados, setContadoresIniciados] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const siguienteTestimonio = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setTestimonioActual((prev) => (prev + 1) % testimonios.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  const anteriorTestimonio = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setTestimonioActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  const cambiarTestimonio = (index) => {
    if (!isTransitioning && index !== testimonioActual) {
      setIsTransitioning(true);
      setTimeout(() => {
        setTestimonioActual(index);
        setIsTransitioning(false);
      }, 250);
    }
  };

  // Animación de contadores
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
    const duration = 200;
    const steps = 30;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setContadores({
        proyectos: Math.floor(19 * progress),
        experiencia: Math.floor(2 * progress),
        soporte: 24
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section className="w-full py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-semibold mb-6">
            NUESTROS SERVICIOS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revoluciona tu <span className="text-pink-600">negocio</span> hoy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones digitales que transforman empresas. Automatiza procesos, multiplica ventas y escala sin límites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  idx === 0 ? 'ring-2 ring-pink-500 ring-opacity-20' : ''
                }`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-pink-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Highlight */}
                <div className="bg-pink-50 text-pink-700 px-4 py-2 rounded-lg text-sm font-semibold mb-6 inline-block">
                  {service.highlight}
                </div>

                {/* CTA Button */}
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {service.cta}
                  <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="space-y-12" id="stats-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonios */}
            <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
              <div className="text-center relative">
                <svg width="40" height="40" fill="currentColor" className="text-pink-500 mx-auto mb-6">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div className={`transition-all duration-500 ease-in-out transform ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                  <p className="text-xl text-gray-800 italic mb-6 min-h-[5rem] leading-relaxed">
                    "{testimonios[testimonioActual].texto}"
                  </p>
                  <div className="space-y-1">
                    <span className="text-gray-900 font-bold text-lg">{testimonios[testimonioActual].autor}</span>
                    <br/>
                    <span className="text-gray-600">{testimonios[testimonioActual].cargo}</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center mt-8 space-x-3">
                <button 
                  onClick={anteriorTestimonio} 
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <div className="flex space-x-2">
                  {testimonios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => cambiarTestimonio(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        index === testimonioActual ? 'bg-pink-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={siguienteTestimonio} 
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-3">+{contadores.proyectos}</div>
                <div className="text-white font-semibold text-center text-lg">Proyectos entregados</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-3">+{contadores.experiencia}</div>
                <div className="text-white font-semibold text-center text-lg">Años de experiencia</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-3">{contadores.soporte}/7</div>
                <div className="text-white font-semibold text-center text-lg">Soporte técnico</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-3">+3</div>
                <div className="text-white font-semibold text-center text-lg">Países alcanzados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Web Apps Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Por qué elegir una aplicación web?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <circle cx="16" cy="16" r="14" />
                  <path d="M8 16h8M16 8v8h8" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-lg mb-2">Acceso universal</span>
              <span className="text-gray-600 leading-relaxed">Funciona en cualquier dispositivo con navegador.</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <rect x="6" y="6" width="20" height="20" rx="5" />
                  <path d="M12 12h8v8h-8z" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-lg mb-2">Sin instalaciones</span>
              <span className="text-gray-600 leading-relaxed">No ocupa espacio ni requiere descargas.</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="M12 20h9" />
                  <path d="M16.5 17.5 12 12.5V7.5h9v5z" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-lg mb-2">Actualizaciones automáticas</span>
              <span className="text-gray-600 leading-relaxed">Siempre tienes la última versión, sin esfuerzo.</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <circle cx="12" cy="8" r="1" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-lg mb-2">Seguridad</span>
              <span className="text-gray-600 leading-relaxed">Tus datos protegidos y sin riesgos de virus.</span>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-100">
            <p className="text-2xl text-gray-900 font-semibold leading-relaxed">
              Nuestro enfoque permite <span className="text-pink-600 font-bold">entregas en semanas</span> sin costos ocultos, 
              garantizando transparencia total en cada proyecto.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-pink-600 text-white rounded-xl font-bold text-lg mt-8 hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ¡Empezar mi proyecto!
              <ArrowDown size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}