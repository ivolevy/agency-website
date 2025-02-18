import '../assets/styles/services.css';

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white borderRadius p-6 flex flex-col items-center text-center shadow-md min-h-[200px]">
    <img src={image} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div className="p-8 rounded-lg" id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <ServiceCard
          title="Kit digital"
          description="Obtené tu sitio web rápido, económico y listo para vender. Utilizamos templates prediseñados
          que adaptamos a tu marca, logrando una web moderna y funcional en poco tiempo."
          image="/branding-icon.png"
        />
        <ServiceCard
          title="Meta Ads"
          description="Atrae clientes con campañas publicitarias efectivas."
          image="/meta-ads-icon.png"
        />
        <ServiceCard
          title="Sitios Custom"
          description="Crea una web a medida para destacar en el mercado."
          image="/custom-sites-icon.png"
        />
        <ServiceCard
          title="Branding"
          description="Optimiza tu web y aumenta tu visibilidad en buscadores."
          image="/seo-icon.png"
        />
      </div>
    </div>
  );
}
