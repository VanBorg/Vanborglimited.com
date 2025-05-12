import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section1: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">1. Introduction</h2>
        <p>
          This Privacy & Licensing Policy ("Policy") delineates the terms under which Van Borg Limited ("Company", "we", "us", or "our") collects, processes, and protects personal data, and outlines the licensing conditions governing the use of our AI-driven automation systems and services ("Services"). By engaging with our Services, you ("Client", "you", or "your") acknowledge and consent to the practices described herein.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section1;