import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/services.css";

const services = [
  {
    title: 'Sitios web personalizados',
    subtitle: 'Tu web lista para crecer',
    slides: [
      {
        desc: 'Creamos tu web desde cero, adaptada a tu marca, objetivos y público. Nada de plantillas genéricas.\n\nIdentidad visual personalizada, arquitectura UX/UI profesional y escalabilidad asegurada.'
      },
      {
        desc: 'Nos encargamos de la optimización SEO, el hosting rápido y seguro, y la gestión de tu dominio.\n\nSEO técnico y de contenidos, dominio propio .com/.ar e infraestructura cloud escalable.'
      },
      {
        desc: 'Panel intuitivo para que puedas actualizar textos, imágenes y secciones en minutos.\n\nPanel visual drag & drop, soporte y tutoriales, actualizaciones sin código.'
      }
    ]
  },
  {
    title: 'Sistemas de gestión a medida (ERP)',
    subtitle: 'Digitaliza y automatiza tu negocio',
    slides: [
      {
        desc: 'Creamos sistemas que se adaptan a tus procesos, rubro y necesidades reales. Nada estándar.\n\nGestión de ventas y stock, reportes y analíticas, integración con otras herramientas.'
      },
      {
        desc: 'Automatiza tareas repetitivas y accede a reportes en tiempo real para tu negocio.\n\nAlertas automáticas, panel de control en tiempo real, exportación de datos fácil.'
      },
      {
        desc: 'Gestiona usuarios, roles y permisos para que cada área de tu empresa tenga acceso a lo que necesita.\n\nRoles personalizables, historial de acciones, acceso seguro desde cualquier dispositivo.'
      }
    ]
  }
];

function ServiceSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, slides.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full mt-6 relative flex justify-center">
      <div className="flex items-center justify-between mb-0 min-w-[480px] md:min-w-[700px] md:max-w-[900px] w-full mx-auto">
        <button onClick={prev} aria-label="Anterior" className="text-black hover:text-gray-700 transition px-3 py-2 rounded-full focus:outline-none text-2xl font-bold">
          &#8592;
        </button>
        <div className="flex-1 flex items-center min-h-[220px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full text-left"
            >
              <div className="text-gray-700 text-base md:text-lg font-normal max-w-2xl leading-snug whitespace-pre-line">{slides[current].desc}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button onClick={next} aria-label="Siguiente" className="text-black hover:text-gray-700 transition px-3 py-2 rounded-full focus:outline-none text-2xl font-bold">
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full py-10" id="services">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-lg text-xs font-medium mb-3 mx-auto">
            SERVICIOS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 mx-auto">
            Revoluciona tu negocio hoy
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Soluciones digitales para crecer, automatizar y destacar tu empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white borderRadius px-10 py-14 flex flex-col items-center text-center shadow-md transition-all border-0 w-full md:min-w-[420px] md:max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-1 w-full">{service.title}</h3>
              <p className="text-gray-600 text-base mb-4 w-full">{service.subtitle}</p>
              <ServiceSlider slides={service.slides} />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-base font-semibold rounded-full shadow-lg transition-all hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 no-underline"
            style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)' }}
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </section>
  );
}