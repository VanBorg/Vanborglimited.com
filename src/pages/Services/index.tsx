import React, { useState, useRef, useEffect } from 'react';
import { ChatbotEmbed, FloatingChatbotButton } from '../../components/chatbot/ChatbotEmbed';

// Import section components
import Hero from './Hero';
import BenefitsSection from './Benefits';
import BotPackagesSection from './BotPackages';
import AutomationsSection from './Automations';
import MaintenancePlans from './Automations/MaintenancePlans';
import FAQSection from './FAQ'; 
import HomeFinalCTA from '../../components/sections/HomeFinalCTA';

const ServicesPage: React.FC = () => {
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollToChatbot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero chatbotRef={chatbotRef} scrollToChatbot={scrollToChatbot} />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Bot Packages Section */}
      <BotPackagesSection />
      
      {/* Business Automations Section - Detailed Version */}
      <AutomationsSection scrollToChatbot={scrollToChatbot} />
      
      {/* Maintenance Plans Section */}
      <MaintenancePlans />
      
      {/* FAQ Section */}
      <FAQSection />
      
      <HomeFinalCTA 
        onClick={scrollToChatbot}
      />

      <FloatingChatbotButton onClick={scrollToChatbot} />
    </>
  );
};

export default ServicesPage;