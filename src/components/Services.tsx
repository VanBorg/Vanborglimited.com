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

const Services = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

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

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {activeService.title}
                    </h3>
                  </div>

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