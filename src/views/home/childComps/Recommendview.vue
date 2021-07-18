<template>
  <div class="rem">
    <div class="rem-v" v-for="(item,index) in recommend">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommendview',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    // console.log(this.recommend);
  }
}
</script>

<style>
  .rem {
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    color: black;
    padding: 10px 0 15px;
    border-bottom : 10px solid #eee;
  }
  .rem .rem-v {
    flex: 1;
  }
  .rem-v img {
    width: 75px;
    height: 75px;  
    margin-bottom:10px;
  }
</style>