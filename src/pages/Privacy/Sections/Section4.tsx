import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section4: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">4. Data Security & Integrity of Processing</h2>
        <p>
          Van Borg Limited exercises the highest possible standards of diligence and care in the protection of personal and operational data. All data processed under our systems is safeguarded through a combination of advanced encryption protocols, segmented access controls, routine vulnerability assessments, and secure infrastructure deployment across Van Borg-approved environments only.
        </p>
        <p>We enforce the following principles:</p>
        <ul>
          <li><strong>Zero-Trust Infrastructure:</strong> All access is governed by least-privilege architecture and authenticated via secure protocols.</li>
          <li><strong>Data Isolation & Minimization:</strong> Only strictly necessary information is processed, retained, or transferred — and never beyond the operational scope for which it was originally obtained.</li>
          <li><strong>Audit Trails & Monitoring:</strong> Continuous logging, tracking, and audit records are maintained to ensure data integrity, detect anomalies, and support regulatory compliance.</li>
          <li><strong>Incident Response Framework:</strong> Should a breach or compromise occur, our response protocols activate immediately — including containment, notification (if required), and remedial enforcement under applicable data protection regulations.</li>
        </ul>
        <p>
          Despite these exhaustive measures, no digital system is immune to risk. Van Borg Limited disclaims liability for damages arising from third-party breaches or zero-day vulnerabilities beyond our reasonable control.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section4;