import { memo, useCallback, useEffect, useRef, useState } from 'react';

// Google Maps component with proper lazy loading - SINGLE INSTANCE
const GoogleMapEmbed = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasInitializedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isVisible || hasInitializedRef.current) return;

    // Use IntersectionObserver for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible && !hasInitializedRef.current) {
            hasInitializedRef.current = true;
            setIsVisible(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before it comes into view
        threshold: 0.01
      }
    );

    observerRef.current.observe(container);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isVisible]);

  const handleIframeLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-xl sm:rounded-2xl border border-gray-800 shadow-lg overflow-hidden bg-gray-900"
      aria-label="Map to Van Borg Limited, Kieler Bocht 104, Veendam, 9642 CE, Nederland"
    >
      {/* Skeleton Loading State */}
      {!isVisible && (
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center z-10">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-sky-200 to-cyan-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm text-gray-400 font-medium">Loading map...</div>
          </div>
        </div>
      )}

      {/* Map iframe */}
      {isVisible && (
        <>
          <iframe
            key="google-map-vanborg"
            src="https://www.google.com/maps?q=Kieler+Bocht+104,+Veendam,+9642+CE,+Nederland&ll=53.09899,6.86799&z=10&output=embed"
            title="Google Map showing Van Borg Limited location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleIframeLoad}
          />
          
          {/* Loading overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center z-20">
              <div className="text-center space-y-3">
                <div className="w-8 h-8 mx-auto animate-spin rounded-full border-2 border-gray-300 border-t-sky-500"></div>
                <div className="text-xs text-gray-400">Loading map...</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

GoogleMapEmbed.displayName = 'GoogleMapEmbed';

export default GoogleMapEmbed;

