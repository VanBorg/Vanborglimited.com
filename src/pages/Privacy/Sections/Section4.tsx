import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section4: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          4. Data Security & Infrastructure Integrity
        </h2>
        <p>
          Van Borg Limited enforces enterprise-class data protection standards across all system layers. We implement a zero-compromise architecture focused on security-by-design, access control, and proactive threat mitigation.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          4.1 Core Security Protocols
        </h3>
        <ul>
          <li>Zero-Trust Architecture: All data access is strictly role-based, token-authenticated, and governed by least-privilege principles.</li>
          <li>End-to-End Encryption: All data is encrypted in transit and at rest using industry-standard protocols (TLS 1.3, AES-256 or higher).</li>
          <li>Network Isolation: Production and analytics environments are segmented to prevent lateral movement or unauthorized data exposure.</li>
          <li>Continuous Monitoring: Real-time system monitoring, vulnerability detection, and automated alerting are enforced across all services.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          4.2 Incident Response & Liability
        </h3>
        <p>In the event of a breach, compromise, or unauthorized access attempt:</p>
        <ul>
          <li>A formal Incident Response Protocol is triggered</li>
          <li>Clients are notified (where applicable)</li>
          <li>Forensic logging and remediation measures are deployed</li>
        </ul>
        <p>Van Borg disclaims liability for data compromise resulting from:</p>
        <ul>
          <li>Third-party system breaches (e.g., CRM platforms, payment providers)</li>
          <li>Force majeure events</li>
          <li>Zero-day exploits beyond the scope of industry-preventable controls</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          4.3 Regulatory Alignment
        </h3>
        <ul>
          <li>All security protocols align with the UK GDPR, EU GDPR, and applicable international data protection regulations.</li>
          <li>Our infrastructure operates solely within Van Borg-approved environments. Self-hosting is explicitly prohibited.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section4;