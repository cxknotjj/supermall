
<template>
  <div class="to" ref="aaa">
    <nav-bar class="nav">
      <div slot="center">{{message}}</div>
    </nav-bar>
    <div class="content">
      <leftTab :list="list" />
      <right-info></right-info>
    </div>
  </div>
</template>

<script>
import leftTab from "./childenComps/profileLeftBar";
import navBar from "components/common/navbar/NavBar";
import {getInfo} from "network/profile";
import rightInfo from "./childenComps/profileRightInfo"
export default {
  name:'profile',
  data() {
    return {
      message:'商品分类',
      data: {},
      list: [],
    }
  },
  components: {
    navBar,
    leftTab,
    rightInfo
  },
  created() {
    // 1.请求分类信息
    getInfo().then(res => {
      const normal = res.data;
      this.data = normal.category;
      this.list = normal.category.list;
    }).catch(err => {
      console.log(err);
    })
  },
  mounted() {

  },
}
</script>

<style scoped>
  .to{
    position:relative;
    /* top:0px; */
  }
  .nav{
    background-color:pink;
    color:white;
  }
  .content {
    display:flex;
    /* align-items: flex-start; */
    justify-content: center;
  }
  
</style>