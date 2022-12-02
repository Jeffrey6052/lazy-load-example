// 所有组件代码打包在同一个文件中, 该文件仅在Webpack打包流程中会使用到

import allComponentNames from "../index"

const allPackComponents = {}

allComponentNames.forEach((name) => {

  let _module

  try {
    _module = require('../components/' + name + '/index.js')
  } catch (error) {
    console.error(`component "${name}" not found`)
  }

  if (!_module) return
  allPackComponents[name] = _module.default
})

export default allPackComponents
