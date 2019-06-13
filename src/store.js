import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: [
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 1, price: 30.01 },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 2, price: 33.00 },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 3, price: 130.21 },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 4, price: 1130.32 }
    ],
    isLogin: false
  },
  mutations: {
    set_cartlist (state, n) {
      state.cartlist = n
    },
    set_login (state, n) {
      console.log(n)
      state.isLogin = n
    }
  },
  actions: {

  }
})
