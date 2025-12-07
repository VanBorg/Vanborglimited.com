import { memo } from 'react';
import Card from '../Card';

const Icon = memo(
  ({ path, className = 'w-6 h-6 sm:w-7 sm:h-7 text-white' }: { path: string; className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  )
);

Icon.displayName = 'HowItWorksIcon';

const STEPS = [
  {
    number: '1',
    title: 'Onboarding Call & Loom Audit',
    description:
      'We jump on an onboarding call, review your Google presence, and send a short Loom video walking through your current situation and the game plan.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    number: '2',
    title: 'Initial Setup & Build',
    description:
      'We fix core GBP and on-site SEO issues, set up tracking, define your keyword plan, and start building the foundations that move you up in Google Maps and local search.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    number: '3',
    title: 'Weekly Updates & Monthly Reports',
    description:
      'You get clear weekly updates on what we’ve done and how rankings are moving, plus a structured monthly report that shows progress, leads, and next steps.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    number: '4',
    title: 'Retainer & Staying on Top',
    description:
      'We keep you ranking at the top with ongoing optimisation: content, citations, reviews, and technical tweaks, so you stay ahead of local competitors long term.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
];

const HowItWorks = memo(() => {
  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-16"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <Card variant="glass" size="medium">
          <div className="space-y-6 sm:space-y-8">
            
            {/* HEADER */}
            <header className="text-center space-y-4 sm:space-y-6">
              <h2
                id="process-heading"
                className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  How We Work
                </span>
              </h2>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/60 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                    A clean, simple 4-step process that gets you ranking higher on Google Maps and local search, and keeps you there.
                  </p>
                </div>
              </div>
            </header>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
              {STEPS.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-cyan-50/60 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                        <Icon path={step.icon} />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-600 text-white text-xs font-bold rounded-full">
                          {step.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black tracking-tight text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
