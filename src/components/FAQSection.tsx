import { useState, memo, useCallback, type ReactNode } from 'react';
import Card from './Card';

// ---- Types ----
interface FAQData {
  category: string;
  question: string;
  answer: string;
}

// ---- Link mapping for bold keywords ----
<<<<<<< HEAD
const pageLinks: Record<string, string> = {
  'AI Chatbots': '/ai-chatbots',
  'Contact': '/contact',
  'Google Ads': '/google-ads',
  'Google Ranking': '/google-ranking',
  'Local SEO': '/google-ranking',
  'Local SEO Ranking': '/google-ranking',
  'SEO Website': '/seo-website',
  'SEO Optimised Websites': '/seo-website',
=======
const getPageLinks = (language: string): Record<string, string> => {
  const baseLinks: Record<string, string> = {
    'Contact': '/contact',
    'Google Ranking': '/ranking',
    'Google Ads': '/ads',
    'SEO Website': '/website',
    'SEO Websites': '/website',
    'Bundel': '/bundel',
    'Complete Bundels': '/bundel',
    'Local SEO Ranking': '/ranking',
    'Local SEO': '/ranking',
    'Pricing': '/pricing',
    'Prijzen': '/pricing',
  };
  
  // Add language-specific form links
  if (language === 'nl') {
    baseLinks['Loom video'] = 'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog';
  } else {
    baseLinks['Loom video'] = 'https://docs.google.com/forms/d/e/1FAIpQLSfJ8aclT9LyywMbioiuLp4UKavLoojglUtuSXbOKKx1b_CgIA/viewform?usp=dialog';
  }
  
  return baseLinks;
>>>>>>> 43a468f (Configure Netlify deployment settings)
};

// ---- Icon ----
const Icon = memo(({ path, className = 'w-5 h-5' }: { path: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
));
Icon.displayName = 'Icon';

// ---- FAQ Item ----
const FAQItem = memo(
  ({
    question,
    answer,
    isOpen,
    onToggle,
  }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
  }) => {
    const renderText = (text: string): ReactNode => {
      const parts: ReactNode[] = [];
      let key = 0;
      const boldRegex = /\*\*(.*?)\*\*/g;
      let lastIndex = 0;

      text.replace(boldRegex, (match, boldText, offset) => {
        if (offset > lastIndex) {
          parts.push(<span key={`text-${key++}`}>{text.slice(lastIndex, offset)}</span>);
        }

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
          parts.push(
            <strong key={`bold-${key++}`} className="font-bold text-gray-900">
              {boldText}
            </strong>
          );
        }

        lastIndex = offset + match.length;
        return match;
      });

      if (lastIndex < text.length) {
        parts.push(<span key={`text-${key++}`}>{text.slice(lastIndex)}</span>);
      }

      return parts.length > 0 ? parts : text;
    };

    return (
      <div
<<<<<<< HEAD
        className="bg-white/80 rounded-lg border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200"
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
=======
        className="bg-black/80 rounded-lg border border-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
>>>>>>> 43a468f (Configure Netlify deployment settings)
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
          aria-expanded={isOpen}
        >
          <h3
<<<<<<< HEAD
            className="text-sm sm:text-base font-bold text-gray-900 flex-1 leading-snug"
            itemProp="name"
=======
            className="text-sm sm:text-base font-bold text-gray-100 flex-1 leading-snug"
>>>>>>> 43a468f (Configure Netlify deployment settings)
          >
            {question}
          </h3>
          <Icon
            path="M19 9l-7 7-7-7"
            className={`w-5 h-5 text-sky-500 flex-shrink-0 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div
            className="px-4 sm:px-5 pb-4 sm:pb-5"
          >
            <div
<<<<<<< HEAD
              className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line"
              itemProp="text"
=======
              className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line"
>>>>>>> 43a468f (Configure Netlify deployment settings)
            >
              {renderText(answer)}
            </div>
          </div>
        )}
      </div>
    );
  }
);
FAQItem.displayName = 'FAQItem';

// ---- Category Accordion ----
const CategoryAccordion = memo(
  ({
    category,
    questions,
    isOpen,
    onToggle,
    openQuestionIndex,
    onQuestionToggle,
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
          <h2 className="text-base sm:text-lg md:text-xl font-black text-gray-900">{category}</h2>
        </div>
        <Icon
          path="M19 9l-7 7-7-7"
          className={`w-6 h-6 text-sky-600 flex-shrink-0 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
  )
);
CategoryAccordion.displayName = 'CategoryAccordion';

// ---- FAQ DATA (static, outside component) ----
const faqs: FAQData[] = [
  // Getting Started
  {
    category: 'Getting Started',
    question: 'How long does Local SEO take to show results?',
    answer:
      'Most clients see improved Google Business Profile rankings within 2-4 weeks, with significant visibility increases over 2-3 months. Local SEO is an ongoing process that builds momentum over time, delivering sustained growth in local search visibility and customer enquiries.',
  },
  {
    category: 'Getting Started',
    question: 'Do you work with businesses outside London?',
    answer:
      'Yes, while we\'re based in London, we work with businesses throughout the UK and internationally. Our digital marketing services including **Local SEO**, **Google Ads**, **SEO Website**, and **AI Chatbots** are delivered remotely to clients worldwide.',
  },
  {
    category: 'Getting Started',
    question: 'What\'s the typical ROI from Google Ads campaigns?',
    answer:
      'Our **Google Ads** clients typically see significant return on ad spend within the first 3 months. We focus on high-intent local searches and conversion optimization to maximize your advertising budget and generate quality leads that convert into paying customers.',
  },
  {
    category: 'Getting Started',
    question: 'Do I need a new website for SEO?',
    answer:
      'Not necessarily. We can optimize your existing website for SEO and conversions. However, if your current site is slow, not mobile-friendly, or built on outdated technology, we recommend building a new conversion-optimised **SEO Website** to maximize results.',
  },

  // Services & Pricing
  {
    category: 'Services & Pricing',
    question: 'What services do you offer exactly?',
    answer:
      'We focus on four core areas: **Google Ranking** (local SEO & GBP optimisation), **Google Ads** (lead-focused campaigns), **SEO Website** (fast, conversion-focused sites), and **AI Chatbots** (24/7 lead capture and client support).',
  },
  {
    category: 'Services & Pricing',
    question: 'How does your pricing work?',
    answer:
      'We combine a one-time setup fee with a monthly retainer for ongoing optimisation and support:\n\n**Local SEO Ranking** - £1,000 setup + From £200/month retainer\n\n**Google Ads** - From £1,000 setup + From £750/month retainer + 10-20% of ad spend (performance fee)\n\n**SEO Optimised Websites** - From £2,500 build + From £200/month retainer for hosting and SEO support\n\n**AI Chatbots** - From £700 setup + From £100/month retainer for support and optimization\n\nPricing may vary based on your niche, location, and scope of work, which we clarify on the first call.',
  },
  {
    category: 'Services & Pricing',
    question: 'Do you offer contracts or can I cancel anytime?',
    answer:
      'Most packages have a minimum term so we have enough time to deliver proper results, especially for **Google Ranking**. After that period, you can scale up, pause, or stop with clear notice terms agreed in advance.',
  },

  // Technical & Support
  {
    category: 'Technical & Support',
    question: 'Do I need technical knowledge to work with you?',
    answer:
      'No. We handle all the technical setup, tracking, and optimisation for **Google Ranking**, **Google Ads**, **SEO Website**, and **AI Chatbots**. You stay focused on running your business while we translate the data into clear actions.',
  },
  {
    category: 'Technical & Support',
    question: 'How do you report results and performance?',
    answer:
      'You get regular reports with clear metrics: rankings, leads, calls, form submissions, ad performance, and website activity. We keep it simple and actionable so you know exactly what you’re getting for your investment.',
  },
  {
    category: 'Technical & Support',
    question: 'What happens if something breaks or I need changes?',
    answer:
      'If anything stops working or you need updates, you contact us via the **Contact** page or email and we handle it. Active clients on a retainer get priority support and ongoing improvements as part of their plan.',
  },

  // About Us
  {
    category: 'About Us',
    question: 'Who is Van Borg Limited and what do you specialise in?',
    answer:
      'Van Borg Limited is a digital marketing partner focused on helping local and service-based businesses win on **Google Ranking**, **Google Ads**, **SEO Website** builds, and **AI Chatbots** that convert visitors into leads.',
  },
  {
    category: 'About Us',
    question: 'What types of businesses do you usually work with?',
    answer:
      'We typically work with local and high-value service businesses that rely on leads and booked jobs: trades, home services, health & wellness, B2B services, and other specialists who benefit from strong local visibility.',
  },
  {
    category: 'About Us',
    question: 'How do I know if we’re a good fit?',
    answer:
      'If you rely on local or inbound leads, want to appear in the top results on Google, and are ready to invest in scalable growth instead of guessing, we’re likely a strong fit. If you’re unsure, book a quick call via the **Contact** page and we’ll tell you straight.',
  },
];

const categories = [
  'Getting Started',
  'Services & Pricing',
  'Technical & Support',
  'About Us',
];

const groupedFAQs = categories.map((category) => ({
  category,
  questions: faqs.filter((faq) => faq.category === category),
}));

const leftColumnCategories = groupedFAQs.slice(0, 2);
const rightColumnCategories = groupedFAQs.slice(2);

// ---- Main Component ----
const FAQSection = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [openQuestionIndices, setOpenQuestionIndices] = useState<Record<number, number | null>>({});

  const handleCategoryToggle = useCallback((index: number) => {
    setOpenCategoryIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleQuestionToggle = useCallback((categoryIndex: number, questionIndex: number) => {
    setOpenQuestionIndices((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex,
    }));
  }, []);

  return (
    <section
<<<<<<< HEAD
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-white"
      itemScope
      itemType="https://schema.org/FAQPage"
=======
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-gray-900"
>>>>>>> 43a468f (Configure Netlify deployment settings)
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card variant="glass" size="medium">
          <div className="space-y-8 sm:space-y-12">
            {/* Header */}
            <header className="text-center space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h1>

              <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-slate-100/90 to-gray-100/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-md">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center">
                  Everything you need to know about our services, pricing, and process. Can&apos;t find your
                  answer?{' '}
                  <a
                    href="https://calendly.com/vanborglimited/book-a-call-vbl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-semibold underline"
                  >
                    Book a free consultation
                  </a>
                  !
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
                    onQuestionToggle={(questionIndex) =>
                      handleQuestionToggle(categoryIndex, questionIndex)
                    }
                  />
                ))}
              </div>

              {/* Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2" />

              {/* Right Column */}
              <div className="space-y-4">
                {rightColumnCategories.map((group, categoryIndex) => {
                  const actualIndex = categoryIndex + 2;
                  return (
                    <CategoryAccordion
                      key={actualIndex}
                      category={group.category}
                      questions={group.questions}
                      isOpen={openCategoryIndex === actualIndex}
                      onToggle={() => handleCategoryToggle(actualIndex)}
                      openQuestionIndex={openQuestionIndices[actualIndex] ?? null}
                      onQuestionToggle={(questionIndex) =>
                        handleQuestionToggle(actualIndex, questionIndex)
                      }
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
