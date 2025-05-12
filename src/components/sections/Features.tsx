import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  withAnimation?: boolean;
  className?: string;
}

export const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
  withAnimation = true,
  className,
}) => {
  return (
    <section
      className={cn(
        'py-20 relative',
        'bg-light-bg-primary dark:bg-dark-bg-primary',
        className
      )}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {withAnimation ? (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary"
            >
              {title}
            </motion.h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
              {title}
            </h2>
          )}

          {subtitle && (
            withAnimation ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-light-text-secondary dark:text-dark-text-secondary"
              >
                {subtitle}
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
                {subtitle}
              </p>
            )
          )}
        </div>

        <div className={cn(
          'grid gap-8',
          columns === 2 && 'grid-cols-1 md:grid-cols-2',
          columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          columns === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        )}>
          {features.map((feature, index) => {
            // Dynamically get the icon component from Lucide
            const IconComponent = (Icons as any)[feature.icon] || Icons.HelpCircle;
            
            return withAnimation ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={<IconComponent size={24} />}
                />
              </motion.div>
            ) : (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={<IconComponent size={24} />}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <GlassCard
      hoverEffect
      className="p-6 h-full flex flex-col"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-light-text-primary dark:text-dark-text-primary">
        {title}
      </h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary">
        {description}
      </p>
    </GlassCard>
  );
};

export default Features;