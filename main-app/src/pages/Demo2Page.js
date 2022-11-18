
import { useState, useLayoutEffect } from "react"
import loadjs from "loadjs"

import { emptyFunction } from "@/utils"

// 异步加载页面
const AboutPage = (props) => {

  const [componentsLoaded, setComponentsLoaded] = useState(false)
  const [components, setComponents] = useState({})

  useLayoutEffect(() => {
    window.JowoPkg.import("http://localhost:5000/dist/main.js", (pkg) => {
      pkg.importAllComponents().then((components) => {
        setComponents(components)
        setComponentsLoaded(true)
      })
    })

    return emptyFunction
  }, [])

  // console.log("components", components)

  const renderComponents = () => {

    if (!componentsLoaded) return null

    const { Background, Icon } = components

    return (
      <div>
        <div style={{ marginTop: 10 }}>
          <Background backgroundColor={"red"} />
        </div>

        <div style={{ marginTop: 10 }}>
          <Icon type={"SettingFilled"} linkTo={"/editor?x=1"} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>动态加载远程代码模块</h2>
      {renderComponents()}
    </div>
  )
}

export default AboutPage
