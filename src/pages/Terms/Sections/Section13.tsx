import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section13: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">13. Term and Termination</h2>
        <p>
          The Term of your agreement with Van Borg begins when you first use our Services and continues until terminated:
        </p>
        <ul>
          <li><strong>Termination by You:</strong> You may terminate your agreement with us by providing written notice. Refunds, if any, will be as specified in your service agreement.</li>
          <li><strong>Termination by Us:</strong> We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.</li>
        </ul>
        <p>
          Upon termination:
        </p>
        <ul>
          <li>Your right to use the Services will immediately cease</li>
          <li>You remain liable for any outstanding payments</li>
          <li>Provisions of these Terms that by their nature should survive termination shall survive termination</li>
          <li>We may retain your data for a reasonable period as required by law or for legitimate business purposes</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section13;