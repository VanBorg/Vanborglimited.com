import { useMemo, memo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import TrustBadge from '../components/TrustBadge';

// Optimized Icon Component with performance improvements
const Icon = memo(({ path, className = "w-6 h-6 sm:w-7 sm:h-7 text-white" }: { path: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
));

Icon.displayName = 'Icon';

const GoogleRanking = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewExamples = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  // Memoized static data

  const seoServices = useMemo(() => [
    {
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: 'GBP Optimization & Audit',
      description: 'Complete Google Business Profile setup, optimization, and ongoing management for maximum visibility.',
      features: ['Profile completion', 'Category selection', 'Post scheduling', 'Q&A management']
    },
    {
      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: 'Local Keyword Strategy',
      description: 'In-depth local keyword research to target the exact terms your customers are searching for.',
      features: ['Service keywords', 'Location targeting', 'Competitor analysis', 'Search intent mapping']
    },
    {
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: 'On-Page Local SEO',
      description: 'Optimize your website pages with local schema markup, location pages, and service content.',
      features: ['Schema markup', 'Location pages', 'Title & meta tags', 'Content optimization']
    },
    {
      iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: 'Citation & NAP Consistency',
      description: 'Build and maintain consistent Name, Address, Phone across all directories and listings.',
      features: ['Directory submissions', 'NAP cleanup', 'Duplicate removal', 'Data aggregators']
    },
    {
      iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      title: 'Reputation & Review Management',
      description: 'Strategic review generation, monitoring, and response to build trust and improve rankings.',
      features: ['Review campaigns', 'Response templates', 'Rating improvement', 'Sentiment monitoring']
    },
    {
      iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      title: 'Local Linkbuilding & Content',
      description: 'Build high-quality local backlinks and create content that attracts links and customers.',
      features: ['Local partnerships', 'Guest posts', 'Local news', 'Community content']
    },
    {
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      title: 'Technical SEO',
      description: 'Ensure your site is fast, mobile-friendly, and technically sound for search engines.',
      features: ['Site speed', 'Mobile optimization', 'Core Web Vitals', 'Structured data']
    },
    {
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: 'Monthly SEO & Maps Reporting',
      description: 'Detailed monthly reports tracking rankings, traffic, leads, and Google Business Profile performance.',
      features: ['Ranking tracking', 'Traffic analysis', 'GBP insights', 'Competitor monitoring']
    },
    {
      iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      title: 'Competitor Analysis & Market Intelligence',
      description: 'Track competitor rankings, strategies, and market positioning to identify opportunities and stay ahead.',
      features: ['Competitor tracking', 'Gap analysis', 'Market insights', 'Strategy refinement']
    }
  ], []);

  const benefits = useMemo(() => [
    { 
      title: 'Dominate the Map Pack', 
      description: 'Appear in the coveted Google Maps 3-pack when customers search for services in your area—prime real estate',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      stat: 'Top 3 visibility'
    },
    { 
      title: 'More Leads, Less Cost', 
      description: 'Organic rankings bring high-intent traffic without the ongoing cost of ads—long-term sustainable growth',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      stat: 'Sustainable ROI'
    },
    { 
      title: 'Build Trust & Authority', 
      description: 'High rankings and strong reviews establish you as the go-to expert in your local market',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      stat: 'Market leader'
    },
    { 
      title: 'Long-Term Investment', 
      description: 'Unlike paid ads that stop when you stop paying, SEO rankings compound over time and keep delivering',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Compounding returns'
    }
  ], []);

  const howItWorksSteps = useMemo(() => [
    {
      number: '1',
      title: 'Onboarding & Audit',
      description: 'We get access to your site, Google Business Profile, and analytics. Complete audit of current SEO state, GBP optimization, and competitor landscape.',
      timeline: 'Days 1-3',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      number: '2',
      title: 'Strategy & Setup',
      description: 'Rapid local keyword research, competitor analysis, technical fixes, schema implementation, and GBP optimization settings.',
      timeline: 'Days 4-7',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
    },
    {
      number: '3',
      title: 'Initial Optimization',
      description: 'Build citations, optimize on-page elements, launch review campaigns, fix technical issues, create location pages, and publish initial content.',
      timeline: 'Days 8-21',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      number: '4',
      title: 'Testing & Adjustment',
      description: 'Monitor early results, track ranking changes, adjust strategy based on data, refine keyword targeting, and optimize based on performance.',
      timeline: 'Days 22-45',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      number: '5',
      title: 'Ongoing SEO & Maps',
      description: 'Continuous content creation, link building, review generation, GBP posts, citation maintenance, and monthly optimizations.',
      timeline: 'Days 46+',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    },
    {
      number: '6',
      title: 'Reporting & Growth Phase',
      description: 'Monthly detailed reports showing ranking improvements, traffic growth, lead generation, and strategic recommendations for continued scaling.',
      timeline: 'Monthly',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'Google Maps', description: '3-pack rankings' },
    { name: 'GBP Mastery', description: 'Profile optimization' },
    { name: 'Local SEO', description: 'Organic rankings' },
    { name: 'Review Growth', description: 'Reputation boost' },
    { name: 'Technical SEO', description: 'Site performance' },
    { name: 'Link Building', description: 'Authority boost' }
  ], []);

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
    setMetaTag('description', 'Achieve top-3 Google rankings and Google Business Profile mastery. Expert local SEO services to dominate Maps, increase organic leads, and build authority in your area.');
    setMetaTag('keywords', 'local SEO, Google Maps ranking, Google Business Profile, GBP optimization, local search, map pack ranking, citation building, review management');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    // Open Graph
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://yoursite.com/google-ranking', true);
    setMetaTag('og:title', 'Local SEO & Google Maps Ranking Services | Dominate Local Search', true);
    setMetaTag('og:description', 'Achieve top-3 Google rankings and Google Business Profile mastery. Expert local SEO services to dominate Maps and increase organic leads.', true);
    setMetaTag('og:image', 'https://yoursite.com/images/local-seo-og.jpg', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://yoursite.com/google-ranking', true);
    setMetaTag('twitter:title', 'Local SEO & Google Maps Ranking Services', true);
    setMetaTag('twitter:description', 'Achieve top-3 Google rankings and Google Business Profile mastery. Expert local SEO services.', true);
    setMetaTag('twitter:image', 'https://yoursite.com/images/local-seo-twitter.jpg', true);
    
    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://yoursite.com/google-ranking';
    
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
      "image": "https://yoursite.com/images/logo.png",
      "description": "Expert local SEO and Google Maps ranking services to help businesses dominate local search results",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street",
        "addressLocality": "Lelystad",
        "addressRegion": "Flevoland",
        "postalCode": "Your Postal Code",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.5084",
        "longitude": "5.4744"
      },
      "url": "https://yoursite.com/google-ranking",
      "telephone": "+31-YOUR-PHONE",
      "priceRange": "£400-£1500",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/yourcompany",
        "https://twitter.com/yourcompany"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "50"
      },
      "offers": {
        "@type": "Offer",
        "name": "Local SEO Services",
        "price": "400",
        "priceCurrency": "GBP",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://yoursite.com/google-ranking"
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="hero-heading">
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="large">
                <div className="space-y-6 sm:space-y-8 text-center">
                  <header className="space-y-4 sm:space-y-6">
                    <TrustBadge text="Local SEO & Maps" />

                    <h1 id="hero-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Dominate Local Search
                      </span>
                      <br />
                      <span className="text-gray-900">
                        & Maps in Your Area
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Achieve top-3 Google rankings and Google Business Profile mastery for your town and service area. Organic visibility that brings customers to your door without paying for ads.
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Button 
                      variant="primary"
                      onClick={handleGetStarted}
                      ariaLabel="Book SEO consultation"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Book SEO Consultation
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={handleViewExamples}
                      ariaLabel="Send inquiry about SEO"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Send Inquiry
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-200/50">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4">Complete local SEO & Google Maps domination</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                      {techStack.map((tech, index) => (
                        <div key={index} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-3 py-2 sm:px-4 sm:py-2 shadow-sm">
                          <p className="text-xs sm:text-sm font-semibold text-gray-900">{tech.name}</p>
                          <p className="text-xs text-gray-600">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="benefits-heading">
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="medium">
                <div className="space-y-6 sm:space-y-8">
                  <header className="text-center space-y-4 sm:space-y-6">
                    <TrustBadge text="The Benefits" />
                    
                    <h2 id="benefits-heading" className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Why Local SEO Matters
                      </span>
                    </h2>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" role="list">
                    {benefits.map((benefit, index) => (
                      <article key={index} className="relative bg-gradient-to-br from-sky-50/80 to-cyan-50/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-sky-200/50 shadow-sm hover:shadow-md transition-all duration-300" role="listitem">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                              <Icon path={benefit.icon} />
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">
                              {benefit.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {benefit.description}
                            </p>
                            <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              {benefit.stat}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="services-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="Our Services" />
                <h2 id="services-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Complete Local SEO & Maps
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Everything you need to dominate local search results and Google Maps in your area.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                {seoServices.map((service, index) => (
                  <Card key={index} variant="glass" size="small">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon path={service.iconPath} className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-gray-200/50">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="process-heading">
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="medium">
                <div className="space-y-6 sm:space-y-8">
                  <header className="text-center space-y-4 sm:space-y-6">
                    <TrustBadge text="Our Process" />
                    
                    <h2 id="process-heading" className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        How It Works
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                          Our proven 6-step process to get you ranking at the top of local search and Google Maps.
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {howItWorksSteps.map((step, index) => (
                      <div key={index} className="relative bg-gradient-to-br from-sky-50/80 to-cyan-50/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-sky-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                              <Icon path={step.icon} />
                            </div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-600 text-white text-xs font-bold rounded-full">
                                {step.number}
                              </span>
                              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                            <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              {step.timeline}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="pricing-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="Investment" />
                <h2 id="pricing-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Transparent Pricing
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  One-time setup for the heavy lifting, monthly retainer for ongoing work to dominate local search.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                {/* Setup Fee */}
                <Card variant="glass" size="medium">
                  <div className="relative space-y-6">
                    <div className="text-center space-y-3 sm:space-y-4 pt-4">
                      <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                        ONE-TIME SETUP
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                        Audit & Optimization
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                        £500 – £1,500
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Paid upfront for initial heavy lifting & setup
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Complete SEO & GBP audit</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Keyword research & strategy</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Technical fixes & schema</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">GBP optimization & setup</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Initial citation building</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Monthly Retainer */}
                <Card variant="glass" size="medium" className="ring-2 ring-emerald-500 ring-offset-4 ring-offset-gray-50">
                  <div className="relative space-y-6">
                    <div className="text-center space-y-3 sm:space-y-4 pt-4">
                      <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                        MONTHLY RETAINER
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                        SEO & Maps Management
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        £400 – £1,200
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Monthly fee for ongoing optimization & growth
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Content creation & optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Link building campaigns</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Review generation & management</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">GBP posts & updates</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Monthly reports & analysis</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

            </div>
          </section>

          {/* Final CTA */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="large">
                <div className="space-y-6 sm:space-y-8 text-center">
                  <header className="space-y-4 sm:space-y-6">
                    <TrustBadge text="Get Started" />

                    <h2 id="cta-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Ready to Own Local Search?
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Stop losing customers to competitors. Dominate local search results and Google Maps with proven SEO strategies. One-time setup, ongoing optimization—we're committed to your success.
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Button 
                      variant="primary"
                      onClick={() => window.location.href = '/contact'}
                      ariaLabel="Get in touch"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Get In Touch
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-gray-200/50">
                    <p className="text-xs sm:text-sm text-gray-600">
                      🗺️ Maps Domination • ⭐ Review Growth • 📍 Local Authority • 📈 Long-Term Results
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GoogleRanking;