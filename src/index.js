import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const appElement = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Check karein ki kya build ke waqt react-snap ne HTML pehle se generate kar diya hai
if (container.hasChildNodes()) {
  // Agar HTML pehle se maujood hai (Production environment), toh hydrateRoot use karein
  hydrateRoot(container, appElement);
} else {
  // Local development ke liye normal rendering chalegi
  createRoot(container).render(appElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();