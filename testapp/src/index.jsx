import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style= {{textAlign: "center"}}> Hello World </h1>
    <p className="para"> This is a sample paragraph </p>
  </>
);
