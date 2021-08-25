<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cartListItem v-for="item in cartList" :item="item" :key="value"></cartListItem>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";
import {mapGetters} from "vuex";
import cartListItem from "./cartListItem";
export default {
  computed: {
    ...mapGetters(['computedLength','cartList'])
  },
  components: {
    scroll,
    cartListItem
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  
}
</script>

<style scoped>
  .cart-list {
    height: (100% - 44px - 49px - 40px;);
  }
  .wrapper {
    height: 100vh;
    overflow:hidden;
  }
</style>