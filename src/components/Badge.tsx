import React, { memo } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  onClick?: () => void;
}

interface BadgeGroupProps {
  badges: string[];
  variant?: 'default' | 'brand' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  serviceRoutes?: { [key: string]: string };
}

const Badge: React.FC<BadgeProps> = memo(({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  href,
  onClick
}) => {
  const baseClasses = "relative inline-flex items-center gap-1.5 rounded-full transition-all duration-300 overflow-hidden group";
  
  const variantClasses = {
    default: "bg-white/80 backdrop-blur-sm border border-gray-200/60 text-gray-700 hover:border-gray-300 hover:bg-gray-100/80 shadow-sm hover:shadow-md",
    brand: "bg-gradient-to-r from-sky-500 to-cyan-500 text-white border border-sky-400/50 shadow-sm hover:shadow-md hover:from-sky-600 hover:to-cyan-600",
    outline: "bg-transparent border-2 border-gray-300/50 text-gray-700 hover:border-gray-400 hover:bg-gray-100/50"
  };

  const sizeClasses = {
    small: "px-2.5 py-1 text-xs",
    medium: "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm",
    large: "px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Shine effect on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Dot indicator with pulse effect */}
      <span className="relative z-10 flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600 shadow-sm"></span>
      </span>
      
      {/* Text */}
      <span className="relative z-10 font-body font-medium">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <span className={combinedClasses} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {content}
    </span>
  );
});

Badge.displayName = 'Badge';

const BadgeGroup: React.FC<BadgeGroupProps> = memo(({ 
  badges, 
  variant = 'default', 
  size = 'medium',
  className = '',
  serviceRoutes = {}
}) => {
  const containerClasses = `flex justify-center pt-4 sm:pt-6 ${className}`;
  const wrapperClasses = "relative bg-red-100/80 backdrop-blur-sm rounded-2xl py-3 sm:py-4 border border-red-200/50 shadow-sm mx-8";

  return (
    <div className={containerClasses}>
      <div className={wrapperClasses}>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {badges.map((badge) => (
            <Badge 
              key={badge} 
              variant={variant} 
              size={size}
              href={serviceRoutes[badge] ? `/${serviceRoutes[badge]}` : undefined}
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
});

BadgeGroup.displayName = 'BadgeGroup';

export { Badge, BadgeGroup };
export default Badge;