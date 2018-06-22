<template>
  <button
    class="fy-button"
    :class="[
      'fy-button--' + type,
      disabled ? 'fy-button--disabled' : '',
    ]"
  >
    <slot></slot>
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
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
