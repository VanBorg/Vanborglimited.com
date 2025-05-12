import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section10: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">10. Mechanisms of Data Collection</h2>
        <p>
          Van Borg Limited employs a multi-faceted approach to data acquisition, ensuring that the collection of personal and operational information is both transparent and contextually justified. Information is obtained through the following lawful methods:
        </p>
        <ul>
          <li><strong>Direct Interactions:</strong> Information you provide voluntarily by completing forms, initiating support inquiries, scheduling consultations, or engaging with our chatbots and AI interfaces.</li>
          <li><strong>Automated Technologies:</strong> Data captured passively through your use of our websites and services (e.g., IP address, browser type, session behavior, and device identifiers) via cookies, server logs, and other diagnostic tools.</li>
          <li><strong>Third-Party and Public Sources:</strong> Where legally permissible, we may collect data from publicly accessible registers, commercial data providers, affiliate networks, and platforms integrated with our systems (e.g., HubSpot, Supabase, Notion).</li>
        </ul>
        <p>
          All data collection activities are limited to what is necessary, proportionate, and relevant to the purpose for which such information is intended.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section10;