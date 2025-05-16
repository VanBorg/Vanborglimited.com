import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section12: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          12. Controlled Sharing and Data Disclosure
        </h2>
        <p>
          Van Borg Limited does not sell, lease, trade, or barter client or user data under any circumstances. All data sharing is controlled, contract-bound, and scoped to operational necessity.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          12.1 Categories of Authorized Disclosure
        </h3>
        <ul>
          <li>Authorized Processors: Third-party service providers contracted under Data Processing Agreements (DPAs) which bind them to confidentiality, security compliance, and regulatory enforcement</li>
          <li>Strategic Partners: Data may be shared with a co-branded technology or fulfillment partner only with your explicit, documented authorization</li>
          <li>Regulatory & Legal Bodies: Where required by enforceable legal mandate (e.g., subpoena, court order, public safety concern), Van Borg will disclose only the minimum required data to the competent authority</li>
        </ul>
        <p>
          No disclosure exceeds what is necessary for legal, contractual, or operational delivery. All disclosures follow the principle of proportionality.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section12;