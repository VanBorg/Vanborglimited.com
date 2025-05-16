import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section11: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          11. GOVERNING LAW
        </h2>
        <p>
          This agreement shall be governed by, construed under, and enforced in accordance with the laws of England and Wales. Any and all disputes, claims, or enforcement actions arising from or related to these Terms of Service shall fall under the exclusive jurisdiction of the courts of England and Wales.
        </p>
        <p>
          Jurisdictional Enforcement Rights:
        </p>
        <ul>
          <li>Legal proceedings initiated by Van Borg will be filed in London unless otherwise agreed in writing</li>
          <li>Clients waive the right to dispute jurisdiction if engaging with Van Borg services from outside the UK</li>
          <li>All legal interpretations are bound to UK commercial, digital, and IP law</li>
        </ul>
        <p>
          If you're doing business with Van Borg, you're doing business under British legal authority. We enforce in full.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section11;