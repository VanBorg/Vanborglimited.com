import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section6: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          6. Third-Party Integrations & Data Interoperability
        </h2>
        <p>
          Van Borg AI systems are capable of integrating with external services (e.g., CRMs, payment gateways, analytics dashboards) — but such integrations are governed by strict API-level security, explicit client consent, and full regulatory compliance.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          6.1 Integration Governance
        </h3>
        <ul>
          <li>Scoped API Access Only: Data flow is permissioned at the endpoint level, limited to operational scope, and monitored for compliance.</li>
          <li>No Blanket Transfers: We do not engage in broad-spectrum data sharing or multi-party data pooling. All exchanges are purpose-bound and client-authorized.</li>
          <li>GDPR-Verified Tools Only: We only connect to third-party systems that demonstrate security standards, access controls, and regulatory alignment.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          6.2 Responsibility & Risk Disclosure
        </h3>
        <ul>
          <li>While Van Borg enforces high standards for partner selection, clients retain responsibility for reviewing and accepting the privacy policies of any integrated external tools.</li>
          <li>Van Borg is not liable for violations, leaks, or processing misuse occurring within third-party platforms beyond our operational control.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section6;