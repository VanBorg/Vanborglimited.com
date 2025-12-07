import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import GoogleRankingHero from '../components/google-ranking/Hero';
import WhyLocalSEO from '../components/google-ranking/WhyLocalSEO';
import HowItWorks from '../components/google-ranking/HowItWorks';
import GoogleRankingPricing from '../components/google-ranking/Pricing';

const GoogleRanking = () => {
  // SEO: Set meta tags and structured data
  useEffect(() => {
    // Set page title
    document.title = 'Local SEO & Google Maps Ranking Services | Dominate Local Search';
    
    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    setMetaTag('description', 'Achieve consistent top-5 local Google rankings and Google Business Profile mastery. Expert local SEO services to improve Maps visibility, increase organic leads, and build authority in your area—without risky top-3 guarantees.');
    setMetaTag('keywords', 'local SEO, Google Maps ranking, Google Business Profile, GBP optimization, local search, map pack ranking, citation building, review management');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    // Open Graph
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vanborglimited.com/google-ranking', true);
    setMetaTag('og:title', 'Local SEO & Google Maps Ranking Services | Top-5 Local Visibility', true);
    setMetaTag('og:description', 'Achieve reliable top-5 local Google rankings and Google Business Profile mastery. Expert local SEO services to grow Maps visibility and organic leads—without promising top 5.', true);
    setMetaTag('og:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('og:site_name', 'Van Borg Limited', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://vanborglimited.com/google-ranking', true);
    setMetaTag('twitter:title', 'Local SEO & Google Maps Ranking Services (Top-5 Focus)', true);
    setMetaTag('twitter:description', 'Achieve strong top-5 local Google rankings and Google Business Profile mastery. Expert local SEO services with realistic promises.', true);
    setMetaTag('twitter:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('twitter:site', '@VanBorgLimited', true);
    setMetaTag('twitter:creator', '@VanBorgLimited', true);
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://vanborglimited.com/google-ranking';
    
    // Add structured data (Schema.org)
    const addStructuredData = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };
    
    // Professional Service Schema
    addStructuredData('schema-professional-service', {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Van Borg Limited - Local SEO Services",
      "image": "https://vanborglimited.com/favicon.svg",
      "description": "Expert local SEO and Google Maps ranking services to help businesses dominate local search results",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "71-75 Shelton Street",
        "addressLocality": "Covent Garden",
        "addressRegion": "London",
        "postalCode": "WC2H 9JQ",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.5145",
        "longitude": "-0.1231"
      },
      "url": "https://vanborglimited.com/google-ranking",
      "telephone": "+447846885154",
      "priceRange": "£1000-£1500",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "11:00",
          "closes": "15:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61580148003782",
        "https://www.linkedin.com/in/niclas-van-borg/",
        "https://x.com/VanBorgLimited",
        "https://share.google/zC3N9lSOaJGFbh9Xi"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      },
      "offers": {
        "@type": "Offer",
        "name": "Local SEO Services",
        "price": "1000",
        "priceCurrency": "GBP",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://vanborglimited.com/google-ranking"
      }
    });
    
    // Service Schema
    addStructuredData('schema-service', {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Local SEO & Google Maps Optimization",
      "provider": {
        "@type": "Organization",
        "name": "Van Borg Limited"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Local SEO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GBP Optimization & Audit"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local Keyword Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Citation & NAP Consistency"
            }
          }
        ]
      }
    });
    
    // Cleanup function
    return () => {
      document.title = 'Van Borg Limited';
    };
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleRankingHero />
        </div>
      </main>

      {/* Pricing full-width directly under hero */}
      <GoogleRankingPricing />

      {/* Remaining content inside constrained layout */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
          <WhyLocalSEO />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default GoogleRanking;