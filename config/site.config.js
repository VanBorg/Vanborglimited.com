/**
 * Site configuration
 */

export const siteConfig = {
  name: "NextJS App",
  description: "A modern web application built with Next.js",
  url: "https://example.com",
  ogImage: "https://example.com/og-image.jpg",
  
  // Navigation menu items
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  
  // Social media links
  socialLinks: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  
  // Contact information
  contact: {
    email: "info@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, Country",
  },
};

export default siteConfig;