import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section9: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          9. ENFORCEMENT & VIOLATIONS
        </h2>
        <p>
          Van Borg Limited operates under a zero-tolerance policy for license breaches, infrastructure violations, and intellectual property theft. All systems are equipped with enforcement triggers, and all contracts include protective clauses enforceable under UK commercial law.
        </p>
        <p>
          Violations Include (but are not limited to):
        </p>
        <ul>
          <li>Hosting any part of a Van Borg system on unapproved infrastructure</li>
          <li>Exporting or duplicating flow logic, prompt structures, or AI scaffolding</li>
          <li>Operating any system without an active, licensed Maintenance Plan</li>
          <li>Modifying, reselling, or embedding Van Borg assets into external tools or platforms</li>
          <li>Attempting to bypass licensing protections, kill-switches, or rate limits</li>
        </ul>
        <p>
          Immediate Consequences:
        </p>
        <ul>
          <li>System-wide kill-switch triggered within minutes of breach confirmation</li>
          <li>Full access termination for all related assets, domains, and endpoints</li>
          <li>License revocation and service termination with no refund</li>
          <li>Legal proceedings initiated under UK and international IP enforcement standards</li>
        </ul>
        <p>
          Silent Enforcement Rights:
        </p>
        <ul>
          <li>Van Borg may monitor system health and configuration silently</li>
          <li>Kill-switch, revocation, and blacklist functions may be triggered without warning</li>
          <li>You waive any right to appeal enforcement actions resulting from a proven breach</li>
        </ul>
        <p>
          If you operate on Van Borg infrastructure, you operate under license — not ownership. All violations are enforceable, traceable, and permanent.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section9;