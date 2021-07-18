<template>
  <div class="listItem">
    <img :src="item.show.img" @load="imgload">
     
    <div class="font">
      <p> {{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <i class="fa fa-star"></i>
      <span class="xxx">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit('itemImgLoad')
    },
  },
}
</script>

<style>
  .listItem{
    width: 48%;
    padding-bottom: 40px;
    position:relative;
    overflow: hidden;
  }
  .listItem img {
    width: 100%;
  }
  .listItem .font {
    font-size:12px;
    position: absolute;
    overflow: hidden;
    bottom: 5px;
    left:0;
    right:0;
    text-align:center;
  }
  .font p {
    margin-bottom:3px;
    /* 这里的text-overflow和white-space和配合使用才能生效 */
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .font .price {
    color:red;
    margin-right:10px;
  }


</style>