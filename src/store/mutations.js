import  {
  mustionBack,
  minBack
}from "./mutations-type.js"
export default {
  [mustionBack](state,payload) {
    payload.count++;
  },
  [minBack](state,payload) {
    payload.checked = true;
    state.cartList.push(payload);
  }
}