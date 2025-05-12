import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import GlassCard from '../../../components/ui/GlassCard';
import Badge from '../../../components/ui/Badge';
import {
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Calendar,
  Settings,
  Database,
  CreditCard,
  FileText,
  ShieldCheck,
  Lock,
  Plug,
  Clock,
  Code,
  Server,
  FileCheck
} from 'lucide-react';
import { faqItems } from '../../../data/faq';

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('sales');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const categories = [...new Set(faqItems.map(item => item.category))];

  const getCategoryDisplayName = (category: string) => {
    const displayNames: Record<string, string> = {
      sales: 'Sales & Pricing',
      business: 'Business & Ownership',
      automation: 'AI & Automations',
      support: 'Maintenance & Support',
      legal: 'Legal & Compliance',
      technical: 'Technical Details'
    };
    return displayNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'sales':
        return <CreditCard size={16} className="mr-1.5" />;
      case 'business':
        return <FileText size={16} className="mr-1.5" />;
      case 'automation':
        return <Settings size={16} className="mr-1.5" />;
      case 'support':
        return <ShieldCheck size={16} className="mr-1.5" />;
      case 'legal':
        return <FileCheck size={16} className="mr-1.5" />;
      case 'technical':
        return <Code size={16} className="mr-1.5" />;
      default:
        return <MessageSquare size={16} className="mr-1.5" />;
    }
  };

  const filteredFaqs = faqItems.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(index === activeFaqIndex ? null : index);
  };

  return (
    <section className="py-16 relative overflow-hidden" id="faq">
      {/* Base layer - now gray in light mode and black in dark mode */}
      <div className="absolute inset-0 z-10 bg-light-bg-secondary dark:bg-dark-bg-primary pointer-events-none" />
      
      {/* Gradient layer - now from gray to white in light mode and from black to dark blue in dark mode */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-white dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary pointer-events-none" />
      
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      </div>
      <div className="absolute inset-0 z-30 top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent -rotate-[30deg] -translate-y-[30vh]"></div>
      </div>

      <div className="relative z-40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Badge variant="primary" size="lg" className="shadow-lg shadow-light-brand-primary/20 dark:shadow-dark-brand-primary/20">FREQUENTLY ASKED QUESTIONS</Badge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-light-brand-primary dark:text-dark-brand-primary font-title"
            >
              You Ask. We've Solved It.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-black dark:text-dark-text-secondary max-w-2xl mx-auto font-body"
            >
              Everything clients ask before they buy. Clear, real-world answers with no fluff or fine print.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveFaqIndex(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    flex items-center whitespace-nowrap
                    ${activeCategory === category 
                      ? 'bg-light-brand-primary dark:bg-dark-brand-primary text-white' 
                      : 'bg-light-bg-secondary/70 text-black hover:bg-light-brand-primary/10 dark:bg-dark-bg-secondary/70 dark:text-dark-text-secondary'}
                  `}
                >
                  <div className={`p-1.5 rounded-full mr-2 ${activeCategory === category ? 'bg-white/20' : 'bg-light-brand-primary/10 dark:bg-dark-brand-primary/10'}`}>
                    {getCategoryIcon(category)}
                  </div>
                  {getCategoryDisplayName(category)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <GlassCard className="p-1 overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 transition-all duration-300">
              <div className="py-4 px-6 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-primary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-primary/5 flex items-center border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                <div className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full mr-3">
                  {getCategoryIcon(activeCategory)}
                </div>
                <h3 className="font-bold text-light-brand-primary dark:text-dark-brand-primary font-title">
                  {getCategoryDisplayName(activeCategory)} Questions
                </h3>
              </div>

              <div className="divide-y divide-light-text-secondary/10 dark:divide-dark-text-secondary/10">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`
                      ${index % 2 === 0 ? 'bg-light-bg-primary/60 dark:bg-dark-bg-primary/60' : 'bg-light-bg-secondary/20 dark:bg-dark-bg-secondary/20'}
                      ${activeFaqIndex === index ? 'shadow-inner' : ''}
                    `}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full text-left py-4 px-5 hover:bg-light-brand-primary/5 dark:hover:bg-dark-brand-primary/5 transition-colors duration-300"
                    >
                      <div className="flex items-start pr-8">
                        <h3 className={`font-medium text-black dark:text-dark-text-primary font-title`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`p-2.5 rounded-full ${activeFaqIndex === index ? 'bg-light-brand-primary dark:bg-dark-brand-primary text-white' : 'bg-light-bg-secondary/80 dark:bg-dark-bg-secondary/80 text-black dark:text-dark-text-secondary'}`}>
                        {activeFaqIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    <motion.div 
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeFaqIndex === index ? 'auto' : 0,
                        opacity: activeFaqIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pb-6 text-black dark:text-dark-text-secondary font-body bg-light-bg-secondary/30 dark:bg-dark-bg-secondary/30 border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                        <p className="leading-relaxed text-black dark:text-dark-text-secondary">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default FAQSection;