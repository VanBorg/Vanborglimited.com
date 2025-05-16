import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard'; // Assuming GlassCard is in ../ui/
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';

// Interface for the props this card will accept
interface StaticInfoCardProps {
  solution: {
    title: string;
    description: string;
    icon: string;
    // We can add 'index' or 'stepNumber' here if we want to replicate the number badge
  };
  withAnimation?: boolean;
  animationDelay?: number;
}

const StaticInfoCard: React.FC<StaticInfoCardProps> = ({ solution, withAnimation, animationDelay = 0 }) => {
  const IconComponent = (Icons as any)[solution.icon] || Icons.HelpCircle; // Default icon
  
  const cardContent = (
    <GlassCard 
      className={cn(
        "p-8 h-[360px] flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden",
        "bg-gradient-to-br from-white/90 via-white/60 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-transparent", // Base GlassCard style from StepCard
        "border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40", // Border style from StepCard
        "cursor-default" // Ensure no pointer cursor for static cards
      )}
      intensity="heavy" // Matches StepCard
      hoverEffect // Enable built-in hover effect from GlassCard, which StepCard also uses implicitly
    >
      <div 
        className={cn(
          "mb-6 w-20 h-20 rounded-full flex items-center justify-center border-4 shadow-lg bg-gradient-to-br relative z-10",
          // Using a consistent brand color for these static cards, can be customized
          "from-light-brand-primary/50 to-light-brand-primary/70 border-light-brand-primary/60 text-light-brand-primary dark:from-dark-brand-primary/50 dark:to-dark-brand-primary/70 dark:border-dark-brand-primary/60 dark:text-dark-brand-primary"
        )}
      >
        <IconComponent size={36} className="drop-shadow-md" />
      </div>
      <h3 className={cn(
        "text-2xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title relative z-10",
        "bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent" // Gradient title from StepCard
      )}>
        {solution.title}
      </h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary font-body text-lg relative z-10">
        {solution.description}
      </p>
      
      {/* Gradient overlays from StepCard */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-light-brand-primary/20 to-transparent dark:from-dark-brand-primary/20 rounded-tl-full blur-[3px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-light-brand-secondary/20 to-transparent dark:from-dark-brand-secondary/20 rounded-br-full blur-[3px] pointer-events-none"></div>
    </GlassCard>
  );

  if (withAnimation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: animationDelay }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default StaticInfoCard; 