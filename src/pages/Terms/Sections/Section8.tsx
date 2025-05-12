import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section8: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">8. Payment and Billing</h2>
        <p>
          Our payment terms for AI systems and maintenance include:
        </p>
        <ul>
          <li>Prices are quoted in Euros (€) unless otherwise specified</li>
          <li>Initial system development fees are due according to the payment schedule in your service agreement</li>
          <li>Maintenance fees are billed monthly or annually based on your selected plan</li>
          <li>Late payments may result in service interruption or termination</li>
          <li>All fees are non-refundable unless otherwise specified in your service agreement</li>
          <li>We may change our pricing with reasonable notice to you</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section8;