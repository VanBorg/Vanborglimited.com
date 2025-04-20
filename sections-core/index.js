/**
 * Sections core functionality
 * This file serves as the central point for section-related utilities
 */

// Import section components
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Feature from '@/components/sections/Feature';
import CTA from '@/components/sections/CTA';

// Export section components
export const sections = {
  Hero,
  Services,
  Feature,
  CTA,
};

// Section registry for dynamic loading
export const sectionRegistry = {
  hero: {
    component: Hero,
    name: 'Hero',
    description: 'A hero section with a heading, subtext, and call-to-action buttons',
  },
  services: {
    component: Services,
    name: 'Services',
    description: 'A section showcasing services or features in a grid layout',
  },
  feature: {
    component: Feature,
    name: 'Feature',
    description: 'A section highlighting a specific feature with image and text',
  },
  cta: {
    component: CTA,
    name: 'Call to Action',
    description: 'A call-to-action section with a heading and subscription form',
  },
};

// Helper function to get section component by key
export function getSectionComponent(key) {
  return sectionRegistry[key]?.component;
}

// Helper function to render a section by key
export function renderSection(key, props = {}) {
  const Section = getSectionComponent(key);
  
  if (!Section) {
    console.warn(`Section with key '${key}' not found in registry`);
    return null;
  }
  
  return <Section {...props} />;
}

// Helper function for creating new sections
export function createSectionTemplate(name) {
  return `
import React from 'react';
import Container from '@/components/ui/Container';

export default function ${name}() {
  return (
    <section className="py-20" id="${name.toLowerCase()}">
      <Container>
        <h2>${name}</h2>
        {/* Add your section content here */}
      </Container>
    </section>
  );
}
  `.trim();
}

export default {
  sections,
  sectionRegistry,
  getSectionComponent,
  renderSection,
  createSectionTemplate,
};