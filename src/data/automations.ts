import { Automation } from '../types';

export const businessAutomations: Automation[] = [
  {
    name: 'Follow-Up Emails/SMS',
    purpose: "Converts abandoned leads who filled forms but didn't book.",
    timeline: '1 Day',
    price: '€500–€1,000',
    icon: 'Mail',
    details: {
      about: 'Delivers automated follow-up sequences that re-engage users who submitted their info but failed to complete a booking. These reminders are behavior-based and fully customizable.',
      whatItDoes: 'Sends delayed reminders (1hr, 24hr) via email or SMS to nudge non-booking leads back into the flow.'
    },
    niches: ['Fitness', 'Coaching', 'Clinics', 'Consultations'],
    recommendedIn: ['01', '02']
  },
  {
    name: 'Abandoned Chat Recovery',
    purpose: 'Reclaims leads lost mid-chat. Reactivates with a follow-up.',
    timeline: '1 Day',
    price: '€500–€800',
    icon: 'MessageSquare',
    details: {
      about: 'Detects drop-offs and automatically sends a personalized follow-up with contextual memory of where the conversation left off. Ideal for recovering missed opportunities at scale.',
      whatItDoes: 'Tracks user abandonment and re-engages with a trigger message that picks up the conversation without starting over.'
    },
    niches: ['High-volume sites', 'Lead funnels', 'Clinics', 'Gyms'],
    recommendedIn: ['03', '04']
  },
  {
    name: 'CRM Sync Integration',
    purpose: 'Instantly pushes captured data to CRMs.',
    timeline: '1–2 Days',
    price: '€800–€1,200',
    icon: 'Database',
    details: {
      about: 'Bi-directional sync between the chatbot and your CRM (e.g. Supabase, HubSpot, Notion, Airtable). Supports triggering follow-up sequences, segmentation, and automated deal stages.',
      whatItDoes: 'Captures leads and injects them directly into your pipeline with no manual copy/paste. Keeps systems in sync.'
    },
    niches: ['Coaches', 'Therapists', 'Clinics', 'Agencies'],
    recommendedIn: ['01', '02', '03', '04']
  },
  {
    name: 'Calendar & Booking System',
    purpose: 'Lets users schedule directly inside the bot.',
    timeline: '2 Days',
    price: '€1,000–€1,500',
    icon: 'Calendar',
    details: {
      about: 'Replaces external booking tools with a built-in calendar that connects to Google, Outlook, or custom systems. Reduces friction by letting users book in-flow without redirecting.',
      whatItDoes: 'Displays available time slots, confirms bookings, and sends automated reminders inside the bot conversation.'
    },
    niches: ['Wellness Studios', 'Personal Trainers', 'Clinics', 'Coaches'],
    recommendedIn: ['01', '02']
  },
  {
    name: 'WhatsApp Integration',
    purpose: 'Extends bot logic to WhatsApp for mobile-first experience.',
    timeline: '2–3 Days',
    price: '€1,500–€2,000',
    icon: 'MessageCircle',
    details: {
      about: 'Delivers the full chat experience inside WhatsApp. Supports native messaging rules, rebooking flows, templates, and fallbacks. High engagement channel (98% open rate).',
      whatItDoes: 'Runs the same automation flows on WhatsApp — not just web. Great for rebooking, reminders, and inbound qualification.'
    },
    niches: ['Coaches', 'Clinics', 'Agencies', 'Multi-Brand Enterprises'],
    recommendedIn: ['02', '03', '04']
  },
  {
    name: 'Loyalty & Reward Flows',
    purpose: 'Automates upsells, retention, and recurring bookings.',
    timeline: '3 Days',
    price: '€1,500–€2,000',
    icon: 'Heart',
    details: {
      about: 'Builds behavior-based loyalty logic into your bot: free sessions, reward tiers, auto-discounts, and returning visitor bonuses — without manual tracking.',
      whatItDoes: 'Triggers incentives like "book 3x, get 1 free" to increase LTV and retention. Fully automated inside the bot.'
    },
    niches: ['Gyms', 'Membership Sites', 'Clinics', 'Nutritionists'],
    recommendedIn: ['02', '03', '04']
  },
  {
    name: 'Analytics Dashboard Setup',
    purpose: "Gives real-time visibility into your bot's performance.",
    timeline: '4 Days',
    price: '€2,000–€3,000',
    icon: 'BarChart2',
    details: {
      about: 'Custom dashboards that track user actions, conversion rates, source attribution, drop-off points, and campaign performance — built to prove ROI.',
      whatItDoes: 'Visualizes chat performance and user flow to highlight friction points and optimize over time.'
    },
    niches: ['Clinics', 'Multi-location Brands', 'Enterprises', 'Agencies'],
    recommendedIn: ['02', '03', '04']
  }
];
