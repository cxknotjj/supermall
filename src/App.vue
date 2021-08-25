<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar.vue";
export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style>
  @import "assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "./assets/css/base.css";
</style>
