import { memo, useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const services = [
    { label: 'Google Ranking', href: '/google-ranking', description: 'Top 5 search rankings' },
    { label: 'SEO Website', href: '/seo-website', description: 'High-performance websites' },
    { label: 'Google Ads', href: '/google-ads', description: 'Targeted advertising campaigns' },
    { label: 'AI Chatbots', href: '/ai-chatbots', description: '24/7 AI assistants' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && mobileButton && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    if (location.pathname === href) {
      // If already on the same page, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to new page
      navigate(href);
    }
  };

  const handleCTAClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on CTA click
    if (location.pathname === '/contact') {
      // If already on contact page, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/contact');
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 pb-4 px-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Glassmorphism card with blue outline */}
        <div className="relative backdrop-blur-sm sm:backdrop-blur-md bg-white/35 border border-white/40 rounded-3xl shadow-lg shadow-black/10 overflow-visible group will-change-transform">
          {/* Subtle gradient overlay - hidden on mobile for performance */}
          {/* Gradient overlay removed */}
          
          {/* Shine effect on hover - hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          
          {/* Content */}
          <div className="relative flex items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
            
            {/* Logo - Left */}
            <div className="flex items-center flex-1">
              <button onClick={handleLogoClick} className="flex items-center gap-1 sm:gap-1.5">
                {/* AI Robot Icon */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-md overflow-hidden">
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
                  {/* Modern Robot Icon - larger and cleaner */}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                
                {/* Two-line text - increased spacing on mobile to prevent overlap */}
                <div className="flex flex-col -space-y-1 sm:-space-y-3">
                  <span className="text-2xl sm:text-3xl font-display font-black bg-gradient-to-r from-gray-900 to-sky-700 bg-clip-text text-transparent tracking-tight leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                    Van
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-black bg-gradient-to-r from-sky-700 to-cyan-700 bg-clip-text text-transparent tracking-tight leading-none pb-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                    Borg
                  </span>
                </div>
              </button>
            </div>

<<<<<<< HEAD
            {/* Navigation Links - Center (hidden on mobile) */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-6">
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
=======
            {/* Navigation Links - Center (desktop) */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-6">
              {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                onClick={handleNavClick(service.href)}
                className="relative px-4 py-1.5 text-base lg:text-lg font-bold text-gray-100 hover:text-sky-400 transition-all duration-300 rounded-lg group/link overflow-hidden flex items-center justify-center"
              >
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover/link:w-full transition-all duration-300 rounded-full" />
                  <span className="absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-gradient-to-r from-gray-800/80 to-gray-800/80 transition-opacity duration-300 rounded-lg -z-10" />
                  <span className="absolute inset-0 opacity-0 group-hover/link:opacity-100 shadow-sm transition-opacity duration-300 rounded-lg -z-20" />
                  <span className="relative tracking-tight text-center">{service.label}</span>
                </Link>
              ))}
              <Link
                to="/pricing"
                onClick={handleNavClick('/pricing')}
                className="relative px-4 py-1.5 text-base lg:text-lg font-bold text-gray-100 hover:text-sky-400 transition-all duration-300 rounded-lg group/link overflow-hidden flex items-center justify-center"
              >
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover/link:w-full transition-all duration-300 rounded-full" />
                <span className="absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-gradient-to-r from-gray-800/80 to-gray-800/80 transition-opacity duration-300 rounded-lg -z-10" />
                <span className="absolute inset-0 opacity-0 group-hover/link:opacity-100 shadow-sm transition-opacity duration-300 rounded-lg -z-20" />
                <span className="relative tracking-tight text-center">{t.footer.pagesLinks.pricing}</span>
              </Link>
            </div>

            {/* CTA + Lang - Right */}
            <div className="flex items-center justify-end gap-3 flex-1">
              {/* Mobile: Hamburger + Language Toggle */}
              <div className="md:hidden flex items-center gap-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {/* Mobile menu button */}
>>>>>>> 43a468f (Configure Netlify deployment settings)
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="relative px-4 py-2.5 text-sm lg:text-lg font-semibold lg:font-bold text-gray-900 hover:text-gray-900 transition-colors duration-200 rounded-lg group/link overflow-hidden sm:px-5 sm:py-3 sm:transition-all sm:duration-300 flex items-center gap-1"
                >
                  {/* Animated underline */}
                  <span className="hidden sm:block absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover/link:w-3/4 transition-all duration-300 rounded-full" />
                  
                  {/* Hover background glow */}
                  <span className="hidden sm:block absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 rounded-lg -z-10" />
                  
                  <span className="relative">Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg border border-gray-200/60 rounded-xl shadow-xl shadow-black/10 overflow-hidden z-50">
                    <div className="p-1">
                      {services.map((service) => (
                        <button
                          key={service.label}
                          onClick={() => {
                            handleNavClick(service.href);
                            setIsServicesOpen(false);
                          }}
                          className="w-full text-left p-2 rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-cyan-50 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium text-sm text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                                  {service.label}
                                </h3>
                                {service.label === 'Google Ranking' && (
                                  <span className="px-1.5 py-0.5 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full">
                                    Most Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Calculator Link */}
              <button
                onClick={() => handleNavClick('/calculator')}
                className="relative px-4 py-2.5 text-sm lg:text-lg font-semibold lg:font-bold text-gray-900 hover:text-gray-900 transition-colors duration-200 rounded-lg group/link overflow-hidden sm:px-5 sm:py-3 sm:transition-all sm:duration-300"
              >
                {/* Animated underline */}
                <span className="hidden sm:block absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover/link:w-3/4 transition-all duration-300 rounded-full" />
                
                {/* Hover background glow */}
                <span className="hidden sm:block absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 rounded-lg -z-10" />
                
                <span className="relative">ROI Calculator</span>
              </button>
            </div>

            {/* CTA + Social - Right */}
            <div className="flex items-center justify-end gap-3 flex-1">
              {/* Mobile menu button (show on mobile) */}
              <button 
                id="mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-sky-50/50 transition-colors z-10"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className={`w-6 h-6 text-gray-700 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Social icons - desktop only */}
              <div className="hidden md:flex items-center gap-2 pr-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61580148003782"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Facebook page"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/80 text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-md transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path
                      d="M13 10.5h2.5L15 14h-2v6h-3v-6H8v-3.5h2V9.25C10 7.46 11.03 6 13.3 6H16v3h-2c-.66 0-1 .34-1 1v.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/niclas-van-borg/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/80 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-md transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path
                      d="M6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 9h4v10H4V9Zm6 0h3.8v1.7h.1A4.1 4.1 0 0 1 18 8.7C21 8.7 22 10.7 22 14v5h-4v-4.3c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19h-4V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/VanBorgLimited"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our X (Twitter) profile"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/80 text-black hover:bg-black hover:text-white hover:border-black hover:shadow-md transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path
                      d="M4 4h4.5L13 10.3 18.5 4H22l-7 8.2L21 20h-4.5L11 13.4 6 20H2l7-8.1L4 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://share.google/zC3N9lSOaJGFbh9Xi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View our Google Business Profile"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200/80 text-[#4285F4] hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] hover:shadow-md transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 4.24 4.33 8.86 6.11 10.59.47.46 1.3.46 1.78 0C14.67 17.86 19 13.24 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              {/* CTA Button - compact */}
              <Button
                variant="primary"
                onClick={handleCTAClick}
                ariaLabel="Contact us"
                className="!px-4 !py-0 !h-10 sm:!h-12 !text-sm sm:!text-base !font-bold !w-auto !items-center !justify-center"
              >
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
              </Button>
            </div>

          </div>

          {/* High-end bottom border - hidden on mobile for performance */}
          {/* <div className="hidden sm:block absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" /> */}
          {/* <div className="hidden sm:block absolute -bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-[0.5px]" /> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md border-t border-white/40 shadow-xl z-50"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
<<<<<<< HEAD
              <button
                onClick={() => handleNavClick('/calculator')}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-sky-50 transition-colors duration-200 font-medium text-gray-900"
              >
                ROI Calculator
              </button>
            </div>

            {/* Mobile Services Section */}
            <div className="border-t border-gray-200 pt-4">
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => handleNavClick(service.href)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-sky-50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                            {service.label}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
=======
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  onClick={handleNavClick(service.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-gray-100"
                >
                  {service.label}
                </Link>
              ))}
              <Link
                to="/pricing"
                onClick={handleNavClick('/pricing')}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-gray-100"
              >
                {t.footer.pagesLinks.pricing}
              </Link>
>>>>>>> 43a468f (Configure Netlify deployment settings)
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-gray-200 pt-4">
              <Button
                variant="primary"
                onClick={handleCTAClick}
                className="w-full !px-6 !py-3 !text-base !font-bold"
                ariaLabel="Contact us"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;