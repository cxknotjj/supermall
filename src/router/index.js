import Vue from "vue";
import VueRouter from "vue-router";
import home from "views/home/home.vue"
import cart from "views/cart/cart.vue"
import category from "views/category/category.vue"
import profile from "views/profile/profile.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})