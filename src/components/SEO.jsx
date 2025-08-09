import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions | Soluciones Digitales 100% Personalizadas | Argentina, Uruguay, USA",
  description = "Desarrollamos sitios web personalizados, sistemas ERP a medida y e-commerce 100% personalizados. Panel de backoffice completo para gestionar clientes, productos y ventas. Entregas en semanas sin costos ocultos. Soporte 24/7. Alcance internacional: Argentina, Uruguay, USA.",
  keywords = "desarrollo web personalizado, sistemas ERP a medida, e-commerce personalizado, tiendas online, panel de administración, gestión de clientes, gestión de productos, sitios web Argentina, Uruguay, USA, automatización empresarial, panel autogestión, soporte técnico 24/7, entregas rápidas, sin costos ocultos, soluciones digitales, software a medida, gestión empresarial, digitalización, consultoría tecnológica, desarrollo de software, hosting, SEO, Buenos Aires, Montevideo, Miami",
  image = "https://www.dotasolutions.agency/dota.webp",
  url = "https://www.dotasolutions.agency",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dota Solutions" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Idioma y Región */}
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Argentina" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dota Solutions - Soluciones Digitales 100% Personalizadas" />
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dotasolutions" />
      <meta name="twitter:creator" content="@dotasolutions" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Dota Solutions - Soluciones Digitales 100% Personalizadas" />

      {/* Otros Meta Tags Importantes */}
      <meta name="theme-color" content="#FFA7C4" />
      <meta name="msapplication-TileColor" content="#FFA7C4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dota Solutions" />
      
      {/* Enlaces de Redes Sociales */}
      <link rel="me" href="https://www.instagram.com/dotasolutions" />
      <link rel="me" href="https://www.linkedin.com/company/dota-solutions/" />
      <link rel="me" href="https://www.tiktok.com/@dotasolutions" />

      {/* Preconnect para Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dota Solutions",
          "alternateName": "Dota",
          "description": "Soluciones digitales 100% personalizadas. Sitios web, sistemas ERP a medida y e-commerce personalizados con panel de backoffice completo. Entregas en semanas sin costos ocultos.",
          "url": "https://www.dotasolutions.agency",
          "logo": "https://www.dotasolutions.agency/dota.webp",
          "image": "https://www.dotasolutions.agency/dota.webp",
          "email": "solutionsdota@gmail.com",
          "telephone": "+54-9-11-1234-5678",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AR",
            "addressRegion": "Buenos Aires",
            "addressLocality": "Argentina"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.6037,
            "longitude": -58.3816
          },
          "sameAs": [
            "https://www.instagram.com/dotasolutions/",
            "https://www.tiktok.com/@dotasolutions",
            "https://www.linkedin.com/company/dota-solutions/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "solutionsdota@gmail.com",
            "availableLanguage": ["Spanish", "English"],
            "areaServed": ["AR", "UY", "US"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -34.6037,
              "longitude": -58.3816
            },
            "geoRadius": "10000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Desarrollo Digital",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sitios Web Personalizados",
                  "description": "Sitios web 100% personalizados con panel de autogestión, SEO y hosting incluido"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sistemas ERP a Medida",
                  "description": "Sistemas de gestión empresarial con automatización total y soporte 24/7"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-commerce 100% Personalizado",
                  "description": "Tiendas online completas con panel de backoffice para gestionar clientes, productos, ventas y más"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          },
          "foundingDate": "2023",
          "numberOfEmployees": "5-10",
          "knowsAbout": [
            "Desarrollo Web",
            "Sistemas ERP",
            "E-commerce",
            "Automatización Empresarial",
            "SEO",
            "Hosting",
            "Panel de Administración"
          ]
        })}
      </script>
      
      {/* Schema.org para Servicios */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Desarrollo de Soluciones Digitales",
          "description": "Sitios web personalizados, sistemas ERP a medida y e-commerce 100% personalizados con panel de backoffice completo",
          "provider": {
            "@type": "Organization",
            "name": "Dota Solutions"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Argentina"
            },
            {
              "@type": "Country", 
              "name": "Uruguay"
            },
            {
              "@type": "Country",
              "name": "United States"
            }
          ],
          "serviceType": "Desarrollo de Software",
          "category": "Tecnología",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Consultoría gratuita para evaluar tu proyecto"
          }
        })}
      </script>
    </Helmet>
  );
}; 