import { memo, useEffect, useState } from "react";

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "50+", label: "Funnels Launched" },
  { number: "5k+", label: "Leads Generated" },
  { number: "98%", label: "Client ROI Success" },
  { number: "24/7", label: "Priority Support" }
];

// Animated Stats Section with count-up effect
const Stats = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
      {stats.map((stat, index) => (
        <div 
          key={stat.label} 
          className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="relative inline-block">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-1">
              {stat.number}
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 blur-xl opacity-40 -z-10"></div>
          </div>
          <div className="font-body text-xs text-gray-500 font-semibold tracking-wide uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
