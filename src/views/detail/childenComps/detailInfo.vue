<template>
  <div v-if="dataInfo.detailImage">
    <div>
      <p>{{dataInfo.desc}}</p>
      <p>{{dataInfo.detailImage[0].key}}</p>
    </div>
    <img ref="img" @load="itemload" v-for="item in dataInfo.detailImage[0].list" :src="item">
  </div>
</template>

<script>
export default {
  props: {
    dataInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    itemload() {
      if (++this.count === this.$refs.img.length) {
        this.$emit('itemload');
      }
    }
  }

}
</script>

<style scoped>
  div>p {
    border-top: 2px solid gray;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>