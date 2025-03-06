import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  {
    question: "¿Qué es el Kit Digital Web?",
    answer: "El Kit Digital Web es un sitio web que parte desde un template a elección y está hecho en WordPress. Es de entrega casi inmediata, ideal para una presencia digital básica e inicial, con un precio accesible y todas las funcionalidades esenciales para comenzar en el mundo digital."
  },
  {
    question: "¿Me conviene el Kit Digital o un sitio custom?",
    answer: "La mejor opción depende de tus necesidades y objetivos. Si buscás una solución rápida y accesible, el Kit Digital es ideal. Si necesitás un diseño a medida con funcionalidades específicas, un sitio custom puede ser la mejor alternativa. Hablemos y te ayudaremos a elegir la opción que mejor se adapte a tu negocio."
  },
  {
    question: "¿Con qué frecuencia se actualizan los datos?",
    answer: "Los datos se actualizan en tiempo real o cada 24 horas, dependiendo del servicio contratado.",
  },
  {
    question: "¿Cómo comienzo a usar TURBODATO?",
    answer: "Para comenzar, registrate en nuestra plataforma, configurá tu cuenta y empezá a analizar tus datos de inmediato.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer: "Sí, ofrecemos soporte técnico 24/7 a través de chat en vivo, correo electrónico y teléfono.",
  },
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
              aria-expanded={openIndex === index} // Atributo accesible
              aria-controls={`faq-answer-${index}`} // Relaciona el botón con el contenido de la respuesta
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
              id={`faq-answer-${index}`} // Identificador para el contenido
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
