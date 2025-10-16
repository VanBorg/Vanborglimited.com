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

const SEOWebsite = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewExamples = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  // Memoized static data

  const websiteFeatures = useMemo(() => [
    {
      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      title: 'SEO-Ready Homepage & Service Pages',
      description: 'Fully optimized homepage and dedicated service pages built with proper structure, meta tags, and keyword targeting.',
      features: ['Homepage design', 'Service page templates', 'SEO structure', 'Meta optimization']
    },
    {
      iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: 'Lead Capture Funnels & Forms',
      description: 'Strategic lead capture forms, pop-ups, and conversion funnels designed to turn visitors into qualified prospects.',
      features: ['Contact forms', 'Lead magnets', 'Exit intent popups', 'Form optimization']
    },
    {
      iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: 'Booking / Appointment Integration',
      description: 'Seamless calendar integration allowing visitors to book consultations, demos, or appointments directly from your site.',
      features: ['Calendar sync', 'Booking widget', 'Auto reminders', 'Availability management']
    },
    {
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: 'Conversion Tracking & Analytics',
      description: 'Comprehensive tracking setup to monitor traffic sources, user behavior, conversions, and ROI from your website.',
      features: ['Google Analytics', 'Goal tracking', 'Event tracking', 'Heat maps']
    },
    {
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      title: 'Fast, Responsive, Technically Sound',
      description: 'Lightning-fast load times, mobile-optimized design, and technically perfect code that search engines love.',
      features: ['Speed optimization', 'Mobile responsive', 'Core Web Vitals', 'Clean code']
    },
    {
      iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      title: 'CMS / Content Editing',
      description: 'Easy-to-use content management system so you can update pages, blog posts, and content without developer help.',
      features: ['Simple editor', 'Blog management', 'Page updates', 'Media library']
    }
  ], []);

  const benefits = useMemo(() => [
    { 
      title: 'Rank High & Attract Traffic', 
      description: 'Built from the ground up for SEO—proper structure, fast loading, and optimized content to rank in search results',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      stat: 'Organic growth'
    },
    { 
      title: 'Convert Visitors Automatically', 
      description: 'Strategic forms, CTAs, and booking flows turn casual browsers into qualified leads without manual effort',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      stat: 'Auto conversion'
    },
    { 
      title: 'Reduce Paid Ad Dependence', 
      description: 'Organic rankings provide sustainable, long-term traffic without the ongoing costs of paid advertising',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Lower CAC'
    },
    { 
      title: 'Long-Term ROI & Growth', 
      description: 'Your website is an asset that appreciates over time—compound SEO rankings and conversion optimization',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      stat: 'Scalable'
    }
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: '1',
      title: 'Discovery & Strategy',
      description: 'Define goals, target audience, pages needed, SEO strategy, keyword research, and complete content planning.',
      timeline: 'Week 1',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      number: '2',
      title: 'Design & Development',
      description: 'Create homepage, service pages, lead capture funnels, booking flows, and all conversion-focused elements with SEO optimization.',
      timeline: 'Week 1-2',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      number: '3',
      title: 'Integration & Testing',
      description: 'Connect forms, booking systems, analytics, CRM integrations, and thoroughly test all user flows and functionality.',
      timeline: 'Week 2-3',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
      number: '4',
      title: 'Launch & Optimization',
      description: 'Go live, submit to search engines, monitor performance, and optimize based on real data with ongoing support.',
      timeline: 'Week 3',
      icon: 'M5 10l7-7m0 0l7 7m-7-7v18'
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'SEO Foundation', description: 'Built to rank' },
    { name: 'Lead Capture', description: 'Forms & funnels' },
    { name: 'Booking System', description: 'Auto appointments' },
    { name: 'CMS', description: 'Easy editing' },
    { name: 'Analytics', description: 'Track everything' },
    { name: 'Fast & Mobile', description: 'Optimized speed' }
  ], []);

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
    setMetaTag('og:url', 'https://yoursite.com/seo-website', true);
    setMetaTag('og:title', 'SEO Website Development | Lead Generation & Booking', true);
    setMetaTag('og:description', 'SEO-optimized websites that drive leads and bookings. Professional development with conversion focus.', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://yoursite.com/seo-website';
    
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
                    <TrustBadge text="SEO Website Development" />

                    <h1 id="hero-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        SEO-Optimized Websites
                      </span>
                      <br />
                      <span className="text-gray-900">
                        That Drive Leads & Bookings
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Homepage built to rank + dedicated service pages with embedded lead capture and booking flows. Full website with SEO foundation, conversion focus, and automated lead generation.
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Button 
                      variant="primary"
                      onClick={handleGetStarted}
                      ariaLabel="Book a call"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Book a Call
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={handleViewExamples}
                      ariaLabel="Send inquiry"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Send Inquiry
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-200/50">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4">Complete SEO website with lead generation & booking</p>
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
                        Why It Matters
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

          {/* What We Build Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="features-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="What We Build" />
                <h2 id="features-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Complete Website Features
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Everything you need for a high-converting, SEO-optimized website that drives business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                {websiteFeatures.map((feature, index) => (
                  <Card key={index} variant="glass" size="small">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon path={feature.iconPath} className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-gray-200/50">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700">{item}</span>
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
                          Our streamlined 4-step process to design, build, and launch your SEO-optimized website in just 3 weeks.
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {workflowSteps.map((step, index) => (
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
                    Pricing & Maintenance
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  One-time build to create your website, monthly retainer for hosting, support, and ongoing SEO optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                {/* Build Fee */}
                <Card variant="glass" size="medium">
                  <div className="relative space-y-6">
                    <div className="text-center space-y-3 sm:space-y-4 pt-4">
                      <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                        ONE-TIME BUILD
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                        Website Development
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                        £2,500 – £8,000
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Paid partly upfront, remainder on delivery
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Custom design & development</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">SEO foundation setup</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Lead capture & booking integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">CMS setup & training</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Analytics & tracking setup</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Testing & launch support</span>
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
                        Hosting + SEO Support
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        £500 – £2,000
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Monthly fee for hosting, updates & optimization
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Premium hosting & security</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Ongoing SEO optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Content updates & tweaks</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Technical maintenance</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Monthly performance reports</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Priority support access</span>
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
                        Ready for a High-Converting SEO Website?
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Stop losing leads to competitors with better websites. Launch your SEO-optimized, conversion-focused website that ranks high, captures leads automatically, and drives real business growth.
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
                      🚀 SEO-Optimized • 📈 Lead Generation • 📅 Booking System • 💼 Professional Design
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

export default SEOWebsite;