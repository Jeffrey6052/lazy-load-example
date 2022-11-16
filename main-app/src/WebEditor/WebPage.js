// 具体页面，页面内容是动态的，内部的组件是动态加载的，需要提前汇总依赖项

import { useState, useEffect } from "react"

import { renderLoading } from "@/utils"

import { fetchLocalComponentsByKeyList } from "@/WebEditor/utils"

const WebPage = (props) => {

  const { pageData } = props

  const [dependenciesLoaded, setDependenciesLoaded] = useState(false)
  const [dependentComponents, setDependentComponents] = useState({})

  useEffect(() => {
    const asyncFn = async () => {
      // console.log("dependencies", props.dependencies)

      const dependentComponents = await fetchLocalComponentsByKeyList(props.dependencies)
      // console.log("dependentComponents", dependentComponents)

      setDependenciesLoaded(true)
      setDependentComponents(dependentComponents)
    }

    asyncFn()

    return () => { }
  }, [setDependenciesLoaded])

  if (!dependenciesLoaded) return renderLoading()

  const renderMesh = (mesh) => {
    const Component = dependentComponents[mesh.componentKey]

    if (!Component) return (
      <span style={{ color: "red" }}>组件加载失败, componentKey = {mesh.componentKey}</span>
    )

    return (
      <Component {...mesh.properties} />
    )
  }

  const renderPageContent = (pageData) => {
    return (
      <div style={{ padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
        {pageData.meshes.map((mesh) => {
          return (
            <div style={{ marginBottom: 10 }} key={mesh.id}>
              {renderMesh(mesh)}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div style={{ padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
      <h2>{pageData.title}</h2>
      <div style={{ marginTop: 10 }}>
        {renderPageContent(pageData)}
      </div>
    </div>
  )
}

export default WebPage