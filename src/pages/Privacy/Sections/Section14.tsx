import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section14: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          14. Rights Under the UK/EU GDPR
        </h2>
        <p>
          Van Borg Limited fully enforces the rights of data subjects under the UK GDPR, EU GDPR, and aligned international standards.
        </p>
        <p>You may exercise the following rights at any time:</p>
        <ul>
          <li>Right of Access – Request a copy of your data and understand how it is processed</li>
          <li>Right to Rectification – Correct inaccurate or incomplete data</li>
          <li>Right to Erasure – Request deletion of your personal data under lawful grounds</li>
          <li>Right to Restrict Processing – Request limitation of processing under dispute or review</li>
          <li>Right to Data Portability – Request export of your data in a machine-readable format</li>
          <li>Right to Object – Refuse certain types of processing (e.g. marketing, profiling, or legitimate interest claims)</li>
        </ul>
        <p>All rights requests must be submitted in writing to:</p>
        <p>Info@vanborglimited.com</p>
        <p>We respond within 30 calendar days, with legal extensions if complexity demands.</p>
      </div>
    </GlassCard>
  );
};

export default Section14;