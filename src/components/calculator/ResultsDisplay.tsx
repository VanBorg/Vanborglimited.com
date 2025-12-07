import { memo, useState } from 'react';
import { AlertCircle, Mail } from './icons';
import type { CalculatorResults, FormData } from '../../types/roiCalculator';

interface ResultsDisplayProps {
  results: CalculatorResults;
  formData: FormData;
  searchVolume: number;
  email: string;
  setEmail: (email: string) => void;
  onReset: () => void;
}

const ResultsDisplay = memo(function ResultsDisplay({ results, formData, searchVolume, email, setEmail, onReset }: ResultsDisplayProps) {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const toggleDropdown = (serviceKey: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [serviceKey]: !prev[serviceKey]
    }));
  };

  const handlePDFRequest = async () => {
    // Basic validation
    if (!name.trim()) {
      alert('Please enter your full name.');
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Map calculator data into Airtable "Imported table" fields
      const seoROI = results.serviceROI?.localSeo;
      const adsROI = results.serviceROI?.googleAds;
      const websiteROI = results.serviceROI?.seoWebsite;
      const chatbotROI = results.serviceROI?.aiChatbot;

      const body = {
        records: [
          {
            fields: {
              // Contact & inputs
              Email: email,
              Industry: formData.industry,
              'Avg Client Value (£)': results.currentClients ? formData.avgClientValue : formData.avgClientValue,
              'Current Clients / Month': formData.currentClients,
              'Current Leads / Month': formData.currentLeads,
              'Search Volume (Local / Month)': searchVolume,

              // Rankings
              'Search Ranking': formData.currentRanking,
              'Maps Ranking': formData.mapsRanking,

              // Services selected
              'Local SEO?': formData.services.localSeo,
              'Google Ads?': String(formData.services.googleAds),
              'SEO Website?': formData.services.seoWebsite,
              'AI Chatbot?': String(formData.services.aiChatbot),

              // Lead & client projections
              'Lead Multiplier (×)': Number(results.finalMultiplier.toFixed(1)),
              'Current Leads / Month (calc)': results.currentLeads,
              'Projected Leads / Month': results.newLeads,
              'Extra Leads / Month': results.additionalLeads,

              'Current Clients / Month (calc)': results.currentClients,
              'Projected Clients / Month': results.projectedClients,
              'Extra Clients from Services / Month': results.additionalClients,
              'Selected Services (Label)': results.serviceDescription,

              // Revenue & ROI
              'Current Revenue / Month (£)': results.currentRevenue,
              'Projected Revenue / Month (£)': results.newRevenue,
              'Extra Revenue / Month (£)': results.monthlyIncrease,
              'Extra Revenue / Year (£)': results.yearlyIncrease,
              'Currently Missing / Month (£)': results.monthlyLost,

              'Setup Cost (£)': results.setupCost,
              'Monthly Cost (£/mo)': results.monthlyCost,
              'First Month Total (£)': results.totalFirstMonthCost,
              '12-Month ROI (%)': Math.round(results.roi),
              'Closing Rate (%)': Math.round(results.conversionRate),

              // Per‑service ROI – SEO
              'SEO – Extra Clients / Month': seoROI?.additionalClients ?? 0,
              'SEO – Revenue / Year (£)': seoROI?.yearlyRevenue ?? 0,
              'SEO – Setup (£)': seoROI?.setupCost ?? 0,
              'SEO – Monthly (£/mo)': seoROI?.monthlyCost ?? 0,
              'SEO – ROI (%)': seoROI ? Math.round(seoROI.roi) : 0,
              'SEO – Calculation Text': seoROI?.calculation ?? '',

              // Per‑service ROI – Ads
              'Ads – Extra Clients / Month': adsROI?.additionalClients ?? 0,
              'Ads – Revenue / Year (£)': adsROI?.yearlyRevenue ?? 0,
              'Ads – Setup (£)': adsROI?.setupCost ?? 0,
              'Ads – Monthly (£/mo)': adsROI?.monthlyCost ?? 0,
              'Ads – ROI (%)': adsROI ? Math.round(adsROI.roi) : 0,
              'Ads – Calculation Text': adsROI?.calculation ?? '',

              // Per‑service ROI – Website
              'Website – Extra Clients / Month': websiteROI?.additionalClients ?? 0,
              'Website – Revenue / Year (£)': websiteROI?.yearlyRevenue ?? 0,
              'Website – Setup (£)': websiteROI?.setupCost ?? 0,
              'Website – Monthly (£/mo)': websiteROI?.monthlyCost ?? 0,
              'Website – ROI (%)': websiteROI ? Math.round(websiteROI.roi) : 0,
              'Website – Calculation Text': websiteROI?.calculation ?? '',

              // Per‑service ROI – Chatbot
              'Chatbot – Extra Clients / Month': chatbotROI?.additionalClients ?? 0,
              'Chatbot – Revenue / Year (£)': chatbotROI?.yearlyRevenue ?? 0,
              'Chatbot – Setup (£)': chatbotROI?.setupCost ?? 0,
              'Chatbot – Monthly (£/mo)': chatbotROI?.monthlyCost ?? 0,
              'Chatbot – ROI (%)': chatbotROI ? Math.round(chatbotROI.roi) : 0,
              'Chatbot – Calculation Text': chatbotROI?.calculation ?? '',

              // Raw JSON if you ever need it
              'Per-Service ROI (JSON)': JSON.stringify(results.serviceROI ?? {}),
            },
          },
        ],
      };

      const response = await fetch(
        'https://api.airtable.com/v0/appxAFe4meUuWC7yY/tbl6ELOZYlAPUGhq6',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Airtable API token is provided via Vite env variable
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`Airtable request failed with status ${response.status}`);
      }

      setSuccessMessage('Thank you for your request, you will receive an email with your report shortly.');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error('Error sending ROI calculator data', error);
      alert('Something went wrong while sending your request. Please try again.');
    }
  };

  return (
    <div className="space-y-5">
      {successMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          <div className="max-w-md w-full bg-emerald-50 border-2 border-emerald-700 text-emerald-800 text-sm sm:text-base px-4 py-3 rounded-xl shadow-lg flex items-center justify-between gap-3">
            <span className="font-semibold">{successMessage}</span>
            <button
              type="button"
              onClick={() => setSuccessMessage(null)}
              className="text-emerald-700 hover:text-emerald-900 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* The Shocking Truth */}
      <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl p-5 md:p-8 shadow-lg text-center border border-red-300">
        <AlertCircle size={40} className="mx-auto mb-3 text-red-50" />
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">Here's What You're Missing Out On</h2>
        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
          £{results.monthlyLost.toLocaleString()}
        </div>
        <p className="text-lg text-red-50">Every Single Month</p>
      </div>

      {/* Lead Projections */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 text-center">Here's What We're Projecting</h3>
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-xl p-3 mb-5">
          <p className="text-xs md:text-sm text-gray-600 mb-1">Selected Services:</p>
          <p className="text-base md:text-lg font-semibold text-sky-700">{results.serviceDescription}</p>
          <p className="text-[11px] md:text-xs text-gray-500 mt-1">Lead multiplier: {results.finalMultiplier.toFixed(1)}x</p>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Current Monthly Leads</p>
            <p className="text-2xl md:text-3xl font-bold text-red-500">{results.currentLeads}</p>
            <p className="text-gray-600 text-[11px] md:text-xs mt-1">{results.currentClients} clients</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Projected Monthly Leads</p>
            <p className="text-2xl md:text-3xl font-bold text-emerald-600">{results.newLeads}</p>
            <p className="text-gray-600 text-[11px] md:text-xs mt-1">{results.projectedClients} clients</p>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-4 rounded-xl border border-sky-200">
            <p className="text-gray-600 text-xs md:text-sm mb-1">Extra Clients from Selected Services</p>
            <p className="text-2xl md:text-3xl font-bold text-sky-600">+{results.additionalClients}</p>
            <p className="text-gray-600 text-[11px] md:text-xs mt-1">from {results.additionalLeads} more leads</p>
          </div>
        </div>
      </div>

      {/* Revenue Impact */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 text-center">What This Means for You</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <span className="text-sm md:text-lg text-gray-900">What you're making now</span>
            <span className="text-xl md:text-2xl font-bold text-red-500">£{results.currentRevenue.toLocaleString()}/mo</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
            <span className="text-sm md:text-lg text-gray-900">What you could be making</span>
            <span className="text-xl md:text-2xl font-bold text-emerald-600">£{results.newRevenue.toLocaleString()}/mo</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-md">
            <span className="text-sm md:text-lg font-bold text-white">Extra revenue each month</span>
            <span className="text-2xl md:text-3xl font-black text-white">£{results.monthlyIncrease.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100 rounded-xl border border-amber-200">
            <span className="text-sm md:text-lg font-semibold text-amber-700">That's over a full year</span>
            <span className="text-xl md:text-2xl font-bold text-amber-600">£{results.yearlyIncrease.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Service ROI Breakdown */}
      {Object.keys(results.serviceROI).length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200/50">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 text-center">ROI Per Service</h3>
          <p className="text-sm text-gray-700 mb-4 text-center">Here's the realistic impact of each service you selected:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(results.serviceROI).map(([key, data]: [string, any]) => (
              <div key={key} className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-200 overflow-hidden">
                {/* Dropdown Header */}
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full p-5 text-left hover:bg-sky-100/50 transition-colors duration-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-gray-900">{data.name}</h4>
                    <span className="text-2xl font-black text-emerald-600">{data.roi > 0 ? '+' : ''}{data.roi.toFixed(0)}% ROI</span>
                  </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs md:text-sm text-gray-600">+{data.additionalClients} clients/mo</div>
                        <div className="text-xs md:text-sm text-emerald-600 font-semibold">£{data.yearlyRevenue.toLocaleString()}/year</div>
                    </div>
                    <div className={`transform transition-transform duration-200 ${openDropdowns[key] ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Dropdown Content */}
                {openDropdowns[key] && (
                  <div className="px-4 pb-4 border-t border-sky-200/50">
                    {data.calculation && (
                      <div className="bg-white/60 rounded-lg p-2.5 mb-3 border border-sky-300 mt-3">
                        <p className="text-xs md:text-sm font-mono text-gray-700">{data.calculation}</p>
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">New Clients Per Month</p>
                        <p className="text-xl md:text-2xl font-bold text-sky-600">+{data.additionalClients}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">Annual Revenue Added</p>
                        <p className="text-xl md:text-2xl font-bold text-emerald-600">£{data.yearlyRevenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">Setup Cost</p>
                        <p className="text-lg md:text-xl font-bold text-gray-700">£{data.setupCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 mb-1">Monthly Cost</p>
                        <p className="text-lg md:text-xl font-bold text-gray-700">£{data.monthlyCost > 0 ? data.monthlyCost.toLocaleString() : '0 (performance fee)'}</p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-sky-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-lg font-semibold text-gray-900">12-Month ROI</span>
                        <span className="text-2xl md:text-3xl font-black text-emerald-600">{data.roi > 0 ? '+' : ''}{data.roi.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Investment Breakdown */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200/50">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 text-center">What You'll Invest</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <span className="text-sm md:text-base text-gray-900">One-time setup</span>
            <span className="text-lg md:text-xl font-bold text-gray-900">£{results.setupCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <span className="text-sm md:text-base text-gray-900">Ongoing monthly retainer</span>
            <span className="text-lg md:text-xl font-bold text-gray-900">£{results.monthlyCost.toLocaleString()}/mo</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <span className="text-sm md:text-base text-gray-900">First month and first retainer total</span>
            <span className="text-lg md:text-xl font-bold text-gray-900">£{results.totalFirstMonthCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl shadow-md">
            <span className="text-sm md:text-base font-bold text-white">12-month total ROI</span>
            <span className="text-xl md:text-2xl font-black text-white">{results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%</span>
          </div>
        </div>
      </div>

      {/* (Removed local market and Google Ads teaser sections as requested) */}

      {/* Email Capture CTA */}
      <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl p-5 md:p-6 shadow-lg border border-sky-300 max-w-xl mx-auto">
        <div className="text-center mb-6">
          <Mail size={40} className="mx-auto mb-3 text-white" />
          <h3 className="text-2xl font-bold mb-2 text-white">Want To Review Your Report?</h3>
        </div>

        <div className="max-w-sm mx-auto space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full p-3 bg-white border-2 border-white/50 rounded-xl text-sm md:text-base text-gray-900 placeholder-gray-400 focus:border-white focus:outline-none"
          />
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full p-3 bg-white border-2 border-white/50 rounded-xl text-sm md:text-base text-gray-900 placeholder-gray-400 focus:border-white focus:outline-none"
          />
          <button 
            onClick={handlePDFRequest}
            className="w-full bg-white text-sky-600 hover:bg-gray-50 font-bold py-3 px-5 rounded-xl text-sm md:text-base flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Mail size={20} />
            Send My Report
          </button>
        </div>
      </div>

      {/* Reset Button */}
      <div className="text-center mt-4">
        <button 
          onClick={onReset}
          className="w-full max-w-xs mx-auto bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-3 px-8 rounded-xl text-sm md:text-base transition-all shadow-md border border-red-300"
        >
          Start Over
        </button>
      </div>
    </div>
  );
});

export default ResultsDisplay;
