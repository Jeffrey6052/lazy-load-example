
import lodash from "lodash"
import { applyVueInReact } from 'veaury'

import pathUtils from "path-browserify"

import allComponentNames from "../index"

const componentImportFuntions = {}
allComponentNames.forEach((name) => {
  componentImportFuntions[name] = () => import(/* webpackChunkName: "[request]" */`../components/${name}`)
})

const allPromiseComponentsImportFunction = () => import(/* webpackChunkName: "allPromiseComponents" */'./allPromiseComponents')

let $config = {
  baseUrl: ""
}

export const staticUrl = (path) => {
  return pathUtils.join($config.baseUrl, "static", path)
}

export const getConfig = () => {
  return $config
}

export const updateConfig = (newConfig) => {
  lodash.assign($config, newConfig)
}

// 预处理Vue组件
export const processVueComponent = (originData) => {
  const newData = {
    component: applyVueInReact(originData.component),
    specs: updateSpecsMetadata(originData.specs, { type: "vue" })
  }

  return newData
}

// 修改组件规格metadata
export const updateSpecsMetadata = (specs, changingData) => {

  const oldMetadata = specs.metadata || {}

  const newMetadata = {
    ...oldMetadata,
    ...changingData
  }

  const newSpecs = {
    ...specs,
    metadata: newMetadata
  }

  return newSpecs
}

// 组件包统一处理, 自动更新specs内的metadata信息
export const packComponents = (components) => {
  const newComponents = {}

  Object.entries(components).forEach(([key, item]) => {
    const newComponent = packOneComponentItem(item)
    if (!newComponent) return

    newComponents[key] = newComponent
  })

  return newComponents
}

const packOneComponentItem = (item) => {
  if (!item) return
  if (!item.component) return
  if (!item.specs) return

  const newComponent = {
    component: item.component,
    specs: _processComponentSpecs(item.specs)
  }

  return newComponent
}

// 组件规格版本号
const ComponentMetadataVersion = "2.0"

const DefaultComponentMetadata = {
  version: ComponentMetadataVersion,
  variablesRequired: false // 是否需要传递'$variables'参数，不传递这个参数可以提升性能
}

// 统一处理组件specs, 自动添加metadata信息
const _processComponentSpecs = (specs) => {

  const metadata = specs.metadata || {}

  // 克隆一份默认数据
  const defaultMetadata = lodash.cloneDeep(DefaultComponentMetadata)

  const newMetadata = {
    ...defaultMetadata,
    ...metadata
  }

  const newSpecs = {
    ...specs,
    metadata: newMetadata
  }

  return newSpecs
}


export const getAllComponentNames = () => {
  return allComponentNames
}

export const importOneComponent = async (name) => {
  const importFunction = componentImportFuntions[name]
  if (!importFunction) return null
  const _module = await importFunction.call()
  if (!_module) return null

  const componentItem = _module.default

  return packOneComponentItem(componentItem)
}

export const importMultiComponents = async (names) => {
  const components = {}
  if (!names) return components
  if (!names.length) return components

  const loadedComponents = await Promise.all(names.map((name) => importOneComponent(name)))

  names.forEach((name, index) => {
    components[name] = loadedComponents[index]
  })

  return components
}

// TODO 加载全部组件走另一个全量通道，避免请求数量过多
export const importAllComponents = async () => {
  const _module = await allPromiseComponentsImportFunction.call()

  const promiseComponents = _module.default

  // 汇总组件
  const components = {}

  const _moduleList = await Promise.all(Object.values(promiseComponents))

  Object.keys(promiseComponents).forEach((name, index) => {
    const _module = _moduleList[index]
    if (!_module) return
    if (!_module.default) return

    components[name] = _module.default
  })

  // console.log("components", components)

  return components
}

// 在异步事务执行速度过快的情况下，可能会导致出现死循环的情况。
// 这里将同一事件循环内的多个操作进行防抖处理，只保留最后一个操作。
export class DebounceUpdater {

  constructor() {
    this.frameRequestId = null
  }

  run(callback) {
    if (this.frameRequestId) {
      window.cancelAnimationFrame(this.frameRequestId)
    }

    this.frameRequestId = window.requestAnimationFrame(callback)
  }
}
