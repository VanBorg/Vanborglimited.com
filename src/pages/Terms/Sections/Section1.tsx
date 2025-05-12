import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section1: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Van Borg's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as our Privacy Policy.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of any material changes through our website or by directly notifying you. Your continued use of the Services after such modifications constitutes your acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">2. Services Description</h2>
        <p>
          Van Borg provides AI chatbot and automation systems designed to assist businesses with lead generation, client booking, and customer engagement. Our services include but are not limited to:
        </p>
        <ul>
          <li>Custom AI chatbot development</li>
          <li>Automation system deployment</li>
          <li>System maintenance and optimization</li>
          <li>Integration with third-party services and platforms</li>
          <li>Training and support for implemented systems</li>
        </ul>

        <h2 className="text-xl font-bold mb-4 mt-8 text-light-text-primary dark:text-dark-text-primary font-title">3. User Accounts</h2>
        <p>
          Some aspects of our Services may require you to create an account. You are responsible for:
        </p>
        <ul>
          <li>Providing accurate and complete information when creating your account</li>
          <li>Maintaining the security and confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use of your account</li>
        </ul>
        <p>
          We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with these Terms or if we suspect unauthorized or fraudulent use of your account.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section1;