import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { SolutionCard } from '../chatbot/SolutionCard';
import StaticInfoCard from '../chatbot/StaticInfoCard';
import { SolutionDetails } from '../chatbot/SolutionDetails';

interface ChatbotSolution {
  titleTop: string;
  titleBottom: string;
  description: string;
  icon: string;
  features: string[];
  timeline: string;
  niches: string[];
}

interface TopTierSolutionData {
  title: string;
  description: string;
  icon: string;
}

interface ChatbotSolutionsProps {
  title: string;
  subtitle?: string;
  solutions: ChatbotSolution[];
  withAnimation?: boolean;
  className?: string;
  onChatClick?: () => void;
}

const topTierSolutionsData: TopTierSolutionData[] = [
  {
    title: "Lead Capture Bot",
    description: "Qualifies and collects high-intent leads 24/7, filtering out noise and syncing prospects directly to your CRM.",
    icon: "UsersRound",
  },
  {
    title: "Booking Assistant",
    description: "Streamlines your calendar by letting clients book sessions inside the chat. No links, No friction, just instant scheduling.",
    icon: "CalendarCheck2",
  },
  {
    title: "Performance Support",
    description: "Answers key questions, resolves doubts, and reinforces loyalty. Reducing churn while keeping your users engaged and informed.",
    icon: "LifeBuoy",
  }
];

export const ChatbotSolutions: React.FC<ChatbotSolutionsProps> = ({
  title,
  subtitle,
  solutions = [],
  withAnimation = true,
  className,
  onChatClick
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasValidSolution = solutions.length > 0 && activeIndex >= 0 && activeIndex < solutions.length;
  const activeSolution = hasValidSolution ? solutions[activeIndex] : null;

  return (
    <section
      id="chatbot-solutions"
      className={cn(
        'py-16 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary',
        className
      )}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge variant="primary" size="lg">{title || 'AI CHATBOTS'}</Badge>
            </motion.div>
          ) : (
            <div className="inline-block mb-4">
              <Badge variant="primary" size="lg">{title || 'AI CHATBOTS'}</Badge>
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
              {subtitle || '3 Elite Chatbots. Built to Book, Support, and Scale.'}
            </motion.h2>
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              {subtitle || '3 Elite Chatbots. Built to Book, Support, and Scale.'}
            </h2>
          )}
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
          We don't build generic bots. We build high-performance AI chat systems —
          tailored around 3 core functions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topTierSolutionsData.map((solution, index) => (
            <StaticInfoCard 
              key={index} 
              solution={solution} 
              withAnimation={withAnimation} 
              animationDelay={0.1 + index * 0.1}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-xl font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
            Need more than just one function?
          </h3>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-4">
            We offer 4 powerful custom AI systems, each combining two or more core bots into a single Operating System (OS) that captures leads, books clients, supports users, and automates the full funnel.
          </p>
        </div>

        {solutions.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.slice(0, 4).map((solution, index) => (
                <SolutionCard
                  key={index}
                  solution={solution}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <div className="lg:col-span-1">
              {activeSolution ? (
                <SolutionDetails
                  solution={activeSolution}
                  withAnimation={withAnimation}
                />
              ) : (
                <div className="flex items-center justify-center h-full p-6 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-lg">
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    Select a solution to see details.
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              No detailed solutions available.
            </p>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="/services#ai-systems"
              size="lg"
              fullWidth
              className="h-12"
            >
              View Our Packages
            </Button>
            <Button
              onClick={onChatClick}
              variant="outline"
              size="lg"
              fullWidth
              className="h-12"
            >
              Chat With AI Assistant
            </Button>
          </div>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Turn traffic into clients. Automate the grind. License the AI that builds.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ChatbotSolutions;
