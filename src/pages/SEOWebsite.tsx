import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SEOWebsiteHero from '../components/seo-website/Hero';
import SEOWebsiteWhyItMatters from '../components/seo-website/WhyItMatters';
import SEOWebsiteHowItWorks from '../components/seo-website/HowItWorks';
import SEOWebsitePricing from '../components/seo-website/Pricing';

const SEOWebsite = () => {

  // SEO: Set meta tags and structured data
  useEffect(() => {
    document.title = 'SEO Website Development | Lead Generation & Booking Websites';
    
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

    setMetaTag('description', 'SEO-optimized websites built to rank high, capture leads, and drive bookings. Full-service web development with conversion focus and ongoing support.');
    setMetaTag('keywords', 'SEO website development, lead generation website, booking website, conversion optimization, web development, SEO web design');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vanborglimited.com/seo-website', true);
    setMetaTag('og:title', 'SEO Website Development | Lead Generation & Booking', true);
    setMetaTag('og:description', 'SEO-optimized websites that drive leads and bookings. Professional development with conversion focus.', true);
    setMetaTag('og:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('og:site_name', 'Van Borg Limited', true);
    
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://vanborglimited.com/seo-website', true);
    setMetaTag('twitter:title', 'SEO Website Development | Lead Generation & Booking', true);
    setMetaTag('twitter:description', 'SEO-optimized websites that drive leads and bookings. Professional development with conversion focus.', true);
    setMetaTag('twitter:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('twitter:site', '@VanBorgLimited', true);
    setMetaTag('twitter:creator', '@VanBorgLimited', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://vanborglimited.com/seo-website';
    
    return () => {
      document.title = 'Van Borg Limited';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOWebsiteHero />
        </div>
      </main>

      {/* Full-width pricing directly under hero */}
      <SEOWebsitePricing />

      {/* Remaining content in constrained layout */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOWebsiteHowItWorks />
          <SEOWebsiteWhyItMatters />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default SEOWebsite;