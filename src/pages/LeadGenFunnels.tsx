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

const LeadGenFunnels = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewExamples = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  // Memoized static data

  const funnelServices = useMemo(() => [
    {
      iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      title: 'SEO-Optimized Website',
      description: 'Homepage and service pages built to rank, convert, and capture leads with professional design and technical excellence.',
      features: ['Homepage + service pages', 'Lead capture forms', 'Booking integration', 'Fast & mobile-ready']
    },
    {
      iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
      title: 'Google Ads Campaign Management',
      description: 'Strategic ad campaigns on Search, Display, and YouTube to drive qualified traffic to your funnel.',
      features: ['Campaign setup', 'Keyword targeting', 'Ad copywriting', 'Budget optimization']
    },
    {
      iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: 'Local SEO & Google Maps',
      description: 'Dominate local search and Maps pack with GBP optimization, citations, reviews, and local rankings.',
      features: ['GBP optimization', 'Local rankings', 'Citation building', 'Review management']
    },
    {
      iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      title: 'Chatbot Lead Capture & Booking',
      description: 'AI-powered chatbot for instant lead capture, qualification, appointment booking across website, WhatsApp, and Meta.',
      features: ['Voiceflow bot', 'Multi-channel', 'Lead qualification', 'Booking assistant']
    },
    {
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      title: 'Marketing Automations',
      description: 'Email sequences, SMS reminders, WhatsApp followups, CRM syncs, and automated workflows powered by n8n.',
      features: ['Email drips', 'SMS/WhatsApp', 'CRM sync', 'Automated followups']
    },
    {
      iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: 'Email Marketing Campaigns',
      description: 'Strategic email campaigns for lead nurturing, promotions, newsletters, and engagement with professional design and copywriting.',
      features: ['Campaign design', 'List segmentation', 'A/B testing', 'Performance tracking']
    },
    {
      iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      title: 'Integration & API Wiring',
      description: 'Connect all systems—CRM, calendar, email, SMS, analytics—into one unified, automated lead generation machine.',
      features: ['Webhook setup', 'API connections', 'Data flow', 'System sync']
    },
    {
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: 'Analytics & Performance Tracking',
      description: 'Comprehensive dashboards tracking traffic, conversions, leads, ad performance, and ROI across all channels.',
      features: ['Traffic analytics', 'Conversion tracking', 'ROI reports', 'Performance dashboards']
    },
    {
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      title: 'Ongoing Optimization & Scaling',
      description: 'Continuous testing, tweaking, and scaling across ads, SEO, automations, and conversions for maximum growth.',
      features: ['A/B testing', 'Campaign optimization', 'SEO improvements', 'Scaling strategies']
    }
  ], []);

  const benefits = useMemo(() => [
    { 
      title: 'Full Stack Funnel in One Contract', 
      description: 'Everything you need—website, ads, SEO, chatbot, automations—delivered as a cohesive system, not disconnected pieces',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      stat: 'Complete solution'
    },
    { 
      title: 'Everything Works Together', 
      description: 'No friction between services—ads feed the site, chatbot captures leads, automations follow up, CRM stays synced',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
      stat: 'Seamless flow'
    },
    { 
      title: 'Better ROI, Fewer Gaps', 
      description: 'Eliminate the silos and blind spots that kill conversions when services are managed separately',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      stat: 'Optimized ROI'
    },
    { 
      title: 'Time & Results While We Handle Complexity', 
      description: 'You focus on your business while we orchestrate the entire lead generation system end-to-end',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Hands-free'
    }
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: '1',
      title: 'Discovery & Unified Strategy',
      description: 'Deep dive into your business, create unified plan across website, ads, local SEO, chatbot, and automation strategy.',
      timeline: 'Week 1-2',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      number: '2',
      title: 'Website & SEO Foundation',
      description: 'Build SEO-optimized website with lead capture, booking flows, and technical foundation for the entire funnel.',
      timeline: 'Week 2-5',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      number: '3',
      title: 'Ad Campaigns & Traffic Setup',
      description: 'Launch Google Ads campaigns, set up tracking, optimize targeting, and drive qualified traffic to your funnel.',
      timeline: 'Week 4-6',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
    },
    {
      number: '4',
      title: 'Chatbot & Lead Flow Integration',
      description: 'Deploy AI chatbot, embed lead capture flows, connect booking system, and wire multi-channel engagement.',
      timeline: 'Week 5-7',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
    },
    {
      number: '5',
      title: 'Automation & System Wiring',
      description: 'Build email sequences, SMS followups, CRM syncs, webhook triggers, and connect all systems together.',
      timeline: 'Week 6-8',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      number: '6',
      title: 'Launch & Optimization Loop',
      description: 'Go live with full funnel, monitor all channels, test and optimize based on data, fix issues, and scale what works.',
      timeline: 'Week 8-12',
      icon: 'M5 10l7-7m0 0l7 7m-7-7v18'
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'SEO Website', description: 'Lead generation' },
    { name: 'Google Ads', description: 'Traffic & conversions' },
    { name: 'Local SEO', description: 'Maps ranking' },
    { name: 'Chatbot', description: 'AI capture' },
    { name: 'Automations', description: 'n8n workflows' },
    { name: 'Full Integration', description: 'Everything connected' }
  ], []);

  // SEO: Set meta tags and structured data
  useEffect(() => {
    document.title = 'Complete Lead Generation Funnels | All-In-One Marketing Solution';
    
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

    setMetaTag('description', 'Complete lead generation funnel solution: SEO website, Google Ads, local ranking, AI chatbot, and marketing automation—everything wired together for maximum ROI.');
    setMetaTag('keywords', 'lead generation funnel, complete marketing solution, SEO and ads, chatbot automation, full stack marketing, integrated lead gen');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://yoursite.com/lead-gen-funnels', true);
    setMetaTag('og:title', 'Complete Lead Generation Funnels | All-In-One Solution', true);
    setMetaTag('og:description', 'Full funnel solution: website, ads, SEO, chatbot, automations—everything integrated for maximum lead generation.', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://yoursite.com/lead-gen-funnels';
    
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
                    <TrustBadge text="Complete Funnel Solution" />

                    <h1 id="hero-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        All-In-One LeadGen Funnels
                      </span>
                      <br />
                      <span className="text-gray-900">
                        From SEO to Automations
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Your complete funnel: website, ads, maps, chatbot, automations—everything wired together. This is the "everything" package. We build the site, run ads, optimize SEO and Maps, embed chatbot flows, automate followups, and sync everything.
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
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4">Complete lead generation system—fully integrated</p>
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
                        Why Choose This Funnel
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

          {/* What's Included Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="services-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="What's Included" />
                <h2 id="services-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Complete Funnel Services
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Everything you need for a complete, integrated lead generation system that actually works.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                {funnelServices.map((service, index) => (
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
                        {service.features.map((item, idx) => (
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
                          Our comprehensive 6-step process to build, launch, and optimize your complete lead generation funnel in 8-12 weeks.
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
                    Pricing & Retainer
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  One-time setup to build your complete funnel, monthly retainer for full management, optimization, and scaling.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Setup Fee */}
                <Card variant="glass" size="medium">
                  <div className="relative space-y-6">
                    <div className="text-center space-y-3 sm:space-y-4 pt-4">
                      <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                        ONE-TIME SETUP
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                        Complete Funnel Build
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                        £5,000 – £15,000
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Paid upfront or split—full system design & integration
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">SEO website design & build</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Google Ads campaign setup</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Local SEO & GBP optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Chatbot development & integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Automation workflows & CRM sync</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Complete system integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Analytics & tracking setup</span>
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
                        Full Funnel Management
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        £1,500 – £5,000+
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Monthly fee for complete management & optimization
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Google Ads management & optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">SEO & content optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Chatbot monitoring & improvements</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Automation workflow updates</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">A/B testing & conversion optimization</span>
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
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Strategic scaling & growth</span>
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
                        Ready to Launch Your Funnel?
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Stop piecing together disconnected marketing services. Launch a complete, integrated lead generation funnel in 8-12 weeks—website, ads, SEO, chatbot, automations—everything working together to drive maximum results.
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
                      🌐 Complete Website • 📢 Google Ads • 🗺️ Local SEO • 🤖 AI Chatbot • ⚡ Full Automation • 📊 Integrated Analytics
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

export default LeadGenFunnels;