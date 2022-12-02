
<template>
  <div className="root" :style="rootStyle">
    <input className="input" :value="value" :placeholder="$attrs.placeholder"
      @input="e => updateValue(e.target.value)" />
  </div>
</template>

<script>

import lodash from "lodash"

import { DebounceUpdater } from "@/system/utils"

const defaultValueDebounceUpdater = new DebounceUpdater()

export default {
  inheritAttrs: false,
  data() {
    return {
      value: this.$attrs.defaultValue || ""
    }
  },
  beforeMount() {
    // 首次加载过程中，同步组件值
    this.reportVariables()
  },
  computed: {
    rootStyle() {
      const result = {
        width: `${this.$attrs.$width}px`,
        height: `${this.$attrs.$height}px`
      }
      return result
    },
    defaultValue() {
      return this.$attrs.defaultValue || ""
    }
  },
  watch: {
    defaultValue(newDefaultValue, oldDefaultValue) {
      // 将默认值同步到value状态里，使用DebounceUpdate包裹一层，可以防止在更新频率过快时可能出现的死循环
      defaultValueDebounceUpdater.run(() => {

        // 在值相同的情况下避免更新可以提升性能。请尽量使用isEqual方法来判断对象是否相等。
        if (lodash.isEqual(newDefaultValue, this.value)) return

        this.updateValue(newDefaultValue)
      })
    }
  },
  methods: {
    // 同步更新内部状态和组件值
    updateValue(value) {
      // 更新内部状态
      this.value = value

      // 汇报组件值
      this.reportVariables()
    },
    reportVariables() {
      this.$attrs.$setVariables({ value: this.value })
    }
  }
}
</script>

<style scoped>
.root {
  position: relative;
}

.input {
  display: block !important;
  width: 100%;
  height: 100%;
}
</style>