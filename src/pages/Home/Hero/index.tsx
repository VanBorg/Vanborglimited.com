import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { ChatbotEmbed } from '../../../components/chatbot/ChatbotEmbed';
import Badge from '../../../components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  chatbotRef: React.RefObject<HTMLDivElement>;
  scrollToChatbot: () => void;
}

const animate = (children: React.ReactNode, delay = 0) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const Hero: React.FC<HeroProps> = ({ chatbotRef, scrollToChatbot }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* z-10 solid kill */}
      <div className="absolute inset-0 z-10 bg-light-bg-primary dark:bg-dark-bg-primary pointer-events-none" />

      {/* z-20 chatbot gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary pointer-events-none" />

      {/* z-30 content */}
      <div className="relative z-30">
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-light-brand-primary/60 to-transparent dark:via-dark-brand-primary/60 animate-pulse-glow w-[80%] md:w-[60%] left-[10%] md:left-[20%]"
              style={{ top: `${20 + i * 15}%`, animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {animate(
                <div className="inline-block mb-6">
                  <Badge variant="primary" size="lg">
                    AI Chatbots & Automation Systems
                  </Badge>
                </div>
              )}

              {animate(
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-light-text-primary dark:text-dark-text-primary">
                    <span className="block">AI Systems</span>
                    <span className="block">That Convert.</span>
                    <span className="block">Licensed to Scale.</span>
                </h1>
              )}

              <div className="h-12 mb-6 flex items-center">
                <TypeAnimation
                  sequence={[
                    'Advanced AI Chat Assistants',
                    2000,
                    'Automated Lead Conversion Systems',
                    2000,
                    'Smart Booking & Follow-Up Flows',
                    2000,
                    'Scalable Automation for Any Business',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  className="text-xl text-light-brand-primary dark:text-dark-brand-primary font-title"
                  repeat={Infinity}
                />
              </div>

              {animate(
                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-6 font-body">
                  Van Borg bots capture leads, automate bookings, and sync with your CRM — all in one modular system.
Licensed, not sold. Tailored to your business. Deployed in days.
                </p>,
                0.1
              )}

              {animate(
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    href="/services#packages"
                    size="lg"
                    fullWidth
                    className="h-12"
                  >
                    View Chatbot Packages
                  </Button>
                  <Button
                    onClick={scrollToChatbot}
                    variant="outline"
                    size="lg"
                    fullWidth
                    className="h-12"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </div>,
                0.2
              )}
            </div>

            <motion.div 
              ref={chatbotRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ChatbotEmbed className="w-full" />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;