import React, { memo } from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'elevated' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = memo(({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  onClick
}) => {
  const baseClasses = "rounded-xl border border-gray-200";
  
  const variantClasses = {
    default: "bg-white shadow-lg",
    glass: "bg-white/80 backdrop-blur-sm shadow-elev-3 border-white/20",
    elevated: "bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200",
    subtle: "bg-gray-50 shadow-sm"
  };

  const sizeClasses = {
    small: "p-3 sm:p-4",
    medium: "p-4 sm:p-6 lg:p-8",
    large: "p-6 sm:p-8 lg:p-12"
  };

  const interactiveClasses = onClick ? "cursor-pointer hover:scale-[1.02] transition-transform duration-200" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${interactiveClasses} ${className}`;

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
