import React, { useState, useRef, useEffect } from 'react';
import { ChatbotEmbed, FloatingChatbotButton } from '../../components/chatbot/ChatbotEmbed';
import Hero from './Hero';
import { HowItWorks } from '../../components/sections/HowItWorks';
import ChatbotSolutions from '../../components/sections/ChatbotSolutions';
import ProcessAutomations from '../../components/sections/ProcessAutomations';
import Audience from '../../components/sections/Audience';
import BusinessImpact from '../../components/sections/BusinessImpact';
import HomeFinalCTA from '../../components/sections/HomeFinalCTA';
import AboutUs from '../../components/sections/AboutUs';
import { 
  chatbotSolutions,
  businessStats as stats,
  impactTestimonials
} from '../../data/homeSections';
import { targetAudiences } from '../../data/audience';
import { businessAutomations } from '../../data/automations';

const HomePage: React.FC = () => {
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollToChatbot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero chatbotRef={chatbotRef} scrollToChatbot={scrollToChatbot} />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Chatbot Solutions Section */}
      <ChatbotSolutions
        title="Chatbot Solutions"
        subtitle="Intelligent, conversational AI designed to grow your business"
        solutions={chatbotSolutions}
        onChatClick={scrollToChatbot}
      />
      
      {/* Business Automations Section - Home Version */}
      <ProcessAutomations
        title="Add Firepower. Automate Everything."
        subtitle="Powerful add-ons that bolt directly into your Van Borg system. Add power. Scale fast."
        scrollToChatbot={scrollToChatbot}
      />
      
      {/* Who Our Solutions Are For Section */}
      <Audience
        title="Who Our Solutions Are For"
        subtitle="7 AI Automations Tailored for Service-Based Businesses"
        audiences={targetAudiences}
      />
      
      {/* Business Impact Section */}
      <BusinessImpact 
        title="Real Business Impact"
        subtitle="See how our AI solutions are transforming businesses like yours"
        stats={stats}
        testimonials={impactTestimonials}
      />
      
      {/* About Us Section */}
      <AboutUs
        title="Who Is Van Borg?"
        subtitle="Meet the team behind the AI revolution. We're on a mission to democratize AI for businesses of all sizes."
      />
      
      {/* Final CTA Section */}
      <HomeFinalCTA 
        onClick={scrollToChatbot}
      />
      <FloatingChatbotButton onClick={scrollToChatbot} />
    </>
  );
};

export default HomePage;