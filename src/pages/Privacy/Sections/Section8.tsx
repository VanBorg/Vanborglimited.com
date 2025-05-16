import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section8: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          8. Policy Amendments & Legal Governance
        </h2>
        <p>
          Van Borg Limited reserves the unilateral right to amend this Policy at any time, in order to remain compliant with evolving legal mandates, security protocols, operational practices, or technological innovations.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          8.1 Change Control & Notification
        </h3>
        <ul>
          <li>Material changes will be communicated via our official website and/or through direct client email notification.</li>
          <li>Version tracking is managed through the "Effective Date" marker at the top of this document.</li>
          <li>Your continued use of any Van Borg service after any posted revision constitutes full acceptance of the amended terms.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          8.2 Governing Law & Jurisdiction
        </h3>
        <ul>
          <li>This Policy is governed by, and shall be construed in accordance with, the laws of England and Wales, without prejudice to applicable mandatory protections in your local jurisdiction.</li>
          <li>Any legal claim, arbitration, or enforcement proceeding arising from this Policy shall be brought exclusively before the courts of London, United Kingdom, unless otherwise required by binding statutory provision.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section8;