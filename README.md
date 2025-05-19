# Vite React Tailwind Webapp Boilerplate

A modern webapp boilerplate built with the latest versions of Vite, React, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Ultra-fast development environment and build tool
- ⚛️ **React 19** - With the new createRoot API
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
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
git clone https://github.com/StepahnGeorg/vite-react-tailwind-webapp.git
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
const API_BASE_URL = 'https://your-api-url.com/api';
```

## License

ISC

---

Developed by [s.georg@hey.com](mailto:s.georg@hey.com)

