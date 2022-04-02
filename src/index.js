import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Distintas maneras de renderizar un elemento
/* let jsx = React.createElement("h1", {}, "hola mundo")
let nombre = "Julian"
let jsxMultiple = (
  <div>
  <h1>Hola {nombre}</h1>
  <h3>Mundo</h3>
  <p>Aguante boca</p>
  </div>
)

let container = document.getElementById("root");
ReactDOM.render(jsxMultiple, container) */