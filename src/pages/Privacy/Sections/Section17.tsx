import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section17: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          17. Policy Review, Amendment, and Version Control
        </h2>
        <p>
          This Policy is a living document, subject to refinement in accordance with emerging legal requirements, platform evolution, and security innovations.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          17.1 Update Procedures
        </h3>
        <ul>
          <li>Effective Date is always listed at the top of the Policy</li>
          <li>Material revisions will be communicated clearly via our website or direct client notification</li>
          <li>Continued usage of Van Borg services following any policy update constitutes binding acceptance of the amended terms</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          17.2 Review Recommendation
        </h3>
        <p>Clients are encouraged to review this Policy periodically, particularly prior to:</p>
        <ul>
          <li>Licensing renewal</li>
          <li>Service tier upgrades</li>
          <li>Integration of new automation modules</li>
        </ul>
        <p>
          Version control is managed internally and archived for legal traceability.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section17;