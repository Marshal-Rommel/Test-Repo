import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import Clock from './Clock'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Clock />
    <h1 style= {{textAlign: "center"}}> Hello World </h1>
    <p className="para"> This is a sample paragraph </p>
  </>
);
