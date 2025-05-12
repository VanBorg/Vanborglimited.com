import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section13: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">13. AI Interaction Protocols and Conversational Data Governance</h2>
        <p>
          Interactions with Van Borg's AI systems — including chatbots, automation flows, and voice assistants — are logged, encrypted, and retained for operational, developmental, and compliance purposes. Such data is governed by the same protections afforded to all other forms of personal data.
        </p>
        <p>Key principles:</p>
        <ul>
          <li><strong>Conversational Continuity:</strong> Retained interactions improve the contextual relevance and continuity of future engagements.</li>
          <li><strong>Model Refinement:</strong> Aggregated, anonymized interaction patterns may be analyzed to enhance AI performance and reduce user friction.</li>
          <li><strong>Data Integrity:</strong> All access to stored conversational data is restricted to authorized personnel under strict access control policies.</li>
          <li><strong>Right to Deletion:</strong> You may request erasure of your conversation logs at any time by contacting info@vanborglimited.com, subject to identity verification.</li>
          <li><strong>Licensing Clause:</strong> Attempting to extract prompt structures, duplicate Van Borg AI logic, or reverse-engineer automation sequences from conversational logs constitutes a breach of contract and may trigger immediate termination of license and legal enforcement procedures</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section13;