import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import Badge from '../../ui/Badge';
import StepCard from './StepCard';
import { cn } from '../../../utils/cn';

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
  withAnimation?: boolean;
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  title = "Your AI System, Deployed in Days. Designed to Dominate.",
  subtitle = "We don't sell bots — we license high-performance AI systems that generate, qualify, and retain clients. Here's exactly how we launch your business into automation.",
  steps = [
    {
      title: 'Strategic Discovery',
      description: 'We dive deep into your niche, offer, and friction points. Then we map the exact Van Borg system tier and automations that will remove your bottlenecks and capture demand.',
      icon: 'Search',
    },
    {
      title: 'Build & Deploy',
      description: 'You get a licensed Van Borg AI bot, deployed fast — with your calendar, CRM, and workflows pre-integrated. No drag-and-drop fluff. No DIY. Just results.',
      icon: 'Code',
    },
    {
      title: 'Automate & Scale',
      description: 'Your system goes live. It books clients, handles lead flows, sends follow-ups, and logs performance. Everything stacks. Everything scales.',
      icon: 'Rocket',
    },
  ],
  withAnimation = true,
  className,
}) => {
  return (
    <section
      className={cn(
        'py-20 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary',
        className
      )}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="text-center mb-16">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge variant="primary" size="lg">THE PROCESS</Badge>
            </motion.div>
          ) : (
            <div className="inline-block mb-4">
              <Badge variant="primary" size="lg">THE PROCESS</Badge>
            </div>
          )}

          {withAnimation ? (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              {title}
            </motion.h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              {title}
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

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[3px] transform -translate-y-1/2 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-light-brand-primary/30 to-light-brand-secondary/30 dark:from-dark-brand-primary/30 dark:to-dark-brand-secondary/30 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                index={index}
                step={step}
                withAnimation={withAnimation}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-light-text-primary dark:text-white font-title">
            Setup takes days. Results show fast. Scaling becomes automatic.
          </p>
        </div>
      </Container>
    </section>
  );
};


export { HowItWorks }