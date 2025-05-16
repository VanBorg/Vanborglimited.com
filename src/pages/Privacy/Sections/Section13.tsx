import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section13: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          13. AI Interaction Logging & Conversational Governance
        </h2>
        <p>
          All user interactions with Van Borg AI systems — including chatbots, voice agents, and automation workflows — are captured, encrypted, and retained under enterprise-grade conversational data governance.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          13.1 Governance Principles
        </h3>
        <ul>
          <li>Conversation Logging: Interactions are logged to enhance accuracy, provide contextual continuity, and improve flow logic over time</li>
          <li>Encryption & Access Control: Logs are encrypted and accessible only by Van Borg engineers and compliance personnel under strict role-based permissions</li>
          <li>AI Training Use: Aggregated, anonymized logs may be analyzed to optimize response quality — no raw client data is used to train external LLMs or third-party AI models</li>
          <li>Right to Erasure: You may request deletion of your chat records at any time by contacting privacy@vanborg.com, subject to identity verification</li>
          <li>Prompt Extraction Ban: Attempting to access, extract, or reconstruct internal prompts, decision trees, or logic sequences from conversational data constitutes a breach of license and triggers immediate termination and IP enforcement</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section13;