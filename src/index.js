import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './stylesheets/GlobalStyles'
import { Provider } from 'react-redux'
import { globalStore, persistor } from "redux/globalStore";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={globalStore}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle/>
      <BrowserRouter basename="/wallet-finance-application-frontend/">
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
    

  </React.StrictMode>
);
