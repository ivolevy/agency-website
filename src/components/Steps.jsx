import { motion } from "framer-motion";
import "../assets/styles/steps.css";

export const Steps = () => {
  const steps = [
    { id: 1, title: "Auditoría Gratuita", description: "Revisamos tu situación sin costo alguno.", link: "https://calendly.com/solutionsdota/30min" },
    { id: 2, title: "Evaluación del Caso", description: "Identificamos problemas y proponemos soluciones adecuadas." },
    { id: 3, title: "Discusión del Trabajo", description: "Definimos los detalles y objetivos del proyecto." },
    { id: 4, title: "Trabajo y Feedback", description: "Ejecutamos el proyecto y refinamos el trabajo según tus comentarios." },
    { id: 5, title: "Entrega", description: "Recibes el resultado final listo para usar." },
    { id: 6, title: "Mantenimiento", description: "Brindamos soporte y seguimiento post-entrega para garantizar la calidad." },
  ];

  return (
    <section className="flex flex-col items-center stepsSection py-20" aria-labelledby="steps-title">
      <h2 id="steps-title" className="text-lg mb-5 text-center">
        Querés saber cómo vamos a <span className="text-pink-400">trabajar?</span> Mirá los pasos.
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl">
        <div className="absolute w-1 bg-pink-300 rounded-full h-full left-1/2 transform -translate-x-1/2"></div>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex w-full mb-4 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-1/2 flex flex-col items-center bg-white p-4 steps">
              <h3 className="text-lg font-semibold mt-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-pink-400 hover:underline"
                  aria-label={`Agenda una auditoría gratuita para ${step.title}`}
                >
                  Analizamos tu caso sin costo.
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
