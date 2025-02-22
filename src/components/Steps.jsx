import { FaPhoneAlt, FaSearch, FaComments, FaTasks, FaCheckCircle, FaTools } from "react-icons/fa";

const steps = [
  { icon: FaPhoneAlt, title: "Llamada de Auditoría Gratuita", description: "Analizamos tu caso sin costo." },
  { icon: FaSearch, title: "Evaluación del Caso", description: "Identificamos problemas y soluciones." },
  { icon: FaComments, title: "Discusión del Trabajo", description: "Definimos los detalles y objetivos." },
  { icon: FaTasks, title: "Trabajo y Feedback", description: "Ejecutamos y refinamos con tu feedback." },
  { icon: FaCheckCircle, title: "Entrega", description: "Recibes el resultado final." },
  { icon: FaTools, title: "Mantenimiento", description: "Seguimiento y soporte post-entrega." },
];

export default function Steps() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">How We Work</h2>
        <p className="text-lg text-gray-400 mb-12">Descubre nuestro proceso de trabajo en seis pasos claros y efectivos.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <step.icon className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}