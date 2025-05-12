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
    price: '€1,200–€1,800',
    time: '2–4 Days',
    audience: 'Fitness Coaches, Health Coaches, Nutritionists, Solo Practitioners, Small Studios',
    what: 'Smart FAQ answering (pre-loaded with 20+ industry-specific questions), lead capture form with custom fields, embedded booking links (Calendly or direct), and instant notifications.',
    how: [
      'Greets visitor with smart intro',
      'Answers top questions (custom scripts)',
      'Collects name + email',
      'Sends booking link or notification'
    ],
    addOns: [
      { name: 'CRM Sync Integration', price: '€800–€1,200', icon: <Database size={14} />, impact: 'Pushes lead data into HubSpot, Supabase, Notion, etc.' },
      { name: 'Follow-Up Emails/SMS', price: '€500–€1,000', icon: <Send size={14} />, impact: 'Re-engages leads who don\'t book or reply' },
      { name: 'Calendar & Booking', price: '€1,000–€1,500', icon: <Calendar size={14} />, impact: 'Embeds a live calendar directly into the bot' }
    ],
    features: [
      'Smart FAQ answering (20+ industry Qs)',
      'Lead capture form with custom fields',
      'Embedded booking links (Calendly or direct)',
      'Email notifications for each lead',
      'Basic analytics dashboard'
    ],
    benefits: [
      'Captures and qualifies leads 24/7',
      'Ideal for landing pages, lead magnets, and opt-ins',
      'Automates first contact with zero human error',
      'Builds a contact list you fully own — no platform lock-in'
    ],
    useCase: 'A fitness coach\'s site bot captures 12 new leads weekly while she trains clients.'
  },
  {
    name: '02. Client Booking Assistant',
    price: '€2,000–€3,500',
    time: '5–7 Days',
    audience: 'Personal Trainers, Solo Therapists, Yoga Instructors, Wellness Studios',
    what: 'Complete booking automation with calendar integration, CRM sync, and intelligent follow-up sequences.',
    how: [
      'Chatbot answers intro Qs',
      'Offers appointment slots',
      'Books session + confirms',
      'Pushes to CRM + sends follow-up'
    ],
    addOns: [
      { name: 'Loyalty & Reward Flows', price: '€1,500–€2,000', icon: <Heart size={14} />, impact: 'Incentivizes repeat visits, renewals, and referrals' },
      { name: 'WhatsApp Integration', price: '€1,500–€2,000', icon: <MessageCircle size={14} />, impact: 'Let\'s users chat/book via mobile-first messaging' },
      { name: 'Analytics Dashboard', price: '€2,000–€3,000', icon: <BarChart2 size={14} />, impact: 'Tracks drop-offs, lead sources, booking conversions' }
    ],
    features: [
      'All features from Lead Capture System',
      'Integrated calendar booking with logic',
      'Payment link flows (Stripe, PayPal, etc.)',
      'Built-in CRM sync (Supabase, HubSpot)',
      'Automated confirmations and reminders via email/SMS'
    ],
    benefits: [
      'Automates the entire booking cycle — zero manual input needed',
      'Reduces no-shows with built-in reminders and confirmations',
      'Syncs instantly with your calendar, CRM, and payment tools',
      'Delivers a smooth, branded booking experience that clients trust'
    ],
    useCase: 'A studio cuts admin time in half after switching to this bot.'
  },
  {
    name: '03. Full-Service Chat Automation',
    price: '€4,000–€7,000',
    time: '10–14 Days',
    audience: 'Gyms, Clinics, Multi-Location Studios, High-Traffic Sites',
    what: 'An AI-powered omnichannel system that engages users across platforms, segments them in real time, delivers personalized flows, and tracks every interaction for optimization.',
    how: [
      'Engages on web, WhatsApp, or FB',
      'Segments users live',
      'Offers tailored flows + rewards',
      'Logs everything into analytics'
    ],
    addOns: [
      { name: 'Abandoned Chat Recovery', price: '€500–€800', icon: <Zap size={14} />, impact: 'Saves 5–15% of leads who dropped mid-flow' },
      { name: 'Advanced CRM Logic', price: '€800–€1,200', icon: <Database size={14} />, impact: 'Adds lead scoring, follow-up sequences, event-based segmentation' },
      { name: 'Analytics Dashboard', price: '€2,000–€3,000', icon: <BarChart2 size={14} />, impact: 'Tracks user actions across all platforms' }
    ],
    features: [
      'All features from Booking Assistant',
      'Multi-channel delivery (Web, WhatsApp, Facebook Messenger)',
      'Loyalty logic embedded directly into chat flows',
      'Segmentation for return visitors, cold leads, high-intent users',
      'Admin training, onboarding, and CMS-style control panel'
    ],
    benefits: [
      'Delivers unified conversations across all channels — web, WhatsApp, FB',
      'Identifies high-intent users and routes them to the right flows instantly',
      'Turns every chat into a data-rich lead with full tracking and segmentation',
      'Empowers staff with control panel access for live edits, promos, and insights'
    ],
    useCase: 'A chain of clinics added 17% retention using multi-channel loyalty.'
  },
  {
    name: '04. Custom AI Solution',
    price: '€8,000–€20,000+',
    time: '3–6 Weeks',
    audience: 'Franchise Chains, Medical Clinics, SaaS Brands, Multi-Brand Enterprises',
    what: 'An enterprise-grade AI system tailored to your operations — integrating departments, syncing with CRMs, and delivering white-label automation built for compliance and scale.',
    how: [
      'We scope departments + logic',
      'Integrate with CRM/ERP',
      'Design custom UX/UI',
      'Train + test in real-world flows'
    ],
    addOns: [
      { name: 'WhatsApp Integration', price: '€1,500–€2,000', icon: <MessageCircle size={14} />, impact: 'Supports mobile-first bookings, re-engagement, and comms' },
      { name: 'Analytics Dashboard', price: '€2,000–€3,000', icon: <BarChart2 size={14} />, impact: 'Multi-role dashboards for execs, admins, marketing' },
      { name: 'Loyalty & Reward Flows', price: '€1,500–€2,000', icon: <Heart size={14} />, impact: 'Custom retention, membership bonuses, milestone triggers' },
      { name: 'Advanced CRM / Full Logic Stack', price: 'Custom', icon: <Database size={14} />, impact: 'Handles internal ops, marketing flows, segmentation, enterprise sync' }
    ],
    features: [
      'Full-stack CRM, pipeline, and backend integrations',
      'Custom UI/UX (white-label) to match client brand',
      'AI-trained prompts tailored to operations',
      'Multi-language + region logic',
      'Enterprise-level security, governance, and SLA contracts'
    ],
    benefits: [
      'Built for scale, security, and cross-team collaboration',
      'Great for ops-heavy orgs needing reporting, segmentation, and total control',
      'Can power internal tools, client-facing bots, and high-conversion funnels'
    ],
    useCase: 'An enterprise replaced 3 tools with 1 Van Borg bot, saving €25K/year.'
  }
];

export default function BotPackagesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary" id="packages">
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
                className="p-0 h-full border-3 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 hover:border-4 transition-all duration-300 hover:shadow-[0_4px_0_0_rgba(220,38,38,0.3),0_0_30px_rgba(220,38,38,0.3)] dark:hover:shadow-[0_4px_0_0_rgba(0,175,185,0.3),0_0_50px_rgba(0,175,185,0.3)]"
                intensity="heavy"
              >
                {/* Header section with gradient */}
                <div className="p-6 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 bg-gradient-to-r from-light-brand-primary/10 to-light-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-dark-brand-secondary/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">{bot.name}</h3>
                    <div className="text-sm font-semibold mt-1 text-light-text-secondary dark:text-dark-text-secondary font-title px-3 py-1 bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 rounded-lg inline-block">
                      Perfect For: {bot.audience}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center ml-4">
                    <div className="rounded-full bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-3 w-16 h-16 flex items-center justify-center border-2 border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                      <Bot size={36} className="text-light-brand-primary dark:text-dark-brand-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10 px-6 py-2 bg-light-brand-primary/5 dark:bg-dark-brand-primary/5">
                  <div className="inline-flex items-center text-sm text-light-brand-primary dark:text-dark-brand-primary font-body px-3 py-1 rounded-full">
                    <Clock size={16} className="mr-1.5" />
                    {bot.time}
                  </div>
                  <div className="inline-flex items-center text-sm text-light-brand-primary dark:text-dark-brand-primary font-body px-3 py-1 rounded-full">
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
                  
                  {/* How It Works & Add-Ons (side by side) */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
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
                      <div className="flex flex-col gap-2">
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
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ y: [-2, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
              >
                <ArrowUp size={16} />
              </motion.div>
              <span>Talk to the Van Borg Assistant</span>
              <motion.div
                animate={{ y: [-2, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="bg-light-brand-primary/20 dark:bg-dark-brand-primary/20 p-2 rounded-full"
              >
                <ArrowUp size={16} />
              </motion.div>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
}