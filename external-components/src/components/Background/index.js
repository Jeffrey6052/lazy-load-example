import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const MyBackground = (props) => {

  const [name, setName] = useState("nameDefault")

  useEffect(() => {
    window.setTimeout(() => {
      setName("nameChanged!")
    }, 2000)
  }, [])

  // 测试ReactDOM.createPortal
  const renderNameInPortal = () => {
    const jsxElement = <span>{name}</span>
    const domNode = document.querySelector("#root2")
    if (!domNode) return null
    return createPortal(jsxElement, domNode)
  }

  const style = {
    width: 200,
    height: 80,
    backgroundColor: props.backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div style={style}>{renderNameInPortal()}</div>
  )

}

export default MyBackground