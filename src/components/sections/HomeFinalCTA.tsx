'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ArrowUp, Sparkles } from 'lucide-react';

interface HomeFinalCTAProps {
  className?: string;
  onClick?: () => void;
}

export const HomeFinalCTA: React.FC<HomeFinalCTAProps> = ({
  className = '',
  onClick
}) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg-primary via-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary z-10" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container className="relative z-30">
        <GlassCard
          className="p-8 md:p-12 flex flex-col items-center text-center relative border-4 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_30px_rgba(220,38,38,0.2)] dark:shadow-[0_4px_30px_rgba(0,175,185,0.2)] hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 hover:shadow-[0_8px_40px_rgba(220,38,38,0.3)] dark:hover:shadow-[0_8px_40px_rgba(0,175,185,0.3)] transition-all duration-500 transform hover:scale-[1.02] bg-gradient-to-br from-white/90 via-white/60 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-transparent"
          intensity="heavy"
        >
          {/* Badge now part of normal flow */}
          <Badge 
            variant="primary" 
            size="lg"
            className="mb-8 shadow-xl shadow-light-brand-primary/20 dark:shadow-dark-brand-primary/20 flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles size={16} className="animate-pulse" />
            TAKE ACTION NOW
            <Sparkles size={16} className="animate-pulse" />
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title relative inline-block">
            <span className="absolute -top-2 -left-4 -right-4 -bottom-1 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
            Let Van Borg Build Your AI Advantage
          </h2>

          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
            Book a free consult and get a custom AI assessment for your business — zero fluff, no hard pitch, just real automation strategy.
          </p>

          {onClick && (
            <div className="mt-8">
              <Button 
                onClick={onClick}
                variant="outline" 
                size="lg" 
                className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5 transform hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ y: [-2, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
                  >
                    <ArrowUp size={16} />
                  </motion.div>
                  <span>Chat With the Van Borg Assistant</span>
                  <motion.div
                    animate={{ y: [-2, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
                  >
                    <ArrowUp size={16} />
                  </motion.div>
                </div>
              </Button>
            </div>
          )}

          {/* Decorative lines */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/50 dark:via-dark-brand-primary/50 to-transparent transform rotate-[5deg]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/50 dark:via-dark-brand-primary/50 to-transparent transform -rotate-[5deg]"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary/30 dark:via-dark-brand-secondary/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-light-brand-primary/10 to-transparent dark:from-dark-brand-primary/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-light-brand-secondary/10 to-transparent dark:from-dark-brand-secondary/10 rounded-tr-full"></div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
};

export default HomeFinalCTA;
