import React from 'react';
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import type { ChatbotSolution } from '../../types';

interface SolutionCardProps {
  solution: ChatbotSolution;
  isActive: boolean;
  onClick: () => void;
  isStaticDisplay?: boolean;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  isActive,
  onClick,
  isStaticDisplay = false,
}) => {
  const IconComponent = (Icons as any)[solution.icon] || Icons.Zap;

  const cardContent = (
    <div className="flex flex-col items-center text-center p-6">
      <div
        className={cn(
          "mb-4 w-16 h-16 rounded-full flex items-center justify-center border-2 shadow-md transition-all duration-300",
          isStaticDisplay 
            ? "bg-light-bg-secondary dark:bg-dark-bg-secondary border-light-brand-primary/30 dark:border-dark-brand-primary/30 text-light-brand-primary dark:text-dark-brand-primary" 
            : isActive
            ? "bg-light-brand-primary dark:bg-dark-brand-primary border-light-brand-primary dark:border-dark-brand-primary text-white dark:text-dark-text-primary scale-110"
            : "bg-light-bg-secondary dark:bg-dark-bg-secondary border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary group-hover:border-light-brand-primary/70 dark:group-hover:border-dark-brand-primary/70 group-hover:text-light-brand-primary dark:group-hover:text-dark-brand-primary"
        )}
      >
        <IconComponent size={28} />
      </div>
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary font-title">
          {solution.titleTop}
        </h3>
        <h4 className="text-sm font-medium text-light-brand-primary dark:text-dark-brand-primary font-title">
          {solution.titleBottom}
        </h4>
      </div>
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary line-clamp-3">
        {solution.description}
      </p>
    </div>
  );

  return (
    <GlassCard
      onClick={isStaticDisplay ? undefined : onClick}
      className={cn(
        "h-full transform transition-all duration-300 group",
        isStaticDisplay 
          ? "cursor-default hover:scale-105 hover:shadow-xl border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40"
          : isActive
          ? "border-light-brand-primary dark:border-dark-brand-primary ring-2 ring-light-brand-primary dark:ring-dark-brand-primary shadow-lg scale-105"
          : "border-light-border dark:border-dark-border hover:border-light-brand-primary/70 dark:hover:border-dark-brand-primary/70 hover:shadow-md",
        !isStaticDisplay && !isActive && "border-2" 
      )}
      intensity={isStaticDisplay ? "light" : isActive ? "medium" : "light"}
      hoverEffect={isStaticDisplay}
    >
      {cardContent}
    </GlassCard>
  );
};
