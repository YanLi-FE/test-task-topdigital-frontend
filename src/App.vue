<template>
  <div id="app" class="app">
    <site-header />
    <site-main />
  </div>
</template>

<script>

import SiteHeader from "@/components/site-header";
import SiteMain from "@/components/site-main";
export default {
  name: 'App',
  components: {
    SiteMain,
    SiteHeader,
  }
}
</script>

<style lang="scss">
@use "assets/variables";
@import url('https://fonts.googleapis.com/css2?family=#{variables.$font-family}:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: variables.$background-color;
}
.app {
  font-family: "#{variables.$font-family}", variables.$font-family-fallback;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: variables.$text-color;
}
</style>
