import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section5: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          5. PAYMENT TERMS
        </h2>
        <p>
          Project Engagements:
        </p>
        <ul>
          <li>50% upfront non-refundable deposit required before project commencement</li>
          <li>50% final payment due prior to deployment of the system</li>
        </ul>
        <p>
          Ongoing Fees:
        </p>
        <ul>
          <li>Monthly billing for Maintenance Plans (Essential Maintenance Plan or Scalable Maintenance & Services Plan)</li>
          <li>Monthly fees for licensed Add-On Modules</li>
          <li>Usage-based billing for integrated APIs such as OpenAI GPT-4o and WhatsApp Business</li>
        </ul>
        <p>
          API Overages & Adjustments:
        </p>
        <ul>
          <li>Excess usage triggers auto-billing at current market rates</li>
          <li>Alerts may be issued, but charges are binding upon occurrence</li>
        </ul>
        <p>
          Failure to comply with payment obligations results in automatic license suspension and kill-switch enforcement.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section5;