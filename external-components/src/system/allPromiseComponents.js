// 所有组件代码打包在同一个文件中, 但组件是个Promise对象，需要异步获取

import allComponentNames from "../index"

const allPromiseComponents = {}
allComponentNames.forEach((name) => {
  const eagerComponent = import(/* webpackMode: "eager" */`../components/${name}`)
  allPromiseComponents[name] = eagerComponent
})

// console.log("allPromiseComponents", allPromiseComponents)

export default allPromiseComponents





