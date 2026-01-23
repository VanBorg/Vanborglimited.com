import { memo, useState, useEffect, useCallback } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Onboarding Call',
    description:
      'We schedule a call to align on your objectives, confirm pricing, and outline the action plan.',
  },
  {
    number: '02',
    title: 'Setup & Launch',
    description:
      'We overhaul your GBP, improve on‑site SEO, and build citations to prepare for ranking.',
  },
  {
    number: '03',
    title: 'Weekly Updates',
    description:
      'Ongoing updates every week, with consistent work to push your rankings higher.',
  },
  {
    number: '04',
    title: 'Long-Term Retainer',
    description:
      'We maintain your top rankings and scale with services like ads, websites, and automations.',
  },
];

const HowWeWork = memo(() => {
<<<<<<< HEAD
=======
  const { t, language } = useI18n();
>>>>>>> 43a468f (Configure Netlify deployment settings)
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + slidesPerView) % STEPS.length;
      return next;
    });
  }, [slidesPerView]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - slidesPerView + STEPS.length) % STEPS.length;
      return next;
    });
  }, [slidesPerView]);

  const translatePercentage = (100 / slidesPerView) * currentIndex;

  const totalPages = Math.ceil(STEPS.length / slidesPerView);
  const activePage = Math.floor(currentIndex / slidesPerView);

  return (
    <section
      id="how-we-work"
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        role="presentation"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-cyan-50/50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-lg">
            {/* Header */}
            <header className="text-center mb-8 sm:mb-12">
              <h2
                id="how-we-work-heading"
                className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
                style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                How We Work
              </h2>
<<<<<<< HEAD
              <div className="relative max-w-fit mx-auto">
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-gray-200/50 shadow-sm">
                  <h3 className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold leading-relaxed">
                    Simple, transparent, and built to get you into Google&apos;s top 5 for local search (we don&apos;t promise top 5).{' '}
                    <a
                      href="/contact"
                      className="text-sky-600 hover:text-sky-700 underline decoration-2 underline-offset-2"
                    >
                      Get in touch
                    </a>{' '}
                    and let&apos;s talk.
                  </h3>
=======

              {/* Pricing link in black box */}
              <div className="relative max-w-3xl mx-auto mt-4">
                <div className="bg-black rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-gray-800/70 shadow-sm">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                    {t.howWeWork.description.split('?')[0]}?{' '}
                    <a
                      href="/pricing"
                      className="text-sky-600 hover:text-sky-700 font-semibold underline"
                    >
                      {language === 'nl' ? 'Bekijk prijzen' : 'View pricing'}
                    </a>
                  </p>
>>>>>>> 43a468f (Configure Netlify deployment settings)
                </div>
              </div>
            </header>

            {/* Carousel */}
            <div className="relative" aria-label="Our 4-step process">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out pb-4"
                  style={{
                    transform: `translateX(-${translatePercentage}%)`,
                  }}
                >
                  {STEPS.map((step) => (
                    <article
                      key={step.number}
                      className="flex-shrink-0 w-full lg:w-1/2 px-1 sm:px-2"
                      role="listitem"
                      itemScope
                      itemType="https://schema.org/HowToStep"
                    >
                      <div className="relative group h-full">
                        <div className="relative overflow-hidden bg-gradient-to-br from-sky-100/80 to-cyan-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-sky-200/50 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-sky-300/60 transition-all duration-300 min-h-[170px] group-hover:bg-gradient-to-br group-hover:from-sky-200/90 group-hover:to-cyan-100/90">
                          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-sky-400/40 to-cyan-500/40 rounded-full -mr-6 -mt-6 sm:-mr-8 sm:-mt-8" />

                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300"
                              aria-hidden="true"
                            >
                              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 animate-ping opacity-30" />
                              <span className="text-white font-bold text-lg relative z-10">
                                {step.number}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3
                                className="text-lg sm:text-xl font-semibold text-gray-900 mb-1"
                                itemProp="name"
                              >
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p
                            className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2"
                            itemProp="text"
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Controls + Dots */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                  aria-label="Previous step"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const isActive = index === activePage;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentIndex(index * slidesPerView)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          isActive
                            ? 'bg-sky-600 scale-110'
                            : 'bg-sky-300/70 hover:bg-sky-400'
                        }`}
                        aria-label={`Go to step group ${index + 1}`}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                  aria-label="Next step"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HowWeWork.displayName = 'HowWeWork';

export default HowWeWork;
