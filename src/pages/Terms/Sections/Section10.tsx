import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section10: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">10. Limitations of Liability</h2>
        <p>
          To the maximum extent permitted by law:
        </p>
        <ul>
          <li>Van Borg shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services</li>
          <li>Our total liability for any claims relating to these Terms or the Services shall not exceed the amount you paid for the Services during the twelve (12) months preceding the event giving rise to the liability</li>
          <li>These limitations apply regardless of whether the damages are based on contract, tort, or any other legal theory</li>
          <li>Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for some types of damages, so some of the above limitations may not apply to you</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section10;