import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section17: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">17. Policy Amendments and Effective Date</h2>
        <p>
          This Policy may be amended from time to time to reflect changes in legal frameworks, technological advancements, or our internal practices.
        </p>
        <ul>
          <li><strong>Effective Date:</strong> 4 May 2025 (current version).</li>
          <li><strong>Notification:</strong> Substantive revisions will be posted on our official website and, where appropriate, communicated directly to affected clients.</li>
          <li><strong>Review Encouragement:</strong> We encourage all clients and partners to periodically review this Policy to remain informed of their rights and obligations.</li>
        </ul>
        <p>
          Continued use of our Services following any update shall constitute acceptance of the revised Policy.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section17;