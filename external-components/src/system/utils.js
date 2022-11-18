
import pathUtils from "path-browserify"

import lodash from "lodash"

import allComponentNames from "@/index"

const componentImportFuntions = {}
allComponentNames.forEach((name) => {
  componentImportFuntions[name] = () => import(/* webpackChunkName: "[request]" */`../components/${name}`)
})

const $config = {
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

export const getAllComponentNames = () => {
  return allComponentNames
}

export const importOneComponent = async (name) => {
  const importFunction = componentImportFuntions[name]
  if (!importFunction) return null
  const _module = await importFunction.call()
  if (!_module) return null

  return _module.default
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

export const importAllComponents = async () => {
  return importMultiComponents(allComponentNames)
}

