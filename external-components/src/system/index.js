import React from 'react';
import ReactDOM from 'react-dom/client'

import * as ReactRouterDOM from "react-router-dom"

import './index.css';
import App from './App';

const { BrowserRouter } = ReactRouterDOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
