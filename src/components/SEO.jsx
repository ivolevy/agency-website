import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "Dota Solutions | Custom Software & AI Development",
  description = "We build custom software and AI solutions that automate workflows, reduce costs by up to 60%, and drive measurable revenue growth. Premium digital transformation for modern businesses.",
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
    "description": "Premium software agency specializing in AI-driven development, custom ERPs, and high-performance web applications.",
    "email": "solutionsdota@gmail.com", // Consider using a professional domain email if available
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
      "contactType": "customer service",
      "email": "solutionsdota@gmail.com",
      "areaServed": ["AR", "US", "ES"],
      "availableLanguage": ["English", "Spanish"]
    }
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Dota Solutions"
    },
    "serviceType": "Software Engineering & AI Integration",
    "areaServed": {
      "@type": "World"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "End-to-End Digital Ecosystems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Process Automation",
            "description": "Bespoke algorithms designed to eliminate repetitive workflows, reducing operational friction and maximizing human capital efficiency."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next-Gen E-commerce Architectures",
            "description": "High-conversion digital storefronts with headless capabilities, designed for scalability and immersive user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise ERP & CRM Core",
            "description": "Custom-engineered business logic cores that unify data streams, sales pipelines, and resource planning into a single source of truth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven Application Suites",
            "description": "Integration of Large Language Models (LLMs) and predictive analytics to create software that adapts, learns, and generates value automonously."
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

      {/* Modern & Social Meta Tags (Open Graph) */}
      <meta property="og:site_name" content="Dota Solutions" />
      <meta property="og:locale" content="en_US" />
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