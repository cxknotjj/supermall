import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false
// 使用vue实例来做事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
