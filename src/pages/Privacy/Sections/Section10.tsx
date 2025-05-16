import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section10: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          10. Mechanisms of Data Collection
        </h2>
        <p>
          Van Borg Limited employs a multi-channel, fully audited approach to collecting data in a lawful, proportional, and purpose-bound manner.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          10.1 Lawful Sources of Data
        </h3>
        <ul>
          <li>Direct Interactions: Data you voluntarily submit through chatbot conversations, intake forms, support tickets, onboarding documentation, and consultation calls.</li>
          <li>Automated Collection: Information collected passively via browser sessions, IP geolocation, session timestamps, interaction tracking, cookies (non-invasive), and system telemetry.</li>
          <li>Third-Party/Public Sources: Where lawful and permitted under applicable contracts or regulations, we may collect relevant data from:
            <ul>
              <li>Public registries (e.g., Companies House)</li>
              <li>CRM platforms integrated with your system (e.g., HubSpot, Supabase, Notion)</li>
              <li>Affiliate referrals or partner applications</li>
            </ul>
          </li>
        </ul>
        <p>
          All data collected is restricted to the minimum amount required to enable licensed service delivery, enforce compliance, and secure your infrastructure.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section10;