import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section5: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">5. Cookies, Analytics, and Automated Collection Technologies</h2>
        <p>
          We utilize strictly limited, non-invasive cookies and similar data collection technologies solely for the purpose of optimizing platform functionality, ensuring security, and understanding user interaction in aggregate.
        </p>
        <p>Key points:</p>
        <ul>
          <li><strong>No Marketing or Retargeting Cookies:</strong> Our systems do not deploy advertising trackers or behavioral profiling mechanisms.</li>
          <li><strong>Analytics Usage:</strong> We may use anonymized analytics (e.g. IP region, session duration, bounce rates) to assess platform performance, but no personally identifiable information (PII) is extracted or retained without consent.</li>
          <li><strong>Cookie Consent Management:</strong> Where required by jurisdiction, we provide users with clear opt-in mechanisms for non-essential cookies. Users can revoke or modify their preferences at any time via browser settings or embedded cookie controls.</li>
        </ul>
        <p>
          For full technical specifications, refer to our Cookie Policy or contact our Data Protection Officer.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section5;