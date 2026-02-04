# Prospace - Premium Home Interior Landing Page

A modern, responsive, high-conversion landing page for Prospace home interior design brand, built with React.js and Tailwind CSS.

## Features

- 🎨 Pixel-perfect design inspired by Livspace
- 📱 Fully responsive (mobile-first approach)
- ⚡ Lightning-fast with Vite
- 🎭 Smooth animations with Framer Motion
- 🧩 Reusable component architecture
- 💎 Clean, scalable code structure
- ♿ Accessibility-friendly

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Input.jsx
├── sections/           # Page sections
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── CostEstimator.jsx
│   ├── HowItWorks.jsx
│   ├── WhyChoose.jsx
│   ├── DesignGallery.jsx
│   ├── Testimonials.jsx
│   ├── Cities.jsx
│   └── Footer.jsx
├── pages/             # Page components
│   └── Home.jsx
├── assets/            # Images, icons, etc.
├── data/              # Static data
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Key Sections

1. **Header/Navbar** - Sticky navigation with CTA
2. **Hero Section** - Lead capture form with trust badges
3. **Cost Estimator** - Interactive pricing cards
4. **How It Works** - Step-by-step process
5. **Why Choose Us** - USP highlights
6. **Design Gallery** - Interior inspiration showcase
7. **Testimonials** - Customer reviews carousel
8. **Cities** - Service locations
9. **Footer** - Links and contact info

## Customization

- Brand colors: Edit `tailwind.config.js` primary/secondary colors
- Content: Modify files in `src/data/`
- Components: All components are in `src/components/` and `src/sections/`

## License

MIT License - Free to use for personal and commercial projects.
