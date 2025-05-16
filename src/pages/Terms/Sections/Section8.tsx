import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section8: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          8. DATA OWNERSHIP & PRIVACY
        </h2>
        <p>
          Client Ownership:
        </p>
        <ul>
          <li>All customer data collected via deployed bots</li>
          <li>Custom field logic, UI forms, flow content, and lead structures</li>
        </ul>
        <p>
          Van Borg Ownership:
        </p>
        <ul>
          <li>System logic, backend architecture, automation wiring, and GPT structures</li>
        </ul>
        <p>
          What We Never Do:
        </p>
        <ul>
          <li>We do not access, sell, review, or analyze your customer data</li>
          <li>We do not train AI models using client data</li>
          <li>We do not store logs beyond infra diagnostics (non-PII only)</li>
        </ul>
        <p>
          Data Export Rights:
        </p>
        <ul>
          <li>Full exports (CSV/JSON) available on request</li>
          <li>Requires written notice and processed within a reasonable timeframe</li>
        </ul>
        <p>
          Your data is your property. Our logic is ours. The boundary is clear and enforced.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section8;