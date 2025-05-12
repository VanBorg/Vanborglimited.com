import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../ui/GlassCard';
import { cn } from '../../../utils/cn';
import * as Icons from 'lucide-react';

interface StepCardProps {
  index: number;
  step: {
    title: string;
    description: string;
    icon: string;
  };
  withAnimation?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ index, step, withAnimation }) => {
  const IconComponent = (Icons as any)[step.icon] || Icons.HelpCircle;
  
  const card = (
    <div className="flex flex-col items-center">
      <div className="relative w-full mb-4">
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary rounded-full border-4 border-white dark:border-black z-10 items-center justify-center text-white font-bold text-xl shadow-lg">
          {index + 1}
        </div>
      </div>
      
      <GlassCard 
        className="p-8 h-[360px] flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white/90 via-white/60 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-transparent border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 relative overflow-hidden"
        intensity="heavy"
        hoverEffect
      >
        <div 
          className={cn(
            "mb-6 w-20 h-20 rounded-full flex items-center justify-center border-4 shadow-lg transform transition-all duration-500 bg-gradient-to-br relative z-10",
            index === 0 ? "from-light-brand-primary/50 to-light-brand-primary/70 border-light-brand-primary/60 text-light-brand-primary dark:from-dark-brand-primary/50 dark:to-dark-brand-primary/70 dark:border-dark-brand-primary/60 dark:text-dark-brand-primary" : 
            index === 1 ? "from-light-accent/50 to-light-accent/70 border-light-accent/60 text-light-accent dark:from-dark-accent/50 dark:to-dark-accent/70 dark:border-dark-accent/60 dark:text-dark-accent" : 
            "from-light-brand-secondary/50 to-light-brand-secondary/70 border-light-brand-secondary/60 text-light-brand-secondary dark:from-dark-brand-secondary/50 dark:to-dark-brand-secondary/70 dark:border-dark-brand-secondary/60 dark:text-dark-brand-secondary"
          )}
        >
          <IconComponent size={36} className="drop-shadow-md" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent relative z-10">
          {step.title}
        </h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary font-body text-lg relative z-10">
          {step.description}
        </p>
        
        {/* Gradient overlays for visual interest */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-bl from-light-brand-primary/20 to-transparent dark:from-dark-brand-primary/20 rounded-tl-full blur-[3px]"></div>
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-light-brand-secondary/20 to-transparent dark:from-dark-brand-secondary/20 rounded-br-full blur-[3px]"></div>
      </GlassCard>
    </div>
  );

  if (withAnimation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
      >
        {card}
      </motion.div>
    );
  }

  return card;
};

export default StepCard;