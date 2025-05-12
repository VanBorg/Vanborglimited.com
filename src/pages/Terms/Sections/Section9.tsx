import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section9: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">9. Third-Party Integrations</h2>
        <p>
          Our Services may integrate with third-party services and platforms:
        </p>
        <ul>
          <li>We are not responsible for third-party services or their content or policies</li>
          <li>Your use of third-party services is subject to their respective terms and privacy policies</li>
          <li>We do not guarantee the continued availability or functionality of any third-party integrations</li>
          <li>You are responsible for maintaining any necessary accounts or subscriptions with integrated third-party services</li>
          <li>We may add, modify, or discontinue third-party integrations at any time</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section9;