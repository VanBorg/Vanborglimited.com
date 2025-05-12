import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section18: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">18. Dispute Resolution and Jurisdictional Framework</h2>
        <p>
          Van Borg Limited is committed to resolving all privacy-related inquiries and complaints in a fair, transparent, and timely manner.
        </p>
        <ul>
          <li><strong>Initial Complaint:</strong> Contact us directly at info@vanborglimited.com with a detailed description of your concern.</li>
          <li><strong>Escalation Path:</strong> If unsatisfied with our response, you may escalate the matter to the Information Commissioner's Office (ICO) or your local data protection authority.</li>
          <li><strong>Governing Law:</strong> This Policy is governed by and construed in accordance with the laws of England and Wales, without prejudice to mandatory provisions under international law.</li>
          <li><strong>Exclusive Venue:</strong> Any legal action or proceeding arising from this Policy shall be brought exclusively in the courts of London, United Kingdom, unless otherwise required by binding statutory provisions.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section18;