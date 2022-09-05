<template>
  <div class="colors-cart-item">
    <div class="colors-cart-item__info">
      <img
          :src=" require( '../assets/images/' + cart_item_data.image) "
          class="colors-cart-item__info-img"
          alt="Product"
      >
      <div class="colors-cart-item__info-text">
        <p class="colors-cart-item__name">{{ cart_item_data.name }}</p>
        <p class="colors-cart-item__price colors-catalog-item__price">{{ cart_item_data.price }} ₽</p>
      </div>
    </div>
    <div class="colors-cart-item__quantity quantity">
      <span class="quantity__btns">
        <div class="quantity__btn" @click="decrementItem">-</div>
        {{ cart_item_data.quantity }}
        <div class="quantity__btn" @click="incrementItem">+</div>
      </span>

    </div>
    <button class="colors-cart-item__btn"
            @click="deleteFromCart"
    ></button>
  </div>
</template>

<script>


export default {
  name: "colors-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style scoped lang="scss">

.colors-cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__info {
    display: flex;
    align-items: center;
  }

  &__info-img {
    width: 96px;
    height: 96px;
  }

  &__info-text {
    margin: 0 0 0 8px;
  }

  &__name {
    margin: 0 0 16px 0;
  }

  &__price {
    margin: 0;
  }

  &__btn {
    background-image: url("../assets/images/close.svg");
    background-color: #ffffff;
    width: 25px;
    height: 25px;
    opacity: 0.2;
    cursor: pointer;
  }

  &__btn:hover {
    opacity: 1;
  }
}

.quantity {
  text-align: center;

  &__btns {
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 40px;
    height: 24px;
    background: #F2F2F2;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 21px 0 21px;
  }

}

@media screen and (max-width: 550px) {
  .colors-cart-item__name {
    font-size: 14px;
  }
  .quantity__btn {
    margin: 0 10px 0 10px;
  }
  .colors-cart-item {
    padding: 0 0 20px 0;
  }
}
</style>