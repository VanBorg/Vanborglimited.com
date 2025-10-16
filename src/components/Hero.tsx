import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';
import TrustBadge from './TrustBadge';



// Remove BackgroundAccents - section already has gradient
// const BackgroundAccents = memo(() => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none" role="presentation">
//     <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-cyan-50/50" />
//   </div>
// ));


// Video placeholder with CSS-only hover effects
const VideoPlaceholder = memo(() => {
  return (
    <div className="mx-auto max-w-sm sm:max-w-xl">
      <div 
        className="group aspect-video w-full rounded-lg sm:rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-white/80 to-gray-50/80 flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        
        <div className="text-center space-y-2 sm:space-y-3 relative z-10 px-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div>
            <span className="block text-xs sm:text-sm font-semibold text-gray-700">
              Watch Demo Video
            </span>
            <span className="block text-xs text-gray-500 mt-1">2 min overview</span>
          </div>
        </div>
      </div>
    </div>
  );
});

VideoPlaceholder.displayName = 'VideoPlaceholder';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleSendMessage = useCallback(() => {
    // Navigate to LeadGen page using React Router
    navigate('/LeadGen');
  }, [navigate]);

  const handleBookCall = useCallback(() => {
    // Open Calendly booking page
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank');
  }, []);

  return (
    <section 
      id="hero"
      className="bg-gradient-to-br from-white via-gray-50 to-gray-100 relative min-h-screen w-full overflow-hidden" 
      aria-label="Van Borg Limited - AI-powered solutions hero section"
    >

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          <Card variant="glass" size="medium">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
              
              {/* Header */}
              <header className="space-y-4 sm:space-y-6">
                <TrustBadge text="Professional Lead Generation Solutions" />
                
                  <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  More Leads. More Clients. More Revenue. Guaranteed Results.
                  </span>
                </h1>
                
                <div className="relative max-w-5xl mx-auto">
                  <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-gray-200/50 shadow-sm">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                    Get ranked in the top 3 on Google Search and Maps. Once you're there, we can build SEO websites, AI chatbots for leads and bookings, CRM and AI automations. 
                    </p>
                  </div>
                </div>
              </header>


              {/* Video and Content Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                
                {/* Left Side - Video */}
                <div>
                  <VideoPlaceholder />
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  
                  {/* Value Proposition Box */}
                  <div className="relative">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-100/80 to-orange-50/80 backdrop-blur-sm border border-orange-200/50 shadow-md">
                      
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mt-0.5 relative z-10">
                        {/* Pulse effect like TrustBadge */}
                        <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-30"></span>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-left relative z-10">
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                        Every day, clients search for your service.
                          <span className="font-semibold text-orange-600"> If they don't find you, they will find someone else.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <Button 
                      variant="primary" 
                      onClick={handleSendMessage} 
                      ariaLabel="Get started with Van Borg Limited"
                    >
                      Lead-Gen Systems
                    </Button>
                    <Button 
                      variant="secondary" 
                      onClick={handleBookCall} 
                      ariaLabel="Book free consultation"
                    >
                      Schedule a 15-min Call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Services Showcase */}
              <div className="mt-8 sm:mt-12">
                <div className="text-center mb-6 sm:mb-8">
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Your Services */}
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2 sm:mb-3 md:mb-4">Complete Digital Marketing Solutions</p>
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
                      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">Google Top 3</p>
                        <p className="text-xs text-gray-600">Local SEO</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">Google Ads</p>
                        <p className="text-xs text-gray-600">Paid advertising</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">SEO Website</p>
                        <p className="text-xs text-gray-600">High-performance</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">AI Chatbots</p>
                        <p className="text-xs text-gray-600">24/7 lead capture</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900">CRM Integration</p>
                        <p className="text-xs text-gray-600">Automation</p>
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
};

Hero.displayName = 'Hero';

export default Hero;