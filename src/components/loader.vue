<template>
  <div class="loader">
    <div class="loader__filler"></div>
    <div class="loader__bar" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "loader",
  props: {
    size: {
      type: String,
      default: '6px',
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    style() {
      return `height: ${this.size}; background-color: ${this.color};`
    },
  },
}
</script>

<style lang="scss">
.loader {
  width: 100%;
  transform-origin: left;
  animation: loader__animation 1s ease-in-out infinite;
}

@keyframes loader__animation {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  49.99% {
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
