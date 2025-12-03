import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions | Custom Software Solutions | Save Costs & Boost Revenue",
  description = "Custom software that saves money and drives revenue. We build solutions that reduce operational costs by up to 60%, automate workflows, and deliver measurable ROI within the first quarter. Fast delivery, 24/7 support, and proven results.",
  keywords = "desarrollo web personalizado, sistemas ERP a medida, panel de administración, gestión de clientes, gestión de productos, automatización empresarial, panel autogestión, soporte técnico 24/7, entregas rápidas, sin costos ocultos, soluciones digitales, software a medida, gestión empresarial, digitalización, consultoría tecnológica, desarrollo de software, hosting, SEO, desarrollo de aplicaciones web, sistemas de gestión, panel de control, backoffice, gestión de inventario, facturación electrónica, CRM personalizado, automatización de procesos, integración de sistemas, desarrollo full stack, React, Node.js, bases de datos, APIs, microservicios, cloud computing, AWS, Vercel, optimización web, responsive design, UX/UI, accesibilidad web, PWA, progressive web app",
  image = "https://dotasolutions.agency/dota.webp",
  url = "https://dotasolutions.agency",
  type = "website",
  noindex = false
}) => {
  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dota Solutions" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Meta Tags Adicionales para SEO */}
      <meta name="application-name" content="Dota Solutions" />
      <meta name="apple-mobile-web-app-title" content="Dota Solutions" />
      <meta name="msapplication-TileColor" content="#FFA7C4" />
      <meta name="theme-color" content="#FFA7C4" />
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
      
      {/* Meta Tags para Redes Sociales */}
      <meta name="twitter:site" content="@dotasolutions" />
      <meta name="twitter:creator" content="@dotasolutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Dota Solutions - Custom Software Solutions" />
      
      {/* Meta Tags para Facebook/Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dota Solutions - Custom Software Solutions" />
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_AR" />
      
      {/* Idioma y Región */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Argentina, Buenos Aires" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />

      {/* Otros Meta Tags Importantes */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Enlaces de Redes Sociales */}
      <link rel="me" href="https://www.instagram.com/dotasolutions" />
      <link rel="me" href="https://www.linkedin.com/company/dota-solutions/" />
      <link rel="me" href="https://www.tiktok.com/@dotasolutions" />
      <link rel="me" href="https://wa.me/1138240929" />

      {/* Preconnect para Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://vercel.live" />
      <link rel="dns-prefetch" href="https://unpkg.com" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Dota Solutions",
          "alternateName": "Dota",
          "description": "Soluciones digitales personalizadas. Desarrollamos sistemas ERP y sitios web personalizados para tu negocio. Ayudamos a empresas a crecer con herramientas digitales que se adaptan a sus necesidades.",
                  "url": "https://dotasolutions.agency",
        "logo": "https://dotasolutions.agency/dota.webp",
        "image": "https://dotasolutions.agency/dota.webp",
          "email": "solutionsdota@gmail.com",
          "telephone": "+54-9-11-1234-5678",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AR"
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
            "areaServed": ["AR"],
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
                  "description": "Sitios web personalizados con panel de autogestión, SEO y hosting incluido"
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
          "vatID": "AR-12345678901",
          "taxID": "30-12345678-9",
          "knowsAbout": [
            "Desarrollo Web",
            "Sistemas ERP",
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
          "description": "Desarrollamos sistemas ERP y sitios web personalizados para tu negocio. Ayudamos a empresas a crecer con herramientas digitales que se adaptan a sus necesidades.",
          "provider": {
            "@type": "Organization",
            "name": "Dota Solutions"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Argentina"
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

      {/* Schema.org para Site Name (WebSite) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dota Solutions",
          "alternateName": ["Dota"],
          "url": "https://dotasolutions.agency",
          "description": "Desarrollamos sistemas ERP y sitios web personalizados para tu negocio. Ayudamos a empresas a crecer con herramientas digitales que se adaptan a sus necesidades.",
          "publisher": {
            "@type": "Organization",
            "name": "Dota Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dotasolutions.agency/dota.webp"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://dotasolutions.agency/#contact"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
}; 