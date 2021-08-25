<template>
  <div class="prod" v-if="goodsInfo.sizes">
    <div  class="size">
      <div class="sizeInfo" v-for="(item,index) in goodsInfo.sizes[0]">
          <div class="sizeInfoSize" v-for="i in item">
            {{i}}
          </div>
          <!-- <div class="sizeInfoSize" v-for="(xx,xi) in goodsInfo.sizes[0]">{{ind === 0 ?'':inx}}</div> -->
      </div>
        
    </div>
    <div class="imgIcon">
      <div class="imgflex" v-for="item in goodsInfo.infos">
        <div class="imgItem">{{item.key}}</div>
        <div class="imgItem">{{item.value}}</div>
      </div>
    </div>
    <div class="imgnnn" v-if="goodsInfo.image.length > 0">
      <img :src="goodsInfo.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object
    }
  },
  created() {
  }
}
</script>

<style scoped>
  .prod {
    font-size: 12px;
  }
  .size {
    border-top: 2px solid gray;
    padding-top: 10px;
  }
  .sizeInfo {
    display:flex;
    padding:5px;
    border-bottom: 1px solid gray;
  }
  .sizeInfoSize {
    flex:1;
  }
  .imgflex {
    display: flex;
    height: 30px;
    border-bottom: 1px solid gray;
    padding:5px;
  }
  .imgItem:last-child {
    margin-left: -80px;
    color: pink;
  }
  .imgItem {
    flex: 1;
  }
  .imgnnn img {
    width: 100%;
    height: 100%;
  }
</style>