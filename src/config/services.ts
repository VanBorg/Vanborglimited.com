// Shared service configuration - single source of truth
// Used by both Services.tsx (home page) and ROI calculator

export interface ServiceConfig {
  id: string;
  title: string;
  setupCost: number;
  monthlyCost: number;
  timeline: string;
  calculatorKey: 'localSeo' | 'googleAds' | 'seoWebsite' | 'aiChatbot';
}

export const serviceConfigs: ServiceConfig[] = [
  {
    id: 'seo',
    title: 'Local SEO Ranking',
    setupCost: 1000,
    monthlyCost: 200,
    timeline: 'Up to 90 days',
    calculatorKey: 'localSeo',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    setupCost: 1000,
    monthlyCost: 750,
    timeline: 'Instant results',
    calculatorKey: 'googleAds',
  },
  {
    id: 'seo-website',
    title: 'SEO & Sales Websites',
    setupCost: 2500,
    monthlyCost: 200,
    timeline: '1–2 weeks',
    calculatorKey: 'seoWebsite',
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    setupCost: 700,
    monthlyCost: 100,
    timeline: '4–7 days',
    calculatorKey: 'aiChatbot',
  },
];

// Helper to get service config by calculator key
export const getServiceByCalculatorKey = (key: string): ServiceConfig | undefined => {
  return serviceConfigs.find(s => s.calculatorKey === key);
};

// Helper to get service config by id
export const getServiceById = (id: string): ServiceConfig | undefined => {
  return serviceConfigs.find(s => s.id === id);
};
