import { ServiceItem } from '../types';

export const chatbotServices: ServiceItem[] = [
  {
    title: 'Lead Generation Bot',
    description: 'Capture qualified leads 24/7 with intelligent qualification and appointment booking.',
    icon: 'users',
    benefits: [
      'Pre-qualifies potential clients',
      'Books appointments directly to your calendar',
      'Collects contact information',
      'Answers common questions automatically',
    ],
  },
  {
    title: 'Customer Support Bot',
    description: 'Provide instant answers to customer questions and reduce support ticket volume.',
    icon: 'help-circle',
    benefits: [
      'Handles common support questions',
      'Escalates complex issues to human agents',
      'Available 24/7 to assist customers',
      'Reduces support team workload',
    ],
  },
  {
    title: 'Sales Automation Bot',
    description: 'Guide prospects through your sales funnel with personalized recommendations.',
    icon: 'shopping-cart',
    benefits: [
      'Qualifies prospects based on needs',
      'Recommends relevant products/services',
      'Handles objections with strategic responses',
      'Schedules sales calls with qualified leads',
    ],
  },
  {
    title: 'Content Delivery Bot',
    description: 'Deliver personalized content and resources based on user interests and needs.',
    icon: 'file-text',
    benefits: [
      'Recommends relevant content to visitors',
      'Delivers lead magnets and resources',
      'Segments users based on interests',
      'Nurtures leads with valuable information',
    ],
  },
];

export const automationServices: ServiceItem[] = [
  {
    title: 'Email Sequence Automation',
    description: 'Set up personalized email sequences that nurture leads through your sales funnel.',
    icon: 'mail',
    benefits: [
      'Automated follow-up sequences',
      'Personalized messaging based on user actions',
      'Scheduled delivery at optimal times',
      'Performance tracking and optimization',
    ],
  },
  {
    title: 'Calendar Management',
    description: 'Eliminate booking hassles with intelligent scheduling that respects your availability.',
    icon: 'calendar',
    benefits: [
      'Automated appointment booking',
      'Buffer time between meetings',
      'Timezone detection for global clients',
      'Integration with your existing calendar',
    ],
  },
  {
    title: 'Client Onboarding',
    description: 'Streamline your client onboarding process with automated workflows and documentation.',
    icon: 'clipboard-check',
    benefits: [
      'Automated welcome sequences',
      'Document collection and management',
      'Process tracking and notifications',
      'Consistent experience for every client',
    ],
  },
  {
    title: 'Social Media Management',
    description: 'Schedule and automate your social media posting for consistent brand presence.',
    icon: 'share-2',
    benefits: [
      'Content calendar management',
      'Scheduled posting across platforms',
      'Engagement monitoring',
      'Performance analytics and reporting',
    ],
  },
  {
    title: 'Payment Processing',
    description: 'Automate invoicing, payment collection, and receipt generation for client transactions.',
    icon: 'credit-card',
    benefits: [
      'Automated invoice generation',
      'Secure payment collection',
      'Receipt delivery and record-keeping',
      'Payment reminders for overdue invoices',
    ],
  },
  {
    title: 'Data Collection & Analysis',
    description: 'Gather and analyze data from various sources to inform business decisions.',
    icon: 'bar-chart-2',
    benefits: [
      'Automated data collection',
      'Custom report generation',
      'Trend analysis and insights',
      'Data visualization for easy understanding',
    ],
  },
  {
    title: 'Workflow Integration',
    description: 'Connect your existing tools and systems for seamless information flow and process automation.',
    icon: 'git-merge',
    benefits: [
      'Connect multiple platforms and tools',
      'Eliminate manual data transfer',
      'Trigger actions based on events',
      'Streamline complex business processes',
    ],
  },
];

export const maintenancePlans: ServiceItem[] = [
  {
    title: 'Essential Maintenance',
    description: 'Keep your AI systems running smoothly with regular updates and basic support.',
    icon: 'tool',
    benefits: [
      'Monthly performance reviews',
      'Critical updates and fixes',
      'Basic response training updates',
      'Email support (48-hour response)',
    ],
  },
  {
    title: 'Proactive Maintenance',
    description: 'Maximize performance with proactive optimization, advanced support, and continual improvements.',
    icon: 'shield',
    benefits: [
      'Weekly performance reviews',
      'Proactive optimizations',
      'Advanced response training',
      'Priority support (24-hour response)',
      'Monthly strategy calls',
      'Continuous improvement recommendations',
    ],
  },
];