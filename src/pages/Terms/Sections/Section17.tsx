import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section17: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">17. Dispute Resolution</h2>
        <p>
          In the event of any dispute arising out of or relating to these Terms or the Services:
        </p>
        <ul>
          <li>
            <strong>Informal Resolution:</strong> We encourage you to contact us first to seek an amicable resolution.
          </li>
          <li>
            <strong>Mediation:</strong> If informal resolution is unsuccessful, the parties agree to attempt to resolve the dispute through mediation before resorting to arbitration or litigation.
          </li>
          <li>
            <strong>Arbitration:</strong> If mediation is unsuccessful, any dispute shall be resolved by binding arbitration, conducted in London, United Kingdom.
          </li>
          <li>
            <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive any right to participate in a class action lawsuit.
          </li>
        </ul>
        <p>
          This dispute resolution provision does not prevent either party from seeking injunctive or other equitable relief from a court for a breach or threatened breach of these Terms.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section17;