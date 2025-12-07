export interface Services {
  localSeo: boolean;
  googleAds: boolean;
  seoWebsite: boolean;
  aiChatbot: boolean;
}

export interface FormData {
  industry: string;
  avgClientValue: number;
  currentClients: number;
  currentLeads: number;
  currentRanking: string;
  mapsRanking: string;
  services: Services;
}

export interface ServiceROI {
  name: string;
  setupCost: number;
  monthlyCost: number;
  totalYearCost: number;
  additionalClients: number;
  yearlyRevenue: number;
  roi: number;
  calculation?: string;
}

export interface CalculatorResults {
  additionalClients: number;
  currentClients: number;
  newClients: number;
  currentLeads: number;
  newLeads: number;
  additionalLeads: number;
  projectedClients: number;
  currentRevenue: number;
  newRevenue: number;
  monthlyIncrease: number;
  yearlyIncrease: number;
  setupCost: number;
  monthlyCost: number;
  totalFirstMonthCost: number;
  weeksToBreakEven: number;
  monthlyLost: number;
  adsLeads: number;
  adsClients: number;
  adsRevenue: number;
  roi: number;
  serviceDescription: string;
  finalMultiplier: number;
  searchVolume: number;
  conversionRate: number;
  serviceROI: Record<string, ServiceROI>;
  calculationBreakdown: string[];
  rankingBoost: number;
  mapsBoost: number;
  positionBoost: number;
  volumeMultiplier: number;
  totalBoost: number;
}
