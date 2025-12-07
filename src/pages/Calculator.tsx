// ROI Calculator structure:
// - Hook: src/hooks/useCalculator.ts
// - Types: src/types/roiCalculator.ts
// - Config: src/config/services.ts
// - Page shell: src/pages/Calculator.tsx
// - Steps: BusinessInfo, RankingInfo, ServiceSelection
// - Results: ResultsDisplay
// - Icons: src/components/calculator/icons.tsx

import { useCalculator, industryPresets } from '../hooks/useCalculator';
import BusinessInfo from '../components/calculator/BusinessInfo';
import RankingInfo from '../components/calculator/RankingInfo';
import ServiceSelection from '../components/calculator/ServiceSelection';
import ResultsDisplay from '../components/calculator/ResultsDisplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ROICalculator() {
  const {
    step,
    formData,
    setFormData,
    email,
    setEmail,
    showResults,
    results,
    searchVolume,
    nextStep,
    prevStep,
    resetCalculator
  } = useCalculator();

  const handleBookCall = () => {
    window.open('https://calendly.com/vanborglimited/book-a-call-vbl', '_blank', 'noopener,noreferrer');
  };

  const handleSendInquiry = () => {
    window.open('https://airtable.com/appxAFe4meUuWC7yY/pagdyctwmDdDEURTX/form', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <Navbar />
      
      <main className="pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section
            className="relative w-full mb-8 sm:mb-12 lg:mb-14"
            aria-labelledby="hero-heading"
          >
            <div className="mx-auto max-w-5xl">
              <Card variant="glass" size="medium">
                <div className="space-y-4 sm:space-y-6 text-center">
                  <header className="space-y-3 sm:space-y-5">
                    <h1
                      id="hero-heading"
                      className="text-2xl font-black tracking-tight leading-tight sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl"
                    >
                      <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Discover Your Revenue Potential
                      </span>
                      <br />
                      <span className="text-gray-900">
                        With Our ROI Calculator
                      </span>
                    </h1>

                    <div className="mx-auto max-w-2xl">
                      <div className="rounded-2xl border border-gray-200/50 bg-gray-100/80 px-4 py-3 sm:px-5 sm:py-3 shadow-sm backdrop-blur-sm">
                        <p className="text-sm font-medium leading-relaxed text-gray-700 sm:text-base md:text-base">
                          See exactly how much money you're losing by not being visible on Google. Our calculator shows you the impact of digital marketing on your revenue.
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                    <Button 
                      variant="primary"
                      onClick={handleSendInquiry}
                      ariaLabel="Send inquiry form"
                    >
                      Send Inquiry
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={handleBookCall}
                      ariaLabel="Book a consultation call"
                    >
                      Book a Call
                    </Button>
        </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Calculator Section */}
          <section
            id="roi-calculator"
            data-calculator-start
            aria-labelledby="calculator-heading"
            className="max-w-4xl mx-auto"
          >
            {/* Visible heading for SEO and users */}
            <header className="mb-4 sm:mb-6 text-center">
              <h2
                id="calculator-heading"
                className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900"
              >
                ROI Calculator Steps
              </h2>
              <p className="mt-1 text-sm sm:text-base text-gray-700">
                Complete the steps below to estimate your revenue potential from local SEO, ads, websites, and chatbots.
              </p>
            </header>

        {/* Progress Bar */}
        {!showResults && (
            <div id="roi-progress" className="mb-6 sm:mb-8">
                {/* H3 for progress, also hidden but semantic */}
                <h3 className="sr-only">Calculator Progress</h3>
              <div className="flex justify-between mb-2 text-xs sm:text-sm md:text-base">
                  <span className="text-gray-600 font-medium">
                    Step {step} of 3
                  </span>
                  <span className="text-gray-600 font-medium">
                    {step === 1 ? 33 : step === 2 ? 66 : 100}% Complete
                  </span>
            </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2.5">
              <div 
                  className="bg-gradient-to-r from-sky-500 to-cyan-500 h-1.5 sm:h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Components */}
        {step === 1 && (
          <BusinessInfo
            formData={formData}
            setFormData={setFormData}
            industryPresets={industryPresets}
            onNext={nextStep}
          />
        )}

        {step === 2 && (
          <RankingInfo
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {step === 3 && (
          <ServiceSelection
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {/* Results Page */}
        {showResults && results && (
          <ResultsDisplay
            results={results}
            formData={formData}
            searchVolume={searchVolume}
            email={email}
            setEmail={setEmail}
            onReset={resetCalculator}
          />
        )}
          </section>
                </div>
      </main>

      {/* Contact Section - Separate section under calculator, above footer */}
      <ContactSection />
      
      <Footer />
    </div>
  );
}
