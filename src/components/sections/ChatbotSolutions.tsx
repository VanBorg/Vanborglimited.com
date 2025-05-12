import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ArrowUp } from 'lucide-react';
import { SolutionCard } from '../chatbot/SolutionCard';
import { SolutionDetails } from '../chatbot/SolutionDetails';

interface ChatbotSolution {
  title: string;
  description: string;
  icon: string;
  features: string[];
  timeline: string;
  niches: string[];
}

interface ChatbotSolutionsProps {
  title: string;
  subtitle?: string;
  solutions: ChatbotSolution[];
  withAnimation?: boolean;
  className?: string;
  onChatClick?: () => void;
}

export const ChatbotSolutions: React.FC<ChatbotSolutionsProps> = ({
  title,
  subtitle,
  solutions = [], // Provide default empty array
  withAnimation = true,
  className,
  onChatClick
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Only access activeSolution if solutions array has elements and activeIndex is valid
  const hasValidSolution = solutions.length > 0 && activeIndex >= 0 && activeIndex < solutions.length;
  const activeSolution = hasValidSolution ? solutions[activeIndex] : null;

  return (
    <section
      className={cn(
        'py-16 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary',
        className
      )}
    >
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge variant="primary" size="lg">AI CHATBOTS</Badge>
            </motion.div>
          ) : (
            <div className="inline-block mb-4">
              <Badge variant="primary" size="lg">AI CHATBOTS</Badge>
            </div>
          )}

          {withAnimation ? (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              Built to Fit. Designed to Scale.
            </motion.h2>
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              Built to Fit. Designed to Scale.
            </h2>
          )}

          {subtitle && (
            withAnimation ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body"
              >
                {subtitle}
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
                {subtitle}
              </p>
            )
          )}
        </div>

        {solutions.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: 2x2 grid of Chatbot cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const isActive = activeIndex === index;
                return (
                  <SolutionCard
                    key={index}
                    solution={solution}
                    isActive={isActive}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>

            {/* Right Side: Solution Details */}
            <div className="lg:col-span-1">
              {activeSolution ? (
                <SolutionDetails
                  solution={activeSolution}
                  onChatClick={onChatClick}
                  withAnimation={withAnimation}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    No solution selected
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              No solutions available
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button 
            onClick={onChatClick}
            variant="outline" 
            size="lg" 
            className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5"
          >
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ y: [-2, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
              >
                <ArrowUp size={16} />
              </motion.div>
              <span>Chat With the Van Borg Assistant</span>
              <motion.div
                animate={{ y: [-2, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
              >
                <ArrowUp size={16} />
              </motion.div>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ChatbotSolutions;