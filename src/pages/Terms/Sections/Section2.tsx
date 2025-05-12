import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section2: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">4. Intellectual Property Rights</h2>
        <p>
          Our Services, including all content, features, and functionality, are owned by Van Borg and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p>
          When you purchase a license for our AI systems:
        </p>
        <ul>
          <li>You are granted a limited, non-exclusive, non-transferable, revocable license to use the system for your own business operations</li>
          <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any part of our Services</li>
          <li>You may not access the Services to build a similar or competitive product or service</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">5. Licensing Terms</h2>
        <p>
          Van Borg offers licensed AI systems rather than software-as-a-service products. This means:
        </p>
        <ul>
          <li>Your system is licensed for use by your business entity only</li>
          <li>The license is contingent on compliance with these Terms and any applicable maintenance plan requirements</li>
          <li>You own your business data generated from using our systems, but the underlying technology, code, and infrastructure remain the intellectual property of Van Borg</li>
          <li>Resale, redistribution, or sharing of your licensed system is strictly prohibited</li>
        </ul>
        <p>
          Specific details of your license will be outlined in your service agreement.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">6. Maintenance Requirements</h2>
        <p>
          Our licensing model includes maintenance requirements that are essential for the proper functioning of your AI system:
        </p>
        <ul>
          <li>Maintenance plans are required to keep your system operational and secure</li>
          <li>Failure to maintain an active maintenance plan may result in service suspension</li>
          <li>You are responsible for timely payment of maintenance fees as outlined in your service agreement</li>
          <li>Van Borg reserves the right to adjust maintenance fees with appropriate notice</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section2;