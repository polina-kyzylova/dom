import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './global.ts';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
