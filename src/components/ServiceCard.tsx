import { memo } from 'react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    icon: string;
  };
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showBadge?: boolean;
}

const ServiceCard = memo(({ 
  service, 
  isActive, 
  onClick, 
  onMouseEnter, 
  onMouseLeave,
  showBadge = false 
}: ServiceCardProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full text-left group relative"
      aria-pressed={isActive}
      aria-label={`View ${service.title} details`}
    >
      <div className={`relative rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
        isActive
          ? 'bg-gradient-to-br from-sky-50/80 to-cyan-50/80 border-sky-200/50 shadow-lg' 
          : 'bg-white border-gray-200/50 shadow-sm hover:shadow-md'
      }`}>
        {showBadge && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="relative">
              <div className="px-2 py-0.5 bg-gradient-to-br from-red-100/80 to-red-50/80 backdrop-blur-sm border border-red-600 rounded-full shadow-lg">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Most Popular</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/60 to-red-50/60 rounded-full blur-sm opacity-50 -z-10"></div>
            </div>
          </div>
        )}
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
              isActive
                ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white'
                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
            }`}>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-sm sm:text-base font-semibold truncate ${
                isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`text-xs sm:text-sm truncate mt-0.5 ${
                isActive ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
              }`}>
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
