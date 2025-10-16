import React, { memo } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = memo(({ 
  children, 
  variant = 'primary', 
  onClick, 
  ariaLabel,
  className = ''
}) => {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-body font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] overflow-hidden group w-full sm:w-80";
  
  const variantClasses = {
    primary: `
      bg-gradient-to-br from-sky-500 to-cyan-600
      text-white 
      shadow-md hover:shadow-lg
      focus:ring-sky-400
      hover:from-sky-600 hover:to-cyan-700
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent
      before:-translate-x-full before:transition-transform before:duration-700 before:ease-out
      hover:before:translate-x-full
    `,
    secondary: `
      bg-white
      border-2 border-sky-500
      text-sky-600
      shadow-sm hover:shadow-md
      focus:ring-sky-400
      hover:border-sky-600 hover:bg-sky-50 hover:text-sky-700
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-sky-200/30 before:to-transparent
      before:-translate-x-full before:transition-transform before:duration-700 before:ease-out
      hover:before:translate-x-full
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClasses}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;