import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../../components/ui/GlassCard';
import { cn } from '../../../utils/cn';
import { Clock, ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Automation {
  name: string;
  purpose: string;
  price: string;
  timeline: string;
  icon: string;
  details: {
    about: string;
    whatItDoes: string;
  };
  niches: string[];
  recommendedIn: string[];
}

interface AutomationsTableProps {
  automations: Automation[];
}

const AutomationsTable: React.FC<AutomationsTableProps> = ({ automations }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-8"
    >
      <GlassCard className="p-1 overflow-hidden border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20" intensity="medium">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                <th className="px-3 py-2.5 text-left font-title text-light-text-primary dark:text-dark-text-primary">Automation</th>
                <th className="px-3 py-2.5 text-left font-title text-light-text-primary dark:text-dark-text-primary">Purpose</th>
                <th className="px-3 py-2.5 text-center font-title text-light-text-primary dark:text-dark-text-primary">Timeline</th>
                <th className="px-3 py-2.5 text-center font-title text-light-text-primary dark:text-dark-text-primary">Price</th>
                <th className="px-3 py-2.5 text-left font-title text-light-text-primary dark:text-dark-text-primary">Recommended In</th>
                <th className="px-3 py-2.5 text-right font-title text-light-text-primary dark:text-dark-text-primary"></th>
              </tr>
            </thead>
            <tbody>
              {automations.map((automation, index) => {
                const IconComponent = automation.icon in Icons 
                  ? (Icons as any)[automation.icon] 
                  : Icons.Zap;
                const isExpanded = expandedIndex === index;
                const isEven = index % 2 === 0;

                return (
                  <React.Fragment key={index}>
                    <tr className={cn(
                      "transition-colors duration-300 border-b border-light-text-secondary/20 dark:border-dark-text-secondary/10",
                      "hover:bg-light-brand-primary/15 dark:hover:bg-dark-brand-primary/15",
                      isEven ? "bg-light-bg-secondary/80 dark:bg-dark-bg-secondary/70" : "bg-light-bg-primary/95 dark:bg-dark-bg-primary/95",
                      isExpanded && "border-b-0"
                    )}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-full bg-gradient-to-br from-light-brand-primary/30 to-light-brand-secondary/30 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 border border-light-brand-primary/40 dark:border-dark-brand-primary/30">
                            <IconComponent size={18} className="text-light-brand-primary dark:text-dark-brand-primary" />
                          </div>
                          <span className="font-medium font-body text-light-text-primary dark:text-dark-text-primary">{automation.name}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2 font-body text-light-text-secondary dark:text-dark-text-secondary">
                        {automation.purpose}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-light-brand-primary/15 dark:bg-dark-brand-primary/10 text-light-brand-primary/90 dark:text-dark-brand-primary border border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                          <Clock className="mr-1" size={12} />
                          {automation.timeline}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-center">
                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-light-brand-primary/15 dark:bg-dark-brand-primary/10 text-light-brand-primary/90 dark:text-dark-brand-primary border border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                          {automation.price}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-1">
                          {automation.recommendedIn.map((id, idx) => {
                            const botNames = {
                              '01': '01. Lead Capture Bot',
                              '02': '02. Booking Assistant',
                              '03': '03. Performance Support ',
                              '04': '04. Custom AI Bot'
                            };
                            return (
                              <span
                                key={idx}
                                className="rounded-full px-2 py-0.5 text-xs bg-light-brand-secondary/15 dark:bg-dark-brand-secondary/10 text-light-brand-primary/90 dark:text-dark-brand-primary border border-light-brand-primary/30 dark:border-dark-brand-primary/30"
                              >
                                {botNames[id as keyof typeof botNames]}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => toggleDetails(index)}
                          className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-light-brand-primary/15 hover:bg-light-brand-primary/25 dark:bg-dark-brand-primary/10 dark:hover:bg-dark-brand-primary/20 text-light-brand-primary/90 dark:text-dark-brand-primary transition-colors duration-200"
                        >
                          <span>Details</span>
                          {isExpanded ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
                        </button>
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr className={cn(
                        "border-b border-light-text-secondary/20 dark:border-dark-text-secondary/10",
                        isEven ? "bg-light-bg-secondary/80 dark:bg-dark-bg-secondary/70" : "bg-light-bg-primary/95 dark:bg-dark-bg-primary/95"
                      )}>
                        <td colSpan={6} className="px-6 py-4">
                          <div className="bg-light-bg-secondary/70 dark:bg-dark-bg-secondary/50 p-4 rounded-lg border border-light-brand-primary/20 dark:border-dark-brand-primary/20">
                            <h4 className="font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary font-title">
                              About This Automation
                            </h4>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary font-body mb-4">
                              {automation.details.about}
                            </p>
                            <h4 className="font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary font-title">
                              What It Does
                            </h4>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">
                              {automation.details.whatItDoes}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default AutomationsTable;
