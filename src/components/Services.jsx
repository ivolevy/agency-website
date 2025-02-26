import { motion } from "framer-motion";
import "../assets/styles/services.css";

const ServiceCard = ({ title, description, image, link, isPopular }) => (
  <motion.div
    className="relative bg-white borderRadius p-10 flex flex-col items-center text-center shadow-md min-h-[200px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {isPopular && (
      <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
        MÁS POPULAR
      </span>
    )}
    <h3 className="font-semibold text-2xl">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 px-4 py-2 rounded-md shadow-md bg-black text-white hover:bg-gray-700 transition"
    >
      Ver más
    </a>
  </motion.div>
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
          description="Obtené tu sitio web rápido, económico y listo para generar leads..."
          link="https://tu-sitio.com/kit-digital"
          isPopular={true}
        />
        <ServiceCard
          title="Paid Media"
          description="Maximizá tu inversión publicitaria con campañas efectivas en Google..."
          link="https://tu-sitio.com/meta-ads"
        />
        <ServiceCard
          title="Sitios Web Custom"
          description="Crea una web a medida para destacar en el mercado."
          link="https://tu-sitio.com/sitios-custom"
        />
        <ServiceCard
          title="Branding"
          description="Dale identidad y personalidad a tu negocio con un diseño visual sólido..."
          link="https://tu-sitio.com/branding"
        />
      </div>
    </section>
  );
}
