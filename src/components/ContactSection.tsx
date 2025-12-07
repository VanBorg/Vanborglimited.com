import { memo, useCallback, useEffect, useRef, useState } from "react";
import Button from './Button';
import Card from './Card';

// Preload Google Maps resources
if (typeof document !== 'undefined') {
  if (!document.querySelector('link[data-maps-preconnect]')) {
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://maps.google.com';
    preconnectLink.dataset.mapsPreconnect = 'true';
    document.head.appendChild(preconnectLink);

    const dnsPrefetchLink = document.createElement('link');
    dnsPrefetchLink.rel = 'dns-prefetch';
    dnsPrefetchLink.href = 'https://maps.google.com';
    dnsPrefetchLink.dataset.mapsPreconnect = 'true';
    document.head.appendChild(dnsPrefetchLink);
  }
}

// Background accents - same as Hero
const BackgroundAccents = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" role="presentation">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-cyan-50/50" />
  </div>
));

BackgroundAccents.displayName = 'BackgroundAccents';

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
          // Load the map well before it scrolls into view so it appears faster
          rootMargin: '1000px' 
        }
      );
      io.observe(el);
      return () => io.disconnect();
    }

    // Fallback for older browsers
    setShouldRender(true);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-gray-100"
      aria-label="Map to Van Borg Limited, 71-75 Shelton Street, Covent Garden, London"
    >
      {/* Skeleton Loading State - shows before render */}
      {!shouldRender && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
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
        <>
          <iframe
            src="https://maps.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London+WC2H+9JQ,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Google Map showing Van Borg Limited location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ border: 0 }}
            onLoad={handleIframeLoad}
          />
          
          {/* Loading overlay that shows while iframe loads */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-8 h-8 mx-auto animate-spin rounded-full border-2 border-gray-300 border-t-sky-500"></div>
                <div className="text-xs text-gray-500">Loading map...</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

GoogleMapEmbed.displayName = 'GoogleMapEmbed';

const ContactSection = memo(() => {
  const handleScheduleMeeting = useCallback(() => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  }, []);

  const handleInquiry = useCallback(() => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20"
      aria-label="Contact Van Borg Limited"
    >
      <BackgroundAccents />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass" size="medium">
            <div className="mx-auto max-w-3xl space-y-6 text-center sm:space-y-8">
              {/* Header */}
              <header className="space-y-4 sm:space-y-6">

                <h2 className="text-xl font-black tracking-tight leading-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Ready to Grow Your Business?
                  </span>
                </h2>

                <div className="relative mx-auto max-w-5xl">
                  <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-2 shadow-sm backdrop-blur-sm sm:px-6 sm:py-3">
                    <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                      Let's discuss how we can help you dominate local search, and generate more leads.
                    </p>
                  </div>
                </div>
              </header>

              {/* Content: Left side (Map + Buttons), Right side (Contact Info) */}
              <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Left: Google Map + Buttons */}
                <div className="order-1 lg:order-1 flex flex-col gap-4">
                  {/* Google Map - takes up remaining space */}
                  <div className="flex-1 min-h-[300px] sm:min-h-[400px]">
                    <GoogleMapEmbed />
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 w-full">
                    <Button
                      variant="primary"
                      onClick={handleScheduleMeeting}
                      ariaLabel="Schedule a meeting with Van Borg Limited"
                      className="w-full"
                    >
                      Schedule a Meeting
                    </Button>

                    <Button
                      variant="secondary"
                      onClick={handleInquiry}
                      ariaLabel="Send an inquiry to Van Borg Limited"
                      className="w-full"
                    >
                      Send Inquiry
                    </Button>
                  </div>
                </div>

                {/* Right: Contact Information */}
                <div className="order-2 lg:order-2 flex flex-col">
                  <div className="rounded-xl border border-sky-200/60 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 p-4 shadow-sm ring-1 ring-white/60 backdrop-blur-sm sm:p-6 flex-1 flex flex-col">
                    <h3 className="mb-4 text-left text-lg font-semibold text-gray-900 sm:text-xl">
                      Contact Information
                    </h3>
                    
                    {/* Vertical Stack Layout with Divider - centered vertically */}
                    <div className="space-y-6 flex-1 flex flex-col justify-center">
                      {/* Location Details */}
                      <div className="text-left text-sm text-gray-700 sm:text-base">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Our Location</h4>
                        </div>
                        <address className="not-italic space-y-1 ml-8">
                          <p className="font-semibold text-gray-900 text-base sm:text-lg">Van Borg Limited</p>
                          <p>71-75 Shelton Street</p>
                          <p>Covent Garden</p>
                          <p>London WC2H 9JQ</p>
                          <p>United Kingdom</p>
                        </address>
                      </div>

                      {/* Horizontal Divider */}
                      <div className="border-t border-gray-300/60"></div>

                      {/* Opening Times */}
                      <div className="text-left text-sm text-gray-700 sm:text-base">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Opening Times</h4>
                        </div>
                        <div className="space-y-2 ml-8">
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
          </Card>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;