<template>
  <span
    v-if="show"
    :style="positionStyle"
    class="fy-ripple"
  ></span>
</template>

<script>
export default {
  name: 'ripple',

  data () {
    return {
      option: '',
      positionStyle: '',
      show: true
    }
  },

  created () {
    this.init()
    const self = this
    setTimeout(() => {
      self.show = false
    }, 500)
  },

  methods: {
    // 计算涟漪中心位置
    init () {
      const el = this.option.el
      const target = this.option.target
      const radius = Math.max(el.offsetWidth, el.offsetHeight)
      const x = target.layerX - radius / 2
      const y = target.layerY - radius / 2

      this.positionStyle = {
        left: x + 'px',
        top: y + 'px',
        width: radius + 'px',
        height: radius + 'px'
      }
    }
  }
}
</script>
