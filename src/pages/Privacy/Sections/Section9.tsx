import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section9: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">9. Conclusion & Contact Provisions</h2>
        <p>
          This Privacy & Licensing Policy constitutes an integral part of your contractual relationship with Van Borg Limited. By continuing to access or utilize any aspect of our Services, you acknowledge that you have read, understood, and agreed to be legally bound by the terms herein.
        </p>
        <p>
          We reiterate that our commitment to data protection, intellectual property integrity, and operational transparency is not merely regulatory — it is foundational to the trust our clients place in our systems and in the proprietary automation architecture we deliver.
        </p>
        <p>
          Should you require clarification regarding any element of this Policy, or wish to exercise your rights under applicable data protection legislation, you are encouraged to initiate formal correspondence with our Data Protection Officer or Legal Affairs Division:
        </p>
        <hr className="my-4 border-light-text-secondary/20 dark:border-dark-text-secondary/20" />
        <div className="my-4">
          <p className="font-medium">
            Van Borg Limited<br />
            Attn: Legal & Compliance<br />
            71–75 Shelton Street<br />
            Covent Garden<br />
            London, WC2H 9JQ<br />
            United Kingdom<br />
            📧 info@vanborglimited.com<br />
            🌐 www.vanborglimited.com
          </p>
        </div>
        <hr className="my-4 border-light-text-secondary/20 dark:border-dark-text-secondary/20" />
        <div className="mt-4">
          <p className="font-bold">End of Policy Document<br />
          Effective: 4 May 2025</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default Section9;