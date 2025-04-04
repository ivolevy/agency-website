import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar sistemas y sitios personalizados?",
    answer: "Desarrollamos sitios web completos en menos de dos semanas, gracias a nuestra metodología ágil y equipo altamente capacitado. Para sistemas más complejos, el tiempo puede variar según la funcionalidad requerida, pero siempre trabajamos con entregas incrementales para que puedas comenzar a usar las funcionalidades principales rápidamente mientras se desarrollan las demás."
  },
  {
    question: "¿Por qué es mejor una aplicación web que una de escritorio?",
    answer: "Las aplicaciones web ofrecen múltiples ventajas: acceso desde cualquier dispositivo con internet, actualizaciones automáticas sin necesidad de instalación, menor costo de mantenimiento, mejor seguridad y escalabilidad. Además, permiten trabajo remoto y colaboración en tiempo real entre equipos."
  },
  {
    question: "¿Qué ventajas tiene un sistema personalizado sobre uno genérico?",
    answer: "Un sistema personalizado se adapta exactamente a tus procesos y necesidades específicas. Esto significa mayor eficiencia, menos tiempo perdido en tareas manuales, mejor integración con tus sistemas existentes y una experiencia de usuario optimizada para tu equipo. Además, puedes agregar funcionalidades únicas que te den ventaja competitiva."
  },
  {
    question: "¿Cómo garantizan la seguridad de los datos en los sistemas?",
    answer: "Implementamos múltiples capas de seguridad: encriptación de datos, autenticación de dos factores, backups automáticos, y cumplimiento con estándares de seguridad internacionales. Además, realizamos auditorías regulares y actualizaciones de seguridad para mantener tu sistema protegido."
  },
  {
    question: "¿Qué beneficios obtengo al automatizar mis procesos?",
    answer: "La automatización reduce errores humanos, ahorra tiempo en tareas repetitivas, mejora la precisión en los datos, permite tomar decisiones basadas en información en tiempo real y aumenta la productividad general. Nuestros clientes reportan un aumento promedio del 40% en eficiencia operativa después de implementar nuestros sistemas."
  },
  {
    question: "¿Qué alcance tienen nuestros sistemas?",
    answer: "Nuestros sistemas se adaptan a cualquier tipo de negocio, desde pequeños emprendimientos hasta grandes empresas. Ofrecemos desde funcionalidades básicas hasta las más avanzadas, incluyendo gestión completa de inventario, ventas, facturación, recursos humanos, y análisis detallado con gráficos y métricas de rendimiento en tiempo real. Además, integramos inteligencia artificial para predicciones y automatización avanzada, asegurando que tu sistema crezca junto con tu negocio."
  }
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto p-4 faqsSection">
      <h2 className="text-2xl font-bold text-center mb-4">Preguntas frecuentes</h2>
      <div className="w-full max-w-2xl shadow-lg p-6 faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-gray-900 font-medium hover:bg-gray-100 transition-all faqCard"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === index && (
                <div className="p-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
