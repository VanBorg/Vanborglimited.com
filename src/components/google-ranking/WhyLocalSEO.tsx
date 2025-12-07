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

Icon.displayName = 'WhyLocalSEOIcon';

const BENEFITS = [
  {
    title: 'Get Into the Top 3',
    subtitle: 'Google Maps & local pack visibility',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'More Calls & Enquiries',
    subtitle: 'Higher click-through from better rankings',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Trusted Over Competitors',
    subtitle: 'Rank + reviews = safest local choice',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Lower Cost Per Lead',
    subtitle: 'More organic leads, less ad spend',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Defend Your Position',
    subtitle: 'Harder for others to outrank you',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
];

const WhyLocalSEO = memo(() => {
  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-16"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <Card variant="glass" size="medium">
          <div className="space-y-6 sm:space-y-8">
            {/* Heading */}
            <header className="text-center space-y-4 sm:space-y-6">
              <h2
                id="benefits-heading"
                className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Why Local SEO Matters
                </span>
              </h2>

              {/* Subtext explainer box */}
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/60 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                    Strong Google rankings put you in front of ready-to-buy local customers. Instead of chasing leads,
                    you show up where they search, and turn Google into a steady, high-intent lead source.
                  </p>
                </div>
              </div>
            </header>

            {/* Benefit badges row */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm"
                >
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500">
                    <Icon path={benefit.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">
                      {benefit.title}
                    </span>
                    {benefit.subtitle && (
                      <span className="text-[11px] sm:text-xs text-sky-900/80">
                        {benefit.subtitle}
                      </span>
                    )}
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

WhyLocalSEO.displayName = 'WhyLocalSEO';

export default WhyLocalSEO;
