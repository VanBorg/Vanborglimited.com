import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section1: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          1. Purpose of the Policy
        </h2>
        <p>
          This Privacy & Licensing Policy ("Policy") defines the legal framework under which Van Borg Limited ("Van Borg", "we", "our") governs the collection, usage, retention, processing, and licensing of personal data and system access relating to its proprietary AI-driven automation systems, platforms, and services ("Services").
        </p>
        <p>
          By accessing or engaging with any Van Borg Services, you ("Client", "User", "Data Subject") acknowledge and consent to the application of this Policy in its entirety. This Policy forms an integral, enforceable component of all service agreements and licenses issued by Van Borg Limited.
        </p>
        <p>
          The purpose of this Policy is to:
        </p>
        <ul>
          <li>Ensure full alignment with the UK GDPR, EU GDPR, and other applicable international privacy frameworks</li>
          <li>Establish clear licensing boundaries and IP protection terms for Van Borg systems</li>
          <li>Clarify data ownership, processing purposes, and client rights</li>
          <li>Define limitations, liabilities, and obligations for all parties using or interacting with Van Borg infrastructure</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section1;