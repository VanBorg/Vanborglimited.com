import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section1: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          1. ACCEPTANCE OF TERMS
        </h2>
        <p>
          This document is a binding, enforceable agreement between Van Borg Limited ("Van Borg", "we", "our") and any individual or entity ("Client", "you", "your") who accesses, engages with, licenses, or operates any Van Borg system, service, or infrastructure component.
        </p>
        <p>
          By initiating any engagement with Van Borg—whether via inquiry, deposit payment, system onboarding, or usage—you unconditionally accept these Terms of Service. Refusal to comply voids your license, your access rights, and your ability to benefit from any Van Borg asset.
        </p>
        <p>
          No Use Without License: Van Borg systems are never offered under open-ended or freemium SaaS conditions. Every asset is strictly licensed, monitored, and protected. Casual use, unauthorized replication, or sandboxing of logic is prohibited and will trigger automated enforcement mechanisms, including remote kill-switch deactivation and legal follow-up.
        </p>
        <p>
          This agreement is non-negotiable and enforceable under UK commercial law.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section1;