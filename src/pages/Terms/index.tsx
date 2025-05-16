import React from 'react';
import { Container } from '../../components/ui/Container';
import GlassCard from '../../components/ui/GlassCard';
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

const Terms: React.FC = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg-secondary via-light-bg-secondary to-light-bg-primary dark:from-dark-bg-secondary dark:via-dark-bg-secondary dark:to-dark-bg-primary" />
      
      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 mb-8" intensity="medium">
            <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
              <h1 className="text-2xl font-bold mb-6 text-light-text-primary dark:text-dark-text-primary font-title">
                Van Borg Limited – Terms of Service
              </h1>
              <p>
                Effective Date: 04 May 2025<br />
                Company No: 16172283<br />
                Incorporated: 09 January 2025<br />
                Managing Director: Nicolaas P. Sterenborg<br />
                Registered Office: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom<br />
                Contact: Info@vanborglimited.com<br />
                Website: www.vanborglimited.com
              </p>
            </div>
          </GlassCard>
          
          <div className="space-y-8">
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Terms;