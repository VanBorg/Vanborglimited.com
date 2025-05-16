import React, { useRef } from 'react';
import { FloatingChatbotButton } from '../../components/chatbot/ChatbotEmbed';
import { Hero } from '../../components/sections/Hero';
import { HowItWorks } from '../../components/sections/HowItWorks';
import { ChatbotSolutions } from '../../components/sections/ChatbotSolutions';
import ProcessAutomations from '../../components/sections/ProcessAutomations';
import Audience from '../../components/sections/Audience';
import BusinessImpact from '../../components/sections/BusinessImpact';
import HomeFinalCTA from '../../components/sections/HomeFinalCTA';
import AboutUs from '../../components/sections/AboutUs';
import {
  businessStats as stats,
  impactTestimonials
} from '../../data/homeSections';

const HomePage: React.FC = () => {
  const chatbotRef = useRef<HTMLDivElement>(null);

  const scrollToChatbot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fourChatbotSolutions = [
    {
      titleTop: "Conversion Machine",
      titleBottom: "(Lead + Booking)",
      description: "Auto-qualify leads in-chat, then book sessions instantly.",
      icon: "UserCheck",
      timeline: "7–12 days",
      niches: ["Fitness Coaches", "Solo Therapists", "Consultants"],
      features: [
        "Cuts sales cycle to minutes",
        "Zero form abandonment",
        "Immediate revenue capture"
      ]
    },
    {
      titleTop: "Retention Engine",
      titleBottom: "(Booking + Performance)",
      description: "Schedule sessions and keep clients engaged with check-ins.",
      icon: "CalendarCheck2",
      timeline: "8–15 days",
      niches: ["Wellness Clinics", "Program Coaches", "Studios"],
      features: [
        "Reduces no-shows by 30%+",
        "Boosts program completion",
        "Automated post-session follow-up"
      ]
    },
    {
      titleTop: "Funnel Warm-Up Bot",
      titleBottom: "(Lead + Performance)",
      description: "Qualify prospects then nurture with progress nudges.",
      icon: "Activity",
      timeline: "6–10 days",
      niches: ["Challenge Leaders", "Mindset Coaches", "Nutritionists"],
      features: [
        "Warms leads before pitch",
        "Increases trust & engagement",
        "Higher show-up & conversion rates"
      ]
    },
    {
      titleTop: "Scalable Coaching OS",
      titleBottom: "(Lead + Booking + Performance)",
      description: "End-to-end AI system: capture, schedule, coach, retain.",
      icon: "Bot",
      timeline: "15–45 days",
      niches: ["High-Ticket Brands", "Franchises", "Hybrid Programs"],
      features: [
        "Fully autonomous client journey",
        "Multi-channel touchpoints",
        "Deep analytics & upsell paths"
      ]
    }
  ];

  const nichesData = [
    {
      id: "01",
      title: "Fitness Coaches",
      icon: "Dumbbell",
      bullets: [
        "Automated client intake",
        "Seamless booking & payments",
        "Personalized workout delivery",
        "Built-in follow-up reminders"
      ],
      pitch: "Scale your coaching business without the admin grind.",
      bestBot: "Lead Capture Bot"
    },
    {
      id: "02",
      title: "Personal Trainers",
      icon: "UserCog",
      bullets: [
        "24/7 lead qualification",
        "Effortless session scheduling",
        "Client progress tracking",
        "Goal-based follow-up logic"
      ],
      pitch: "Fill your schedule and focus on client results.",
      bestBot: "Lead Capture Bot"
    },
    {
      id: "03",
      title: "Yoga Instructors",
      icon: "User",
      bullets: [
        "Class & workshop bookings",
        "Automated waitlists & reminders",
        "Membership management tools",
        "Drop-in class handling"
      ],
      pitch: "Grow your community and streamline class administration.",
      bestBot: "Booking Assistant"
    },
    {
      id: "04",
      title: "Health & Mindset Coaches",
      icon: "Activity",
      bullets: [
        "Client goal tracking",
        "Automated coaching flows",
        "Self-assessment logic",
        "Content & lesson delivery"
      ],
      pitch: "Deliver consistent value without manual follow-ups.",
      bestBot: "Lead Capture Bot"
    },
    {
      id: "05",
      title: "Nutritionists & Diet Coaches",
      icon: "Utensils",
      bullets: [
        "Meal plan delivery",
        "Client onboarding flows",
        "Progress logging",
        "Automated check-ins"
      ],
      pitch: "Automate intake, compliance, and program delivery.",
      bestBot: "Custom AI Bot (Lead + Performance)"
    },
    {
      id: "06",
      title: "Gyms & Fitness Centers",
      icon: "Building",
      bullets: [
        "Membership signup flow",
        "Class booking automation",
        "Referral logic",
        "Trial & promo lead capture"
      ],
      pitch: "Turn web traffic into members, 24/7.",
      bestBot: "Lead Capture Bot"
    },
    {
      id: "07",
      title: "Wellness Studios",
      icon: "HeartPulse",
      bullets: [
        "Multi-service booking system",
        "Workshop & event promotion",
        "Client feedback collection",
        "Waitlist automation"
      ],
      pitch: "Manage diverse wellness offerings with ease.",
      bestBot: "Lead Capture Bot"
    },
    {
      id: "08",
      title: "Solo Therapists",
      icon: "MessageCircle",
      bullets: [
        "Confidential client intake forms",
        "Secure appointment scheduling",
        "Automated session reminders",
        "Outcome tracking logic"
      ],
      pitch: "Focus on your clients, not administrative tasks.",
      bestBot: "Booking Assistant"
    },
    {
      id: "09",
      title: "Franchise Studios & Chains",
      icon: "Building2",
      bullets: [
        "Standardized AI for all locations",
        "Centralized analytics & reporting",
        "Brand-safe messaging flows",
        "Lead routing to local teams"
      ],
      pitch: "Scale your franchise operations with unified AI solutions.",
      bestBot: "Custom AI Bot (Full Suite)"
    }
  ];

  return (
    <>
      <Hero
        chatbotRef={chatbotRef}
        scrollToChatbot={scrollToChatbot}
      />

      <HowItWorks />

      <ChatbotSolutions
        title="AI CHATBOTS"
        subtitle="3 Elite Chatbots. Built to Book, Support, and Scale."
        solutions={fourChatbotSolutions}
        onChatClick={scrollToChatbot}
      />

      <ProcessAutomations
        title="Add Firepower. Automate Everything."
        subtitle="Powerful add-ons that bolt directly into your Van Borg system. Add power. Scale fast."
        scrollToChatbot={scrollToChatbot}
      />

      <Audience
        title="PERFECT CLIENTS"
        subtitle="These are the 9 core niches we build AI systems for — each one battle-tested with real automations and results."
        infoText="Each niche has a best starting bot. These bots give you fast results — and can later be upgraded into a fully custom AI system as your operations grow."
        audiences={nichesData}
        outroText="These are the niches we specialize in — but we also take on custom use-cases. Use the button below or ask the chatbot to see if your business qualifies."
        scrollToChatbot={scrollToChatbot}
      />

      <BusinessImpact
        title="Real Business Impact"
        subtitle="See how our AI solutions are transforming businesses like yours"
        stats={stats}
        testimonials={impactTestimonials}
      />

      <AboutUs
        title="Who Is Van Borg?"
        subtitle="Meet the team behind the AI revolution. We're on a mission to democratize AI for businesses of all sizes."
      />

      <HomeFinalCTA onClick={scrollToChatbot} />
      <FloatingChatbotButton onClick={scrollToChatbot} />
    </>
  );
};

export default HomePage;
