import { motion } from "framer-motion";
import "../assets/styles/services.css";

const ServiceCard = ({ title, description, image, link, isPopular }) => (
  <motion.article
    className="relative bg-white borderRadius p-10 flex flex-col items-center text-center shadow-md min-h-[200px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    aria-labelledby={`service-${title}`}
    role="article"
  >
    <h3 id={`service-${title}`} className="font-semibold text-2xl">{title}</h3> {/* Cambié a h3 para evitar usar múltiples h2 */}
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
      <h2 className="servicesTitle text-center mb-5">
        Nos <span className="underline">especializamos</span> en ...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <ServiceCard
          title="Kit digital Web"
          description="Obtené tu sitio web rápido, económico y listo para generar leads desde 140USD."
          link="https://tu-sitio.com/kit-digital"
        />
        <ServiceCard
          title="Paid Media"
          description="Maximizá tu inversión publicitaria con campañas efectivas en Google & Meta"
          link="https://tu-sitio.com/meta-ads"
        />
        <ServiceCard
          title="Sitios Web"
          description="Crea una web a medida para destacar en el mercado."
          link="https://tu-sitio.com/sitios-custom"
        />
        <ServiceCard
          title="Branding"
          description="Dale identidad y personalidad a tu negocio con un diseño visual sólido."
          link="https://tu-sitio.com/branding"
        />
      </div>
    </section>
  );
}
