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
import Section15 from './Sections/Section15';
import Section16 from './Sections/Section16';
import Section17 from './Sections/Section17';
import Section18 from './Sections/Section18';

const Privacy: React.FC = () => {
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
                Van Borg Privacy & Licensing Policy – Summary Overview
              </h1>
              <p>
                Effective Date: 4 May 2025<br />
                Company: Van Borg Limited<br />
                Registered in England and Wales – Company No. 16172283
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
            <Section15 />
            <Section16 />
            <Section17 />
            <Section18 />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Privacy;