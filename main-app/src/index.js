import React from "react"
import ReactDOM from 'react-dom/client'
import * as ReactRouterDOM from "react-router-dom"

import './index.css'
import App from './App'

import "@/system/JowoPkg"

// console.log("ReactRouterDOM", ReactRouterDOM)

// 共享基础库，后续将会由动态加载进来的组件共同使用, 利用webpack的externals功能
window.React = React
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM

const { BrowserRouter } = ReactRouterDOM

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)