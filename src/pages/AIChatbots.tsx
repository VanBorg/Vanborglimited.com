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

const Chatbot = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewDemos = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  // Memoized static data

  const botFeatures = useMemo(() => [
    {
      iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      title: 'Lead Capture & Qualification',
      description: 'Automatically collect visitor details, qualify leads based on your criteria, and route hot prospects to your sales team.',
      features: ['Contact collection', 'Lead scoring', 'Smart routing', 'CRM integration']
    },
    {
      iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: 'Booking / Appointment Assistant',
      description: 'Let customers book appointments, consultations, or demos directly through the bot with calendar sync.',
      features: ['Calendar integration', 'Availability checks', 'Confirmation emails', 'Rescheduling']
    },
    {
      iconPath: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: 'FAQ & Automated Support',
      description: 'Answer common questions instantly, provide product info, troubleshooting guides, and reduce support tickets.',
      features: ['Knowledge base', 'Smart responses', 'Fallback handling', 'Escalation paths']
    },
    {
      iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: 'Channel Integration',
      description: 'Deploy your bot everywhere: website embed, popup widget, WhatsApp Business, and Meta platforms.',
      features: ['Website embed', 'Popup widget', 'WhatsApp Business', 'Meta Messenger']
    },
    {
      iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      title: 'Brand Customization & UI Design',
      description: 'Match your brand perfectly with custom colors, logos, fonts, messaging, and personality.',
      features: ['Custom branding', 'UI/UX design', 'Voice & tone', 'Avatar & icons']
    },
    {
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: 'Analytics & Reporting',
      description: 'Track conversations, completion rates, drop-off points, user satisfaction, and lead quality metrics.',
      features: ['Conversation analytics', 'User behavior', 'Performance metrics', 'Monthly reports']
    }
  ], []);

  const benefits = useMemo(() => [
    { 
      title: 'Convert Visitors Instantly', 
      description: 'Capture leads and bookings 24/7 without waiting for human response—turn browsers into customers',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      stat: 'Instant conversion'
    },
    { 
      title: 'Reduce Support Workload', 
      description: 'Automate repetitive questions and tasks, freeing your team to handle complex issues that matter',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Save time'
    },
    { 
      title: 'Available 24/7', 
      description: 'Your bot never sleeps—assist customers across time zones and channels whenever they need help',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Always on'
    },
    { 
      title: 'Consistent Brand Experience', 
      description: 'Deliver the same high-quality interaction every time, across all channels, perfectly on-brand',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      stat: 'On-brand'
    }
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: '1',
      title: 'Onboarding & Planning',
      description: 'Define goals, conversation flows, target channels, branding requirements, and get access to your systems.',
      timeline: 'Days 1-3',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      number: '2',
      title: 'Design & Build',
      description: 'Create conversation flows in Voiceflow, design custom UI, set up integrations, and configure channel connections.',
      timeline: 'Days 4-10',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      number: '3',
      title: 'Testing & QA',
      description: 'Test all conversation paths, fallback scenarios, channel integrations, and edge cases thoroughly.',
      timeline: 'Days 11-14',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
      number: '4',
      title: 'Deployment',
      description: 'Launch the bot on your website (embed/popup), configure WhatsApp Business, set up Meta Messenger integration.',
      timeline: 'Days 15-17',
      icon: 'M5 10l7-7m0 0l7 7m-7-7v18'
    },
    {
      number: '5',
      title: 'Early Optimization',
      description: 'Monitor real conversations, fix issues, adjust flows based on user behavior, improve response quality.',
      timeline: 'Weeks 3-4',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      number: '6',
      title: 'Ongoing Support & Analytics',
      description: 'Monthly performance reviews, conversation analytics, flow updates, new feature additions, continuous improvement.',
      timeline: 'Monthly',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'Voiceflow', description: 'Bot builder platform' },
    { name: 'Website Embed', description: 'Native integration' },
    { name: 'WhatsApp Business', description: 'Chat automation' },
    { name: 'Meta Messenger', description: 'Social integration' },
    { name: 'Custom Branding', description: 'Your look & feel' },
    { name: 'Analytics', description: 'Performance tracking' }
  ], []);

  // SEO: Set meta tags and structured data
  useEffect(() => {
    document.title = 'AI Chatbot Development | Lead Capture, Booking & Support Automation';
    
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

    setMetaTag('description', 'Smart chatbot development for your business. Lead capture, appointment booking, and automated support across website, WhatsApp, and Meta. Built with Voiceflow.');
    setMetaTag('keywords', 'chatbot development, AI chatbot, lead capture bot, booking assistant, WhatsApp bot, Voiceflow, conversational AI, chatbot integration');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://yoursite.com/chatbot', true);
    setMetaTag('og:title', 'AI Chatbot Development | Lead Capture & Automation', true);
    setMetaTag('og:description', 'Smart chatbot for lead capture, booking, and support. Multi-channel deployment across website, WhatsApp, and Meta.', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://yoursite.com/chatbot';
    
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
                    <TrustBadge text="AI Chatbot" />

                    <h1 id="hero-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Smart Chatbot for Your Business
                      </span>
                      <br />
                      <span className="text-gray-900">
                        Lead Capture, Booking & FAQ
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          One bot. Multi-channel. We build your powerful chatbot using Voiceflow, brand it to match your business, and embed it everywhere—website, popup, WhatsApp, and Meta platforms.
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Button 
                      variant="primary"
                      onClick={handleGetStarted}
                      ariaLabel="Get started with chatbot"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={handleViewDemos}
                      ariaLabel="View chatbot demos"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      View Demos
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="pt-4 sm:pt-6 border-t border-gray-200/50">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4">Complete chatbot solution powered by Voiceflow</p>
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
                        Why It Helps
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

          {/* What the Bot Does Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="features-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="Features" />
                <h2 id="features-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    What the Bot Does
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Everything you need to automate conversations and convert visitors into customers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                {botFeatures.map((feature, index) => (
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
                          Our proven 6-step process to build, deploy, and optimize your chatbot across all channels.
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                  One-time setup to build your bot, monthly retainer for ongoing support and optimization.
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
                        Development & Integration
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                        £800 – £2,000
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Paid upfront for bot build, design & channel setup
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Voiceflow conversation design</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Custom UI & branding</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Multi-channel integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Testing & QA</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Deployment & launch</span>
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
                        Support & Optimization
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        £300 – £600
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Monthly fee for updates, monitoring & improvements
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Performance monitoring</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Conversation flow updates</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Bug fixes & tweaks</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Monthly analytics reports</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Priority support</span>
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
                        Ready to Automate Conversations?
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Stop losing leads to slow response times. Launch your smart chatbot in 2 weeks—capture leads, book appointments, and answer questions 24/7 across all channels.
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
                      🤖 AI-Powered • 💬 Multi-Channel • ⚡ Instant Response • 🎨 Branded Experience
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

export default Chatbot;