import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section5: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          5. Cookies, Analytics, and Automated Collection Technologies
        </h2>
        <p>
          Van Borg Limited implements non-invasive, privacy-first data collection technologies to maintain platform stability, monitor performance, and improve service quality.
        </p>
        <p>
          No advertising, retargeting, or behavioral profiling cookies are used at any point.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          5.1 Cookie Usage Overview
        </h3>
        <ul>
          <li>Strictly Necessary Cookies Only: Cookies are deployed exclusively to support session security, load balancing, and functional system behavior.</li>
          <li>No Marketing or Third-Party Ad Trackers: We do not use behavioral retargeting, profile building, or cross-site user identification methods.</li>
          <li>Anonymous Analytics: Platform usage metrics (e.g., page duration, bounce rate, regional distribution) are collected in fully anonymized form, without PII linkage.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-light-text-primary dark:text-dark-text-primary">
          5.2 Consent and User Control
        </h3>
        <ul>
          <li>Where jurisdictionally required (e.g., EU, UK, UAE), all non-essential cookies are subject to explicit, user-granted opt-in consent.</li>
          <li>Consent is revocable at any time via in-platform controls or browser settings.</li>
          <li>We maintain full logs of cookie preferences for audit compliance where applicable.</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section5;