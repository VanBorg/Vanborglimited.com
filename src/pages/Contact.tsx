import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

// Preload Google Maps resources
if (typeof document !== 'undefined') {
  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = 'https://maps.google.com';
  document.head.appendChild(preconnectLink);
  
  const dnsPrefetchLink = document.createElement('link');
  dnsPrefetchLink.rel = 'dns-prefetch';
  dnsPrefetchLink.href = 'https://maps.google.com';
  document.head.appendChild(dnsPrefetchLink);
}

// Google Maps component with smooth fade-in and skeleton loading
const GoogleMapEmbed = memo(() => {
  const mountRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Use IntersectionObserver for proper lazy loading
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            io.disconnect();
          }
        },
        { 
          // Load the map well before it scrolls into view so it feels instant
          rootMargin: '1000px' 
        }
      );
      io.observe(el);
      return () => io.disconnect();
    }

    // Fallback for older browsers
    setShouldRender(true);
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={mountRef}
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg overflow-hidden h-full"
      aria-label="Map to Van Borg Limited, 71-75 Shelton Street, Covent Garden, London"
    >
      {/* Skeleton Loading State */}
      {!shouldRender && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-sky-200 to-cyan-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm text-gray-500 font-medium">Loading map...</div>
            </div>
          </div>
        </div>
      )}

      {/* Map iframe with fade-in effect */}
      {shouldRender && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <iframe
            src="https://maps.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London+WC2H+9JQ,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Google Map — Van Borg Limited"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            onLoad={handleIframeLoad}
          />
          
          {/* Loading overlay that fades out */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 transition-opacity duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-8 h-8 mx-auto animate-spin rounded-full border-2 border-gray-300 border-t-sky-500"></div>
                  <div className="text-xs text-gray-500">Preparing map...</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

GoogleMapEmbed.displayName = 'GoogleMapEmbed';

const Contact = memo(() => {
  const handleScheduleMeeting = useCallback(() => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank');
  }, []);

  const handleInquiry = useCallback(() => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank');
  }, []);

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:info@vanborglimited.com';
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Schedule a Meeting',
      description: 'Book a 15-minute call to discuss your business goals and how we can help you achieve them.',
      buttonText: 'Book Now',
      buttonVariant: 'primary' as const,
      // Use darker, on-brand cards instead of light pastel boxes
      gradient: 'from-sky-500 to-cyan-500',
<<<<<<< HEAD
      bgGradient: 'from-sky-100/80 to-cyan-50/80',
      borderColor: 'border-sky-200/50',
      hoverBorder: 'hover:border-sky-300/60',
      hoverBg: 'group-hover:from-sky-200/90 group-hover:to-cyan-100/90',
      onClick: handleScheduleMeeting
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Send Inquiry',
      description: 'Have specific questions? Send us a detailed inquiry and we\'ll get back to you within 24 hours.',
      buttonText: 'Send Inquiry',
      buttonVariant: 'primary' as const,
      gradient: 'from-sky-500 to-cyan-500',
      bgGradient: 'from-sky-100/80 to-cyan-50/80',
      borderColor: 'border-sky-200/50',
      hoverBorder: 'hover:border-sky-300/60',
      hoverBg: 'group-hover:from-sky-200/90 group-hover:to-cyan-100/90',
      onClick: handleInquiry
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Prefer email? Send us a message directly and we\'ll respond as soon as possible.',
      buttonText: 'Send Email',
      buttonVariant: 'primary' as const,
      gradient: 'from-sky-500 to-cyan-500',
      bgGradient: 'from-sky-100/80 to-cyan-50/80',
      borderColor: 'border-sky-200/50',
      hoverBorder: 'hover:border-sky-300/60',
      hoverBg: 'group-hover:from-sky-200/90 group-hover:to-cyan-100/90',
      onClick: handleEmailClick
    }
  ];
=======
      bgGradient: 'from-gray-900 via-gray-800 to-gray-900',
      borderColor: 'border-gray-800/70',
      hoverBorder: 'hover:border-sky-500/60',
      hoverBg: 'group-hover:from-gray-900 group-hover:to-gray-900',
      onClick: onClickHandlers[index]
    };
  });
>>>>>>> 43a468f (Configure Netlify deployment settings)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Contact Methods */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-lg">
                
                <div className="text-center mb-8 sm:mb-12">
                  <h1 className="font-black text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-gray-900">
                    How Would You Like to Connect?
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    Choose the method that works best for you. We're here to help.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">
                  {contactMethods.map((method, index) => (
                    <article key={index} className="relative group">
                      <div className={`relative overflow-hidden bg-gradient-to-br ${method.bgGradient} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${method.borderColor} shadow-md hover:shadow-xl hover:scale-[1.02] ${method.hoverBorder} transition-all duration-300 min-h-[280px] ${method.hoverBg}`}>
                        
                        {/* Decorative Circle */}
                        <div className={`absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${method.gradient} opacity-40 rounded-full -mr-6 -mb-6 sm:-mr-8 sm:-mb-8`}></div>
                        
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                            <span className={`absolute inset-0 rounded-xl bg-gradient-to-br ${method.gradient} animate-ping opacity-30`}></span>
                            <span className="relative z-10">{method.icon}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                          {method.title}
                        </h2>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 text-center min-h-[60px]">
                          {method.description}
                        </p>

                        {/* Button */}
                        <div className="relative z-10">
                          <Button 
                            variant={method.buttonVariant}
                            onClick={method.onClick}
                            ariaLabel={method.title}
                            className="!w-full !text-sm sm:!text-base"
                          >
                            {method.buttonText}
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="relative w-full py-12 sm:py-16 lg:py-20">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200/50 shadow-lg">
                
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="font-black text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-gray-900">
                    Visit Our Office
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Located in the heart of London's Covent Garden
                  </p>
                </div>
                
                {/* Content: Equal-height columns on desktop */}
                <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
                  {/* Left: Google Map */}
                  <div className="order-1 lg:order-1">
                    <GoogleMapEmbed />
                  </div>

                  {/* Right: Contact info */}
                  <div className="order-2 flex flex-col justify-start lg:order-2">
                    {/* Contact Information (styled background) */}
                    <div className="rounded-xl border border-sky-200/60 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 p-4 shadow-sm ring-1 ring-white/60 backdrop-blur-sm sm:p-6 h-full">
                      
                      {/* Vertical Stack Layout with Divider */}
                      <div className="space-y-6">
                        {/* Location Details */}
                        <div className="text-left text-sm text-gray-700 sm:text-base">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900">Our Location</h4>
                          </div>
                          <address className="not-italic space-y-1 ml-13">
                            <p className="font-semibold text-gray-900 text-base sm:text-lg">Van Borg Limited</p>
                            <p>71-75 Shelton Street</p>
                            <p>Covent Garden</p>
                            <p>London WC2H 9JQ</p>
                            <p>United Kingdom</p>
                          </address>
                        </div>

                        {/* Horizontal Divider */}
                        <div className="border-t border-sky-300/50"></div>

                        {/* Opening Times */}
                        <div className="text-left text-sm text-gray-700 sm:text-base">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-900">Opening Times</h4>
                          </div>
                          <div className="space-y-2 ml-13">
                            <p className="flex justify-between">
                              <span>Mon - Fri:</span>
                              <span className="font-medium text-gray-900">8:00 AM - 9:00 PM</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Saturday:</span>
                              <span className="font-medium text-gray-900">9:00 AM - 8:00 PM</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Sunday:</span>
                              <span className="font-medium text-gray-900">10:30 AM - 5:00 PM</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;