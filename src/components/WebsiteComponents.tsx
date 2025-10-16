import { memo } from 'react';
import TrustBadge from './TrustBadge';
import Card from './Card';
import Button from './Button';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

// Reusable Section Header Component
export const SectionHeader = memo(({ badge, title, description, className = "" }: SectionHeaderProps) => (
  <header className={`space-y-4 sm:space-y-6 ${className}`}>
    <TrustBadge text={badge} />
    <h2 className="text-xl font-black tracking-tight leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <div className="relative mx-auto max-w-5xl">
      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-2 shadow-sm backdrop-blur-sm sm:px-6 sm:py-3">
        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  </header>
));

SectionHeader.displayName = 'SectionHeader';

interface FeatureCardProps {
  iconPath: string;
  title: string;
  description: string;
}

// Reusable Feature Card Component
export const FeatureCard = memo(({ iconPath, title, description }: FeatureCardProps) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-sky-100/80 to-cyan-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-200/50 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-sky-300/60 transition-all duration-300 group">
    {/* Decorative Circle */}
    <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10" />
    
    {/* Icon */}
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 animate-ping opacity-30"></span>
        <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
    </div>

    {/* Content */}
    <div className="text-center relative z-10">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

interface BenefitItemProps {
  benefit: string;
}

// Reusable Benefit Item Component
export const BenefitItem = memo(({ benefit }: BenefitItemProps) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100/80 to-teal-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200/50 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-emerald-300/60 transition-all duration-300 group">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-800">{benefit}</span>
    </div>
  </div>
));

BenefitItem.displayName = 'BenefitItem';

interface CTASectionProps {
  badge: string;
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
    ariaLabel: string;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
    ariaLabel: string;
  };
  className?: string;
}

// Reusable CTA Section Component
export const CTASection = memo(({ badge, title, description, primaryButton, secondaryButton, className = "" }: CTASectionProps) => (
  <section className={`relative w-full py-12 sm:py-16 lg:py-20 ${className}`}>
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card variant="glass" size="medium">
          <div className="mx-auto max-w-3xl space-y-6 text-center sm:space-y-8">
            <SectionHeader badge={badge} title={title} description={description} />
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Button 
                variant="primary"
                onClick={primaryButton.onClick}
                ariaLabel={primaryButton.ariaLabel}
                className="flex-1 sm:flex-none"
              >
                {primaryButton.text}
              </Button>
              <Button 
                variant="secondary"
                onClick={secondaryButton.onClick}
                ariaLabel={secondaryButton.ariaLabel}
                className="flex-1 sm:flex-none"
              >
                {secondaryButton.text}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
));

CTASection.displayName = 'CTASection';
