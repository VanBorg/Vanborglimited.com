import React, { useState, useEffect } from 'react';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }));
    setShowBanner(false);
    
    // Enable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-preferences', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }));
    setShowBanner(false);
    
    // Disable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg z-50 rounded-xl p-4 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">🍪 We Use Cookies</h3>
          <p className="text-xs text-gray-600">
            We use cookies to enhance your experience and analyse our traffic. 
            <a href="/cookies" className="text-red-600 hover:text-red-700 underline ml-1">
              Cookie Policy
            </a>
          </p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="px-3 py-2 text-xs font-medium text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors flex-1 sm:flex-none"
          >
            Decline All
          </button>
          <button
            onClick={handleAccept}
            className="px-3 py-2 text-xs font-medium text-white bg-green-700 hover:bg-green-800 rounded-lg transition-colors flex-1 sm:flex-none"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
