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

Icon.displayName = 'ChatbotWhyIcon';

const BENEFITS = [
  {
    title: 'Convert Visitors Instantly',
    subtitle: 'Turn browsers into leads 24/7',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Reduce Support Workload',
    subtitle: 'Automate FAQs & simple tasks',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Available 24/7',
    subtitle: 'Always on, never sleeps',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Consistent Brand Experience',
    subtitle: 'On-brand replies every time',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Boost Bookings & Sales',
    subtitle: 'Capture emails, calls & payments',
    icon: 'M5 12h14m-7-7l7 7-7 7',
  },
] as const;

const ChatbotWhyItHelps = memo(() => {
  return (
    <section
      className="relative w-full py-8 sm:py-12 lg:py-16"
      aria-labelledby="chatbot-benefits-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <Card variant="glass" size="medium">
          <div className="space-y-6 sm:space-y-8">

            {/* Heading */}
            <header className="text-center space-y-4 sm:space-y-6">
              <h2
                id="chatbot-benefits-heading"
                className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Why Your AI Chatbot Helps
                </span>
              </h2>

              {/* Subtext */}
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/60 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                    A well-built AI chatbot acts as a 24/7 sales assistant. It answers questions instantly, books calls,
                    captures leads, and handles repetitive support, giving your business more sales with less effort.
                  </p>
                </div>
              </div>
            </header>

            {/* Badge Row */}
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

ChatbotWhyItHelps.displayName = 'ChatbotWhyItHelps';

export default ChatbotWhyItHelps;
