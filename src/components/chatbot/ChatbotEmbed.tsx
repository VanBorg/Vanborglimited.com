'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
  voice: {
    url: string;
    apiKey: string;
  };
  render: {
    mode: 'embedded';
    target: HTMLElement;
    style: {
      width: string;
      height: string;
    };
  };
  session: {
    persist: boolean;
    resumeSession: boolean;
    sessionID: string;
  };
  user: {
    name: string;
  };
}

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: VoiceflowConfig) => { destroy?: () => void };
      };
    };
  }
}

export const ChatbotEmbed = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const destroyRef = useRef<() => void>();

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const chatDiv = document.createElement('div');
      chatDiv.id = 'voiceflow-chat';
      chatDiv.className =
        'h-[500px] w-full rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-900';
      container.appendChild(chatDiv);

      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
      script.async = true;
      script.type = 'text/javascript';

      const initializeVoiceflow = () => {
        try {
          if (!window.voiceflow?.chat?.load) {
            throw new Error('Voiceflow chat not available');
          }

          const instance = window.voiceflow.chat.load({
            verify: { projectID: '681eef6bda640f7d973c323f' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com',
              apiKey: 'VF.DM.6820a0277af23f2cc0660904.jLTjygHhVyLAA2Ku',
            },
            render: {
              mode: 'embedded',
              target: chatDiv,
              style: { width: '100%', height: '100%' },
            },
            session: {
              persist: false,
              resumeSession: false,
              sessionID: `${Date.now()}`
            },
            user: {
              name: 'Website Visitor'
            }
          });

          if (instance?.destroy) {
            destroyRef.current = instance.destroy;
          }

          setIsLoaded(true);
        } catch (err) {
          console.error('Failed to initialize Voiceflow:', err);
          setError('Failed to initialize chat widget');
          setIsLoaded(true);
        }
      };

      script.onload = initializeVoiceflow;

      script.onerror = (err) => {
        console.error('Failed to load Voiceflow script:', err);
        setError('Failed to load chat widget');
        setIsLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        if (destroyRef.current) {
          try {
            destroyRef.current();
          } catch (err) {
            console.warn('Voiceflow destroy error:', err);
          }
        }

        if (container.contains(chatDiv)) {
          container.removeChild(chatDiv);
        }

        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }, []);

    return (
      <div ref={ref} className={className}>
        <div
          ref={containerRef}
          className={`relative min-h-[500px] transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm pointer-events-none'
          }`}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl">
              <Loader2 className="w-8 h-8 animate-spin text-light-brand-primary dark:text-dark-brand-primary" />
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl">
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ChatbotEmbed.displayName = 'ChatbotEmbed';

export { FloatingButton as FloatingChatbotButton } from './FloatingButton';
