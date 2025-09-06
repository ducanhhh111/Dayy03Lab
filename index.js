import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HvtApp from './HvtApp';

const hvtRoot = ReactDOM.createRoot(document.getElementById('root'));
hvtRoot.render(
  <React.StrictMode>
    <HvtApp />
  </React.StrictMode>
);
