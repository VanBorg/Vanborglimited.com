import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Check, Target } from 'lucide-react';
import type { ChatbotSolution } from '../../types';

export const SolutionDetails: React.FC<{
  solution: ChatbotSolution;
  withAnimation?: boolean;
  children?: React.ReactNode;
}> = ({ solution, withAnimation = true, children }) => {
  const content = (
    <GlassCard className="p-6 relative overflow-hidden border-2 transition-all duration-300 bg-gradient-to-br from-white/90 via-white/60 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-transparent border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40" intensity="heavy">
      <div className="relative z-10">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold font-title text-light-text-primary dark:text-dark-text-primary">{solution.title}</h3>
          <div className="inline-block mt-2 px-4 py-2 rounded-full border font-body text-sm bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 text-light-brand-primary dark:text-dark-brand-primary border-light-brand-primary/30 dark:border-dark-brand-primary/30">
            <span className="bg-white/80 dark:bg-black/50 px-2 py-0.5 rounded-full">{solution.timeline}</span>
          </div>
        </div>

        {solution.features?.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 font-title text-light-text-primary dark:text-dark-text-primary flex items-center">
              <span className="p-1.5 rounded-lg bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 mr-2">
                <Check size={16} className="text-light-brand-primary dark:text-dark-brand-primary" />
              </span>
              Key Features
            </h4>
            <ul className="space-y-2">
              {solution.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <div className="p-1 rounded-full mr-2 mt-0.5 border bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                    <Check className="h-3 w-3 text-light-brand-primary dark:text-dark-brand-primary" />
                  </div>
                  <span className="font-body text-light-text-secondary dark:text-dark-text-secondary">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {solution.useCase && (
          <div className="mt-6 p-4 relative overflow-hidden rounded-lg border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-lg bg-gradient-to-br from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5">
            <div className="absolute inset-0 bg-gradient-to-r from-light-brand-primary/10 to-transparent dark:from-dark-brand-primary/10 dark:to-transparent opacity-50" />
            <h4 className="relative z-10 flex items-center text-sm font-bold uppercase tracking-wider mb-2 text-light-brand-primary dark:text-dark-brand-primary font-title">
              <span className="p-1 rounded-md mr-2 bg-light-brand-primary/20 dark:bg-dark-brand-primary/20">
                <Target size={14} />
              </span>
              Strategic Use Case
            </h4>
            <p className="relative z-10 text-sm font-body text-light-text-primary dark:text-dark-text-primary leading-relaxed">{solution.useCase}</p>
          </div>
        )}

        {solution.niches?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {solution.niches.map((n, i) => (
              <span key={i} className="px-2 py-0.5 text-xs rounded-full font-title border bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 text-light-brand-primary dark:text-dark-brand-primary border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                {n}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>
    </GlassCard>
  );

  return withAnimation ? (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
      {content}
    </motion.div>
  ) : content;
};
