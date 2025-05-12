import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ } from '../../types';

interface FAQsProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  withAnimation?: boolean;
  className?: string;
}

export const FAQs: React.FC<FAQsProps> = ({
  title,
  subtitle,
  faqs,
  withAnimation = true,
  className,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('sales');
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className={cn('py-20 relative overflow-hidden', className)}>
      {/* Layer 1 – Kill blob garbage */}
      <div className="absolute inset-0 z-10 bg-light-bg-primary dark:bg-dark-bg-primary pointer-events-none" />

      {/* Layer 2 – ChatbotSolutions gradient on top */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary pointer-events-none" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute inset-0 z-25 top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      {/* Layer 3 – Actual content */}
      <div className="relative z-30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            {withAnimation ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <Badge variant="primary" size="lg">FREQUENTLY ASKED QUESTIONS</Badge>
              </motion.div>
            ) : (
              <div className="inline-block mb-4">
                <Badge variant="primary" size="lg">FREQUENTLY ASKED QUESTIONS</Badge>
              </div>
            )}
            
            {withAnimation ? (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
              >
                {title}
              </motion.h2>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
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
                  className="text-xl text-light-text-secondary dark:text-dark-text-secondary font-body"
                >
                  {subtitle}
                </motion.p>
              ) : (
                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary font-body">
                  {subtitle}
                </p>
              )
            )}
          </div>

          {/* Tabs */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-title',
                    activeCategory === category
                      ? 'bg-light-brand-primary text-white dark:bg-dark-brand-primary scale-105 shadow-lg'
                      : 'bg-light-bg-secondary text-light-text-secondary hover:bg-light-brand-primary/10 dark:bg-dark-bg-secondary dark:text-dark-text-secondary dark:hover:bg-dark-brand-primary/10'
                  )}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-1 overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20" intensity="medium">
              <div className="divide-y divide-light-text-secondary/10 dark:divide-dark-text-secondary/10">
                {filteredFaqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    withAnimation={withAnimation}
                    delay={0.1 + index * 0.1}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </div>
    </section>
  );
};

interface FAQItemProps {
  faq: FAQ;
  withAnimation: boolean;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, withAnimation, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <div className="p-4 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-2"
      >
        <h3 className="font-medium text-light-text-primary dark:text-dark-text-primary pr-8 font-title">
          {faq.question}
        </h3>
        <div className={cn(
          "flex-shrink-0 transition-all duration-300 transform p-2 rounded-full",
          isOpen 
            ? "bg-light-brand-primary dark:bg-dark-brand-primary text-white" 
            : "bg-light-bg-secondary/80 dark:bg-dark-bg-secondary/80 text-light-text-secondary dark:text-dark-text-secondary"
        )}>
          {isOpen ? (
            <ChevronUp className="text-white" size={20} />
          ) : (
            <ChevronDown className="text-light-text-secondary dark:text-dark-text-secondary" size={20} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className={cn(
          "mt-2 text-light-text-secondary dark:text-dark-text-secondary pr-8 font-body",
          "bg-light-bg-secondary/30 dark:bg-dark-bg-secondary/30 p-4 rounded-lg"
        )}>
          {faq.answer}
        </div>
      )}
    </div>
  );

  return withAnimation ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );
};

export default FAQs;