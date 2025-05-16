import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section3: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          3. LICENSING & INTELLECTUAL PROPERTY
        </h2>
        <p>
          Van Borg systems are governed by strict licensing terms. You are not purchasing software; you are entering a structured license agreement defining limited use rights and clear boundaries.
        </p>
        <p>
          Client Owns:
        </p>
        <ul>
          <li>Custom chatbot scripts, forms, and flows created specifically for your business</li>
          <li>Client-facing copy and UI/UX elements unique to your deployment</li>
          <li>Any customer data collected through your system</li>
          <li>Any uniquely developed frontend component</li>
        </ul>
        <p>
          Van Borg Retains:
        </p>
        <ul>
          <li>Core logic frameworks and underlying automation scaffolds</li>
          <li>Flow structures, prompt scripting architecture, and decision trees</li>
          <li>All backend automation logic and proprietary integration wiring</li>
          <li>IP rights, kill-switch access, enforcement tools, and deployment frameworks</li>
        </ul>
        <p>
          Non-Negotiables:
        </p>
        <ul>
          <li>You cannot copy, sandbox, export, or clone any part of the Van Borg logic</li>
          <li>Breach triggers instant deactivation of the system and potential legal action</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section3;