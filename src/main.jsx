import React from 'react';
import { createRoot } from 'react-dom/client'; // Geänderter Import für React 19
import App from './components/App';
import './styles/index.css';

// React 19 Syntax
createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);