## Overview

Tidy Pipes Plumbing is a marketing-forward Next.js site that promotes residential and commercial plumbing services with conversion-focused landing pages.

## Key Libraries (`/`)

- **app** - Route groups, metadata, and server components that define each page
- **components** - Reusable UI sections such as the hero, pricing, FAQ, and footer
- **hooks** - Custom React hooks for UI state, theming, and interactive effects
- **lib** - Shared utilities for content, CTA data, SEO helpers, and third-party configs
- **styles** - Tailwind layers, global tokens, and base styles applied throughout the site
- **public** - Images, icons, and static assets referenced in layouts and sections

## Tech Stack

- **Framework**: Next.js 14 with the App Router, React 18, and TypeScript
- **Styling**: Tailwind CSS 4, PostCSS, tailwind-merge, and tailwindcss-animate
- **UI Toolkit**: Radix UI primitives, Lucide icons, Embla Carousel, and custom components
- **Forms & Validation**: React Hook Form, Zod schemas, and @hookform/resolvers
- **Analytics & Hosting**: Vercel Analytics with standard Next build and runtime tooling

## Main Features

- Hero, service highlights, and CTA sections tailored to plumbing lead generation
- Embeddable galleries, testimonials, and partner logos for social proof
- Detailed service descriptions with pricing tables and accordion FAQs
- Contact and scheduling forms with validation and toast feedback
- Responsive navigation, theme controls, and performance-optimized media

When modifying the code, **NEVER** write comments. If you see existing code with comments, don't forget to remove comments.

## Rules:

- **NEVER** write comments
- If you see comments in existing code remove them
- use npm for commands
- If you need to create a custom UI component, add that to the components folder and reuse components as much as you can.
