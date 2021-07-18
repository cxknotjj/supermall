<template>
  <div class="goodStyle" ref="aaa">
    <good-list-item v-for="item in Gooditem" :item="item"/>
  </div>
</template>

<script>
import goodListItem from "./GoodsListItem.vue";
// import BScroll from "better-scroll";
export default {
  name: 'goodlist',
  props: {
    Gooditem: {
      type: Array
    }
  },
  mounted() {
    // new BScroll(this.$refs.aaa, {

    // })
  },
  components: {
    goodListItem
  },
}
</script>

<style>
  .goodStyle{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>