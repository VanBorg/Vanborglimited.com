import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section2: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          2. Data Collection
        </h2>
        <p>
          Van Borg Limited collects and processes data solely on a lawful, purpose-bound, and contractually justifiable basis. All collection activities are guided by the principle of data minimization and proportionality.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          2.1. Categories of Data Collected
        </h3>
        <ul>
          <li>Voluntary Submissions: Data submitted by you directly via forms, chatbot interactions, service inquiries, support tickets, onboarding documents, or consultation requests.</li>
          <li>Automated System Data: Information collected via platform interaction logs, session diagnostics, cookie identifiers (non-invasive), device metadata, browser fingerprints, and aggregated behavioral tracking.</li>
          <li>Third-Party Integrations: Information transmitted from authorized third-party tools (e.g., CRM platforms, analytics systems, payment processors) governed by your explicit authorization and subject to their independent privacy terms.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          2.2. Purposes of Data Collection
        </h3>
        <p>The data collected is used exclusively to:</p>
        <ul>
          <li>Deliver, provision, and maintain licensed AI automation systems and related services</li>
          <li>Facilitate secure identity validation, system access, and client interaction flows</li>
          <li>Communicate essential service updates, billing, infrastructure notices, or support engagements</li>
          <li>Comply with applicable regulatory, tax, contractual, and cybersecurity obligations</li>
          <li>Improve the operational performance, responsiveness, and resilience of our AI infrastructure</li>
        </ul>
        <p>
          Van Borg does not engage in data resale, behavioral ad tracking, or third-party monetization. All data processing remains within the scope of direct service enablement or contractual performance.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section2;