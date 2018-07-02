<template>
  <div class="fy-avatar"><slot></slot></div>
</template>

<script>
export default {
  name: 'fy-avatar',

  props: {
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
