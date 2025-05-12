import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section6: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">6. Third-Party Integrations & Data Interoperability</h2>
        <p>
          Van Borg Services may interface with third-party applications (e.g., CRMs, messaging platforms, analytics dashboards, payment gateways) to fulfill contracted functionalities. In such instances, data transmitted to or from those systems occurs under strict API-level governance and within the scope of user authorization.
        </p>
        <p>We affirm the following:</p>
        <ul>
          <li><strong>No Blanket Data Sharing:</strong> Data exchanges are tightly scoped and occur only to facilitate client-approved workflows.</li>
          <li><strong>Due Diligence Assurance:</strong> Van Borg only integrates with platforms that provide industry-standard privacy controls and demonstrable GDPR (or equivalent) compliance.</li>
          <li><strong>Limited Liability for Third-Party Policies:</strong> Clients are advised that the privacy practices of integrated third-party tools operate under their respective policies, which Van Borg neither controls nor guarantees. Review of those documents remains the client's responsibility.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section6;