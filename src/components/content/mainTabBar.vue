<template>
  <div>
    <tabbar>
        <!-- 父传子 -->
        <!-- 在src中设置路径时，需要在别名前加上~ -->
      <tabBarItem class="aaa ignore" path='/home' activeColor='red'>
        <i slot="item-icon" class="fa fa-th fa-2x"></i>
        <i  slot="item-icon-active" class="fa fa-th fa-2x a"></i>
        <div slot='item-text'>首页</div>
      </tabBarItem>
      <tabBarItem class="aaa ignore" path='/cart' activeColor='blue'>
        <i slot="item-icon" class="fa fa-camera-retro fa-2x"></i>
        <i  slot="item-icon-active" class="fa fa-camera-retro fa-2x a"></i>
        <div slot='item-text'>购物车</div>
      </tabBarItem>
      <tabBarItem class="aaa ignore" path='/category' activeColor='pink'>
        <i slot="item-icon" class="fa fa-user-o fa-2x"></i>
        <i  slot="item-icon-active" class="fa fa-user-o fa-2x a"></i>
        <div slot='item-text'>我的</div>
      </tabBarItem>
      <tabBarItem class="aaa ignore" path='/profile' activeColor='green'>
        <i slot="item-icon" class="fa fa-tag fa-2x"></i>
        <i  slot="item-icon-active" class="fa fa-tag fa-2x a"></i>
        <div slot='item-text'>分类</div>
      </tabBarItem>
    </tabbar>
  </div>
</template>
<script>       // 为路径设置了一个别名components == sec/components
import tabbar from "components/common/tabbar/tabbar.vue"
import tabBarItem from "components/common/tabbar/tabBarItem.vue"
export default {
  name: 'mainTabBar',
  components: {
    tabbar,
    tabBarItem
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>