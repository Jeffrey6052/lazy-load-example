// 所有组件代码打包在同一个文件中, 该文件仅在打包流程中时使用

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

// console.log("allPackComponents", allPackComponents)

export default allPackComponents
