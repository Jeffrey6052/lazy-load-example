
// 编辑器，编辑器需要依赖组件，组件使用"动态加载"
import WebPage from "./WebPage"

const WebEditor = (props) => {

  const renderWebPage1 = () => {

    const dependencies = [
      "local.Text",
      "local.Input"
    ]

    const pageData = {
      title: "Page1",
      meshes: [
        {
          id: 1,
          componentKey: "local.Text",
          properties: {
            value: "文本111",
            color: "red"
          }
        },
        {
          id: 2,
          componentKey: "local.Text",
          properties: {
            value: "文本222",
            color: "green"
          }
        },
        {
          id: 3,
          componentKey: "local.Input",
          properties: {
            value: "Jeffrey"
          }
        }
      ]
    }

    return (
      <WebPage
        title="Page1"
        dependencies={dependencies}
        pageData={pageData}
      />
    )
  }

  const renderWebPage2 = () => {

    const dependencies = [
      "local.Image",
      "local.Input",
    ]

    const pageData = {
      title: "Page2",
      meshes: [
        {
          id: 1,
          componentKey: "local.Image",
          properties: {
            imageUrl: "/logo192.png",
          }
        },
        {
          id: 2,
          componentKey: "local.Input",
          properties: {
            value: "Hello"
          }
        }
      ]
    }

    return (
      <WebPage
        title="Page2"
        dependencies={dependencies}
        pageData={pageData}
      />
    )
  }

  return (
    <div style={{ padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
      <h2>WebEditor</h2>
      <div style={{ marginTop: 10 }}>
        {renderWebPage1()}
      </div>
      <div style={{ marginTop: 10 }}>
        {renderWebPage2()}
      </div>
    </div>
  )
}

export default WebEditor