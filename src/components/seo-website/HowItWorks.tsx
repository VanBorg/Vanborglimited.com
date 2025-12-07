import { memo } from 'react';
import Card from '../Card';

const Icon = memo(
  ({ path, className = 'w-6 h-6 sm:w-7 sm:h-7 text-white' }: { path: string; className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  ),
);

Icon.displayName = 'SEOWebsiteHowIcon';

const STEPS = [
  {
    number: '1',
    title: 'Discovery & Strategy',
    description:
      'Define goals, target audience, pages needed, SEO strategy, keyword research, and complete content planning.',
    timeline: 'Week 1',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    number: '2',
    title: 'Design & Development',
    description:
      'Create homepage, service pages, lead capture funnels, booking flows, and all conversion-focused elements with SEO optimization.',
    timeline: 'Week 1-2',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    number: '3',
    title: 'Integration & Testing',
    description:
      'Connect forms, booking systems, analytics, CRM integrations, and thoroughly test all user flows and functionality.',
    timeline: 'Week 2-3',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    number: '4',
    title: 'Launch & Optimization',
    description:
      'Go live, submit to search engines, monitor performance, and optimize based on real data with ongoing support.',
    timeline: 'Week 3',
    icon: 'M5 10l7-7m0 0l7 7m-7-7v18',
  },
] as const;

const SEOWebsiteHowItWorks = memo(() => {
  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-16"
      aria-labelledby="seo-how-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <Card variant="glass" size="medium">
          <div className="space-y-6 sm:space-y-8">
            {/* Header */}
            <header className="text-center space-y-4 sm:space-y-6">
              <h2
                id="seo-how-heading"
                className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/50 bg-gray-100 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                    Our streamlined 4-step process to design, build, and launch your SEO-optimized website in just 3 weeks.
                  </p>
                </div>
              </div>
            </header>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-xl border border-sky-200/60 bg-gradient-to-br from-sky-50 to-cyan-50 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
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
                      <p className="text-[11px] sm:text-xs font-semibold text-sky-800/80">
                        {step.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});

SEOWebsiteHowItWorks.displayName = 'SEOWebsiteHowItWorks';

export default SEOWebsiteHowItWorks;
