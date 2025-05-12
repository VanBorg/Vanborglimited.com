import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section12: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">12. Controlled Sharing and Data Disclosure</h2>
        <p>
          Van Borg Limited does not engage in the commercial sale, lease, or barter of personal data. Information may be disclosed to the following categories of recipients under strictly regulated terms:
        </p>
        <ul>
          <li><strong>Authorized Service Providers:</strong> Entities contracted to perform technical, infrastructural, or support services on our behalf, bound by data processing agreements that ensure confidentiality and compliance with applicable data protection laws.</li>
          <li><strong>Strategic Partners:</strong> Where explicitly authorized by you, we may share limited information to facilitate co-branded offerings, platform integrations, or pilot deployments.</li>
          <li><strong>Legal and Regulatory Authorities:</strong> Where required by statute, court order, or enforceable request by competent authorities, or where disclosure is necessary to defend our legal rights, protect public safety, or investigate fraud.</li>
        </ul>
        <p>
          In all cases, disclosure is minimized to the narrowest scope necessary and executed in accordance with the principle of proportionality.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section12;