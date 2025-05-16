import { Testimonial } from '../types';
import { businessAutomations } from './automations';

// Chatbot Solutions section data
export const chatbotSolutions = [
  {
    titleTop: '01. Lead Capture System',
    titleBottom: 'Smart FAQ & Lead Capture',
    description: 'Smart FAQ answering, lead form capture, and booking links - perfect for fast-moving coaches and solo operators.',
    icon: 'Bot',
    features: [
      'FAQ answering',
      'Lead form capture',
      'Simple booking links'
    ],
    timeline: '2-4 Days',
    niches: ['Fitness Coaches', 'Health Coaches', 'Nutritionists', 'Solo Practitioners', 'Small Studios'],
    useCase: 'Ideal for coaches or small studios starting out with AI automation.'
  },
  {
    titleTop: '02. Client Booking Assistant',
    titleBottom: 'Calendar & CRM Integration',
    description: 'Complete booking automation with calendar integration, CRM sync, and intelligent follow-up sequences.',
    icon: 'MessageSquareMore',
    features: [
      'Smart AI flows',
      'Calendar booking',
      'CRM integration',
      'Follow-up messages'
    ],
    timeline: '5-7 Days',
    niches: ['Personal Trainers', 'Solo Therapists', 'Yoga Instructors', 'Wellness Studios'],
    useCase: 'Perfect for wellness businesses ready to automate daily operations and increase conversions.'
  },
  {
    titleTop: '03. Full-Service Chat Automation',
    titleBottom: 'Multi-Channel AI System',
    description: 'Multi-channel AI system with integrated loyalty programs, advanced analytics, and complete booking automation.',
    icon: 'Brain',
    features: [
      'Web, WhatsApp & Facebook bots',
      'Loyalty reward flows',
      'Analytics dashboard setup'
    ],
    timeline: '10-14 Days',
    niches: ['Gyms', 'Clinics', 'Multi-Location Studios', 'High-Traffic Sites'],
    useCase: 'Built for gyms and clinics managing complex flows or multi-location scheduling.'
  },
  {
    titleTop: '04. Custom AI Solution',
    titleBottom: 'Enterprise-Grade AI',
    description: 'Enterprise-grade AI with white-label UI, deep CRM integration, and custom automation flows across your entire tech stack.',
    icon: 'Settings',
    features: [
      'Deep CRM integrations',
      'White-label interface',
      'Custom loyalty automations'
    ],
    timeline: '3-6 Weeks',
    niches: ['Franchise Chains', 'Medical Clinics', 'SaaS Brands', 'Multi-Brand Enterprises'],
    useCase: 'For enterprises or clinics needing tailored systems across departments and tools.'
  }
];

// Business Impact Stats
export const businessStats = [
  {
    value: '137%',
    label: 'Leads Qualified with AI',
    icon: 'TrendingUp',
    prefix: '+'
  },
  {
    value: '22+',
    label: 'Hours Reclaimed Weekly',
    icon: 'Clock'
  },
  {
    value: '540%',
    label: 'ROI Within 30 Days',
    icon: 'Percent'
  },
  {
    value: '98%',
    label: 'Satisfaction Score',
    icon: 'ThumbsUp',
  }
];

// Testimonials data
export const impactTestimonials: Testimonial[] = [
  {
    quote: "Van Borg's AI instantly doubled our lead quality while cutting our ad spend by 30%. It's like having a 24/7 sales team without payroll.",
    author: "Sarah Jenkins",
    company: "Wellness Collective",
    impact: {
      metric: "Lead Quality",
      value: "+137%"
    }
  },
  {
    quote: "We saved over 20 hours per week just by automating FAQs and appointment bookings. Total game-changer.",
    author: "Michael Rodriguez",
    company: "Elite Training Studio",
    impact: {
      metric: "Hours Reclaimed",
      value: "22+ hrs/week"
    }
  },
  {
    quote: "Our ROI hit 5x in just 30 days. Now it's pure profit every month — and we haven't touched it since launch.",
    author: "Jennifer Williams",
    company: "Clear Mind\nCoaching",
    impact: {
      metric: "ROI",
      value: "540% in 30 Days"
    }
  },
  {
    quote: "Clients couldn't tell they were chatting with AI. It matches our brand tone so well, it feels human.",
    author: "David Chen",
    company: "Integrated Health\nClinic",
    impact: {
      metric: "Satisfaction Score",
      value: "98%"
    }
  }
];