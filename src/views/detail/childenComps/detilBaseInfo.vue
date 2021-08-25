<template>
  <div class="storeTop">
    <div class="info">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newprice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount">{{goods.discount}}</span>
    </div><br>
    <div v-if="goods.columns" class="productInfo">
      <span class="count">{{goods.columns[0]}}</span>
      <span class="star">{{goods.columns[1]}}</span>
      <span class="demo">{{goods.columns[2]}}</span>
    </div>
    <div v-if="goods.columns" class="return">
      <div class="container">
        <img :src="goods.services[2].icon">
        <span class="size">{{goods.services[2].name}}</span>
      </div>
      <div class="container">
        <img :src="goods.services[0].icon">
        <span class="size">{{goods.services[0].name}}</span>
      </div>
      <div class="container">
        <img :src="goods.services[1].icon">
        <span class="size">{{goods.services[1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detilBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .storeTop{
    /* height: 200px; */
    padding: 5px;
  }
  .storeTop .info {
    font-size: 20px;
    padding-bottom:5px;
  }
  .storeTop .price {
    /* float:left; */
    margin-bottom:-15px;
    
  }
  .price .newPrice{
    font-size: 20px;
    color:pink;
  }
  .price .oldPrice {
    text-decoration:line-through;
    color:gray;
  }
  .productInfo{
    color:gray;
    border-bottom: 1px solid gray;
    padding:10px;
  }
    .productInfo .star {
      padding-left:91px;
  }
    .productInfo .demo {
    float:right;
    padding-right: 20px;
  }
  .return {
    padding:10px;
    border-bottom:1px solid gray;
    display:flex;
    width: 100%;
  }
  .container {
    flex: 1;
    padding-left:5px;
  }
  .return img {
    width:15px;
    height:15px;
    /* padding-top:3px; */
  }
  .size {
    font-size: 14px;
  }
</style>