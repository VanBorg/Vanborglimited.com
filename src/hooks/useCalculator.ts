import { useState, useEffect, useMemo, useCallback } from 'react';
import type { FormData, CalculatorResults, ServiceROI } from '../types/roiCalculator';
import { serviceConfigs } from '../config/services';

// Industry presets - High-ticket local businesses
export const industryPresets = {
  'Roofing': { avgValue: 3500, searchVolume: 2400 },
  'Legal Services': { avgValue: 8000, searchVolume: 1200 },
  'Medical/Dental': { avgValue: 2800, searchVolume: 1900 },
  'Home Services': { avgValue: 3000, searchVolume: 2800 },
  'Construction': { avgValue: 12000, searchVolume: 800 },
  'HVAC': { avgValue: 4500, searchVolume: 2100 },
  'Plumbing': { avgValue: 1500, searchVolume: 3800 },
  'Electrical': { avgValue: 1800, searchVolume: 2900 },
  'Landscaping': { avgValue: 2200, searchVolume: 1600 },
  'Real Estate': { avgValue: 6500, searchVolume: 1500 },
  'Financial Services': { avgValue: 5000, searchVolume: 1100 },
  'Automotive Services': { avgValue: 2000, searchVolume: 2200 },
  'Other (Average)': { avgValue: 3500, searchVolume: 2000 }
};

export function useCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    industry: 'Roofing',
    avgClientValue: 3500,
    currentClients: 5,
    currentLeads: 20,
    currentRanking: 'page3',
    mapsRanking: 'not-visible',
    services: {
      localSeo: false,
      googleAds: false,
      seoWebsite: false,
      aiChatbot: false,
    }
  });
  
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Update avg client value when industry changes
  useEffect(() => {
    if (industryPresets[formData.industry as keyof typeof industryPresets]) {
      setFormData(prev => ({
        ...prev,
        avgClientValue: industryPresets[formData.industry as keyof typeof industryPresets].avgValue
      }));
    }
  }, [formData.industry]);

  // Calculate pricing - memoized for performance
  const calculateInvestment = useCallback(() => {
    let setupCost = 0;
    let monthlyCost = 0;

    if (formData.services.localSeo) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'localSeo');
      if (service) {
        setupCost += service.setupCost;
        monthlyCost += service.monthlyCost;
      }
    }
    if (formData.services.googleAds) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'googleAds');
      if (service) {
        setupCost += service.setupCost;
        monthlyCost += service.monthlyCost;
      }
    }
    if (formData.services.seoWebsite) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'seoWebsite');
      if (service) {
        setupCost += service.setupCost;
        monthlyCost += service.monthlyCost;
      }
    }
    if (formData.services.aiChatbot) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'aiChatbot');
      if (service) {
        setupCost += service.setupCost;
        monthlyCost += service.monthlyCost;
      }
    }

    return { setupCost, monthlyCost };
  }, [formData.services]);

  // Calculate ROI projections - EXPLICIT AND CONSISTENT CALCULATIONS
  const calculateROI = useCallback((): CalculatorResults => {
    const { setupCost, monthlyCost } = calculateInvestment();
    const searchVolume = industryPresets[formData.industry as keyof typeof industryPresets]?.searchVolume || 2000;
    
    // Calculate current closing rate from user's actual data
    const conversionRate = formData.currentLeads > 0 ? formData.currentClients / formData.currentLeads : 0.25;
    
    // VOLUME MULTIPLIER - More clients = proven market = bigger opportunity
    const volumeMultiplier = formData.currentClients <= 2 ? 1.0 :
                             formData.currentClients <= 5 ? 1.2 :
                             formData.currentClients <= 10 ? 1.5 :
                             formData.currentClients <= 15 ? 1.7 : 2.0;
    
    // How ranking affects potential (worse ranking = more room to grow)
    const rankingImpact: Record<string, number> = {
      'top3': 0.6,
      'page1-lower': 1.0,
      'page1': 1.0,
      'page2': 1.3,
      'page3': 1.6,
      'not-ranked': 2.0,
      'not-sure': 2.0
    };
    
    const mapsImpact: Record<string, number> = {
      'top3-maps': 1.0,
      'visible-maps': 1.2,
      'visible': 1.2,
      'not-visible': 1.5
    };
    
    const rankingBoost = rankingImpact[formData.currentRanking] || 1.0;
    const mapsBoost = mapsImpact[formData.mapsRanking] || 1.0;
    const positionBoost = (rankingBoost + mapsBoost) / 2;
    
    // COMBINE position boost with volume multiplier
    const totalBoost = positionBoost * volumeMultiplier;
    const finalMultiplier = totalBoost;
    
    const calculationBreakdown: string[] = [];
    calculationBreakdown.push(`Position Boost: ${positionBoost.toFixed(2)}x (from ${formData.currentRanking} ranking & ${formData.mapsRanking} maps)`);
    calculationBreakdown.push(`Volume Multiplier: ${volumeMultiplier.toFixed(2)}x (currently ${formData.currentClients} clients/month shows proven demand)`);
    calculationBreakdown.push(`Combined Boost: ${totalBoost.toFixed(2)}x`);

    // Calculate per-service client additions
    const serviceROI: Record<string, ServiceROI> = {};
    const selectedServices: string[] = [];
    let totalServiceAdditionalClients = 0;

    // Local SEO: 2-8 new clients per month (scales with current volume)
    if (formData.services.localSeo) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'localSeo');
      if (service) {
        const seoBase = 2;
        const seoClients = Math.round(seoBase + (totalBoost * 1.5));
        totalServiceAdditionalClients += seoClients;
        selectedServices.push('Local SEO Ranking');
        
        const seoRevenue = seoClients * formData.avgClientValue * 12;
        const seoCost = service.setupCost + (service.monthlyCost * 12);
        serviceROI.localSeo = {
          name: 'Local SEO Ranking',
          setupCost: service.setupCost,
          monthlyCost: service.monthlyCost,
          totalYearCost: seoCost,
          additionalClients: seoClients,
          yearlyRevenue: seoRevenue,
          roi: seoCost > 0 ? ((seoRevenue - seoCost) / seoCost * 100) : 0,
          calculation: `${seoBase} base + (${totalBoost.toFixed(1)} boost × 1.5) = ${seoClients} clients/mo`
        };
        calculationBreakdown.push(`Local SEO: ${seoBase} base + (${totalBoost.toFixed(2)} boost × 1.5) = ${seoClients} clients/month`);
      }
    }
    
    // Google Ads: 1-5 new clients per month (scales with budget/volume)
    if (formData.services.googleAds) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'googleAds');
      if (service) {
        const adsBase = 1;
        const adsClients = Math.round(adsBase + (totalBoost * 0.8));
        totalServiceAdditionalClients += adsClients;
        selectedServices.push('Google Ads');
        
        const adsRevenue = adsClients * formData.avgClientValue * 12;
        const adsCost = service.setupCost + (service.monthlyCost * 12);
        serviceROI.googleAds = {
          name: 'Google Ads',
          setupCost: service.setupCost,
          monthlyCost: service.monthlyCost,
          totalYearCost: adsCost,
          additionalClients: adsClients,
          yearlyRevenue: adsRevenue,
          roi: adsCost > 0 ? ((adsRevenue - adsCost) / adsCost * 100) : 0,
          calculation: `${adsBase} base + (${totalBoost.toFixed(1)} boost × 0.8) = ${adsClients} clients/mo`
        };
        calculationBreakdown.push(`Google Ads: ${adsBase} base + (${totalBoost.toFixed(2)} boost × 0.8) = ${adsClients} clients/month`);
      }
    }
    
    // SEO Website: Improves conversion by 20-25%
    if (formData.services.seoWebsite) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'seoWebsite');
      if (service) {
        const websiteRate = 0.20 + (volumeMultiplier * 0.03); // 20-25% based on volume
        const websiteClients = Math.round(formData.currentClients * websiteRate);
        totalServiceAdditionalClients += websiteClients;
        selectedServices.push('SEO & Sales Websites');
        
        const websiteRevenue = websiteClients * formData.avgClientValue * 12;
        const websiteCost = service.setupCost + (service.monthlyCost * 12);
        serviceROI.seoWebsite = {
          name: 'SEO & Sales Websites',
          setupCost: service.setupCost,
          monthlyCost: service.monthlyCost,
          totalYearCost: websiteCost,
          additionalClients: websiteClients,
          yearlyRevenue: websiteRevenue,
          roi: websiteCost > 0 ? ((websiteRevenue - websiteCost) / websiteCost * 100) : 0,
          calculation: `${(websiteRate * 100).toFixed(0)}% conversion: ${formData.currentClients} clients × ${websiteRate.toFixed(2)} = ${websiteClients} clients/mo`
        };
        calculationBreakdown.push(`SEO Website: ${(websiteRate * 100).toFixed(0)}% conversion boost = ${formData.currentClients} × ${websiteRate.toFixed(2)} = ${websiteClients} clients/month`);
      }
    }
    
    // AI Chatbot: Improves conversion by 15-20% (more clients = more impact)
    if (formData.services.aiChatbot) {
      const service = serviceConfigs.find(s => s.calculatorKey === 'aiChatbot');
      if (service) {
        const chatbotRate = 0.15 + (volumeMultiplier * 0.02); // 15-20% based on volume
        const chatbotClients = Math.round(formData.currentClients * chatbotRate);
        totalServiceAdditionalClients += chatbotClients;
        selectedServices.push('AI Chatbots');
        
        const chatbotRevenue = chatbotClients * formData.avgClientValue * 12;
        const chatbotCost = service.setupCost + (service.monthlyCost * 12);
        serviceROI.aiChatbot = {
          name: 'AI Chatbots',
          setupCost: service.setupCost,
          monthlyCost: service.monthlyCost,
          totalYearCost: chatbotCost,
          additionalClients: chatbotClients,
          yearlyRevenue: chatbotRevenue,
          roi: chatbotCost > 0 ? ((chatbotRevenue - chatbotCost) / chatbotCost * 100) : 0,
          calculation: `${(chatbotRate * 100).toFixed(0)}% conversion: ${formData.currentClients} clients × ${chatbotRate.toFixed(2)} = ${chatbotClients} clients/mo`
        };
        calculationBreakdown.push(`AI Chatbot: ${(chatbotRate * 100).toFixed(0)}% conversion boost = ${formData.currentClients} × ${chatbotRate.toFixed(2)} = ${chatbotClients} clients/month`);
      }
    }

    const serviceDescription = selectedServices.length > 0 ? selectedServices.join(' + ') : 'No services selected';

    // Standardised projections (single source of truth)
    const avgClientValue = formData.avgClientValue;
    const currentClients = formData.currentClients;
    const currentLeads = formData.currentLeads;

    // Leads
    const newLeads = Math.round(currentLeads * finalMultiplier);
    const additionalLeads = Math.max(newLeads - currentLeads, 0);

    // Clients (sum of per-service contributions)
    const projectedClients = currentClients + totalServiceAdditionalClients;
    const additionalClients = Math.max(projectedClients - currentClients, 0);

    // Revenue
    const currentRevenue = currentClients * avgClientValue;
    const newClients = projectedClients;
    const newRevenue = projectedClients * avgClientValue;
    const monthlyIncrease = Math.max(newRevenue - currentRevenue, 0);
    const yearlyIncrease = monthlyIncrease * 12;

    // Costs & 12-month ROI
    // First month = full setup + first monthly payment
    const totalFirstMonthCost = setupCost + monthlyCost;
    const yearOneCost = setupCost + (monthlyCost * 12);
    const roi = yearOneCost > 0 ? ((yearlyIncrease - yearOneCost) / yearOneCost * 100) : 0;
    
    const monthsToBreakEven = monthlyIncrease > 0 ? (setupCost + monthlyCost) / monthlyIncrease : 999;
    const weeksToBreakEven = Math.min(Math.max(Math.ceil(monthsToBreakEven * 4.33), 1), 200);
    const monthlyLost = monthlyIncrease;

    // Realistic Ads clients in first 30 days
    const adsFirstMonthClients = formData.services.googleAds ? Math.round(1 + (positionBoost * 0.8)) : 0;
    const adsFirstMonthRevenue = adsFirstMonthClients * formData.avgClientValue;

    return {
      additionalClients,
      currentClients,
      newClients,
      currentLeads: formData.currentLeads,
      newLeads,
      additionalLeads,
      projectedClients,
      currentRevenue,
      newRevenue,
      monthlyIncrease,
      yearlyIncrease,
      setupCost,
      monthlyCost,
      totalFirstMonthCost,
      weeksToBreakEven,
      monthlyLost,
      adsLeads: 0,
      adsClients: adsFirstMonthClients,
      adsRevenue: adsFirstMonthRevenue,
      roi,
      serviceDescription,
      finalMultiplier,
      searchVolume,
      conversionRate: conversionRate * 100,
      serviceROI,
      calculationBreakdown,
      rankingBoost,
      mapsBoost,
      positionBoost,
      volumeMultiplier,
      totalBoost
    };
  }, [calculateInvestment, formData]);

  const nextStep = useCallback(() => {
    // Validate step 3 (services) before proceeding
    if (step === 3) {
      const hasSelectedServices = Object.values(formData.services).some(value => value === true);
      if (!hasSelectedServices) {
        alert('Please select at least one service to continue.');
        return;
      }
    }
    
    if (step < 3) {
      setStep(step + 1);
      // Scroll to top of calculator section when advancing to next step (steps 1→2, 2→3)
      setTimeout(() => {
        const calculatorElement = document.querySelector('[data-calculator-start]');
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (step === 3) {
      setShowResults(true);
      // NO scroll effect when showing results (step 3→results)
    }
  }, [step, formData.services]);

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep(step - 1);
      // Scroll to top of calculator section when going back to previous step
      setTimeout(() => {
        const calculatorElement = document.querySelector('[data-calculator-start]');
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [step]);

  const resetCalculator = useCallback(() => {
    setStep(1);
    setShowResults(false);
    setEmail('');
  }, []);

  // Memoize expensive calculations
  const results = useMemo(() => showResults ? calculateROI() : null, [showResults, calculateROI]);
  const searchVolume = useMemo(() => 
    industryPresets[formData.industry as keyof typeof industryPresets]?.searchVolume || 2000, 
    [formData.industry]
  );

  return {
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
  };
}
