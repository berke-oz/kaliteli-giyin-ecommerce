import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
import './index.css';
import { ToastContainer } from 'react-toastify';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);