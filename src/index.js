import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './stylesheets/GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter basename="/wallet-finance-application-frontend/">
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
