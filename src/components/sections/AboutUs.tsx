import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';
import { Lightbulb, Code, Globe, Award } from 'lucide-react';

interface AboutUsProps {
  title: string;
  subtitle?: string;
  withAnimation?: boolean;
  className?: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  title,
  subtitle,
  withAnimation = true,
  className,
}) => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Enterprise machine learning architect. Ensures every build is scalable, stable, and lightning-fast.",
      imageSrc: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "James Wilson",
      role: "Head of Client Success",
      bio: "100+ client automation rollouts. Focused on making every system deliver measurable ROI from day one.",
      imageSrc: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Arthur Morgan",
      role: "COO",
      bio: "Top-tier automation engineer and AI dev with 15+ years of experience building scalable systems.",
      imageSrc: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb size={24} />,
      title: "AI Chatbots That Run Ops",
      description: "Four core tiers — Each built to convert, book, sync, and follow up."
    },
    {
      icon: <Code size={24} />,
      title: "Strategic Licensing Over Ownership",
      description: "Clients license Van Borg systems. Flows, logic, and infrastructure stay protected."
    },
    {
      icon: <Globe size={24} />,
      title: "Modular Growth, Not Bloat",
      description: "Add CRM sync, WhatsApp booking and analytics — when you need it, not before."
    },
    {
      icon: <Award size={24} />,
      title: "Speed That Delivers",
      description: "Launch fast. Core bots go live in 2–14 days. Full builds in under 6 weeks."
    }
  ];

  return (
    <section
      className={cn(
        'py-20 relative overflow-hidden',
        'bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary',
        className
      )}
    >
      {/* Background effects - similar to other sections but unique */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge variant="primary" size="lg">ABOUT US</Badge>
            </motion.div>
          ) : (
            <div className="inline-block mb-4">
              <Badge variant="primary" size="lg">ABOUT US</Badge>
            </div>
          )}

          {withAnimation ? (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              {title}
            </motion.h2>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
              {title}
            </h2>
          )}

          {subtitle && (
            withAnimation ? (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body"
              >
                {subtitle}
              </motion.p>
            ) : (
              <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
                {subtitle}
              </p>
            )
          )}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          {withAnimation ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-8 relative overflow-hidden bg-white dark:bg-white/5 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_20px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_20px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_30px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_30px_rgba(0,175,185,0.25)] transition-all duration-300" intensity="heavy">
                <h3 className="text-3xl font-bold mb-6 text-black dark:text-dark-text-primary font-title text-center">
                  Our Story
                </h3>
                <div className="text-light-text-secondary dark:text-dark-text-secondary space-y-4 font-body">
                  <div className="mb-8">
                    <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent">
                      Van Borg exists to kill the SaaS trap. 
                    </p>
                  </div>
                  <p className="flex items-start space-x-2">
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary flex-shrink-0"></span>
                    <span>
                    We don’t sell flows. We license high-performance chatbot infrastructure — deployed fast, managed fully, and enforced under strict IP terms.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary flex-shrink-0"></span>
                    <span>
                    Our builds automate the workflows most businesses struggle with: intake, nurturing, booking, CRM syncing, loyalty, and reporting.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary flex-shrink-0"></span>
                    <span>
                    Now active in 12 countries and over 200 businesses, Van Borg bots power real operations across solo brands, clinics, and enterprise networks.
                    </span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary flex-shrink-0"></span>
                    <span>
                    Founded in 2025 by automation engineers, Van Borg was created to replace bloated platforms and broken chat tools with real automation systems that deliver outcomes.
                    </span>
                  </p>
                </div>
                {/* Decorative gradient blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-light-brand-primary/10 via-light-brand-secondary/5 to-transparent dark:from-dark-brand-primary/10 dark:via-dark-brand-secondary/5 dark:to-transparent rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-light-brand-secondary/10 via-light-brand-primary/5 to-transparent dark:from-dark-brand-secondary/10 dark:via-dark-brand-primary/5 dark:to-transparent rounded-full blur-[80px] -z-10"></div>
              </GlassCard>
            </motion.div>
          ) : (
            <GlassCard className="p-8 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_20px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_20px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_30px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_30px_rgba(0,175,185,0.25)] transition-all duration-300" intensity="medium">
              <h3 className="text-3xl font-bold mb-6 text-black dark:text-dark-text-primary font-title text-center relative inline-block">
                <span className="absolute -top-2 -left-4 -right-4 -bottom-1 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
                Our Story
              </h3>
              <div className="text-light-text-secondary dark:text-dark-text-secondary space-y-4 font-body">
                <p>Van Borg exists to kill the SaaS trap.</p>
                <p>
                  We build custom AI systems that automate the hard parts of running a business — lead capture, client onboarding, scheduling, follow-ups — all without locking you into monthly platforms.
                </p>
                <p>
                  By default, we manage your system for you — updates, automations, integrations. But if you want full control? Pay once, and the entire thing is yours. Code, backend, everything.
                </p>
                <p>
                  Launched in 2025, Van Borg was founded by automation engineers who were done watching small businesses burn money on bloated software.
                </p>
                <p>
                  Since then, we've deployed AI systems across 200+ businesses in 12 countries — all built for speed, performance, and permanent ownership.
                </p>
              </div>
            </GlassCard>
          )}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-light-text-primary dark:text-dark-text-primary font-title text-center relative inline-block">
            <span className="absolute -top-1 -left-2 -right-2 -bottom-0 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              withAnimation ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <GlassCard 
                    className="p-6 h-full flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 bg-white dark:bg-white/5 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.1)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.1)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.2)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.2)]" 
                    intensity="heavy" 
                    hoverEffect
                  >
                    <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-light-brand-primary/20 to-light-brand-secondary/20 dark:from-dark-brand-primary/20 dark:to-dark-brand-secondary/20 shadow-lg text-light-brand-primary dark:text-dark-brand-primary border border-light-brand-primary/30 dark:border-dark-brand-primary/30">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent font-title">{value.title}</h4>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ) : (
                <GlassCard key={index} className="p-6 h-full flex flex-col items-center text-center border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.1)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.1)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.2)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.2)]" intensity="light" hoverEffect>
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 text-light-brand-primary dark:text-dark-brand-primary">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary font-title">{value.title}</h4>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">{value.description}</p>
                </GlassCard>
              )
            ))}
          </div>
        </div>

        {/* Meet The Team */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-light-text-primary dark:text-dark-text-primary font-title text-center relative inline-block">
            <span className="absolute -top-1 -left-2 -right-2 -bottom-0 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-sm -z-10"></span>
            Meet The Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              withAnimation ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <GlassCard 
                    className="overflow-hidden flex flex-col h-full transform transition-all duration-500 hover:scale-105 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.25)]" 
                    intensity="heavy"
                  >
                    <div className="h-[350px] overflow-hidden">
                      <img 
                        src={member.imageSrc} 
                        alt={member.name} 
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-700 hover:scale-110",
                          index === 0 && "object-[center_15%]", // Alex
                          index === 1 && "object-[center_30%]", // Sarah
                          index === 2 && "object-[center_20%]"  // James
                        )}
                      />
                    </div>
                    <div className="p-6 flex-grow bg-gradient-to-b from-transparent via-light-bg-primary/50 to-light-bg-primary dark:via-dark-bg-primary/50 dark:to-dark-bg-primary">
                      <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent font-title">{member.name}</h4>
                      <p className="text-light-brand-primary dark:text-dark-brand-primary mb-3 text-sm font-bold uppercase tracking-wider font-body">{member.role}</p>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">{member.bio}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ) : (
                <GlassCard key={index} className="overflow-hidden flex flex-col h-full border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-[0_4px_15px_rgba(220,38,38,0.15)] dark:shadow-[0_4px_15px_rgba(0,175,185,0.15)] hover:border-light-brand-primary/30 dark:hover:border-dark-brand-primary/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.25)] dark:hover:shadow-[0_4px_25px_rgba(0,175,185,0.25)]" intensity="medium">
                  <div className="h-[350px] overflow-hidden">
                    <img 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className={cn(
                        "w-full h-full object-cover",
                        index === 0 && "object-[center_15%]", // Alex
                        index === 1 && "object-[center_30%]", // Sarah
                        index === 2 && "object-[center_20%]"  // James
                      )}
                    />
                  </div>
                  <div className="p-6 flex-grow bg-gradient-to-b from-transparent via-light-bg-primary/50 to-light-bg-primary dark:via-dark-bg-primary/50 dark:to-dark-bg-primary">
                    <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent font-title">{member.name}</h4>
                    <p className="text-light-brand-primary dark:text-dark-brand-primary mb-3 text-sm font-bold uppercase tracking-wider font-body">{member.role}</p>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary font-body">{member.bio}</p>
                  </div>
                </GlassCard>
              )
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;