import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section7: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">7. User Responsibilities</h2>
        <p>
          When using our Services, you agree to:
        </p>
        <ul>
          <li>Provide accurate and complete information to us and your end users</li>
          <li>Use the Services in compliance with all applicable laws and regulations</li>
          <li>Not use the Services for any illegal or unauthorized purpose</li>
          <li>Not attempt to probe, scan, or test the vulnerability of our systems or breach security measures</li>
          <li>Not interfere with or disrupt our Services or servers</li>
          <li>Not use automated methods or scripts to access or interact with our Services unless explicitly authorized</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section7;