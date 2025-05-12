import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section18: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">18. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy and any service agreements you enter into with Van Borg, constitute the entire agreement between you and Van Borg regarding your use of the Services and supersede all prior agreements and understandings, whether written or oral.
        </p>
        <p>
          No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Van Borg's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
        </p>
        <p>
          If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or eliminated if no such modification is possible, and the remaining provisions of these Terms will remain in full force and effect.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section18;