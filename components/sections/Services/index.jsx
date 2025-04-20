"use client";

import { slideUp } from '@/lib/animations';
import { Card } from '@/components/ui/card';
import { Lightbulb, Code, LineChart, Users } from 'lucide-react';

const services = [
  {
    title: "Strategic Planning",
    description: "We help you plan and execute your digital strategy for maximum impact.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights to drive business decisions.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Team Collaboration",
    description: "We work closely with your team to ensure successful project delivery.",
    icon: <Users className="h-8 w-8 text-primary" />,
  }
];

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="text-center mb-16" {...slideUp(0)}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of services to help your business thrive in the digital landscape.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} {...slideUp((index + 1) * 0.1)}>
            <Card className="p-6 h-full">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}