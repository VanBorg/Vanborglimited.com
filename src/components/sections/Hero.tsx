import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';
import { ChatbotEmbed } from '../chatbot/ChatbotEmbed';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  chatbotRef: React.RefObject<HTMLDivElement>;
  scrollToChatbot: () => void;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  chatbotRef,
  scrollToChatbot,
  className,
}) => {
  return (
    <section 
      className={cn(
        'relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden', 
        'bg-light-bg-primary dark:bg-dark-bg-primary', // Base background
        className
      )}
    >
      {/* z-10 base kill */}
      <div className="absolute inset-0 z-10 bg-light-bg-primary dark:bg-dark-bg-primary pointer-events-none" />

      {/* z-20 overlay gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary pointer-events-none" />

      {/* z-30 animated lines - placed between gradient and content */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-light-brand-primary/60 to-transparent dark:via-dark-brand-primary/60 animate-pulse-glow w-[80%] md:w-[60%] left-[10%] md:left-[20%]"
            style={{ top: `${17 + i * 17}%`, animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>

      {/* z-40 actual content */}
      <div className="relative z-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <Badge variant="primary" size="lg">THE PROCESS</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title leading-tight">
               Not Just a Bot.<br />
               A Revenue Engine<br />
               Built to Book,<br />
               Retain, and Scale
              </h1>

              <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    'Capturing High-Intent Leads',
                    2000,
                    'Booking Clients Automatically',
                    2000,
                    'Scaling Without Extra Staff',
                    2000,
                    'Syncing CRM & Calendars',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  className="text-xl text-light-brand-primary dark:text-dark-brand-primary font-title"
                  repeat={Infinity}
                />
              </div>

              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto lg:mx-0 mb-8 font-body">
                Built for 11 high-impact niches — from fitness and wellness to medical clinics and agencies — Van Borg delivers full-funnel AI systems without the cost or lock-in of typical SaaS tools.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  href="/services#ai-systems"
                  size="lg" 
                  fullWidth
                  className="h-12"
                >
                  View Our Packages
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
                  Chat With AI Assistant
                </Button>
              </div>
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