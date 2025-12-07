import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ChatbotHero from '../components/chatbot/Hero';
import ChatbotWhyItHelps from '../components/chatbot/WhyItHelps';
import ChatbotHowItWorks from '../components/chatbot/HowItWorks';
import ChatbotPricing from '../components/chatbot/Pricing';

const Chatbot = () => {
  // SEO: Set meta tags and structured data
  useEffect(() => {
    document.title = 'AI Chatbot Development | Lead Capture, Booking & Support Automation';
    
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    setMetaTag('description', 'Smart chatbot development for your business. Lead capture, appointment booking, and automated support across website, WhatsApp, and Meta. Built with Voiceflow.');
    setMetaTag('keywords', 'chatbot development, AI chatbot, lead capture bot, booking assistant, WhatsApp bot, Voiceflow, conversational AI, chatbot integration');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vanborglimited.com/ai-chatbots', true);
    setMetaTag('og:title', 'AI Chatbot Development | Lead Capture & Automation', true);
    setMetaTag('og:description', 'Smart chatbot for lead capture, booking, and support. Multi-channel deployment across website, WhatsApp, and Meta.', true);
    setMetaTag('og:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('og:site_name', 'Van Borg Limited', true);
    
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://vanborglimited.com/ai-chatbots', true);
    setMetaTag('twitter:title', 'AI Chatbot Development | Lead Capture & Automation', true);
    setMetaTag('twitter:description', 'Smart chatbot for lead capture, booking, and support. Multi-channel deployment across website, WhatsApp, and Meta.', true);
    setMetaTag('twitter:image', 'https://vanborglimited.com/og-image.jpg', true);
    setMetaTag('twitter:site', '@VanBorgLimited', true);
    setMetaTag('twitter:creator', '@VanBorgLimited', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://vanborglimited.com/ai-chatbots';
    
    return () => {
      document.title = 'Van Borg Limited';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChatbotHero />
        </div>
      </main>

      {/* Pricing full-width directly under hero */}
      <ChatbotPricing />

      {/* Remaining content inside constrained layout */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChatbotHowItWorks />
          <ChatbotWhyItHelps />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Chatbot;