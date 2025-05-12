import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section11: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">11. Purpose and Legal Basis of Processing</h2>
        <p>
          Your personal data is processed only for defined, explicit, and legitimate purposes. These include but are not limited to:
        </p>
        <ul>
          <li>Ensuring the delivery, maintenance, and enhancement of our products and services.</li>
          <li>Fulfilling contractual obligations, including responding to queries and managing transactions.</li>
          <li>Issuing legally required, security-critical, or service-relevant communications (e.g., policy updates, infrastructure notices).</li>
          <li>Conducting diagnostic, statistical, and performance analysis to improve system resilience and user experience.</li>
          <li>Developing new features or automation logic within the scope of your existing license.</li>
          <li>Enforcing contractual terms, investigating misuse, and protecting the operational integrity of our systems and intellectual property.</li>
        </ul>
        <p>
          Processing occurs under one or more legal bases defined in Section 16 (e.g., consent, contract performance, legal obligation, legitimate interest).
        </p>
      </div>
    </GlassCard>
  );
};

export default Section11;