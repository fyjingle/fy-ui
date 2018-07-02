<template>
  <button
    class="fy-button"
    :class="[
      'fy-button--' + type,
      color ? 'fy-button--' + color : '',
      disabled ? 'fy-button--disabled' : '',
    ]"
    @mousedown="test($event)"
  >
    <slot v-if="type !== 'float'"></slot>
  </button>
</template>

<script>
export default {
  name: 'fy-button',

  props: {
    type: {
      type: String,
      default: 'raised' // float, raised(default), flat
    },
    color: {
      type: String,
      default: '' // (default), primary, accent
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    test (e) {
      this.$ripple({
        el: this.$el,
        target: e
      })
    }
  }
}
</script>

<style>

</style>
