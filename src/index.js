import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/montserrat"; 
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/400-italic.css";
import "./normalize.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
