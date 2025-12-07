import { memo } from 'react';
import Card from '../Card';
import Button from '../Button';

const CALENDLY_URL = 'https://calendly.com/vanborglimited/book-a-call-vbl';
const INQUIRY_URL = 'https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form';

const SEOWebsiteHero = memo(() => {
  const handleGetStarted = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  const handleSendInquiry = () => {
    window.open(INQUIRY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="relative w-full mb-8 sm:mb-12 lg:mb-14"
      aria-labelledby="seo-website-hero-heading"
    >
      <div className="mx-auto max-w-5xl">
        <Card variant="glass" size="medium">
          <div className="space-y-4 sm:space-y-6 text-center">
            <header className="space-y-3 sm:space-y-5">
              <h1
                id="seo-website-hero-heading"
                className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl"
              >
                <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  SEO & Sales Optimized Websites
                </span>
                <br />
                <span className="text-gray-900">
                  That Drive Overal &amp; Revenue
                </span>
              </h1>

              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-sm">
                  <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-lg">
                    Homepage built to rank + dedicated service pages with embedded lead capture and booking flows.
                    Full website with SEO foundation that is  conversion focus.
                  </p>
                </div>
              </div>
            </header>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                onClick={handleGetStarted}
                ariaLabel="Book a call about SEO websites"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Book a Call
              </Button>
              <Button
                variant="secondary"
                onClick={handleSendInquiry}
                ariaLabel="Send inquiry about SEO websites"
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

SEOWebsiteHero.displayName = 'SEOWebsiteHero';

export default SEOWebsiteHero;
