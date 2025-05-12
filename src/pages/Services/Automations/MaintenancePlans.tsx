import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import GlassCard from '../../../components/ui/GlassCard';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { Check, Shield, Bot, Clock, ArrowRight, Zap } from 'lucide-react';

const maintenancePlans = [
  {
    name: 'Essential Maintenance',
    price: '€250–€500/month',
    tagline: 'Baseline Protection. No Bloat.',
    description: 'Foundational support to keep your AI system secure, compliant, and stable. Required for 01 and 02 bot tiers.',
    inclusions: [
      'Hosting & Infrastructure (Netlify, VPS, or Edge)',
      'SSL Certificate + HTTPS enforcement',
      '24/7 Uptime Monitoring + Alerts',
      'Emergency Bug Fixes + Core Updates',
      'Monthly Backups & Log Retention',
      'Basic Response Retraining',
      'Email Support (48h SLA)',
      'Monthly Performance Review'
    ],
    botTiers: ['01. Lead Capture System', '02. Client Booking Assistant'],
    enforcement: [
      'Missed payments = license revoked after 72 hours',
      'Unauthorized use = breach of contract'
    ],
    benefits: [
      'Zero maintenance overhead',
      'System compliance guaranteed',
      'Ready to upgrade when scaling'
    ]
  },
  {
    name: 'Proactive Optimization',
    price: '€600–€2,500/month',
    tagline: 'Optimization-as-Infrastructure.',
    description: 'Full-service optimization and scaling infrastructure. Built for bots that generate revenue, power operations, and evolve with strategy. Required for 03 and 04 bot tiers.',
    inclusions: [
      '✅ Everything in Essential, plus:',
      '2x Flow Rewrites per Month (extra @ €50/each)',
      'Conversion Copy Optimization',
      'Monthly Performance & UX Audits',
      'Seasonal Campaign Management',
      'Priority Support (24h SLA)',
      'Advanced Analytics Dashboard',
      'Weekly Strategy Calls',
      'Ongoing Prompt/Flow Re-training'
    ],
    botTiers: ['03. Full-Service Chat Automation', '04. Custom AI Solution'],
    billing: [
      'OpenAI API: $0.15 input / $0.60 output per million tokens',
      'WhatsApp API: Avg. €0.11 per conversation',
      'Usage monitored; alerts on limits'
    ],
    benefits: [
      'Max ROI through active conversion optimization',
      'Full marketing stack integrations',
      'Strategy + execution on autopilot',
      'Enforced license protection'
    ]
  }
];

const MaintenancePlans: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="text-center mb-16">
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

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {maintenancePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                className="p-6 h-full border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20"
                intensity="heavy"
                hoverEffect
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
                      {plan.name}
                    </h3>
                    <div className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-2 rounded-full">
                      {index === 0 ? <Shield size={24} className="text-light-brand-primary dark:text-dark-brand-primary" /> : <Zap size={24} className="text-light-brand-primary dark:text-dark-brand-primary" />}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-light-brand-primary dark:text-dark-brand-primary mb-2 font-title">
                    {plan.price}
                  </div>
                  <div className="text-sm font-semibold text-light-brand-primary/80 dark:text-dark-brand-primary/80 mb-4 font-title">
                    {plan.tagline}
                  </div>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">
                    {plan.description}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary font-title flex items-center">
                    <Clock size={16} className="mr-2 text-light-brand-primary dark:text-dark-brand-primary" />
                    Inclusions:
                  </h4>
                  {plan.inclusions.map((inclusion, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-light-text-secondary dark:text-dark-text-secondary font-body"
                    >
                      <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-2 flex-shrink-0">
                        <Check size={12} className="text-light-brand-primary dark:text-dark-brand-primary" />
                      </div>
                      <span>{inclusion}</span>
                    </div>
                  ))}
                </div>

                {/* Bot Tier Compatibility */}
                <div className="mb-6">
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary font-title flex items-center mb-3">
                    <Bot size={16} className="mr-2 text-light-brand-primary dark:text-dark-brand-primary" />
                    Bot Tier Compatibility:
                  </h4>
                  <div className="space-y-2">
                    {plan.botTiers.map((tier, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-2">
                          <Check size={12} className="text-light-brand-primary dark:text-dark-brand-primary" />
                        </div>
                        <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{tier}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enforcement/Billing */}
                <div className="mb-6">
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary font-title flex items-center mb-3">
                    {index === 0 ? (
                      <>
                        <Shield size={16} className="mr-2 text-light-brand-primary dark:text-dark-brand-primary" />
                        Enforcement:
                      </>
                    ) : (
                      <>
                        <Zap size={16} className="mr-2 text-light-brand-primary dark:text-dark-brand-primary" />
                        Billing & Usage:
                      </>
                    )}
                  </h4>
                  <div className="space-y-2">
                    {(index === 0 ? plan.enforcement : plan.billing).map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <ArrowRight size={12} className="mr-2 text-light-brand-secondary dark:text-dark-brand-secondary" />
                        <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10 pt-4">
                  <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary font-title mb-3">Benefits:</h4>
                  <div className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-light-text-secondary dark:text-dark-text-secondary font-body">
                        <div className="rounded-full bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 p-1 mr-2 flex-shrink-0">
                          <Check size={12} className="text-light-brand-secondary dark:text-dark-brand-secondary" />
                        </div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5"
            >
              Talk to Our AI Assistant About Maintenance
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl text-light-text-secondary dark:text-dark-text-secondary font-title max-w-3xl mx-auto"
          >
            Choose the plan that fits your stage:<br />
            Essential keeps your system alive.<br />
            Proactive turns it into a growth engine.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default MaintenancePlans;