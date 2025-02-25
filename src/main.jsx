import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/app_context.jsx';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Router>
      <App />
    </Router>
    </AppProvider>
  </StrictMode>
);
