<template>
  <div class="leftBar">
    <bscroll class="content">
      <div class="flex">
        <div class="leftItem" :class="{active:currentIndex === index}" 
          @click="styleChange(index)" 
          v-for="(item,index) in list">
          {{item.title}}
        </div>
      </div>
    </bscroll>
  </div>
</template>

<script>
// import {getInfo} from "network/profile";
import bscroll from "components/common/scroll/Scroll";
export default {
  name:'prifileLeftBar',
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex:0,
    }
  },
  components: {
    bscroll
  },
  methods: {
  // 1.请求分类子信息
    // getPost(index) {
    //   const get = this.list[index].maitKey;
    //   console.log(get);
    //   getInfo(get).then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }
    styleChange(i) {
      this.currentIndex = i;
    }
  },
}
</script>

<style scoped>
  .leftBar {
    /* background-color:rgba(255,140,250,0.75); */
    color:gray;
  }
  .content {
    width: 100px;
    height:580px;
    overflow:hidden;
  }
  .flex {
    display: flex;
    flex-direction:column;
  }
  .leftItem {
    /* width: 70px; */
    text-align:center;
    padding:10px;
  }
  .active {
    border-left: 4px solid pink;
    color:red;
  }
</style>