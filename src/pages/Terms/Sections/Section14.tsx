import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section14: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          14. OUTRO STATEMENT
        </h2>
        <p className="italic">
          "Van Borg licenses infrastructure — not apps.<br />
          If you're here to scale with structured automation, you're in the right place.<br />
          If you're here to clone, coast, or copy — don't sign."
        </p>
      </div>
    </GlassCard>
  );
};

export default Section14;