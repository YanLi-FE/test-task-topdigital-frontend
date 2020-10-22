<template>
  <main class="main-section">
    <div class="main-section__width-container">
      <h1 class="main-section__heading">Картины эпохи Возрождения</h1>
      <div class="main-section__paintings">
        <painting v-for="elem in data" :painting="elem" :key="elem.title + elem.author"/>
      </div>
    </div>
  </main>
</template>

<script>
import Painting from "@/components/painting";
const data = require('@/assets/data.json');
export default {
  name: "site-main",
  components: {Painting},
  data() {
    return {
      data,
    };
  },
}
</script>

<style lang="scss">
@use "../assets/variables";
@use "../assets/mixins";

.main-section {
  min-height: calc(100vh - #{variables.$header-height} - #{variables.$footer-height});

  &__width-container {
    @include variables.width-container;
  }

  &__heading {
    @include mixins.h1;
    padding: 45px 0 39px 0;
  }
  &__paintings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -(variables.$painting-margin-top);
  }
}
</style>
