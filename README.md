# Vite React Tailwind Webapp Boilerplate

A modern webapp boilerplate built with the latest versions of Vite, React, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Ultra-fast development environment and build tool
- ⚛️ **React 19** - With the new createRoot API
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🧭 **React Router v7** - Declarative routing for React
- 📱 **Responsive Design** - Fully mobile-optimized
- 🧩 **Headless UI v2** - Accessible, unstyled UI components
- 🦸 **Heroicons** - Beautiful SVG icons for UI
- 🔍 **ESLint** - Code linting with modern ESLint setup (flat config)
- 📁 **Organized Structure** - Logical component organization
- 🔄 **API Service** - Pre-configured API service layer

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation

```bash
# Clone repository
git clone https://github.com/StephanGeorg/vite-react-tailwind-webapp.git
cd vite-react-tailwind-webapp

# Install dependencies
npm install

# Or with yarn
yarn install
```

## Development

Start the development server:

```bash
npm run dev
```

The server runs at [http://localhost:3000](http://localhost:3000).

## Linting

```bash
# Run code linting
npm run lint

# Auto-fix issues
npm run lint:fix
```

## Build

Create a production-ready build:

```bash
npm run build
```

Output is stored in the `dist` directory.

Preview the build:

```bash
npm run serve
```

## Project Structure

```
vite-react-tailwind-webapp/
├── public/            # Static assets
├── src/
│   ├── assets/        # Application assets
│   ├── components/    # React components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # UI components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components for routing
│   ├── services/      # API services
│   ├── utils/         # Helper functions
│   ├── index.css      # Global styles
│   └── main.jsx       # Main entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.mjs # PostCSS configuration
```

## Customization

### Tailwind Configuration

Customize Tailwind in [`tailwind.config.js`](tailwind.config.js):

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Add custom colors, fonts, etc. here
    },
  },
  plugins: [],
}
```

### API Configuration

Configure the API base URL in [`src/services/api.js`](src/services/api.js):

```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-api-url.com/api';
```

### Routing Configuration

The application uses React Router v7 for navigation. Routes are defined in [`src/components/App.jsx`](src/components/App.jsx):

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import AboutPage from '../pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add your routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
```

To create a new page:

1. Add a new component in the `src/pages` directory
2. Create a new route in `App.jsx`
3. Update the navigation links in `src/components/layout/Navigation.jsx` if needed

## License

ISC

---

