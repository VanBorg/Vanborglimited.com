import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';

interface HeroProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  scrollToId?: string;
  withAnimation?: boolean;
  className?: string;
}

const animate = (
  content: React.ReactNode,
  animate: boolean,
  delay = 0
) =>
  animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  scrollToId,
  withAnimation = true,
  className,
}) => {
  const handleScrollTo = () => {
    if (!scrollToId) return;
    const el = document.getElementById(scrollToId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={cn(
        'relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden',
        'bg-light-bg-primary dark:bg-dark-bg-primary',
        className
      )}
    >
      {/* Keep animated lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'absolute h-[2px] bg-gradient-to-r from-transparent via-light-brand-primary/60 to-transparent dark:via-dark-brand-primary/60',
              'animate-pulse-glow',
              'w-[80%] md:w-[60%]',
              'left-[10%] md:left-[20%]',
              `top-[${20 + i * 15}%] delay-${i * 100}`
            )}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {animate(
            <div className="inline-block">
              <Badge variant="primary" size="lg">THE PROCESS</Badge>
            </div>,
            withAnimation
          )}

          {animate(
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              {title}
            </h1>,
            withAnimation
          )}

          {animate(
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              {description}
            </p>,
            withAnimation,
            0.1
          )}

          {animate(
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto px-8 py-4">
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>,
            withAnimation,
            0.2
          )}

          {scrollToId && (
            <div className="mt-16">
              <button
                onClick={handleScrollTo}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-primary dark:text-dark-text-primary hover:opacity-80 transition-colors duration-200"
                aria-label="Scroll down"
              >
                <ArrowDown size={20} />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Hero;