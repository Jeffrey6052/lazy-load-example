
import loadjs from "loadjs"

// 存储已经加载的代码库
const Packages = {}

const getPackage = (scriptUrl) => {
  return Packages[scriptUrl]
}

const setPackage = (scriptUrl, module) => {
  // console.log("! load", scriptUrl, module)
  Packages[scriptUrl] = module
}

const importPackage = (scriptUrl, callback) => {
  const pkg = getPackage(scriptUrl)
  if (pkg) {
    callback(pkg)
  } else {
    loadjs([scriptUrl], () => {
      const pkg = getPackage(scriptUrl)
      callback(pkg)
    })
  }
}

const JowoPkg = {
  get: getPackage,
  set: setPackage,
  import: importPackage
}

window.JowoPkg = JowoPkg