import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import GlassCard from '../../../components/ui/GlassCard';
import Badge from '../../../components/ui/Badge';
import { Check, AlertCircle } from 'lucide-react';

const maintenancePlans = [
  {
    name: "🔧 Essential Maintenance Plan (Mandatory)",
    price: "€50/month",
    appliesTo: "All Bots",
    purpose: "Covers core infrastructure to keep your chatbot online, functional, secure, and synced. This is the non-negotiable baseline for all bots.",
    inclusions: [
      "Hosting",
      "99.9% uptime monitoring",
      "SSL certificate management",
      "Security patches & dependency updates",
      "Make scenario health checks & token refreshes",
      "Bug fixes (response within 48h)",
      "Basic logs & monthly uptime summary",
      "Monthly backup of flows and automations"
    ],
    enforcedTerms: [
      "Required for any chatbot to remain live",
      "72-hour shutdown on missed payment",
      "No support or hosting outside this plan"
    ]
  },
  {
    name: "🚀 Scalable Maintenance & Services Plan (Performance-Based)",
    price: "€100–€1,200+/month",
    appliesTo: "All Bots",
    purpose: "Grows with the demands of the system — provides performance tuning, logic scaling, user tracking, and strategic support.",
    inclusions: [
      "Everything in the Essential Plan",
      "Advanced maintenance (multiple automations)",
      "CRM sync oversight and API limit monitoring",
      "Stripe/Calendly/WhatsApp/GPT token and session auditing",
      "Monthly strategy report (conversion, usage, failures, drop-off points)",
      "GPT prompt tuning or logic improvements",
      "Up to 2–8 logic or content changes/month",
      "Optional: memory rebuilds, new routing paths",
      "Analytics dashboards (if integrated)"
    ],
    scalesBasedOn: [
      "NUMBER OF AUTOMATIONS: >5 automations, layered flows",
      "INTEGRATIONS USED: Stripe, GPT, WhatsApp, CRM = more upkeep",
      "USAGE VOLUME: High traffic, token loads, multilingual bots",
      "CHANGE FREQUENCY: Multiple monthly updates required"
    ],
    estimatedTiers: [
      "€100–€300/month → Light bots (2–3 flows)",
      "€400–€700/month → Booking/Performance bots with integrations",
      "€800–€1,200+/month → Custom AI bots, GPT routing, advanced logic"
    ],
    enforcedTerms: [
      "Scales automatically if usage or changes exceed cap",
      "Email notice sent before rate change",
      "Can downgrade only after full audit"
    ]
  }
];

const maintenanceSummary = {
  summary:
    "Essential Plan = baseline protection, hosting and reliability. Scalable Plan = performance, scale, evolution, automation depth. Both are structured for long-term operation of serious AI systems."
};

export default function MaintenancePlansSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Badge variant="primary" size="lg">MAINTENANCE PLANS</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
          >
            Maintenance Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body"
          >
            Van Borg bots are licensed systems — not SaaS junk. These plans enforce uptime, protect your IP, and scale performance.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {maintenancePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                className="p-0 h-full border-3 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 transition-all duration-300 hover:shadow-[0_4px_0_0_rgba(220,38,38,0.3),0_0_30px_rgba(220,38,38,0.3)] dark:hover:shadow-[0_4px_0_0_rgba(0,175,185,0.3),0_0_50px_rgba(0,175,185,0.3)]"
                intensity="heavy"
              >
                {/* Header section with gradient */}
                <div className="p-6 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/10">
                  <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary font-title mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-light-text-secondary dark:text-dark-text-secondary font-title px-3 py-1 bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 rounded-lg">
                      {plan.appliesTo}
                    </div>
                    <div className="text-xl font-bold text-light-brand-primary dark:text-dark-brand-primary">
                      {plan.price}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Purpose */}
                  <div className="mb-6 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-4 rounded-lg border-l-4 border-light-brand-primary dark:border-dark-brand-primary">
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">
                      {plan.purpose}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title">Inclusions:</h4>
                    <ul className="space-y-2">
                      {plan.inclusions.map((inclusion, i) => (
                        <li key={i} className="flex items-start">
                          <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-2 mt-0.5">
                            <Check size={14} className="text-light-brand-primary dark:text-dark-brand-primary" />
                          </div>
                          <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scales Based On (if exists) */}
                  {plan.scalesBasedOn && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title">Scales Based On:</h4>
                      <ul className="space-y-2">
                        {plan.scalesBasedOn.map((scale, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 p-1 mr-2 mt-0.5">
                              <AlertCircle size={14} className="text-light-brand-secondary dark:text-dark-brand-secondary" />
                            </div>
                            <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{scale}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Estimated Tiers (if exists) */}
                  {plan.estimatedTiers && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title">Estimated Tiers:</h4>
                      <ul className="space-y-2">
                        {plan.estimatedTiers.map((tier, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-2 mt-0.5">
                              <Check size={14} className="text-light-brand-primary dark:text-dark-brand-primary" />
                            </div>
                            <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{tier}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Enforced Terms */}
                  <div className="mt-6 pt-6 border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                    <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title">Enforced Terms:</h4>
                    <ul className="space-y-2">
                      {plan.enforcedTerms.map((term, i) => (
                        <li key={i} className="flex items-start">
                          <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-2 mt-0.5">
                            <AlertCircle size={14} className="text-light-brand-primary dark:text-dark-brand-primary" />
                          </div>
                          <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-body font-medium">
            <strong>{maintenanceSummary.summary}</strong>
          </p>
        </div>
      </Container>
    </section>
  );
} 