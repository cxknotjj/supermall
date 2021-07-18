<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
      @click="btnclick(index)">
      <span  :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    btnclick(index) {
      this.currentIndex = index;
      // 子传父事件
      this.$emit('itemclick', index);
    }
  }
}
</script>

<style scoped>
  .tab-control {
    width: 100%;
    display: flex;
  }
  .tab-control div {
    flex: 1;
    height: 40px;
    line-height: 30px;
    margin-left: 42px;
  }
  .active {
    color: rgba(223, 23, 156, 0.7);
    padding-bottom: 5px;
    border-bottom: 3px solid red;
  }
</style>