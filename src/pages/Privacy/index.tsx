import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8';
import Section9 from './Sections/Section9';
import Section10 from './Sections/Section10';
import Section11 from './Sections/Section11';
import Section12 from './Sections/Section12';
import Section13 from './Sections/Section13';
import Section14 from './Sections/Section14';
import Section15 from './Sections/Section15';
import Section16 from './Sections/Section16';
import Section17 from './Sections/Section17';
import Section18 from './Sections/Section18';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-light-bg-primary dark:bg-dark-bg-primary" />
      
      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <Badge variant="primary" size="lg">PRIVACY POLICY</Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-light-text-secondary dark:text-dark-text-secondary"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GlassCard className="p-8 mb-8" intensity="medium">
              <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
                <p>
                  <strong>Van Borg Limited</strong><br />
                  Registered in England and Wales<br />
                  Company Number: 16172283<br />
                  Incorporated: 9 January 2025<br />
                  Registered Office: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom<br />
                  Managing Director: Nicolaas P. Sterenborg<br />
                  Contact: info@vanborglimited.com | www.vanborglimited.com
                </p>
                <hr />
                <p className="text-lg font-bold">
                  Privacy & Licensing Policy<br />
                  Effective Date: 4 May 2025
                </p>
                <hr />
                <p>
                  At Van Borg, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI chatbot and automation services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
                </p>
              </div>
            </GlassCard>
            
            <div className="space-y-6">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
              <Section9 />
              <Section10 />
              <Section11 />
              <Section12 />
              <Section13 />
              <Section14 />
              <Section15 />
              <Section16 />
              <Section17 />
              <Section18 />
            </div>
            
            <GlassCard className="p-8 mt-8" intensity="medium">
              <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
                <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">Contact Us</h2>
                <p>
                  If you have questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: info@vanborglimited.com<br />
                  Postal Address: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;