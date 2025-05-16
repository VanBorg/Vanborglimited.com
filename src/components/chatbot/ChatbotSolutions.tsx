import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SolutionCard } from './SolutionCard';
import { SolutionDetails } from './SolutionDetails';
import type { ChatbotSolution } from '../../types';

const baseBots: ChatbotSolution[] = [
  {
    title: 'Lead Capture System',
    description: 'Captures, qualifies, and routes leads through smart conversation flows — with CRM sync built-in.',
    icon: 'Bot',
    timeline: '3–5 Days',
    niches: ['Fitness Coaches', 'Therapists', 'Studios']
  },
  {
    title: 'Client Booking Assistant',
    description: 'Books sessions, handles reminders, manages reschedules — directly connected to your calendar.',
    icon: 'CalendarCheck',
    timeline: '4–7 Days',
    niches: ['Clinics', 'Coaches', 'Multi-Staff Studios']
  },
  {
    title: 'Performance Support Bot',
    description: 'Delivers automated check-ins, motivational nudges, and retention logic for programs and challenges.',
    icon: 'Activity',
    timeline: '5–10 Days',
    niches: ['Mindset Coaches', 'Challenge Leaders', 'Subscription Programs']
  }
];

const customBots: ChatbotSolution[] = [
  {
    title: 'Lead + Booking Bot',
    description: 'Capture leads and book sessions in one seamless funnel. Converts fast, works 24/7.',
    icon: 'Zap',
    timeline: '5–7 Days',
    niches: ['Fitness Studios', 'Gyms'],
    features: ['Lead segmentation + quiz', 'Live calendar sync', 'Smart reminder logic'],
    useCase: 'Ideal for direct-response brands needing conversion flow automation.'
  },
  {
    title: 'Lead + Performance Bot',
    description: 'Capture and warm leads with automated support before selling or booking.',
    icon: 'TrendingUp',
    timeline: '6–10 Days',
    niches: ['Coaches', 'Consultants'],
    features: ['Lead scoring', 'Nurture follow-ups', 'Progress tracking'],
    useCase: 'Great for coaches running low-ticket offers or long-form funnels.'
  },
  {
    title: 'Booking + Performance Bot',
    description: 'Books clients and keeps them engaged. Designed for retention-based services.',
    icon: 'Repeat',
    timeline: '8–12 Days',
    niches: ['Therapists', 'Hybrid Programs'],
    features: ['Smart scheduling', 'Weekly check-ins', 'Rebooking flow'],
    useCase: 'Perfect for high-LTV services and program-based businesses.'
  },
  {
    title: 'Full-Stack AI Bot',
    description: 'Your all-in-one AI system. Captures leads, books sessions, retains clients, and syncs data.',
    icon: 'Infinity',
    timeline: '14–30 Days',
    niches: ['Franchises', 'Agencies', 'Growth Operators'],
    features: ['All core bots merged', 'Full automation engine', 'CRM, calendar + WhatsApp integrations'],
    useCase: 'This is licensed AI infrastructure — not a template or widget. Built to run your business on autopilot.'
  }
];

export const ChatbotSolutions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = customBots[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-light-bg-primary to-light-bg-secondary dark:from-dark-bg-primary dark:to-dark-bg-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-title text-light-text-primary dark:text-dark-text-primary">
            AI Chatbots — Core & Custom Systems
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-light-text-secondary dark:text-dark-text-secondary">
            We build 3 foundational AI bots for lead capture, bookings, and retention — then merge them into powerful full-stack automation systems.
          </p>
        </div>

        {/* Top: 3 Static Bots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {baseBots.map((bot, i) => (
            <SolutionCard
              key={i}
              solution={bot}
              isActive={false}
              onClick={() => {}}
            />
          ))}
        </div>

        {/* Bottom: 4 Custom AI Bots */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {customBots.map((bot, i) => (
              <SolutionCard
                key={i}
                solution={bot}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          <div className="lg:col-span-1 sticky top-24 self-start">
            <SolutionDetails solution={active} />
          </div>
        </div>
      </Container>
    </section>
  );
};
