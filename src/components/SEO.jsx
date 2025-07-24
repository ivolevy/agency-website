import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions | Desarrollo Web y Sistemas ERP a Medida",
  description = "Desarrollo de sitios web personalizados, sistemas de gestión (ERP) y soluciones digitales para empresas y profesionales. SEO, hosting, automatización y soporte total. Revoluciona tu negocio hoy.",
  keywords = "desarrollo web, sistemas ERP, software a medida, sitios web personalizados, automatización, soluciones digitales, SEO, hosting, gestión empresarial, panel autogestión, integración sistemas, consultoría tecnológica, Argentina, Buenos Aires",
  image = "/logo.webp",
  url = "https://dotasolutions.vercel.app"
}) => {
  return (
    <Helmet>
      {/* Título y Meta Tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dota Solutions" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@dotasolutions" />

      {/* Otros metadatos importantes */}
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Buenos Aires" />
      <meta name="theme-color" content="#EC4899" />
      <link rel="me" href="https://www.instagram.com/dotasolutions" />
      <link rel="me" href="https://www.linkedin.com/company/dota-solutions/" />
      <link rel="me" href="https://www.tiktok.com/@dotasolutions" />
    </Helmet>
  );
}; 