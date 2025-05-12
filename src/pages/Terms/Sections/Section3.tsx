import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section3: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">7. User Responsibilities</h2>
        <p>
          When using our Services, you agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information to us and your end users</li>
          <li>Use the Services in compliance with all applicable laws and regulations</li>
          <li>Not use the Services for any illegal or unauthorized purpose</li>
          <li>Not attempt to probe, scan, or test the vulnerability of our systems or breach security measures</li>
          <li>Not interfere with or disrupt our Services or servers</li>
        </ul>
        
        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">8. Payment and Billing</h2>
        <p>
          Our payment terms for AI systems and maintenance include:
        </p>
        <ul>
          <li>Prices are quoted in Euros (€) unless otherwise specified</li>
          <li>Initial system development fees are due according to the payment schedule in your service agreement</li>
          <li>Maintenance fees are billed monthly or annually based on your selected plan</li>
          <li>Late payments may result in service interruption or termination</li>
          <li>All fees are non-refundable unless otherwise specified in your service agreement</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">9. Third-Party Integrations</h2>
        <p>
          Our Services may integrate with third-party services and platforms:
        </p>
        <ul>
          <li>We are not responsible for third-party services or their content or policies</li>
          <li>Your use of third-party services is subject to their respective terms and privacy policies</li>
          <li>We do not guarantee the continued availability or functionality of any third-party integrations</li>
          <li>You are responsible for maintaining any necessary accounts or subscriptions with integrated third-party services</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section3;