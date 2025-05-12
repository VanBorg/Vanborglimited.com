import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section16: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">16. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect.
        </p>
        <p>
          These Terms, together with any applicable service agreements, constitute the entire agreement between you and Van Borg regarding your use of the Services and supersede all prior agreements and understandings, whether written or oral.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section16;