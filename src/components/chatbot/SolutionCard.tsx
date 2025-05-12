import React from 'react';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';
import type { ChatbotSolution } from '../../types';

export const SolutionCard: React.FC<{
  solution: ChatbotSolution;
  isActive: boolean;
  onClick: () => void;
}> = ({ solution, isActive, onClick }) => {
  const Icon = (Icons as any)[solution.icon] || Icons.Bot;

  return (
    <GlassCard
      onClick={onClick}
      intensity={isActive ? 'heavy' : 'medium'}
      className={cn(
        'p-6 relative cursor-pointer h-[320px] overflow-hidden transition-all duration-300',
        'bg-gradient-to-br from-white/90 via-white/60 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-transparent',
        'border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40',
        isActive && 'ring-4 ring-light-brand-primary/50 dark:ring-dark-brand-primary/50 shadow-lg'
      )}
    >
      {isActive && (
        <div className="absolute inset-0 animate-gradient-xy opacity-60 bg-gradient-to-br from-light-brand-primary/10 via-light-brand-secondary/5 to-transparent dark:from-dark-brand-primary/10 dark:via-dark-brand-secondary/5 dark:to-transparent" />
      )}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 border-4 shadow-lg bg-gradient-to-br from-light-brand-primary/50 to-light-brand-primary/70 text-light-brand-primary dark:from-dark-brand-primary/50 dark:to-dark-brand-primary/70 dark:text-dark-brand-primary">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
            {solution.title}
          </h3>
        </div>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-6 font-body flex-grow">
          {solution.description}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex flex-wrap gap-1">
            <span className="text-xs uppercase tracking-wider font-title mr-2 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Perfect For</span>
            {solution.niches.map((n, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full font-title border bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 text-light-brand-primary dark:text-dark-brand-primary">
                {n}
              </span>
            ))}
          </div>
          <div className="text-xs px-3 py-1.5 rounded-full border font-body bg-gradient-to-br from-light-brand-primary/10 to-light-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/10 text-light-text-secondary dark:text-dark-text-secondary">
            {solution.timeline}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
