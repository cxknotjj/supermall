<template>
  <div class="buyContent">
    <div class="checked">
      <button-a @click.native="checkClick()" :isChecked="item.checked"></button-a>
    </div>
    <div class="img">
      <img :src="item.image" />
    </div>
    <div class="itemInfo">
        <p class="top">{{item.title}}</p>
        <p class="bottom">{{item.desc}}</p>
      <div class="itemBottom">
        <span class="price">￥{{item.price}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import buttonA from "components/content/checkButton/checkButton";
export default {
  props: {
    item: {
      type:Object
    }
  },
  components: {
    buttonA
  },
  methods: {
    checkClick() {
      let i = document.getElementsByClassName('icon');
      this.item.checked= !this.item.checked;
    }
  }
}
</script>

<style scoped>
  .buyContent {
    width: 100%;
    display:flex;
    border-bottom:1px solid gray;
    padding:5px;
  }
  .checked {
    flex:0.3;
    text-align:center;
  }
  .img {
    overflow:hidden;
    border-radius:10px;
    flex:1.5;
    width:100%;
    height:120px;
    margin:0px;
    margin-right:8px;
    box-sizing: border-box;
  }
  .img img {
    width:100%;
    height:100%;
    background-size:100% 100%;
  }
  .itemInfo {
    overflow:hidden;
    flex:3;
    padding-right:10px;
  }
  .itemInfo p {
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    /* margin-left:-10px; */
    text-align:center;
  }
  .itemInfo .top {
    font-size:16px;
    margin-top:5px;
  }
  .itemInfo .bottom {
    margin-top:-5px;
    font-size:14px;
    /* margin-left:-8px; */
    color:gray;
  }
  .itemBottom {
    display:flex;
    justify-content:space-between;
    /* margin-left:-3px; */
  }
  .price {
    color:orange;
    line-height:50px;
  }
  .count {
    line-height:50px;
    margin-right:10px;
  }
  .buttonof {
    line-height:130px;
  }
</style>