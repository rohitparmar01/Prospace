# Prospace Landing Page - Project Documentation

## 🎯 Project Overview

A complete, production-ready landing page for **Prospace** - a premium home interior design brand. This is a pixel-perfect replica of the Livspace homepage with custom branding and modern React architecture.

## ✨ Features Implemented

### 1. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- No horizontal scrolling on any device
- Touch-friendly interactions

### 2. **Performance Optimizations**
- Lazy loading with Framer Motion viewport detection
- Optimized images from Unsplash CDN
- Code splitting with Vite
- Fast HMR (Hot Module Replacement)

### 3. **Animations**
- Smooth page transitions
- Scroll-triggered animations
- Interactive hover effects
- Carousel with swipe support

### 4. **Accessibility**
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators

## 📁 Project Structure

```
ProSpace/
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Button.jsx          # Primary button component
│   │   ├── Card.jsx            # Card wrapper with animations
│   │   ├── Input.jsx           # Form input component
│   │   └── Select.jsx          # Dropdown select component
│   │
│   ├── sections/                # Page sections
│   │   ├── Header.jsx          # Sticky navigation bar
│   │   ├── Hero.jsx            # Hero section with lead form
│   │   ├── CostEstimator.jsx   # Pricing cards section
│   │   ├── HowItWorks.jsx      # Process timeline
│   │   ├── WhyChoose.jsx       # USP highlights
│   │   ├── DesignGallery.jsx   # Portfolio gallery
│   │   ├── Testimonials.jsx    # Customer reviews carousel
│   │   ├── Cities.jsx          # Service locations
│   │   └── Footer.jsx          # Footer with links
│   │
│   ├── pages/                   # Route pages
│   │   └── Home.jsx            # Main landing page
│   │
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
│
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
└── README.md                    # Documentation
```

## 🎨 Design System

### Colors
- **Primary**: Teal/Cyan (#0099a0)
- **Secondary**: Blue (#0ea5e9)
- **Gradients**: Multiple brand gradients for visual interest

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Spacing
- Consistent padding/margin using Tailwind's spacing scale
- Section spacing: py-20 (80px vertical)
- Container max-width with responsive padding

## 🔧 Component Details

### Button Component
**Props:**
- `variant`: primary, secondary, outline, ghost, white
- `size`: sm, md, lg, xl
- `fullWidth`: boolean
- `disabled`: boolean

**Usage:**
```jsx
<Button variant="primary" size="lg">Get Free Quote</Button>
```

### Card Component
**Props:**
- `hover`: Enable hover effects
- `padding`: none, sm, md, lg, xl
- `className`: Additional CSS classes

**Usage:**
```jsx
<Card hover={true} padding="lg">Content here</Card>
```

### Input Component
**Props:**
- `label`: Input label
- `type`: text, email, tel, etc.
- `placeholder`: Placeholder text
- `icon`: React icon element
- `error`: Error message
- `required`: Boolean

**Usage:**
```jsx
<Input 
  label="Name" 
  type="text" 
  icon={<HiUser />} 
  required 
/>
```

## 📱 Sections Breakdown

### 1. Header/Navbar
- Sticky on scroll
- Mobile hamburger menu
- Smooth scroll navigation
- CTA button prominent

### 2. Hero Section
- Large hero headline
- Lead capture form (Name, Phone, City)
- Trust badges (10-Year Warranty, 45-Day Move-in, 100K+ Homes)
- Gradient background with pattern

### 3. Cost Estimator
- 4 interactive pricing cards
- Hover effects with shadows
- Feature lists with checkmarks
- Starting prices displayed

### 4. How It Works
- 5-step process visualization
- Timeline connector on desktop
- Colored gradient icons
- Clear descriptions

### 5. Why Choose Us
- 6 USP cards with icons
- Hover animations
- Stats banner at bottom
- Premium feel

### 6. Design Gallery
- Category filter buttons
- 8 design examples with images
- Hover overlay with details
- Responsive grid layout

### 7. Testimonials
- Customer review carousel
- Navigation arrows and dots
- Profile images
- Star ratings

### 8. Cities
- 16 major Indian cities
- Project count per city
- Hover effects
- Grid layout

### 9. Footer
- Company information
- Multiple link columns
- Newsletter subscription
- Social media icons
- Contact details

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit: http://localhost:3000

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Key Technologies

- **React 18**: Latest React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **React Icons**: Icon library (Hero Icons)

## 📝 Customization Guide

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // ... other shades
  }
}
```

### Update Content
All content is in component files:
- Cities list: `src/sections/Cities.jsx`
- Testimonials: `src/sections/Testimonials.jsx`
- Pricing: `src/sections/CostEstimator.jsx`

### Add New Sections
1. Create component in `src/sections/`
2. Import in `src/pages/Home.jsx`
3. Add navigation link in `Header.jsx`

## 🔍 SEO Ready

- Semantic HTML5 structure
- Meta tags in `index.html`
- Clean URLs with React Router
- Alt text on images
- Proper heading hierarchy

## 📊 Performance Metrics

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🐛 Known Issues

None currently. If you find any issues, please document them.

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 🙏 Credits

- Design inspiration: Livspace
- Images: Unsplash
- Icons: Hero Icons
- Fonts: Google Fonts

## 📞 Support

For questions or support:
- Email: support@prospace.com
- Phone: 1800-123-4567

---

**Built with ❤️ for Prospace**
