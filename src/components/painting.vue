<template>
  <div class="painting-for-sale" :class="cardSoldClass">
    <img class="painting-for-sale__image" :src="painting.image">
    <div class="painting-for-sale__info-container">
      <div class="painting-for-sale__info-top">
        <h2 class="painting-for-sale__info-title">&laquo;{{ painting.title }}&raquo;</h2>
        <h2 class="painting-for-sale__info-author">{{ painting.author }}</h2>
      </div>
      <div class="painting-for-sale__info-bottom" v-if="!painting.sold">
        <div class="painting-for-sale__price-container">
          <div class="painting-for-sale__price-old" v-if="painting.oldPrice">{{ formattedOldPrice }} $</div>
          <div class="painting-for-sale__price">{{ formattedPrice }} $</div>
        </div>
        <button type="button" class="painting-for-sale__buy-button">Купить</button>
      </div>
      <div class="painting-for-sale__info-bottom painting-for-sale__info-bottom_sold" v-else>
        Продана на аукционе
      </div>
    </div>
  </div>
</template>

<script>
const numberFormatter = new Intl.NumberFormat('ru-RU', {
  useGrouping: true,
  maximumFractionDigits: 0,
});

export default {
  name: "painting",
  props: ['painting'],
  computed: {
    cardSoldClass() {
      return this.painting.sold ? 'painting-for-sale_sold' : '';
    },
    formattedPrice() {
      return numberFormatter.format(this.painting.price);
    },
    formattedOldPrice() {
      return numberFormatter.format(this.painting.oldPrice);
    },
  },
}
</script>

<style lang="scss">
@use "../assets/variables";

.painting-for-sale {
  width: variables.$painting-card-width;
  height: variables.$painting-card-height;
  border: 1px solid variables.$painting-border-color;
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 32px;
  }

  &__image {
    border-bottom: 1px solid variables.$painting-border-color;
  }

  &__info-container {
    padding: 24px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info-title, &__info-author {
    @include variables.h2;
  }

  &__price-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  &__price-old {
    @include variables.h6;
    text-decoration: line-through;
    color: variables.$painting-old-price-text-color;
  }

  &__info-bottom {
    display: flex;
    @include variables.h3;
    &_sold {
      padding-bottom: 12px;
    }
  }

  &__buy-button {
    @include variables.button;
  }

  &_sold {
    opacity: 0.5;
  }
}
</style>
