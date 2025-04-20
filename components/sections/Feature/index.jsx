"use client";

import { slideUp } from '@/lib/animations';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Feature() {
  return (
    <section className="py-20" id="features">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div {...slideUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Web Applications
          </h2>
          <p className="text-muted-foreground mb-6">
            Our platform provides everything you need to build stunning, high-performance websites and applications.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Responsive design that works on all devices",
              "Built-in accessibility features",
              "Performance optimized for speed",
              "Secure by default architecture"
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button>Explore Features</Button>
        </div>
        
        <div className="relative h-[400px] rounded-lg overflow-hidden" {...slideUp(0.2)}>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/0 z-10 rounded-lg"></div>
          <div className="relative h-full w-full">
            {/* Placeholder for feature image */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <span className="text-muted-foreground">Feature Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}