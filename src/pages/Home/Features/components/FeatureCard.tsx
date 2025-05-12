import React from 'react';
import GlassCard from '../../../../components/ui/GlassCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <GlassCard
      hoverEffect
      className="p-6 h-full flex flex-col"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">
        {title}
      </h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary">
        {description}
      </p>
    </GlassCard>
  );
};

export default FeatureCard;