import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import './styles/HomePage.css';
import './styles/Questao1.css';
import './styles/Questao2.css';
import './styles/Questao3.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
