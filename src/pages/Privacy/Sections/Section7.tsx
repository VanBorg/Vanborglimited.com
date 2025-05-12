import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section7: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">7. Data Subject Rights and Enforcement Procedures</h2>
        <p>
          Van Borg Limited upholds all entitlements granted to data subjects under the UK GDPR, EU GDPR, and other applicable international frameworks.
        </p>
        <p>You may exercise the following rights at any time:</p>
        <ul>
          <li><strong>Right of Access</strong> – to obtain confirmation as to whether or not personal data concerning you is being processed and, where that is the case, access to the data and processing purposes.</li>
          <li><strong>Right to Rectification</strong> – to correct inaccuracies or complete incomplete personal data.</li>
          <li><strong>Right to Erasure (Right to be Forgotten)</strong> – to request deletion of your data where legal grounds permit or require it.</li>
          <li><strong>Right to Restrict Processing</strong> – to limit how your data is used under specific conditions (e.g., pending resolution of disputes or inaccuracies).</li>
          <li><strong>Right to Data Portability</strong> – to receive your data in a structured, commonly used, machine-readable format and transmit it to another controller.</li>
          <li><strong>Right to Object</strong> – to oppose processing based on legitimate interests or direct marketing grounds.</li>
        </ul>
        <p>
          Requests shall be directed to info@vanborglimited.com. We endeavor to respond within 30 calendar days. In complex cases, this period may be extended with notification.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) or relevant supervisory authority in your jurisdiction if you believe your data rights have been infringed.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section7;