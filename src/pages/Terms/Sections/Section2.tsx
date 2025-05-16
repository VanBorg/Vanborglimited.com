import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section2: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          2. SCOPE OF SERVICES
        </h2>
        <p>
          Van Borg Limited provides licensed AI business infrastructure. We are not a SaaS company and do not "rent" software. All systems are purpose-built, commercially scoped, and deployed under a contractual license. You are not subscribing—you are entering a commercial infrastructure agreement.
        </p>
        <p>
          Each licensed system may include a combination of the following modules, depending on your package:
        </p>
        <ul>
          <li>AI-powered chatbot flows trained on your business operations</li>
          <li>CRM data synchronization and webhook logic for lead capture and management</li>
          <li>Embedded booking interface with calendar logic and event syncing</li>
          <li>Loyalty and milestone tracking workflows for client retention</li>
          <li>Recovery automation flows (e.g., abandoned lead follow-up, no-show reminders)</li>
          <li>Advanced analytics dashboards for ROI, lead conversion, and campaign tracking</li>
        </ul>
        <p>
          Critical Notes:
        </p>
        <ul>
          <li>All Van Borg deployments are treated as operational infrastructure, not templates</li>
          <li>You do not "own" a bot; you license a deployed, enforced business system</li>
          <li>Unauthorized usage, resale, or adaptation outside licensed scope is prohibited</li>
        </ul>
        <p>
          Licenses are scoped project-by-project and tied to strict terms, modules, and maintenance plans. Every system carries legal weight, active enforcement, and business consequence.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section2;