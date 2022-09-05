import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        CLEAR_FROM_CART: (state) => {
            state.cart = [];
        }

    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}, filter) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    if (filter) {
                        if (filter.isAvailable) {
                            products.data = products.data.filter(product => {
                                return product.number_of_items > 0;
                            })
                        }
                        if (filter.isContract) {
                            products.data = products.data.filter(product => {
                                return product.contract;
                            })
                        }
                        if (filter.isExclusive) {
                            products.data = products.data.filter(product => {
                                return product.exclusive;
                            })
                        }
                        if (filter.isDiscount) {
                            products.data = products.data.filter(product => {
                                return product.discount > 0;
                            })
                        }
                        if (filter.isNovelty) {
                            let novetly = new Date().getTime() - 2678400000;
                            products.data = products.data.filter(product => {
                                let date = new Date()
                                console.log(date);

                                return Date.parse(product.date) > novetly;
                            })
                        }
                    }
                    products.data = products.data.sort((a, b) => b.price - a.price);
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                });
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        CLEAR_CART({commit}){
            commit('CLEAR_FROM_CART')
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;