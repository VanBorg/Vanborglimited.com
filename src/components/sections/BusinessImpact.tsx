import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';
import * as Icons from 'lucide-react';
import type { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface BusinessStat {
  value: string;
  label: string;
  icon: string;
  prefix?: string;
}

interface BusinessImpactProps {
  title: string;
  subtitle?: string;
  stats: BusinessStat[];
  testimonials: Testimonial[];
  withAnimation?: boolean;
  className?: string;
}

export const BusinessImpact: React.FC<BusinessImpactProps> = ({
  title,
  subtitle,
  stats,
  testimonials,
  withAnimation = true,
  className,
}) => {
  return (
    <section
      className={cn(
        'py-16 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-primary via-light-bg-secondary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary',
        className
      )}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-light-brand-secondary/20 dark:bg-dark-brand-secondary/20 rounded-full blur-[120px] opacity-40"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="text-center mb-16">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge variant="primary" size="lg">PROVEN RESULTS</Badge>
            </motion.div>
          ) : (
            <div className="inline-block mb-4">
              <Badge variant="primary" size="lg">PROVEN RESULTS</Badge>
            </div>
          )}

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
                className="text-xl text-light-text-primary/80 dark:text-dark-text-primary/80 max-w-3xl mx-auto font-body"
              >
                {subtitle}
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-primary/80 dark:text-dark-text-primary/80 max-w-3xl mx-auto font-body">
                {subtitle}
              </p>
            )
          )}
        </div>

        {/* Brutal Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = (Icons as any)[stat.icon] || Icons.LineChart;
            
            const statCard = (
              <GlassCard
                key={index}
                className="p-6 text-center h-full transform transition-all duration-300 hover:scale-105 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.25)]"
                intensity="medium"
                hoverEffect
              >
                <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-light-brand-primary/30 to-light-brand-secondary/30 dark:from-dark-brand-primary/30 dark:to-dark-brand-secondary/30 border-2 border-light-brand-primary/50 dark:border-dark-brand-primary/50 shadow-[0_4px_15px_rgba(220,38,38,0.25)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.25)]">
                  <IconComponent size={28} className="text-light-brand-primary dark:text-dark-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-light-brand-primary dark:text-dark-brand-primary font-title">
                  <CounterAnimation 
                    value={stat.value} 
                    prefix={stat.prefix}
                    withAnimation={withAnimation}
                  />
                </h3>
                <p className="text-black dark:text-white font-body">
                  {stat.label}
                </p>
              </GlassCard>
            );
            
            if (withAnimation) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {statCard}
                </motion.div>
              );
            }
            
            return statCard;
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const testimonialCard = (
              <GlassCard 
                key={index}
                className="p-6 h-full border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.25)] transition-all duration-300" 
                intensity="medium"
                hoverEffect
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-light-brand-primary/30 to-light-brand-secondary/30 dark:from-dark-brand-primary/30 dark:to-dark-brand-secondary/30 border-2 border-light-brand-primary/50 dark:border-dark-brand-primary/50 shadow-[0_4px_15px_rgba(220,38,38,0.25)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.25)]">
                      <Quote size={20} className="text-light-brand-primary dark:text-dark-brand-primary" />
                    </div>
                  </div>
                  <p className="italic mb-6 text-light-text-secondary dark:text-white flex-grow font-body">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-medium text-light-text-primary dark:text-white font-body">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-light-text-secondary dark:text-white/80 font-body">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-light-brand-primary/10 to-light-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/10 px-4 py-2 rounded-lg border border-light-brand-primary/20 dark:border-dark-brand-primary/20">
                      <div className="text-xs uppercase tracking-wider text-gray-400">
                        {testimonial.impact.metric}
                      </div>
                      <div className="text-xl font-bold text-light-brand-primary dark:text-dark-brand-primary font-title">
                        {testimonial.impact.value}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
            
            if (withAnimation) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {testimonialCard}
                </motion.div>
              );
            }
            
            return testimonialCard;
          })}
        </div>
      </Container>
    </section>
  );
};

interface CounterAnimationProps {
  value: string;
  prefix?: string;
  withAnimation: boolean;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ value, prefix, withAnimation }) => {
  // Check if the value is a number with a suffix (e.g., "24K" or "120+")
  const match = value.match(/^(\d+)([A-Za-z%+]+)$/);
  let numericValue = 0;
  let suffix = '';
  
  if (match) {
    numericValue = parseInt(match[1], 10);
    suffix = match[2];
  } else {
    numericValue = parseInt(value, 10) || 0;
  }
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [currentValue, setCurrentValue] = React.useState(0);
  
  useEffect(() => {
    if (isInView && withAnimation) {
      let startTime: number;
      const duration = 1500; // 1.5 seconds for animation
      
      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.floor(easedProgress * numericValue);
        setCurrentValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    } else if (!withAnimation) {
      setCurrentValue(numericValue);
    }
  }, [isInView, numericValue, withAnimation]);
  
  return (
    <span ref={ref} className="relative">
      <span className="absolute -top-1 -left-2 -right-2 -bottom-0 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
      {prefix}{currentValue}{suffix}
    </span>
  );
};

export default BusinessImpact;