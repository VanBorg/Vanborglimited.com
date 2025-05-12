import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section15: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">15. Data Retention and Anonymization Protocol</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the original collection purpose, including to satisfy legal, regulatory, tax, accounting, or reporting requirements.
        </p>
        <p>Retention factors include:</p>
        <ul>
          <li>The volume and sensitivity of the data.</li>
          <li>The purpose of processing and whether those objectives can be met through alternative means.</li>
          <li>Risk exposure in the event of unauthorized access or disclosure.</li>
          <li>Statutory retention mandates and contractual limitations.</li>
        </ul>
        <p>
          Upon expiration of retention periods, data is either securely deleted or irreversibly anonymized. Anonymized data is excluded from this Policy and may be retained indefinitely for statistical or analytical purposes.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section15;