import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/ui/Container';
import GlassCard from '../../../components/ui/GlassCard';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { ArrowUp, Clock, DollarSign, Plus, Bot, Calendar, Database, Send, Heart, BarChart2, MessageCircle, Shield, Zap, Settings, Check, ArrowRight } from 'lucide-react';

const bots = [
  {
    name: '01. Lead Capture System',
    price: '€1,200–€3,500',
    time: '3–9 Days',
    audience: 'Fitness Coaches, Yoga Instructors, Health & Mindset Coaches, Nutritionists & Diet Coaches, Therapists, Gyms & Studios (solo or small teams)',
    what: 'Replaces static forms with 24/7 real-time lead conversations. Captures names, goals, pain points, and contact info — then pushes qualified data into your CRM or inbox. Boosts conversion and trust with intelligent, guided chat flows.',
    how: [
      'Visitor arrives on site or landing page',
      'Bot triggers based on embed, click, or pop-up',
      'Asks key questions (goal, name, contact)',
      'Captures and qualifies lead data',
      'Pushes data to CRM, email, or sheet'
    ],
    addOns: [
      { name: 'CRM Sync Integration', price: '€800–€1,200', icon: <Database size={14} />, impact: 'Pushes lead data into HubSpot, Supabase, Notion, etc.' },
      { name: 'Follow-Up Emails/SMS', price: '€500–€1,000', icon: <Send size={14} />, impact: 'Re-engages leads who don\'t book or reply' },
      { name: 'Calendar & Booking', price: '€1,000–€1,500', icon: <Calendar size={14} />, impact: 'Embeds a live calendar directly into the bot' },
      { name: 'Lead Quiz + Magnet', price: '€500–€1,000', icon: <Send size={14} />, impact: 'Captures quiz data and delivers lead magnet PDF' },
      { name: 'WhatsApp/DM Nudges', price: '€400–€800', icon: <MessageCircle size={14} />, impact: 'Captures or re-engages leads via WhatsApp, DMs' },
      { name: 'GPT FAQ Assistant', price: '€600–€1,200', icon: <Bot size={14} />, impact: 'Answers user queries via GPT or knowledge base' },
      { name: 'Lead Flow Optimizer', price: '€900–€1,400', icon: <Settings size={14} />, impact: 'Scoring, nurture, reminders, upsells, rebooking' }
    ],
    features: [
      'Smart FAQ chat (20+ niche questions)',
      'Dynamic lead form with custom fields',
      'Embedded booking or redirect links',
      'Real-time notifications per lead',
      'Multilingual support (add-on ready)'
    ],
        benefits: [
      'Captures & qualifies leads 24/7',
      'Replaces forms with intelligent flows',
      'Pushes leads directly to your CRM',
      'Boosts trust and conversion instantly',
      'Perfect for ads, landing pages, and solo ops'
    ],
    useCase: 'A fitness coach\'s site bot captures 12 new leads weekly — hands-free — while she trains clients.'
  },
  {
    name: '02. Booking Assistant Bot',
    price: '€2,000–€4,500',
    time: '4–12 Days',
    audience: 'Personal Trainers, Nutritionists, Solo Therapists, Wellness Clinics, Gyms & Yoga Studios, Franchises / Multi-staff Studios',
    what: 'AI-powered scheduling bot that handles bookings, reschedules, cancellations, and reminders. It syncs with your calendar (Google, Calendly, or custom), detects intent, confirms availability, and ensures no session is ever missed — no human needed.',
    how: [
      'User lands on your site or landing page',
      'Bot detects booking intent and offers to schedule',
      'Shows available slots via embedded calendar',
      'Captures contact info, service type, and preferred time',
      'Pushes booking to connected calendar instantly'
    ],
    addOns: [
      { name: 'CRM Sync Integration', price: '€800–€1,200', icon: <Database size={14} />, impact: 'Pushes booking data into your CRM system' },
      { name: 'Auto Payment Trigger', price: '€700–€1,400', icon: <Send size={14} />, impact: 'Automatically triggers payment when booking is confirmed' },
      { name: 'Post-Booking Upsell Flow', price: '€600–€1,200', icon: <ArrowUp size={14} />, impact: 'Offers upsells after booking is confirmed' },
      { name: 'Attendance & Conflict Handler', price: '€500–€1,000', icon: <Calendar size={14} />, impact: 'Handles attendance tracking and scheduling conflicts' },
      { name: 'Lead Flow Optimizer', price: '€900–€1,400', icon: <Settings size={14} />, impact: 'Optimizes booking flow for maximum conversions' },
      { name: 'Instant Booking + Calendar Sync', price: '€1,000–€1,500', icon: <Zap size={14} />, impact: 'Syncs bookings instantly with your calendar system' }
    ],
    features: [
      'Real-time booking via embedded calendar',
      'Handles reschedules, cancellations, reminders',
      'Pre-session reminders by email/SMS/DM',
      'Time zone auto-detection',
      'Multi-staff logic for larger teams'
    ],
    benefits: [
      'Instant session booking with zero admin',
      'Eliminates calendar back-and-forth',
      'Avoids double-bookings or missed sessions',
      'Sends reminders to reduce no-shows',
      'Scales from solo to full-team setups'
    ],
    useCase: 'A personal trainer uses the bot to automate her entire booking flow — saving 10 hours per week while keeping her schedule full.'
  },
  {
    name: '03. Performance Support Bot',
    price: '€1,250–€4,000',
    time: '4–15 Days',
    audience: 'Mindset Coaches, Fitness Coaches, Personal Trainers, Therapists, Group Coaching Programs, 30-/60-/90-Day Challenge Leaders',
    what: '24/7 automated check-ins and motivational support system. It keeps clients engaged between sessions by logging progress, reacting to input, triggering nudges, and reinforcing long-term goals — all without manual effort.',
    how: [
      'Bot triggers check-in (daily/weekly/inactivity)',
      'Asks client for mood, wins, obstacles',
      'Responds with affirmations, tips, or next steps',
      'Logs check-in data to CRM or habit tracker',
      'Optionally triggers nudges, rewards, or plan prompts'
    ],
    addOns: [
      { name: 'WhatsApp/DM Nudges', price: '€400–€900', icon: <MessageCircle size={14} />, impact: 'Sends nudges and reminders via WhatsApp or DMs' },
      { name: 'AI Response Coaching', price: '€600–€1,300', icon: <Bot size={14} />, impact: 'Uses AI to provide tailored coaching responses' },
      { name: 'Weekly Motivation Loop', price: '€500–€1,000', icon: <ArrowUp size={14} />, impact: 'Creates weekly motivation cycles to keep clients engaged' },
      { name: 'Goal Milestone Tracker', price: '€700–€1,400', icon: <Check size={14} />, impact: 'Tracks and celebrates client progress toward goals' },
      { name: 'Goal-Based Plan Generator', price: '€800–€1,500', icon: <Settings size={14} />, impact: 'Automatically generates plans based on client goals' }
    ],
    features: [
      'Scheduled check-in logic (daily/weekly)',
      'Habit & mood tracking with progress logging',
      'Basic tone detection for real-time response',
      'Multi-channel support (chat + WhatsApp/email)',
      'Emotionally safe language framework'
    ],
    benefits: [
      'Drives long-term retention through check-ins',
      'Automates support between live sessions',
      'Increases client accountability and motivation',
      'Reduces coach workload while boosting value',
      'Supports scalable 1:many program delivery'
    ],
    useCase: 'A challenge coach uses the bot to keep 120+ clients engaged daily — without sending a single message manually.'
  },
  {
    name: '04. Custom AI System (Full-Stack)',
    price: '€5,000–€20,000+',
    time: '10–60 Days',
    audience: 'Premium Fitness Coaches, Performance Consultants, Holistic Health Coaches, Elite Wellness Studios, Online Scalable Programs, Group + 1:1 Hybrid Coaching Models',
    what: 'End-to-end AI system that merges lead capture, booking, and retention flows into one fully customized, branded automation engine. Designed for high-ticket or high-scale businesses that need full operational support without manual input.',
    how: [
      'We scope needs and select blueprint(s)',
      'Customize flows for your brand/audience',
      'Build integration stack (Stripe, CRM, etc.)',
      'Deploy on preferred platforms',
      'Train + test full system flow-by-flow'
    ],
    addOns: [
      { name: 'Lead + Booking → Conversion', price: 'Custom', icon: <Zap size={14} />, impact: 'Shortens sales cycle to under 5 minutes' },
      { name: 'Booking + Performance → Retention', price: 'Custom', icon: <Heart size={14} />, impact: 'Maximizes retention in program-based models' },
      { name: 'Lead + Performance → Funnel Warm-Up', price: 'Custom', icon: <ArrowUp size={14} />, impact: 'Perfect for intro funnels with high-ticket backend' },
      { name: 'Full-Stack Merge → Coaching OS', price: 'Custom', icon: <Settings size={14} />, impact: 'Done-for-you backend for coaching and consulting ops' }
    ],
    features: [
      'Custom-branded lead, booking, and support flows',
      'Handles intake, payments, scheduling, and retention',
      'Works across multiple platforms and channels',
      'Supports multi-language, multi-staff, and branching logic',
      'Operates like an AI operations team at scale'
    ],
    benefits: [
      'Unifies sales, service, and support in one bot',
      'No need for VAs or admin staff',
      'Triggers custom automations per user type',
      'Integrates with Stripe, CRM, calendar, email, WhatsApp',
      'Saves 15–25+ hours per week in ops and delivery'
    ],
    useCase: 'A high-ticket coaching brand uses a full-stack AI bot to qualify, book, onboard, and retain 50+ clients/month — all without human involvement.'
  }
];

export default function BotPackagesSection() {
  return (
    <section className="py-20 pt-28 relative overflow-hidden bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary" id="ai-systems">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="text-center mb-16">
          <div className="mb-4">
            <Badge size="lg" variant="primary">AI SYSTEMS</Badge>
          </div>
          <h2 className="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
            Built to Capture. Designed to Scale.
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mt-4 max-w-3xl mx-auto font-body">
            From solo coaches to multi-location clinics — each system is crafted to match your speed, budget, and business model.
          </p> 
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {bots.map((bot, index) => (
            <motion.div
              key={bot.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                className="p-0 h-full border-3 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 transition-all duration-300 hover:shadow-[0_4px_0_0_rgba(220,38,38,0.3),0_0_30px_rgba(220,38,38,0.3)] dark:hover:shadow-[0_4px_0_0_rgba(0,175,185,0.3),0_0_50px_rgba(0,175,185,0.3)]"
                intensity="heavy"
              >
                {/* Header section with gradient */}
                <div className="p-6 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">{bot.name}</h3>
                    <div className="text-sm font-semibold mt-1 text-light-text-secondary dark:text-dark-text-secondary font-title px-3 py-1 bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 rounded-lg inline-block">
                      <span className="text-light-brand-primary dark:text-dark-brand-primary font-bold mr-1">Perfect For:</span> {bot.audience}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center ml-4">
                    <div className="rounded-full bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-3 w-16 h-16 flex items-center justify-center border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                      <Bot size={36} className="text-light-brand-primary dark:text-dark-brand-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 px-6 py-3 bg-light-brand-primary/5 dark:bg-dark-brand-primary/5">
                  <div className="inline-flex items-center text-sm font-semibold text-light-brand-primary dark:text-dark-brand-primary font-body px-3 py-1.5 rounded-lg bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 border border-light-brand-primary/20 dark:border-dark-brand-primary/20">
                    <Clock size={16} className="mr-1.5" />
                    {bot.time}
                  </div>
                  <div className="inline-flex items-center text-base font-bold text-light-brand-primary dark:text-dark-brand-primary font-body px-4 py-1.5 rounded-lg bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 border border-light-brand-primary/20 dark:border-dark-brand-primary/20">
                    {bot.price}
                  </div>
                </div>

                <div className="p-6">
                  {/* What It Does */}
                  <div className="mb-5 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-4 rounded-lg border-l-4 border-light-brand-primary dark:border-dark-brand-primary">
                    <h4 className="font-semibold text-base mb-1 text-light-text-primary dark:text-dark-text-primary font-title">What It Does</h4>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">
                      {bot.what}
                    </p>
                  </div>
                  
                  {/* How It Works & Add-Ons (stacked vertically) */}
                  <div className="flex flex-col gap-6 mb-5">
                    <div>
                      <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title inline-flex items-center">
                        <span className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 rounded-md mr-2">
                          <Settings size={16} className="text-light-brand-primary dark:text-dark-brand-primary" />
                        </span>
                        How It Works
                      </h4>
                      <ul className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary font-body pl-2">
                        {bot.how.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 p-1 mr-2 mt-0.5 flex-shrink-0 w-6 h-6 flex items-center justify-center border border-light-brand-primary/30 dark:border-dark-brand-primary/30 text-light-brand-primary dark:text-dark-brand-primary font-bold">
                              {i+1}
                            </div>
                            <span className="pt-1">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-base mb-3 text-light-text-primary dark:text-dark-text-primary font-title inline-flex items-center">
                        <span className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-1 rounded-md mr-2">
                          <Plus size={16} className="text-light-brand-primary dark:text-dark-brand-primary" />
                        </span>
                        Recommended Add-Ons
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {bot.addOns.map((addon, i) => (
                          <div key={i} className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary font-body border border-light-text-secondary/20 dark:border-dark-text-secondary/20 hover:border-light-brand-primary/50 dark:hover:border-dark-brand-primary/50 transition-all duration-300 hover:bg-light-brand-primary/5 dark:hover:bg-dark-brand-primary/5">
                            <div className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-1 rounded-full">
                              {addon.icon}
                            </div>
                            <span>{addon.name}</span>
                            <span className="text-light-brand-primary dark:text-dark-brand-primary text-xs font-semibold ml-auto">{addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features and Benefits (Side-by-side) */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30 rounded-lg p-3 hover:border-light-brand-primary/50 dark:hover:border-dark-brand-primary/50 transition-all duration-300">
                      <h4 className="font-semibold text-sm mb-2 text-light-text-primary dark:text-dark-text-primary font-title">
                        Key Features:
                      </h4>
                      <ul className="space-y-1 text-light-text-secondary dark:text-dark-text-secondary font-body text-sm">
                        {bot.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-0.5 mr-1.5 mt-0.5 flex-shrink-0">
                              <Check size={10} className="text-light-brand-primary dark:text-dark-brand-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30 rounded-lg p-3 hover:border-light-brand-primary/50 dark:hover:border-dark-brand-primary/50 transition-all duration-300">
                      <h4 className="font-semibold text-sm mb-2 text-light-text-primary dark:text-dark-text-primary font-title">
                        Benefits:
                      </h4>
                      <ul className="space-y-1 text-light-text-secondary dark:text-dark-text-secondary font-body text-sm">
                        {bot.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="rounded-full bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 p-0.5 mr-1.5 mt-0.5 flex-shrink-0">
                              <ArrowRight size={10} className="text-light-brand-secondary dark:text-dark-brand-secondary" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Use Case (with accent styling) */}
                  <div className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 p-3 rounded-lg mt-4 border-l-4 border-light-brand-primary dark:border-dark-brand-primary relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-light-brand-primary/5 dark:bg-dark-brand-primary/5 rounded-full"></div>
                    <h4 className="font-semibold text-xs mb-1 text-light-brand-primary dark:text-dark-brand-primary font-title uppercase tracking-wider">
                      Use Case
                    </h4>
                    <p className="text-sm italic text-light-text-secondary dark:text-dark-text-secondary font-body relative z-10">
                      "{bot.useCase}"
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ring-4 ring-light-brand-primary/30 dark:ring-dark-brand-primary/30 hover:border-light-brand-primary hover:ring-light-brand-primary dark:hover:border-dark-brand-primary dark:hover:ring-dark-brand-primary transition-all duration-300 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/5 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/5"
          >
            Talk to the Van Borg Assistant
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-body font-medium">
            <strong>Built once. Licensed for life. Fully managed. Your bot, your way.</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}