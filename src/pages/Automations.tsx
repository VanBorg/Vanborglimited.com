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

const Automations = () => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewExamples = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  // Memoized static data

  const automationFeatures = useMemo(() => [
    {
      iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: 'Email Reminders & Followups',
      description: 'Automated email sequences for lead nurturing, appointment reminders, abandoned cart followups, and post-purchase engagement.',
      features: ['Drip campaigns', 'Reminder sequences', 'Trigger-based emails', 'Personalization']
    },
    {
      iconPath: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      title: 'SMS / WhatsApp Triggers & Nudges',
      description: 'Send automated SMS and WhatsApp messages for urgent notifications, appointment confirmations, payment reminders, and status updates.',
      features: ['SMS alerts', 'WhatsApp messages', 'Two-way messaging', 'Delivery tracking']
    },
    {
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      title: 'Lead Capture → Trigger Workflows',
      description: 'Instantly route new leads from forms, chatbots, or ads into automated workflows for qualification, assignment, and nurturing.',
      features: ['Form webhooks', 'Auto-assignment', 'Lead scoring', 'Instant notifications']
    },
    {
      iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      title: 'CRM Sync & Updates',
      description: 'Keep your CRM data synchronized across platforms—automatically create, update, and enrich contact records from multiple sources.',
      features: ['Bi-directional sync', 'Data enrichment', 'Duplicate prevention', 'Field mapping']
    },
    {
      iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: 'Calendar Integration & Event Reminders',
      description: 'Sync calendars, send meeting reminders, handle rescheduling, and trigger workflows based on scheduled events.',
      features: ['Google Calendar', 'Outlook sync', 'Event webhooks', 'Smart reminders']
    },
    {
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: 'Analytics & Logging',
      description: 'Track workflow executions, monitor success rates, log all actions, and get insights into automation performance.',
      features: ['Execution logs', 'Success metrics', 'Error tracking', 'Performance reports']
    }
  ], []);

  const benefits = useMemo(() => [
    { 
      title: 'Save Time & Reduce Manual Work', 
      description: 'Eliminate repetitive tasks and free your team to focus on high-value work that requires human attention',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      stat: 'Hours saved'
    },
    { 
      title: 'Consistency & Reliability', 
      description: 'Never miss a followup or reminder—automated workflows run perfectly every time without human error',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      stat: 'Zero errors'
    },
    { 
      title: 'Prevent Missed Leads', 
      description: 'Instantly capture, route, and respond to every lead before they go cold or move to a competitor',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      stat: 'Instant response'
    },
    { 
      title: 'Seamless System Connectivity', 
      description: 'Connect all your tools—CRM, email, SMS, WhatsApp, calendars, databases—into one unified automation system',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
      stat: 'All connected'
    }
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: '1',
      title: 'Onboarding & Discovery',
      description: 'Define automation goals, map out systems, identify triggers and actions, and gather API access credentials.',
      timeline: 'Days 1-2',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      number: '2',
      title: 'Design & Architecture',
      description: 'Map workflow logic, design decision trees, plan API integrations, and create visual flow diagrams.',
      timeline: 'Days 3-4',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      number: '3',
      title: 'Build & Integration',
      description: 'Configure webhooks, connect APIs, build n8n workflows, set up conditional logic and error handling.',
      timeline: 'Days 5-8',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      number: '4',
      title: 'Testing & Launch',
      description: 'Test all workflow paths, edge cases, and integrations. Launch with monitoring and make initial optimizations.',
      timeline: 'Days 9-10',
      icon: 'M5 10l7-7m0 0l7 7m-7-7v18'
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'n8n Platform', description: 'Workflow engine' },
    { name: 'Webhooks', description: 'Real-time triggers' },
    { name: 'API Integration', description: 'System connectivity' },
    { name: 'Email & SMS', description: 'Multi-channel' },
    { name: 'CRM Sync', description: 'Data management' },
    { name: 'Analytics', description: 'Performance tracking' }
  ], []);

  // SEO: Set meta tags and structured data
  useEffect(() => {
    document.title = 'Workflow Automation with n8n | Business Process Automation Services';
    
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

    setMetaTag('description', 'Smart business automation with n8n. Email reminders, SMS triggers, CRM syncs, calendar integration, and workflow automation to run your backend efficiently.');
    setMetaTag('keywords', 'workflow automation, n8n automation, business process automation, CRM sync, email automation, SMS automation, webhook integration');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://yoursite.com/automations', true);
    setMetaTag('og:title', 'Workflow Automation with n8n | Business Automation', true);
    setMetaTag('og:description', 'Smart automations for reminders, CRM syncs, triggers, and seamless system connectivity.', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://yoursite.com/automations';
    
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
                    <TrustBadge text="Workflow Automation" />

                    <h1 id="hero-heading" className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Smart Automations with n8n
                      </span>
                      <br />
                      <span className="text-gray-900">
                        Reminders, Syncs & Triggers
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          From emails, SMS and WhatsApp to CRM and calendar syncs—automation built to run your backend. One system using webhooks and API keys to connect everything.
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
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3 sm:mb-4">Complete automation system powered by n8n</p>
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

          {/* What Automations You Get Section */}
          <section className="relative w-full py-8 sm:py-12 lg:py-16" aria-labelledby="features-heading">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-8 sm:mb-12">
                <TrustBadge text="Automation Features" />
                <h2 id="features-heading" className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    What Automations You Get
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Comprehensive workflow automation to connect your systems and eliminate manual tasks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list">
                {automationFeatures.map((feature, index) => (
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
                          Our streamlined 4-step process to design, build, and launch your automation workflows in 1-2 weeks.
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
                    Pricing & Support
                  </span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  One-time setup to build your automations, monthly retainer for monitoring, maintenance, and support.
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
                        Automation Build
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                        £800 – £2,500
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Paid upfront or in parts for workflow design & setup
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Workflow design & architecture</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">n8n workflow configuration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">API & webhook integration</span>
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
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Launch & monitoring setup</span>
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
                        Support & Maintenance
                      </h3>
                      
                      <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        £200 – £800
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Monthly fee for monitoring, updates & optimization
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Workflow monitoring</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Bug fixes & adjustments</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Small workflow changes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Performance optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Monthly usage reports</span>
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
                        Ready to Automate Your Business?
                      </span>
                    </h2>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                          Stop wasting time on repetitive tasks. Launch smart automations in 1-2 weeks—connect your CRM, automate followups, sync calendars, and eliminate manual work forever.
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
                      ⚡ Workflow Automation • 🔗 System Integration • 📧 Multi-Channel • 🤖 Powered by n8n
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

export default Automations;