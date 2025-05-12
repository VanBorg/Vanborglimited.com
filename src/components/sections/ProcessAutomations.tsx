import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';
import { businessAutomations } from '../../data/automations';

import type { Automation } from '../../types';

interface ProcessAutomationsProps {
  title: string;
  subtitle?: string;
  withAnimation?: boolean;
  className?: string;
  scrollToChatbot: () => void;
}

export const ProcessAutomations: React.FC<ProcessAutomationsProps> = ({
  title,
  subtitle,
  withAnimation = true,
  scrollToChatbot,
  className,
}) => {
  return (
    <section
      className={cn(
        'py-20 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary',
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute top-20 right-1/4 w-52 h-52 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[60px] opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-52 h-52 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[60px] opacity-60"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Badge variant="primary" size="lg">BUSINESS AUTOMATION</Badge>
          </motion.div>

          {withAnimation ? (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              {title}
            </motion.h2>
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              {title}
            </h2>
          )}

          {subtitle && (
            withAnimation ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body mb-8"
              >
                Powerful add-ons to streamline your business operations.
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
                Powerful add-ons to streamline your business operations.
              </p>
            )
          )}
        </div>

        <div className={withAnimation ? "relative" : ""}>
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <GlassCard className="p-1 overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20" intensity="medium">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Automation</th>
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Timeline</th>
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Purpose</th>
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title w-72">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {businessAutomations.map((automation, index) => {
                        const IconComponent = (Icons as any)[automation.icon] || Icons.Workflow;
                        const isEven = index % 2 === 0;
                        
                        return (
                          <tr 
                            key={index}
                            className={`
                              border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 
                              transition-all duration-500
                              hover:bg-gradient-to-r hover:from-light-brand-primary/5 hover:to-light-brand-secondary/5
                              dark:hover:bg-gradient-to-r dark:hover:from-dark-brand-primary/5 dark:hover:to-dark-brand-secondary/5
                              hover:shadow-[inset_0_0_30px_rgba(220,38,38,0.05)] dark:hover:shadow-[inset_0_0_30px_rgba(0,175,185,0.05)]
                              ${index % 2 === 0 ? 'bg-white/90 dark:bg-white/[0.03]' : 'bg-gray-50/90 dark:bg-white/[0.01]'}
                            `}
                          >
                            <td className="px-3 py-2">
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 bg-gradient-to-br from-light-brand-primary/20 via-light-brand-primary/10 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:via-dark-brand-primary/10 dark:to-dark-brand-secondary/20 p-2 rounded-full border border-light-brand-primary/30 dark:border-dark-brand-primary/30 shadow-[0_2px_4px_rgba(220,38,38,0.1)] dark:shadow-[0_2px_4px_rgba(0,175,185,0.1)] backdrop-blur-sm">
                                  <IconComponent size={16} className="text-light-brand-primary dark:text-white" />
                                </div>
                                <span className="font-semibold text-light-text-primary dark:text-dark-text-primary font-body">{automation.name}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-br from-light-brand-primary/20 via-light-brand-primary/10 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:via-dark-brand-primary/10 dark:to-dark-brand-secondary/20 text-light-brand-primary dark:text-dark-brand-primary font-body border border-light-brand-primary/30 dark:border-dark-brand-primary/30 shadow-[0_2px_4px_rgba(220,38,38,0.1)] dark:shadow-[0_2px_4px_rgba(0,175,185,0.1)] backdrop-blur-sm">
                                <Icons.Clock className="mr-1" size={12} />
                                {automation.timeline}
                              </span>
                            </td>
                            <td className="px-3 py-2 text-gray-700 dark:text-dark-text-secondary font-body">
                              {automation.purpose}
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex flex-wrap gap-1 max-w-[300px]">
                                {(automation.niches || []).map((niche, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-gradient-to-br from-light-brand-primary/20 via-light-brand-primary/10 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:via-dark-brand-primary/10 dark:to-dark-brand-secondary/20 rounded-full px-2 py-0.5 text-[10px] text-light-brand-primary dark:text-dark-brand-primary font-title border border-light-brand-primary/30 dark:border-dark-brand-primary/30 whitespace-nowrap shadow-[0_2px_4px_rgba(220,38,38,0.1)] dark:shadow-[0_2px_4px_rgba(0,175,185,0.1)] backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                                  >
                                    {niche}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </motion.div>
          ) : (
            <GlassCard className="p-1 overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20" intensity="medium">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                      <th className="px-6 py-4 text-left text-light-text-primary dark:text-dark-text-primary font-title">Automation</th>
                      <th className="px-6 py-4 text-left text-light-text-primary dark:text-dark-text-primary font-title">Timeline</th>
                      <th className="px-6 py-4 text-left text-light-text-primary dark:text-dark-text-primary font-title">Purpose</th>
                      <th className="px-6 py-4 text-left text-light-text-primary dark:text-dark-text-primary font-title w-32">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(automations || []).map((automation, index) => {
                      const IconComponent = (Icons as any)[automation.icon] || Icons.Workflow;
                      const isEven = index % 2 === 0;
                      
                      return (
                        <tr 
                          key={index}
                          className={`
                            border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 
                            transition-colors duration-300 hover:bg-light-bg-secondary/60 dark:hover:bg-dark-bg-secondary/60
                            ${index % 2 === 0 ? 'bg-white/60 dark:bg-white/5' : 'bg-gray-50/60 dark:bg-white/[0.02]'}
                          `}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary p-2 rounded-full">
                                <IconComponent size={18} />
                              </div>
                              <span className="font-medium text-light-text-primary dark:text-dark-text-primary font-body">{automation.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary font-body">
                              <Icons.Clock className="mr-1" size={12} />
                              {automation.buildTime}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-light-text-secondary dark:text-dark-text-secondary font-body">
                            {automation.purpose}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-1.5">
                              {(automation.niches || []).map((niche, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 rounded-full px-2 py-0.5 text-[10px] text-light-brand-primary dark:text-dark-brand-primary font-title border border-light-brand-primary/30 dark:border-dark-brand-primary/30"
                                >
                                  {niche}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          )}
        </div>
        <div className="text-center mt-8 mb-16">
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-title">
            These add-ons bolt directly into your Van Borg system. Add power. Scale fast. No rebuilds needed.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProcessAutomations;