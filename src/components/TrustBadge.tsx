import React, { memo } from "react";

interface TrustBadgeProps {
  text?: string;
  className?: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = memo(({ 
  text = "Results within 30 Days - Guaranteed",
  className = ""
}) => {
  return (
    <div className={`inline-block ${className}`}>
      <span className="relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200/50 shadow-sm text-xs sm:text-sm font-medium text-gray-700">
        
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
        
        {/* Text */}
        <span className="relative z-10">
          {text}
        </span>
      </span>
    </div>
  );
});

TrustBadge.displayName = 'TrustBadge';

export default TrustBadge;