import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section14: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">14. Rights of Data Subjects</h2>
        <p>
          Pursuant to applicable data protection frameworks (including the UK GDPR and EU GDPR), data subjects are entitled to exercise the following rights:
        </p>
        <ul>
          <li><strong>Right of Access</strong> – obtain confirmation of processing and access to personal data held.</li>
          <li><strong>Right to Rectification</strong> – request correction of inaccurate or incomplete personal data.</li>
          <li><strong>Right to Erasure</strong> – request deletion of data, where lawful grounds exist.</li>
          <li><strong>Right to Restriction of Processing</strong> – limit the scope of data usage under certain circumstances.</li>
          <li><strong>Right to Data Portability</strong> – obtain and reuse data across services in a structured, machine-readable format.</li>
          <li><strong>Right to Object</strong> – object to processing carried out under legitimate interest or for direct marketing purposes.</li>
        </ul>
        <p>
          All requests should be submitted to info@vanborglimited.com. We will acknowledge and respond within thirty (30) calendar days unless legally entitled to an extension.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section14;