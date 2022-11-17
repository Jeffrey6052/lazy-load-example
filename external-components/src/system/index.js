import * as React from "react"

import * as ReactRouterDOM from "react-router-dom"

import { createRoot } from 'react-dom/client'

import './index.css';
import App from './App';

const { BrowserRouter } = ReactRouterDOM

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
