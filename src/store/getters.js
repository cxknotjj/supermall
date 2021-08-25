export default {
  computedLength(state,getters) {
    return state.cartList.length;
  },
  cartList(state,getters) {
    return state.cartList;
  }
}