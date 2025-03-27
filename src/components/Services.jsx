import { motion } from "framer-motion";
import "../assets/styles/services.css";

const ServiceCard = ({ title, description, link }) => (
  <motion.article
    className="relative bg-white borderRadius p-10 flex flex-col items-center text-center shadow-md min-h-[200px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    aria-labelledby={`service-${title}`}
    role="article"
  >
    <h3 id={`service-${title}`} className="font-semibold text-2xl">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-black text-black font-light py-2 px-6 hover:bg-gray-100 transition-all navButton2"
      aria-label={`Ver más sobre ${title}`}
      title={`Ver más detalles sobre ${title}`}
    >
      Ver más
    </a>
  </motion.article>
);

export default function Services() {
  return (
    <section className="p-8 rounded-lg servicesSection pt-0 pb-20" id="services">
      <h2 className="servicesTitle text-center mb-">
        Sistemas de <span className="underline">gestión personalizados</span>
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Centralizá cada actividad de tu negocio en un solo lugar. Desde la gestión de stock y proveedores hasta la facturación automatizada, métricas de ganancias y más. Diseñamos sistemas a medida para optimizar cada proceso.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <ServiceCard
          title="Gestión de Stock"
          description="Controlá el inventario en tiempo real, evitando pérdidas y optimizando la reposición de productos."
          link="https://tu-sitio.com/gestion-stock"
        />
        <ServiceCard
          title="Gestión de Proveedores"
          description="Centralizá toda la información de tus proveedores y automatizá pedidos y pagos."
          link="https://tu-sitio.com/gestion-proveedores"
        />
        <ServiceCard
          title="Facturación Automática"
          description="Generá facturas con un solo clic y mantené un registro ordenado de tus ingresos y egresos."
          link="https://tu-sitio.com/facturacion"
        />
        <ServiceCard
          title="Métricas y Reportes"
          description="Analizá tus ganancias mensuales, comparativas anuales y tomá decisiones basadas en datos."
          link="https://tu-sitio.com/metricas"
        />
      </div>
    </section>
  );
}
