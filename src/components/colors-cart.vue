<template>
  <div class="colors-cart">
    <div class="colors-cart__background" role="dialog">
      <transition name="modal-fade">
        <div class="colors-cart__wrapper-total">
          <div class="colors-cart__heading">
            <h1 class="colors-cart__head">Корзина</h1>
            <div class="colors-cart__back-catalog"><img src="@/assets/images/close-cart.svg" alt="Close" @click="close">
            </div>
          </div>
          <div class="colors-cart__info-product">
            <div class="colors-cart__quantity-product">
              {{ cart_data.length }} товаров
            </div>
            <div class="colors-cart__clear" @click="clearCart">очистить список</div>
          </div>
          <div class="colors-cart__wrapper">
            <div class="colors-cart__wrapper-item">
              <colors-cart-item
                  v-for="(item, index) in cart_data"
                  :key="item.id"
                  :cart_item_data="item"
                  @deleteFromCart="deleteFromCart(index)"
                  @increment="increment(index)"
                  @decrement="decrement(index)"
              />
            </div>
            <div class="colors-cart__ordering"
                 v-show="cart_data.length"
            >
              <div class="colors-cart__total">
                Итого: {{ cartTotalCoast }} ₽
              </div>
              <div class="colors-cart__wrapper-btn-order">
                <a class="colors-cart__btn-order" href="javascript://">Оформить заказ</a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import ColorsCartItem from './colors-cart-item';
import {mapActions} from 'vuex';

export default {
  name: "colors-cart",
  components: {
    ColorsCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    cartTotalCoast() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result
      } else {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'CLEAR_CART'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);

    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    close() {
      this.$emit('close');
    },
    clearCart() {
      this.CLEAR_CART();
    }
  }
}
</script>

<style scoped lang="scss">

.colors-cart {
  &__background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 10;
  }

  &__wrapper-total {
    background-color: #FFFFFF;
    width: 600px;
    height: 100%;
    padding: 40px;
    overflow: scroll;
  }

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 94px 0;
  }

  &__info-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 0 12px 0;
    padding: 0 0 10px 0;
  }

  &__quantity-product {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.12;
    color: #1F2020;
  }

  &__clear {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.12;
    color: #1F2020;
    opacity: 0.4;
    cursor: pointer;
  }

  &__head {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -0.04em;
    color: #1F2020;
  }

  &__total {
    font-size: 20px;
    margin: 25px 0 0 0;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__wrapper-item {
    margin: 0 0 411px 0;
  }

  &__ordering {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn-order {
    font-weight: 500;
    font-size: 12px;
    color: #1F2020;
    padding: 20px 58px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: #7BB899;
    border-radius: 4px;
  }

  &__btn-order:hover {
    outline: 1px solid #7BB899;
    background-color: #ffffff;
  }

  &__back-catalog {
    cursor: pointer;
  }

}

@media screen and (max-width: 550px) {
  .colors-cart__wrapper-total {
    padding: 40px 25px;
  }

  .colors-cart__ordering{
    flex-direction: column;
  }

  .colors-cart__total{
    margin: 25px 0 35px 0;
  }
}

</style>