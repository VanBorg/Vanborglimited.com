import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section10: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          10. TERMS MODIFICATIONS
        </h2>
        <p>
          Van Borg Limited retains the right to modify, refine, or expand these Terms of Service to reflect evolving technical standards, legal compliance, and infrastructure capabilities.
        </p>
        <p>
          Conditions of Change:
        </p>
        <ul>
          <li>Updated terms will be posted at www.vanborglimited.com/terms and/or sent via registered contact email</li>
          <li>Changes take immediate effect upon publication unless stated otherwise</li>
          <li>Continued use of any system, module, or service after notice is deemed full acceptance of the revised terms</li>
        </ul>
        <p>
          Your Obligations:
        </p>
        <ul>
          <li>You are responsible for reviewing changes and remaining compliant</li>
          <li>If you do not agree with updated terms, you must discontinue use immediately</li>
          <li>Use of any Van Borg system constitutes acceptance of all binding terms, past and present</li>
        </ul>
        <p>
          Van Borg does not negotiate terms individually. This agreement is uniform, enforced, and non-negotiable.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section10;