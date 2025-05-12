'use client';

import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

export const FloatingButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showBubble && (
        <div className="absolute -top-20 right-0 min-w-[280px] px-8 py-4 pr-12 rounded-[24px] shadow-xl backdrop-blur-lg border border-white/20 text-white bg-gradient-to-br from-light-brand-primary/95 to-light-brand-secondary/95 dark:from-dark-brand-primary/95 dark:to-dark-brand-secondary/95 transition-all hover:scale-[1.02] duration-300">
          <button onClick={() => setShowBubble(false)} className="absolute top-1/2 -translate-y-1/2 right-3 p-1.5 hover:bg-white/10 rounded-full">
            <X size={14} />
          </button>
          <p className="text-base font-medium whitespace-nowrap">Talk to AI Assistant</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 bg-gradient-to-br from-light-brand-primary/95 to-light-brand-secondary/95 dark:from-dark-brand-primary/95 dark:to-dark-brand-secondary/95 border-r border-b border-white/20" />
        </div>
      )}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onClick();
        }}
        className="w-16 h-16 flex items-center justify-center rounded-full border border-white/10 text-white bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Bot size={32} className="animate-[wiggle_1s_ease-in-out_infinite]" />
      </button>
    </div>
  );
};
