import { useEffect, useState, useRef } from 'react';
import type { ComponentType } from 'react';

// Defer Services loading until user scrolls near it - prevents critical path blocking
const DeferredServices = () => {
  const [Services, setServices] = useState<ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || Services || isLoading) return;

    // Wait for page to be fully loaded before setting up observer
    const setupObserver = () => {
      // Use IntersectionObserver to load only when near viewport
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !Services && !isLoading) {
            setIsLoading(true);
            // Dynamically import Services only when scrolled into view
            // Use requestIdleCallback to defer loading even more
            const loadServices = () => {
              import('./Services').then(module => {
                setServices(() => module.default);
                setIsLoading(false);
              });
            };
            
            if ('requestIdleCallback' in window) {
              requestIdleCallback(loadServices, { timeout: 2000 });
            } else {
              setTimeout(loadServices, 100);
            }
            observer.disconnect();
          }
        },
        {
          rootMargin: '600px', // Load earlier for better perceived performance
          threshold: 0
        }
      );

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    };

    // Delay observer setup until after initial render (reduced for faster loading)
    const timer = setTimeout(setupObserver, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [Services, isLoading]);

  const Skeleton = (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="text-center mb-8 sm:mb-12">
          <div className="h-6 bg-gray-800 rounded-full w-48 mx-auto mb-4"></div>
          <div className="h-12 bg-gray-800 rounded-lg w-80 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-64 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-4 h-16"></div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-6 h-96"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full py-12 sm:py-16 lg:py-20">
      {Services ? <Services /> : Skeleton}
    </div>
  );
};

export default DeferredServices;

