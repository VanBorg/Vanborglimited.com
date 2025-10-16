import { useState, useMemo, memo, useCallback } from 'react';
import Card from './Card';
import TrustBadge from './TrustBadge';

// Icon Component
const Icon = memo(({ path, className = "w-5 h-5" }: { path: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
));

Icon.displayName = 'Icon';

// FAQ Item Component
const FAQItem = memo(({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  // Service pages mapping
  const pageLinks: Record<string, string> = {
    'AI Chatbots': '/AIChatbots',
    'Automations': '/Automations',
    'Contact': '/Contact',
    'Google Ads': '/GoogleAds',
    'Google Ranking': '/GoogleRanking',
    'Lead Gen Funnels': '/LeadGenFunnels',
    'SEO Website': '/SEOWebsite'
  };

  const renderText = (text: string) => {
    const parts: React.ReactNode[] = [];
    let key = 0;

    // Process bold text and links
    const boldRegex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;

    text.replace(boldRegex, (match, boldText, offset) => {
      // Add text before bold
      if (offset > lastIndex) {
        parts.push(<span key={`text-${key++}`}>{text.slice(lastIndex, offset)}</span>);
      }

      // Check if bold text is a page link
      const linkPath = pageLinks[boldText];
      if (linkPath) {
        parts.push(
          <a 
            key={`link-${key++}`}
            href={linkPath}
              className="font-bold text-sky-600 hover:text-sky-700 underline decoration-sky-300 hover:decoration-sky-400 transition-colors duration-200"
            >
              {boldText}
            </a>
          );
        } else {
        parts.push(<strong key={`bold-${key++}`} className="font-bold text-gray-900">{boldText}</strong>);
      }

      lastIndex = offset + match.length;
      return match;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(<span key={`text-${key++}`}>{text.slice(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div 
      className="bg-white/80 rounded-lg border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200"
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1 leading-snug" itemProp="name">
          {question}
        </h3>
          <Icon 
            path="M19 9l-7 7-7-7" 
          className={`w-5 h-5 text-sky-500 flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
      </button>
      
      {isOpen && (
        <div 
          className="px-4 sm:px-5 pb-4 sm:pb-5"
          itemScope 
          itemProp="acceptedAnswer" 
          itemType="https://schema.org/Answer"
        >
          <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line" itemProp="text">
            {renderText(answer)}
          </div>
        </div>
      )}
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

// Category Accordion
const CategoryAccordion = memo(({ 
  category, 
  questions, 
  isOpen, 
  onToggle,
  openQuestionIndex,
  onQuestionToggle
}: {
  category: string;
  questions: Array<{ question: string; answer: string }>;
  isOpen: boolean;
  onToggle: () => void;
  openQuestionIndex: number | null;
  onQuestionToggle: (index: number) => void;
}) => (
  <div className="bg-gradient-to-br from-slate-100/90 to-gray-100/80 rounded-xl border border-slate-200/60 shadow-md hover:shadow-lg transition-all duration-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-3 flex-1">
        <div className="w-2 h-8 sm:h-10 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full flex-shrink-0" />
        <h2 className="text-base sm:text-lg md:text-xl font-black text-gray-900">
          {category}
        </h2>
      </div>
        <Icon 
          path="M19 9l-7 7-7-7" 
        className={`w-6 h-6 text-sky-600 flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
    </button>
    
    {isOpen && (
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3">
        {questions.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openQuestionIndex === index}
            onToggle={() => onQuestionToggle(index)}
          />
        ))}
      </div>
    )}
  </div>
));

CategoryAccordion.displayName = 'CategoryAccordion';

const FAQSection = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [openQuestionIndices, setOpenQuestionIndices] = useState<Record<number, number | null>>({});

  const handleCategoryToggle = useCallback((index: number) => {
    setOpenCategoryIndex(prev => prev === index ? null : index);
    if (openCategoryIndex !== index) {
      setOpenQuestionIndices(prev => ({ ...prev, [index]: null }));
    }
  }, [openCategoryIndex]);

  const handleQuestionToggle = useCallback((categoryIndex: number, questionIndex: number) => {
    setOpenQuestionIndices(prev => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex
    }));
  }, []);

  const faqs = useMemo(() => [
    // Services
    {
      category: 'Services',
      question: 'What services do you offer?',
      answer: `We offer a complete suite of digital marketing and automation services:

• **SEO Website** - High-performance, mobile-first websites optimized for search engines
• **Google Ranking** - Get your business into the top 3 positions on Google Search and Maps
• **Google Ads** - Expert paid advertising campaigns to generate qualified leads
• **Lead Gen Funnels** - Complete lead capture and conversion systems
• **AI Chatbots** - 24/7 automated customer support and lead capture
• **Automations** - Streamline workflows with CRM automation and task management

**Contact** us to learn which services are right for your business.`
    },
    {
      category: 'Services',
      question: 'Do you work with businesses in my industry?',
      answer: `Yes! We work with businesses across all industries:

• Home Services (plumbers, electricians, HVAC, contractors)
• Healthcare (dental practices, clinics, chiropractors)
• Real Estate (agents, brokers, property management)
• Professional Services (lawyers, accountants, consultants)
• Fitness & Wellness (gyms, trainers, studios)
• Restaurants & Hospitality
• And many more!

Our solutions are customized to your specific industry and business needs. **Contact** us to discuss your unique requirements.`
    },
    {
      category: 'Services',
      question: 'Can I choose just one service or do I need everything?',
      answer: `You have complete flexibility! Choose exactly what you need:

**Single Service:** Just need a website? Only want Google Ads? Need help with SEO? No problem.

**Packages:** Combine services for better results and get discounts on bundled packages.

**Our Recommendation:** Most successful clients start with 1-2 core services and expand as they see results.

Visit our **Contact** page to book a free consultation and we'll recommend the best approach for your budget and goals.`
    },
    {
      category: 'Services',
      question: 'What makes your services different?',
      answer: `We stand out in several key ways:

**Modern Technology:** Built with cutting-edge tools like React and AI platforms for fast, mobile-first designs.

**Transparent Pricing:** No hidden fees, clear upfront pricing, flexible payment plans.

**Results-Focused:** Data-driven strategies backed by analytics. We measure success by your ROI.

**Personal Service:** Direct communication with our team, fast response times, dedicated support.

**Proven Track Record:** Real results for real businesses with industry-specific expertise.

**Contact** us to see how we can help your business grow.`
    },
    {
      category: 'Services',
      question: 'Do you offer website redesign or just new websites?',
      answer: `We offer both new websites and redesigns through our **SEO Website** service:

**Website Redesigns:** Modernize outdated designs, improve mobile responsiveness, boost page speed and SEO, preserve existing content and rankings.

**New Websites:** Built from scratch with your brand, custom design and functionality, optimized for conversions from day one.

**Our Process:** Audit your current site, identify improvement opportunities, create a modernization plan, build and test the new design, launch with proper redirects.

**Contact** us to discuss your website needs.`
    },
    {
      category: 'Services',
      question: 'Can you help with ongoing marketing or just setup?',
      answer: `We offer both one-time setups and ongoing management:

**One-Time Projects:** Website build, initial SEO optimization, chatbot setup, CRM implementation, lead funnel creation.

**Ongoing Services:** Monthly SEO optimization, **Google Ads** management, performance monitoring, continuous A/B testing.

**Why Ongoing Management:** Digital marketing isn't "set it and forget it." Markets change, competitors adapt, algorithms evolve.

**Flexible Options:** Start with one-time projects and add ongoing services later. Cancel anytime with 30 days notice.

**Contact** us to discuss your needs.`
    },

    // Pricing
    {
      category: 'Pricing',
      question: 'How much do your services cost?',
      answer: `Our pricing is transparent and competitive:

**One-Time Services:**
• **SEO Website**: From £2,500 (design, development, SEO setup)
• **Google Ranking**: £600 setup (comprehensive local SEO)
• **AI Chatbots**: From £800 (custom build with CRM integration)
• **Automations**: From £500 (workflow automation and setup)
• **Lead Gen Funnels**: Custom pricing (landing pages, forms, email sequences)

**Monthly Services:**
• **Google Ranking**: From £250/month (ongoing optimization)
• **SEO Website**: From £125/month (maintenance & updates)
• **AI Chatbots**: From £150/month (support & updates)
• **Google Ads** Management: £400-£800 setup + £250-£500/month retainer + 10-20% of ad spend

**Note:** Google Ads pricing includes fixed monthly retainer + performance-based ad spend fee for local campaigns.

All prices are starting points. Final quotes depend on your specific needs. **Contact** us for a detailed custom proposal.`
    },
    {
      category: 'Pricing',
      question: 'What are your payment terms?',
      answer: `We offer fair, transparent payment terms:

**One-Time Projects:**
• 40% deposit to begin work
• 60% upon completion and delivery

**Monthly Services:**
• First month paid upfront to start
• Recurring billing on your chosen date
• Cancel anytime with 30 days notice

**Payment Methods:** Bank transfer, credit/debit cards, PayPal, crypto (BTC, Eth, Stablecoins) international wire transfers.

**Contact** us to discuss payment options.`
    },
    {
      category: 'Pricing',
      question: 'Do you offer payment plans?',
      answer: `Yes! For larger projects over £3,000, we offer flexible payment plans:

**Options:** Spread payments across project milestones, monthly installments for large projects, extended payment terms.

**Example:** For a £6,000 website:
• 25% (£1,500) to start
• 25% (£1,500) at design approval
• 25% (£1,500) at development completion
• 25% (£1,500) at final launch

**Who Qualifies:** Projects over £3,000, established businesses, case-by-case evaluation.

**Contact** us to discuss payment plan options.`
    },
    {
      category: 'Pricing',
      question: 'Are there hidden fees?',
      answer: `Absolutely not. We believe in complete transparency.

**What's Included:** All design and development work, initial setup, testing, training, documentation, launch support, 30 days of bug fixes.

**Potential Additional Costs (Separate):**
• Third-party services (Google Ads budget, domain registration, hosting)
• Premium tools (paid plugins, API access)
• Scope changes (new features after project starts)
• Rush fees (expedited delivery)

**We Always:** Discuss all costs upfront, get your approval before additional charges, provide detailed breakdowns.

**Contact** us for a transparent quote.`
    },
    {
      category: 'Pricing',
      question: 'Do you offer discounts?',
      answer: `Yes! We reward clients who invest in comprehensive solutions:

**Package Discounts:**
• 10% off when bundling 2-3 services
• 15% off for complete packages (4+ services)
• 20% off for enterprise-level projects

**Long-Term Discounts:**
• 5% off for 6-month commitments
• 10% off for 12-month contracts
• 15% off for 24-month agreements

**Referral Bonuses:** £50 credit for each referral that becomes a client.

**Nonprofit Discounts:** 20% off for registered charities.

**Contact** us to explore discount opportunities.`
    },

    // Process
    {
      category: 'Process',
      question: 'How long does each service take?',
      answer: `Timeline varies by service:

• **SEO Website**: 1-4 weeks (depending on size and complexity)
• **Google Ranking**: 3-7 days setup, 3-6 months for top rankings
• **Google Ads**: Same day setup, immediate visibility
• **Lead Gen Funnels**: 2-3 weeks (custom builds)
• **AI Chatbots**: 1-2 weeks (with CRM integration)
• **Automations**: 1-2 weeks (workflow setup)

**Factors:** Your response time, content availability, number of revisions, technical complexity.

**Rush Projects:** Available for 25-50% additional fee.

**Contact** us to discuss your timeline needs.`
    },
    {
      category: 'Process',
      question: 'What do you need from me to get started?',
      answer: `Getting started is straightforward:

**Business Information:** Company name, logo, branding, services/products, target audience, competitors.

**Technical Access:** Website hosting (if applicable), domain registrar, Google accounts, CRM platform.

**Content:** Photos, service descriptions, testimonials, team bios, videos.

**Goals:** What success looks like, budget, timeline, design preferences.

**Don't Have Everything?** We can help create content, source photos, write copy, set up accounts.

**Contact** us to get started - we'll guide you through everything.`
    },
    {
      category: 'Process',
      question: 'Will I be able to update things myself?',
      answer: `Absolutely! We build user-friendly solutions you can manage:

**SEO Website:** Easy content management, add/edit pages, update images and text, no coding required.

**AI Chatbots:** Dashboard to update responses, add FAQs, monitor conversations.

**Automations:** Visual workflow editor, turn automations on/off, edit templates.

**Training Included:** Live training session (1-2 hours), video tutorials, written documentation.

**Maintenance Plans:** Available if you prefer us to handle updates (from £300/month).

**Contact** us to discuss your preferred level of involvement.`
    },
    {
      category: 'Process',
      question: 'How do revisions work?',
      answer: `We have a structured but flexible revision process:

**Included Revisions:**
• Website Design: 2-3 rounds of major revisions
• Content/Copy: Unlimited minor edits
• Functionality: Unlimited bug fixes
• Final Polish: Multiple refinement rounds

**Timeline:** Minor changes 1-2 days, major revisions 3-5 days.

**Best Practices:** Be specific, provide examples, consolidate feedback, prioritize changes.

**Scope Changes:** New pages, features, or integrations discussed separately.

**Contact** us to clarify our revision process.`
    },
    // Support
    {
      category: 'Support',
      question: 'What support do you provide after launch?',
      answer: `We offer post-launch support:

**Free Support (All Projects):**
• 30 days of bug fixes
• Email support (24-hour response)
• Basic troubleshooting
• Emergency assistance

**Contact** us to discuss support needs.`
    },
    {
      category: 'Support',
      question: 'Can you maintain my existing website?',
      answer: `Absolutely! We regularly take over existing websites and systems:

**What We Maintain:** WordPress, custom websites, **Google Ads** campaigns, SEO strategies, **Automations**, **AI Chatbots**.

**Our Process:** Free audit, detailed report, transition period, ongoing maintenance.

**Common Fixes:** Slow performance, security issues, broken functionality, poor mobile experience, outdated design.

**Pricing:** £300-£1,000/month depending on complexity.

**Contact** us for a free audit and proposal.`
    },
    {
      category: 'Support',
      question: 'What if my website goes down?',
      answer: `We take emergencies seriously:

**Emergency Response:**
• We have 24/7 support for everyone on a montly retainer.
• No Plan: £150/hour, 12-24 hour response

**Prevention:** Regular backups, uptime monitoring, security scans, performance monitoring.

**Backup & Recovery:** Daily backups, 30-day retention, quick restoration (1-4 hours).

**Contact** us immediately for emergency support.`
    },

    // Technical
    {
      category: 'Technical',
      question: 'What technologies do you use?',
      answer: `We use modern, proven technology:

**Website Development:** React, Tailwind CSS, TypeScript, fast mobile-first architecture.

**SEO & Analytics:** Google Search Console, Google Analytics, SEMrush, technical audits.

**Advertising:** **Google Ads** platform, conversion tracking, retargeting pixels.

**Automation:** n8n, Zapier, Make, custom API integrations.

**AI & Chatbots:** AI-powered platforms with CRM integration, custom training.

**Why These:** Fast, reliable, SEO-friendly, secure, scalable, cost-effective.

**Contact** us to discuss technical requirements.`
    },
    {
      category: 'Technical',
      question: 'Do you provide hosting and domains?',
      answer: `We help you set up hosting and domains but don't provide them directly:

**Why:** Avoids vendor lock-in, you own everything, direct billing from host, more flexibility.

**What We Do:** Recommend reliable providers, help purchase plans, handle technical setup, configure DNS, migrate websites.

**Recommended Providers:**
• Hosting: Hostinger, SiteGround, WP Engine, Netlify
• Domains: Namecheap, Google Domains, Cloudflare
• Email: Google Workspace, Microsoft 365

**Typical Costs:** Hosting £50-£300/year, Domain £10-£20/year, Email £0-£100/user/year.

**Contact** us for hosting recommendations.`
    },
    {
      category: 'Technical',
      question: 'How do you ensure security?',
      answer: `Security is a top priority:

**Security Measures:** Secure coding practices, SSL/HTTPS encryption, regular updates, firewall protection, access control, monitoring, data protection.

**Compliance:** GDPR compliant, PCI DSS for e-commerce, WCAG accessibility, industry best practices.

**What You Should Do:** Use strong passwords, enable 2FA, don't share credentials, report suspicious activity.

**If Issues Occur:** Immediate response, containment, fix vulnerability, restore backups, investigate, prevent future issues.

**Contact** us about security requirements.`
    },
    {
      category: 'Technical',
      question: 'Will my website be mobile-friendly?',
      answer: `Absolutely! Mobile-first design is standard in all our **SEO Website** builds:

**Why It Matters:** Over 60% of web traffic is mobile, Google uses mobile-first indexing, affects rankings.

**Our Optimization:** Responsive design, fast mobile performance, touch-friendly navigation, mobile features (click-to-call, tap-to-email).

**Testing:** Real device testing (iOS and Android), multiple screen sizes, various browsers, performance benchmarking.

**Performance:** Under 3 seconds load time, 90+ PageSpeed score, pass Core Web Vitals.

**Contact** us to see mobile examples.`
    },

    // Getting Started
    {
      category: 'Getting Started',
      question: 'How do I get started?',
      answer: `Getting started is quick and easy:

**Step 1:** Visit our **Contact** page and book a free 15-30 minute call.

**Step 2:** Discovery call - tell us about your business, goals, and challenges.

**Step 3:** Custom proposal (1-2 days) - detailed scope, pricing, timeline.

**Step 4:** Review and ask questions - no pressure to commit.

**Step 5:** Agreement & deposit - sign digital agreement, pay 40% deposit.

**Step 6:** Project kickoff (1-3 days) - kickoff call, gather information, start work.

**Typical Timeline:** Usually under 2 weeks from first call to project start.

**Contact** us now to begin!`
    },
    {
      category: 'Getting Started',
      question: 'Do you offer free consultations?',
      answer: `Yes! Every potential client gets a free, no-obligation consultation:

**What's Included:** 30-minute call, learn about your business, discuss which services make sense, provide honest recommendations, answer questions, ballpark pricing.

**What We Won't Do:** High-pressure sales, exaggerate results, guarantee impossible rankings, push unnecessary services, make you feel obligated.

**What to Prepare:** Business info, current challenges, goals, budget range, questions.

**After the Call:** Call summary email, custom proposal if interested, helpful resources, no spam.

Visit our **Contact** page to book your free consultation today!`
    },
    {
      category: 'Getting Started',
      question: 'What if I\'m not sure what I need?',
      answer: `That's perfectly normal! Most clients aren't sure exactly what they need:

**Common Questions:**
• "Should I start with a website or SEO?" - We'll assess what gives you the fastest ROI.
• "Is **Google Ads** or **Google Ranking** better?" - Different purposes! We'll explain both.
• "What about AI and automation?" - We'll identify what's worth automating first.

**Our Process:** Ask discovery questions, analyze your situation, identify opportunities, prioritize based on budget, create phased roadmap, start with highest-impact service.

**Typical Recommendations:**
• Service businesses: Start with **Google Ranking** + **Google Ads**
• E-commerce: **SEO Website** + **Google Ads**
• Coaches/Consultants: **Lead Gen Funnels** + SEO
• Restaurants: **Google Ranking** + website

Visit our **Contact** page to get custom recommendations!`
    },
    {
      category: 'Getting Started',
      question: 'Can I see examples of your work?',
      answer: `Absolutely! We're proud of our work:

**What We Can Show:**
• Live websites we've built
• Before/after redesigns
• SEO ranking improvements
• **Google Ads** performance data
• **Automations** workflow examples

**How to View:** During consultation call we'll screen-share relevant examples and discuss projects similar to yours.

**Industry-Specific:** Tell us your industry and we'll show relevant examples from home services, healthcare, real estate, professional services, e-commerce, fitness, restaurants.

**Client Testimonials:** Google Business reviews, written testimonials, video testimonials, LinkedIn recommendations.

**Contact** us to see work relevant to your industry!`
    },

    // About Us
    {
      category: 'About Us',
      question: 'Where are you located?',
      answer: `We're based in the UK but work with clients worldwide:

**Our Location:** Headquarters in the United Kingdom, remote-first structure, team distributed globally.

**Where We Work:** UK, Europe, United States, Canada, Australia & New Zealand, any English-speaking market.

**Benefits:** Lower costs, flexible scheduling, best talent globally, modern communication tools.

**Communication:** Video calls, email, project management tools, async communication when needed.

**Time Zone Flexibility:** Schedule calls that work for you, 12-24 hour email response times.

**Contact** us - distance won't be an issue!`
    },
    {
      category: 'About Us',
      question: 'How experienced are you?',
      answer: `We're a modern digital agency focused on results:

**Our Experience:** 10+ years combined experience across our team, proven track record with measurable results, dozens of successful projects.

**Team Background:**
• SEO Specialists: 5+ years
• Web Developers: 8+ years
• **Google Ads** Experts: 6+ years
• Automation Engineers: 4+ years

**Why Experience Matters:** We know what works, navigate Google changes, develop industry-specific strategies, deliver efficiently.

**What Actually Matters:** Do we get results? (Yes), use modern technology? (Yes), communicate well? (Yes), deliver on time? (Yes), affordable? (Yes).

**Contact** us to judge our expertise yourself!`
    },
    {
      category: 'About Us',
      question: 'What industries do you specialize in?',
      answer: `We work across all industries with specialized experience:

**Core Industries:**
• Home Services (plumbers, electricians, HVAC, contractors)
• Healthcare (dental, medical, chiropractic, veterinary)
• Professional Services (lawyers, accountants, consultants, real estate)
• E-commerce & Retail
• Fitness & Wellness (gyms, trainers, studios, spas)
• Restaurants & Hospitality

**Other Industries:** Automotive, education, non-profits, technology, manufacturing, photography, and more.

**Industry-Specific Strategies:** We understand your competition, customer journey, seasonal factors, regulatory requirements, industry keywords.

**Not Listed?** Our services work for any business with customers who use Google Search.

**Contact** us to discuss your specific industry!`
    },

    // Guarantees
    {
      category: 'Guarantees',
      question: 'What is your refund policy?',
      answer: `Our policy is fair and transparent:

**Before Work Starts:** 100% refund of deposit if we haven't begun.

**During Project:** Partial refund based on work completed.

**After Completion:** No refunds, but we'll fix any issues for free.

**Monthly Services:** Cancel anytime with 30 days notice, no cancellation fees.

**What We Won't Refund:** Third-party costs (domains, hosting, ads), completed work you approved, scope changes you requested.

**Contact** us for clarification on our policy.`
    },
    {
      category: 'Guarantees',
      question: 'Do you guarantee results?',
      answer: `We guarantee quality and effort:

**What We GUARANTEE:** Professional high-quality work, on-time delivery, responsive support, best practices, honest strategies, transparent reporting.

**What We CAN'T Guarantee:** Specific Google rankings (Google controls algorithm), exact number of leads (many variables), guaranteed ROI percentages, instant results.

**Why No Ranking Guarantees:** Google's algorithm changes constantly, 200+ ranking factors, competitors optimize too, competitiveness varies. Anyone promising #1 rankings is lying.

**What You CAN Expect:** Significant visibility improvement, increased qualified traffic, better conversion rates, measurable ROI over time.

**Contact** us for realistic expectations and honest assessment.`
    },
    {
      category: 'Guarantees',
      question: 'What if I\'m not satisfied?',
      answer: `Your satisfaction is our top priority:

**Our Process:**
1. Tell us immediately - explain what you're unhappy with
2. Collaborative discussion - understand the issue
3. Action plan - detailed revision plan with timeline
4. Implementation - make necessary revisions
5. Review & approval - present improvements

**If We Can't Resolve:** Discuss partial refunds, provide all files and work done, end relationship professionally.

**Common Issues:** "Not what I imagined" → We'll revise, "Features don't work" → We'll fix bugs, "Not converting" → We'll optimize, "Poor communication" → We'll improve.

**Prevention:** Regular check-ins, clear communication, detailed briefs, milestone approvals.

**Contact** us immediately with any concerns.`
    }
  ], []);

  const groupedFAQs = useMemo(() => {
    const categories = ['Services', 'Pricing', 'Process', 'Support', 'Technical', 'Getting Started', 'About Us', 'Guarantees'];
    return categories.map(category => ({
      category,
      questions: faqs.filter(faq => faq.category === category)
    }));
  }, [faqs]);

  const leftColumnCategories = useMemo(() => groupedFAQs.slice(0, 4), [groupedFAQs]);
  const rightColumnCategories = useMemo(() => groupedFAQs.slice(4, 8), [groupedFAQs]);

  return (
    <section 
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card variant="glass" size="medium">
          <div className="space-y-8 sm:space-y-12">
            {/* Header */}
            <header className="text-center space-y-4">
              <TrustBadge text="Questions & Answers" />
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h1>

              <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-slate-100/90 to-gray-100/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-md">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center">
                  Everything you need to know about our services, pricing, and process. Can't find your answer? <a href="/Contact" className="text-sky-600 hover:text-sky-700 font-semibold underline">Book a free consultation</a>!
                </p>
              </div>
            </header>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 relative">
              {/* Left Column */}
              <div className="space-y-4">
                {leftColumnCategories.map((group, categoryIndex) => (
                  <CategoryAccordion
                    key={categoryIndex}
                    category={group.category}
                    questions={group.questions}
                    isOpen={openCategoryIndex === categoryIndex}
                    onToggle={() => handleCategoryToggle(categoryIndex)}
                    openQuestionIndex={openQuestionIndices[categoryIndex] ?? null}
                    onQuestionToggle={(questionIndex) => handleQuestionToggle(categoryIndex, questionIndex)}
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2" />

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnCategories.map((group, categoryIndex) => {
                  const actualIndex = categoryIndex + 4;
                  return (
                    <CategoryAccordion
                      key={actualIndex}
                      category={group.category}
                      questions={group.questions}
                      isOpen={openCategoryIndex === actualIndex}
                      onToggle={() => handleCategoryToggle(actualIndex)}
                      openQuestionIndex={openQuestionIndices[actualIndex] ?? null}
                      onQuestionToggle={(questionIndex) => handleQuestionToggle(actualIndex, questionIndex)}
                    />
                  );
                })}
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;