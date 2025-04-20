# Project Documentation

This document provides an overview of the project structure and how to get started.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

The project follows a modular architecture with clear separation of concerns:

```
├── app/               # Next.js app directory
├── components/        # React components
│   ├── sections/      # Page sections
│   └── ui/            # UI components
├── config/            # Configuration files
├── constants/         # Constants and enums
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries
├── public/            # Static assets
├── styles/            # CSS styles
└── utils/             # Utility functions
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Component Usage

### Sections

Sections are higher-level components that compose a page. For example:

```jsx
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Feature';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
```

### UI Components

UI components are low-level, reusable components:

```jsx
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ExampleComponent() {
  return (
    <Card>
      <h2>Example Card</h2>
      <p>This is an example of using UI components.</p>
      <Button>Click Me</Button>
    </Card>
  );
}
```

## Configuration

The application uses configuration files in the `config/` directory for various settings:

- `site.config.js` - Site-wide configuration
- `seo.config.js` - SEO configuration
- `auth.config.js` - Authentication configuration
- `api.config.js` - API configuration

## Styling

The project uses a combination of Tailwind CSS and custom CSS:

- Global styles are in `app/globals.css`
- Component-specific styles use CSS Modules
- Utility styles are in the `styles/` directory

## Learn More

For more information, check out the following documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)