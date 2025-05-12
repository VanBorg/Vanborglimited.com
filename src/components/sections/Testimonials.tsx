import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import type { Testimonial } from '../../types';
import { Quote, TrendingUp, Clock, Percent } from 'lucide-react';

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
        'bg-black',
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
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              {title}
            </motion.h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
                className="text-xl text-gray-300"
              >
                {subtitle}
              </motion.p>
            ) : (
              <p className="text-xl text-gray-300">
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
                  icon={<TrendingUp className="text-cyan-400" size={24} />}
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
                  icon={<Clock className="text-cyan-400" size={24} />}
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
                  icon={<Percent className="text-cyan-400" size={24} />}
                />
              </motion.div>
            </>
          ) : (
            <>
              <BusinessImpactCard 
                metric="Average Lead Conversion"
                value="+127%"
                icon={<TrendingUp className="text-cyan-400" size={24} />}
              />
              <BusinessImpactCard 
                metric="Time Saved Weekly"
                value="20+ Hours"
                icon={<Clock className="text-cyan-400" size={24} />}
              />
              <BusinessImpactCard 
                metric="Average ROI"
                value="500%"
                icon={<Percent className="text-cyan-400" size={24} />}
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

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-6 h-full bg-black/90 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <Quote size={24} className="text-cyan-400 opacity-80" />
        </div>
        <p className="italic mb-6 text-gray-300 flex-grow">
          "{testimonial.quote}"
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p className="font-medium text-white">
              {testimonial.author}
            </p>
            <p className="text-sm text-gray-400">
              {testimonial.company}
            </p>
          </div>
          <div className="bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/20">
            <div className="text-xs uppercase tracking-wider text-gray-400">
              {testimonial.impact.metric}
            </div>
            <div className="text-xl font-bold text-cyan-400">
              {testimonial.impact.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BusinessImpactCardProps {
  metric: string;
  value: string;
  icon: React.ReactNode;
}

const BusinessImpactCard: React.FC<BusinessImpactCardProps> = ({ metric, value, icon }) => {
  return (
    <div className="p-6 text-center h-full bg-black/90 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
      <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2 text-cyan-400">
        {value}
      </h3>
      <p className="text-gray-300">
        {metric}
      </p>
    </div>
  );
};

export default Testimonials;