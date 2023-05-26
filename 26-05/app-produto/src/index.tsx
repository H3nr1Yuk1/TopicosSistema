import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProdCadas from './components/ProdCadas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <ProdCadas></ProdCadas>
  </React.StrictMode>
);