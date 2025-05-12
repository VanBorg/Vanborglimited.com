import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section14: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">14. Confidentiality</h2>
        <p>
          During your relationship with Van Borg, you may have access to confidential information. You agree to:
        </p>
        <ul>
          <li>Maintain the confidentiality of any proprietary or confidential information disclosed to you</li>
          <li>Use such information only for the purposes of using our Services</li>
          <li>Not disclose such information to any third party without our prior written consent</li>
          <li>Take reasonable measures to protect the confidentiality of such information</li>
          <li>Return or destroy all confidential information upon termination of your relationship with us, if requested</li>
        </ul>
        <p>
          This obligation shall survive the termination of your relationship with Van Borg.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section14;