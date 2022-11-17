// 打包的主文件
import components from "@/index"

import {
  getConfig,
  updateConfig,
} from "./utils"


const packOutput = {
  components,
  getConfig,
  updateConfig
}

// JowoPkg接入，模拟jsonp方式进行动态代码模块加载
if (window.JowoPkg) {
  const currentScript = document.currentScript
  const currentScriptUrl = currentScript.getAttribute('src')
  window.JowoPkg.set(currentScriptUrl, packOutput)
}


