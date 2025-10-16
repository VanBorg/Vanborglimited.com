import { memo } from 'react';
import Button from './Button';

const navLinks = [
  { label: 'Google Ranking', href: '/GoogleRanking' },
  { label: 'Google Ads', href: '/GoogleAds' },
  { label: 'AI Chatbots', href: '/AIChatbots' },
  { label: 'Lead-Gen Funnels', href: '/LeadGenFunnels' },
  { label: 'SEO Website', href: '/SEOWebsite' },
  { label: 'Automations', href: '/Automations' }
];

const homeSections = [
  { label: 'Hero', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'The Difference', href: '#the-difference' },
  { label: 'Contact', href: '#contact' }
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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-10 lg:gap-8 items-start">
          {/* Brand / Contact */}
          <section className="lg:col-span-3 space-y-4" aria-labelledby="f-brand">
            <h2 id="f-brand" className="sr-only">About Van Borg Limited</h2>
            <div className="flex items-center gap-4 -mt-1">
              {/* AI Robot Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                {/* Circuit pattern background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 40 40" fill="none">
                    <circle cx="8" cy="8" r="1" fill="white"/>
                    <circle cx="20" cy="8" r="1" fill="white"/>
                    <circle cx="32" cy="8" r="1" fill="white"/>
                    <circle cx="8" cy="20" r="1" fill="white"/>
                    <circle cx="32" cy="20" r="1" fill="white"/>
                    <circle cx="8" cy="32" r="1" fill="white"/>
                    <circle cx="20" cy="32" r="1" fill="white"/>
                    <circle cx="32" cy="32" r="1" fill="white"/>
                    <line x1="8" y1="8" x2="20" y2="8" stroke="white" strokeWidth="0.5"/>
                    <line x1="20" y1="8" x2="32" y2="8" stroke="white" strokeWidth="0.5"/>
                    <line x1="8" y1="8" x2="8" y2="20" stroke="white" strokeWidth="0.5"/>
                    <line x1="32" y1="8" x2="32" y2="20" stroke="white" strokeWidth="0.5"/>
                    <line x1="8" y1="20" x2="8" y2="32" stroke="white" strokeWidth="0.5"/>
                    <line x1="32" y1="20" x2="32" y2="32" stroke="white" strokeWidth="0.5"/>
                    <line x1="8" y1="32" x2="20" y2="32" stroke="white" strokeWidth="0.5"/>
                    <line x1="20" y1="32" x2="32" y2="32" stroke="white" strokeWidth="0.5"/>
                  </svg>
                </div>
                {/* Modern Robot Icon */}
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="4" y="8" width="16" height="12" rx="2"/>
                  <path d="M12 8V4"/>
                  <circle cx="12" cy="4" r="1"/>
                  <circle cx="9" cy="13" r="1" fill="currentColor"/>
                  <circle cx="15" cy="13" r="1" fill="currentColor"/>
                  <path d="M9 17h6"/>
                  <path d="M4 12H2"/>
                  <path d="M22 12h-2"/>
                </svg>
              </div>
              
              {/* Company Name */}
              <h3 className="text-2xl font-black text-gray-900 tracking-tight font-body">
                Van Borg Limited
              </h3>
            </div>
            
            {/* Business Quote */}
            <div className="py-4">
              <blockquote className="text-sm italic text-gray-600 leading-relaxed font-body">
                "Transforming businesses through  AI automation and data-driven growth strategies."
              </blockquote>
            </div>
            
            <div className="space-y-3">

              {/* Email Button */}
              <a href="mailto:info@vanborglimited.com" className="block">
                <Button
                  variant="secondary"
                  ariaLabel="Email info@vanborglimited.com"
                  className="!w-full !px-6 !py-4 !text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send An Email
                </Button>
              </a>
            </div>
          </section>

          {/* Services */}
          <nav className="lg:col-span-2 space-y-4" aria-labelledby="f-services">
            <h2 id="f-services" className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Services
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60">
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.label}>
                      <a 
                        href={l.href} 
                        className="group flex items-center text-sm font-medium text-gray-600 hover:text-sky-600 transition-all duration-200 hover:translate-x-1 font-body"
                      >
                      <svg className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-sky-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="whitespace-nowrap">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Sections */}
          <nav className="lg:col-span-2 space-y-4" aria-labelledby="f-site">
            <h2 id="f-site" className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Sections
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60">
              <ul className="space-y-2.5">
                {homeSections.map((s) => (
                  <li key={s.label}>
                      <a 
                        href={s.href} 
                        className="group flex items-center text-sm font-medium text-gray-600 hover:text-cyan-600 transition-all duration-200 hover:translate-x-1 font-body"
                      >
                      <svg className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-cyan-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="whitespace-nowrap">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Business Info */}
          <section className="lg:col-span-3 space-y-4" aria-labelledby="f-contact">
            <h2 id="f-contact" className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2 font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Business Info
            </h2>
            <div className="rounded-xl border border-gray-200/50 bg-gray-100/80 backdrop-blur-sm p-5 shadow-sm ring-1 ring-white/60">
              <address className="not-italic text-sm leading-relaxed space-y-1 text-gray-600 font-body">
                <div>71-75 Shelton Street</div>
                <div>Covent Garden</div>
                <div>London WC2H 9JQ</div>
                <div>United Kingdom</div>
                <div className="pt-2 font-bold text-gray-900">Van Borg Limited</div>                
                <div>Company No. 16172283</div>
                <div><strong>Info@VanBorgLimited.com</strong></div>
              </address>
            </div>
          </section>
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
                { label: 'GDPR', href: '/gdpr' }
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