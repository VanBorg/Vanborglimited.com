# Van Borg Limited Website

A modern, SEO-optimised website built with React, Vite, and Tailwind CSS for Van Borg Limited - a London-based digital marketing agency specialising in Local SEO, Google Ads, conversion-optimised websites, and AI chatbots.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 8.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VanBorg/Vanborglimited.com.git
cd Vanborglimited.com
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

## 📁 Project Structure

```
├── public/              # Static assets (favicon, manifest, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── calculator/  # ROI calculator components
│   │   ├── chatbot/     # AI chatbot service components
│   │   ├── google-ads/  # Google Ads service components
│   │   ├── google-ranking/ # Local SEO service components
│   │   └── seo-website/ # SEO website service components
│   ├── config/          # Configuration files
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── dist/                # Production build output (generated)
├── index.html           # Main HTML file
├── netlify.toml         # Netlify deployment configuration
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🎨 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📦 Features

- **SEO Optimised** - Comprehensive meta tags, structured data, and semantic HTML
- **Performance** - Optimised build with code splitting and lazy loading
- **Mobile-First** - Responsive design that works on all devices
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Cookie Consent** - GDPR-compliant cookie banner
- **Analytics** - Google Analytics integration (with consent)

## 🌐 Deployment

This project is configured for deployment on **Netlify**. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Your site will be live after the first successful build

## 📝 Configuration

### Build Configuration

The project uses Vite for building. Configuration can be found in `vite.config.ts`.

### Netlify Configuration

Netlify settings are configured in `netlify.toml`, including:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules for SPA routing
- Security headers
- Cache control headers

## 🔒 Security

The project includes comprehensive security headers configured in `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- Content-Security-Policy
- Strict-Transport-Security
- And more...

## 📄 License

Copyright © 2024 Van Borg Limited. All rights reserved.

## 📧 Contact

- **Email**: info@vanborglimited.com
- **Phone**: +44 7846 885154
- **Address**: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ

