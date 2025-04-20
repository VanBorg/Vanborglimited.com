# Table of Contents

## Getting Started
- [Installation](README.md#installation)
- [Prerequisites](README.md#prerequisites)
- [Project Structure](README.md#project-structure)
- [Available Scripts](README.md#available-scripts)

## Architecture
- [Component Architecture](#component-architecture)
- [Data Flow](#data-flow)
- [State Management](#state-management)
- [Routing](#routing)

## Components
- [Sections](#sections)
  - [Hero](#hero-section)
  - [Features](#features-section)
  - [Services](#services-section)
  - [CTA](#cta-section)
- [UI Components](#ui-components)
  - [Button](#button)
  - [Card](#card)
  - [Input](#input)
  - [Modal](#modal)
  - [Navbar](#navbar)
  - [Footer](#footer)

## Configuration
- [Site Configuration](#site-configuration)
- [SEO Configuration](#seo-configuration)
- [API Configuration](#api-configuration)
- [Authentication Configuration](#authentication-configuration)

## Styles
- [Theme System](#theme-system)
- [Animations](#animations)
- [Typography](#typography)
- [Layout](#layout)
- [Glass Effects](#glass-effects)

## Hooks
- [useSectionProps](#usesectionprops)
- [useTheme](#usetheme)

## Utilities
- [Animations](#animation-utilities)
- [Formatting](#formatting-utilities)
- [Validation](#validation-utilities)

## Deployment
- [Building for Production](#building-for-production)
- [Environment Variables](#environment-variables)
- [Deployment Platforms](#deployment-platforms)

## Best Practices
- [Code Style](#code-style)
- [Performance Optimization](#performance-optimization)
- [Accessibility](#accessibility)
- [Testing](#testing)

## Component Architecture

The application follows a modular component architecture:

### Sections

Sections are high-level components that make up pages:

```
components/sections/
├── Hero/
├── Services/
├── Feature/
└── CTA/
```

### UI Components

UI components are reusable, low-level components:

```
components/ui/
├── Button.jsx
├── Navbar.jsx
├── Footer.jsx
├── Card.jsx
└── ... etc
```

## Data Flow

The application uses a unidirectional data flow pattern:

1. Data is provided from API services or local state
2. Data flows down through components via props
3. User interactions trigger events that update state
4. Updated state flows back down to components

## State Management

The application uses React's built-in state management:

- Component-level state with `useState` for local UI state
- Context API with `useContext` for global state
- Custom hooks for reusable stateful logic

## Routing

The application uses Next.js App Router for routing:

- Page routes are defined in the `app/` directory
- Dynamic routes use folder names with brackets (e.g., `[id]`)
- Route groups use parentheses (e.g., `(auth)`)

--- 

**Note**: This is a structured table of contents for the project documentation. Each section would typically link to more detailed documentation pages or sections.