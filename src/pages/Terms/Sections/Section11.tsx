import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';

const Section11: React.FC = () => {
  return (
    <GlassCard className="p-8" intensity="medium">
      <div className="prose prose-lg max-w-none text-light-text-secondary dark:text-dark-text-secondary">
        <h2 className="text-xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary font-title">11. Disclaimer of Warranties</h2>
        <p>
          Your use of our Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to:
        </p>
        <ul>
          <li>The Services will meet your specific requirements</li>
          <li>The Services will be uninterrupted, timely, secure, or error-free</li>
          <li>Results obtained from using the Services will be accurate or reliable</li>
          <li>Any defects or errors will be corrected</li>
        </ul>
        <p>
          This disclaimer does not affect any warranties which cannot be excluded or limited under applicable law.
        </p>
      </div>
    </GlassCard>
  );
};

export default Section11;