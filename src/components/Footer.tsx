import { memo } from 'react';
import Button from './Button';

const navLinks = [
  { label: 'Google Ranking', href: '/GoogleRanking' },
  { label: 'Google Ads', href: '/GoogleAds' },
  { label: 'AI Chatbots', href: '/AIChatbots' },
  { label: 'SEO Website', href: '/SEOWebsite' },
];

const pages = [
  { label: 'Home', href: '/' },
  { label: 'ROI Calculator', href: '/calculator' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Policies', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'GDPR', href: '/gdpr' },
];

const Footer = memo(() => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-700">
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" role="presentation">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-cyan-50/50" />
      </div>

      {/* Accent line with fade */}
      <div className="relative h-1 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 blur-sm" />
      </div>

      {/* MAIN */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-8">
        {/* stack on mobile, row on desktop */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Brand / Contact */}
          <section className="flex-1 lg:max-w-sm flex flex-col space-y-4" aria-labelledby="f-brand">
            <h2 id="f-brand" className="sr-only">
              About Van Borg Limited
            </h2>
            <div className="flex items-center gap-4 -mt-1">
              {/* AI Robot Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                    <circle cx="8" cy="8" r="1" fill="white" />
                    <circle cx="20" cy="8" r="1" fill="white" />
                    <circle cx="32" cy="8" r="1" fill="white" />
                    <circle cx="8" cy="20" r="1" fill="white" />
                    <circle cx="32" cy="20" r="1" fill="white" />
                    <circle cx="8" cy="32" r="1" fill="white" />
                    <circle cx="20" cy="32" r="1" fill="white" />
                    <circle cx="32" cy="32" r="1" fill="white" />
                    <line x1="8" y1="8" x2="20" y2="8" stroke="white" strokeWidth="0.5" />
                    <line x1="20" y1="8" x2="32" y2="8" stroke="white" strokeWidth="0.5" />
                    <line x1="8" y1="8" x2="8" y2="20" stroke="white" strokeWidth="0.5" />
                    <line x1="32" y1="8" x2="32" y2="20" stroke="white" strokeWidth="0.5" />
                    <line x1="8" y1="20" x2="8" y2="32" stroke="white" strokeWidth="0.5" />
                    <line x1="32" y1="20" x2="32" y2="32" stroke="white" strokeWidth="0.5" />
                    <line x1="8" y1="32" x2="20" y2="32" stroke="white" strokeWidth="0.5" />
                    <line x1="20" y1="32" x2="32" y2="32" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
                <svg
                  className="w-7 h-7 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="4" y="8" width="16" height="12" rx="2" />
                  <path d="M12 8V4" />
                  <circle cx="12" cy="4" r="1" />
                  <circle cx="9" cy="13" r="1" fill="currentColor" />
                  <circle cx="15" cy="13" r="1" fill="currentColor" />
                  <path d="M9 17h6" />
                  <path d="M4 12H2" />
                  <path d="M22 12h-2" />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-gray-900 tracking-tight font-body">Van Borg Limited</h3>
            </div>

            <div className="pb-3 space-y-3">
              <blockquote className="text-sm italic text-gray-600 leading-relaxed font-body">
                "Helping local businesses dominate Google, turn visibility into trust, and consistently generate more
                qualified leads from the customers who matter most"
              </blockquote>

              {/* Social links under tagline */}
              <div className="flex flex-nowrap gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61580148003782"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Facebook page"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-200/80 text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                    <path
                      d="M13 10.5h2.5L15 14h-2v6h-3v-6H8v-3.5h2V9.25C10 7.46 11.03 6 13.3 6H16v3h-2c-.66 0-1 .34-1 1v.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/niclas-van-borg/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-200/80 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                    <path
                      d="M6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 9h4v10H4V9Zm6 0h3.8v1.7h.1A4.1 4.1 0 0 1 18 8.7C21 8.7 22 10.7 22 14v5h-4v-4.3c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19h-4V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/VanBorgLimited"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our X (Twitter) profile"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-200/80 text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                    <path
                      d="M4 4h4.5L13 10.3 18.5 4H22l-7 8.2L21 20h-4.5L11 13.4 6 20H2l7-8.1L4 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* Google / GBP */}
                <a
                  href="https://share.google/zC3N9lSOaJGFbh9Xi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View our Google Business Profile"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-200/80 text-[#4285F4] hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] hover:shadow-lg transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 4.24 4.33 8.86 6.11 10.59.47.46 1.3.46 1.78 0C14.67 17.86 19 13.24 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Pages */}
          <nav className="w-full sm:w-64 lg:w-52 flex-shrink-0 flex flex-col space-y-4" aria-labelledby="f-pages">
            <h2
              id="f-pages"
              className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Pages
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60 space-y-4">
              <ul className="space-y-2.5">
                {pages.map((page) => (
                  <li key={page.label}>
                    <a
                      href={page.href}
                      className="group flex items-center text-sm font-medium text-gray-600 hover:text-cyan-600 transition-all duration-200 hover:translate-x-1 font-body"
                    >
                      <svg
                        className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-cyan-500 transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="whitespace-nowrap">{page.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Business Info – card hugs its content, no tall empty grey */}
          <section className="w-full sm:w-auto flex-shrink-0 flex flex-col space-y-4" aria-labelledby="f-contact">
            <h2
              id="f-contact"
              className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Business Info
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60 w-fit max-w-xs">
              <address className="not-italic text-sm leading-relaxed space-y-1 text-gray-600 font-body">
                <div>71-75 Shelton Street</div>
                <div>Covent Garden</div>
                <div>WC2H 9JQ, London, UK</div>
                <div>Company No. 16172283</div>
                <div className="pt-3 border-top border-gray-200/50 mt-3">
                  <div className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-2">
                    Opening Times
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex gap-2">
                      <span className="whitespace-nowrap">Mon - Fri:</span>
                      <span className="font-medium text-gray-900 whitespace-nowrap">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="whitespace-nowrap">Saturday:</span>
                      <span className="font-medium text-gray-900 whitespace-nowrap">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="whitespace-nowrap">Sunday:</span>
                      <span className="font-medium text-gray-900 whitespace-nowrap">10:30 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </address>
            </div>
          </section>

          {/* Services – takes remaining width on desktop */}
          <nav className="flex-1 flex flex-col space-y-4" aria-labelledby="f-services">
            <h2
              id="f-services"
              className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              What We Do
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60 flex flex-col">
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group flex items-center text-sm font-medium text-gray-600 hover:text-sky-600 transition-all duration-200 hover:translate-x-1 font-body"
                    >
                      <svg
                        className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-sky-500 transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="whitespace-nowrap">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200/60">
                <a href="mailto:info@vanborglimited.com" className="block">
                  <Button
                    variant="secondary"
                    ariaLabel="Email info@vanborglimited.com"
                    className="!w-full !px-6 !py-4 !text-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">Send An Email</span>
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-1 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 blur-sm" />
      </div>

      {/* LEGAL */}
      <div className="relative bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-600 font-medium font-body">
              © {new Date().getFullYear()} Van Borg Limited. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'GDPR', href: '/gdpr' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-gray-600 hover:text-sky-600 transition-colors duration-200 font-medium font-body"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
