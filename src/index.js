import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import TagManager from 'react-gtm-module'
import store from './store/store';
 
const tagManagerArgs = {
    gtmId: 'GTM-59MQVMQ'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  <ToastContainer />
  <Provider store={store}>
    <App />
  </Provider>  
  </>
  // </React.StrictMode>
);


