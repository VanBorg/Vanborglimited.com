import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section5: React.FC = () => {
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
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">14. Confidentiality</h2>
        <p>
          During your relationship with Van Borg, you may have access to confidential information. You agree to:
        </p>
        <ul>
          <li>Maintain the confidentiality of any proprietary or confidential information disclosed to you</li>
          <li>Use such information only for the purposes of using our Services</li>
          <li>Not disclose such information to any third party without our prior written consent</li>
          <li>Take reasonable measures to protect the confidentiality of such information</li>
        </ul>
        <p>
          This obligation shall survive the termination of your relationship with Van Borg.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">15. Compliance with Laws</h2>
        <p>
          You agree to comply with all applicable local, state, national, and international laws and regulations in connection with your use of the Services. This includes, but is not limited to:
        </p>
        <ul>
          <li>Data protection and privacy laws</li>
          <li>Intellectual property laws</li>
          <li>Anti-spam legislation</li>
          <li>Consumer protection regulations</li>
          <li>Industry-specific regulations relevant to your business</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section5;