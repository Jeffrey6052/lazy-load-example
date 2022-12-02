
<template>
  <div className="root" :style="rootStyle">
    <span className="text" :style="textStyle">{{ $attrs.content }}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  computed: {
    rootStyle() {
      const result = {
        width: `${this.$attrs.$width}px`,
        height: this._autoHeightActive ? "auto" : `${this.$attrs.$height}px`,
        overflow: this.overflow,
        minHeight: this._autoHeightActive && this.$attrs.minHeightActive && this.$attrs.minHeight,
        maxHeight: this._autoHeightActive && this.$attrs.maxHeightActive && this.$attrs.maxHeight
      }
      return result
    },
    textStyle() {
      const result = {
        overflow: this.overflow,
        textOverflow: this.ellipsis,
        whiteSpace: this.space,
        fontSize: `${this.$attrs.fontSize}px`,
        color: tinycolor(this.$attrs.fontColor).toString()
      }
      return result
    },
    _autoHeightActive() {
      return this.$attrs.$autoHeightEnabled && this.$attrs.autoHeightActive
    },
    space() {
      return this.$attrs.spaceEnable ? "initial" : "nowrap"
    },
    ellipsis() {
      return this.$attrs.textOverflowEnable ? 'ellipsis' : 'initial'
    },
    overflow() {
      let overflow = "initial"
      if (this.$attrs.textOverflowEnable || this.$attrs.$mode === "edit") {
        overflow = "hidden"
      }
      return overflow
    }
  }
}
</script>

<style scoped>
.root {
  position: relative;
}

.text {
  display: inline-block;
  width: 100%;
}
</style>