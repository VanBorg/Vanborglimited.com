"use client";

import { slideUp } from '@/lib/animations';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTA() {
  return (
    <section className="py-20 bg-muted">
      <Container>
        <div className="max-w-4xl mx-auto text-center" {...slideUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are building amazing digital experiences with our platform.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full"
                />
              </div>
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}