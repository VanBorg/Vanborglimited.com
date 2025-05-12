import { motion } from 'framer-motion';
import Container from '../../../components/ui/Container';
import Badge from '../../../components/ui/Badge';
import AutomationsTable from './AutomationsTable';
import GlassCard from '../../../components/ui/GlassCard';
import * as Icons from 'lucide-react';
import { businessAutomations } from '../../../data/automations';

import type { Automation } from '../../../types';

interface AutomationsSectionProps {
  title?: string;
  subtitle?: string;
  withAnimation?: boolean;
  scrollToChatbot: () => void;
}

const AutomationsSection: React.FC<AutomationsSectionProps> = ({
  title = "Business Automations & Add-Ons",
  subtitle = "Extend your Van Borg system with powerful automations that capture leads, boost conversions, and scale your operations.",
  scrollToChatbot
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
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
            <Badge variant="primary" size="lg">BUSINESS AUTOMATION</Badge>
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

        <AutomationsTable automations={businessAutomations} />
        
        <div className="text-center mt-8 mb-16">
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-body font-medium">
            <strong>These add-ons bolt directly into your Van Borg system. Add power. Scale fast. No rebuilds needed.</strong>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AutomationsSection;