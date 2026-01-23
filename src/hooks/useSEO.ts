import { useEffect } from 'react';
import { useI18n } from '../i18n/context';

/**
 * SEO hook that updates meta tags and structured data based on current language
 * Optimized for performance with minimal re-renders
 */
export const useSEO = () => {
  const { language, t } = useI18n();

  useEffect(() => {
    // Update document language
    document.documentElement.lang = language === 'nl' ? 'nl' : 'en-GB';

    // Update meta tags based on language
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update title and description based on language
    if (language === 'nl') {
      document.title = 'Beste Local SEO & Google Ranking Specialisten in Londen | Google Ads & SEO Websites';
      updateMetaTag('description', 'Londen-gebaseerde specialisten in Google Ranking (Local SEO & Google Business Profile), Google Ads en SEO Websites. We werken met bedrijven in het VK, de EU en de rest van de wereld.');
      updateMetaTag('og:title', 'Beste Local SEO & Google Ranking Specialisten in Londen | Google Ads & SEO Websites', true);
      updateMetaTag('og:description', 'Londen-gebaseerde specialisten in Google Ranking, Google Ads en SEO Websites. Actief in het VK, de EU en wereldwijd.', true);
      updateMetaTag('og:locale', 'nl_NL', true);
    } else {
      document.title = 'Best Local SEO & Google Ranking Specialists in Netherlands | Google Ads & SEO Websites';
      updateMetaTag('description', 'Netherlands-based specialists in Google Ranking (Local SEO & Google Business Profile), Google Ads and SEO Websites. We work with businesses in the Netherlands, the EU, and the UK.');
      updateMetaTag('og:title', 'Best Local SEO & Google Ranking Specialists in Netherlands | Google Ads & SEO Websites', true);
      updateMetaTag('og:description', 'Netherlands-based specialists in Google Ranking, Google Ads and SEO Websites. Serving the Netherlands, the EU, and the UK.', true);
      updateMetaTag('og:locale', 'en_GB', true);
    }

    // Update alternate language links for SEO
    const updateAlternateLink = (lang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.href = href;
    };

    updateAlternateLink('nl', 'https://vanborg.com/?lang=nl');
    updateAlternateLink('en', 'https://vanborg.com/?lang=en');
    updateAlternateLink('x-default', 'https://vanborg.com/');

  }, [language, t]);
};

