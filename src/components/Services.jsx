import "../assets/styles/services.css";
import photoEditor from "../assets/images/projects/photoEditor.webp";
import restaurant from "../assets/images/projects/restaurant.webp";
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "Sitios web personalizados",
    description: "Sitios web 100% personalizados con SEO optimizado que convierten leads.",
    highlight: "¡Listo en 1 semana!"
  },
  {
    title: "Sistemas de gestión a medida (ERP)",
    description: "ERP adaptado a tu rubro con automatización total y reportes en tiempo real.",
    highlight: "Ahorro del 70% en tiempo"
  },
  {
    title: "E-commerce 100% personalizado",
    description: "Tiendas online completas con panel de backoffice para gestionar clientes, productos, ventas y más.",
    highlight: "Panel de administración completo"
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
    const duration = 200; // 0.2 segundos para que sea más rápido
    const steps = 30;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setContadores({
        proyectos: Math.floor(12 * progress),
        experiencia: Math.floor(2 * progress), // Este subirá más rápido con la duración reducida
        soporte: 24 // Este no cambia, es fijo
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section className="w-full py-10" id="services">
      <div className="container mx-auto px-4 md:px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <span className="inline-block px-3 py-1 bg-pink-50 text-pink-400 borderRadius text-xs font-medium mb-3">
            SERVICIOS
          </span>
            <h1 className="servicesTitle text-4xl md:text-5xl mb-4 text-negro-mate mx-auto">
            Revoluciona tu negocio hoy
          </h1>
            <p className="text-gris-oscuro md:mx-0">
            Soluciones digitales para crecer, automatizar y destacar tu empresa.
          </p>
            <div className="hidden md:flex justify-start mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-black text-white borderRadius font-medium hover:bg-pink-600 transition-colors no-underline"
              >
                                       ¡Empecemos!
                <ArrowDown size={16} className="ml-2" />
              </a>
            </div>
    </div>
          <div className="md:w-2/3">
            {/* Primeros dos servicios en grid de 2 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {services.slice(0, 2).map((service, idx) => (
                <div
                  key={service.title}
                  className={`borderRadius px-8 py-8 flex flex-col items-start text-left transition-all shadow-md bg-white ${idx === 0 ? 'ring-2 ring-rosa' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-negro-mate mb-2">{service.title}</h3>
                  <p className="text-gris-oscuro text-base mb-2">{service.description}</p>
                  <div className="text-base font-semibold text-rosa mt-1">{service.highlight}</div>
                </div>
              ))}
            </div>
            
            {/* Tercer servicio ocupando todo el ancho */}
            {services.slice(2).map((service, idx) => (
              <div
                key={service.title}
                className="borderRadius px-8 py-8 flex flex-col items-start text-left transition-all shadow-md bg-white"
              >
                <h3 className="text-2xl font-bold text-negro-mate mb-2">{service.title}</h3>
                <p className="text-gris-oscuro text-base mb-2">{service.description}</p>
                <div className="text-base font-semibold text-rosa mt-1">{service.highlight}</div>
              </div>
            ))}
          </div>
          
          {/* Botón CTA para móvil - aparece después de los servicios */}
          <div className="flex md:hidden justify-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white borderRadius font-medium hover:bg-pink-600 transition-colors no-underline"
            >
              ¡Empecemos!
              <ArrowDown size={16} className="ml-2" />
            </a>
          </div>
      </div>
        
        {/* Nueva sección: Estadísticas */}
        <div className="space-y-8 mt-16" id="stats-section">
          {/* Testimonios y Estadísticas en grid de 2 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Slider de Testimonios */}
            <div className="bg-white borderRadius shadow-md p-8 relative overflow-hidden">
              <div className="text-center relative">
                <svg width="32" height="32" fill="currentColor" className="text-rosa mx-auto mb-4 transition-all duration-300 ease-in-out"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <div className={`transition-all duration-500 ease-in-out transform ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                  <p className="text-lg text-negro-mate italic mb-4 min-h-[4rem] transition-all duration-500 ease-in-out">"{testimonios[testimonioActual].texto}"</p>
                  <span className="text-gris-oscuro font-semibold transition-all duration-500 ease-in-out">{testimonios[testimonioActual].autor}</span><br/>
                  <span className="text-gris-oscuro text-sm transition-all duration-500 ease-in-out">{testimonios[testimonioActual].cargo}</span>
      </div>
    </div>
              
              {/* Botones de navegación */}
              <div className="flex justify-center mt-6 space-x-2">
                <button 
                  onClick={anteriorTestimonio} 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <ChevronLeft size={16} className="text-gray-600 transition-colors duration-300" />
                </button>
                <div className="flex space-x-1">
                  {testimonios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => cambiarTestimonio(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 ${
                        index === testimonioActual ? 'bg-rosa scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={siguienteTestimonio} 
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
                >
                  <ChevronRight size={16} className="text-gray-600 transition-colors duration-300" />
                </button>
        </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="borderRadius shadow-md p-6 flex flex-col items-center justify-center" style={{background: 'linear-gradient(to bottom, #ff80bf, #ea9c9c)'}}>
                <div className="text-3xl font-bold text-white mb-2">+{contadores.proyectos}</div>
                <div className="text-white font-semibold text-center">Proyectos entregados</div>
              </div>
              <div className="borderRadius shadow-md p-6 flex flex-col items-center justify-center" style={{background: 'linear-gradient(to bottom, #ff80bf, #ea9c9c)'}}>
                <div className="text-3xl font-bold text-white mb-2">+{contadores.experiencia}</div>
                <div className="text-white font-semibold text-center">Años de experiencia</div>
              </div>
              <div className="borderRadius shadow-md p-6 flex flex-col items-center justify-center" style={{background: 'linear-gradient(to bottom, #ff80bf, #ea9c9c)'}}>
                <div className="text-3xl font-bold text-white mb-2">{contadores.soporte}/7</div>
                <div className="text-white font-semibold text-center">Soporte técnico</div>
              </div>
              <div className="borderRadius shadow-md p-6 flex flex-col items-center justify-center" style={{background: 'linear-gradient(to bottom, #ff80bf, #ea9c9c)'}}>
                <div className="text-3xl font-bold text-white mb-2">+3</div>
                <div className="text-white font-semibold text-center">Países alcanzados</div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Sección gráfica: ¿Por qué elegir una aplicación web? */}
        <div className="bg-white borderRadius shadow-md p-8 mb-8 mt-12">
          <h3 className="text-xl font-bold text-negro-mate mb-6 text-center">¿Por qué elegir una aplicación web?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rosa mb-2"><circle cx="16" cy="16" r="14" /><path d="M8 16h8M16 8v8h8" /></svg>
              <span className="font-semibold text-negro-mate">Acceso universal</span>
              <span className="text-gris-oscuro text-sm mt-1">Funciona en cualquier dispositivo con navegador.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rosa mb-2"><rect x="6" y="6" width="20" height="20" rx="5" /><path d="M12 12h8v8h-8z" /></svg>
              <span className="font-semibold text-negro-mate">Sin instalaciones</span>
              <span className="text-gris-oscuro text-sm mt-1">No ocupa espacio ni requiere descargas.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rosa mb-2"><path d="M12 20h9" /><path d="M16.5 17.5 12 12.5V7.5h9v5z" /></svg>
              <span className="font-semibold text-negro-mate">Actualizaciones automáticas</span>
              <span className="text-gris-oscuro text-sm mt-1">Siempre tienes la última versión, sin esfuerzo.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rosa mb-2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><circle cx="12" cy="8" r="1" /></svg>
              <span className="font-semibold text-negro-mate">Seguridad</span>
              <span className="text-gris-oscuro text-sm mt-1">Tus datos protegidos y sin riesgos de virus.</span>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-lg text-negro-mate font-medium">
              Nuestro enfoque permite <span className="text-rosa font-bold">entregas en semanas</span> sin costos ocultos, 
              garantizando transparencia total en cada proyecto.
            </p>
              </div>
            </div>

      </div>
    </section>
  );
}