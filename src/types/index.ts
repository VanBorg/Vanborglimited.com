export interface NavItem {
  label: string;
  path: string;
}

export interface ChatbotSolution {
  title: string;
  description: string;
  icon: string;
  features: string[];
  timeline: string;
  niches: string[];
  useCase?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  impact: {
    metric: string;
    value: string;
  };
}

export interface TargetAudience {
  title: string;
  icon: string;
  benefits?: string[];
  impact: string;
  botPath: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Automation {
  name: string;
  purpose: string;
  price: string;
  buildTime: string;
  icon: string;
  details: {
    description: string;
    bestFor: string;
  };
  niches: string[];
  recommendedIn: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}