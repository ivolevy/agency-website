import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../assets/styles/faq.css";

const faqs = [
  "¿Es posible personalizar el servicio a medida?",
  "¿Qué tipos de datos monitorean?",
  "¿Con qué frecuencia se actualizan los datos?",
  "¿Cómo comienzo usar TURBODATO?",
  "¿Ofrecen soporte técnico?",
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
        {faqs.map((question, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="flex justify-between items-center w-full p-4 text-left text-gray-900 font-medium hover:bg-gray-100 transition-all faqCard"
              onClick={() => toggleFAQ(index)}
            >
              {question}
              <span
                className={`transform transition-transform duration-500 ${
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
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === index && (
                <div className="p-4 text-gray-600">
                  Aquí va la respuesta correspondiente a la pregunta.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
