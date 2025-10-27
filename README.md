# Juno Website

A modern, responsive website for Juno - SOC 2 compliance made simple.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Mobile-first approach
- SEO optimized
- TypeScript support

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Radix UI components

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── juno/             # Juno-specific components
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Components

- **Navigation**: Responsive navigation with mobile menu
- **HeroSection**: Main landing section with animated elements
- **ProcessSection**: 4-step process overview
- **SocialProofSection**: Testimonials and stats
- **CTASection**: Call-to-action section
- **Footer**: Site footer with links

## Customization

The website uses a custom color palette:
- Primary Green: `#00986E`
- Dark Green: `#0A4733`
- Light Green: `#00B388`
- Accent Gold: `#E0C36C`
- Background: `#F9FAF9`

## Deployment

The site is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js.
