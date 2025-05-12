import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section3: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">3. Licensing Terms</h2>
        <p>
          Our Services are provided under a licensing model, subject to the following conditions:
        </p>
        <ul>
          <li><strong>Non-Transferable License:</strong> Clients are granted a non-exclusive, non-transferable license to use our Services, contingent upon compliance with our terms.</li>
          <li><strong>Ownership:</strong> All intellectual property rights, including but not limited to software, algorithms, and documentation, remain the sole property of Van Borg Limited.</li>
          <li><strong>Restrictions:</strong> Clients shall not reproduce, distribute, modify, or create derivative works of our Services without prior written consent.</li>
          <li><strong>Termination:</strong> We reserve the right to terminate the license and access to Services upon breach of these terms or non-payment.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section3;