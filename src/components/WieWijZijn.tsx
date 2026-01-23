import { memo } from 'react';
import Card from './Card';
import { useI18n } from '../i18n/context';

const WieWijZijn = memo(() => {
  const { t, language } = useI18n();
  
  const handleRequestVideo = () => {
    // Open Google Form for video request
    // NL: Dutch form, EN: English form
    const formUrl = language === 'nl' 
      ? 'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog'
      : 'https://docs.google.com/forms/d/e/1FAIpQLSfJ8aclT9LyywMbioiuLp4UKavLoojglUtuSXbOKKx1b_CgIA/viewform?usp=dialog';
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <section
      id="wie-wij-zijn"
      className="bg-black relative w-full py-12 sm:py-16 lg:py-20"
      aria-labelledby="wie-wij-zijn-heading"
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card variant="default" size="medium" className="bg-gray-900 pb-6 sm:pb-8 overflow-visible">
            {/* Header */}
            <header className="text-center mb-8 sm:mb-12 space-y-4">
              <h2
                id="wie-wij-zijn-heading"
                className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent leading-tight pb-1"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                {t.aboutUs.title}
              </h2>

              <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-black rounded-xl border border-gray-800/50 shadow-md">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-300 text-center">
                  {t.aboutUs.subheader}
                  {' '}
                  <button
                    type="button"
                    onClick={handleRequestVideo}
                    className="text-sky-600 hover:text-sky-700 font-semibold underline focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label={t.aboutUs.videoLink}
                  >
                    {t.aboutUs.videoLink}
                  </button>
                </p>
              </div>
            </header>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <article className="bg-black rounded-xl p-6 border border-gray-800/50 shadow-sm overflow-visible">
                  <p className="text-sm sm:text-base text-gray-200 leading-[1.8] whitespace-pre-line pb-0.5">
                    {t.aboutUs.mission.description}
                  </p>
                </article>

                <div className="bg-black rounded-xl p-6 border border-gray-800/50 shadow-sm overflow-visible flex self-stretch">
                  <img 
                    src="/images/van-borg-main.png" 
                    alt="Van Borg Limited - Google Ranking & Digital Marketing Services"
                    className="w-full h-full rounded-lg object-contain"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Benefits section under the two boxes */}
              <div className="bg-black rounded-xl p-6 border border-gray-800/50 shadow-sm overflow-visible">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                  {/* Top 3 Visibility */}
                  <article className="relative overflow-hidden bg-black rounded-xl p-5 border border-gray-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex justify-center mb-3" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-base font-bold text-white">
                        {t.aboutUs.whatWeDo.benefits.visibility.title}
                      </h3>
                    </div>
                  </article>

                  {/* Direct Traffic */}
                  <article className="relative overflow-hidden bg-black rounded-xl p-5 border border-gray-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex justify-center mb-3" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-base font-bold text-white">
                        {t.aboutUs.whatWeDo.benefits.traffic.title}
                      </h3>
                    </div>
                  </article>

                  {/* Profitable Enquiries */}
                  <article className="relative overflow-hidden bg-black rounded-xl p-5 border border-gray-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex justify-center mb-3" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-base font-bold text-white">
                        {t.aboutUs.whatWeDo.benefits.enquiries.title}
                      </h3>
                    </div>
                  </article>

                  {/* Conversion Focus */}
                  <article className="relative overflow-hidden bg-black rounded-xl p-5 border border-gray-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex justify-center mb-3" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-base font-bold text-white">
                        {t.aboutUs.whatWeDo.benefits.conversion.title}
                      </h3>
                    </div>
                  </article>

                  {/* Measurable Results */}
                  <article className="relative overflow-hidden bg-black rounded-xl p-5 border border-gray-800/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="flex justify-center mb-3" aria-hidden="true">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center relative z-10">
                      <h3 className="text-base font-bold text-white">
                        {t.aboutUs.whatWeDo.benefits.results.title}
                      </h3>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

WieWijZijn.displayName = 'WieWijZijn';

export default WieWijZijn;
