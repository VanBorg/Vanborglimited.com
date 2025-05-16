import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section19: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          Official Contact & Legal Correspondence
        </h2>
        <div className="font-medium">
          <p>Van Borg Limited</p>
          <p>Attn: Legal & Compliance</p>
          <p>71–75 Shelton Street</p>
          <p>Covent Garden</p>
          <p>London WC2H 9JQ</p>
          <p>United Kingdom</p>
          <p>📧 Info@vanborglimited.com</p>
          <p>🌐 www.vanborglimited.com</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default Section19; 