import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section12: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Van Borg and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your violation of these Terms</li>
          <li>Your use of the Services, including any content you provide</li>
          <li>Your violation of any third-party rights</li>
          <li>Your violation of any applicable laws or regulations</li>
        </ul>
        <p>
          This indemnification obligation will survive the termination of these Terms and your use of the Services.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section12;