import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShoppingState } from './context/shopping/ShoppingState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingState>
      <App />  
    </ShoppingState>
  </React.StrictMode>
);

