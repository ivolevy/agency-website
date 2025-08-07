import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar sitios web y sistemas personalizados?",
    answer: "Nuestros sitios web personalizados están listos en 1 semana, mientras que los sistemas ERP a medida se entregan en 2-3 semanas. Para e-commerce personalizados, el tiempo es de 2-4 semanas dependiendo de la complejidad. Siempre trabajamos con entregas incrementales para que puedas comenzar a usar las funcionalidades principales rápidamente."
  },
  {
    question: "¿Qué incluye el panel de backoffice del e-commerce?",
    answer: "Nuestro panel de administración incluye gestión completa de productos (agregar, editar, eliminar), gestión de clientes y pedidos, control de inventario, reportes de ventas, gestión de pagos, configuración de envíos, y análisis de métricas. Todo está diseñado para ser intuitivo y fácil de usar, sin necesidad de conocimientos técnicos."
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
    question: "¿Ofrecen soporte técnico después de la entrega?",
    answer: "Sí, ofrecemos soporte técnico 24/7 para todos nuestros sistemas. Esto incluye mantenimiento, actualizaciones, resolución de problemas y asistencia para nuevas funcionalidades. Nuestro equipo está siempre disponible para asegurar que tu sistema funcione perfectamente."
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
