
import loadjs from "loadjs"

// 异步加载页面
const AboutPage = (props) => {

  loadjs([
    "https://cdn.bootcdn.net/ajax/libs/axios/0.24.0/axios.js",
    "https://momentjs.com/downloads/moment.min.js"
  ], () => {
    console.log("loadjs finish!")
    console.log("axios", window.axios)
    console.log("moment", window.moment)
  })

  return (
    <div>
      <p>This is About Page.</p>
    </div>
  )
}

export default AboutPage
