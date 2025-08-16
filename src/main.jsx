import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import "aos/dist/aos.css";
// Add CSS
import './assets/css/addition.css';
import './assets/css/custom.css';

AOS.init({
  duration: 1000,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
