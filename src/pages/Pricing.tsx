import { useEffect, useMemo, memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Card from '../components/Card';
import Button from '../components/Button';
import { useI18n } from '../i18n/context';

const Pricing = () => {
  const { t, language } = useI18n();

  // SEO: Set meta tags
  useEffect(() => {
    document.title = `${t.pricing.hero.title} | Van Borg Limited`;
    
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    setMetaTag('description', t.pricing.hero.description);
    setMetaTag('keywords', 'pricing, service prices, Google Ranking pricing, SEO website pricing, Google Ads pricing, marketing bundle pricing');
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', 'Van Borg Limited');
    
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://vanborg.com/pricing', true);
    setMetaTag('og:title', `${t.pricing.hero.title} | Van Borg Limited`, true);
    setMetaTag('og:description', t.pricing.hero.description, true);
    setMetaTag('og:image', 'https://vanborg.com/og-image.jpg', true);
    setMetaTag('og:site_name', 'Van Borg Limited', true);
    
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://vanborg.com/pricing', true);
    setMetaTag('twitter:title', t.pricing.hero.title, true);
    setMetaTag('twitter:description', t.pricing.hero.description, true);
    setMetaTag('twitter:image', 'https://vanborg.com/og-image.jpg', true);
    setMetaTag('twitter:site', '@VanBorgLimited', true);
    setMetaTag('twitter:creator', '@VanBorgLimited', true);
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://vanborg.com/pricing';
    
    return () => {
      document.title = 'Van Borg Limited';
    };
  }, [t]);

  // Service section component - EXACT COPY FROM SERVICE PAGES
  const ServiceSection = ({ 
    title, 
    description, 
    setupPrice, 
    setupTimeline, 
    retainerPrice, 
    retainerDescription, 
    gradient = 'from-sky-500 to-cyan-500',
    borderColor = 'border-sky-500/50',
    ringColor = 'ring-sky-500',
    bgColor = 'bg-gray-900'
  }: {
    title: string;
    description: string;
    setupPrice: string;
    setupTimeline: string;
    retainerPrice: string;
    retainerDescription: string;
    gradient?: string;
    borderColor?: string;
    ringColor?: string;
    bgColor?: string;
  }) => (
    <section className={`relative w-full ${bgColor} py-8 sm:py-12 lg:py-16`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Outer container with opposite color background */}
        <div className={`rounded-3xl ${bgColor === 'bg-black' ? 'bg-gray-900' : 'bg-black'} border border-gray-800/70 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10`}>
          
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="mt-2 sm:mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {title}
              </span>
            </h2>

            {/* Description Box */}
            <div className="mt-4 max-w-2xl mx-auto">
              <div className={`rounded-2xl border border-gray-800/70 ${bgColor === 'bg-black' ? 'bg-black' : 'bg-gray-900/90'} px-4 py-3 sm:px-6 sm:py-4 shadow-sm`}>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                  {description}{' '}
                  {title.includes('Ranking') && (
                    <a
                      href="/ranking"
                      className="text-sky-600 hover:text-sky-700 font-semibold underline"
                    >
                      {t.common.learnMore}
                    </a>
                  )}
                  {title.includes('Website') && (
                    <a
                      href="/website"
                      className="text-sky-600 hover:text-sky-700 font-semibold underline"
                    >
                      {t.common.learnMore}
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto items-stretch">
            {/* One-Time Setup */}
            <div className={`rounded-xl border-2 ${borderColor} ring-2 ${ringColor} ring-offset-4 ring-offset-black ${bgColor}/90 backdrop-blur-sm p-6 shadow-sm overflow-visible h-full flex flex-col`}>
              <div className="relative space-y-6 flex-1 flex flex-col">
                <div className="text-center space-y-3 sm:space-y-4 pt-4 pb-4 px-1">
                  <div className={`inline-block bg-gradient-to-r ${gradient} text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md`}>
                    ONE-TIME SETUP
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-100">
                    {title}
                  </h3>
                  <p className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent break-words`}>
                    {setupPrice}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-400">
                    {setupTimeline}
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Retainer */}
            <div className={`rounded-xl border-2 border-emerald-500/50 ${bgColor}/90 backdrop-blur-sm p-6 shadow-sm ring-2 ring-emerald-500 ring-offset-4 ring-offset-black overflow-visible h-full flex flex-col`}>
              <div className="relative space-y-6 flex-1 flex flex-col">
                <div className="text-center space-y-3 sm:space-y-4 pt-4 pb-4 px-1">
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    MONTHLY RETAINER
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-100">
                    Ongoing
                  </h3>
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent break-words">
                    {retainerPrice}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-1">
                    {retainerDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Google Ads special section (3 tiers) - OPTIMIZED FOR PERFORMANCE
  const GoogleAdsSection = memo(({ bgColor = 'bg-gray-900' }: { bgColor?: string }) => {
    const { t } = useI18n();
    const tiers = useMemo(() => [
      {
        key: 'starter' as const,
        gradient: 'from-sky-500 to-cyan-500',
        borderColor: 'border-sky-500/50',
        ringColor: 'ring-sky-500',
      },
      {
        key: 'growth' as const,
        gradient: 'from-emerald-500 to-teal-500',
        borderColor: 'border-emerald-500/50',
        ringColor: 'ring-emerald-500',
        isPopular: true,
      },
      {
        key: 'dominance' as const,
        gradient: 'from-yellow-500 to-amber-500',
        borderColor: 'border-yellow-500/50',
        ringColor: 'ring-yellow-500',
      },
    ], []);
    
    const tiersData = useMemo(() => tiers.map(tier => ({
      ...tier,
      data: t.ads.pricing.tiers[tier.key]
    })), [tiers, t]);

    return (
      <section className={`relative w-full ${bgColor} py-8 sm:py-12 lg:py-16`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Outer container with opposite color background */}
          <div className={`rounded-3xl ${bgColor === 'bg-black' ? 'bg-gray-900' : 'bg-black'} border border-gray-800/70 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 overflow-visible`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="mt-2 sm:mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl mb-4">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {t.pricing.ads.title}
                </span>
              </h2>

              {/* Description Box */}
              <div className="mt-4 max-w-2xl mx-auto">
                <div className={`rounded-2xl border border-gray-800/70 ${bgColor === 'bg-black' ? 'bg-black' : 'bg-gray-900/90'} px-4 py-3 sm:px-6 sm:py-4 shadow-sm`}>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                    {t.pricing.ads.description}{' '}
                    <a
                      href="/ads"
                      className="text-sky-600 hover:text-sky-700 font-semibold underline"
                    >
                      {t.common.learnMore}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Tier Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
              {tiersData.map((tier) => {
                return (
                  <div
                    key={tier.key}
                    className={`relative rounded-xl border-2 ${tier.borderColor} ${tier.ringColor} ring-2 ring-offset-4 ring-offset-black overflow-visible ${
                      tier.isPopular
                        ? 'shadow-xl'
                        : 'shadow-sm'
                    } ${bgColor}/90 p-6 h-full flex flex-col`}
                  >
                    {tier.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className={`inline-block bg-gradient-to-r ${tier.gradient} text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg`}>
                          {t.ads.pricing.labels.mostPopular}
                        </span>
                      </div>
                    )}

                    <div className="space-y-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="text-center pt-4 pb-4">
                        {/* Name */}
                        <h3 className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-2`}>
                          {tier.data.name}
                        </h3>

                        {/* Subtitle - closer to header */}
                        <p className="text-sm sm:text-base font-medium text-white mb-4">
                          {tier.data.subtitle}
                        </p>

                        {/* Total Price */}
                        <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-4`}>
                          {tier.data.totalPrice}
                        </div>

                        {/* Breakdown in black box */}
                        <div className="bg-black rounded-xl border border-gray-800/70 px-4 py-3 space-y-1">
                          <p className="text-xs sm:text-sm text-white">{tier.data.adSpend}</p>
                          <p className="text-xs sm:text-sm text-white">{tier.data.management}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important Note */}
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                <p className="text-xs sm:text-sm text-orange-200 leading-relaxed text-center">
                  <strong className="text-orange-100">{t.ads.pricing.labels.importantToKnow}</strong> {t.ads.pricing.importantNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  
  GoogleAdsSection.displayName = 'GoogleAdsSection';

  // Bundel special section - EXACT COPY FROM SERVICE PAGES
  const BundelSection = ({ bgColor = 'bg-gray-900' }: { bgColor?: string }) => (
    <section className={`relative w-full ${bgColor} py-8 sm:py-12 lg:py-16`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Outer container with opposite color background */}
        <div className={`rounded-3xl ${bgColor === 'bg-black' ? 'bg-gray-900' : 'bg-black'} border border-gray-800/70 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10`}>
          <div className="text-center">
            <h2 className="mt-2 sm:mt-4 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {t.pricing.bundel.title}
              </span>
            </h2>

              {/* Description Box */}
              <div className="mt-4 max-w-2xl mx-auto">
                <div className={`rounded-2xl border border-gray-800/70 ${bgColor === 'bg-black' ? 'bg-black' : 'bg-gray-900/90'} px-4 py-3 sm:px-6 sm:py-4 shadow-sm`}>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                    {t.pricing.bundel.description}{' '}
                    <a
                      href="/bundel"
                      className="text-sky-600 hover:text-sky-700 font-semibold underline"
                    >
                      {t.common.learnMore}
                    </a>
                  </p>
                </div>
              </div>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto items-stretch">
            {/* One-Time Setup */}
            <div className={`rounded-xl border-2 border-yellow-500/50 ring-2 ring-yellow-500 ring-offset-4 ring-offset-black ${bgColor}/90 backdrop-blur-sm p-6 shadow-sm overflow-visible h-full flex flex-col`}>
              <div className="relative space-y-6 flex-1 flex flex-col">
                <div className="text-center space-y-3 sm:space-y-4 pt-4 pb-4 px-1">
                  <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    {t.bundel.pricing.setup.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-100">
                    {t.bundel.pricing.setup.title}
                  </h3>
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent break-words">
                    {t.bundel.pricing.setup.price}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-gray-400">
                    {t.bundel.pricing.setup.timeline}
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Retainer */}
            <div className={`rounded-xl border-2 border-emerald-500/50 ${bgColor}/90 backdrop-blur-sm p-6 shadow-sm ring-2 ring-emerald-500 ring-offset-4 ring-offset-black overflow-visible h-full flex flex-col`}>
              <div className="relative space-y-6 flex-1 flex flex-col">
                <div className="text-center space-y-3 sm:space-y-4 pt-4 pb-4 px-1">
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    MONTHLY RETAINER
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-100">
                    Ongoing
                  </h3>
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent break-words">
                    €550 p/m
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-1">
                    {t.bundel.pricing.setup.monthlyAfterSetup}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="relative w-full mb-8 sm:mb-12 lg:mb-14" aria-labelledby="pricing-hero-heading">
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="medium">
                <div className="space-y-4 sm:space-y-6 text-center">
                  <header className="space-y-3 sm:space-y-5">
                    <h1
                      id="pricing-hero-heading"
                      className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl"
                    >
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        {t.pricing.hero.title}
                      </span>
                    </h1>

                    <div className="mx-auto max-w-3xl">
                      <div className="rounded-2xl border border-gray-800/50 bg-gray-900/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg">
                          {t.pricing.hero.description}
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <Button
                      variant="primary"
                      onClick={() => window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer')}
                      ariaLabel="Book a call"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      {t.ranking.hero.ctaBook}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const formUrl = language === 'nl' 
                          ? 'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog'
                          : 'https://docs.google.com/forms/d/e/1FAIpQLSfJ8aclT9LyywMbioiuLp4UKavLoojglUtuSXbOKKx1b_CgIA/viewform?usp=dialog';
                        window.open(formUrl, '_blank', 'noopener,noreferrer');
                      }}
                      ariaLabel="Request a Loom video"
                      className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    >
                      {t.ranking.hero.ctaRequestVideo}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Ranking Section */}
      <ServiceSection
        title={t.pricing.ranking.title}
        description={t.pricing.ranking.description}
        setupPrice={t.ranking.pricing.setup.price}
        setupTimeline={t.ranking.pricing.setup.timeline}
        retainerPrice={t.ranking.pricing.retainer.price}
        retainerDescription={t.ranking.pricing.retainer.description}
        gradient="from-sky-500 to-cyan-500"
        borderColor="border-sky-500/50"
        ringColor="ring-sky-500"
        bgColor="bg-black"
      />

      {/* Website Section */}
      <ServiceSection
        title={t.pricing.website.title}
        description={t.pricing.website.description}
        setupPrice={t.website.pricing.build.price}
        setupTimeline={t.website.pricing.build.timeline}
        retainerPrice={t.website.pricing.retainer.price}
        retainerDescription={t.website.pricing.retainer.description}
        gradient="from-sky-500 to-cyan-500"
        borderColor="border-sky-500/50"
        ringColor="ring-sky-500"
        bgColor="bg-gray-900"
      />

      {/* Ads Section */}
      <GoogleAdsSection bgColor="bg-black" />

      {/* Bundel Section */}
      <BundelSection bgColor="bg-gray-900" />

      {/* Contact Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Pricing;
