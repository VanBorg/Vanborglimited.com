"use client";

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeProvider';
import { slideUp } from '@/lib/animations';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80 z-0"></div>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center" {...slideUp(0)}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Create Stunning Digital Experiences
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Build beautiful, responsive, and user-friendly websites with our next-generation platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}