'use client';

import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

export const FloatingButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showBubble && (
        <div className="absolute -top-20 right-0 w-[180px] px-4 py-2 pr-12 rounded-xl shadow-xl backdrop-blur-lg border border-white/20 text-white bg-gradient-to-br from-light-brand-primary/95 to-light-brand-secondary/95 dark:from-dark-brand-primary/95 dark:to-dark-brand-secondary/95 transition-all hover:scale-[1.02] duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 transition"
          >
            <X size={14} />
          </button>
          <p className="text-sm font-medium whitespace-normal leading-snug">
            Need help? Your AI Assistant is ready
          </p>
          <div className="absolute -bottom-2 right-6 w-3.5 h-3.5 rotate-45 bg-gradient-to-br from-light-brand-primary/95 to-light-brand-secondary/95 dark:from-dark-brand-primary/95 dark:to-dark-brand-secondary/95 border-r border-b border-white/20" />
        </div>
      )}

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onClick();
        }}
        className="w-16 h-16 flex items-center justify-center rounded-full border border-white/10 text-white bg-gradient-to-br from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Bot size={42} className="animate-[wiggle_1s_ease-in-out_infinite]" />
      </button>
    </div>
  );
};
