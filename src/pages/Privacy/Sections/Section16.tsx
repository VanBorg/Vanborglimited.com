import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section16: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">16. General Data Protection Regulation (GDPR) Compliance</h2>
        <p>
          For data subjects located within the European Union (EU) or European Economic Area (EEA), Van Borg Limited acts as the data controller in accordance with the General Data Protection Regulation (Regulation (EU) 2016/679).
        </p>
        <p>
          The legal bases for processing your personal data include:
        </p>
        <ul>
          <li><strong>Consent</strong> – where explicit, informed consent has been provided.</li>
          <li><strong>Contractual Necessity</strong> – where processing is essential for the performance of a contract.</li>
          <li><strong>Legal Obligation</strong> – where processing is necessary for compliance with applicable legal duties.</li>
          <li><strong>Legitimate Interests</strong> – where processing is necessary for our or a third party's legitimate interests, provided these do not override your rights or freedoms.</li>
        </ul>
        <p>
          You may withdraw your consent at any time without affecting the lawfulness of prior processing.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section16;