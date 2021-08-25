<template>
  <div class="detailBottomBar">
    <div class="content">
      <div class="witer">
        <i class="fa fa-star"></i>
      <div>客服</div>
      </div>
      <div class="storea">
        <i class="fa fa-star"></i>
        <div>店铺</div>
      </div>
      <div class="star">
        <i class="fa fa-star"></i>
        <div>收藏</div>
      </div>
    </div>
    <div class="content">
      <div @click="addToCart" class="shoping">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  }
}
</script>
<style scoped>
  .detailBottomBar {
    position: absolute;
    height: 49px;
    background-color:#fff;
    left: 0;
    right: 0;
    bottom: 49px;
    z-index:15;
    display:flex;
  }
  .content {
    flex:1;
    display:flex;
  }
  .storea {
    flex: 1;
  }
  .witer {
    flex: 1;
    margin-left:15px;
  }
  .witer i {
    color:pink;
  }
  div {
    text-align:center;
  }
  .star {
    flex: 1;
  }
  .shoping {
    width: 50%;
    background-color:yellow;
    font-size: 16px;
    line-height: 50px;
  }
  .buy {
    width: 50%;
    background-color:pink;
    font-size: 16px;
    line-height: 50px;
    color:white;
  }
</style>