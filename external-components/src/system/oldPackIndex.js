
import allPackComponents from "./allPackComponents"

console.log("allPackComponents", allPackComponents)

import {
  getConfig,
  updateConfig,
} from "./utils"

// 旧版使用的是AMD格式, 组件是一次性全部加载
const packOutput = {
  getConfig,
  updateConfig,
  default: allPackComponents
}

// 支持Var, YongPkg, AMD方式加载
if (window) {
  if (window.YongPkg) {
    const currentScript = document.currentScript
    const currentScriptUrl = currentScript.getAttribute('src')
    window.YongPkg.set(currentScriptUrl, packOutput)
  }

  if (window.define && window.define.amd) {
    window.define(["React", "_", "antd", "tinycolor", "ReactDOM", "ReactRouterDOM", "moment", "echarts", "axios"], function () {
      return packOutput
    })
  }
}

export default packOutput