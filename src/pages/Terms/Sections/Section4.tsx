import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section4: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          4. INFRASTRUCTURE & LICENSE ENFORCEMENT
        </h2>
        <p>
          All Van Borg systems are deployed only on pre-approved infrastructure (e.g., Netlify, secure VPS, Edge services). You may not migrate or rehost any part of the system without express, written authorization.
        </p>
        <p>
          Enforcement Terms:
        </p>
        <ul>
          <li>Exporting system logic to unapproved platforms (e.g., Zapier, ChatGPT, Make.com) is a breach</li>
          <li>Self-hosting, third-party hosting, or cloning is strictly prohibited</li>
          <li>Licensing is tied directly to the status of your active Maintenance Plan</li>
        </ul>
        <p>
          Plan Lapse Consequences:
        </p>
        <ul>
          <li>Immediate deactivation of your system within 72 hours</li>
          <li>All automation modules are suspended</li>
          <li>No refund unless otherwise negotiated in writing</li>
        </ul>
        <p>
          Van Borg reserves the right to enforce infrastructure compliance silently and without prior notice.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section4;