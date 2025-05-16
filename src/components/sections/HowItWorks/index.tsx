'use client';

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

const defaultSteps: Step[] = [
  {
    title: 'Start the Process',
    description: `Take the quiz or send a message. Then we schedule your strategy call. We'll map your niche, goals, and system needs — no fluff. Just clarity.`,
    icon: 'ClipboardCheck'
  },
  {
    title: 'Build & Deployment',
    description: `We build and license your Van Borg AI system — CRM integrated, calendar connected, branded to your voice. You don't configure anything. We deploy. You own the outcome.`,
    icon: 'Wrench'
  },
  {
    title: 'Maintenance & Support',
    description: `We maintain performance, optimize logic, and handle your GPT, CRM tokens, and flow updates. This is licensed infrastructure — not some DIY chatbot.`,
    icon: 'ShieldCheck'
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({
  title = 'Your AI System. Licensed. Built Fast.',
  subtitle = `This isn't a chatbot you customize — it's an AI infrastructure stack we deploy for you. Here's how the Van Borg system is launched:`,
  steps = defaultSteps,
  withAnimation = true,
  className
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

        <div className="text-center mt-12">
          <p className="text-xl text-light-text-primary dark:text-white font-title">
            Setup takes days. Results show fast. Scaling becomes automatic.
          </p>
        </div>
      </Container>
    </section>
  );
};

export { HowItWorks };
