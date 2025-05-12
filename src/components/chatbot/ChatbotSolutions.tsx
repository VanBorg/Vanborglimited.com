'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import * as Icons from 'lucide-react';
import { Check, ArrowRight } from 'lucide-react';
import type { ChatbotSolution } from '../../types';

interface ChatbotSolutionsProps {
  title: string;
  subtitle?: string;
  solutions: ChatbotSolution[];
  withAnimation?: boolean;
  className?: string;
  onChatClick?: () => void;
}

const maybeAnimate = (
  enabled: boolean,
  children: React.ReactNode,
  key?: number | string,
  delay = 0
) =>
  enabled ? (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

export const ChatbotSolutions: React.FC<ChatbotSolutionsProps> = ({
  title,
  subtitle,
  solutions,
  withAnimation = true,
  className,
  onChatClick
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];

  return (
    <section
      className={cn(
        'py-20 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary',
        className
      )}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {maybeAnimate(withAnimation, <Badge variant="primary" size="lg">INTELLIGENT AI</Badge>)}
          {maybeAnimate(
            withAnimation,
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-title text-light-text-primary dark:text-dark-text-primary">
              {title}
            </h2>,
            'title',
            0.1
          )}
          {subtitle &&
            maybeAnimate(
              withAnimation,
              <p className="text-xl max-w-3xl mx-auto font-body text-light-text-secondary dark:text-dark-text-secondary">
                {subtitle}
              </p>,
              'subtitle',
              0.2
            )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, idx) => {
              const Icon = (Icons as any)[solution.icon] || Icons.Bot;
              const isActive = idx === activeIndex;

              return maybeAnimate(
                withAnimation,
                <GlassCard
                  key={idx}
                  className={cn(
                    "p-6 relative cursor-pointer overflow-hidden h-[280px] transition-all",
                    isActive && "ring-2 ring-light-brand-primary dark:ring-dark-brand-primary shadow-lg"
                  )}
                  intensity={isActive ? 'heavy' : 'medium'}
                  onClick={() => setActiveIndex(idx)}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-light-brand-primary/10 via-light-brand-secondary/5 to-transparent dark:from-dark-brand-primary/10 dark:via-dark-brand-secondary/5 dark:to-transparent animate-gradient-xy opacity-60" />
                  )}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 rounded-full flex items-center justify-center mr-3 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="flex-grow mb-4 text-light-text-secondary dark:text-dark-text-secondary font-body">
                      {solution.description}
                    </p>
                    <div className="flex flex-col gap-3 mt-auto">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs uppercase tracking-wider font-title mr-1 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                          Perfect For
                        </span>
                        {solution.niches.map((niche, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full text-xs font-title bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary"
                          >
                            {niche}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs px-3 py-1 rounded-full bg-light-bg-primary/50 dark:bg-dark-bg-primary/50 text-light-text-secondary dark:text-dark-text-secondary font-body">
                        {solution.timeline}
                      </div>
                    </div>
                  </div>
                </GlassCard>,
                idx,
                0.1 + idx * 0.1
              );
            })}
          </div>

          <div className="lg:col-span-1 sticky top-24 self-start">
            {withAnimation ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <InfoBox solution={active} onChatClick={onChatClick} />
              </motion.div>
            ) : (
              <InfoBox solution={active} onChatClick={onChatClick} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

const InfoBox = ({
  solution,
  onChatClick
}: {
  solution: ChatbotSolution;
  onChatClick?: () => void;
}) => (
  <GlassCard className="p-6" intensity="heavy">
    <div className="mb-4 text-center">
      <h3 className="text-2xl font-bold mb-1 font-title text-light-text-primary dark:text-dark-text-primary">
        {solution.title}
      </h3>
      <div className="inline-block text-sm px-4 py-1 rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary font-body">
        {solution.timeline}
      </div>
    </div>

    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 font-title text-light-text-primary dark:text-dark-text-primary">Description</h4>
      <p className="font-body text-light-text-secondary dark:text-dark-text-secondary">{solution.description}</p>
    </div>

    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2 font-title text-light-text-primary dark:text-dark-text-primary">Key Features</h4>
      <ul className="space-y-2">
        {solution.features.map((f, i) => (
          <li key={i} className="flex items-start">
            <div className="p-1 mr-2 mt-0.5 rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10">
              <Check className="h-4 w-4 text-light-brand-primary dark:text-dark-brand-primary" />
            </div>
            <span className="font-body text-light-text-secondary dark:text-dark-text-secondary">{f}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap gap-2">
      {solution.niches.map((n, i) => (
        <span
          key={i}
          className="px-3 py-1 text-sm rounded-full font-body bg-light-bg-primary/50 dark:bg-dark-bg-primary/50 text-light-text-secondary dark:text-dark-text-secondary"
        >
          {n}
        </span>
      ))}
    </div>

    {onChatClick && (
      <Button className="w-full mt-6" onClick={onChatClick} icon={<ArrowRight size={16} />} iconPosition="right">
        Learn More
      </Button>
    )}
  </GlassCard>
);

export default ChatbotSolutions;
