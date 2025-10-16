import { memo } from 'react'
import TrustBadge from './TrustBadge'

/* ================= Icons ================= */
function CheckIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function XIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

/* ================= UI bits ================= */
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-white/60 shadow-sm">
    {children}
  </span>
)


/* ================= Component ================= */
const TheDifference = memo(() => {
  return (
    <section id="the-difference" className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-white/80 backdrop-blur-sm" aria-label="The Difference">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-100/30 to-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full max-w-6xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8 xl:p-12 bg-gray-100 rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-block mb-4 sm:mb-6">
                <TrustBadge text="Why Choose Van Borg" />
              </div>
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  The Difference
                </span>
              </h2>
              <div className="relative max-w-fit mx-auto">
                <div className="bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-gray-200/50 shadow-sm">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center whitespace-nowrap">
                    <strong className="font-semibold">What You Get With Us vs Everyone Else</strong> - <a href="/Contact" className="text-sky-600 hover:text-sky-700 font-semibold underline">See the difference</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Top Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Van Borg */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-sky-200/50 transition-all duration-300 bg-gradient-to-br from-sky-100/80 to-cyan-50/80 backdrop-blur-sm shadow-md hover:shadow-xl group hover:scale-[1.02] hover:border-sky-300/60">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-white/20 rounded-full -mr-12 -mt-12 sm:-mr-14 sm:-mt-14" />

                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Van Borg</h3>
                    <Pill>
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block" />
                      Built for Results
                    </Pill>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Visibility first, Google Search & Maps (Top-5 focus)</h4></li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">SEO websites engineered for rankings & conversions</h4></li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">AI chat & voicebots capturing every lead 24/7</h4></li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">CRM + automations handling email & SMS follow-ups</h4></li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Google Ads + retargeting fully integrated with your CRM</h4></li>
                    <li className="flex items-start gap-2"><CheckIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Continuous optimization & performance reviews</h4></li>
                  </ul>
                </div>
              </div>

              {/* Typical Agency */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border bg-white shadow-md">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-gray-200/20 rounded-full -mr-12 -mt-12 sm:-mr-14 sm:-mt-14" />

                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Typical Agency</h3>
                    <Pill>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
                      All Talk, No Outcome
                    </Pill>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2"><XIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Generic listing, no clear local-ranking or GBP strategy</h4></li>
                    <li className="flex items-start gap-2"><XIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Weak SEO setup, random keywords, poor conversion logic</h4></li>
                    <li className="flex items-start gap-2"><XIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">Manual bookings, no calendar sync or smart scheduling</h4></li>
                    <li className="flex items-start gap-2"><XIcon className="w-4 h-4 mt-0.5"/><h4 className="inline">No CRM, no automations, every follow-up done by hand</h4></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
})

TheDifference.displayName = 'TheDifference'

export default TheDifference
