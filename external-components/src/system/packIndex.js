// 打包的主文件

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
  importAllComponents
}

// JowoPkg接入，模拟jsonp方式进行动态代码模块加载
if (window.JowoPkg) {
  const currentScript = document.currentScript
  const currentScriptUrl = currentScript.getAttribute('src')
  window.JowoPkg.set(currentScriptUrl, packOutput)
}
