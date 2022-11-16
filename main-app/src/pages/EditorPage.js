
// 异步加载页面 + 异步加载组件

import WebEditor from "@/WebEditor"

const EditorPage = (props) => {

  // console.log("rendering EditorPage")

  return (
    <div>
      <p>This is Editor Page.</p>
      <div style={{ marginTop: 20 }}>
        <WebEditor />
      </div>
    </div>
  )
}

export default EditorPage