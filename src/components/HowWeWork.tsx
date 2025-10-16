import { memo } from 'react';
import TrustBadge from './TrustBadge';

const HowWeWork = memo(() => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We take time to understand your business, goals, and audience. Then we build a clear plan that fits you.'
    },
    {
      number: '02', 
      title: 'Setup & Implementation',
      description: 'We set up everything you need to get seen on Google, from profiles and campaigns to the tech behind it.'
    },
    {
      number: '03',
      title: 'Launch & Optimize', 
      description: 'We get your systems live, track results, and fine‑tune for max performance, monitoring everything to ensure peak efficiency.'
    },
    {
      number: '04',
      title: 'Scale & Grow',
      description: 'Once it\'s working, we double down, expanding upon what delivers the best results and keeping everything running smoothly.'
    }
  ];

  return (
    <section id="how-we-work" className="bg-gradient-to-br from-white via-gray-50 to-gray-100 relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden" aria-labelledby="how-we-work-heading">
      {/* Background Accents - EXACT same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" role="presentation" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-cyan-50/50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-lg">
            {/* Header */}
            <header className="text-center mb-8 sm:mb-12">
              <div className="inline-block mb-4 sm:mb-6">
                <TrustBadge text="Our Proven Process" />
              </div>
              <h2 id="how-we-work-heading" className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                How We Work
              </h2>
              <div className="relative max-w-fit mx-auto">
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-gray-200/50 shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed whitespace-nowrap">
                    Our approach ensures every project delivers maximum results. <a href="/Contact" className="text-sky-600 hover:text-sky-700 font-semibold underline">Learn more</a>.
                  </p>
                </div>
              </div>
            </header>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr" role="list" aria-label="Our 4-step process">
              {steps.map((step) => (
                <article key={step.number} className="relative group" role="listitem" itemScope itemType="https://schema.org/HowToStep">
                  <div className="relative overflow-hidden bg-gradient-to-br from-sky-100/80 to-cyan-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-200/50 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-sky-300/60 transition-all duration-300 min-h-[200px] group-hover:bg-gradient-to-br group-hover:from-sky-200/90 group-hover:to-cyan-100/90">
                    {/* Decorative Circle - Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-sky-400/40 to-cyan-500/40 rounded-full -mr-6 -mb-6 sm:-mr-8 sm:-mb-8"></div>
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                        {/* Pulse effect */}
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 animate-ping opacity-30"></span>
                        <span className="text-white font-bold text-lg relative z-10">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1" itemProp="name">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <h4 className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4" itemProp="text">
                      {step.description}
                    </h4>

                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});

HowWeWork.displayName = 'HowWeWork';

export default HowWeWork;