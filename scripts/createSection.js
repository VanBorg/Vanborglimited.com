/**
 * Script to create a new section component with boilerplate code
 * Usage: node scripts/createSection.js SectionName
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the section name from command line arguments
const sectionName = process.argv[2];

if (!sectionName) {
  console.error('Please provide a section name');
  console.error('Usage: node scripts/createSection.js SectionName');
  process.exit(1);
}

// Create the section directory
const sectionDir = path.join(__dirname, '..', 'components', 'sections', sectionName);

if (fs.existsSync(sectionDir)) {
  console.error(`Section ${sectionName} already exists`);
  process.exit(1);
}

// Create the directory
fs.mkdirSync(sectionDir, { recursive: true });

// Create the index.jsx file
const indexContent = `"use client";

import { slideUp } from '@/lib/animations';
import Container from '@/components/ui/Container';

export default function ${sectionName}() {
  return (
    <section className="py-20" id="${sectionName.toLowerCase()}">
      <Container>
        <div className="text-center mb-16" {...slideUp(0)}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">${sectionName}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Description of the ${sectionName} section goes here.
          </p>
        </div>
        
        <div {...slideUp(0.1)}>
          {/* Section content goes here */}
        </div>
      </Container>
    </section>
  );
}
`;

fs.writeFileSync(path.join(sectionDir, 'index.jsx'), indexContent);

console.log(`✅ Created section: ${sectionName}`);