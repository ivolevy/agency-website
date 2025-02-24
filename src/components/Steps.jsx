import "../assets/styles/steps.css";

export const Steps = () => {
  const steps = [
    { id: 1, title: "Llamada de Auditoría Gratuita", description: "Analizamos tu caso sin costo." },
    { id: 2, title: "Evaluación del Caso", description: "Identificamos problemas y soluciones." },
    { id: 3, title: "Discusión del Trabajo", description: "Definimos los detalles y objetivos." },
    { id: 4, title: "Trabajo y Feedback", description: "Ejecutamos y refinamos con tu feedback." },
    { id: 5, title: "Entrega", description: "Recibes el resultado final." },
    { id: 6, title: "Mantenimiento", description: "Seguimiento y soporte post-entrega." },
  ];

  return (
    <div className="flex flex-col items-center pt-20 setp">
      <h2 className="text-3xl font-bold">Cómo trabajaremos?</h2>
      <p className="mb-5">Nos manejaremos con estos simples pasos</p>
      <div className="relative flex flex-col items-center w-full max-w-3xl">
        <div className="absolute w-1 bg-pink-300 rounded-full h-full left-1/2 transform -translate-x-1/2"></div>
        {steps.map((step, index) => (
          <div key={step.id} className={`flex w-full mb-1 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className="w-1/2 flex flex-col items-center bg-white p-4 steps">
              <h3 className="text-lg font-semibold mt-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
