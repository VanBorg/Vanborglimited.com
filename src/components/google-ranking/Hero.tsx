import { memo } from 'react';
import Card from '../Card';
import Button from '../Button';

const GoogleRankingHero = memo(() => {
  const handleGetStarted = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleViewExamples = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full mb-8 sm:mb-12 lg:mb-14" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-5xl">
        <Card variant="glass" size="medium">
          <div className="space-y-4 sm:space-y-6 text-center">
            <header className="space-y-3 sm:space-y-5">
              <h1
                id="hero-heading"
                className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Dominate Local Search Results
                </span>
                <br />
                <span className="text-gray-900">With A Top 5 Ranking on Google &amp; Maps</span>
              </h1>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                  Get found by high-intent local buyers searching for your service. We guarantee results or you don’t pay.
                  </p>
                </div>
              </div>
            </header>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                onClick={handleGetStarted}
                ariaLabel="Book SEO consultation"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Book A Call
              </Button>
              <Button
                variant="secondary"
                onClick={handleViewExamples}
                ariaLabel="Send inquiry about SEO"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Send Inquiry
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});

GoogleRankingHero.displayName = 'GoogleRankingHero';

export default GoogleRankingHero;
