<template>
  <header class="header">
    <div class="header__width-container">
      <div class="header__left-part">
        <img src="../assets/images/logo.png" alt="logo">
        <a href="#" class="header__link">Каталог</a>
        <a href="#" class="header__link">Доставка</a>
        <a href="#" class="header__link">Оплата</a>
        <a href="#" class="header__link">Контакты</a>
        <a href="#" class="header__link">О галерее</a>
      </div>
      <div class="header__right-part">
        <input type="text" placeholder="Поиск по названию картины" class="header__search-field">
        <button type="button" class="header__search-button">Найти</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "site-header",
}
</script>

<style lang="scss">
@use "../assets/variables";

.header {
  height: variables.$header-height;
  border-bottom: variables.$header-border-bottom;

  &__width-container {
    @include variables.width-container;
    display: flex;
    justify-content: space-between;
  }

  &__left-part, &__right-part {
    display: flex;
    align-items: center;
    height: variables.$header-height;
  }

  &__link {
    height: 100%;
    margin-left: 48px;
    display: flex;
    align-items: center;
    color: variables.$text-color;
    text-decoration: none;
    font-size: 14px;
  }

  &__search-field {
    width: 304px;
    height: 48px;
    font-family: "#{variables.$font-family}", variables.$font-family-fallback;
    font-size: 14px;
    border: 1px solid variables.$search-border-color-inactive;
    border-right: none;
    padding: 0 16px;
    color: variables.$search-text-color-placeholder;
    background-color: transparent;

    &:focus {
      border: 1px solid variables.$search-border-color-active;
      border-right: none;
    }

    &:not(:placeholder-shown) {
      color: variables.$search-text-color;
    }
  }
  &__search-button {
    @include variables.button
  }
}
</style>
