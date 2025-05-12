import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section15: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">15. Compliance with Laws</h2>
        <p>
          You agree to comply with all applicable local, state, national, and international laws and regulations in connection with your use of the Services. This includes, but is not limited to:
        </p>
        <ul>
          <li>Data protection and privacy laws</li>
          <li>Intellectual property laws</li>
          <li>Anti-spam legislation</li>
          <li>Consumer protection regulations</li>
          <li>Industry-specific regulations relevant to your business</li>
          <li>Export control and economic sanctions laws</li>
        </ul>
        <p>
          You represent and warrant that you are not located in, under the control of, or a national or resident of any country to which the United Kingdom has embargoed goods or services.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section15;