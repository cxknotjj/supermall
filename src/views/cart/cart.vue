<template>
  <div class="cart">
    <!-- 1.导航栏 -->
    <nav-bar class="navBar">
      <div slot="center">购物车({{computedLength}})</div>
    </nav-bar>
    <!-- 2.展示的商品 -->
      <cart-list></cart-list>
      <bottom-bar></bottom-bar>
      <!--3.toast框  -->
      <!-- <toast @toastClick="4" :message="message" :show="isshow" /> -->
    <!-- 4.底部商品计算 -->
  </div>
</template>

<script>
// mapGetters辅助函数，它的作用是将store中的getter，映射到局部的计算属性
import {mapGetters} from "vuex";
import bottomBar from "./childComps/cartBottomBar";
import navBar from "components/common/navbar/NavBar";
import cartList from "./childComps/cartList";
export default {
  name:'cart',
  components: {
    navBar,
    cartList,
    bottomBar,
    // toast
  },
  computed: {
    // mapGetters的两种用法
    ...mapGetters(['computedLength','cartList'])
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  .cart {
    height: 100vh;
  }
  .navBar {
    background-color:pink;
    color:#fff;
  }
</style>