<<<<<<< HEAD
# eivantai
=======
# Evantai Frontend - The Industry OS

A complete React frontend application built with Tailwind CSS, Framer Motion, and Lucide React icons.

## Features

- 🎨 Blue-Cyan design system (NO purple/violet colors)
- 🎭 Glassmorphic UI components
- ✨ Smooth animations with Framer Motion
- 🧭 Multi-hub navigation (Creator, Sales, Logistics, Career)
- 🤖 AI Agent Panel with slide-out interface
- 📱 Fully responsive design

## Tech Stack

- React 18
- React Router DOM v6
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Demo Login

Use email addresses containing these keywords to access different hubs:
- `creator@example.com` → Content Creator Hub
- `sales@example.com` → Sales & Outreach Hub
- `logistics@example.com` → Supply Chain Hub
- `career@example.com` → Career & Job Seeker Hub

Password: any value

## Project Structure

```
src/
├── components/
│   ├── AgentPanel.jsx       # Right slide-out AI assistant
│   ├── GlassmorphicCard.jsx # Reusable glass card component
│   ├── Layout.jsx           # Main layout wrapper
│   └── Sidebar.jsx          # Left navigation rail
├── context/
│   └── AuthContext.jsx      # Authentication state
├── pages/
│   ├── Career.jsx           # Career hub with resume matcher
│   ├── Creator.jsx          # Content creator hub
│   ├── Logistics.jsx        # Supply chain hub
│   ├── Login.jsx            # Login page
│   ├── Sales.jsx            # Sales kanban board
│   └── Settings.jsx         # Settings page
├── styles/
│   └── globals.css          # Global styles & animations
├── App.jsx                  # Main app with routing
└── index.jsx                # Entry point
```

## Design System

### Colors
- Background: `#001B3D` (Deep Navy)
- Surface: `#012A5E` at 60% opacity
- Primary: `#0056D2` (Electric Blue)
- Accent: `#00E5FF` (Bright Cyan)
- Text Primary: `#FFFFFF`
- Text Secondary: `#94A3B8`

### Animations
- Page transitions with Framer Motion
- Pulse-cyan animation for AI elements
- Shimmer effect for loading states
- Wave animation for audio visualizer
- Staggered card entrance

## License

MIT
>>>>>>> c44422d (Initial commit)
