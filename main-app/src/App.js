import React from "react"
import { Routes, Route } from "react-router-dom"

import './App.css'

import Layout from "./common/Layout"
import IndexPage from "./pages/IndexPage"
import { loadingElement } from "@/utils"

const Demo1Page = React.lazy(() => import("./pages/Demo1Page"))
const Demo2Page = React.lazy(() => import("./pages/Demo2Page"))

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />

          <Route
            path="/demo1"
            element={(
              <React.Suspense fallback={loadingElement} >
                <Demo1Page />
              </React.Suspense>
            )}
          />

          <Route
            path="/demo2"
            element={(
              <React.Suspense fallback={loadingElement} >
                <Demo2Page />
              </React.Suspense>
            )}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
