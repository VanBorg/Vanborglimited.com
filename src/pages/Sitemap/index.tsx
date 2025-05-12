import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ShoppingBag, Database, Calendar, MessageCircle, Heart, BarChart2, Shield, Zap, Mail, FileText, Map, DivideIcon as LucideIcon, Bot, Globe, Users, Brain, Headphones } from 'lucide-react';

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
  const siteStructure: SiteSection[] = [
    {
      title: 'Main Pages',
      icon: <Home size={20} />,
      links: [
        { 
          name: 'Home', 
          path: '/',
          description: 'Our main landing page with information about our AI chatbot and automation services' 
        },
        { 
          name: 'Pricing and Services', 
          path: '/services',
          description: 'Detailed information about our service packages, pricing, and business automations'
        }
      ]
    },
    {
      title: 'AI Chatbot Solutions',
      icon: <Bot size={20} />,
      links: [
        { 
          name: 'Lead Capture System', 
          path: '/services#packages',
          description: 'Smart FAQ answering, lead form capture, and booking links'
        },
        { 
          name: 'Client Booking Assistant', 
          path: '/services#packages',
          description: 'Complete booking automation with calendar integration, CRM sync, and follow-up sequences'
        },
        { 
          name: 'Full-Service Chat Automation', 
          path: '/services#packages',
          description: 'Multi-channel AI system with integrated loyalty programs and advanced analytics'
        },
        { 
          name: 'Custom AI Solution', 
          path: '/services#packages',
          description: 'Enterprise-grade AI with white-label UI, deep CRM integration, and custom automation flows'
        }
      ]
    },
    {
      title: 'Business Automations',
      icon: <Database size={20} />,
      links: [
        { 
          name: 'Follow-Up Emails/SMS', 
          path: '/services',
          description: 'Converts abandoned leads who filled forms but didn\'t book'
        },
        { 
          name: 'Abandoned Chat Recovery', 
          path: '/services',
          description: 'Reclaims leads lost mid-chat with a personalized follow-up'
        },
        { 
          name: 'CRM Sync Integration', 
          path: '/services',
          description: 'Instantly pushes captured data to your CRM'
        },
        { 
          name: 'Calendar & Booking System', 
          path: '/services',
          description: 'Lets users schedule directly inside the bot'
        },
        { 
          name: 'WhatsApp Integration', 
          path: '/services',
          description: 'Extends bot logic to WhatsApp for mobile-first experience'
        },
        { 
          name: 'Loyalty & Reward Flows', 
          path: '/services',
          description: 'Automates upsells, retention, and recurring bookings'
        },
        { 
          name: 'Analytics Dashboard Setup', 
          path: '/services',
          description: 'Gives real-time visibility into your bot\'s performance'
        }
      ]
    },
    {
      title: 'Target Industries',
      icon: <Globe size={20} />,
      links: [
        { 
          name: 'Fitness Coaches', 
          path: '/services',
          description: 'AI systems for personal trainers and fitness studios'
        },
        { 
          name: 'Health & Mindset Coaches', 
          path: '/services',
          description: 'Solutions for wellness professionals and life coaches'
        },
        { 
          name: 'Nutritionists & Diet Coaches', 
          path: '/services',
          description: 'Specialized systems for nutrition practices'
        },
        { 
          name: 'Therapy Clinics', 
          path: '/services',
          description: 'Multi-staff scheduling and patient management'
        },
        { 
          name: 'Medical & Alternative Clinics', 
          path: '/services',
          description: 'Compliant solutions for healthcare providers'
        },
        { 
          name: 'Gyms & Fitness Centers', 
          path: '/services',
          description: 'Member management and lead capture'
        }
      ]
    },
    {
      title: 'Maintenance Plans',
      icon: <Shield size={20} />,
      links: [
        { 
          name: 'Essential Maintenance', 
          path: '/services',
          description: 'Keep your AI systems running smoothly with regular updates and basic support'
        },
        { 
          name: 'Proactive Optimization', 
          path: '/services',
          description: 'Maximize performance with proactive optimization and advanced support'
        }
      ]
    },
    {
      title: 'Resources & Support',
      icon: <Headphones size={20} />,
      links: [
        { 
          name: 'Contact Us', 
          path: '/',
          description: 'Get in touch with our team for inquiries or support'
        },
        {
          name: 'About Us',
          path: '/',
          description: 'Learn about Van Borg and our mission'
        }
      ]
    },
    {
      title: 'Legal Pages',
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-light-brand-secondary/10 dark:bg-dark-brand-secondary/10 rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      {/* Diagonal lines for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-primary dark:via-dark-brand-primary to-transparent transform rotate-[30deg] translate-y-[30vh]"></div>
        <div className="absolute bottom-0 right-0 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-light-brand-secondary dark:via-dark-brand-secondary to-transparent transform -rotate-[30deg] translate-y-[-30vh]"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <GlassCard className="p-6 h-full shadow-md border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 hover:border-light-brand-primary/40 dark:hover:border-dark-brand-primary/40 transition-all duration-300" intensity="medium">
                    <div className="flex items-center mb-4 pb-3 border-b border-light-text-secondary/10 dark:border-dark-text-secondary/10">
                      <div className="bg-light-brand-primary/10 dark:bg-dark-brand-primary/10 p-2.5 rounded-full mr-3 text-light-brand-primary dark:text-dark-brand-primary">
                        {section.icon}
                      </div>
                      <h2 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary font-title">
                        {section.title}
                      </h2>
                    </div>
                    
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
                  <Button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    variant="primary"
                    size="lg"
                    icon={<Bot size={18} />}
                  >
                    Chat with our AI Assistant
                  </Button>
                </div>
              </div>
            </GlassCard>
            
            {/* XML Sitemap Information */}
            <GlassCard className="p-8 mt-8 border-2 border-light-brand-primary/20 dark:border-dark-brand-primary/20 shadow-md" intensity="medium">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">
                  XML Sitemap for Search Engines
                </h2>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 max-w-3xl mx-auto font-body">
                  For search engines like Google, we've created an XML sitemap that follows the sitemap protocol. This technical file helps search engines discover and index all pages on our website efficiently.
                </p>
                <div className="p-4 bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 rounded-lg text-left mb-6 overflow-x-auto">
                  <pre className="text-sm text-light-text-primary dark:text-dark-text-primary">
                    {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.vanborglimited.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.vanborglimited.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.vanborglimited.com/privacy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.vanborglimited.com/terms</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.vanborglimited.com/sitemap</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>`}
                  </pre>
                </div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto font-body">
                  For production use, this XML file should be placed at <code>public/sitemap.xml</code> so it will be accessible at <code>https://www.vanborglimited.com/sitemap.xml</code>. This allows search engines to discover and better index your website content.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Sitemap;