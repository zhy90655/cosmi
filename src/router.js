import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/personalCenter/:item',
      name: 'personalCenter',
      component: () => import('./components/personal/PersonalCenter.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/products/:kind/:sub?/:productName?',
      name: 'products',
      component: () => import('./components/product/Products.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!Store.state.isLogin) {
      Store.commit('set_showLogin', true)
      next(false)
    } else next()
  } else next()
})

export default router
