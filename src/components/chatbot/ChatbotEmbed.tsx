'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
      autostart?: boolean;
      modalMode?: boolean;
      userID?: string;
      [key: string]: unknown;
    };
  }
}

export const ChatbotEmbed = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const scriptRef = useRef<HTMLScriptElement | null>(null);
    const glowDivRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      window.localStorage.clear();
      window.sessionStorage.clear();

      const glowDiv = document.createElement('div');
      glowDiv.id = 'VG_OVERLAY_CONTAINER';
      glowDiv.style.width = '600px';
      glowDiv.style.height = '512px';
      glowDiv.style.margin = '-8px';
      glowDiv.style.borderRadius = '14px';
      glowDiv.style.overflow = 'hidden';
      glowDiv.style.background = 'white';
      glowDiv.style.boxShadow = '0 0 20px rgba(0,0,0,0.15)';
      glowDiv.style.border = '2px solid #000000';
      glowDivRef.current = glowDiv;

      container.appendChild(glowDiv);

      window.VG_CONFIG = {
        ID: '69pZGVcmCeqNZdketNHf',
        region: 'na',
        render: 'full-width',
        stylesheets: ['https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css'],
      };

      const script = document.createElement('script');
      script.src = 'https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js';
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => {
        setError('Failed to load chatbot script');
        console.error('Voiceglow embed script failed to load');
      };

      document.body.appendChild(script);
      scriptRef.current = script;

      return () => {
        if (glowDivRef.current && container.contains(glowDivRef.current)) {
          container.removeChild(glowDivRef.current);
        }
        if (scriptRef.current && document.body.contains(scriptRef.current)) {
          document.body.removeChild(scriptRef.current);
        }
      };
    }, []);

    return (
      <div ref={ref} className={className}>
        <div
          ref={containerRef}
          className={`relative min-h-[512px] transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border-2 border-black">
              <Loader2 className="w-8 h-8 animate-spin text-light-brand-primary dark:text-dark-brand-primary" />
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border-2 border-black">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ChatbotEmbed.displayName = 'ChatbotEmbed';

export { FloatingButton as FloatingChatbotButton } from './FloatingButton';
