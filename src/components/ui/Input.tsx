import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  icon,
  ...props
}) => {
  const id = props.id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-light-text-secondary dark:text-dark-text-secondary">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            'w-full rounded-md border border-light-text-secondary/20 dark:border-dark-text-secondary/20',
            'bg-light-bg-secondary dark:bg-dark-bg-secondary',
            'text-light-text-primary dark:text-dark-text-primary',
            'shadow-sm focus:outline-none focus:ring-2 focus:ring-light-brand-secondary dark:focus:ring-dark-brand-secondary',
            'placeholder:text-light-text-secondary/50 dark:placeholder:text-dark-text-secondary/50',
            'transition-all duration-200',
            icon ? 'pl-10' : 'pl-4',
            'py-2 pr-4',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;