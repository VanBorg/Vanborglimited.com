import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section7: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          7. ADD-ON MODULES & ENFORCEMENT
        </h2>
        <p>
          Add-on modules are licensed system expansions — not optional gadgets. They are core automation logic layers and are governed under the same license and enforcement as the primary bot.
        </p>
        <p>
          Modules Available:
        </p>
        <ul>
          <li>CRM SYNC</li>
          <li>EMAIL SEQUENCE TRIGGER</li>
          <li>LEAD QUIZ + LEAD MAGNET DELIVERY</li>
          <li>PLATFORM DM + ENGAGEMENT NUDGES</li>
          <li>LEAD FLOW OPTIMIZER</li>
          <li>INTELLIGENT FAQ + GPT Q&A ASSISTANT</li>
          <li>INSTANT BOOKING + CALENDAR SYNC</li>
          <li>AUTO PAYMENT TRIGGER</li>
          <li>AI RESPONSE COACHING</li>
          <li>POST-BOOKING UPSELL FLOW</li>
          <li>ATTENDANCE & BOOKING CONFLICT HANDLER</li>
          <li>WEEKLY MOTIVATION LOOP</li>
          <li>GOAL MILESTONE TRACKER</li>
          <li>GOAL-BASED PLAN GENERATOR</li>
        </ul>
        <p>
          Rules of Use:
        </p>
        <ul>
          <li>Licensed per project and tied to a specific bot</li>
          <li>Function only with an active maintenance plan</li>
          <li>May not be copied, exported, sandboxed, or cloned</li>
        </ul>
        <p>
          Violations Trigger:
        </p>
        <ul>
          <li>Immediate kill-switch for the module</li>
          <li>Parent bot lockout</li>
          <li>Legal pursuit for license violation</li>
        </ul>
        <p>
          If your automation stack depends on these, treat them as licensed assets — not tools.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section7;