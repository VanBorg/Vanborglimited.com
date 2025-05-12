import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section6: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">16. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Van Borg is established, without regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">17. Dispute Resolution</h2>
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
            <strong>Arbitration:</strong> If mediation is unsuccessful, any dispute shall be resolved by binding arbitration, conducted in the jurisdiction specified above.
          </li>
          <li>
            <strong>Class Action Waiver:</strong> You agree to resolve disputes individually and waive any right to participate in a class action lawsuit.
          </li>
        </ul>
        <p>
          This dispute resolution provision does not prevent either party from seeking injunctive or other equitable relief from a court for a breach or threatened breach of these Terms.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">18. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy and any service agreements you enter into with Van Borg, constitute the entire agreement between you and Van Borg regarding your use of the Services and supersede all prior agreements and understandings, whether written or oral.
        </p>
        <p>
          No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Van Borg's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section6;