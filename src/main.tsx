import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.js';
import 'modern-normalize';
import './styles/global.css';
import './styles/reset.css';
import './styles/variables.css';
import { Toaster } from 'react-hot-toast';

// import Modal from 'react-modal';

// Modal.setAppElement('#root');

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
