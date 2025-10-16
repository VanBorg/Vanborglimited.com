import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navLinks = [
    { label: 'Google Ads', href: '/google-ads' },
    { label: 'AI Chatbots', href: '/ai-chatbots' },
    { label: 'Google Ranking', href: '/google-ranking' },
    { label: 'Lead-Gen Funnels', href: '/lead-generation' },
    { label: 'SEO Website', href: '/seo-website' },
    { label: 'Automations', href: '/automations' }
  ];

  const handleNavClick = (href: string) => {
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
        <div className="relative backdrop-blur-md sm:backdrop-blur-lg bg-white/50 border border-gray-200/60 rounded-3xl shadow-lg shadow-black/10 overflow-visible group will-change-transform">
          {/* Subtle gradient overlay - hidden on mobile for performance */}
          {/* Gradient overlay removed */}
          
          {/* Shine effect on hover - hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          
          {/* Content */}
          <div className="relative flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
            
            {/* Logo - Left */}
            <div className="flex items-center">
              <button onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3">
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
                
                {/* Two-line text - touching but with proper descender space */}
                <div className="flex flex-col -space-y-3">
                  <span className="text-xl sm:text-2xl font-display font-black bg-gradient-to-r from-gray-900 to-sky-700 bg-clip-text text-transparent tracking-tight leading-none">
                    Van
                  </span>
                  <span className="text-xl sm:text-2xl font-display font-black bg-gradient-to-r from-sky-700 to-cyan-700 bg-clip-text text-transparent tracking-tight leading-none pb-1">
                    Borg
                  </span>
                </div>
              </button>
            </div>

            {/* Navigation Links - Center (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2.5 text-sm lg:text-base font-semibold text-gray-900 hover:text-gray-900 transition-colors duration-200 rounded-lg group/link overflow-hidden sm:px-5 sm:py-3 sm:transition-all sm:duration-300"
                >
                  {/* Animated underline - hidden on mobile for performance */}
                  <span className="hidden sm:block absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover/link:w-3/4 transition-all duration-300 rounded-full" />
                  
                  {/* Hover background glow - hidden on mobile for performance */}
                  <span className="hidden sm:block absolute inset-0 opacity-0 group-hover/link:opacity-100 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 rounded-lg -z-10" />
                  
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button - Right */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button (show on mobile) */}
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-sky-50/50 transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* CTA Button - compact */}
              <Button
                variant="primary"
                onClick={handleCTAClick}
                ariaLabel="Contact us"
                className="hidden sm:flex !px-4 !py-0 !h-10 sm:!h-12 !text-base !font-bold !w-auto !items-center !justify-center"
              >
                Contact Us
              </Button>
            </div>

          </div>

          {/* High-end bottom border - hidden on mobile for performance */}
          {/* <div className="hidden sm:block absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" /> */}
          {/* <div className="hidden sm:block absolute -bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-[0.5px]" /> */}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;