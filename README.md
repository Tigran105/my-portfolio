# Tigran Sargsyan – Portfolio

A modern, responsive personal portfolio showcasing work experience, skills, and projects. Built with React, TypeScript, and Vite.

## Features

- **Multi-language support** – English, Russian, and Armenian
- **Dark / Light theme** – Toggle with system preference detection
- **Responsive design** – Mobile-first layout with adaptive navigation
- **Smooth animations** – Powered by Framer Motion
- **Contact form** – Send messages via EmailJS
- **SEO-friendly** – Meta tags and Open Graph support

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS**
- **Framer Motion**
- **React Router**
- **Zustand**
- **EmailJS**

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Tigran105/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Scripts

| Command   | Description                          |
| --------- | ------------------------------------ |
| `npm run dev`     | Start development server            |
| `npm run build`   | Build for production                |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint                          |

## Project Structure

```
src/
├── features/         # Page-level features (home, about, experience, contact)
├── shared/
│   ├── components/   # Reusable UI and layout components
│   ├── contexts/     # React contexts (e.g. language)
│   ├── hooks/        # Custom hooks
│   ├── locales/      # Translation files
│   ├── store/        # Zustand store
│   └── utils/        # Helpers and utilities
├── assets/           # Images, icons, media
└── App.tsx
```

## License

© 2026 Tigran Sargsyan. All rights reserved.
