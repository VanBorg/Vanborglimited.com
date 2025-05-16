import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section9: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          9. Contractual Status of This Policy
        </h2>
        <p>
          This Privacy & Licensing Policy forms an integral part of every contractual relationship between Van Borg Limited and its clients, users, or partners.
        </p>
        <ul>
          <li>By accessing or using any Van Borg service, platform, or system, you agree to be legally bound by the terms of this Policy.</li>
          <li>This Policy holds equal weight and enforceability to all executed service agreements, licenses, statements of work, or onboarding documents.</li>
          <li>Violations of any provision herein, including but not limited to data misuse, license breach, or unauthorized distribution, may result in:
            <ul>
              <li>Immediate license suspension</li>
              <li>Revocation of system access</li>
              <li>Legal enforcement procedures</li>
              <li>Termination of contract with cause</li>
            </ul>
          </li>
        </ul>
        <p>
          Data protection and IP enforcement are not optional — they are foundational to the trust framework between Van Borg and its clients.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section9;