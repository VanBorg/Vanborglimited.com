/**
 * SEO configuration
 */

import { siteConfig } from './site.config';

export const seoConfig = {
  defaultTitle: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  
  // Twitter
  twitter: {
    handle: '@yourusername',
    site: '@yourusername',
    cardType: 'summary_large_image',
  },
  
  // Additional metadata
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  
  // Get page-specific SEO config
  getPageSeo: (path, title, description) => {
    return {
      title: title || seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
      openGraph: {
        ...seoConfig.openGraph,
        url: `${siteConfig.url}${path}`,
        title: title || seoConfig.defaultTitle,
        description: description || seoConfig.defaultDescription,
      },
    };
  },
};

export default seoConfig;