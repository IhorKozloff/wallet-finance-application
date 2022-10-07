import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './stylesheets/GlobalStyles'
import { Provider } from 'react-redux'
import { globalStore } from "redux/globalStore";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <GlobalStyle/>
      <BrowserRouter basename="/wallet-finance-application-frontend/">
        <App />
      </BrowserRouter>
    </Provider>
    

  </React.StrictMode>
);
