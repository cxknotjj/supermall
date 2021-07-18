<template>
    <div class="tabbar-item" @click="btnclick">
      <!-- 具名插槽 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name:'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    btnclick() {
      this.$router.replace(this.path);
      console.log(this.path);
    }
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align:center;
  height: 49px;
  
}
.tabbar-item .fa{
  width: 24px;
  height: 24px;
  /* 去掉图片与文件之间的距离 */
  /* vertical-align: middle; */
  margin-bottom: 2px;
}
.tabbar-item div {
  margin-left: 5px;
  font-size:14px;
}
.a{
  color:red;
}
</style>