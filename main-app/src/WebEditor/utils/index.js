
// 登记组件
const Components = {
  "local.Input": () => import("@/WebEditor/components/Input"),
  "local.Text": () => import("@/WebEditor/components/Text"),
  "local.Image": () => import("@/WebEditor/components/Image")
}

export const loadLocalComponentModule = (componentKey) => {
  const loadFn = Components[componentKey]
  if (!loadFn) return null
  return loadFn.call()
}

// **** 本地代码库异步加载组件 ****
export const loadLocalComponentModule_old1 = (componentKey) => {

  if (componentKey === "local.Input") {
    return import("@/WebEditor/components/Input")
  } else if (componentKey === "local.Text") {
    return import("@/WebEditor/components/Text")
  } else if (componentKey === "local.Image") {
    return import("@/WebEditor/components/Image")
  } else {
    return null
  }
}

export const fetchLocalComponentsByKeyList = async (componentKeys) => {
  if (!componentKeys) return []
  if (!componentKeys.length) return []

  const componentModuleList = await Promise.all(componentKeys.map((componentKey) => {
    return loadLocalComponentModule(componentKey)
  }))

  // console.log("componentModuleList", componentModuleList)

  const components = {}
  componentKeys.forEach((componentKey, index) => {
    components[componentKey] = componentModuleList[index].default
  })

  // console.log("components", components)

  return components
}




// **** 从远程组件代码包中加载组件 ****

// 代码包信息，伪造接口数据
const RemotePackagesMockData = {
  "remote": {
    "fileUrl": "http://localhost:5011/build/components.js"
  }
}

// 组件信息，伪造接口数据
const RemoteComponentsMockData = {
  "remote.Input": {
    packageName: "remote",
    compnentName: "Input"
  },
  "remote.Text": {
    packageName: "remote",
    compnentName: "Text"
  },
  "remote.Image": {
    packageName: "remote",
    compnentName: "Image"
  }
}

// 组件代码包缓存，一个代码包中可以包含多个组件，代码包加载成功之后存储在这个对象中，防止反复加载
const RemotePackagesCache = {}

export const fetchRemotePackageByName = async (packageName) => {
  // 命中缓存直接返回
  const cachePackage = RemotePackagesCache[packageName]
  if (cachePackage) return cachePackage

  const packageInfo = RemotePackagesMockData[packageName]
  if (!packageInfo) return null

}

export const fetchRemotePackagesByNameList = async (packageNames) => {

}

// 组件缓存，组件加载成功之后存储在这个对象中, 防止反复加载
const RemoteComponentsCache = {

}

// 加载过的组件直接从缓存中返回
export const fetchRemoteComponentByKey = async (componentKey) => {

}

export const fetchRemoteComponentsByKeyList = async (componentKeys) => {
  const components = await Promise.all(componentKeys.map((componentKey) => {
    return fetchRemoteComponentByKey(componentKey)
  }))

  return components
}


