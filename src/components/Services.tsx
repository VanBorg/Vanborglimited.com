import { useState, useCallback } from 'react';
import Button from './Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  oneTimePrice: string;
  retainerPrice: string;
  timeline: string;
}

const services: Service[] = [
  {
  id: 'seo',
  title: 'Local SEO Ranking',
  description: `<strong>Get into Google’s Top 5:</strong> we guarantee a top 5 local ranking within 90 days, or you get a full refund, no questions asked.<br><br>

  <strong>What we do:</strong> complete GBP setup or cleanup, on-page SEO, location signals, citation building, and trust signal optimisation.<br><br>

  <strong>Why it matters:</strong> 70% of all sales on Google come from the top 5 results. We’ll get you there, and keep you there.`,
  icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  oneTimePrice: '£1,000',
  retainerPrice: 'From £200/mo',
  timeline: 'Up to 90 days'
},
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: `<strong>Launch ad campaigns:</strong> we set up and manage your Google Ads to target the right users in your area and get you more leads.<br><br>
    
    <strong>What we do:</strong> full campaign setup, ongoing targeting, copy optimisation, and daily monitoring to maximise ROI.<br><br>
    
    <strong>Why it matters:</strong> great ads mean nothing without strategy. We handle setup, optimisation, and scale. You control the ad spend, we make sure it performs.`,
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    oneTimePrice: 'From £1,000',
    retainerPrice: 'From £750/mo',
    timeline: 'Instant results'
  },
  {
    id: 'seo-website',
    title: 'SEO Optimised Websites',
    description: `<strong>We build SEO-first websites that convert.</strong> Designed to rank, built to sell. Every page is structured for Google visibility and user action: clear CTAs, embedded calendars, payment links, and fast performance.<br><br>

  Includes a high-converting homepage and custom service pages, built for your niche and target keywords.<br><br>

  Clean modern code and mobile-first built to grow your traffic, and turn it into revenue.`,
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    oneTimePrice: 'From £2,500',
    retainerPrice: 'From £200/mo',
    timeline: '1–2 weeks'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    description: `<strong>Your 24/7 booking & lead capture machine:</strong> we build smart chatbots that engage visitors, answer questions, and guide them to take action, even while you sleep.<br><br>

They can be added to your website as an embed or pop‑up, and we can deploy them on WhatsApp for direct messaging and instant replies.<br><br>

Built for bookings, lead capture, and fast answers, fully branded and connected to your systems.`,
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    oneTimePrice: 'From £700',
    retainerPrice: 'From £100/mo',
    timeline: '4–7 days'
  },
];

const SERVICE_ROUTES: Record<string, string> = {
  seo: '/google-ranking',
  'google-ads': '/google-ads',
  chatbots: '/ai-chatbots',
  'seo-website': '/seo-website'
};

// Sanitize HTML to prevent XSS (basic implementation)
const sanitizeHTML = (html: string): string => {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/g, '')
    .replace(/on\w+='[^']*'/g, '');
};

<<<<<<< HEAD
const Services = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
=======
const services: Service[] = [
  {
    id: 'seo',
    title: 'Local SEO Ranking',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    image: '/images/google-ranking.png',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    image: '/images/google-ads.png',
  },
  {
    id: 'seo-website',
    title: 'SEO Websites',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    image: '/images/seo-website.png',
  },
  {
    id: 'bundel',
    title: 'Complete Bundels',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    image: '/images/bundel.png',
  }
];

const getTranslatedTitle = (serviceId: string, translations: any): string => {
  const titleMap: Record<string, string> = {
    seo: translations.navbar.services.ranking,
    'google-ads': translations.navbar.services.ads,
    'seo-website': translations.navbar.services.website,
    bundel: translations.navbar.services.bundel
  };
  return titleMap[serviceId] || '';
};

const Services = memo(() => {
  const { t, language } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadImages, setShouldLoadImages] = useState(false);
  const hasInitializedRef = useRef(false);

  const getTranslatedServices = useCallback((): Service[] => {
    return services.map((service) => ({
      ...service,
      title: getTranslatedTitle(service.id, t)
    }));
  }, [t]);

  const [activeService, setActiveService] = useState<Service>(getTranslatedServices()[0]);

  useEffect(() => {
    const translatedServices = getTranslatedServices();
    const currentActive = translatedServices.find((s) => s.id === activeService.id);
    if (currentActive) {
      setActiveService(currentActive);
    }
  }, [language, getTranslatedServices, activeService.id]);

  // Preload images immediately when component mounts
  useEffect(() => {
    // Preload all service images immediately
    const imageUrls = services.map(service => service.image);
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });

    // Load images when section comes into view (earlier trigger)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasInitializedRef.current) {
          setShouldLoadImages(true);
          hasInitializedRef.current = true;
          observer.disconnect();
        }
      },
      {
        rootMargin: '500px', // Start loading 500px before section comes into view
        threshold: 0.01
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: Load after 300ms if not already loaded
    const fallbackTimer = setTimeout(() => {
      if (!hasInitializedRef.current) {
        setShouldLoadImages(true);
        hasInitializedRef.current = true;
        observer.disconnect();
      }
    }, 300);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);
>>>>>>> 43a468f (Configure Netlify deployment settings)

  const handleServiceClick = useCallback((service: Service) => {
    setActiveService(service);
  }, []);

  const handleSeeMore = useCallback(() => {
    const target = SERVICE_ROUTES[activeService.id] || '/';
    window.location.href = target;
  }, [activeService.id]);

  return (
    <section
      id="services"
      className="relative w-full py-10 sm:py-14 lg:py-18 overflow-hidden bg-white/80 backdrop-blur-sm"
      aria-label="Digital marketing services"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-100/30 to-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-100 rounded-2xl border border-gray-200 shadow-lg">
          
          {/* Header */}
          <header className="text-center mb-6 sm:mb-8 lg:mb-10 space-y-4 sm:space-y-6">
            <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>

            <div className="relative max-w-3xl mx-auto">
              <div className="rounded-2xl border border-gray-200/50 bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-sm space-y-1.5">
                <p className="text-base sm:text-lg text-gray-900 font-bold leading-tight">
                  Want to see the numbers?
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <a
                    href="/calculator#roi-progress"
                    className="text-sky-700 hover:text-sky-800 font-semibold underline decoration-2 underline-offset-2 transition-colors"
                  >
                    Calculate your ROI
                  </a>
                  {' '}or{' '}
                  <a
                    href="/contact"
                    className="text-sky-700 hover:text-sky-800 font-semibold underline decoration-2 underline-offset-2 transition-colors"
                  >
                    schedule a call
                  </a>
                  {' '}to discuss your goals.
                </p>
              </div>
            </div>
          </header>

          {/* Service Grid - Mobile first, then desktop */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[320px_1fr] lg:gap-8">
            
            {/* Service Navigation */}
            <nav 
              className="space-y-1.5 lg:order-1"
              aria-label="Service selection"
              role="tablist"
            >
              {services.map((service) => {
                const isActive = activeService.id === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${service.id}`}
                    className={`
                      relative w-full text-left group rounded-2xl border transition-all duration-300 min-h-[44px]
                      ${isActive
                        ? 'bg-gradient-to-br from-sky-50/80 to-cyan-50/80 border-sky-200/50 shadow-lg'
                        : 'bg-white border-gray-200/50 shadow-sm hover:shadow-md hover:border-gray-300'
                      }
                    `}
                  >
                    {service.id === 'seo' && (
                      <span className="absolute -top-2 -right-2 z-10 px-2 py-0.5 bg-gradient-to-br from-sky-100/80 to-cyan-50/80 border border-sky-600 rounded-full shadow-lg text-xs font-bold text-sky-700 uppercase tracking-wide">
                        Most Popular
                      </span>
                    )}

                    <span className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
                      <span
                        className={`
                          flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                          ${isActive
                            ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }
                        `}
                        aria-hidden="true"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.icon}
                          />
                        </svg>
                      </span>

                      <span className={`text-sm sm:text-base font-semibold leading-snug ${
                        isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {service.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Service Details Panel */}
            <div
              id={`service-panel-${activeService.id}`}
              role="tabpanel"
              className="rounded-2xl bg-gradient-to-br from-sky-50/80 to-cyan-50/80 border border-sky-200/50 shadow-lg lg:order-2"
              aria-labelledby={`service-tab-${activeService.id}`}
            >
<<<<<<< HEAD
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4">
                
                {/* Service Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-6 h-6"
=======
              {/* fixed min height so tabs don't jump */}
              <div className="p-4 sm:p-5 lg:p-6 min-h-[360px] sm:min-h-[380px] lg:min-h-[420px]">
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 h-full">
                  {/* Title Row */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center shadow-md"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
>>>>>>> 43a468f (Configure Netlify deployment settings)
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={activeService.icon}
                        />
                      </svg>
                    </div>
<<<<<<< HEAD

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
=======
                    <h3 className="text-base sm:text-lg font-bold text-gray-100 leading-tight break-words">
>>>>>>> 43a468f (Configure Netlify deployment settings)
                      {activeService.title}
                    </h3>
                  </div>

<<<<<<< HEAD
                  <Button
                    variant="primary"
                    onClick={handleSeeMore}
                    ariaLabel={`Learn more about ${activeService.title}`}
                    className="sm:flex-shrink-0 !px-6 !py-3 !text-base !font-bold !rounded-lg shadow-md hover:shadow-lg !whitespace-nowrap"
                  >
                    More Info
                  </Button>
                </div>

                {/* Service Description */}
                <div>
                  <div className="bg-white/90 rounded-xl px-4 py-3 border border-sky-100/50 shadow-sm">
                    <div
                      className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 [&>p]:m-0 [&>p:last-child]:mb-0"
                      dangerouslySetInnerHTML={{ __html: sanitizeHTML(activeService.description) }}
                    />
=======
                  {/* Content + Image Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] lg:gap-6 flex-1">
                    {/* Left: Text + Price boxes */}
                    <div className="flex flex-col gap-4">
                      <div className="bg-black/90 rounded-xl px-4 py-3 border border-gray-800/50 shadow-sm">
                        <div
                          className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-2 [&>p]:m-0 [&>p:last-child]:mb-0"
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHTML(t.services.serviceDetails[activeService.id as keyof typeof t.services.serviceDetails].description)
                          }}
                        />
                      </div>

                      <dl className="grid grid-cols-2 gap-3">
                        <div className="bg-black rounded-xl border border-gray-800/70 shadow-sm px-3 py-2.5">
                          <dt className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                            {t.services.setupPrice}
                          </dt>
                          <dd className="text-base sm:text-lg font-black text-gray-100">
                            {t.services.serviceDetails[activeService.id as keyof typeof t.services.serviceDetails].oneTimePrice}
                          </dd>
                        </div>
                        <div className="bg-black rounded-xl border border-gray-800/70 shadow-sm px-3 py-2.5">
                          <dt className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                            {t.services.timeline}
                          </dt>
                          <dd className="text-base sm:text-lg font-black text-gray-100">
                            {t.services.serviceDetails[activeService.id as keyof typeof t.services.serviceDetails].timeline}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Right: Button above Image */}
                    <div className="flex flex-col items-end gap-4 lg:justify-start lg:h-full">
                      <Button
                        variant="primary"
                        onClick={handleSeeMore}
                        ariaLabel={`Meer informatie over ${activeService.title}`}
                        className="!w-full !h-12 sm:!h-14 !px-6 sm:!px-8 !py-0 !text-sm sm:!text-base !font-semibold !rounded-lg !shadow-md hover:!shadow-lg !whitespace-nowrap !flex !items-center !justify-center"
                      >
                        {t.services.moreInfo}
                      </Button>
                      
                      <div className="flex-1 flex items-end lg:items-start">
                        {shouldLoadImages ? (
                          <img
                            src={activeService.image}
                            alt={`${activeService.title} - ${t.services.title}`}
                            className="w-full max-w-[280px] max-h-[320px] sm:max-h-[360px] object-contain rounded-lg"
                            loading="eager"
                            fetchPriority="high"
                            width="280"
                            height="360"
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full max-w-[280px] max-h-[320px] sm:max-h-[360px] bg-gray-800/50 rounded-lg animate-pulse flex items-center justify-center">
                            <div className="w-16 h-16 border-2 border-gray-700 border-t-sky-500 rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                    </div>
>>>>>>> 43a468f (Configure Netlify deployment settings)
                  </div>
                </div>

                {/* Service Stats pulled from index page */}
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px sm:gap-1">
                  <div className="bg-white rounded-xl border border-gray-200/70 shadow-sm px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      One-time setup
                    </dt>
                    <dd className="text-lg sm:text-xl font-black text-gray-900">
                      {activeService.oneTimePrice}
                    </dd>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200/70 shadow-sm px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Monthly retainer
                    </dt>
                    <dd className="text-lg sm:text-xl font-black text-gray-900">
                      {activeService.retainerPrice}
                    </dd>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200/70 shadow-sm px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Completion timeline
                    </dt>
                    <dd className="text-lg sm:text-xl font-black text-gray-900">
                      {activeService.timeline}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;