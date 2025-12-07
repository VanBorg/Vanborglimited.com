// =========================
// COMPONENT EXPORTS
// Easy imports for all components
// =========================

// Core UI Components
export { default as Button } from './Button';
export { default as Card } from './Card';
export { Badge, BadgeGroup } from './Badge';

// Layout Components
export { default as Navbar } from './Navbar';
export { default as Hero } from './Hero';
export { default as Footer } from './Footer';

// Content Components
export { default as Stats } from './Stats';
export { default as TheDifference } from './TheDifference';
export { default as ContactSection } from './ContactSection';
export { default as LazySection } from './LazySection';

// Calculator Components
export { default as BusinessInfo } from './calculator/BusinessInfo';
export { default as RankingInfo } from './calculator/RankingInfo';
export { default as ServiceSelection } from './calculator/ServiceSelection';
export { default as ResultsDisplay } from './calculator/ResultsDisplay';

// Calculator Icons
export * from './calculator/icons';

// Cookie Management Components (temporarily disabled)
// export { default as CookieBanner } from './CookieBanner';
// export { default as CookieProvider, useCookie } from './CookieProvider';

// =========================
// COMPONENT USAGE EXAMPLES
// =========================

/*
// Import individual components:
import { Button, Card, BadgeGroup } from './components';

// Import specific components:
import Button from './components/Button';
import Stats from './components/Stats';

// Usage examples:
<Button variant="primary" onClick={handleClick}>Click me</Button>
<Card variant="glass" size="medium">Content here</Card>
<BadgeGroup badges={['SEO', 'AI Chatbot', 'Voice Bot']} />
<Stats />
*/
