
import Toast from "./toast";
const obj = {

}
// 0.注意toast和Toast的差别。
// 1.使用install函数（参数是vue实例本身）
obj.install = function (Vue) {
  // 2.创建组件的结构器
  let toastContrustor = Vue.extend(Toast);
  // 3.通过new来创建一个组件对象
  let toast = new toastContrustor();
  // 4.把组件手动挂载
  toast.$mount(document.createElement('div'));
  // 5.将toast的元素插入body内
  document.body.appendChild(toast.$el);
  // 6.为vue原型传入toast
  Vue.prototype.$toast = toast;
}

export default obj;