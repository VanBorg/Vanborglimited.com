import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section7: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          7. Data Subject Rights and Enforcement Protocol
        </h2>
        <p>
          Van Borg Limited fully honors all rights granted under the UK GDPR, EU GDPR, and applicable international data protection frameworks.
        </p>
        <p>
          We operate with transparency, accountability, and respect for user autonomy.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          7.1 Rights You May Exercise at Any Time
        </h3>
        <ul>
          <li>Right of Access: Request confirmation of whether your personal data is being processed, and obtain access to the data we hold.</li>
          <li>Right to Rectification: Correct incomplete or inaccurate information.</li>
          <li>Right to Erasure ("Right to be Forgotten"): Request full deletion of your data, subject to legal allowances.</li>
          <li>Right to Restrict Processing: Temporarily limit data usage under defined circumstances (e.g., during dispute resolution).</li>
          <li>Right to Data Portability: Receive your data in a structured, machine-readable format and transmit it to another service provider.</li>
          <li>Right to Object: Refuse processing based on legitimate interest or direct marketing scenarios.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          7.2 How to Submit a Request
        </h3>
        <ul>
          <li>Send all requests to: info@vanborglimited.com</li>
          <li>We will confirm receipt and respond within 30 calendar days.</li>
          <li>In complex cases, this period may be extended with written notice.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          7.3 Supervisory Escalation
        </h3>
        <p>
          If you believe your data rights have been violated, you may escalate directly to the Information Commissioner's Office (ICO) or your relevant national supervisory authority.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section7;