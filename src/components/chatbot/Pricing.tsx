import { memo } from 'react';
import Card from '../Card';

const chatbotSetupFeatures = [
  'Voiceflow conversation design',
  'Custom UI & branding',
  'Multi-channel integration',
  'Testing & QA',
  'Deployment & launch',
];

const chatbotRetainerFeatures = [
  'Performance monitoring',
  'Conversation flow updates',
  'Bug fixes & tweaks',
  'Monthly analytics reports',
  'Priority support',
];

const ChatbotPricing = memo(() => {
  return (
    <section
      className="relative w-full bg-white py-8 sm:py-12 lg:py-16"
      aria-labelledby="chatbot-pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-50 border border-gray-200/70 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          {/* Section Heading */}
          <div className="text-center">
            <h2
              id="chatbot-pricing-heading"
              className="mt-4 sm:mt-6 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl"
            >
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                AI Chatbot Setup & Retainer Pricing
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

          {/* Pricing Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {/* Setup Fee */}
            <Card variant="glass" size="medium">
              <div className="relative space-y-6">
                <div className="text-center space-y-3 sm:space-y-4 pt-4">
                  <div className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    ONE-TIME SETUP
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Development &amp; Integration
                  </h3>
                  
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                    From £700
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Paid upfront for bot build, design, integrations, and channel setup.
                  </p>
                </div>

                <ul className="space-y-3 pb-4">
                  {chatbotSetupFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Monthly Retainer */}
            <Card variant="glass" size="medium" className="ring-2 ring-emerald-500 ring-offset-4 ring-offset-gray-50">
              <div className="relative space-y-6">
                <div className="text-center space-y-3 sm:space-y-4 pt-4">
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    MONTHLY RETAINER
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    Support &amp; Optimisation
                  </h3>
                  
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    From £100/mo
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Monthly fee for updates, monitoring, analytics, and ongoing improvements.
                  </p>
                </div>

                <ul className="space-y-3 pb-4">
                  {chatbotRetainerFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

ChatbotPricing.displayName = 'ChatbotPricing';

export default ChatbotPricing;
