import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section2: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">2. Data Collection and Use</h2>
        <p>
          We collect and process personal data to the extent necessary to provide and enhance our Services. This includes:
        </p>
        <ul>
          <li><strong>Information Provided by You:</strong> Data submitted through our platforms, including but not limited to contact details, service inquiries, and feedback.</li>
          <li><strong>Automated Data Collection:</strong> Information gathered via cookies and similar technologies to analyze usage patterns and improve user experience.</li>
          <li><strong>Third-Party Integrations:</strong> Data obtained through integrations with external services, subject to their respective privacy policies.</li>
        </ul>
        <p>The data collected is utilized for:</p>
        <ul>
          <li>Delivering and maintaining our Services.</li>
          <li>Communicating with you regarding your account or transactions.</li>
          <li>Enhancing and personalizing user experience.</li>
          <li>Complying with legal obligations.</li>
        </ul>
        <p>We do not sell or rent your personal data to third parties.</p>
      </div>
    </GlassCard>
  );
};

export default Section2;