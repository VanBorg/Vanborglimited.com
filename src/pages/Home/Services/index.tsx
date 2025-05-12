import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import { cn } from '../../../utils/cn';
import Button from '../../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../../types';
import ServiceCard from './components/ServiceCard';

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
            className="group"
            size="lg"
          >
            View All Solutions
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;