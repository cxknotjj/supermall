import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from "./store";
import toast from "components/common/toast";
import Fastclick from "fastclick";
import lazyload from "vue-lazyload";

// 1.安装toast插件
Vue.use(toast);

// 2.解决移动端300ms延迟。
Fastclick.attach(document.body);  

// 3.安装懒加载插件
Vue.use(lazyload,{
  // 占位图
  loading: ''
});
Vue.config.productionTip = false
// 4.使用vue实例来做事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

// 5.触摸滚动事件的修改
// document.addEventListener('touchmove', function (event) {
//   event.preventDefault();
// }, {
//   passive: false
// });
