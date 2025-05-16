import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Database, Bot, FileText, Map, Shield, ChevronDown, ChevronUp } from 'lucide-react';

interface SiteSection {
  title: string;
  icon: React.ReactNode;
  links: {
    name: string;
    path: string;
    description?: string;
  }[];
}

const Sitemap: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const siteStructure: SiteSection[] = [
    {
      title: 'Main Navigation',
      icon: <Home size={20} />,
      links: [
        { 
          name: 'Home', 
          path: '/',
          description: 'AI chatbot solutions and business automation services' 
        },
        { 
          name: 'Services', 
          path: '/services',
          description: 'AI Systems, Business Automations, and Maintenance Plans'
        }
      ]
    },
    {
      title: 'AI Systems',
      icon: <Bot size={20} />,
      links: [
        { 
          name: '🤖 Lead Capture Bot', 
          path: '/services#ai-systems',
          description: 'Smart FAQ answering, lead form capture, and booking links (€250–€500)'
        },
        { 
          name: '📅 Booking Assistant', 
          path: '/services#ai-systems',
          description: 'Complete booking automation with calendar integration, CRM sync, and follow-up sequences (€500–€1,000)'
        },
        { 
          name: '🚀 Performance Support', 
          path: '/services#ai-systems',
          description: 'Multi-channel AI system with integrated loyalty programs and advanced analytics (€1,000–€2,000)'
        },
        { 
          name: '⚡ Custom AI Bot', 
          path: '/services#ai-systems',
          description: 'Enterprise-grade AI with white-label UI, deep CRM integration, and custom automation flows (€2,000+)'
        }
      ]
    },
    {
      title: 'Business Automations',
      icon: <Database size={20} />,
      links: [
        { 
          name: '🔁 CRM Sync', 
          path: '/services#automations',
          description: 'Instantly transfers user data into your CRM (€250–€500)'
        },
        { 
          name: '📧 Email Sequence Trigger', 
          path: '/services#automations',
          description: 'Automatically nurtures new leads with warm-up email sequences (€200–€400)'
        },
        { 
          name: '📄 Lead Quiz + Lead Magnet Delivery', 
          path: '/services#automations',
          description: 'Captures lead preferences and delivers personalized lead magnets (€300–€600)'
        },
        { 
          name: '💬 Platform DM + Engagement Nudges', 
          path: '/services#automations',
          description: 'Captures inbound messages and re-engages inactive users (€300–€700)'
        },
        { 
          name: '🧠 Lead Flow Optimizer', 
          path: '/services#automations',
          description: 'Combines lead scoring, nurturing, and upsell opportunities (€600–€1,000)'
        },
        { 
          name: '📚 Intelligent FAQ + GPT Q&A Assistant', 
          path: '/services#automations',
          description: 'Handles user questions using knowledge base or GPT responses (€300–€1,000)'
        },
        { 
          name: '⚡ Instant Booking + Calendar Sync', 
          path: '/services#automations',
          description: 'Lets qualified users schedule sessions in real-time (€400–€700)'
        },
        { 
          name: '💳 Auto Payment Trigger', 
          path: '/services#automations',
          description: 'Secures payment before session confirmation (€300–€700)'
        },
        { 
          name: '🧠 AI Response Coaching', 
          path: '/services#automations',
          description: 'Delivers personalized, goal-aligned coaching responses (€400–€900)'
        },
        { 
          name: '⏱️ Post-Booking Upsell Flow', 
          path: '/services#automations',
          description: 'Maximizes revenue with automated upsells (€400–€700)'
        },
        { 
          name: '⚠️ Attendance & Booking Conflict Handler', 
          path: '/services#automations',
          description: 'Prevents double bookings and handles missed sessions (€350–€700)'
        },
        { 
          name: '📆 Weekly Motivation Loop', 
          path: '/services#automations',
          description: 'Maintains user momentum with proactive check-ins (€300–€600)'
        },
        { 
          name: '🏆 Goal Milestone Tracker', 
          path: '/services#automations',
          description: 'Celebrates user progress with automated rewards (€400–€800)'
        },
        { 
          name: '🏋️ Goal-Based Plan Generator', 
          path: '/services#automations',
          description: 'Builds personalized, evolving workout or coaching plans (€700–€1,200)'
        }
      ]
    },
    {
      title: 'Maintenance Plans',
      icon: <Shield size={20} />,
      links: [
        { 
          name: '🔧 Essential Maintenance Plan', 
          path: '/services#maintenance',
          description: 'Mandatory plan covering core infrastructure, hosting, and security (€50/month)'
        },
        { 
          name: '🚀 Scalable Maintenance & Services Plan', 
          path: '/services#maintenance',
          description: 'Performance-based plan for tuning, scaling, and strategic support (€100–€1,200+/month)'
        }
      ]
    },
    {
      title: 'Legal Documents',
      icon: <FileText size={20} />,
      links: [
        { 
          name: 'Privacy Policy', 
          path: '/privacy',
          description: 'Information on how we handle your data'
        },
        { 
          name: 'Terms of Service', 
          path: '/terms',
          description: 'Rules and conditions for using our services'
        },
        {
          name: 'Sitemap',
          path: '/sitemap',
          description: 'Easy navigation of our entire website'
        }
      ]
    }
  ];

  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary" />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/30 dark:via-dark-brand-primary/30 to-transparent top-1/3"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary/20 dark:via-dark-brand-primary/20 to-transparent top-2/3"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-light-brand-primary/60 dark:bg-dark-brand-primary/40 transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[200%] h-[1px] bg-light-brand-secondary/60 dark:bg-dark-brand-secondary/40 transform -rotate-[30deg] translate-y-[-30vh]"></div>
        <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-light-brand-primary/60 dark:bg-dark-brand-primary/40 transform rotate-[15deg] translate-y-[15vh]"></div>
        <div className="absolute bottom-0 right-0 w-[200%] h-[1px] bg-light-brand-secondary/60 dark:bg-dark-brand-secondary/40 transform -rotate-[15deg] translate-y-[-15vh]"></div>
        <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-light-brand-primary/60 dark:bg-dark-brand-primary/40 transform rotate-[-30deg] translate-y-[10vh]"></div>
        <div className="absolute bottom-0 right-0 w-[200%] h-[1px] bg-light-brand-secondary/60 dark:bg-dark-brand-secondary/40 transform -rotate-[-30deg] translate-y-[-10vh]"></div>
      </div>
      
      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge variant="primary" size="lg">NAVIGATION</Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              Sitemap
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body"
            >
              Navigate through all the pages and sections of the Van Borg website to find exactly what you're looking for.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-6 mb-12">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <GlassCard className="p-6 shadow-md border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 transition-all duration-300" intensity="medium">
                    <button 
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center justify-between mb-4 pb-3 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10"
                    >
                      <div className="flex items-center">
                        <div className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-2.5 rounded-full mr-3 text-light-brand-primary dark:text-dark-brand-primary">
                          {section.icon}
                        </div>
                        <h2 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
                          {section.title}
                        </h2>
                      </div>
                      {expandedSections[section.title] ? (
                        <ChevronUp className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />
                      ) : (
                        <ChevronDown className="text-light-brand-primary dark:text-dark-brand-primary" size={24} />
                      )}
                    </button>
                    
                    {expandedSections[section.title] && (
                      <ul className="space-y-4">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex} className="group">
                            <Link 
                              to={link.path}
                              className="block p-3 rounded-lg hover:bg-light-brand-primary/10 dark:hover:bg-dark-brand-primary/10 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <ArrowRight size={16} className="mr-2 text-light-brand-primary dark:text-dark-brand-primary opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
                                <span className="font-semibold text-light-text-primary dark:text-dark-text-primary group-hover:text-light-brand-primary dark:group-hover:text-dark-brand-primary transition-colors duration-200">
                                  {link.name}
                                </span>
                              </div>
                              {link.description && (
                                <p className="mt-1 ml-6 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                                  {link.description}
                                </p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
            
            <GlassCard className="p-8 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-md" intensity="medium">
              <div className="text-center">
                <Map size={40} className="mx-auto mb-4 text-light-brand-primary dark:text-dark-brand-primary" />
                <h2 className="text-2xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
                  Need Assistance?
                </h2>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto font-body">
                  If you can't find what you're looking for or need personalized help, our AI assistant is ready to guide you. Simply click the button below to start a conversation.
                </p>
                <div className="flex justify-center">
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      variant="primary"
                      size="lg"
                      icon={<Bot size={18} />}
                    >
                      Chat with our AI Assistant
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Sitemap;