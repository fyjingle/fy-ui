<template>
  <div
    class="fy-avatar"
    :class="[
      size ? 'fy-avatar--' + size : '',
      color ? 'fy-avatar--' + color : ''
    ]"
  >
    <img
      v-if="url"
      :src="url"
    >
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'fy-avatar',

  props: {
    url: {
      type: String
    },
    size: {
      type: String,
      default: '' // small, (default), large
    },

    color: {
      type: String,
      default: '' // (default), primary, accent
    }
  }
}
</script>
