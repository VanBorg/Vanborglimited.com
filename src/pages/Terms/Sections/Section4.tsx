import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section4: React.FC = () => {
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
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">11. Disclaimer of Warranties</h2>
        <p>
          Your use of our Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to:
        </p>
        <ul>
          <li>The Services will meet your specific requirements</li>
          <li>The Services will be uninterrupted, timely, secure, or error-free</li>
          <li>Results obtained from using the Services will be accurate or reliable</li>
          <li>Any defects or errors will be corrected</li>
        </ul>
        <p>
          This disclaimer does not affect any warranties which cannot be excluded or limited under applicable law.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Van Borg and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your violation of these Terms</li>
          <li>Your use of the Services, including any content you provide</li>
          <li>Your violation of any third-party rights</li>
          <li>Your violation of any applicable laws or regulations</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section4;