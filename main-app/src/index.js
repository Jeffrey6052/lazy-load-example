import * as React from "react"
import * as ReactDOM from "react-dom"
import * as ReactRouterDOM from "react-router-dom"

import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'

import "@/system/JowoPkg"

// 共享基础库，后续将会由动态加载进来的组件共同使用, 利用webpack的externals功能
window.React = React
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM

const { BrowserRouter } = ReactRouterDOM

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)