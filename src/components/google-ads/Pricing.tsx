import { memo } from 'react';
import Card from '../Card';

const GoogleAdsPricing = memo(() => {
  return (
    <section
      className="relative w-full bg-white py-8 sm:py-12 lg:py-16"
      aria-labelledby="google-ads-pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-50 border border-gray-200/70 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="text-center">
            <h2
              id="google-ads-pricing-heading"
              className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
            >
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="rounded-2xl border border-gray-300/70 bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We accept card, bank, and crypto payments, and offer a 10% discount for those paying in Bitcoin ($BTC).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Setup Fee */}
            <Card variant="glass" size="medium">
            <div className="relative space-y-6">
              <div className="text-center space-y-3 sm:space-y-4 pt-4">
                <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  ONE-TIME
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-gray-900">Setup Fee</h3>

                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  From £1,000
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Paid upfront to build and launch your campaigns
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Account setup &amp; structure</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Keyword research &amp; targeting</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Ad copy creation &amp; testing
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Conversion tracking setup
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Monthly Retainer */}
          <Card variant="glass" size="medium" className="ring-2 ring-emerald-500 ring-offset-4 ring-offset-gray-50">
            <div className="relative space-y-6">
              <div className="text-center space-y-3 sm:space-y-4 pt-4">
                <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  MONTHLY BASE
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  Retainer
                </h3>
                
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  From £750/mo
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Your fee to pay for the ads and the support.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Daily campaign monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Bid optimization &amp; adjustments
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">A/B testing &amp; experiments</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Monthly performance reports</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Performance Fee */}
          <Card variant="glass" size="medium">
            <div className="relative space-y-6">
              <div className="text-center space-y-3 sm:space-y-4 pt-4">
                <div className="inline-block bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                  PERFORMANCE-BASED
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  Performance Fee
                </h3>
                
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                  10% – 20%
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Of your monthly Google Ads spend
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Scales with your investment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Calculated on ad spend only
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Minimum fee may apply
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Invoiced monthly</span>
                </div>
              </div>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

GoogleAdsPricing.displayName = 'GoogleAdsPricing';

export default GoogleAdsPricing;


