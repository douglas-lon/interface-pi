import React from 'react'
import ReactDOM from 'react-dom/client'
import Predicao from './pages/predicao/Predicao'
import { NavBar } from './components/NavBar';
import { FancyPlot } from './components/FancyPlot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <FancyPlot/>
  </React.StrictMode>
);

