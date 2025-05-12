import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium font-title whitespace-nowrap',
        {
          // Variants
          'bg-light-bg-secondary text-light-text-secondary dark:bg-dark-bg-secondary dark:text-dark-text-secondary': variant === 'default',
          'bg-light-brand-primary text-white dark:bg-dark-brand-primary dark:text-white': variant === 'primary',
          'bg-light-brand-secondary text-white dark:bg-dark-brand-secondary dark:text-white': variant === 'secondary',
          'bg-light-brand-secondary text-white dark:bg-dark-brand-secondary dark:text-white': variant === 'accent',
        },
        {
          // Sizes
          'text-xs px-2 py-0.5': size === 'sm',
          'text-sm px-2.5 py-0.5': size === 'md',
          'text-sm px-3 py-1': size === 'lg',
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;