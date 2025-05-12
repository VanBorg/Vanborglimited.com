import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import GlassCard from '../../../components/ui/GlassCard';
import Badge from '../../../components/ui/Badge';
import { Star } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
  withAnimation?: boolean;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title = "Licensed AI Systems. Built to Run Your Business.",
  subtitle = `Van Borg doesn't sell chatbots — we license full-stack AI infrastructure built for 11 revenue-driving industries. No SaaS bloat. No platform lock-ins. No weak flows. You get automation that converts, scales, and enforces results — under strict IP protection.`,
  benefits = [
    {
  icon: 'Crown',
  title: 'Licensed Systems. Zero Compromise.',
  description: 'You’re not buying chatbot software — you’re licensing real AI infrastructure protected by strict IP control.',
  highlights: [
    'Strategic licensing model',
    'No resale, no cloning, no self-hosting',
    'Plan required for active access'
  ]
},
{
  icon: 'LineChart',
  title: 'Modular Growth That Matches Your Revenue',
  description: 'Start lean with a core bot, then plug in CRM sync, WhatsApp, or analytics when the time is right.',
  highlights: [
    'Upgrade without rebuilding',
    'CRM, loyalty, WhatsApp, dashboards',
    'Add only what drives ROI'
  ]
},
{
  icon: 'Database',
  title: 'Your Data. Locked, Logged, and Yours.',
  description: 'Every lead, every log, every user interaction is stored securely — and fully yours with export access.',
  highlights: [
    'GDPR-compliant infrastructure',
    'Private, dedicated deployment',
    'Full data control + export rights'
  ]
},
{
  icon: 'Rocket',
  title: 'Deployed in Days. Built for Scale.',
  description: 'Core bots launch in 2–14 days. Full automation builds in 3–6 weeks — with zero platform bloat.',
  highlights: [
    'Fast rollout, real timelines',
    'No bloated platforms',
    'No development drag'
  ]
}

  ],
  withAnimation = true,
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
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
            className="mb-8"
          >
            <Badge variant="primary" size="lg">WHY VAN BORG</Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Benefits cards - Enhanced with more visual effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = (Icons as any)[benefit.icon] || Icons.Check;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="transform hover:scale-105 transition-all duration-300"
                as="div"
              >
                <GlassCard
                  className="p-6 h-full flex flex-col relative overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20"
                  intensity="medium"
                  hoverEffect
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  
                  <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 shadow-lg border border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                    <IconComponent size={32} className="text-light-brand-primary dark:text-dark-brand-primary" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary font-title">
                      {benefit.title}
                    </h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Added highlights section */}
                  <div className="mt-auto pt-4 border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                    <ul className="space-y-1">
                      {benefit.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Star size={12} className="text-light-brand-primary dark:text-dark-brand-primary mr-2 flex-shrink-0" />
                          <span className="text-light-text-secondary dark:text-dark-text-secondary font-body">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Line */}
        <div className="text-center mt-12">
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary font-title">
            Build once. Own forever. Or let us handle the backend — your AI, your way.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;