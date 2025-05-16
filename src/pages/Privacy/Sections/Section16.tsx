import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section16: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          16. Lawful Bases for Data Processing
        </h2>
        <p>
          All data collected and processed by Van Borg is handled strictly within the bounds of lawful basis as defined under the UK GDPR, EU GDPR, and applicable international frameworks.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          16.1 Recognized Legal Grounds
        </h3>
        <p>Van Borg may process your personal data under one or more of the following bases:</p>
        <ul>
          <li>Consent: You have explicitly agreed to the processing of your data for a specific purpose</li>
          <li>Contractual Necessity: Processing is required to fulfill obligations under a license agreement, service contract, or platform deployment</li>
          <li>Legal Obligation: Processing is required to meet legal duties, including financial reporting, audit trails, or regulatory disclosures</li>
          <li>Legitimate Interest: Processing supports a clear operational interest (e.g. performance monitoring, fraud prevention), provided such interests do not override your rights or freedoms</li>
        </ul>
        <p>
          You may withdraw consent at any time without affecting the legality of prior processing.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section16;