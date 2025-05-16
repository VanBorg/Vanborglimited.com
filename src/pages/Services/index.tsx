import React, { useRef } from 'react';
import { FloatingChatbotButton } from '../../components/chatbot/ChatbotEmbed';

// Import section components
import Hero from './Hero';
import BenefitsSection from './Benefits';
import BotPackagesSection from './BotPackages';
import AutomationsSection from './Automations';
import MaintenancePlans from './Automations/MaintenancePlans';
import HomeFinalCTA from '../../components/sections/HomeFinalCTA';

const ServicesPage: React.FC = () => {
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollToChatbot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      
      <HomeFinalCTA 
        onClick={scrollToChatbot}
      />

      <FloatingChatbotButton onClick={scrollToChatbot} />
    </>
  );
};

export default ServicesPage;