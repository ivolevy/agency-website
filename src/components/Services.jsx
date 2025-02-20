import '../assets/styles/services.css';

const ServiceCard = ({ title, description, image, link, isPopular }) => (
  <div className="relative bg-white borderRadius p-10 flex flex-col items-center text-center shadow-md min-h-[200px]">
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
  </div>
);

export default function Services() {
  return (
    <div className="p-8 rounded-lg" id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <ServiceCard
          title="Kit digital Web"
          description="Obtené tu sitio web rápido, económico y listo para generar leads. Utilizamos templates prediseñados
          que adaptamos a tu marca, logrando una web moderna y funcional en muy poco tiempo. Además, cuenta con SEO y mas extras añadidos y opcionales."
          link="https://tu-sitio.com/kit-digital"
          isPopular={true} //Marcado como más popular
        />
        <ServiceCard
          title="Paid Media"
          description="Maximizá tu inversión publicitaria con campañas efectivas en Google, Facebook e Instagram. Segmentamos tu audiencia, optimizamos anuncios y analizamos resultados para aumentar conversiones y escalar tu negocio."
          link="https://tu-sitio.com/meta-ads"
        />
        <ServiceCard
          title="Sitios Web Custom"
          description="Crea una web a medida para destacar en el mercado."
          link="https://tu-sitio.com/sitios-custom"
        />
        <ServiceCard
          title="Branding"
          description="Dale identidad y personalidad a tu negocio con un diseño visual sólido. Creamos tu logo, paleta de colores y piezas gráficas clave para que tu marca se destaque y transmita confianza en cada punto de contacto."
          link="https://tu-sitio.com/branding"
        />
      </div>
    </div>
  );
}
