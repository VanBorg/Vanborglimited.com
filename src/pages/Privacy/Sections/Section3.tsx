import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section3: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          3. Licensing Terms
        </h2>
        <p>
          Van Borg Limited provides all systems and services strictly under a non-exclusive, non-transferable, and revocable license agreement. No aspect of Van Borg's intellectual property—whether software, logic, infrastructure, AI training data, or documentation—is sold, assigned, or granted as ownership to any party.
        </p>
        
        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          3.1 Scope of License
        </h3>
        <ul>
          <li>Clients are granted usage rights solely for the purpose of operating within the boundaries of the defined license tier and deployment scope.</li>
          <li>Each license is bound to a specific domain, user group, and system configuration.</li>
          <li>Any unauthorized expansion, duplication, or redistribution shall be treated as a material breach.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          3.2 IP Ownership & Protection
        </h3>
        <ul>
          <li>All source logic, AI flow structures, system architecture, automation modules, and integrated prompts remain the exclusive intellectual property of Van Borg Limited.</li>
          <li>Any attempt to reverse-engineer, extract, replicate, clone, or embed Van Borg logic into third-party frameworks—whether manually or via AI tools—is strictly prohibited.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          3.3 Enforcement Conditions
        </h3>
        <ul>
          <li>
            Van Borg reserves the absolute right to suspend or terminate access to licensed systems immediately upon detection of any violation including, but not limited to:
            <ul>
              <li>Non-payment</li>
              <li>Cloning or unauthorized redistribution</li>
              <li>Hosting the system on unapproved infrastructure</li>
              <li>Breach of data access or prompt integrity clauses</li>
            </ul>
          </li>
        </ul>
        <p>Violation triggers may result in:</p>
        <ul>
          <li>License revocation</li>
          <li>Immediate deactivation via infrastructure-level kill-switches</li>
          <li>Permanent access loss without refund</li>
          <li>Legal action for intellectual property infringement</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section3;