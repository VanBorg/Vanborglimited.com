import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

// Video placeholder with CSS-only hover effects (optimized for performance)
const VideoPlaceholder = memo(() => {
  return (
    <div className="mx-auto max-w-sm sm:max-w-xl">
      <div 
        className="group aspect-video w-full rounded-lg sm:rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/80 flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
      >
        {/* Optimized shimmer effect - only animates on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full will-change-transform" />
        
        <div className="text-center space-y-2 sm:space-y-3 relative z-10 px-4">
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 mx-auto">
            {/* Reduced ping animation opacity for better performance */}
            <span className="absolute inset-0 animate-ping rounded-full bg-sky-200 opacity-20" aria-hidden="true"></span>
            <div className="relative w-full h-full bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg will-change-transform">
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div>
            <span className="block text-xs sm:text-sm font-semibold text-gray-700">
              See How We Rank Businesses On Google
            </span>
            <span className="block text-xs text-gray-500 mt-1">4 min overview</span>
          </div>
        </div>
      </div>
    </div>
  );
});

VideoPlaceholder.displayName = 'VideoPlaceholder';

const Hero = memo(() => {
  const navigate = useNavigate();
  
  const handleCalculateROI = useCallback(() => {
    // Navigate directly to the ROI calculator section
    navigate('/calculator#roi-progress');
  }, [navigate]);

  const handleBookCall = useCallback(() => {
    // Open Calendly booking page
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank');
  }, []);

  return (
    <section 
      id="hero"
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 relative min-h-[100vh] w-full overflow-hidden" 
      aria-label="Van Borg Limited - AI-powered solutions hero section"
    >
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          <Card variant="glass" size="medium">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Header */}
              <header className="space-y-4 sm:space-y-6">
                <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                 <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Local SEO Services That Rank You in Google's Top 5
                </span> 
              </h1>

              <div className="relative max-w-5xl mx-auto">
                {/* Reduced backdrop-blur for better mobile performance */}
                <div className="bg-gray-100/90 sm:bg-gray-100/80 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-gray-200/50 shadow-sm space-y-1.5">
                  <h2 className="text-base sm:text-lg md:text-xl text-gray-900 font-bold leading-tight">
                    Rank in Google's Top 5 within 90 days, <span className="text-sky-600"> or get every penny back.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Once you're in the top 5, we can scale further with Google Ads and a high-converting website.
                  </p>
                </div>
              </div>
              </header>


              {/* Video and Content Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                
                {/* Left Side - Video */}
                <div>
                  <VideoPlaceholder />
                </div>

                {/* Right Side - Content */}
                <div className="space-y-4 lg:space-y-6">
                  
                  {/* Value Proposition Box - Hidden on mobile, visible on lg+ screens (SEO-safe: content still in DOM) */}
                  <div className="relative hidden lg:block">
                    {/* Reduced backdrop-blur on mobile, full on larger screens */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-100/80 to-orange-50/80 backdrop-blur-sm border border-orange-200/50 shadow-md">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5 relative z-10">
                        {/* Reduced ping animation for better performance */}
                        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" aria-hidden="true"></span>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-left relative z-10">
                        <h3 className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold leading-relaxed">
                          Your customers are searching right now. If they don't see you<strong> at the top</strong>, 
                          <span className="font-semibold text-orange-600"> they'll choose your competitor instead.</span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <Button 
                      variant="primary" 
                      onClick={handleCalculateROI} 
                      ariaLabel="Calculate ROI for your business"
                    >
                      Calculate My ROI
                    </Button>
                    <Button 
                      variant="secondary" 
                      onClick={handleBookCall} 
                      ariaLabel="Book free consultation"
                    >
                      Schedule A 15-min Call
                    </Button>
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

Hero.displayName = 'Hero';

export default Hero;