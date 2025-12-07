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

Icon.displayName = 'GoogleAdsWhyIcon';

const BENEFITS = [
  {
    title: 'Instant Results',
    subtitle: 'Appear at the top immediately',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Full Budget Control',
    subtitle: 'Turn campaigns on/off anytime',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'High-Intent Traffic',
    subtitle: 'People searching right now',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Clear ROI Tracking',
    subtitle: 'See cost per lead in real time',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Dominate Competitors',
    subtitle: 'Outbid the competition instantly',
    icon: 'M5 12h14m-7-7l7 7-7 7',
  },
] as const;

const GoogleAdsWhyItMatters = memo(() => {
  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-16"
      aria-labelledby="google-ads-why-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <Card variant="glass" size="medium">
          <div className="space-y-6 sm:space-y-8">

            {/* Heading */}
            <header className="text-center space-y-4 sm:space-y-6">
              <h2
                id="google-ads-why-heading"
                className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Why Choose Google Ads
                </span>
              </h2>

              {/* Subtext */}
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/60 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                    Google Ads gives you instant visibility at the top of search results.  
                    You control the spend, the targeting, the ad schedule, 
                    and you only pay when someone actively clicks.  
                    Perfect for fast, predictable lead generation.
                  </p>
                </div>
              </div>
            </header>

            {/* Badges Row */}
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

GoogleAdsWhyItMatters.displayName = 'GoogleAdsWhyItMatters';

export default GoogleAdsWhyItMatters;
