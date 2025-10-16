import { memo, useState, useCallback } from 'react';
import Button from './Button';
import TrustBadge from './TrustBadge';

interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  benefits: string[];
  benefitLine?: string;
  icon: string;
  oneTimePrice: string; // Format: "From £X,XXX" (GBP only)
  retainerPrice: string; // Format: "From £XXX/mo" (GBP only)
  timeline: string;
}

// IMPORTANT: All prices must be in GBP (£) format only
// Use formatCurrency() utility for consistent formatting
const services: Service[] = [
  {
    id: 'seo',
    title: 'Google Top 3 Ranking',
    subtitle: 'We get your business into the top 3 on Google Search and Maps.',
    description: `<strong>We follow a proven checklist: </strong> full GBP setup, on-page SEO fixes, location signals, content adjustments, and trust-building. All aligned with Google's ranking algorithm.<br><br>
    
     <strong>Once you're ranked, we keep you there: </strong> ongoing updates, weekly posts, review responses, photo uploads, and full profile maintenance to hold your spot and stay ahead of the rest.<br><br>
    
    <strong>What's Included:</strong><br>
    • Full Google Business Profile setup or cleanup<br>
    • On-page SEO optimisation for local search<br>
    • Local backlinks, citations & map signal building<br>
    • Automated review collection & reply system<br>
    • Weekly profile maintenance & ranking audits`,
    benefits: ['Top 3 Google rankings', 'Increased local visibility', 'Higher click-through rates', 'Better conversion rates'],
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    oneTimePrice: 'From £2,500',
    retainerPrice: 'From £800/mo',
    timeline: '3–7 days'
  },
  {
    id: 'google-ads',
    title: 'Google Ads + Retargeting',
    subtitle: 'We run Google Ads that show your business to people looking for what you offer.',
    description: `<strong>We build ad campaigns</strong> that get your business in front of people actively searching, with targeting, copy, and budget tailored to your location and competition.<br><br>
    
    <strong>We optimise daily to keep costs low,</strong> cut waste, and increase your return. <br><br>
    
    <strong>Important:</strong> We strongly recommend setting up your Google Top 3 Ranking first. It builds trust and lowers ad costs, so you get more results for less spend.<br><br>
    
    <strong>What's Included:</strong><br>
    • Full Google Search Ad campaign setup<br>
    • Location- and competition-based budget planning<br>
    • Keyword targeting + conversion-focused ad copy<br>
    • Retargeting via Google Display Network<br>
    • Daily optimisation + weekly performance reports`,
    benefits: ['Instant traffic', 'Predictable ROI', 'Smart retargeting', 'Conversion optimization'],
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    oneTimePrice: 'From £1,500',
    retainerPrice: 'From £1,200/mo',
    timeline: 'Instant results'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    subtitle: 'Chatbots that qualify leads, answer questions, and book appointments, 24/7.',
    description: `<strong>We turn your website into a 24/7 sales assistant:</strong> capturing leads, handling FAQs, and booking appointments.<br><br>
    
    Our bots guide visitors through smart forms, sync directly with your calendar for real-time booking, and answer common questions on the spot.<br><br>
    
    Built to match your brand, connected to your systems, and optimised for conversion.<br><br>
    
    <strong>What's Included:</strong><br>
    • Custom-built AI chatbot with brand-matching UI<br>
    • Lead capture flows with dynamic form logic<br>
    • Real-time appointment booking (calendar sync)<br>
    • FAQ handling with scripted fallback logic<br>
    • CRM, email, or SMS integration for follow-up`,
    benefits: ['24/7 lead capture', 'Instant responses', 'Appointment booking', 'Lead qualification'],
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    oneTimePrice: 'From £3,000',
    retainerPrice: 'From £500/mo',
    timeline: '4–7 days'
  },
  {
    id: 'seo-website',
    title: 'SEO Website',
    subtitle: 'We build high-performance websites engineered to rank, convert, and scale.',
    description: `<strong>We build AI-powered websites that rank.</strong> Built with React, Tailwind, and clean CSS, every page is structured for SEO and performance from the start: lightning-fast load times, mobile-first design, and keyword-targeted content.<br><br>
  
  Includes a fully optimised landing page and service pages, structured like this website.<br><br>
  
  We follow technical SEO best practices, meet Core Web Vitals, and track every click. Built to grow with your business, and ready to scale.<br><br>
  
  <strong>What's Included:</strong><br>
  • Custom site using React, Tailwind & CSS<br>
  • SEO structure: meta, tags, schema, content blocks<br>
  • Mobile-first, speed‑optimised layout<br>
  • Landing page + services pages designed to convert<br>
  • GA4, GSC, and lead tracking fully integrated`,
    benefits: ['SEO-optimized', 'Lightning fast', 'Mobile-first', 'Core Web Vitals'],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    oneTimePrice: 'From £4,500',
    retainerPrice: 'From £300/mo',
    timeline: '1–2 weeks'
  },
  {
    id: 'crm-automations',
    title: 'CRM Sync & Automations',
    subtitle: 'We connect your tools, track every lead, and automate the follow-up.',
    description: `<strong>We connect your website, forms, chatbots, and booking tools to your CRM,</strong> so every lead gets tracked, tagged, and followed up automatically.<br><br>
  
  Using n8n, webhooks, and custom APIs, we sync everything in real-time: lead info, status updates, reminders, emails, and review requests, all triggered without manual work.<br><br>
  
  Leads get added to your pipeline, follow-up flows start instantly, and post-job actions (like review emails) run on autopilot. Nothing slips through the cracks.<br><br>
  
  <strong>What's Included:</strong><br>
  • CRM integration (Close, Airtable, etc.) with full lead sync<br>
  • Automations built using n8n, webhooks, and APIs<br>
  • Auto follow-ups, reminders, and review request emails<br>
  • Status tracking + reporting dashboards<br>
  • Integration with email, SMS, and calendar tools`,
    benefits: ['24/7 follow-up', 'Live CRM sync', 'Lead tracking', 'Smart automations'],
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    oneTimePrice: 'From £1,500',
    retainerPrice: 'From £150/mo',
    timeline: '3–5 days'
  }
];

const Services = memo(() => {
  const [activeService, setActiveService] = useState(services[0]);

  const handleServiceClick = useCallback((service: Service) => {
    setActiveService(service);
  }, []);

  return (
    <section id="services" className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-white/80 backdrop-blur-sm" aria-label="Van Borg Limited Services">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full max-w-6xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12 bg-gray-100 rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg">
          {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-block mb-4 sm:mb-6">
            <TrustBadge text="Complete Digital Marketing Solutions" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Our Services
                </span>
            </h2>
            </div>

            {/* Description Box */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-gray-200/50 shadow-sm">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 leading-relaxed text-center">
                  Professional digital marketing solutions designed to grow your business and maximize your ROI. <a href="/Contact" className="text-sky-600 hover:text-sky-700 font-semibold underline">Get started today</a>!
                </h3>
              </div>
            </div>

            {/* Two Column Layout - Mobile First */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,380px)_1fr] gap-3 sm:gap-4 lg:gap-8 lg:grid-rows-1 mt-4 sm:mt-6 lg:mt-8">
              {/* Left - Service Buttons */}
              <div className="space-y-1.5 sm:space-y-2 lg:row-start-1 order-2 lg:order-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className="w-full text-left group relative"
                    aria-pressed={activeService.id === service.id}
                    aria-label={`View ${service.title} details`}
                  >
                    <div className={`relative rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
                        activeService.id === service.id
                        ? 'bg-gradient-to-br from-sky-50/80 to-cyan-50/80 border-sky-200/50 shadow-lg' 
                        : 'bg-white border-gray-200/50 shadow-sm hover:shadow-md'
                    }`}>
                      {service.id === 'seo' && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="relative">
                            <div className="px-2 py-0.5 bg-gradient-to-br from-sky-100/80 to-cyan-50/80 backdrop-blur-sm border border-sky-600 rounded-full shadow-lg">
                              <span className="text-xs font-bold text-sky-700 uppercase tracking-wide">Most Popular</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/60 to-cyan-50/60 rounded-full blur-sm opacity-50 -z-10"></div>
                          </div>
                        </div>
                      )}
                      <div className="px-3 py-2 sm:px-4 sm:py-2.5">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                            activeService.id === service.id
                              ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white'
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-sm sm:text-base font-semibold truncate ${
                              activeService.id === service.id ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                            }`}>
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      </div>
                    </button>
                  ))}
                </div>

              {/* Right - Service Details */}
              <div className="lg:row-start-1 lg:h-full order-1 lg:order-2">
                <div className="relative rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 bg-gradient-to-br from-sky-50/80 to-cyan-50/80 border-sky-200/50 shadow-lg h-full min-h-[400px] sm:min-h-[500px] lg:min-h-0">
                  <div className="p-3 sm:p-4 lg:p-3.5 h-full flex flex-col">
                    {/* Header with Icon, Title, Button */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeService.icon} />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                            {activeService.title}
                          </h3>
                          {activeService.subtitle && (
                            <h4 className="text-xs text-gray-600 italic mt-1">
                              {activeService.subtitle}
                            </h4>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        variant="primary"
                        onClick={() => {
                          // Navigate to respective service page
                          const serviceRoutes: Record<string, string> = {
                            'seo': '/GoogleRanking',
                            'google-ads': '/GoogleAds', 
                            'chatbots': '/AIChatbots',
                            'seo-website': '/SEOWebsite',
                            'crm-automations': '/Automations'
                          };
                          window.location.href = serviceRoutes[activeService.id] || '/';
                        }}
                        ariaLabel={`Get started with ${activeService.title}`}
                        className="!w-full sm:!w-auto !px-4 !py-2 sm:!px-8 sm:!py-2.5 !text-xs sm:!text-sm !font-bold !rounded-lg !whitespace-nowrap flex-shrink-0"
                      >
                        {activeService.id === 'seo' && 'See More'}
                        {activeService.id === 'google-ads' && 'See More'}
                        {activeService.id === 'chatbots' && 'See More'}
                        {activeService.id === 'seo-website' && 'See More'}
                        {activeService.id === 'crm-automations' && 'See More'}
                      </Button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto space-y-3 mt-2 sm:mt-3 pr-1 sm:pr-2">
                      {/* Service Description */}
                      <div className="space-y-2 sm:space-y-3">
                        {/* Description Box */}
                        <div className="bg-white backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-sky-100/50">
                          <p 
                            className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: activeService.description }}
                          />
                        </div>
                      </div>

                      {/* Benefits Section - Hidden since content is in description */}

                      {/* Benefit Line */}
                      {activeService.benefitLine && (
                        <div className="pt-3 border-t border-gray-200/50">
                          <p className="text-sm font-medium text-gray-800 italic text-center">
                            {activeService.benefitLine}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;