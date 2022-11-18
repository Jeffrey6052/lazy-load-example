
// 异步加载页面 + 异步加载组件

import WebEditor from "@/WebEditor"

const EditorPage = (props) => {

  // console.log("rendering EditorPage")

  return (
    <div>
      <h2>动态异步加载本地代码模块</h2>
      <div style={{ marginTop: 20 }}>
        <WebEditor />
      </div>
    </div>
  )
}

export default EditorPage