<template>
  <header class="header">
    <div class="header__container">
      <div
          class="header__icon-menu"
          v-bind:class="{ active: isActive }"
          @click="getClassActive"
      >
        <span></span>
      </div>
      <router-link to="/" class="header__logo">
        <img src="@/assets/images/logo.svg" alt="LOGO" class="header__logo-img">
      </router-link>
      <div class="header__menu menu">
        <nav class="menu__body"
             v-bind:class="{ active: isActive }"
        >
          <ul class="menu__list">
            <li class="menu__item"><a href="javascript://" class="menu__link">ПРОДУКТЫ</a></li>
            <li class="menu__item"><a href="javascript://" class="menu__link">ЦВЕТА</a></li>
            <li class="menu__item"><a href="javascript://" class="menu__link">ВДОХНОВЕНИЕ</a></li>
            <li class="menu__item"><a href="javascript://" class="menu__link">СОВЕТЫ</a></li>
            <li class="menu__item"><a href="javascript://" class="menu__link">НАЙТИ МАГАЗИН</a></li>
          </ul>
        </nav>
      </div>
      <div class="header__contacts contacts"
           v-bind:class="{ active: isActive }"
      >
        <div class="contacts__number-phone">+7 (495) 221-77-69</div>
        <a href="javascript://" class="contacts__call">Заказать звонок</a>
      </div>
      <div class="header__icons icons">
        <div class="icons__wrapper"
             v-bind:class="{ active: isActive }"
        >
          <div class="icons__search">
            <img src="@/assets/images/search.svg" alt="Search" class="header__search">
          </div>
          <div class="icons__profile">
            <img src="@/assets/images/profile.svg" alt="Profile" class="header__profile">
          </div>
          <div class="icons__heart">
            <img src="@/assets/images/heart.svg" alt="Heart" class="header__heart">
          </div>
        </div>
        <div
            class="icons__cart"
            @click="showCart"
        >
          {{ CART.length }}
        </div>
        <colors-cart
            v-show="isCartVisible"
            @close="closeCart"
            :cart_data="CART"
        />
      </div>
    </div>
  </header>
</template>

<script>

import {mapGetters} from 'vuex';
import ColorsCart from "@/components/colors-cart";

export default {
  name: "colors-header",
  components: {ColorsCart},
  data() {
    return {
      isActive: false,
      isCartVisible: false,
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {
    getClassActive() {
      this.isActive = !this.isActive;
      document.body.classList.toggle('active');
    },
    showCart() {
      this.isCartVisible = true;
    },
    closeCart() {
      this.isCartVisible = false;
    }
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;

  &__container {
    position: relative;
    display: flex;
    min-height: 104px;
    align-items: center;
  }

  &__logo {
    position: relative;
    z-index: 5;
  }

  &__menu {
    flex: 1 1 auto;
  }
}

.menu {
  display: flex;
  justify-content: center;

  &__list {
    position: relative;
    display: flex;
  }

  &__item:not(:last-child) {
    margin: 0 24px 0 0;
  }

  &__link {
    font-size: 14px;
    color: #1F2020;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    letter-spacing: 0.06em;
    line-height: 1;
    text-transform: uppercase;
  }

  &__link:hover {
    text-decoration: underline;
  }
}

.contacts {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 80px 0 0;

  &__number-phone {
    font-size: 16px;
    font-weight: 500;
    color: #1F2020;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  &__call {
    font-size: 14px;
    font-weight: 400;
    color: #1F2020;
    opacity: 0.3;
    line-height: 1;
  }

}

.icons {
  display: flex;

  &__wrapper {
    display: flex;
  }

  &__search {
    margin: 0 26px 0 0;
    cursor: pointer;
  }

  &__profile {
    margin: 0 26px 0 0;
    cursor: pointer;
  }

  &__heart {
    margin: 0 26px 0 0;
    cursor: pointer;
  }

  &__cart {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1F2020;
    background-color: #7BB899;
    border-radius: 50%;
    padding: 5px 9px;
    cursor: pointer;
    z-index: 5;
  }
}

/*-------------------------burger + menu---------------------------*/

.header__icon-menu {
  display: none;
}

@media screen and (max-width: 992px) {
  .header__icon-menu {
    display: flex;
    position: relative;
    flex: 0 0 24px;
    height: 14px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 90px 0 9px;
  }

  .menu__body {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    padding: 130px 15px 30px 50px;
    transition: left 0.3s ease 0s;
    overflow: auto;
  }
  .header__contacts {
    position: fixed;
    top: 50%;
    left: -150%;
    width: 100%;
    height: 100%;
    transition: left 0.3s ease 0s;
    overflow: auto;
    padding: 30px 0 0 50px;
    align-items: flex-start;
  }

  .icons__wrapper {
    position: fixed;
    top: 70%;
    left: -150%;
    width: 100%;
    height: 100%;
    transition: left 0.3s ease 0s;
    overflow: auto;
    padding: 0 0 0 50px;
  }

  .menu__body.active {
    left: 0;
    z-index: 2
  }

  .header__contacts.active {
    left: 0;
    top: 50%;
    z-index: 2
  }

  .contacts__call {
    display: none;
  }

  .icons__wrapper.active {
    left: 0;
    top: 70%;
    z-index: 2
  }

  .menu__list {
    flex-direction: column;
  }

  .header__icon-menu::before, .header__icon-menu::after {
    content: "";
    background-color: #1F2020;
    height: 2px;
  }

  .header__icon-menu span {
    background-color: #1F2020;
    height: 2px;
  }

  .header__icon-menu.active {
    justify-content: center;
    z-index: 5;
  }

  .header__icon-menu.active::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: rotate(45deg);
    background-color: #1F2020
  }

  .header__icon-menu.active::after {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: rotate(-45deg);
    background-color: #1F2020
  }

  .header__icon-menu.active span {
    opacity: 0;
  }

  body.active {
    overflow: hidden;
  }

}

/*-------------------------burger + menu---------------------------*/

@media screen and (max-width: 1140px) {
  .header__contacts {
    margin: 0 15px 0 0;
  }

  .header__logo-img {
    width: 90px;
    height: 20px;
  }

  .contacts__number-phone {
    font-size: 14px;
  }

  .icons__search, .icons__profile, .icons__heart {
    margin: 0 16px 0 0;
  }
}


</style>