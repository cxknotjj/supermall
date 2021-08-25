<template>
  <div >
    <swiper class="swiper-width">
      <swiper-item v-for="(item) in topImage">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import swiper from "components/common/swiper/swiper";
import swiperItem from "components/common/swiper/swiperItem";
export default {
  name:'detailSwiper',
  props: {
    topImage: {
      type: Array,
    },
  },
  components: {
    swiperItem,
    swiper
  }
}
</script>

<style scoped>
  .swiper-width {
    height: 400px;
    overflow:hidden;
  }
</style>