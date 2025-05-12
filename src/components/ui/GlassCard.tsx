import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  hoverEffect?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  intensity = 'medium',
  hoverEffect = false,
  onClick,
  as: Component = 'div',
}) => {
  const intensityMap = {
    light: {
      bg: 'bg-white/20 dark:bg-black/10',
      border: 'border border-white/20 dark:border-white/5',
      shadow: 'shadow-sm',
      backdrop: 'backdrop-blur-sm',
    },
    medium: {
      bg: 'bg-white/30 dark:bg-black/20',
      border: 'border border-white/30 dark:border-white/10',
      shadow: 'shadow-md',
      backdrop: 'backdrop-blur-md',
    },
    heavy: {
      bg: 'bg-white/40 dark:bg-black/30',
      border: 'border border-white/40 dark:border-white/15',
      shadow: 'shadow-lg',
      backdrop: 'backdrop-blur-lg',
    },
  };

  return (
    <Component
      className={cn(
        'rounded-xl',
        intensityMap[intensity].bg,
        intensityMap[intensity].border,
        intensityMap[intensity].shadow,
        intensityMap[intensity].backdrop,
        hoverEffect && [
          'transition-all duration-300 hover:scale-[1.02]',
          'hover:shadow-light-brand-primary/20 dark:hover:shadow-dark-brand-primary/20',
          'hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30',
        ],
        'relative overflow-hidden',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default GlassCard;