<template>
  <div class="painting-for-sale" :class="cardSoldClass">
    <img class="painting-for-sale__image" :src="painting.image" :alt="paintingAltText">
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
        <button type="button" class="painting-for-sale__buy-button" :class="isInCartButtonClass" @click="buy"
                :disabled="isLoading">
          <template v-if="isLoading">
            <loader size="36" stroke-width="3"/>
          </template>
          <template v-else-if="isInCart">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20" class="painting-for-sale__in-cart-checkmark">
              <path d="M16.5315 4.80937L7.63341 14.237L3.34814 10.1924" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            В корзине
          </template>
          <template v-else>Купить</template>
        </button>
      </div>
      <div class="painting-for-sale__info-bottom painting-for-sale__info-bottom_sold" v-else>
        Продана на аукционе
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/loader";

const axios = require('axios');

const numberFormatter = new Intl.NumberFormat('ru-RU', {
  useGrouping: true,
  maximumFractionDigits: 0,
});

function parseCart() {
  return localStorage.cart ? JSON.parse(localStorage.cart) : [];
}

export default {
  name: "painting",
  components: {Loader},
  props: ['painting'],
  computed: {
    paintingAltText() {
      return `Картина "${this.painting.title}" автора ${this.painting.author}`;
    },
    cardSoldClass() {
      return this.painting.sold ? 'painting-for-sale_sold' : '';
    },
    formattedPrice() {
      return numberFormatter.format(this.painting.price);
    },
    formattedOldPrice() {
      return numberFormatter.format(this.painting.oldPrice);
    },
    isInCartButtonClass() {
      return this.isInCart ? 'painting-for-sale__buy-button_in-cart' : '';
    },
  },
  data() {
    return {
      isLoading: false,
      isInCart: false,
    };
  },
  methods: {
    saveCart() {
      const cart = parseCart();
      cart.push(this.painting.id);
      localStorage.cart = JSON.stringify(cart);
    },
    buy() {
      this.isLoading = true;
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`, {
        // Forces a new request every time instead of using cache
        headers: {
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      })
          .then(() => {
            this.saveCart();
            this.isInCart = true;
          })
          .catch(() => {
          })
          .then(() => this.isLoading = false)
    },
  },
  created() {
    const cart = parseCart();
    if (cart.includes(this.painting.id)) {
      this.isInCart = true;
    }
  },
}
</script>

<style lang="scss">
@use "../assets/variables";
@use "../assets/mixins";

.painting-for-sale {
  width: variables.$painting-card-width;
  height: variables.$painting-card-height;
  border: 1px solid variables.$painting-border-color;
  display: flex;
  flex-direction: column;
  margin-top: variables.$painting-margin-top;

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
    @include mixins.h2;
  }

  &__price-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  &__price-old {
    @include mixins.h6;
    text-decoration: line-through;
    color: variables.$painting-old-price-text-color;
  }

  &__info-bottom {
    display: flex;
    @include mixins.h3;

    &_sold {
      padding-bottom: 12px;
    }
  }

  &__buy-button {
    @include mixins.button;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__in-cart-checkmark {
    margin-right: 7px;
  }

  &_sold {
    opacity: 0.5;
  }
}
</style>
