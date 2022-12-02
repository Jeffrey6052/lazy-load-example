
const fs = require('fs')
const path = require('path')

const transformComponentsManifestJSON = (pathList) => {

  const componentKeys = []

  pathList.forEach((componentsPath) => {
    collectComponentKeysFromPath(componentsPath, componentKeys)
  })

  const result = {
    components: componentKeys,
    version: "v2"
  }

  console.log("result", result)

  const output = JSON.stringify(result, null, 4)
  return output
}

// 文件名就是组件标识
const collectComponentKeysFromPath = (componentsPath, collections) => {

  const components = fs.readdirSync(componentsPath, { withFileTypes: true })

  const fileNames = components.filter(c => c.isDirectory() && !fs.existsSync(path.join(componentsPath, `./${c.name}/dev`))).map(c => c.name)

  fileNames.forEach((fileName) => {
    const componentKey = fileName
    collections.push(componentKey)
  })
}

module.exports.transformComponentsManifestJSON = transformComponentsManifestJSON

