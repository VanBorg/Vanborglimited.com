import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section18: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          18. Dispute Resolution & Jurisdiction
        </h2>
        <p>
          Van Borg Limited is committed to resolving all privacy, licensing, and compliance matters transparently, promptly, and with due process.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          18.1 Complaint Handling Pathway
        </h3>
        <ul>
          <li>Step 1 – Internal Resolution: Submit complaints to info@vanborglimited.com. Our legal and compliance team will respond within 14 days.</li>
          <li>Step 2 – Supervisory Escalation: If resolution is not satisfactory, you may escalate your claim to:
            <ul>
              <li>The Information Commissioner's Office (ICO) in the UK</li>
              <li>Or your local supervisory authority if located outside the United Kingdom</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          18.2 Jurisdictional Authority
        </h3>
        <ul>
          <li>This Policy is governed by the laws of England and Wales</li>
          <li>All disputes, claims, or legal proceedings shall be brought before the courts of London, United Kingdom</li>
          <li>This jurisdiction applies unless superseded by mandatory consumer protection laws under international treaties or bilateral data protection frameworks</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section18;