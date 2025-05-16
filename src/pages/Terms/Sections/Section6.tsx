import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section6: React.FC = () => {
  return (
    <GlassCard className="p-6" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
          6. MAINTENANCE PLAN REQUIREMENTS
        </h2>
        <p>
          All Van Borg AI systems require an active maintenance agreement. These plans are non-optional, enforced, and directly tied to your license status. No maintenance = no live deployment. Period.
        </p>
        
        <h3 className="text-lg font-semibold mt-6 mb-4">Essential Maintenance Plan (Mandatory)</h3>
        <p>
          Monthly Cost: €50/month<br />
          Applies To: All Bot Tiers (01–04)
        </p>
        <p>
          Purpose:<br />
          Provides core infrastructure protection to keep your system operational, secure, and online. Covers baseline support and reliability — nothing runs without it.
        </p>
        <p>
          Includes:
        </p>
        <ul>
          <li>Hosting and uptime deployment</li>
          <li>99.9% uptime monitoring</li>
          <li>SSL & security patch enforcement</li>
          <li>Dependency & module updates</li>
          <li>Make scenario health checks and token refreshes</li>
          <li>Emergency bug fix response (48h SLA)</li>
          <li>Monthly logs and uptime reporting</li>
          <li>Monthly backup of all flows and automation structures</li>
        </ul>
        <p>
          Enforced Terms:
        </p>
        <ul>
          <li>Required for any chatbot or system to remain live</li>
          <li>Service suspension within 72 hours upon non-payment</li>
          <li>No support or infrastructure permitted outside this plan</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-4">Scalable Maintenance & Services Plan (Performance-Based)</h3>
        <p>
          Monthly Cost: €100–€1,200+ (based on usage, complexity, automation volume)<br />
          Applies To: All Bot Tiers (01–04)
        </p>
        <p>
          Purpose:<br />
          Designed to scale with the size, usage, and commercial impact of your bot. Enables high-performance systems with live tracking, ongoing logic improvements, and business-driven upgrades.
        </p>
        <p>
          Includes Everything in the Essential Plan, plus:
        </p>
        <ul>
          <li>Full logic and automation maintenance (up to 8 flows)</li>
          <li>CRM, Stripe, WhatsApp, Calendly, GPT token audits</li>
          <li>Integration health check and error tracing</li>
          <li>Monthly strategic performance report</li>
          <li>GPT logic optimization and prompt refinement</li>
          <li>Up to 2–8 change requests per month (logic/content)</li>
          <li>Optional memory refactors and new routing paths</li>
          <li>Dashboard and analytics support (if integrated)</li>
        </ul>
        <p>
          Scales Based on:
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">FACTOR</th>
              <th className="border border-gray-300 p-2">IMPACT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">AUTOMATIONS</td>
              <td className="border border-gray-300 p-2">More than 3 = higher cost</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">INTEGRATIONS</td>
              <td className="border border-gray-300 p-2">Stripe, WhatsApp, GPT = more upkeep</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">USAGE VOLUME</td>
              <td className="border border-gray-300 p-2">High traffic or multilingual = increase</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">UPDATE FREQUENCY</td>
              <td className="border border-gray-300 p-2">More monthly edits = scale up</td>
            </tr>
          </tbody>
        </table>
        <p>
          Estimated Tiers:
        </p>
        <ul>
          <li>€100–€300 → Basic 2–3 flow builds</li>
          <li>€400–€700 → Booking + integrated bots</li>
          <li>€800–€1,200+ → Custom AI logic, GPT-heavy systems</li>
        </ul>
        <p>
          Enforced Terms:
        </p>
        <ul>
          <li>Auto-adjusts upward when system usage exceeds threshold</li>
          <li>Advance notice via email for any tier changes</li>
          <li>Downgrades allowed only after audit and usage review</li>
        </ul>
      </div>
    </GlassCard>
  );
};

export default Section6;