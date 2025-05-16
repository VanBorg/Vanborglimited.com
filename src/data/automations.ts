export interface Automation {
  name: string;
  purpose: string;
  price: string;
  timeline: string;
  icon: string;
  details: {
    about: string;
    whatItDoes: string;
  };
  niches: string[];
  recommendedIn: string[];
  description?: string;
}

export const businessAutomations: Automation[] = [
  {
    name: '🔁 CRM SYNC',
    purpose: 'Integrate lead data with your CRM.',
    price: '€250–€500',
    timeline: '1–2 days',
    icon: 'RefreshCw',
    details: {
      about: 'Instantly transfers user data (name, email, phone, goals, quiz answers, timestamps, traffic source) into your CRM for centralized lead tracking, tagging, and automation triggers. Ensures no lead ever slips through the cracks.',
      whatItDoes: 'User submits data → Make formats the payload → Pushes to CRM (HubSpot, Pipedrive, Notion, or Airtable) → Applies dynamic tags (lead source, quiz outcome, funnel stage) → Triggers automation sequences, reminders, or task creation in CRM.'
    },
    niches: ['Sales Teams', 'Marketing Agencies', 'Service Businesses'],
    recommendedIn: ['01', '02', '03'],
    description: 'Pushes captured lead data into CRM systems.'
  },
  {
    name: '📧 EMAIL SEQUENCE TRIGGER',
    purpose: 'Automate email follow-ups.',
    price: '€200–€400',
    timeline: '1 day',
    icon: 'Mail',
    details: {
      about: 'Automatically nurtures new leads with a warm-up email sequence designed to educate, build trust, and drive action—without lifting a finger.',
      whatItDoes: 'Lead enters funnel → scenario triggers drip sequence via Brevo, Mailchimp, or Gmail API → Sends 3–5 timed messages (case studies, FAQs, CTAs) → Sequence ends on booking or reply → CRM logs status.'
    },
    niches: ['E-commerce', 'Online Courses', 'Consultants'],
    recommendedIn: ['01', '02'],
    description: 'Sends auto-email follow-ups after lead submission.'
  },
  {
    name: '📄 LEAD QUIZ + LEAD MAGNET DELIVERY',
    purpose: 'Engage leads with quizzes and deliver assets.',
    price: '€300–€600',
    timeline: '2 days',
    icon: 'FileText',
    details: {
      about: 'Captures lead preferences, goals, and qualification via quiz, then instantly delivers a personalized lead magnet (PDF, checklist, plan) while logging the lead into your CRM.',
      whatItDoes: 'User completes quiz → Make calculates score or segment → Sends PDF via email → Logs responses, tags, and score to CRM → Triggers next automation path.'
    },
    niches: ['Coaches', 'Content Creators', 'Educators'],
    recommendedIn: ['01'],
    description: 'Captures quiz data and delivers lead magnet PDF.'
  },
  {
    name: '💬 PLATFORM DM + ENGAGEMENT NUDGES',
    purpose: 'Engage leads on social/messaging platforms.',
    price: '€300–€700',
    timeline: '2–3 days',
    icon: 'MessageSquare',
    details: {
      about: 'Captures inbound messages from Meta platforms or re-engages inactive users with WhatsApp nudges, SMS pings, or automated check-ins. Boosts retention and lead conversion rates.',
      whatItDoes: 'Make watches Meta inbox, CRM activity, or time triggers → Captures inbound DMs or detects inactivity → Sends tailored message or reactivation flow → Logs outcome to CRM, Notion, or Airtable.'
    },
    niches: ['Social Media Marketing', 'Direct Sales', 'Community Management'],
    recommendedIn: ['01', '03'],
    description: 'Captures or re-engages leads via WhatsApp, DMs.'
  },
  {
    name: '🧠 LEAD FLOW OPTIMIZER',
    purpose: 'Optimize lead nurturing and conversion.',
    price: '€600–€1,000',
    timeline: '3–4 days',
    icon: 'Brain',
    details: {
      about: 'Combines lead scoring, timed nurturing, reminder logic, automatic rescheduling, and upsell opportunities into a single intelligent flow. Designed to keep leads warm and moving without manual intervention.',
      whatItDoes: 'Lead enters → GPT scores quality (hot, warm, cold) → Make tracks time since last action → Sends nurturing emails, reschedule prompts, or upsell offers depending on stage → All activity logged to CRM.'
    },
    niches: ['High-Value Sales', 'Subscription Services', 'Complex Funnels'],
    recommendedIn: ['02', '03', '04'],
    description: 'Scoring, nurture, reminders, upsells, rebooking.'
  },
  {
    name: '📚 INTELLIGENT FAQ + GPT Q&A ASSISTANT',
    purpose: 'Provide instant answers to user queries.',
    price: '€300–€1,000',
    timeline: '1–3 days',
    icon: 'BookOpen',
    details: {
      about: 'Handles user questions instantly using either a structured knowledge base or real-time GPT responses—freeing you from answering the same questions over and over.',
      whatItDoes: 'User submits a question → Make checks internal FAQ first → If no match, it forwards the query to GPT → Response returned to user → Logs interaction and tags in CRM or Notion.'
    },
    niches: ['Customer Support', 'SaaS Platforms', 'Information Portals'],
    recommendedIn: ['01', '02', '03'],
    description: 'Answers user queries via GPT or knowledge base.'
  },
  {
    name: '⚡ INSTANT BOOKING + CALENDAR SYNC',
    purpose: 'Streamline appointment scheduling.',
    price: '€400–€700',
    timeline: '2 days',
    icon: 'CalendarDays',
    details: {
      about: 'Lets qualified users schedule a session in real time while syncing it automatically to your connected calendar. Removes friction and shortens sales cycles.',
      whatItDoes: 'Lead passes qualification step → Make pulls available time slots from Google/Calendly → User selects → Booking created → Confirmation email sent → Event synced and logged.'
    },
    niches: ['Service Providers', 'Consultants', 'Sales Teams'],
    recommendedIn: ['02', '03'],
    description: 'Shows booking UI, syncs event to Google/Calendly.'
  },
  {
    name: '💳 AUTO PAYMENT TRIGGER',
    purpose: 'Facilitate automated payment collection.',
    price: '€300–€700',
    timeline: '1–2 days',
    icon: 'CreditCard',
    details: {
      about: 'Secures payment before the session is confirmed—ensuring you\'re paid upfront and reducing no-show risk.',
      whatItDoes: 'User initiates booking → Make triggers Stripe checkout → User pays → On payment confirmation, booking is confirmed and calendar is synced → CRM is updated.'
    },
    niches: ['Paid Services', 'Appointment-Based Businesses', 'E-commerce'],
    recommendedIn: ['02', '03'],
    description: 'Sends Stripe link before confirming a booking.'
  },
  {
    name: '🧠 AI RESPONSE COACHING',
    purpose: 'Enhance user engagement with motivational replies.',
    price: '€400–€900',
    timeline: '2–3 days',
    icon: 'Sparkles',
    details: {
      about: 'Delivers personalized, goal-aligned coaching responses based on user mood, input, or progress—keeping clients engaged and accountable.',
      whatItDoes: 'User checks in or logs feedback → Make routes message to GPT → AI returns motivation, challenge, or feedback → Bot sends it back conversationally → Logs response for tracking and insights.'
    },
    niches: ['Coaching', 'Wellness Apps', 'Educational Platforms'],
    recommendedIn: ['03', '04'],
    description: 'Delivers motivational replies based on user tone.'
  },
  {
    name: '⏱️ POST-BOOKING UPSELL FLOW',
    purpose: 'Increase revenue with automated upsells.',
    price: '€400–€700',
    timeline: '2–3 days',
    icon: 'TrendingUp',
    details: {
      about: 'Maximizes revenue per client by offering add-ons, upgrades, or premium bundles after a booking is confirmed.',
      whatItDoes: 'Booking confirmed → Make triggers a timed message (email, SMS, or WhatsApp) → Suggests upgrade (e.g., multi-session pack) → Logs user decision and tags in CRM.'
    },
    niches: ['Service Businesses', 'E-commerce', 'Travel & Hospitality'],
    recommendedIn: ['02', '03'],
    description: 'Suggests upsell offers after booking confirmation.'
  },
  {
    name: '⚠️ ATTENDANCE & BOOKING CONFLICT HANDLER',
    purpose: 'Manage bookings and prevent conflicts.',
    price: '€350–€700',
    timeline: '2–3 days',
    icon: 'ShieldAlert',
    details: {
      about: 'Automatically prevents double bookings and re-engages users who missed a session—protecting your calendar and revenue.',
      whatItDoes: 'User attempts to book → Make checks existing calendar entries for conflict → Confirms or blocks booking → If session is missed, triggers follow-up with rebooking CTA or apology flow.'
    },
    niches: ['Appointment-Heavy Businesses', 'Salons & Spas', 'Medical Clinics'],
    recommendedIn: ['02', '03'],
    description: 'Prevents double-bookings, handles no-show follow-ups.'
  },
  {
    name: '📆 WEEKLY MOTIVATION LOOP',
    purpose: 'Maintain user engagement with regular check-ins.',
    price: '€300–€600',
    timeline: '2 days',
    icon: 'Repeat',
    details: {
      about: 'Maintains user momentum with proactive check-ins, inactivity detection, and motivational nudges—automated, personal, and timed to perfection.',
      whatItDoes: "Make monitors CRM or backend activity logs → If user hasn't engaged after X days, it triggers a check-in via WhatsApp, email, or SMS → Custom content is sent (reminder, encouragement, CTA) → Outcome is logged and loop resets."
    },
    niches: ['Subscription Services', 'Fitness & Wellness', 'Educational Programs'],
    recommendedIn: ['03', '04'],
    description: 'Sends check-ins, nudges, and reactivation triggers.'
  },
  {
    name: '🏆 GOAL MILESTONE TRACKER',
    purpose: 'Track and reward user progress.',
    price: '€400–€800',
    timeline: '2–3 days',
    icon: 'Award',
    details: {
      about: 'Celebrates user progress by recognizing milestones and sending automated rewards, encouragement, or gamified badges.',
      whatItDoes: 'User activity is logged in CRM or Airtable → Make checks for predefined milestones (e.g. 7-day streak, completed check-ins) → When hit, system triggers a message or reward → Logs achievement and resets counter.'
    },
    niches: ['Coaching Programs', 'Fitness Apps', 'Personal Development'],
    recommendedIn: ['03', '04'],
    description: 'Tracks and rewards user milestone achievements.'
  },
  {
    name: '🏋️ GOAL-BASED PLAN GENERATOR',
    purpose: 'Create personalized plans for users.',
    price: '€700–€1,200',
    timeline: '3–5 days',
    icon: 'ClipboardList',
    details: {
      about: 'Builds personalized, evolving workout or coaching plans based on user goals, preferences, or logged behavior—delivered daily or weekly via chat.',
      whatItDoes: 'User selects goal or logs status → Make sends data to GPT or retrieves matching program template → Formats it into a structured daily or weekly plan → Delivered automatically via chat, email, or SMS.'
    },
    niches: ['Fitness Coaches', 'Nutritionists', 'Project Management'],
    recommendedIn: ['04'],
    description: 'Generates custom plans based on user input.'
  }
];
