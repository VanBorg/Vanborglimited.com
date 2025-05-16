import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section12: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          12. FINAL DECLARATION
        </h2>
        <p>
          You are not buying an app. You are licensing an AI-powered infrastructure deployment built for performance, governed by contract, and enforced by design.
        </p>
        <p>
          Van Borg systems are:
        </p>
        <ul>
          <li>Business-critical frameworks with operational weight</li>
          <li>Embedded AI logic, not downloadable software</li>
          <li>Licensed modules with legal guardrails and activation rules</li>
        </ul>
        <p>
          By engaging with Van Borg, you're entering into a commercial infrastructure agreement — not a product purchase. If you're not ready to treat automation like an asset, you're not ready for Van Borg.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section12;