import React from 'react';
import GlassCard from '../../../../components/ui/GlassCard';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../../../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <GlassCard className="p-6 h-full" intensity="medium">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <Quote size={24} className="text-light-brand-primary dark:text-dark-brand-primary opacity-80" />
        </div>
        <p className="italic mb-6 text-light-text-secondary dark:text-dark-text-secondary flex-grow">
          "{testimonial.quote}"
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p className="font-medium text-light-text-primary dark:text-dark-text-primary">
              {testimonial.author}
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {testimonial.company}
            </p>
          </div>
          <div className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 px-4 py-2 rounded-lg">
            <div className="text-xs uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
              {testimonial.impact.metric}
            </div>
            <div className="text-xl font-bold text-light-brand-primary dark:text-dark-brand-primary">
              {testimonial.impact.value}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;