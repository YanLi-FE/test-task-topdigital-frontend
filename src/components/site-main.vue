<template>
  <main class="main-section">
    <div class="main-section__width-container">
      <h1 class="main-section__heading">Картины эпохи Возрождения</h1>
      <div class="main-section__paintings">
        <painting v-for="(elem, i) in data" :painting="elem" :key="elem.title + elem.author + i"/>
      </div>
    </div>
  </main>
</template>

<script>
import Painting from "@/components/painting";
const data = require('@/assets/data.json');

// because IE doesn't work well with grid
// this adds invisible data entries to fill the last row
while(data.length % 4 !== 0) {
  const copy = {};
  for(const key in data[0]) {
    copy[key] = data[0][key];
  }
  copy.invisible = true;
  data.push(copy);
}
// /IE

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
    margin-bottom: variables.$main-section-padding-bottom;
  }

  &__heading {
    @include mixins.h1;
    padding: 45px 0 39px 0;
  }
  &__paintings {
    /** would prefer to use grid if not for IE */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
