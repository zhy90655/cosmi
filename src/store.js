import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: [
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 1, price: 30.01, id: '0005' },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 2, price: 33.00, id: '0006' },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 3, price: 130.21, id: '0007' },
      { img: '/static/images/bag/product.png', name: 'PRODUCT NAME BALABALABALABALABALA BALABALA', count: 4, price: 1130.32, id: '0008' }
    ],
    isLogin: true,
    showLogin: false,
    dialogVisible: true
  },
  mutations: {
    set_cartlist (state, n) {
      state.cartlist = n
    },
    set_login (state, n) {
      state.isLogin = n
    },
    set_showLogin (state, n) {
      state.showLogin = n
    },
    set_dialogVisible (state, n) {
      state.dialogVisible = n
    }
  },
  actions: {

  }
})
