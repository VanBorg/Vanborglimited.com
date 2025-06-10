'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

export const ChatbotEmbed = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
      script.onload = () => {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: '682ea93254d60af2a37971a3' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com'
            },
            render: {
              mode: 'embedded',
              target: container,
              style: {
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }
            }
          });
          setIsLoaded(true);
        } else {
          setError('Failed to load Voiceflow');
          console.error('Voiceflow not available after script load');
        }
      };
      script.onerror = () => {
        setError('Failed to load chatbot script');
        console.error('Voiceflow embed script failed to load');
      };

      document.body.appendChild(script);
      scriptRef.current = script;

      return () => {
        if (scriptRef.current && document.body.contains(scriptRef.current)) {
          document.body.removeChild(scriptRef.current);
        }
      };
    }, []);

    return (
      <div ref={ref} className={`flex justify-center items-center w-full ${className}`}>
        <div
          className="w-[610px] h-[480px] rounded-xl overflow-hidden relative"
        >
          <div
            ref={containerRef}
            className={`w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent transition-all duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {!isLoaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border-2 border-black z-10">
                <Loader2 className="w-8 h-8 animate-spin text-light-brand-primary dark:text-dark-brand-primary" />
              </div>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border-2 border-black z-10">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ChatbotEmbed.displayName = 'ChatbotEmbed';

export { FloatingButton as FloatingChatbotButton } from './FloatingButton';
