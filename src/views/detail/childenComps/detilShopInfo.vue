<template>
  <div class="storeInterface">
    <div class="logo">
      <div class="content_n">
        <img :src="Shop.logo"/>
      </div>
      <span class="text">{{Shop.name}}</span>
    </div>
    <div class="evaluation">
      <div class="left">
        <div>{{Shop.sells}}</div>
        <div>总销量</div>
      </div>
      <div class="center">
        <div>{{Shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="right">
        <div v-for="(item,index) in Shop.score" class="pngjia">
          <span class="span1">{{item.name}}</span>
          <span class="span2">{{item.score}}</span>
          <div v-show="item.isBetter" class="slow">高</div>
          <div v-show="!item.isBetter" class="hig">低</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'detilShopInfo',
  props: {
    Shop: {
      type: Object,
    }
  }
}
</script>

<style scoped>
  .logo{
    padding: 23px 0px 23px 10px;
    display:flex;
  }
  .logo .content_n {
    width: 80px;
    height: 80px;
    overflow:hidden;
    border-radius: 50%;
  }
  .logo img{
    width: 80px;
    height: 80px;
  }
  .logo .text {
    padding-top:30px;
    padding-left:5px;
  }
  .evaluation{
    display:flex;
    padding:10px;
    padding-left:30px;
    text-align: center;
  }
  .evaluation .left {
    flex:1;
  }
  .left>div:first-child {
    font-size: 25px;
  }
  .left>div:last-child {
    font-size: 14px;
  }
  .evaluation .center {
    flex:1;
    border-right: 1px solid gray;
  }
  .center>div:first-child {
    font-size: 25px;
  }
  .center>div:last-child {
    font-size: 14px;
  }
  .evaluation .right {
    flex:2;
    display:flex;
    padding-left: 15px;
    flex-direction: column;
  }
  .right .span1 {
  }
  .right .span2 {
    padding-left: 15px;
  }
  .right>div>div {
    display:inline-block;
    color:white;
  }
  .right .slow{
    background-color: green;
    float:right;
    margin-right:20px;
  }
  .right .hig{
    background-color: red;
    float:right;
    margin-right:20px;
  }
</style>