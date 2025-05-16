import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import { cn } from '../../utils/cn';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const CARDS_TO_SHOW = 3;

interface NicheItem {
  id: string;
  title: string;
  icon: string;
  bullets: string[];
  pitch: string;
  bestBot: string;
}

interface AudienceProps {
  title: string;
  subtitle: string;
  infoText: string;
  audiences: NicheItem[];
  outroText: string;
  withAnimation?: boolean;
  className?: string;
  scrollToChatbot?: () => void;
}

export const Audience: React.FC<AudienceProps> = ({
  title,
  subtitle,
  infoText,
  audiences,
  outroText,
  withAnimation = true,
  className,
  scrollToChatbot,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAudiences = audiences.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + CARDS_TO_SHOW) % totalAudiences);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - CARDS_TO_SHOW + totalAudiences) % totalAudiences);
  };

  const getVisibleCards = () => {
    return Array.from({ length: CARDS_TO_SHOW }, (_, i) =>
      audiences[(currentIndex + i) % totalAudiences]
    );
  };

  return (
    <section className={cn('py-20 relative overflow-hidden', className)}>
      {/* BACKGROUND SYSTEM */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary z-10" />
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <div className="relative z-30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8">
            {withAnimation ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <Badge variant="primary" size="lg">{title}</Badge>
              </motion.div>
            ) : (
              <div className="inline-block mb-4">
                <Badge variant="primary" size="lg">{title}</Badge>
              </div>
            )}

            {withAnimation ? (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
              >
                Who We Build AI Solutions For
              </motion.h2>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
                Who We Build AI Solutions For
              </h2>
            )}

            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
              {subtitle}
            </p>
          </div>

          {/* INFO BANNER */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 p-6 rounded-lg border-l-4 border-light-brand-primary dark:border-dark-brand-primary">
              <p className="text-light-text-secondary dark:text-dark-text-secondary font-body text-center">
                {infoText}
              </p>
            </div>
          </div>

          {/* CAROUSEL SECTION */}
          <div className="overflow-hidden mx-auto max-w-7xl">
            <div className="flex justify-center gap-8">
              {getVisibleCards().map((audience, index) => {
                const IconComponent = (Icons as any)[audience.icon] || Icons.Users;
                const cardNumber = audience.id;

                return (
                  <motion.div
                    key={audience.title}
                    className="flex-shrink-0 w-[380px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard
                      className="p-6 h-[500px] flex flex-col justify-between"
                      intensity="heavy"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl font-bold text-light-brand-primary/40 dark:text-dark-brand-primary/40 font-title">
                          {cardNumber}.
                        </span>
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 border border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                          <IconComponent
                            size={28}
                            className="text-light-brand-primary dark:text-dark-brand-primary"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-6 h-[60px] flex items-center justify-center text-center">
                        <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
                          {audience.title}
                        </h3>
                      </div>

                      {/* BULLETS BOXED */}
                      <div className="mb-6 rounded-lg bg-light-bg-secondary/40 dark:bg-dark-bg-secondary/40 p-4 border border-light-border/10 dark:border-dark-border/10">
                        <div className="space-y-3">
                          {audience.bullets.map((bullet, idx) => (
                            <div
                              key={idx}
                              className="flex items-start text-light-text-secondary dark:text-dark-text-secondary text-sm min-h-[24px]"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary mr-2 mt-1.5" />
                              <span className="flex-1">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pitch */}
                      <div className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 p-4 rounded-lg mb-6 border-l-4 border-light-brand-primary dark:border-dark-brand-primary min-h-[80px] flex items-center">
                        <p className="text-sm italic text-light-text-secondary dark:text-dark-text-secondary">
                          {audience.pitch}
                        </p>
                      </div>

                      {/* Best Bot */}
                      <div className="text-xs uppercase tracking-wide font-bold pt-2 mt-auto border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10 flex items-center">
                        <span className="bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent">
                          Recommended Bot Path:
                        </span>
                        <span className="ml-1 text-light-text-secondary dark:text-dark-text-secondary">
                          {audience.bestBot}
                        </span>
                        <div className="h-4"></div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ARROWS BELOW */}
          <div className="flex justify-center items-center gap-16 mt-12">
            <button
              onClick={prevSlide}
              className="p-5 rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 hover:bg-light-brand-primary/20 dark:hover:bg-dark-brand-primary/20 border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-light-brand-primary/20 dark:hover:shadow-dark-brand-primary/20"
            >
              <ChevronLeft className="w-8 h-8 text-light-brand-primary dark:text-dark-brand-primary" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalAudiences }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    Math.floor(currentIndex / CARDS_TO_SHOW) === Math.floor(i / CARDS_TO_SHOW)
                      ? "bg-light-brand-primary dark:bg-dark-brand-primary"
                      : "bg-light-brand-primary/20 dark:bg-dark-brand-primary/20"
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-5 rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 hover:bg-light-brand-primary/20 dark:hover:bg-dark-brand-primary/20 border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-light-brand-primary/20 dark:hover:shadow-dark-brand-primary/20"
            >
              <ChevronRight className="w-8 h-8 text-light-brand-primary dark:text-dark-brand-primary" />
            </button>
          </div>
          
          <p className="text-center text-lg mt-12 font-body text-light-text-primary dark:text-dark-text-secondary max-w-2xl mx-auto">
            <span className="font-title">{outroText}</span>
          </p>
          
          {scrollToChatbot && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={scrollToChatbot}
                variant="outline"
                size="lg"
                className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5"
              >
                Chat With the Van Borg Assistant
              </Button>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Audience;
