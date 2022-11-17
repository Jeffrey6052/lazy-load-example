
import pathUtils from "path-browserify"

import lodash from "lodash"

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


