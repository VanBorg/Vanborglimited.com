import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section8: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">8. Policy Amendments, Legal Evolution & Jurisdiction</h2>
        <p>
          Van Borg Limited reserves the unilateral right to amend or update this Privacy & Licensing Policy as necessary to reflect evolving legal obligations, technological developments, or business model adjustments.
        </p>
        <p>Key Provisions:</p>
        <ul>
          <li><strong>Notice of Material Changes:</strong> Any material modification will be communicated through our official website and/or directly to affected clients via email.</li>
          <li><strong>Version Control:</strong> The effective date of each version is listed at the beginning of this document. Your continued use of our Services following a revision signifies acceptance of the updated terms.</li>
          <li><strong>Governing Law:</strong> This Policy, and any disputes arising from or in relation to it, shall be governed by the laws of England and Wales, without prejudice to any overriding consumer protection laws applicable in your country of residence.</li>
          <li><strong>Venue:</strong> All disputes or legal proceedings shall be brought exclusively before the courts of London, United Kingdom, unless otherwise stipulated by applicable cross-border regulatory frameworks.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section8;