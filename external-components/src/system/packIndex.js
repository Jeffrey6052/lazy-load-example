
import {
  getConfig,
  updateConfig,
  getAllComponentNames,
  importOneComponent,
  importMultiComponents,
  importAllComponents
} from "./utils"

const packOutput = {
  getConfig,
  updateConfig,
  getAllComponentNames,
  importOneComponent,
  importMultiComponents,
  importAllComponents,
  default: {} // 兼容旧版格式（仅结构兼容，让前端运行不出错，实际并不能加载到组件）
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