import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions | Sistemas B2B: Ganá más dinero trabajando menos",
  description = "Creamos sistemas a medida que trabajan por vos. Conseguí clientes de calidad más rápido, automatizá tu networking y ganá más dinero. Agencia en Argentina.",
  image = "https://dotasolutions.agency/dota.webp",
  url = "https://dotasolutions.agency",
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}) => {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dota Solutions",
    "alternateName": "Dota",
    "url": "https://dotasolutions.agency",
    "logo": "https://dotasolutions.agency/dota.webp",
    "image": "https://dotasolutions.agency/dota.webp",
    "description": "Agencia de software enfocada 100% en hacerte ganar dinero. Automatización B2B, sistemas a medida y networking automático.",
    "email": "solutionsdota@gmail.com",
    "sameAs": [
      "https://www.instagram.com/dotasolutions/",
      "https://www.linkedin.com/company/dota-solutions/",
      "https://www.tiktok.com/@dotasolutions"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressLocality": "Buenos Aires"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "solutionsdota@gmail.com",
      "areaServed": ["AR", "UY", "US", "ES", "MX", "CO", "CL"],
      "availableLanguage": ["Spanish", "English"]
    }
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo de Software B2B y Automatización",
    "provider": {
      "@type": "Organization",
      "name": "Dota Solutions"
    },
    "serviceType": "Business Automation & Custom Software",
    "areaServed": {
      "@type": "Continent",
      "name": "South America"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluciones de Crecimiento B2B",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistemas de Automatización de Negocios",
            "description": "Automatizamos tareas operativas para que ahorres tiempo y reduzcas costos hasta un 60%."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Networking Automatizado",
            "description": "Herramientas para conseguir clientes de calidad más rápido y en automático."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo de Software a Medida",
            "description": "Sistemas personalizados diseñados específicamente para aumentar tu facturación."
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ivan Levy @ Dota Solutions" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Geo-Targeting Tags (Argentina/Latam Focus) */}
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Buenos Aires, Argentina" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />

      {/* Modern & Social Meta Tags (Open Graph) */}
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:locale:alternate" content="es_419" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dotasolutions" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article Specific Meta Tags (If applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Application / PWA Tags */}
      <meta name="application-name" content="Dota Solutions" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dota Solutions" />
      <meta name="theme-color" content="#000000" />

      {/* Preconnects for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
      <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
    </Helmet>
  );
}; 