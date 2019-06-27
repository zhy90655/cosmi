import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './api'
// import { fail } from 'assert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: [{
      img: '/static/images/bag/product.png',
      name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
      count: 1,
      price: 30.01,
      id: '0005'
    },
    {
      img: '/static/images/bag/product.png',
      name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
      count: 2,
      price: 33.00,
      id: '0006'
    },
    {
      img: '/static/images/bag/product.png',
      name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
      count: 3,
      price: 130.21,
      id: '0007'
    },
    {
      img: '/static/images/bag/product.png',
      name: 'PRODUCT NAME BALABALABALABALABALA BALABALA',
      count: 4,
      price: 1130.32,
      id: '0008'
    }
    ],
    isLogin: false,
    showLogin: false,
    dialogVisible: true,
    productList: [{
      id: '0001',
      kind: 'eyes',
      sub: 'Primer',
      productName: 'PRODUCT NAME1'
    },
    {
      id: '0002',
      kind: 'lips',
      sub: 'Lipgloss',
      productName: 'PRODUCT NAME2'
    },
    {
      id: '0003',
      kind: 'face',
      sub: 'eyeshadows',
      productName: 'PRODUCT NAME3'
    },
    {
      id: '0004',
      kind: 'hands',
      sub: 'french manicure',
      productName: 'PRODUCT NAME4'
    },
    {
      id: '0005',
      kind: 'face',
      sub: 'nascaras',
      productName: 'PRODUCT NAME5'
    }
    ]
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
    loginController (data) {
      debugger
      login(data).then(res => {
        console.log('success')
      })
    }
  }
})
