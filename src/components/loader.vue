<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size" class="loader">
    <circle :r="radius" cx="12" cy="12" fill="transparent" :stroke="strokeColor" :stroke-width="strokeWidth" class="loader__circle"/>
  </svg>
</template>

<script>
export default {
  name: "loader",
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    strokeWidth: {
      type: [Number, String],
      default: 1,
    },
    strokeColor: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    radius() {
      return 12 - this.strokeWidth;
    },
  },
}
</script>

<style lang="scss">
.loader {
  transform-origin: center;
  transform: rotateZ(-90deg);

  &__circle {
    stroke-dasharray: 56.553;
    stroke-dashoffset: 56.553;
    animation: loader__circle 1500ms ease-in-out infinite;
  }
}

@keyframes loader__circle {
  to {
    stroke-dashoffset: -56.447;
  }
}
</style>
