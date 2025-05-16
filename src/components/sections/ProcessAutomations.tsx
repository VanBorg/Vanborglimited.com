import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';
import { businessAutomations } from '../../data/automations';
import { Button } from '../ui/Button';

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
  className,
  scrollToChatbot,
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
                {subtitle.split('. Add power')[0]}.
                <br />
                Add power. Scale fast.
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
                {subtitle.split('. Add power')[0]}.
                <br />
                Add power. Scale fast.
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
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">What It Does</th>
                        <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {businessAutomations.map((automation, index) => (
                        <tr 
                          key={index}
                          className={`border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 ${
                            index % 2 === 0 
                              ? "bg-light-bg-secondary/60 dark:bg-dark-bg-secondary/70" 
                              : "bg-light-bg-primary/90 dark:bg-dark-bg-primary/95"
                          } hover:bg-light-brand-primary/30 dark:hover:bg-dark-brand-primary/15 transition-colors duration-200`}
                        >
                          <td className="px-3 py-2 text-light-text-primary dark:text-dark-text-primary font-body">{automation.name}</td>
                          <td className="px-3 py-2 text-light-text-secondary dark:text-dark-text-secondary font-body">{automation.description}</td>
                          <td className="px-3 py-2 text-light-text-primary dark:text-dark-text-primary font-body">{automation.timeline}</td>
                        </tr>
                      ))}
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
                      <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Automation</th>
                      <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">What It Does</th>
                      <th className="px-3 py-2.5 text-left text-light-text-primary dark:text-dark-text-primary font-title">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessAutomations.map((automation, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 ${
                          index % 2 === 0 
                            ? "bg-light-bg-secondary/60 dark:bg-dark-bg-secondary/70" 
                            : "bg-light-bg-primary/90 dark:bg-dark-bg-primary/95"
                        } hover:bg-light-brand-primary/30 dark:hover:bg-dark-brand-primary/15 transition-colors duration-200`}
                      >
                        <td className="px-3 py-2 text-light-text-primary dark:text-dark-text-primary font-body">{automation.name}</td>
                        <td className="px-3 py-2 text-light-text-secondary dark:text-dark-text-secondary font-body">{automation.description}</td>
                        <td className="px-3 py-2 text-light-text-primary dark:text-dark-text-primary font-body">{automation.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          )}
        </div>
        <div className="text-center mt-8 mb-8">
          <Button
            onClick={scrollToChatbot}
            variant="outline"
            size="lg"
            className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5"
          >
            Chat With the Van Borg Assistant
          </Button>
        </div>
        <div className="text-center mb-16">
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-title">
            These add-ons bolt directly into your Van Borg system. Add power. Scale fast.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProcessAutomations;