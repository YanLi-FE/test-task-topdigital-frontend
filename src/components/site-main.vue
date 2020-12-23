<template>
  <main class="main-section">
    <div class="main-section__width-container">
      <h1 class="main-section__heading">Картины эпохи Возрождения</h1>
      <div class="main-section__paintings" v-if="!isLoading">
        <painting v-for="(elem, i) in paintings" :painting="elem" :key="elem.title + elem.author + i"/>
      </div>
      <div class="main-section__loading" v-else>
        Загрузка...
      </div>
    </div>
  </main>
</template>

<script>
import Painting from "@/components/painting";
import {mapState} from 'vuex';

export default {
  name: "site-main",
  components: {Painting},
  computed: mapState(['paintings']),
  data: () => ({
    isLoading: false,
  }),
  async created() {
    this.isLoading = true;
    await this.$store.dispatch('GET_PAINTINGS');
    this.isLoading = false;
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
