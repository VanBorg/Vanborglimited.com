import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section11: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          11. Purpose and Legal Basis of Processing
        </h2>
        <p>
          Van Borg Limited processes personal and operational data only where there is a defined, legitimate, and enforceable purpose. All processing is governed by the principles of data minimization, proportionality, and lawful basis as outlined in the UK GDPR, EU GDPR, and relevant global frameworks.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          11.1 Processing Objectives
        </h3>
        <p>Data may be processed to:</p>
        <ul>
          <li>Deliver and maintain licensed systems, user accounts, and automated workflows</li>
          <li>Fulfill contractual obligations including onboarding, account support, and service configuration</li>
          <li>Comply with legal requirements (e.g., tax, regulatory, cybersecurity reporting)</li>
          <li>Diagnose, audit, and enhance system uptime, performance, and user experience</li>
          <li>Prevent misuse, detect security anomalies, and protect Van Borg intellectual property</li>
        </ul>
        <p>
          Processing always occurs under one or more lawful bases including: explicit consent, contractual necessity, legal obligation, or legitimate interest.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section11;