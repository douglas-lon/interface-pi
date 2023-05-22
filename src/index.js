import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavBar } from './components/NavBar';
import DashboardRendimento from './pages/visualizacao/DashboardRendimento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <DashboardRendimento/>
  </React.StrictMode>
);

