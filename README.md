# ✈️ Air on the Go - Travel Tracker App

A beautiful, modern web application to track the countries you've visited and explore the world. Built with React and Vite with a stunning dark theme, glassmorphism effects, and smooth animations.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-19.2.6-61dafb.svg)
![Vite](https://img.shields.io/badge/vite-8.0.12-646cff.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🌟 Features

### Core Functionality

- ✅ **Mark Countries as Visited** - Toggle between visited and not visited states
- 📍 **Travel Map Dashboard** - View all visited countries with their flags
- 🗺️ **Country Explorer** - Browse and interact with all countries
- 📊 **Visit Counter** - Real-time count of visited countries
- 🎯 **Instant Add/Remove** - Flags and country names instantly appear/disappear

### Design & UX

- 🎨 **Dark Theme** - Easy on the eyes with modern color palette
- ✨ **Glassmorphism** - Frosted glass effect on all cards
- 🌍 **Parallax Background** - Rotating globe that moves with scroll
- ⚡ **Smooth Animations** - Hover effects, transitions, and state changes
- 🎭 **Visited Highlight** - Green glow effect for visited countries
- 📱 **Fully Responsive** - Optimized for all screen sizes

### Layout & Grid

- **Desktop (1200px+)**: 4-column grid
- **Tablet (768px-1199px)**: 2-column grid
- **Mobile (<768px)**: 1-column single view

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd air-on-the-go
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The app will open at `http://localhost:5173/` (or the next available port)

## 📦 Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
air-on-the-go/
├── src/
│   ├── components/
│   │   └── Countries/
│   │       ├── Countries.jsx         # Main container & state management
│   │       └── Countries.css         # Grid layout & sections styling
│   ├── Country/
│   │   ├── Country.jsx               # Individual country card
│   │   └── Country.css               # Card styling & animations
│   ├── App.jsx                       # Root component
│   ├── App.css                       # Global app styles
│   ├── main.jsx                      # Entry point
│   ├── index.css                     # Global styles & theme
│   └── assets/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Component Details

### Countries.jsx (Parent Component)

**Responsibilities:**

- Fetches country data from API
- Manages visited countries state
- Tracks scroll position for parallax effect
- Renders both Travel Map and Explore sections

**Key Features:**

- Real-time visited count
- Dual-section layout (Travel Map + Explorer)
- Scroll event listener for rotating background
- Add/remove logic for toggle functionality

### Country.jsx (Child Component)

**Props:**

- `country` - Country object from API
- `getVisitedCountries(country, visited)` - Callback to update parent state

**Features:**

- Displays country flag, name, official name, capital, population, region
- Toggle button for visited status
- Visual feedback with color changes
- Hover animations

**Country Data Structure:**

```javascript
{
  name: {
    common: "Jamaica",
    official: "Jamaica"
  },
  capital: { capital: "Kingston" },
  population: { population: 2825544 },
  region: { region: "Americas" },
  flags: { flags: { png: "https://..." } },
  cca3: { cca3: "JAM" }
}
```

## 🔄 State Management Flow

```
Countries (parent)
├── visitedCountries[] (state)
├── rotation (scroll position)
│
└── Country (child) x 250
    ├── visited (local state)
    └── getVisited() → calls getVisitedCountries(country, nextVisited)
```

### Toggle Logic

```javascript
// When user clicks button:
visited = true  → Add country to visitedCountries array
visited = false → Remove country from visitedCountries array
```

## 🌐 API Integration

**Endpoint:** `https://openapi.programming-hero.com/api/all`

**Features:**

- Uses React Suspense for loading states
- Shows "Loading Countries" fallback while fetching
- Automatic error handling with fallback

## 🎨 Styling & Colors

### Color Palette

```css
Primary Green:    #16c784 (Cyan-Green)
Accent Cyan:      #00d4ff (Bright Cyan)
Dark Blue:        #0f3460 (Deep Blue)
Darker Navy:      #16213e (Navy)
Darkest:          #1a1a2e (Almost Black)
Text Light:       #e0e0e0 (Light Gray)
Text Medium:      #b0b0b0 (Medium Gray)
Text Dim:         #8a8a8a (Dim Gray)
```

### Glass Effect

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

## 🔤 Typography

**Font Family:** Poppins (Google Fonts)

- Weights: 300, 400, 600, 700
- Applied globally for consistent look

## ✨ Animation Classes

### Hover Effects

- **Cards**: Lift up with shadow glow
- **Images**: Slight zoom on hover
- **Buttons**: Scale and glow
- **Shine Effect**: Smooth gradient sweep across cards

### Scroll Effects

- **Parallax**: Background rotates smoothly
- **Smooth Scroll**: CSS scroll-behavior

## 📱 Responsive Breakpoints

```css
Desktop:  1200px+   (4 columns)
Tablet:   768px     (2 columns)
Mobile:   480px-    (1 column)
```

## 🐛 Known Features & Fixes

✅ **Fixed:** Count logic - correctly adds on visited, removes on unvisited
✅ **Fixed:** No duplicate entries in visited list
✅ **Feature:** Automatic flag merge with visited toggle
✅ **Feature:** Scroll-based parallax background
✅ **Feature:** Dark theme throughout

## 🚀 Future Enhancements

- [ ] Filter by continent/region
- [ ] Search functionality
- [ ] Sort by population, capital, etc.
- [ ] Local storage persistence
- [ ] Share travel stats feature
- [ ] Monthly visit goals
- [ ] Dark/Light mode toggle
- [ ] Multiple user profiles

## 📝 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint checks        |

## 🔧 Configuration Files

### vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### eslint.config.js

Configured for React with recommended rules and React Hooks support.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 👨‍💻 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For issues or questions, please open an issue on the repository.

---

**Made with ❤️ for travel enthusiasts**

Happy exploring! ✈️🌍
