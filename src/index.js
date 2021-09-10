import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';
import './stylesheets/tablets.css';
import './stylesheets/normalize.css';
import './stylesheets/navigation.css';
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
