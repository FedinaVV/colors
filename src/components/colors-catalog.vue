<template>
  <div class="colors-catalog">
    <div class="colors-catalog__sidebar sidebar"
         v-bind:class="{ active: isActive }"
    >
      <div class="sidebar__close-mobile" @click="closeSidebarMobile"></div>
      <div class="sidebar__wrapper">
        <ul class="sidebar__body">
          <li class="sidebar__item">
            <label class="sidebar__switch">
              <input type="checkbox"
                     v-model="filter.isNovelty"
                     @click="getFiltered"
              >
              <span class="sidebar__slider"></span>
            </label>
            <div class="sidebar__option">Новинки</div>
          </li>

          <li class="sidebar__item">
            <label class="sidebar__switch">
              <input
                  type="checkbox"
                  v-model="filter.isAvailable"
                  @click="getFiltered"
              >
              <span class="sidebar__slider"></span>
            </label>
            <div class="sidebar__option">Есть в наличии</div>
          </li>

          <li class="sidebar__item">
            <label class="sidebar__switch">
              <input
                  type="checkbox"
                  v-model="filter.isContract"
                  @click="getFiltered"
              >
              <span class="sidebar__slider"></span>
            </label>
            <div class="sidebar__option">Контрактные</div>
          </li>

          <li class="sidebar__item">
            <label class="sidebar__switch">
              <input
                  type="checkbox"
                  v-model="filter.isExclusive"
                  @click="getFiltered"
              >
              <span class="sidebar__slider"></span>
            </label>
            <div class="sidebar__option">Эксклюзивные</div>
          </li>

          <li class="sidebar__item">
            <label class="sidebar__switch">
              <input
                  type="checkbox"
                  v-model="filter.isDiscount"
                  @click="getFiltered"
              >
              <span class="sidebar__slider"></span>
            </label>
            <div class="sidebar__option">Распродажа</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="colors-catalog__wrapper-product">
      <div class="colors-catalog__heading-mobile">Краски</div>
      <div class="colors-catalog__info-product">
        <div class="colors-catalog__quantity-product">
          {{ PRODUCTS.length }} товаров
        </div>
        <div class="colors-catalog__filter" @click="getSidebarMobile">Фильтры</div>
        <div class="colors-catalog__discount" v-show="filter.isDiscount">Скидка 15%</div>
        <colors-select
            :options="options"
            @select="optionSelect"
            :selected="selected"
        />
      </div>
      <div class="colors-catalog__product">
        <colors-catalog-item
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>

import ColorsCatalogItem from './colors-catalog-item';
import {mapActions, mapGetters} from 'vuex';
import ColorsSelect from "@/components/colors-select";

export default {
  name: "colors-catalog",
  components: {
    ColorsSelect,
    ColorsCatalogItem
  },
  data() {
    return {
      filter: {
        isNovelty: false,
        isAvailable: false,
        isContract: false,
        isExclusive: false,
        isDiscount: false
      },
      options: [
        {name: 'сначала дорогие', value: 1},
        {name: 'сначала недорогие', value: 2},
        {name: 'сначала популярные', value: 3},
        {name: 'сначала новые', value: 4},
      ],
      selected: 'сначала дорогие',
      isActive: false
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    optionSelect(option) {
      this.selected = option.name
    },
    getFiltered() {
      this.GET_PRODUCTS_FROM_API(this.filter);
    },
    getSidebarMobile() {
      this.isActive = !this.isActive;
    },
    closeSidebarMobile() {
      this.isActive = false;
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped lang="scss">

.colors-catalog {
  display: flex;
  margin: 72px 0 147px 0;

  &__heading-mobile {
    display: none;
  }

  &__info-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 44px 0;
  }

  &__quantity-product {
    font-size: 12px;
    font-weight: 500;
    color: #1F2020;
    line-height: 1.21;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &__product {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__discount {
    font-size: 12px;
    font-weight: 600;
    color: #ff0000;
    line-height: 1.21;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: #ffff00;
    padding: 6px 25px;
    margin: 0 25px;
  }

  &__filter {
    display: none;
  }
}

/*-------------------------switch------------------------*/

.sidebar {
  &__switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 22px;
  }

  &__switch input {
    display: none;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    background-color: #F2F2F2;
    -webkit-transition: .4s;
    transition: .4s;
  }

  &__slider:before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    left: 4px;
    bottom: 7px;
    border-radius: 40px;
    background-color: #1F2020;
    -webkit-transition: .4s;
    transition: .4s;
  }
}

input:checked + .sidebar__slider {
  background-color: #7BB899;
}

input:focus + .sidebar__slider {
  box-shadow: 0 0 1px #7BB899;
}

input:checked + .sidebar__slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/*-------------------------switch------------------------*/

.sidebar {

  &__close-mobile {
    display: none;
  }

  &__wrapper {
    margin: 0 138px 0 0;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__item:not(:last-child) {
    margin-bottom: 10px;
  }

  &__option {
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1F2020;
    margin: 0 0 0 12px;
    white-space: nowrap;
  }
}


@media screen and (max-width: 768px) {

  .sidebar__wrapper {
    margin: 0;
  }

  .colors-catalog__heading-mobile {
    display: block;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: #1F2020;
    line-height: 0.88;
    margin: 0 0 48px 0
  }

  .colors-catalog {
    margin: 0;
  }

  .colors-catalog__wrapper-product {
    margin: 178px 24px 64px 24px;
  }

  .colors-catalog__sidebar {
    position: fixed;
    right: 0;
    bottom: -100%;
    width: 100%;
    height: 80%;
    background-color: #d1d1d1;
    border-radius: 24px 24px 0 0;
    padding: 59px 24px 114px 24px;
    transition: bottom 0.3s ease 0s;
    overflow: auto;
  }

  .colors-catalog__sidebar.active {
    bottom: 0;
    z-index: 2;
  }

  .sidebar__close-mobile {
    display: block;
    position: absolute;
    top: 12px;
    left: 50%;
    width: 28px;
    height: 4px;
    background: #1F2020;
    opacity: 0.6;
    border-radius: 40px;
    z-index: 10;
  }

  .colors-catalog__quantity-product {
    display: none;
  }

  .colors-catalog__filter {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #1F2020;
    line-height: 1.25;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0 50px 0 0;
  }
}


</style>