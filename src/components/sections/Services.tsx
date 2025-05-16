import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { Plus, Minus, Check, ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  title: string;
  subtitle?: string;
  services: ServiceItem[];
  withAnimation?: boolean;
  className?: string;
}

export const Services: React.FC<ServicesProps> = ({
  title,
  subtitle,
  services,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            return withAnimation ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ) : (
              <ServiceCard key={index} service={service} />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button 
            href="/services" 
            size="lg"
          >
            View All Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Dynamically get the icon component from Lucide
  const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

  return (
    <GlassCard
      className="h-full overflow-hidden transition-all duration-300"
      hoverEffect
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary">
              <IconComponent size={24} />
            </div>
            <h3 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary">
              {service.title}
            </h3>
          </div>
          <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
            {isExpanded ? (
              <Minus size={16} className="text-light-text-secondary dark:text-dark-text-secondary" />
            ) : (
              <Plus size={16} className="text-light-text-secondary dark:text-dark-text-secondary" />
            )}
          </div>
        </div>
        <p className="mt-4 text-light-text-secondary dark:text-dark-text-secondary">
          {service.description}
        </p>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-2">
          <div className="border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10 pt-4 mb-6">
            <h4 className="font-medium mb-4 text-light-text-primary dark:text-dark-text-primary">Key Benefits:</h4>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 mr-3 mt-0.5">
                    <Check size={14} className="text-light-brand-primary dark:text-dark-brand-primary" />
                  </div>
                  <span className="text-light-text-secondary dark:text-dark-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-light-text-secondary/70 dark:text-dark-text-secondary/70">
                Starting from
              </span>
              <div className="text-xl font-bold text-light-brand-primary dark:text-dark-brand-primary">
                €{Math.floor(Math.random() * 1000) + 1000}
              </div>
            </div>
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </GlassCard>
  );
};

export default Services;