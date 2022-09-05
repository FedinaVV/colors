<template>
  <div class="colors-catalog__sorting-product sorting-product">
    <div class="sorting-product__selected"
         @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </div>
    <div class="sorting-product__options-wrapper"
         v-if="areOptionsVisible"
    >
      <div class="sorting-product__options"
           v-for="option in options"
           :key="option.value"
           @click="selectOption(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: "colors-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ])
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.areOptionsVisible = false;


      if (option.value === 1) {
        this.PRODUCTS = this.PRODUCTS.sort((a, b) => b.price - a.price);
      }
      if (option.value === 2) {
        this.PRODUCTS = this.PRODUCTS.sort((a, b) => a.price - b.price);
      }
      if (option.value === 3) {
        this.PRODUCTS = this.PRODUCTS.sort((a, b) => b.number_of_reviews - a.number_of_reviews);
      }
      if (option.value === 4) {
        this.PRODUCTS = this.PRODUCTS.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      }
    }
  }
}
</script>

<style lang="scss">

.sorting-product {
  position: relative;
  width: 280px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 45%;
    right: 28%;
    display: block;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #000000 transparent transparent transparent;
    z-index: 1;
    cursor: pointer;
  }

  &__options-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1;
  }

  &__selected {
    font-size: 12px;
    font-weight: 500;
    color: #1F2020;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.25;
  }

  &__options {
    font-size: 12px;
    font-weight: 500;
    color: #1F2020;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.25;
    padding: 17px 90px 16px 24px;
    background-color: #FFFFFF;
  }

  &__options:hover {
    background-color: #7BB899;
  }

}

</style>