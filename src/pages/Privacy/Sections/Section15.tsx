import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section15: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          15. Data Retention & Anonymization Protocol
        </h2>
        <p>
          Van Borg Limited retains personal data only for the duration required to fulfill its original purpose, satisfy legal and contractual obligations, or support legitimate business operations.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          15.1 Retention Standards
        </h3>
        <p>Data retention periods are governed by the following factors:</p>
        <ul>
          <li>The nature, volume, and sensitivity of the data</li>
          <li>The purpose for which it was collected</li>
          <li>The legal or contractual obligation tied to retention</li>
          <li>Risk analysis in the event of unauthorized access or disclosure</li>
        </ul>
        <p>Upon expiration of the applicable retention period, data is:</p>
        <ul>
          <li>Securely erased via certified digital destruction</li>
          <li>Or permanently anonymized such that it can no longer be traced to an individual</li>
        </ul>
        <p>
          Anonymized datasets may be retained indefinitely and used for internal analytics, system resilience forecasting, AI tuning, or aggregate performance modeling. Such datasets fall outside the scope of data protection legislation.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section15;