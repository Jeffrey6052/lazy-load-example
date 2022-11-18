
import { useState, useEffect } from "react"

import { importAllComponents, importMultiComponents } from "./utils"

import './App.css'

function App() {

  const [componentsLoaded, setComponentsLoaded] = useState(false)
  const [components, setComponents] = useState({})

  useEffect(() => {
    // importMultiComponents(["Background", "Icon"])
    importAllComponents().then((components) => {
      setComponents(components)
      setComponentsLoaded(true)
    })
  }, [])

  if (!componentsLoaded) return "组件加载中..."

  const { Background, Icon } = components

  return (
    <div className="App">
      <h1>组件开发 DEMO</h1>

      <div style={{ marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
        <h3>组件: Background</h3>
        <div style={{ marginTop: 10 }}>
          <Background backgroundColor={"#ffcc00"} />
        </div>
      </div>

      <div style={{ marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
        <h3>组件: Icon</h3>
        <div style={{ marginTop: 10 }}>
          <Icon type={"LinkOutlined"} linkTo="/abc" />
        </div>
      </div>
    </div>
  );
}

export default App;
