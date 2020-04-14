import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Calculadora from './main/Calculadora';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculadora />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
