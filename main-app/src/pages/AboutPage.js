
import { useState, useLayoutEffect } from "react"
import loadjs from "loadjs"

import { emptyFunction } from "@/utils"

// 异步加载页面
const AboutPage = (props) => {

  const [pkg, setPkg] = useState(null)

  useLayoutEffect(() => {
    window.JowoPkg.import("http://localhost:5000/dist/main.js", (pkg) => {
      setPkg(pkg)
    })

    return emptyFunction
  }, [])

  const renderPkgComponents = () => {
    if (!pkg) return null

    const { Background, Icon } = pkg.components

    // console.log("Background", Background)
    // console.log("Icon", Icon)

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
      <p>This is About Page.</p>

      {renderPkgComponents()}
    </div>
  )
}

export default AboutPage
