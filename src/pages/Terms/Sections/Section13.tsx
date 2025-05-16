import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section13: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          13. CONTACT INFORMATION
        </h2>
        <p>
          Van Borg Limited<br />
          71–75 Shelton Street<br />
          Covent Garden, London, WC2H 9JQ<br />
          United Kingdom<br />
          Company Number: 16172283<br />
          📧 Email: Info@vanborglimited.com<br />
          🌐 Website: www.vanborglimited.com
        </p>
      </div>
    </GlassCard>
  );
};

export default Section13;