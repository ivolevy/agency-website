import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions - Desarrollo de Sistemas de Gestión & Sitios Web 100% Personalizados",
  description = "Agencia Experta en el Desarrollo de Sistemas Gestión & Sitios Web 100% Personalizados. Soluciones tecnológicas innovadoras para potenciar tu negocio.",
  keywords = "desarrollo web, ERP, CRM, sistemas de gestion, software empresarial, sitios web, desarrollo de software, soluciones digitales",
  image = "/logo.webp",
  url = "https://dotasolutions.vercel.app"
}) => {
  return (
    <Helmet>
      {/* Títulos y Meta Tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Meta tags para compartir en redes (Instagram, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="es_AR" />

      {/* Enlaces a redes sociales */}
      <link rel="me" href="https://www.instagram.com/dotasolutions" />
      <link rel="me" href="https://www.linkedin.com/company/dota-solutions/" />
      <link rel="me" href="https://www.tiktok.com/@dotasolutions" />

      {/* Otros meta tags importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Dota Solutions" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Argentina" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}; 