<template>
  <div class="rightBar">
    <div class="rightmove">
      <scroll class="content">
        <div class="product">
          <div class="productinfo" v-for="item in arr">
            <img src="https://img14.360buyimg.com/img/s100x100_jfs/t5656/238/89543928/77783/181d573c/591579cdN7416629f.jpg!cc_100x100.webp" />
            <span>家用电器</span>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll";
export default {
  name:'prifileLeftBar',
  props: {

  },
  data() {
    return {
      arr: [1,2,3,4,5,6,7,8,9,7,1,0,2,5,5,5,5,5,5,5,5,5,5,5,5,5]
    }
  },
  components: {
    scroll,

  }
}
</script>

<style scoped>
  .rightBar {
    margin-top:10px;
    /* margin-left:120px; */
  }
  .product {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .rightmove {
    margin-left:150px;
  }
  .productinfo {
    display:flex;
    align-items: center;
    flex-direction:column;
    padding:10px;
  }
  .content {
    margin-left:120px;
    width: 250px;
    height:580px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  span {
    font-size: 13px;
    color: gray;
    display:block;
  }
</style>