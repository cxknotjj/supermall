import Vue from "vue";
import VueRouter from "vue-router";
import home from "views/home/home.vue"
import cart from "views/cart/cart.vue"
import category from "views/category/category.vue"
import profile from "views/profile/profile.vue"
import detail from "views/detail/detail";

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
  },
  {
    // 设置路径，这里的iid可以通过this.$route.params获取到
    path: '/detail/:iid',
    component: detail
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})