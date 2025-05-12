import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import { cn } from '../../../utils/cn';
import type { Testimonial } from '../../../types';
import { TrendingUp, Clock, Percent } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';
import BusinessImpactCard from './components/BusinessImpactCard';

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  withAnimation?: boolean;
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials = [], // Provide default value to prevent map errors
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

        {/* Business Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {withAnimation ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <BusinessImpactCard 
                  metric="Average Lead Conversion"
                  value="+127%"
                  icon={<TrendingUp className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <BusinessImpactCard 
                  metric="Time Saved Weekly"
                  value="20+ Hours"
                  icon={<Clock className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <BusinessImpactCard 
                  metric="Average ROI"
                  value="500%"
                  icon={<Percent className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
                />
              </motion.div>
            </>
          ) : (
            <>
              <BusinessImpactCard 
                metric="Average Lead Conversion"
                value="+127%"
                icon={<TrendingUp className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
              />
              <BusinessImpactCard 
                metric="Time Saved Weekly"
                value="20+ Hours"
                icon={<Clock className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
              />
              <BusinessImpactCard 
                metric="Average ROI"
                value="500%"
                icon={<Percent className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />}
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials && testimonials.map((testimonial, index) => {
            return withAnimation ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ) : (
              <TestimonialCard key={index} testimonial={testimonial} />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;