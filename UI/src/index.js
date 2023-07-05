import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginTemplate from './App/Components/Login/Shared/LoginTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginTemplate backgroundImageUrl="UI\src\esri-dark-gray-canvas.png"></LoginTemplate>
    <div><h1>hello.</h1></div>
  </React.StrictMode>
);

