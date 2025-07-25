import "../assets/styles/services.css";

const services = [
  {
    title: "Sitios web personalizados",
    description: "Tu web lista para crecer: 100% a medida, SEO, hosting y autogestión fácil.",
    highlight: "Panel autogestión fácil"
  },
  {
    title: "Sistemas de gestión a medida (ERP)",
    description: "Digitaliza y automatiza tu negocio, ERP 100% adaptado a tu rubro, automatización y reportes.",
    highlight: "Automatización total"
  },
  {
    title: "Soluciones para tu rubro",
    description: "Abogados, restaurantes, comercios y más. Creamos sistemas únicos para cada negocio.",
    highlight: "Integración total"
  },
  {
    title: "Consultoría ágil",
    description: "Mejora tus procesos y acelera tu transformación digital con expertos.",
    highlight: "Estrategia y resultados"
  }
];

export default function Services() {
  return (
    <section className="w-full py-10" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
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
            <div className="flex justify-center md:justify-start mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-black text-white borderRadius font-medium hover:bg-pink-600 transition-colors no-underline"
              >
                ¿Listo para tu proyecto?
              </a>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`borderRadius px-8 py-8 flex flex-col items-start text-left transition-all shadow-md ${idx === 0 ? 'bg-gris-claro' : 'bg-white'} ${idx === 0 ? 'ring-2 ring-rosa' : ''}`}
              >
                <h3 className="text-2xl font-bold text-negro-mate mb-2">{service.title}</h3>
                <p className="text-gris-oscuro text-base mb-2">{service.description}</p>
                <div className="text-base font-semibold text-rosa mt-1">{service.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}