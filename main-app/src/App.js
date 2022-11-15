import * as React from "react"
import { Routes, Route } from "react-router-dom"

import './App.css'

import Layout from "./common/Layout"
import IndexPage from "./pages/IndexPage"
import { loadingElement } from "@/utils"

const AboutPage = React.lazy(() => import("./pages/AboutPage"))
const EditorPage = React.lazy(() => import("./pages/EditorPage"))

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />

          <Route
            path="/about"
            element={(
              <React.Suspense fallback={loadingElement} >
                <AboutPage />
              </React.Suspense>
            )}
          />

          <Route
            path="/editor"
            element={(
              <React.Suspense fallback={loadingElement} >
                <EditorPage />
              </React.Suspense>
            )}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
