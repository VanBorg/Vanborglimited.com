# Component Library Documentation

## 🚀 Quick Start

All components are ready to use across your entire site! Here's how to import and use them:

### Import Methods

```typescript
// Method 1: Import individual components
import { Button, Card, Stats, TrustBadge } from './components';

// Method 2: Import specific components
import Button from './components/Button';
import Stats from './components/Stats';
import TrustBadge from './components/TrustBadge';
```

## 📦 Available Components

### Core UI Components

#### Button
```tsx
<Button variant="primary" onClick={handleClick}>
  Get Started
</Button>
<Button variant="secondary" onClick={handleClick}>
  Learn More
</Button>
```

#### Card
```tsx
<Card variant="glass" size="medium">
  <h2>Card Content</h2>
  <p>Your content here</p>
</Card>
```

#### Badge & BadgeGroup
```tsx
<Badge variant="brand">Premium</Badge>
<BadgeGroup badges={['SEO', 'AI Chatbot', 'Voice Bot']} />
```

### Layout Components

#### Navbar
```tsx
<Navbar />
```

#### Hero
```tsx
<Hero />
```

### Content Components

#### Stats
```tsx
<Stats />
```

#### TrustBadge
```tsx
<TrustBadge />
<TrustBadge text="Custom trust message" />
```

## 🎨 CSS Classes Available

### Typography
- `.heading-primary` - Main headlines
- `.heading-secondary` - Subheadings
- `.heading-tertiary` - Small headings
- `.body-large` - Large body text
- `.body-medium` - Medium body text
- `.body-small` - Small body text

### Layout
- `.section-container` - Main section wrapper
- `.section-content` - Content container
- `.section-text` - Text container
- `.space-section` - Section spacing
- `.space-content` - Content spacing

### Backgrounds
- `.bg-section` - Light section background
- `.bg-section-dark` - Dark section background

### Buttons
- `.btn` - Base button class
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button

### Cards
- `.card` - Base card class
- `.card-large` - Large card
- `.card-medium` - Medium card
- `.card-small` - Small card

## 🎯 Usage Examples

### Creating a New Section
```tsx
import { Card, Button, Stats } from './components';

const AboutSection = () => {
  return (
    <section className="bg-section section-container">
      <div className="section-content">
        <Card variant="glass" size="medium">
          <h1 className="heading-primary">About Us</h1>
          <p className="body-large">We help businesses grow...</p>
          <Button variant="primary">Learn More</Button>
        </Card>
        <Stats />
      </div>
    </section>
  );
};
```

### Creating a Services Section
```tsx
import { Card, BadgeGroup, TrustBadge } from './components';

const ServicesSection = () => {
  const services = ['Web Design', 'SEO', 'Marketing'];
  
  return (
    <section className="bg-section section-container">
      <div className="section-content">
        <TrustBadge text="🚀 Trusted by 200+ Clients" />
        <Card variant="elevated" size="large">
          <h2 className="heading-secondary">Our Services</h2>
          <BadgeGroup badges={services} variant="brand" />
        </Card>
      </div>
    </section>
  );
};
```

## ✨ Features

- **Fully Responsive** - All components work on mobile, tablet, and desktop
- **Consistent Styling** - Uses your design system colors and fonts
- **Accessible** - Proper ARIA labels and keyboard navigation
- **Customizable** - Props for variants, sizes, and custom classes
- **Performance Optimized** - Memoized components and efficient animations
- **TypeScript Ready** - Full type safety and IntelliSense support

## 🎨 Design System

### Colors
- Primary: Sky Blue (#2563EB)
- Secondary: Cyan
- Text: Gray scale
- Background: Light gradients

### Fonts
- Display: Playfair Display
- Body: Inter

### Spacing
- Consistent spacing scale
- Responsive breakpoints
- Mobile-first approach

All components are ready to use across your entire site! 🚀
