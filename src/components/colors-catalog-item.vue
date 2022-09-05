<template>
  <div class="colors-catalog-item">
    <div class="colors-catalog-item__wrapper">
      <div class="colors-catalog-item__img">
        <img :src=" require( '../assets/images/' + product_data.image) " alt="Product">
      </div>
      <p class="colors-catalog-item__name">{{ product_data.name }}</p>
      <div class="colors-catalog-item__wrapper-price">
        <p class="colors-catalog-item__price">{{ product_data.price }} ₽</p>
        <button class="colors-catalog-item__btn"
                @click="addToCart"
        >+
        </button>
        <button class="colors-catalog-item__btn-mobile"
                @click="addToCart"
        >+
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "colors-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  }
}
</script>

<style lang="scss">

.colors-catalog-item {
  margin-right: 19px;

  &__wrapper {
    position: relative;
    width: 278px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }

  &__img {
    margin: 0 0 16px 0;
  }

  &__img img {
    width: 100%;
  }

  &__name {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.12;
    letter-spacing: 0.02em;
    color: #1F2020;
    margin: 0 0 24px 0;
  }

  &__wrapper-price {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 1;
    color: #1F2020;
    margin: 0 0 22px 0;
  }

  &__btn {
    display: none;
    color: #1F2020;
    outline: none;
    font-size: 20px;
    background-color: #7BB899;
    border-radius: 8px;
    cursor: pointer;
    border: 0;
    width: 80px;
    height: 32px;
    font-weight: 600;
  }

  &__btn-mobile {
    display: none;
  }

}

.colors-catalog-item__wrapper:hover .colors-catalog-item__btn {
  display: block;
}

@media screen and (max-width: 768px) {

  .colors-catalog-item__wrapper-price {
    align-items: baseline;
  }
  .colors-catalog-item__wrapper:hover .colors-catalog-item__btn {
    display: none;
  }
  .colors-catalog-item__btn-mobile {
    display: block;
    color: #1F2020;
    outline: none;
    font-size: 18px;
    background-color: #F2F2F2;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    width: 40px;
    height: 24px;
  }
}

@media screen and (max-width: 425px) {
  .colors-catalog-item__wrapper {
    width: 150px;
  }
}

</style>