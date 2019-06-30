import Vue from 'vue'
import Vuex from 'vuex'
import {
  address,
  deleteAddress,
  addAddress
} from './api'
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
    ],
    shippingAddress: [],
    billAddress: []
  },
  mutations: {
    setCartlist (state, n) {
      state.cartlist = n
    },
    setLogin (state, n) {
      state.isLogin = n
    },
    setShowLogin (state, n) {
      state.showLogin = n
    },
    setDialogVisible (state, n) {
      state.dialogVisible = n
    },
    setAddress (state, n) {
      state.shippingAddress = n
    },
    setBillAddress (state, n) {
      state.billAddress = n
    }
  },
  actions: {
    getAddress (content, data) {
      address(data).then(res => {
        if (res.success) {
          if (data === 1) {
            content.commit('setAddress', res.data)
          } else {
            content.commit('setBillAddress', res.data)
          }
        }
      })
    },
    delectedAddress (content, data) {
      deleteAddress(data).then(() => {
        console.log('success')
      })
    },
    addTheAddress (content, data, success, failed) {
      addAddress(data).then(res => {
        success && success(res)
      }).catch(error => {
        failed && failed(error)
      })
    }
  }
})
