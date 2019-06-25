import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/base.less'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'

import domain from './domain.js'
Vue.config.productionTip = false
global.baseUrl = domain.baseUrl

new Vue({
  router,
  store,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
