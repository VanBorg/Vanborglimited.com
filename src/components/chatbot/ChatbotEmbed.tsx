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

      // Clean state
      window.localStorage.clear();
      window.sessionStorage.clear();

      // Create the embed container div
      const glowDiv = document.createElement('div');
      glowDiv.id = 'VG_OVERLAY_CONTAINER';
      glowDiv.style.width = '500px';
      glowDiv.style.height = '500px';
      glowDiv.style.borderRadius = '12px';
      glowDiv.style.overflow = 'hidden';
      glowDiv.style.boxShadow = '0 0 20px rgba(0,0,0,0.15)';
      glowDiv.style.background = 'white';
      glowDivRef.current = glowDiv;

      container.appendChild(glowDiv);

      // Voiceglow config
      window.VG_CONFIG = {
        ID: '69pZGVcmCeqNZdketNHf',
        region: 'na',
        render: 'full-width',
        stylesheets: [
          'https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css'
        ],
        // Optional:
        // autostart: true,
        // modalMode: true,
        // userID: 'xyz',
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
          className={`relative min-h-[500px] transition-all duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl">
              <Loader2 className="w-8 h-8 animate-spin text-light-brand-primary dark:text-dark-brand-primary" />
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl">
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
