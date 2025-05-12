import React from 'react';
import GlassCard from '../../../../components/ui/GlassCard';

interface BusinessImpactCardProps {
  metric: string;
  value: string;
  icon: React.ReactNode;
}

const BusinessImpactCard: React.FC<BusinessImpactCardProps> = ({ metric, value, icon }) => {
  return (
    <GlassCard className="p-6 text-center h-full" intensity="medium">
      <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-light-brand-primary dark:text-dark-brand-primary">
        {value}
      </h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary">
        {metric}
      </p>
    </GlassCard>
  );
};

export default BusinessImpactCard;