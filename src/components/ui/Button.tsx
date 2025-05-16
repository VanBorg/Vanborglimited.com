import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className,
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  fullWidth = false,
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-title',
    'transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.95]',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Variants
      'bg-light-brand-primary hover:bg-light-brand-secondary text-white shadow-md focus:ring-light-brand-primary/50': variant === 'primary',
      'dark:bg-dark-brand-primary dark:hover:bg-dark-brand-secondary dark:focus:ring-dark-brand-primary/50': variant === 'primary',
      
      'bg-light-bg-secondary text-light-text-primary hover:bg-light-bg-secondary/80': variant === 'secondary',
      'dark:bg-dark-bg-secondary dark:text-dark-text-primary dark:hover:bg-dark-bg-secondary/80': variant === 'secondary',
      
      'bg-transparent border-2 border-light-brand-primary text-light-brand-primary hover:bg-light-brand-primary/10 focus:ring-light-brand-primary': variant === 'outline',
      'dark:border-dark-brand-primary dark:text-dark-brand-primary dark:hover:bg-dark-brand-primary/10 dark:focus:ring-dark-brand-primary': variant === 'outline',
      
      'bg-transparent text-light-text-primary hover:bg-light-bg-secondary/50': variant === 'ghost',
      'dark:text-dark-text-primary dark:hover:bg-dark-bg-secondary/50': variant === 'ghost'
    },
    {
      // Sizes
      'px-3 py-1.5 text-xs': size === 'sm',
      'px-6 py-3 text-sm': size === 'md', 
      'px-8 py-4 text-base': size === 'lg',
    },
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-2 rounded-full">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          className={baseClasses}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link 
        to={href} 
        className={baseClasses} 
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;