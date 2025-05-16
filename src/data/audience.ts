import { TargetAudience } from '../types';

export const targetAudiences: TargetAudience[] = [
  {
    title: 'Fitness Coaches',
    benefits: [
      'Automates lead capture with smart forms',
      'Adds booking + WhatsApp for retention',
      'Handles loyalty upsells automatically'
    ],
    icon: 'Dumbbell',
    impact: 'Frees up 15+ hours/month by replacing manual filtering and DMs.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Personal Trainers',
    benefits: [
      'Booking system removes no-shows',
      'Auto-reminders boost session turnout',
      'Multi-channel logic improves ROI'
    ],
    icon: 'UserCog',
    impact: 'Books 3x more sessions per week automatically.',
    botPath: '02 → 03'
  },
  {
    title: 'Yoga Instructors',
    benefits: [
      'Simple lead capture system',
      'Booking assistant manages schedule',
      'Loyalty upgrades handled later'
    ],
    icon: 'Lotus',
    impact: 'Increases class retention by 30–40% using reminders.',
    botPath: '01 → 02'
  },
  {
    title: 'Health & Mindset Coaches',
    benefits: [
      'Nurtures leads through follow-ups',
      'Multi-step booking flows included',
      'WhatsApp boosts conversions'
    ],
    icon: 'Brain',
    impact: 'Books 60–80% more consults, even while you sleep.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Nutritionists & Diet Coaches',
    benefits: [
      'Captures form data instantly',
      'Boosts consult bookings with reminders',
      'Scales with loyalty logic'
    ],
    icon: 'Apple',
    impact: 'Doubles consults in first 30 days from intake flows.',
    botPath: '01 → 02'
  },
  {
    title: 'Wellness Studios',
    benefits: [
      'Handles team-wide booking logic',
      'Offloads FAQ and client triage',
      'Builds loyalty with automation'
    ],
    icon: 'HeartPulse',
    impact: 'Handles 85% of client inquiries and boosts rebooking 2.3x.',
    botPath: '02 → 03'
  },
  {
    title: 'Therapists (Solo)',
    benefits: [
      'Appointment automation saves time',
      'Auto-reminders reduce no-shows',
      'CRM sync enhances growth'
    ],
    icon: 'MessageSquareHeart',
    impact: 'Recovers £24K+/year with triage and intake flows.',
    botPath: '02 → 03'
  },
  {
    title: 'Therapy Clinics (Multi-staff)',
    benefits: [
      'Manages staff scheduling seamlessly',
      'Builds segmented CRM logic',
      'Enables internal dashboards'
    ],
    icon: 'Stethoscope',
    impact: 'Reduces drop-offs and boosts visibility across teams.',
    botPath: '02 → 03 → 04'
  },
  {
    title: 'Medical & Alternative Clinics',
    benefits: [
      'Controls onboarding + compliance',
      'Manages regulated flow systems',
      'Delivers enterprise-level automation'
    ],
    icon: 'ActivitySquare',
    impact: 'Cuts admin time 60% and accelerates intake by 35%.',
    botPath: '03 → 04'
  },
  {
    title: 'Gyms & Fitness Centers',
    benefits: [
      'Automates walk-in lead capture',
      'Schedules & reminds members',
      'Builds loyalty programs fast'
    ],
    icon: 'Dumbbell',
    impact: 'Increases monthly memberships and retention rates.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Franchise Studios & Chains',
    benefits: [
      'Enables role-based dashboards',
      'Manages brands with white-label logic',
      'Secures data + automation compliance'
    ],
    icon: 'Building',
    impact: 'Delivers full-brand control with scalable logic.',
    botPath: '03 → 04'
  }
];

export const focusedNiches: TargetAudience[] = [
  {
    title: 'Fitness Coaches',
    benefits: ['Automated client intake', 'Seamless booking & payments', 'Personalized workout delivery'],
    icon: 'Dumbbell', // Reused icon, can be changed
    impact: 'Scale your coaching business without the admin grind.',
    botPath: '01 → 02'
  },
  {
    title: 'Personal Trainers',
    benefits: ['24/7 lead qualification', 'Effortless session scheduling', 'Client progress tracking'],
    icon: 'UserCog', // Reused icon
    impact: 'Fill your schedule and focus on client results.',
    botPath: '01 → 02'
  },
  {
    title: 'Yoga Instructors',
    benefits: ['Class & workshop bookings', 'Automated waitlists & reminders', 'Membership management tools'],
    icon: 'Lotus', // Reused icon
    impact: 'Grow your community and streamline class administration.',
    botPath: '01 → 02'
  },
  {
    title: 'Health & Mindset Coaches',
    benefits: ['Structured onboarding flows', 'Secure client communication', 'Resource & content delivery'],
    icon: 'Brain', // Reused icon
    impact: 'Deliver transformative coaching with powerful automation.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Nutritionists & Diet Coaches',
    benefits: ['Automated meal plan suggestions', 'Dietary preference tracking', 'Client check-ins & support'],
    icon: 'Apple', // Reused icon
    impact: 'Provide personalized nutrition guidance at scale.',
    botPath: '01 → 02'
  },
  {
    title: 'Gyms & Fitness Centers',
    benefits: ['Membership inquiries & sign-ups', 'Class scheduling & capacity management', 'Member communication hub'],
    icon: 'Building', // Changed icon from Dumbbell to Building for distinction
    impact: 'Boost memberships and enhance member experience.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Wellness Studios',
    benefits: ['Multi-service booking system', 'Workshop & event promotion', 'Client feedback collection'],
    icon: 'HeartPulse', // Reused icon
    impact: 'Manage diverse wellness offerings with ease.',
    botPath: '01 → 02 → 03'
  },
  {
    title: 'Solo Therapists',
    benefits: ['Confidential client intake forms', 'Secure appointment scheduling', 'Automated session reminders'],
    icon: 'MessageSquareHeart', // Reused icon
    impact: 'Focus on your clients, not administrative tasks.',
    botPath: '02 → 03'
  },
  {
    title: 'Franchise Studios & Chains',
    benefits: ['Standardized AI tools for all locations', 'Centralized reporting & analytics', 'Brand consistency in communication'],
    icon: 'Network', // Changed icon from Building for distinction
    impact: 'Scale your franchise operations with unified AI solutions.',
    botPath: '03 → 04'
  }
];
